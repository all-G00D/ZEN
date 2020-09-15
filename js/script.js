$(document).ready(function () {


    /* Slider slick on .slides */
    $(".slider").slick({
        fade: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        waitForAnimate: false
    });


    /* Slider slick on .gallery */
    $(".gallery__photo").slick({
        arrows: true,
        adaptiveHeight: true,

        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        speed: 1000,

        draggable: true,
        swipe: true,
        waitForAnimate: false,

        asNavFor: ".gallery__title"
    });


    $(".gallery__title").slick({
        arrows: false,
        dots: true,
        fade: true,
        speed: 1500,

        draggable: true,
        swipe: true,
        waitForAnimate: false,

        asNavFor: ".gallery__photo"
    });


    $(function () {
        $("#phone").mask("+ (375) 99 - 999-99-99");
    });


    jQuery.validator.addMethod("checkMaskPhone", function (value, element) {
        return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
    });

    var form = $("#form");

    form.validate();

    // вешаем валидацию на поле с телефоном по классу
    $.validator.addClassRules({
        "#phone": {
            checkMaskPhone: true,
        }
    });

    // Проверка на валидность формы при отправке, если нужно
    form.submit(function (e) {
        e.preventDefault();
        if (form.valid()) {
            smoke.alert("Форма отправлена.<br> Спасибо за фидбэк!");
            form.trigger("reset");
        }
        return;
    });
    
    
});
