const progressBar = document.querySelector(".progress-done");

let load = 0;
let progressValue = 75;

let int = setInterval(loading, 30);

function loading() {
  load++;

  progressBar.style.opacity = 1;
  progressBar.style.width = `${load}%`;

  if (load < 10) {
    progressBar.innerText = "";
  } else {
    progressBar.innerText = `${load}%`;
  }

  if (load > 99) {
    clearInterval(int);
    progressBar.innerText = "Completed";
  } else if (load === progressValue) {
    clearInterval(int);
  }
}
