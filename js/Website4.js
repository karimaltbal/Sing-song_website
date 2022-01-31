$(document).ready(function(){
   
    $(function(){
        $('body').niceScroll({
            cursorcolor: "#E52A70",
            cursorwidth: "8px",
            cursorborder: 'none',
            zindex: '10'
        })
    })
/**************************************************************** */
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
})

