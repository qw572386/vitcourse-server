const tagsControll = require('../controller/tags')
module.exports = (router) => {
    router.get('/tags', tagsControll.getTagList)
    router.post('/tags/add', tagsControll.addTag)
    router.post('/tags/delete/:name', tagsControll.deleteTag)
    router.post('/tags/update', tagsControll.updateTag)
}