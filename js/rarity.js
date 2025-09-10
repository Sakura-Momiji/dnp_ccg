export async function initRarity() {
  const raritySelect = document.getElementById("raritySelect");
  const preview = document.getElementById("rarityPreview");

  // JSONからタイプをロード
  const res = await fetch("data/rarity.json");
  const data = await res.json();
  const rarityList = data.rarity;

  // セレクトボックスにrarityを反映
  function populateSelect(select) {
    select.innerHTML = '<option value="">選択</option>';
    rarityList.forEach(attr => {
      const option = document.createElement("option");
      option.value = attr.id;
      option.textContent = attr.name;
      select.appendChild(option);
    });
  }
  populateSelect(raritySelect);


  // セレクトにイベントを付ける
  [raritySelect].forEach(el => {
    el.addEventListener("input", updatePreview);
  });

  function updatePreview() {
    const preview = document.getElementById("rarityPreview");
    const attr = raritySelect.value;

    if (attr) {
      preview.src = `assets/rarity/${attr}.png`;
      preview.style.display = "block";
      preview.width = 128;
      preview.height = 128;
    } else {
      // 「選択」の場合は非表示
      preview.style.display = "none";
    }
  }



  // 初期表示
  updatePreview();
}


