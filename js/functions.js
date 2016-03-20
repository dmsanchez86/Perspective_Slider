$().ready(function(){
    $('.slide').unbind('click').click(function(){
        $('.slide').removeClass('active');
        $(this).addClass('active');
    });
});