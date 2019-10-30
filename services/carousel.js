const CarouselModel = require('../models/carousel')
class CarouselService {
    async getCarouselList() {
        return await CarouselModel.find()
    }
    async addCarousel(params) {
        const { lessonid, src } = params;
        const result = await CarouselModel.findOne({ lessonid });
        if (result) {
            throw new Error('已存在')
        }
        const carousel = new CarouselModel({
            lessonid,
            src
        });
        await carousel.save();
        return carousel;
    }
    async deleteCarousel(id) {
        const result = await CarouselModel.findOneAndDelete({ _id: id })
        if (!result) {
            throw new Error('删除失败')
        } else {
            return result
        }
    }
    async updateCarousel(params) {
        const result = await CarouselModel.findOneAndUpdate({ _id: params.id }, params)
        if (!result) {
            throw new Error('修改失败')
        } else {
            return result;
        }
    }
}
module.exports = new CarouselService()

