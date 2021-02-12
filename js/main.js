$(document).ready(() => {

    $('.category').click((e) => {
        let currentElem = $(e.target);
        $('#burgers').hide();
        $('#fries').hide();
        $('#sauces').hide();
        $('#drinks').hide();
        let id = currentElem.data('id');
        $('#' + id).show();

        $('.category__btn').removeClass('category__btn_active');
        $(currentElem).addClass('category__btn_active');

        $('#' + id + ' .products').slick('refresh');
        $('#' + id + ' .products-nav').slick('refresh');
    });

    $('.burgers-wrap .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.burgers-wrap .products-nav'
    });
    $('.burgers-wrap .products-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        asNavFor: '.burgers-wrap .products',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
    });

    $('.fries-wrap .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.fries-wrap .products-nav'
    });
    $('.fries-wrap .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.fries-wrap .products',
        dots: false,
        centerMode: true,
        infinite: false,
        focusOnSelect: true
    });

    $('.sauces-wrap .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.sauces-wrap .products-nav'
    });
    $('.sauces-wrap .products-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.sauces-wrap .products',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
    });


    $('.drinks-wrap .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.drinks-wrap .products-nav'
    });
    $('.drinks-wrap .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.drinks-wrap .products',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
    });

});