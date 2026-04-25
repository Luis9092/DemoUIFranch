var swiper = new Swiper(".card-slider", {
   spaceBetween: 36,
        loop: true,
        pagination: true,
        centeredSlides: false,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        keyboard: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1, // 2 slides en pantallas pequeñas
            },
            768: {
                slidesPerView: 2, // 3 slides en tabletas
            },
            1024: {
                slidesPerView: 3, // 4 slides en pantallas grandes
            },
            1200: {
                slidesPerView: 3, // 5 slides en pantallas extra grandes
            },
        },
});

