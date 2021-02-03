document.addEventListener('DOMContentLoaded', function () {
  new WOW().init();
});


document.addEventListener('DOMContentLoaded', function () {
var swiperMain = new Swiper('.swiper-main', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });
});

let userInfo = {
  nam: 'gblf',
  age: 'dsd'
}
console.log(userInfo);




  