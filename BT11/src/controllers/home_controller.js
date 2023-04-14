const routerName = 'home';
const renderName = `frontend/page/${routerName}`;

const HomeService = require(`${__path_services}frontend/home_service`);

module.exports = {
    ListMenu: async (req , res , next) => {
        let { data_menu, data_slider } =   await HomeService.ListMenu(req, res)
        res.render('frontend/page/home' , {
            data_menu,
            data_slider
        })
    },

    ListProduct: async (req , res , next) => {
        res.render('frontend/page/product')
    },

    ListBlog: async (req , res , next) => {
        let { data_blog } =   await HomeService.ListBlog(req, res)
        res.render('frontend/page/blog', {
            data_blog,
        })
    },

    ListBlogDetail: async (req , res , next) => {
        let { data_blog_detail } =   await HomeService.ListBlogDetail(req, res)
        res.render('frontend/page/blog_detail',{
            data_blog_detail
        })
    },

    
}