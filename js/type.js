export async function initType() {
  const typeSelect = document.getElementById("typeSelect");
  const preview = document.getElementById("typePreview");
  const resetBtn = document.getElementById("resetTypePos");

  // 位置調整入力欄
  const posXInput = document.getElementById("typePosX");
  const posYInput = document.getElementById("typePosY");

  // -------------------------
  // ページ読み込み時のデフォルト座標
  // -------------------------
  const defaultX = 42;
  const defaultY = 410;

  posXInput.value = defaultX;
  posYInput.value = defaultY;
  preview.style.left = `${defaultX}px`;
  preview.style.top = `${defaultY}px`;

  // JSONからタイプをロード
  const res = await fetch("data/type.json");
  const data = await res.json();
  const typeList = data.types;

  // セレクトボックスにtypeを反映
  function populateSelect(select) {
    select.innerHTML = '<option value="">選択</option>';
    typeList.forEach(attr => {
      const option = document.createElement("option");
      option.value = attr.id;
      option.textContent = attr.name;
      select.appendChild(option);
    });
  }
  populateSelect(typeSelect);

  // リセットボタン押下時
  resetBtn.addEventListener("click", () => {
    posXInput.value = defaultX;
    posYInput.value = defaultY;
    preview.style.left = `${defaultX}px`;
    preview.style.top = `${defaultY}px`;
  });

  // セレクトと座標入力にイベントを付ける
  [typeSelect, posXInput, posYInput].forEach(el => {
    el.addEventListener("input", updatePreview);
  });

  function updatePreview() {
    const preview = document.getElementById("typePreview");
    const attr = typeSelect.value;

    if (attr) {
      preview.src = `assets/type/${attr}.png`;
      preview.style.display = "block";
      preview.width = 128;
      preview.height = 128;
    } else {
      // 「選択」の場合は非表示
      preview.style.display = "none";
    }

    // 位置も更新
    preview.style.position = "absolute";
    preview.style.left = `${posXInput.value || 0}px`;
    preview.style.top = `${posYInput.value || 0}px`;
  }



  // 初期表示
  updatePreview();
}


