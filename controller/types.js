const typeService = require('../services/types')
const result = require('../utils/result')
class TypeControll {
    async getTypeList(ctx) {
        const res = await typeService.getTypeList(ctx.request.body);
        if (res) {
            ctx.body = result.success(res);
        } else {
            ctx.body = result.failed();
        }
    }
    async addType(ctx) {
        try {
            const res = await typeService.addType(ctx.request.body);
            if (res) {
                ctx.body = result.success();
            } else {
                throw new Error('新增失败');
            }
        } catch (error) {
            ctx.body = result.failed(error.message);
        }
    }
    async deleteType(ctx) {
        try {
            const res = await typeService.deleteType(ctx.params.name)
            if (res) {
                ctx.body = result.success()
            }
        } catch (error) {
            ctx.body = result.failed(error.message)
        }
    }
    async updateType(ctx) {
        try {
            const res = await typeService.updateType(ctx.request.body)
            if (res) {
                ctx.body = result.success()
            }
        } catch (error) {
            ctx.body = result.failed(error.message)
        }
    }
}
module.exports = new TypeControll()