
//音声ファイルの再生
$('.nav-sound').click(function() {
    $('#js-audio').get(0).play();
    $(this).toggleClass('audio-on');

    if($(this).hasClass('audio-on')) {
        var text = $('.sound').data('text-clicked');
        // console.log('on');
    } else {
        var text = $('.sound').data('text-default');
        // console.log('off');
    }

    $(this).html(text);
});

$('.audio-on').click(function() {
    $('#js-audio').get(0).pause();
})
