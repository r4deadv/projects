const progressBar = document.querySelector(".progressbar");
let progress = 0;

function enableProgressBar() {
    progressBar.setAttribute("role", "progressbar");
    progressBar.setAttribute("aria-valuenow", progress);
    progressBar.setAttribute("aria-live", "polite")
}

enableProgressBar();



// for simulation
const testingGround = document.querySelector(".testing-ground")

testingGround.addEventListener("click", (e)=> {
    if(!e.target.closest("button")) return;

    progress = e.target.dataset.progress;
    progressBar.setAttribute("aria-valuenow", progress);
    progressBar.style.setProperty('--progress', progress + "%");
})