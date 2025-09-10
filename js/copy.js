import * as html2canvas from "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.esm.js";

export function initCopy() {
  const copyBtn = document.getElementById("copyBtn");
  const previewArea = document.querySelector(".preview-area");

  copyBtn.addEventListener("click", async () => {
    try {
      const canvas = await html2canvas.default(previewArea, {
        scale: 2,
        useCORS: true,
        allowTaint: true
      });

      canvas.toBlob(async (blob) => {
        if (!blob) {
          console.error("Blob生成に失敗しました");
          return;
        }

        try {
          await navigator.clipboard.write([
            new ClipboardItem({ "image/png": blob })
          ]);

          // ボタンテキストを一時変更
          const originalText = copyBtn.textContent;
          copyBtn.textContent = "コピーしました";
          copyBtn.disabled = true; // 連打防止
          
          setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.disabled = false;
          }, 3000);

        } catch (err) {
          console.error("クリップボードへのコピーに失敗しました:", err);
        }

      }, "image/png");

    } catch (err) {
      console.error("コピー処理に失敗しました:", err);
    }
  });
}
