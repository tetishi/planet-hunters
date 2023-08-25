
//音声ファイルの再生
$('.nav-sound').click(function() {
    $('#js-audio').get(0).play();
    $(this).toggleClass('audio-on');

    if($(this).hasClass('audio-on')) {
        var text = $(this).data
    }
});

$('.audio-on').click(function() {
    $('#js-audio').get(0).pause();
})
