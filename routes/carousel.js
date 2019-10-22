const carouselControll = require('../controller/carousel')
module.exports = (router) => {
    router.get('/carousel', carouselControll.getCarouselList)
    router.post('/carousel/add', carouselControll.addCarousel)
    router.post('/carousel/delete/:id', carouselControll.deleteCarouse)
    router.post('/carousel/update', carouselControll.updateCarousel)
}