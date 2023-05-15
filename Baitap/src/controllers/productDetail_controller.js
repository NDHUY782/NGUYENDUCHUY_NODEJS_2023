
const UserModel = require('../models/user_model');
const nodemailer = require('nodemailer')
const bcrypt = require('bcrypt');
const { set } = require('mongoose');
var session = require('express-session')
const randormString = require("randomstring")
const config = require('../configs/config')

const ProductModel = require('../models/product_model')


const ListProductDetail = async(req,res)=> {
    try {

        res.render('./../views/frontend/page/product_detail.ejs')
        
    } catch (error) {
        console.log(err.message)
    }
}
const ListDetail = async (req, res) => {
    
    try {
        const data_product_detail    = await ProductModel.findById({})

    return  data_product_detail

    } catch (error) {
        console.log(err.message)
    }
}
const getAll = async(req,res)=> { // (GetData for LIST, Pagination, Search)
    let condition = {}
    let keyword = paramsHelpers.getParam(req.query, 'keyword', '')
    let currentStatus = paramsHelpers.getParam(req.params, 'status', 'all')

    let categoryItems = await CategoryProductModel.find({status: 'active'}, { id: 1, name: 1 })
    let categoryItemsFilter = [...categoryItems];
    let arrIdCategory = []
    categoryItems.forEach(value => {
        arrIdCategory.push(value.id)
    })
    let sortField   = paramsHelpers.getParam(req.session, 'sortField', 'ordering')
    let sortType    = paramsHelpers.getParam(req.session, 'sortType', 'asc')
    let idCategory  = paramsHelpers.getParam(req.session, 'idCategory', '')
    let sort = {}

    categoryItemsFilter.unshift({ id: 'allvalue', name: 'All Category' })

    let pagination = {
        totalItem: 1,
        totalItemPerPage: 10,
        currentPage: parseInt(paramsHelpers.getParam(req.query, 'page', 1)),
        pageRange: 3
    }
    sort[sortField] = sortType

    condition.id_category = { $in: arrIdCategory }
    if (idCategory !== '' && idCategory !== 'allvalue') condition.id_category = idCategory
    if (currentStatus !== 'all') condition.status = currentStatus
    if (keyword !== '') condition.name = { $regex: keyword, $options: 'i' }

    let count = await ProductModel.count(condition)
    pagination.totalItem = count

    let data = await ProductModel
        .find(condition)
        .select('name avatar status ordering id_category created modified price discount')
        .sort(sort)
        .skip((pagination.currentPage - 1) * pagination.totalItemPerPage)
        .limit(pagination.totalItemPerPage)

    return {
        data,
        currentStatus,
        keyword,
        pagination,
        categoryItems,
        categoryItemsFilter,
        sortField,
        sortType,
        idCategory
    }

}

module.exports = {
    ListProductDetail,
    ListDetail,
    getAll,
}
