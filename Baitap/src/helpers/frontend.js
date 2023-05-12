
const MenuService = require(`${__path_services}/menu_service`);
const SettingService = require(`${__path_services}/setting_service`);
const CategoryService = require(`${__path_services}/category_service`);

module.exports = {
    getMenu: async (req) => {
        const data = await MenuService.getAll(req)
        return data
    },
    
} ;