
//音声ファイルの再生
$('.nav-sound').click(function() {
    $('#js-audio').get(0).play();
    $(this).toggleClass('a')
});

$('.audio-on').click(function() {
    $('#js-audio').get(0).pause();
})
