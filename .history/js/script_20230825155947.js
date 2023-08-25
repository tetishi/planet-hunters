
//音声ファイルの再生


$('.nav-sound').click(function() {
    // event.preventDefault();
    if($('.sound').text() == 'SOUND OFF') {
        $('.sound').text('SOUND ON');
        $('#js-audio').get(0).play();
        $(this).toggleClass('audio-on');
    } else {
        $('.sound').text('SOUND OFF');
        $('#js-audio').get(0).pause();
        $(this).removeClass('audio-on');
    }
});

// $('.audio-on').click(function() {
// })
