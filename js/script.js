$(function(){
    $(function(){
        $('.bxslider').bxSlider({
            mode: 'horizontal', // 가로 방향 수평 슬라이드 , 슬라이드 이동방향 설정
            auto: true, // 자동 실행 여부
            autoHover: true, // 마우스 호버시 정지 여부
            adaptiveHeight: true,
            speed: 1000, // 슬라이드 이동 속도 설정
            moveSlides: 1, // 슬라이드 이동 시 개수
            minSlides:1, // 최소 노출 개수
            maxWlides:1, // 최대 노출 개수
            slideMargin:0, // 슬라이드 간의 간격
            pager: true, // 현재 위치 페이징 표시 여부 설정
            controls: true // 이전, 다음 버튼 노출 여부
        });
    });
    $(window).resize(function () {
        let wrapWidth = $(window).width() // 브라우져 화면 너비 실시간
        console.log(wrapWidth);
        if(wrapWidth >= 1180){
            $('.gnb>li').on({
                "mouseenter" : function(){
                    $('.submenu, .bg').stop().slideDown(500);
                },
                "mouseleave" : function(){
                    $('.submenu, .bg').stop().slideUp(500);
                }
            });
        } else {
            $('.gnb>li').off();

            $('.toggle').click(function(){
                $('.gnb').css("right", "0");
                $('.main_top').parent().addClass('on');
            });

            $('.close').click(function(e){
                e.preventDefault();
                $('.gnb').css("right", "-133%");
                $('.main_top').parent().removeClass('on');
            });

            $('.gnb>li').click(function(){
                $(this).children('.submenu').stop().slideToggle();
                $(this).siblings('li').children('.submenu').stop().slideUp();
            });
        }
    });
    $(window).resize();
    

    $.ajax({
        url: "data/data.json",
        dataType: "json",
        success: function(data){
            console.log(data);
            let li = "";
            $.each(data, function(index, object){
                li += "<li>" + "<a href=#>"+ object.title + "</a><span>" + object.date + "</span></li>";
            });
            $('.art3_top_list:eq(0)').append(li);
        },
        error: function(){
            alert("데이터 연동이 실패했습니다.")
        }
    });
});