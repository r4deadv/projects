const progress = document.querySelector(".progress-done");
let progressValue = progress.getAttribute("data-done");

progressValue = 85;

setTimeout(() => {
  progress.style.width = progressValue + "%";
  progress.style.opacity = 1;
  progress.innerText = progressValue + "%";
}, 500);
