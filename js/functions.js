'use strict';

var countSlides = 0;
var slideInterval = null;
var slide = 0;

$().ready(function(){
    
    countSlides = $('.slide').length;
    
    // click to put slide active
    $('.slide').unbind('click').click(function(){
        var position = $(this).attr('position');
        
        $('.slide').removeClass('active');
        $(this).addClass('active');
        
        $('.slider').attr('slide', position);
    });
    
    // click button next
    $('#next').unbind('click').click(function(){
        $('#last,#pause').removeClass('active');
        $(this).addClass('active');
        
        slide = parseInt($('.slider').attr('slide'));
        slide++;
        
        $('.slide').removeClass('active');
        
        if(slide - 1 >= countSlides){
            slide = 1;
        }
        
        $('.slide').eq(slide - 1).addClass('active');
        
        $('.slider').attr('slide', slide);
    });
    
    // click button last
    $('#last').unbind('click').click(function(){
        $('#next,#play,#pause').removeClass('active');
        $(this).addClass('active');
        
        slide = parseInt($('.slider').attr('slide'));
        
        $('.slide').removeClass('active');
        
        if(slide == 1){
            slide = countSlides;
        }else{
            slide--;
        }
        
        $('.slide').eq(slide - 1).addClass('active');
        
        $('.slider').attr('slide', slide);
        
    });
    
    // click button play
    $('#play').unbind('click').click(function(){
        $('#next,#last,#pause').removeClass('active');
        $(this).addClass('active');
        
        slideInterval = setInterval(function(){
            $('#next').click();
        },4000);
    });
    
    // click button pause
    $('#pause').unbind('click').click(function(){
        $('#next,#last,#play').removeClass('active');
        $(this).addClass('active');
        
        clearInterval(slideInterval);
    });
});