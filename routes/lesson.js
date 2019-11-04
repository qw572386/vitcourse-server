const lessonControll = require('../controller/lesson')
module.exports = (router) => {
    router.get('/lesson', lessonControll.getLessonList)
    router.post('/lesson/add', lessonControll.addLesson)
    router.post('/lesson/delete/:id', lessonControll.deleteLesson)
    router.post('/lesson/update', lessonControll.updateLesson)
}