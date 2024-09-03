const button = document.querySelector(".circle")
const audio = document.querySelector(".audio")

const audioList = [
    "George1.mp3",
    "George2.mp3",
    "George3.mp3",
    "George4.mp3",
    "George5.mp3",
    "George6.mp3",
    "George7.mp3",
    "George8.mp3",
]

button.addEventListener("click", () => {
    let audioIndex = Math.floor(Math.random() * audioList.length);
    audio.src = "./assets/" + audioList[audioIndex];
    audio.play();
})