
//音声ファイルの再生


$('.sound .material-symbols-outlined').click(function() {
    // event.preventDefault();
    if($('.sound').text() == 'SOUND OFF') {
        $(this).text('SOUND ON');
        $('#js-audio').get(0).play();
        $('.sound').toggleClass('audio-on');
    } else {
        $(this).text('SOUND OFF');
        $('#js-audio').get(0).pause();
        $('.sound').removeClass('audio-on');
    }


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
