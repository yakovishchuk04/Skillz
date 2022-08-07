$(function(){
    $('.comment__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });
    
    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active')
    });
});