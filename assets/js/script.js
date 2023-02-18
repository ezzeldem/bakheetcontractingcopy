$(document).ready(function () {
  $(document).click(function (e) {
    $(".child-box , .nav-section .search-box").hide();
    $(".nav-section .nav-box > ul > li a").removeClass("active");
  });

  $(" .nav-section ").click(function (e) {
    e.stopPropagation();
  });
  $(".nav-section .icon-box-container .icon-box.search-icon").click(function (
    e
  ) {
    e.preventDefault();
    $(".nav-section .search-box").show();
    $(".child-box").hide();
  });
  $(" .nav-section .nav-box > ul > li").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).children("a").addClass("active");
    $(this).children(".child-box").show();
    $(this).siblings("li").children(".child-box").hide();
    $(this).siblings("li").children("a").removeClass("active");
  });

  // mobile menu

  $(".nav-section .icon-box-container .icon-box.menu-icon .open").click(
    function (e) {
      e.preventDefault();
      $(".nav-section .mobile-menu").fadeIn();
      $(this).hide();
      $(this).siblings(".close").show();
      $("body").addClass("overflow-hidden");
    }
  );
  $(".nav-section .icon-box-container .icon-box.menu-icon .close").click(
    function (e) {
      e.preventDefault();
      $(".nav-section .mobile-menu").fadeOut();
      $(this).siblings(".open").show();
      $(this).hide();
      $("body").removeClass("overflow-hidden");
    }
  );
  AOS.init();
});
