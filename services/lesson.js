const LessonModel = require('../models/lesson')
class LessonService {
    async getLessonList(params) {
        const { pageNo = 1, pageSize = 10, tag = '', category = '' } = params;
        let arrTag;
        let arrCategory;
        // params = { ...params, tags: null, category: null }
        if (tag) {
            arrTag = tag.split(',');
            params.tags = { '$in': arrTag };
        }
        if (category) {
            arrCategory = category.split(',');
            params.category = { '$in': arrCategory };
        }
        return await LessonModel.find(params).skip(pageSize * (pageNo - 1)).limit(pageSize).sort({ createTime: -1 })
    }
    async getLessonById(id) {
        const result = await LessonModel.findOne({ _id: id });
        if (!result) {
            throw new Error('文章不存在')
        } else {
            return result
        }
    }
    async addLesson(params) {
        const lesson = new LessonModel(params);
        await lesson.save();
        return lesson;
    }
    async deleteLesson(id) {
        const result = await LessonModel.findOneAndDelete({ _id: id })
        if (!result) {
            throw new Error('删除失败')
        } else {
            return result
        }
    }
    async updateLesson(params) {
        const result = await LessonModel.findOneAndUpdate({ _id: params.id }, params)
        if (!result) {
            throw new Error('修改失败')
        } else {
            return result;
        }
    }
}
module.exports = new LessonService()

