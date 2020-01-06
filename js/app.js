window.addEventListener("keydown", function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // For audio sound
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`); // For button animation
  if (!audio) return; // If there is no audio, then stop the function from running alltogether
  audio.play();
  // Add the class of 'playing' to enable hover effect
  key.classList.add("playing"); // key.addClass("playing") - jQuery
});
