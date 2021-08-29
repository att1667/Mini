$(function(){
    $('body').on('mousemove',function(e){
        var wid = $(window).width(); //현재브라우저의 넚이값 
        var posX = e.pageX //마우스 커서의 위치
        var percent = Math.floor((posX/wid)*201) //이미지 갯수
        $('.coco img').attr('src', './image/video '+ percent + '.jpg')
    })
})