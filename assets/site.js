(function () {
  "use strict";

  var field = document.getElementById("field-rows");
  if (field) {
    var rows = 7, perRow = 22, dx = 26, dy = 38, slant = 9;
    var gapRow = 3, gapFrom = 9, gapTo = 11, drawing = "";
    for (var row = 0; row < rows; row += 1) {
      for (var column = 0; column < perRow; column += 1) {
        if (row === gapRow && column >= gapFrom && column <= gapTo) continue;
        var x = 20 + column * dx + row * slant;
        var y = 40 + row * dy;
        var height = 14 + ((row * 7 + column * 13) % 7);
        drawing += '<line class="plant" x1="' + x + '" y1="' + y + '" x2="' + (x + 2) + '" y2="' + (y - height) + '" />';
      }
    }
    var gapX = 20 + ((gapFrom + gapTo) / 2) * dx + gapRow * slant;
    var gapY = 40 + gapRow * dy - 8;
    field.innerHTML = drawing + '<ellipse class="gap" cx="' + gapX + '" cy="' + gapY + '" rx="50" ry="20" />';
  }

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
