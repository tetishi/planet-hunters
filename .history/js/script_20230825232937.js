$(function() {
    var loading = $('#js-loading');

    $(window).on('load', function() {
        var windowHeight = $(window).height();
        $('.mv').height(windowHeight);
        loading.delay('1000').fadeOut('2000');
    });

    setTimeout(function() {
        loading.fadeOut('3000');
    }, 8000);

    $(window).resize(function() {
        var windowHeight = $(window).height
    })
});

//Loading
// import { AtomSpinner } from 'epic-spinners'

// <atom-spinner
//   :animation-duration="1000"
//   :size="60"
//   color="#ff1d5e"
// />

//音声ファイルの再生、停止
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

