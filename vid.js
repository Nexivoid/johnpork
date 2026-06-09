const video = document.getElementById("video");

video.volume = 1.0;
video.muted = false;

function startVideo() {
  video.play().catch(() => {
    video.muted = true;
    video.play();
  });
}

document.addEventListener("click", startVideo, { once: true });
document.addEventListener("keydown", startVideo, { once: true });

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  return false;
});