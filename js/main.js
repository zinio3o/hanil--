$(function(){
    $('#gnb .depth1').hover(
        function(){
        $('#gnb .depth1 .depth2').stop().slideDown();
        },
        function(){
        $('#gnb .depth1 .depth2').stop().slideUp();
        }
    )

    //   aos 실행
    AOS.init();

});
