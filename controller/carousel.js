const carouselService = require('../services/carousel')
const result = require('../utils/result')
class CarouselControll {
    async getCarouselList(ctx) {
        const res = await carouselService.getCarouselList(ctx.request.body);
        if (res) {
            ctx.body = result.success(res);
        } else {
            ctx.body = result.failed();
        }
    }
    async addCarousel(ctx) {
        try {
            const res = await carouselService.addCarousel(ctx.request.body);
            if (res) {
                ctx.body = result.success();
            } else {
                throw new Error('新增失败');
            }
        } catch (error) {
            ctx.body = result.failed(error.message);
        }
    }
    async deleteCarouse(ctx) {
        try {
            const res = await carouselService.deleteCarousel(ctx.params.id)
            if (res) {
                ctx.body = result.success()
            }
        } catch (error) {
            ctx.body = result.failed(error.message)
        }
    }
    async updateCarousel(ctx) {
        try {
            const res = await carouselService.updateCarousel(ctx.request.body)
            if (res) {
                ctx.body = result.success()
            }
        } catch (error) {
            ctx.body = result.failed(error.message)
        }
    }
}
module.exports = new CarouselControll()