const progressBar = document.querySelector(".progressbar");
let progress = 0;

function enableProgressBar() {
    /* if JS is working, we'll enable the progess bar */
    /* all the styling for it comes from the role="progressbar" */
    /* and having that removes the no-js message */
    /* min of 0 and max of 100 are defaults, so we don't need aria-valuemin or -valuemax */
    progressBar.setAttribute("role", "progressbar");
    progressBar.setAttribute("aria-valuenow", progress);
    progressBar.setAttribute("aria-live", "polite")
}

enableProgressBar();



// for simulating stuff when we click the buttons
const testingGround = document.querySelector(".testing-ground");
let interval = null;

function simulateProgress(newProgressValue) {
    clearInterval(interval);
    if(newProgressValue === "fake-upload") {
        simulateUpload();
    } else {
        updateProgress(newProgressValue);
    }
}

testingGround.addEventListener("click", (e)=> {
    if(!e.target.closest("button")) return;

    progress = e.target.dataset.progress;
   simulateProgress(progress);
})

function updateProgress(progress) {
    progressBar.setAttribute("aria-valuenow", progress);
    progressBar.style.setProperty('--progress', progress + "%");
}

function simulateUpload() {
    // aria-busy prevents it from announcing every change as it keeps updating the progress
    // make sure to set it false once the progress is finished
    progressBar.setAttribute("aria-busy", "true");
    let progess = 0;
    updateProgress(progess);

    intervalTimer = setInterval(() => {
        progess += 5;
        updateProgress(progess);
        if( progess === 100) {
            // probably want something to catch errros and also have this set to false then too
            progressBar.setAttribute("aria-busy", "false");
            clearInterval(intervalTimer);
        }
    }, 500)
}














