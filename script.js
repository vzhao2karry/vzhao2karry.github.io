const revealNodes = document.querySelectorAll(".reveal");

const revealWithDelay = () => {
  revealNodes.forEach((node, index) => {
    node.style.animationDelay = `${index * 120}ms`;
    node.classList.add("reveal-visible");
  });
};

if ("requestIdleCallback" in window) {
  requestIdleCallback(revealWithDelay);
} else {
  window.setTimeout(revealWithDelay, 60);
}
