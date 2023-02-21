const cvDownloadButton = document.getElementById("btn--cv");

cvDownloadButton.addEventListener("click", () => {
  const cvFileUrl =
    "https://www.canva.com/design/DAFYsbxdT8E/Y4Oexv7hLE761sbK-Jthew/view";
  const cvFileName = "my-cv.pdf";

  const anchorElement = document.createElement("a");
  anchorElement.href = cvFileUrl;
  anchorElement.download = cvFileName;
  anchorElement.click();
});
