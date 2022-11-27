const shareButtons = document.querySelectorAll(".tile-share-button");

// console.log(shareButtons)

async function copyText(e) {
  e.preventDefault();
  const link = this.getAttribute("link");
  // console.log(link)

  try {
    await navigator.clipboard.writeText(link);
    alert("Link was copied: " + link);
  } catch (err) {
    console.error(err);
  }
}

// add click events for each share button
shareButtons.forEach((shareButton) =>
  shareButton.addEventListener("click", copyText)
);
