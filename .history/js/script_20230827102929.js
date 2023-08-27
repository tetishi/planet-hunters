$(function() {
    var loading = $('#js-loading');

    //ページの読み込みが完了後にアニメーションを非表示・MVの高さを調整
    $(window).on('load', function() {
        var windowHeight = $(window).height();
        $('.fv').height(windowHeight);
        loading.delay('1000').fadeOut('2000');
    });

    //ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
    setTimeout(function() {
        loading.fadeOut('3000');
    }, 8000);

    //両面リサイズ時にMVの高さを調整
    $(window).resize(function() {
        var windowHeight = $(window).height();
        $('.fv').height(windowHeight);
    });
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


//ページ内の指定の場所にスクロール
$('#page-link a[href*="#]').click(function() {
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top;
    
})
