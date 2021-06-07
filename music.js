    if (!logged_in) {
        window.location.href = "index.html";
    }
    var audio = new Audio('Thoughts.mp3');
    var play_button;

    function play_pause() {
        play_button = document.querySelector('#play')
        document.querySelector('#ending').innerHTML = convertTime(audio.duration);
        document.getElementById("render").style.animationDuration = audio.duration.toString() + "s";
        var song_name = audio.src.split('/');
        song_name = song_name[song_name.length - 1];
        song_name = song_name.split(".");
        document.querySelector("#song-name p").innerHTML = song_name[0];

        if (!audio.paused) {
            pause();
        } else {
            play();
        }
    }

    function play() {

        document.getElementById("cd").style.animationPlayState = 'running';
        document.getElementById("render").style.animationPlayState = 'running';
        setInterval(function () {
            var current = audio.currentTime;
            document.getElementById("starting").innerHTML = convertTime(current);
            if (Math.floor(audio.currentTime) == Math.floor(audio.duration)) {
                pause();
            }
        }, 100);
        audio.play();
        play_button.style.backgroundImage = "url('images/pause.svg')"
    }


    function pause() {
        document.getElementById("cd").style.animationPlayState = 'paused';
        document.getElementById("render").style.animationPlayState = 'paused';
        audio.pause();
        play_button.style.backgroundImage = "url('images/play.svg')"
    }


    function skip() {
        audio.paused = true;
        play_pause();
    }

    function revert() {
        audio.paused = true;
        play_pause();
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