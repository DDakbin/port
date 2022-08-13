   
$('.list li').click(function(){
  
    $('.list li:eq(0) img').attr('src','images/btn_off01.png' );
    $('.list li:eq(1) img').attr('src','images/btn_off02.png' );
    $('.list li:eq(2) img').attr('src','images/btn_off03.png' );
    $('.list li:eq(3) img').attr('src','images/btn_off04.png' );
    $('.list li:eq(4) img').attr('src','images/btn_off05.png' );
    $('.list li:eq(5) img').attr('src','images/btn_off06.png' );

    $('.container .card01').hide();
    $('.container .card02').hide();
    $('.container .card03').hide();
    $('.container .card04').hide();
    $('.container .card05').hide();
    $('.container .card06').hide();

    var index = $(this).index();

    if(index == 0){
        $('.list li:eq(0) img').attr('src','images/btn_on01.png' );
        $('.container .card01').css('display','flex');
    }else if(index == 1){
        $('.list li:eq(1) img').attr('src','images/btn_on02.png' );
        $('.container .card02').css('display','flex');
    }else if(index == 2){
        $('.list li:eq(2) img').attr('src','images/btn_on03.png' );
        $('.container .card03').css('display','flex');
    }else if(index == 3){
        $('.list li:eq(3) img').attr('src','images/btn_on04.png' );
        $('.container .card04').css('display','flex');
    }else if(index == 4){
        $('.list li:eq(4) img').attr('src','images/btn_on05.png' );
        $('.container .card05').css('display','flex');
    }else if(index == 5){
        $('.list li:eq(5) img').attr('src','images/btn_on06.png' );
        $('.container .card06').css('display','flex');
    }
});
   


$('.card01 .sci a').click(function(){
    $('.popup01').stop().fadeIn();
    // $('body').addClass('fixed');
    $('body').on('scroll touchmove mousewheel', function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
    });
});
     
$('.popup_close').click(function(){
    $('.popup01').stop().fadeOut();
    // $('body').removeClass('fixed');
    $('body').off('scroll touchmove mousewheel');
});
   




$('.card02 .sci a').click(function(){
    $('.popup02').stop().fadeIn();
    $('.popup01').stop().fadeOut();
    // $('body').addClass('fixed');
    $('body').on('scroll touchmove mousewheel', function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
    });
});
     
$('.popup_close').click(function(){
    $('.popup02').stop().fadeOut();
    // $('body').removeClass('fixed');
    $('body').off('scroll touchmove mousewheel');
});






$('.card03 .sci a').click(function(){
    $('.popup03').stop().fadeIn();
    $('.popup01').stop().fadeOut();
    // $('body').addClass('fixed');
    $('body').on('scroll touchmove mousewheel', function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
    });
});
     
$('.popup_close').click(function(){
    $('.popup03').stop().fadeOut();
    // $('body').removeClass('fixed');
    $('body').off('scroll touchmove mousewheel');
});






$('.card04 .sci a').click(function(){
    $('.popup04').stop().fadeIn();
    $('.popup01').stop().fadeOut();
    // $('body').addClass('fixed');
    $('body').on('scroll touchmove mousewheel', function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
    });
});
     
$('.popup_close').click(function(){
    $('.popup04').stop().fadeOut();
    // $('body').removeClass('fixed');
    $('body').off('scroll touchmove mousewheel');
});






$('.card05 a').click(function(){
    $('.popup05').stop().fadeIn();
    $('.popup01').stop().fadeOut();
    // $('body').addClass('fixed');
    $('body').on('scroll touchmove mousewheel', function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
    });
});
     
$('.popup_close').click(function(){
    $('.popup05').stop().fadeOut();
    // $('body').removeClass('fixed');
    $('body').off('scroll touchmove mousewheel');
});






$('.card06 a').click(function(){
    $('.popup06').stop().fadeIn();
    $('.popup01').stop().fadeOut();
    // $('body').addClass('fixed');
    $('body').on('scroll touchmove mousewheel', function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
    });
});
     
$('.popup_close').click(function(){
    $('.popup06').stop().fadeOut();
    // $('body').removeClass('fixed');
    $('body').off('scroll touchmove mousewheel');
});




   // //함수 호출 반복문
    // for(let i = 0; i < $('.tab-button').length; i++){
    //     tabOpen(i); 
    // }
    
    // //함수에 보관
    // function tabOpen(e){
    //     $('.tab-button').eq(e).click(function(){
    //         $('.tab-button').removeClass('active');
    //         $('.tab-content').removeClass('show');
    //         $('.tab-button').eq(e).addClass('active');
    //         $('.tab-content').eq(e).addClass('show');
    //     });
    // }


    // $(function(){
    //     $(".card").eq(0).show();
    //     $(".list a").click(function(e){
    //         e.preventDefault();
    //         $(".list a").removeClass("on");
    //         $(this).addClass("on");
    //         $(".card").hide();
    //         let imgid=$(this).attr("href");
    //         $(imgid).fadeIn(300);
    //     })
    // })

// document.querySelector('.list').addEventListener('click',function(){
//     document.querySelector('.btn_img01').style.display = 'none'
//     document.querySelector('.btn_img02').style.display = 'block'
// });



// 팝업창 버튼

// document.querySelector('.fa').addEventListener('click',function(){
//     document.querySelector('.popup').style.display = 'block';
// });

// document.querySelector('.popup_close').addEventListener('click',function(){
//     document.querySelector('.popup').style.display = 'none';
// });







//  1. 버튼을 누르면 다른 이미지와 오른쪽 보여주기 변경
//  2. 기존에 활성화된 이미지는 비활성화 이미지로 변경


// $(function(){
// 	$(".section2-right").eq(0).show();
// 	$(".section2-s-img a").click(function(e){
// 		e.preventDefault();
// 		$(".section2-s-img a").removeClass("on");
// 		$(this).addClass("on");
// 		$(".section2-right").hide();
// 		let imgid=$(this).attr("href");
// 		$(imgid).fadeIn(300);
// 	})
// 	//section3
// 	$(".section3-box").eq(0).show();
// 		  $(".section3-top-btn a").click(function(e){
// 			e.preventDefault();
// 			  $(".section3-top-btn a").removeClass("on2");
// 			  $(this).addClass("on2");
// 			  $(".section3-box").hide();
// 			  let tapid=$(this).attr("href");
// 			  $(tapid).show();
// 		  })
// })