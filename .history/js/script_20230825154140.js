
//音声ファイルの再生
$('.nav-sound').click(function(event) {
    // event.preventDefault();


    
    $('.sound').toggleClass('audio-on');

    if($('.sound').hasClass('audio-on')) {
        var text = $('.sound').data('text-clicked');

        // console.log('on');
        $('#js-audio').get(0).play();
    } else {
        var text = $('.sound').data('text-default');
        // console.log('off');
        $('#js-audio').get(0).pause();

    }

    $(this).html(text);
});

// $('.audio-on').click(function() {
// })
