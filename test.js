let intervalId;

const startButton = function () {
  console.log("shashwat NEVER GIVE UP", Date.now());
};
document.getElementById("start").addEventListener("click", function () {
  intervalId = setInterval(startButton, 2000);
});

document.getElementById("stop").addEventListener("click", function () {
  // Stop printing by clearing the interval
  clearInterval(intervalId);
});

// Test comment just to check git commands
