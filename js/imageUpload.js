export function initImageUpload() {
  const baseUpload = document.getElementById("baseUpload");
  const overlayUpload = document.getElementById("overlayUpload");

  baseUpload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      document.getElementById("basePreview").src = url;
      console.log("ベース画像アップロード:", file.name);
    }
  });

  overlayUpload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      document.getElementById("overlayPreview").src = url;
      console.log("イラストオーバーレイアップロード:", file.name);
    }
  });
}
