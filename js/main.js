$(document).ready(function () {
   $(".products__slider").slick({
      nextArrow: `<button class="slider-btn slider-btn__right">
      <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.78161 17L9 9L0.78161 1"/>
      </svg>
   </button>
   `,
      prevArrow: `<button class="slider-btn slider-btn__left">
      <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.21839 1L1 9L9.21839 17"/>
      </svg>
   </button>
   `,
      infinite: false,
   });

   $(".questions__item-title").on("click", function () {
      $(".questions__item").removeClass("questions__item--active");
      $(this).parent().addClass("questions__item--active");
   });

   $("#fullpage").fullpage({
      sectionSelector: "section",
      autoScrolling: true,
      scrollingSpeed: 500,
      scrollOverflow: true,
      anchors: [
         "top",
         "products",
         "benefits",
         "features",
         "questions",
         "contacts",
      ],
      menu: "#header__nav",
   });

   const toggleMenu = (selector) => {
      $(selector).on("click", () => {
         $(".menu__btn").toggleClass("menu__btn--active");
         $(".menu__list").toggleClass("menu__list--active");
      });
   };

   toggleMenu(".menu__btn");
   toggleMenu(".menu__list-link");
   toggleMenu(".logo");
});
