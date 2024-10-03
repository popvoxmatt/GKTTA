function createFullscreenButton() {
  // Create a container element for the button
  var buttonContainer = document.createElement("div");
  buttonContainer.classList.add("fullscreen-button-container");

  // Add a button or element to trigger fullscreen
  var fullScreenButton = document.createElement("button");
  fullScreenButton.textContent = "Enter Fullscreen";
  fullScreenButton.addEventListener("click", function() {
    document.documentElement.requestFullscreen();
    buttonContainer.style.display = "none"; // Hide the button container
  });

  // Append the button to the container
  buttonContainer.appendChild(fullScreenButton);

  // Append the container to the body
  document.body.appendChild(buttonContainer);
}

document.addEventListener("DOMContentLoaded", createFullscreenButton);