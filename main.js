let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    joystick.classList.remove('active');
}

let joystick = document.querySelector('.gameconsoles');

document.querySelector('#joystick-icon').onclick = () => {
    joystick.classList.toggle('active');
}

var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        340: {
            slidesPerView: 1.5,
            spaceBetween: 5,
          },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3.5,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 4.5,
        spaceBetween: 20,
      },
    },
  });

  window.onscroll = function() {mufunction()};

  function mufunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("scroll-bar").style.width = scrolled + '%';
  }