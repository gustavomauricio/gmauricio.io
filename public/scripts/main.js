$(document).ready(function () {
  "use strict";

  // Smooth scroll to inner links
  $(".nav-link").each(function () {
    var href = $(this).attr("href");
    if (href.charAt(0) !== "#") {
      $(this).removeClass("nav-link");
    }
  });

  if ($(".nav-link").length) {
    $(".nav-link").smoothScroll({ speed: 800 });
  }

  // Change nav when scroll
  $(function () {
    var header = $(".navbar");
    var navLink = $(".nav-link");

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 60) {
        header.addClass("scrolled");
        navLink.addClass("scrolled");
        header.removeClass("navbar-dark");
        header.addClass("navbar-light");
      } else {
        header.removeClass("scrolled");
        navLink.removeClass("scrolled");
        header.removeClass("navbar-light");
        header.addClass("navbar-dark");
      }
    });
  });

  // Adds class to nav items when scrolling respective section
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".nav-link").each(function () {
      var href = $(this).attr("href");
      if (scroll + window.innerHeight === document.body.offsetHeight) {
        $(".nav-link").removeClass("color-primary");
        $("a[href*='contact']").addClass("color-primary");
      }
      if (
        scroll > $(href).offset().top - 1 &&
        scroll < $(href).offset().top + $(href).outerHeight()
      ) {
        $(".nav-link").removeClass("color-primary");
        $(this).addClass("color-primary");
      }
    });
  });

  $(".nav-link").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });

  // $("#skills-car").swipe({
  //   swipe: function (event, direction) {
  //     var dots = $(".dot");
  //     var activeDot = $(".dot.active");
  //     var activeIndex = dots.index(activeDot);

  //     if (direction == "right") {
  //       if (activeIndex !== 0) {
  //         activeDot.removeClass("active");
  //         dots.eq(activeIndex - 1).addClass("active");
  //         currentSkill(activeIndex - 1);
  //       }
  //     } else if (direction == "left") {
  //       if (activeIndex !== dots.length - 1) {
  //         activeDot.removeClass("active");
  //         dots.eq(activeIndex + 1).addClass("active");
  //         currentSkill(activeIndex + 1);
  //       }
  //     }
  //   },
  //   allowPageScroll: "auto",
  // });
});

function currentSkill(dotIndex) {
  var children = $("#skills-car").children("[id]");
  children.each(function (index) {
    $(this).addClass("hidden");
    if (index == dotIndex) $(this).removeClass("hidden");
  });
}
