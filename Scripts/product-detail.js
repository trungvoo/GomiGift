$(function(){
    swiperJs();
});


function swiperJs(){

    const swiper_thumbs = new Swiper('.swiper-product-list-detail', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 5
  });

    new Swiper('.swiper-product-detail', {
        loot: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        thumbs: {
            swiper: swiper_thumbs,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
  });

}