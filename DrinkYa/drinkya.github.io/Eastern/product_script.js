const menuInfo = document.querySelector('.menu-info');
const carousel = document.querySelector('.carousel');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4;

    const boxTop = menuInfo.getBoundingClientRect().top;
    const carouselTop = carousel.getBoundingClientRect().top;
    if(boxTop < triggerBottom){
        menuInfo.classList.add('show');
    }
    else{
        menuInfo.classList.remove('show')
    }

    if(carouselTop < triggerBottom){
        carousel.classList.add('show');
    }
    else{
        carousel.classList.remove('show');
    }

}

var burger = document.getElementById('burger');
var nav = document.querySelector('.nav');

function toggleNav(){
  if(nav.style.display == "none"){
    nav.style.display = "block";
  }
  else{
    nav.style.display = "none"
  }
}

$(document).ready(function () {
    // 捲軸偵測距離頂部超過 50 才顯示按鈕
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        if ($(".back-top").hasClass("hide")) {
          $(".back-top").toggleClass("hide");
        }
      } else {
        $(".back-top").addClass("hide");
      }
    });
  
    // 點擊按鈕回頂部
    $(".back-top").on("click", function (event) {
      $("html, body").animate(
        {
          scrollTop: 0
        },
        500 // 回頂部時間為 500 毫秒
      );
    });
  });