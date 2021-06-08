var songs = ["Brown Munday.mp3", "Never Gonna Give You Up.mp3", "Rockstar.mp3"];
var current_song = 0;
var audio = new Audio("./Music/" + songs[current_song]);
var play_button = document.querySelector('#play');
var indexes = new Array();



function search() {
    hideSearch();
    var query = document.getElementById("search-box").value;
    var song = -1;
    for (let i = 0; i < songs.length; i++) {
        var name = songs[i].replace(".mp3", "")
        if (name.toUpperCase() == query.toUpperCase()) {
            song = i;
            break;
        }
        indexes[i] = name.split(" ");

    }
    for (let i = 0; i < indexes.length; i++) {
        for (let j = 0; j < indexes[i].length; j++) {
            if (indexes[i][j].toUpperCase() == query.toUpperCase()) {
                song = i;
            }
        }
    }

    if (song != -1) {
        audio.src = "./Music/" + songs[song];
        loadData();
        play_song();
        swal("Song Found!", `Now Playing ${songs[song]}`, "success")
    }
    else {
        swal("Song Not Found!", "", "error")

    }
}
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
    play_song();
}

function revert() {
    current_song--;
    if (current_song < 0) {
        current_song = songs.length - 1;
    }
    audio.src = "./Music/" + songs[current_song];
    loadData();
    play_song();

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


function displaySearchWindow() {
    document.getElementById("searching").style.display = "flex";
}


function hideSearch() {
    document.getElementById("searching").style.display = "none";
}