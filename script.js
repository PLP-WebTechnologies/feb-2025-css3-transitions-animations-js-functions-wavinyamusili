// Load saved background color from localStorage
window.onload = () => {
  const savedColor = localStorage.getItem("bgColor");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    document.getElementById("bgColorPicker").value = savedColor;
  }
};

// Save color to localStorage and apply it
document.getElementById("bgColorPicker").addEventListener("input", (e) => {
  const color = e.target.value;
  document.body.style.backgroundColor = color;
  localStorage.setItem("bgColor", color);
});

// Animate the box on button click
document.getElementById("animateBtn").addEventListener("click", () => {
  const box = document.getElementById("box");
  box.classList.add("animate");

  // Remove the class after animation completes (500ms)
  setTimeout(() => {
    box.classList.remove("animate");
  }, 500);
});


