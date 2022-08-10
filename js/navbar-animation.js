$('#collapse-bar').on('show.bs.collapse', function(){
    $('.banner-header').css('transform', 'translate(-50%, 10%)');
});

$('#collapse-bar').on('hide.bs.collapse', function(){
    $('.banner-header').css('transform', 'translate(-50%, -50%)');
});