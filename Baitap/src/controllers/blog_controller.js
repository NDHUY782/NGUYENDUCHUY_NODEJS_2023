const routerName = 'blogs';
const renderName = `frontend/page/${routerName}`;

const BlogService = require(`${__path_services}frontend/blog_service`);

module.exports = {
    ListMenu: async (req , res , next) => {
        let { data_menu, data_slider } =   await BlogService.ListMenu(req, res)
        res.render('frontend/page/home' , {
            data_menu,
            data_slider
        })
    },

    ListProduct: async (req , res , next) => {
        res.render('frontend/page/product')
    },

    ListBlog: async (req , res , next) => {
        let { data_blog } =   await BlogService.ListBlog(req, res)
        res.render('frontend/page/blog', {
            data_blog,
        })
    },

    ListBlogDetail: async (req , res , next) => {
        let { data_blog_detail } =   await BlogService.ListBlogDetail(req, res)
        res.render('frontend/page/blog_detail',{
            data_blog_detail
        })
    },

    
}