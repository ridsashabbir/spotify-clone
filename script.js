console.log("Welcome to Spotify");

// initialize the variables
let songIndex = 0;
let audioElement = new Audio('assets/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "My Heart's a Stereo", filePath:"assets/1.mp3", coverPath:"assets/cover1.jfif"},
    {songName: "My Heart's a Stereo", filePath:"assets/2.mp3", coverPath:"assets/cover2.jpg"},
    {songName: "My Heart's a Stereo", filePath:"assets/3.mp3", coverPath:"assets/cover3.jpg"},
    {songName: "My Heart's a Stereo", filePath:"assets/4.mp3", coverPath:"assets/cover4.jpg"},
    {songName: "My Heart's a Stereo", filePath:"assets/5.mp3", coverPath:"assets/cover5.jpg"},
]

// audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
});

// listen to events
myProgressBar.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //update Seekbar
});
