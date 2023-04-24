const progressBars = document.querySelectorAll(".progress div");
const aboutB = document.querySelector(".trigger");

function showProgress() {
  progressBars.forEach((progressBar) => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
}

window.addEventListener("scroll", () => {
  const aboutSecPosition = aboutB.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (aboutSecPosition < screenHeight) {
    showProgress();
  }
});
