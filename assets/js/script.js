  
  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.unique', {
        slidesPerView: 2.4,
        spaceBetween: 30,
        loop: true,
        Infinity:true,
        centeredSlides: false,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        navigation: {
            nextEl: '#slider-previouss-unique',
            prevEl: '#slider-nexts-unique',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 2.2,
                spaceBetween: 30,
            },
            1280: {
                slidesPerView: 2.8,
                spaceBetween: 30,
            },
        },
    });
  });




 