const lessonService = require('../services/lesson')
const result = require('../utils/result')
class LessonControll {
    async getLessonList(ctx) {
        const res = await lessonService.getLessonList(ctx.request.body);
        if (res) {
            ctx.body = result.success(res);
        } else {
            ctx.body = result.failed();
        }
    }
    async getLessonById(ctx) {
        const res = await lessonService.getLessonById(ctx.request.params.id);
        if (res) {
            ctx.body = result.success(res);
        } else {
            ctx.body = result.failed();
        }
    }
    async addLesson(ctx) {
        try {
            const res = await lessonService.addLesson(ctx.request.body);
            if (res) {
                ctx.body = result.success();
            } else {
                throw new Error('新增失败');
            }
        } catch (error) {
            ctx.body = result.failed(error.message);
        }
    }
    async deleteLesson(ctx) {
        try {
            const res = await lessonService.deleteLesson(ctx.params.id)
            if (res) {
                ctx.body = result.success()
            }
        } catch (error) {
            ctx.body = result.failed(error.message)
        }
    }
    async updateLesson(ctx) {
        try {
            const res = await lessonService.updateLesson(ctx.request.body)
            if (res) {
                ctx.body = result.success()
            }
        } catch (error) {
            ctx.body = result.failed(error.message)
        }
    }
}
module.exports = new LessonControll()