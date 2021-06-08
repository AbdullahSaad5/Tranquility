var songs = ["Ajj Din Vehre Vich.mp3", "Brown Munday.mp3", "Darasal.mp3", "Dekhte Dekhte.mp3", "Dil Diyan Gallan.mp3", "Hasan Raheem.mp3", "Ishq Nachaunda.mp3", "Jaan-E-Bahaaraan.mp3", "Jeena Jeena (From _Badlapur_).mp3", "Never Gonna Give You Up.mp3", "Rockstar.mp3", "Tajdar-E-Haram Coke Studio Season 8.mp3"];
var current_song = 0;
var audio = new Audio("./Music/" + songs[current_song]);
var play_button = document.querySelector('#play');

function loadData() {
    var song_name = audio.src.split('/');
    song_name = song_name[song_name.length - 1];
    song_name = song_name.split(".");
    song_name[0].replace("%20%", " ");
    document.querySelector("#song-name p").innerHTML = song_name[0].replaceAll("%20", " ");
    document.querySelector('#ending').innerHTML = convertTime(audio.duration);
}

function play_pause() {
    if (!audio.paused) {
        pause_song();
    } else {
        play_song();
    }
    loadData();
}

function play_song() {
    document.getElementById("cd").style.animationPlayState = 'running';
    document.getElementById("render").style.animationPlayState = 'running';
    setInterval(function () {
        var current = audio.currentTime;
        document.getElementById("starting").innerHTML = convertTime(current);
        renderAnimation();
        if (audio.ended) {
            skip();
        }
    }, 100);
    audio.play();
    play_button.style.backgroundImage = "url('images/pause.svg')"
}


function pause_song() {
    document.getElementById("cd").style.animationPlayState = 'paused';
    document.getElementById("render").style.animationPlayState = 'paused';
    audio.pause();
    play_button.style.backgroundImage = "url('images/play.svg')"
}


function skip() {
    current_song++;
    current_song %= songs.length;
    audio.src = "./Music/" + songs[current_song];
    loadData();
    play_pause();
}

function revert() {
    current_song--;
    if (current_song < 0) {
        current_song = songs.length - 1;
    }
    audio.src = "./Music/" + songs[current_song];
    loadData();
    play_pause()

}


function seek() {
    var streaming = document.getElementById('streamline');
    streaming.onmousedown = function (e) {
        var position = e.pageX - this.offsetLeft;
        var totalPosition = document.getElementById("streamline").offsetWidth;
        var seekingTime = audio.duration * (position / totalPosition);
        audio.currentTime = seekingTime;

    }
}

function convertTime(time) {
    var minutes = Math.floor(time / 60).toString();
    var seconds = Math.floor(time % 60).toString();
    if (seconds.length == 1) {
        seconds = 0 + seconds
    }

    return minutes + ":" + seconds;
}



function logout() {
    window.location.href = "index.html";
}


function renderAnimation() {
    var render = document.getElementById("render");
    width = Math.ceil((audio.currentTime / audio.duration) * document.getElementById("streamline").offsetWidth);
    render.style.width = `${width}px`;
}