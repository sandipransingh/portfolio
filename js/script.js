$(document).ready(function(){
    $('.button').click(function(){
        $($(this).data("target")).addClass("page--active");
    });


    $('.page-close').click(function(){
        $('.page').removeClass('page--active');
    })
});