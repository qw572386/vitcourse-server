const categoryControll = require('../controller/category')
module.exports = (router) => {
    router.get('/category', categoryControll.getCategoryList)
    router.post('/category/add', categoryControll.addCategory)
    router.post('/category/delete/:name', categoryControll.deleteCategory)
    router.post('/category/update', categoryControll.updateCategory)
}