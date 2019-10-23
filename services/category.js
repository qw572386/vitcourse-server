const CategoryModel = require('../models/category')
class CategoryService {
    async getCategoryList() {
        return await CategoryModel.find()
    }
    async addCategory(params) {
        const { name } = params;
        const result = await CategoryModel.findOne({ name });
        if (result) {
            throw new Error('已存在')
        }
        const category = new CategoryModel({
            name
        });
        await category.save();
        return category;
    }
    async deleteCategory(name) {
        const result = await CategoryModel.findOneAndDelete({ name })
        if (!result) {
            throw new Error('删除失败')
        } else {
            return result
        }
    }
    async updateCategory(params) {
        const result = await CategoryModel.findOneAndUpdate({ _id: params.id }, params)
        if (!result) {
            throw new Error('修改失败')
        } else {
            return result;
        }
    }
}
module.exports = new CategoryService()

