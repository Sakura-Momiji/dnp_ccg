// js/cardType.js
export function initCardType() {
  const select = document.getElementById("cardTypeSelect");
  const preview = document.getElementById("cardTypePreview");
  let typeData = [];

  // JSONから種類を読み込む
  fetch("data/card_type.json")
    .then(res => res.json())
    .then(data => {
      typeData = data.types;

      // セレクトボックスに反映
      typeData.forEach(type => {
        const option = document.createElement("option");
        option.value = type.id;   // IDをvalueにしておくと扱いやすい
        option.textContent = type.name;
        select.appendChild(option);
      });
    });

  // 選択された種類をカードプレビューに反映
  select.addEventListener("change", () => {
    const selected = typeData.find(t => t.id === select.value);
    if (selected) {
      preview.textContent = selected.name;
      preview.style.color = selected.color; // JSONの色を反映
    } else {
      preview.textContent = "";
      preview.style.color = "#fff"; // デフォルト
    }
  });
}
