const tagsService = require('../services/tags')
const result = require('../utils/result')
class TagControll {
    async getTagList(ctx) {
        const res = await tagsService.getTagList(ctx.request.body);
        if (res) {
            ctx.body = result.success(res);
        } else {
            ctx.body = result.failed();
        }
    }
    async addTag(ctx) {
        try {
            const res = await tagsService.addTag(ctx.request.body);
            if (res) {
                ctx.body = result.success();
            } else {
                throw new Error('新增失败');
            }
        } catch (error) {
            ctx.body = result.failed(error.message);
        }
    }
    async deleteTag(ctx) {
        try {
            const res = await tagsService.deleteTag(ctx.params.name)
            if (res) {
                ctx.body = result.success()
            }
        } catch (error) {
            ctx.body = result.failed(error.message)
        }
    }
    async updateTag(ctx) {
        try {
            const res = await tagsService.updateTag(ctx.request.body)
            if (res) {
                ctx.body = result.success()
            }
        } catch (error) {
            ctx.body = result.failed(error.message)
        }
    }
}
module.exports = new TagControll()