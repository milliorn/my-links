const shareButtons = document.querySelectorAll(".tile-share-button");

// console.log(shareButtons);

function copyText(e) {
  e.preventDefault();
}

// add click events for each share button
shareButtons.forEach((shareButton) =>
  shareButton.addEventListener("click", copyText)
);
