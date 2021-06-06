    var audio = new Audio('Thoughts.mp3');
    var play_button;

    function play_pause() {
        play_button = document.querySelector('#play')
        document.querySelector('#ending').innerHTML = convertTime(audio.duration);
        document.getElementById("render").style.animationDuration = audio.duration.toString() + "s";
        document.querySelector("#song-name p").innerHTML = audio.src;

        if (!audio.paused) {
            pause();
        } else {
            play();
        }
    }

    function play() {
        if (Math.floor(audio.currentTime) == Math.floor(audio.duration)) {
            document.getElementById("cd").style.animationPlayState = 'paused';
            document.getElementById("render").style.animationPlayState = 'paused';
        } else {
            document.getElementById("cd").style.animationPlayState = 'running';
            document.getElementById("render").style.animationPlayState = 'running';
        }
        setInterval(function () {
            var current = audio.currentTime;
            document.getElementById("starting").innerHTML = convertTime(current)
        }, 1000);
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

    function convertTime(time) {
        var minutes = Math.floor(time / 60).toString();
        var seconds = Math.floor(time % 60).toString();
        if (seconds.length == 1) {
            seconds = 0 + seconds
        }

        return minutes + ":" + seconds;
    }