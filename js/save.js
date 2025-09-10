import * as html2canvas from "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.esm.js";

export function initSave() {
  const downloadBtn = document.getElementById("downloadBtn");
  const previewArea = document.querySelector(".preview-area");

  downloadBtn.addEventListener("click", () => {
    html2canvas.default(previewArea, {
      scale: 2,
      useCORS: true,
      allowTaint: true
    })
      .then(canvas => {
        canvas.toBlob(blob => {
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "card.png";
          link.click();
          URL.revokeObjectURL(link.href);
        }, "image/png");
      })
      .catch(err => {
        console.error("保存に失敗しました:", err);
      });
  });
}
