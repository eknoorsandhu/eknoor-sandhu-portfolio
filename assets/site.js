(function () {
  "use strict";

  var viewer = document.getElementById("art-viewer");
  if (viewer && viewer.showModal) {
    var viewerImage = document.getElementById("viewer-image");
    var viewerCaption = document.getElementById("viewer-caption");
    document.querySelectorAll(".art-thumb").forEach(function (button) {
      button.addEventListener("click", function () {
        var image = button.querySelector("img");
        viewerImage.src = button.dataset.full;
        viewerImage.alt = image.alt;
        viewerCaption.textContent = button.dataset.caption;
        viewer.showModal();
      });
    });
    document.getElementById("viewer-close").addEventListener("click", function () { viewer.close(); });
    viewer.addEventListener("click", function (event) { if (event.target === viewer) viewer.close(); });
  }
}());
