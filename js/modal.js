// DOM要素取得
const modal = document.getElementById("modal");
const modalLeft = document.getElementById("modalLeft");
const modalRight = document.getElementById("modalRight");
const closeBtn = modal ? modal.querySelector(".close") : null;
const modalRightTitle = document.getElementById("modalRightTitle");
const modalRightContent = document.getElementById("modalRightContent");

/**
 * ボタンにモーダルを紐付ける関数
 * @param {string} buttonSelector - ボタンのCSSセレクタ
 * @param {string} jsonPath - JSONファイルのパス
 */
export function initModal(buttonSelector, jsonPath) {
  const btn = document.querySelector(buttonSelector);
  if (!btn) return; // ボタンが存在しなければ処理しない

  btn.addEventListener("click", async () => {
    try {
      // JSON読み込み
      const response = await fetch(jsonPath);
      if (!response.ok) throw new Error(`JSONが見つかりません: ${jsonPath}`);
      const items = await response.json();

      // 左右の中身をクリア
      modalLeft.innerHTML = "";
      modalRightContent.innerHTML = "";
      modalRightTitle.innerHTML = "";

      // 項目リストを生成
      items.forEach((item, index) => {
        const div = document.createElement("div");
        div.innerHTML = item.title;
        div.classList.add("modal-item");
        div.addEventListener("click", () => {
          // 右側に内容を表示
          modalRightTitle.innerHTML = item.title;
          modalRightContent.innerHTML = item.content;

          // 左側のハイライト切り替え
          modalLeft.querySelectorAll("div").forEach(d => d.style.backgroundColor = "");
          div.style.backgroundColor = "#ddd";
        });
        modalLeft.appendChild(div);

        // 最初の項目を初期表示
        if (index === 0) {
          modalRightContent.innerHTML = item.content;
          modalRightTitle.textContent = item.title;
          div.style.backgroundColor = "#ddd";
        }
      });

      // モーダル表示
      modal.style.display = "block";

    } catch (err) {
      console.error("JSON読み込み失敗:", err);
    }
  });
}

// モーダル閉じるボタン
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

// モーダル外クリックで閉じる
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
