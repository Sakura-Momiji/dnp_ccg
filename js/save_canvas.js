export function initSave() {
  const canvas = document.getElementById("cardCanvas");
  const ctx = canvas.getContext("2d");
  const downloadBtn = document.getElementById("downloadBtn");
  const drawBtn = document.getElementById("drawBtn");

  let baseImg = null;
  let overlayImg = null;

  // 画像アップロード
  document.getElementById("baseUpload").addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;
    const img = new Image();
    img.onload = () => { baseImg = img; };
    img.src = URL.createObjectURL(file);
  });

  document.getElementById("overlayUpload").addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;
    const img = new Image();
    img.onload = () => { overlayImg = img; };
    img.src = URL.createObjectURL(file);
  });

  // カードを描画
  drawBtn.addEventListener("click", () => {
    const cardWidth = 1000;
    const cardHeight = 1400;
    const scale = 0.5; // Canvas表示用に縮小

    // Canvasサイズ設定
    canvas.width = cardWidth * scale;
    canvas.height = cardHeight * scale;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.scale(scale, scale);

    // 角丸描画
    const radius = 50;
    ctx.beginPath();
    ctx.moveTo(radius, 0);
    ctx.lineTo(cardWidth - radius, 0);
    ctx.quadraticCurveTo(cardWidth, 0, cardWidth, radius);
    ctx.lineTo(cardWidth, cardHeight - radius);
    ctx.quadraticCurveTo(cardWidth, cardHeight, cardWidth - radius, cardHeight);
    ctx.lineTo(radius, cardHeight);
    ctx.quadraticCurveTo(0, cardHeight, 0, cardHeight - radius);
    ctx.lineTo(0, radius);
    ctx.quadraticCurveTo(0, 0, radius, 0);
    ctx.closePath();
    ctx.clip();

    // ベースイラスト
    if (baseImg) ctx.drawImage(baseImg, 0, 0, cardWidth, cardHeight);

    // 枠（ここでは例として色付き枠）
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 10;
    ctx.strokeRect(0, 0, cardWidth, cardHeight);

    // オーバーレイ
    if (overlayImg) ctx.drawImage(overlayImg, 0, 0, cardWidth, cardHeight);

    // 文字描画例
    ctx.fillStyle = "white";
    ctx.font = "bold 80px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("カード名", cardWidth/2, 100);

    ctx.font = "bold 60px sans-serif";
    ctx.fillText("コスト: 5", cardWidth/2, 200);

    ctx.font = "bold 50px sans-serif";
    ctx.textAlign = "right";
    ctx.fillText("ATK: 1000", cardWidth - 50, cardHeight - 100);
    ctx.fillText("DEF: 800", cardWidth - 50, cardHeight - 50);

    ctx.restore();
  });

  // 保存ボタン
  downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "card.png";
    link.click();
  });
}
