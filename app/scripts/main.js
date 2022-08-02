const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    speed: 500,
    effect: 'slide',

    // pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

TweenMax.fromTo('.topbar',1 , {y: '50px',opacity: 0}, {y: '0px', delay:0.1,opacity: 1, ease: Power2.easeInOut})
TweenMax.fromTo('.banner__img img',1 , {x: '100px',opacity: 0}, {x: '0px', delay:0.3,opacity: 1,ease: Power2.easeInOut})
TweenMax.fromTo('.banner__title',1 , {y: '50px',opacity: 0}, {y: '0px',delay:0.1,opacity: 1, ease: Power2.easeInOut})
TweenMax.fromTo('.banner__subtitle',1 , {y: '50px',opacity: 0}, {y: '0px', delay:0.125,opacity: 1, ease: Power2.easeInOut})
TweenMax.fromTo('.banner__btn',1 , {y: '50px',opacity: 0}, {y: '0px', delay:0.15,opacity: 1, ease: Power2.easeInOut})
TweenMax.fromTo('.swiper-pagination',1 , {y: '50px',opacity: 0}, {y: '0px', delay:0.175,opacity: 1, ease: Power2.easeInOut})
TweenMax.fromTo('.nav__logo',1 , {x: '-50px',opacity: 0}, {x: '0px', delay:0.2,opacity: 1, ease: Power2.easeInOut})
TweenMax.fromTo('.nav__menu',1 , {x: '50px',opacity: 0}, {x: '0px', delay:0.2,opacity: 1, ease: Power2.easeInOut})
