const typesControll = require('../controller/types')
module.exports = (router) => {
    router.get('/types', typesControll.getTypeList)
    router.post('/types/add', typesControll.addType)
    router.post('/types/delete/:name', typesControll.deleteType)
    router.post('/types/update', typesControll.updateType)
}