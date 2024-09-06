let songIndex = 0;
let audioElement = new Audio('Marshmello, Kane Brown - Miles On It (Official Music Video).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName'); 
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Miles on it", filePath: "Marshmello, Kane Brown - Miles On It (Official Music Video).mp3", coverPath: "miles on it.jpg"},
    {songName: "Blinding Lights", filePath: "The Weeknd - Blinding Lights (Official Video).mp3", coverPath: "blinding lights png.jpeg"},
    {songName: "Shape of you", filePath: "Ed Sheeran - Shape of You (Official Music Video).mp3", coverPath: "shape of you.jpg"},
    {songName: "Someone You Loved", filePath: "Lewis Capaldi - Someone You Loved (Lyrics).mp3", coverPath: "someone you loved.jpeg"},
    {songName: "Sunflower", filePath: "Post Malone, Swae Lee - Sunflower (Spider-Man_ Into the Spider-Verse).mp3", coverPath: "sunflower.jpeg"},
    {songName: "As it was", filePath: "Harry Styles - As It Was (Official Video).mp3", coverPath: "as it was.jpeg"},
    {songName: "Dont start now", filePath: "Dua Lipa - Don't Start Now (Official Music Video).mp3", coverPath: "dont start now.jpeg"},
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();
// console.log('hi siri')

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

    progress = parseInt((audioElement.currentTime/audioElement.duration)*1000);
    
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/1000;

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 6){
        songIndex = 0; 
    }
    else{
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 6; 
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
})