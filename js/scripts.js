//nav open/close
$(() => {
  $("#nav-toggle").on("click", () => {
    if ($(window).width() < 1296) {
      // open navigation only on screens smaller than 1024px
      $("#nav").toggleClass("active");
      $("#header").toggleClass("active");
      $(".logo").toggleClass("active");
      $(".nav-toggle").toggleClass("active");
    }
  });
});

$(() => {
  $(window).on("resize", () => {
    $("#nav").removeClass("active");
    $("#header").removeClass("active");
    $(".logo").removeClass("active");
    $(".nav-toggle").removeClass("active");
  });
});

//Nav Resize on scroll
$(() => {
  $(window).on("scroll load", () => {
    var $wScroll = $(window).scrollTop();
    var $header = $("#header");
    if ($wScroll >= 50) {
      $header.addClass("scrolled");
    } else {
      $header.removeClass("scrolled");
    }
  });
});

//section scrollspy
$(() => {
  $(window).bind("scroll", function () {
    var currentTop = $(window).scrollTop();
    var section = $(".topic-section");
    section.each(function (index) {
      var elemTop = $(this).offset().top - 150;
      var elemBottom = elemTop + $(this).height();
      if (currentTop >= elemTop && currentTop <= elemBottom) {
        var id = $(this).attr("id");
        var navElem = $('.nav-scrollspy a[href="#' + id + '"]');
        navElem.parent().addClass("active").siblings().removeClass("active");
      }
    });
  });
});

//keyfinding
$(() => {
  $(".keyfinding-slides").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });
  //relocate dots and arrows
  $(".keyfinding-slides").each(function () {
    var $this = $(this);
    var $controls = $(this)
      .parent(".keyfinding-slides-wrap")
      .find(".keyfinding-slides-controls");
    var $controlsArrows = $(this)
      .parent(".keyfinding-slides-wrap")
      .find(".keyfinding-slides-arrows");
    $this.find(".slick-prev").html('<i class="icon icon-arrow-left"></i>');
    $this.find(".slick-next").html('<i class="icon icon-arrow-right"></i>');
    $this.find(".slick-arrow").prependTo($controlsArrows);
    $this.find(".slick-dots").prependTo($controls);
  });
});

//tab
$(() => {
  //show new panel function
  function ShowNewPanel(theLink, theTab, thePane) {
    //activate new pane
    theTab.find(".tab-pane.active").fadeOut(200, function () {
      $(this).removeClass("active");
      $(thePane).fadeIn(200, function () {
        $(this).addClass("active");
      });
    });

    //activate new link
    theTab.find(".tab-nav li").removeClass("active");
    theTab
      .find('.tab-nav a[href="' + thePane + '"]')
      .parent("li")
      .addClass("active");
  }

  //Using Tab Links
  $(".tab .tab-nav ul li a, a.tab-anchor").on("click", function () {
    var $theLink = $(this);
    var $theTab = $theLink.closest(".tab");
    var $thePane = $theLink.attr("href");
    ShowNewPanel($theLink, $theTab, $thePane);
  });
});

//footer sunscribe
$(() => {
  $(".footer-subscribe_input").on("keyup", function () {
    if ($(this).val() !== "") {
      $(".footer-subscribe_btn").attr("disabled", false);
    } else {
      $(".footer-subscribe_btn").attr("disabled", true);
    }
  });
});

// form validation
$(() => {
  $("#contact-form").on("submit", function (e) {
    e.preventDefault();
    $(this)
      .find(".form-input")
      .each(function () {
        var $this = $(this);
        if ($this.val() !== "") {
          $this.removeClass("error");
          $this.next(".error-message").hide();
        } else {
          $this.addClass("error");
          $this.next(".error-message").show();
        }
      });
  });

  function validateForm() {
    var isValid = true;
    $("#contact-form .form-input").each(function () {
      if ($(this).val() === "") isValid = false;
    });
    return isValid;
  }

  $("#contact-form")
    .find(".form-input")
    .on("keyup", function () {
      if (validateForm() === true) {
        $(".contact-form_submit").attr("disabled", false);
      } else {
        $(".contact-form_submit").attr("disabled", true);
      }
    });
});
