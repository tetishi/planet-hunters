
//音声ファイルの再生


$('').click(function() {
    // event.preventDefault();
    if($('.sound').text() == 'SOUND OFF') {
        $('.sound').text('SOUND ON');
        $('#js-audio').get(0).play();
        $('.nav-sound').toggleClass('audio-on');
    } else {
        $('.sound').text('SOUND OFF');
        $('#js-audio').get(0).pause();
        $('.nav-sound').removeClass('audio-on');
    }
    // if($('.sound').text() == 'SOUND ON') {
    //     $('.sound').text('SOUND OFF');
    //     $('#js-audio').get(0).pause();
    //     $('.sound').removeClass('audio-on');
    // }


    // $('.sound').toggleClass('audio-on');

    // if($('.sound').hasClass('audio-on')) {
    //     var text = $('.sound').data('text-clicked');

    //     // console.log('on');
    //     $('#js-audio').get(0).play();
    // } else {
    //     var text = $('.sound').data('text-default');
    //     // console.log('off');
    //     $('#js-audio').get(0).pause();

    // }

    // $(this).html(text);
});

// $('.audio-on').click(function() {
// })
