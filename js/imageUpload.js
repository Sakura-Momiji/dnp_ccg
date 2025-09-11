export function initImageUpload() {
  const baseUpload = document.getElementById("baseUpload");
  const overlayUpload = document.getElementById("overlayUpload");

  // 共通関数：画像をアスペクト比維持でキャンバスに描画してプレビューにセット
  function setPreviewImage(file, previewId, targetW = 1000, targetH = 1400, backgroundColor = "white") {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = targetW;
      canvas.height = targetH;

      // 背景色を塗る（余白用）
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, targetW, targetH);

      // アスペクト比を維持して中央に描画
      const scale = Math.min(targetW / img.width, targetH / img.height);
      const x = (targetW - img.width * scale) / 2;
      const y = (targetH - img.height * scale) / 2;
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

      // プレビューに反映
      document.getElementById(previewId).src = canvas.toDataURL("image/png");
    };
    img.src = URL.createObjectURL(file);
  }

  // ベース画像
  baseUpload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreviewImage(file, "basePreview");
      console.log("ベース画像アップロード:", file.name);
    }
  });

  // オーバーレイ画像
  overlayUpload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreviewImage(file, "overlayPreview", 1000, 1400, "transparent");
      console.log("イラストオーバーレイアップロード:", file.name);
    }
  });
}
