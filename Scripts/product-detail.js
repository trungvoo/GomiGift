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

function seeMore(){
    if($(".main-section-product-detail-wrap-content").hasClass("show-more")){
        $(".main-section-product-detail-wrap-content").toggleClass("show-more", 2000);
        $(".main-section-product-detail-wrap-content-see-more").find("button").html("Xem thêm");
        $(".wrap-main-detail-content__show-more").toggleClass("active", 2000);
    }
    else{
        $(".main-section-product-detail-wrap-content").toggleClass("show-more", 2000);
        $(".main-section-product-detail-wrap-content-see-more").find("button").html("Thu gọn");
        $(".wrap-main-detail-content__show-more").toggleClass("active", 2000);
    }
}