var playing = false;
var audio = new Audio('music.mp3');

function play_pause(){
    var play_button = document.querySelector('#play')
    if(playing){
        audio.pause();
        play_button.style.backgroundImage = "url('images/play.svg')"
        playing = false;
    }
    else{
        audio.play();
        play_button.style.backgroundImage = "url('images/pause.svg')"
        playing = true;
    }
}