const categoryService = require('../services/category')
const result = require('../utils/result')
class CategoryControll {
    async getCategoryList(ctx) {
        const res = await categoryService.getCategoryList(ctx.request.body);
        if (res) {
            ctx.body = result.success(res);
        } else {
            ctx.body = result.failed();
        }
    }
    async addCategory(ctx) {
        try {
            const res = await categoryService.addCategory(ctx.request.body);
            if (res) {
                ctx.body = result.success();
            } else {
                throw new Error('新增失败');
            }
        } catch (error) {
            ctx.body = result.failed(error.message);
        }
    }
    async deleteCategory(ctx) {
        try {
            const res = await categoryService.deleteCategory(ctx.params.name)
            if (res) {
                ctx.body = result.success()
            }
        } catch (error) {
            ctx.body = result.failed(error.message)
        }
    }
    async updateCategory(ctx) {
        try {
            const res = await categoryService.updateCategory(ctx.request.body)
            if (res) {
                ctx.body = result.success()
            }
        } catch (error) {
            ctx.body = result.failed(error.message)
        }
    }
}
module.exports = new CategoryControll()