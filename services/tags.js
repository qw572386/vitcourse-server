const TagsModel = require('../models/tags')
class TagsService {
    async getTagList() {
        return await TagsModel.find()
    }
    async addTag(params) {
        const { name, nickname } = params;
        const result = await TagsModel.findOne({ name });
        if (result) {
            throw new Error('已存在')
        }
        const tag = new TagsModel({
            name,
            nickname
        });
        await tag.save();
        return tag;
    }
    async deleteTag(name) {
        const result = await TagsModel.findOneAndDelete({ name })
        if (!result) {
            throw new Error('删除失败')
        } else {
            return result
        }
    }
    async updateTag(params) {
        const result = await TagsModel.findOneAndUpdate({ _id: params.id }, params)
        if (!result) {
            throw new Error('修改失败')
        } else {
            return result;
        }
    }
}
module.exports = new TagsService()

