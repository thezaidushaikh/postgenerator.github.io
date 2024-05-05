const downloadButton = document.getElementById("download-button");
const textContainer = document.getElementById("main");

downloadButton.addEventListener("click", function () {
  html2canvas(textContainer, {
    scale: 2, // Optional: Increase resolution for sharper image
  }).then((canvas) => {
    const imageURL = canvas.toDataURL("image/png"); // Change format to "image/jpeg" for JPG
    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "post.png"; // Change filename and extension as needed
    link.click();
  });
});
