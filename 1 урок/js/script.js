$(function(){
    $('.block').mouseover(function(){
        $('.block_items').addClass('upped')
    })
    $('.block').mouseout(function(){
        $('.block_items').removeClass('upped')
    })
});