$(function($){

    $('.container').fullpage({
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        afterLoad: function(link,index){
            $('.section').eq(index-1).addClass('now');
        },
        onLeave: function(index,nextIndex,direction){
            var currentSection = $('.section').eq(index - 1);
            if(index == 2 && nextIndex == 3){
                currentSection.addClass('leave');
            }            
            if(index == 3 && nextIndex == 4){
                currentSection.addClass('leave');
            }
            if(index == 5 && nextIndex == 6){
                currentSection.addClass('leave');
                $('.screen06 .box').addClass('show');
            }
            if(index == 6 && nextIndex == 7){
                $('.screen07 .text').addClass('show');
                $('.screen07 .star img').each(function(i,item){
                    $(this).delay(i*0.5*1000).fadeIn();
                })
            }
        },
        afterRender: function(){
            $('.more').on('click',function(){
                $.fn.fullpage.moveSectionDown();
            });
            $('.screen04 .cart').on('transitionend',function(){
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            });
            $('.screen08').on('mousemove',function(e){
                $(this).find('.hand').css({
                    left: e.clientX - 490,
                    top:  e.clientY - 320,
                })
            });
            $('.screen08 .again').on('click',function(){
                $('.now,.leave,.show').removeClass('now').removeClass('show').removeClass('leave');
                $('.content [style]').removeAttr('style');
                $.fn.fullpage.moveTo(1);
            })
        },
        scrollingSpeed:1000
    });

})