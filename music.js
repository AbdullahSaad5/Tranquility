var playing = false;
var audio = new Audio('brown_munday.mp3');

function play_pause(){
    var play_button = document.querySelector('#play')

    document.querySelector('#ending').innerHTML = convertTime(audio.duration);
    document.getElementById("render").style.animationDuration = audio.duration.toString() +"s";
    if(playing){
        document.getElementById("cd").style.animationPlayState = 'paused';
        document.getElementById("render").style.animationPlayState = 'paused';

        audio.pause();
        play_button.style.backgroundImage = "url('images/play.svg')"
        playing = false;
    }
    else{
        document.getElementById("cd").style.animationPlayState = 'running';
        document.getElementById("render").style.animationPlayState = 'running';

        setInterval(function(){ 
            var current = audio.currentTime;
            document.getElementById("starting").innerHTML= convertTime(current)}, 1000);
        audio.play();
        play_button.style.backgroundImage = "url('images/pause.svg')"
        playing = true;
    }
}


function convertTime(time){
    var  minutes = Math.floor(time / 60).toString();
    var  seconds = Math.floor(time % 60).toString();
    if(seconds.length == 1){
        seconds = 0 + seconds
    }

    return minutes + ":" + seconds;
}

