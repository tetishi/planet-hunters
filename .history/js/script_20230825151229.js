
//音声ファイルの再生
$('.nav-sound').click(function() {
    $('#js-audio').get(0).play();
    $(this).toggle
});

$('.audio-on').click(function() {
    $('#js-audio').get(0).pause();
})
