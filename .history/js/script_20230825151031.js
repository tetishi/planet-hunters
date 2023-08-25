
//音声ファイルの再生
$('.nav').click(function() {

    $('#js-audio').get(0).play();
});

$('.audio-on').click(function() {
    $('#js-audio').get(0).pause();
})
