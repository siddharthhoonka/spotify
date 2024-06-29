let audioele = new Audio('songs/1.mp3');
let songind = 0;
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songname: "Legion", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songname: "cartel", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songname: "They mad", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songname: "Rich kid", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songname: "song title", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songname: "safety dance", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },
    { songname: "back it up", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" },
    { songname: "lonely ever", filepath: "songs/8.mp3", coverpath: "covers/8.jpg" },
    { songname: "happyy", filepath: "songs/9.mp3", coverpath: "covers/9.jpg" },
    { songname: "moments", filepath: "songs/10.mp3", coverpath: "covers/10.jpg" },
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
});

masterplay.addEventListener('click', () => {
    if (audioele.paused || audioele.currentTime <= 0) {
        audioele.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioele.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

audioele.addEventListener('timeupdate', () => {
    let progress = parseInt((audioele.currentTime / audioele.duration) * 100);
    progressbar.value = progress;
});

progressbar.addEventListener('change', () => {
    audioele.currentTime = (progressbar.value / 100) * audioele.duration;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplays')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
};

Array.from(document.getElementsByClassName('songitemplays')).forEach((element, index) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songind = index;
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioele.src = songs[songind].filepath;
        audioele.currentTime = 0;
        audioele.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songind >= 9) {
        songind = 0;
    } else {
        songind += 1;
    }
    audioele.src = songs[songind].filepath;
    audioele.currentTime = 0;
    audioele.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
});

document.getElementById('prev').addEventListener('click', () => {
    if (songind <= 0) {
        songind = 0;
    } else {
        songind -= 1;
    }
    audioele.src = songs[songind].filepath;
    audioele.currentTime = 0;
    audioele.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
});

