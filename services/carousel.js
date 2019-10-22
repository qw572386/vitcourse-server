const CarouselModel = require('../models/carousel')
class CarouselService {
    async getCarouselList() {
        return await CarouselModel.find()
    }
    async addCarousel(params) {
        const { id, src } = params;
        const result = await CarouselModel.findOne({id});
        if (result) {
            throw new Error('已存在')
        }
        const carousel = new CarouselModel({
            id,
            src
        });
        await carousel.save();
        return carousel;
    }
    async deleteCarousel(id) {
        const result = await CarouselModel.findOneAndDelete({ id })
        if (!result) {
            throw new Error('删除失败')
        } else {
            return result
        }
    }
    async updateCarousel(params) {
        const result = await CarouselModel.findOneAndUpdate({ id: params.id }, params)
        if (!result) {
            throw new Error('修改失败')
        } else {
            return result;
        }
    }
}
module.exports = new CarouselService()

