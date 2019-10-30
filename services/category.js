const CategoryModel = require('../models/category')
class CategoryService {
    async getCategoryList() {
        const categorys = await CategoryModel.find();
        const cate = [];
        for (let i = categorys.length - 1; i >= 0; i--) {
            if (categorys[i].type === '分类') {
                cate.push({
                    id: categorys[i].id,
                    name: categorys[i].name,
                    parentid: categorys[i].parentid,
                    type: categorys[i].type,
                    sortnum: categorys[i].sortnum,
                    children: []
                });
                categorys.splice(i, 1);
            }
        }
        for (let i = categorys.length - 1; i >= 0; i--) {
            if (categorys[i].type === '类别') {
                for (let j = 0; j < cate.length; j++) {
                    const item = cate[j];
                    if (item.id == categorys[i].parentid) {
                        item.children.push({
                            id: categorys[i].id,
                            name: categorys[i].name,
                            parentid: categorys[i].parentid,
                            type: categorys[i].type,
                            src: categorys[i].src,
                            sortnum: categorys[i].sortnum
                        });
                        categorys.splice(i, 1);
                        break;
                    }
                }
            }
        }
        return cate;
    }
    async addCategory(params) {
        const { name } = params;
        const result = await CategoryModel.findOne({ name });
        if (result) {
            throw new Error('已存在')
        }
        const category = new CategoryModel(params);
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

