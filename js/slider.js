var mySwiper = new Swiper('.swiper-container', {

    direction: 'vertical',

    speed: 700,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
    },

    mousewheel: {
        releaseOnEdges: true,
    },

    keyboard: true,
})
