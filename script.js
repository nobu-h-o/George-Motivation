const button = document.querySelector(".motivation")
const audio = document.querySelector(".audio")


const audioList = [
    "George.mp3",
    "George2.mp3",
    "George3.mp3",
    "George4.mp3",
    "George5.mp3",
    "George6.mp3",
    "George7.mp3",
    "George8.mp3",
]

let audioIndex = 0;
button.addEventListener("click", () => {
    audio.src = "./assets/" + audioList[audioIndex];
    audio.play();
    audioIndex++;
    if(audioIndex===audioList.length){
        audioIndex = 0;
    }
})