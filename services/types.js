const TypesModel = require('../models/types')
class TypeService {
    async getTypeList() {
        return await TypesModel.find()
    }
    async addType(params) {
        const { name } = params;
        const result = await TypesModel.findOne({ name });
        if (result) {
            throw new Error('已存在')
        }
        const type = new TypesModel({
            name
        });
        await type.save();
        return type;
    }
    async deleteType(name) {
        const result = await TypesModel.findOneAndDelete({ name })
        if (!result) {
            throw new Error('删除失败')
        } else {
            return result
        }
    }
    async updateType(params) {
        const result = await TypesModel.findOneAndUpdate({ _id: params.id }, params)
        if (!result) {
            throw new Error('修改失败')
        } else {
            return result;
        }
    }
}
module.exports = new TypeService()

