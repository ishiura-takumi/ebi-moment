const button = document.getElementById("tapButton");
const audio = document.getElementById("audio");

let timer = null;
let isPlaying = false;

// ボタンをクリックしたとき
button.addEventListener("mousedown", () => {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
  }
  clearTimeout(timer); // タイマーをリセット
});

// ボタンを離したとき
button.addEventListener("mouseup", () => {
  timer = setTimeout(() => {
    audio.pause();
    audio.currentTime = 0; // 音を停止し、最初に戻す
    isPlaying = false;
  }, 1000); // 1秒後に音源を停止
});
