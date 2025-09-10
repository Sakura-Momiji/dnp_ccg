// cost.js
export function initCost() {
    const cardCostInput = document.getElementById("cardCost");
    const preview = document.getElementById("cardCostPreview");

    const costFontSize = document.getElementById("costFontSize");
    const costPosX = document.getElementById("costPosX");
    const costPosY = document.getElementById("costPosY");
    const resetBtn = document.getElementById("resetCost");

    // 初期値を反映
    //cardCostPreview.textContent = cardCostInput.value;

    // -------------------------
    // ページ読み込み時のデフォルト座標
    // -------------------------
    const defaultX = 94;
    const defaultY = 145;
    const defaultFontSize = 100;

    costPosX.value = defaultX;
    costPosY.value = defaultY;
    costFontSize.value = defaultFontSize;
    preview.style.left = `${defaultX}px`;
    preview.style.top = `${defaultY}px`;
    preview.style.fontSize = `${defaultFontSize}px`;

    // リセットボタン押下時
    resetBtn.addEventListener("click", () => {
        costPosX.value = defaultX;
        costPosY.value = defaultY;
        costFontSize.value = defaultFontSize;
        preview.style.left = `${defaultX}px`;
        preview.style.top = `${defaultY}px`;
        preview.style.fontSize = `${defaultFontSize}px`;
    });

    function updatePreview() {
        preview.style.position = "absolute";
        preview.style.left = `${costPosX.value}px`;
        preview.style.top = `${costPosY.value}px`;
        preview.style.fontSize = `${costFontSize.value}px`;
    }

    // costと座標入力にupdatepreviewイベントを付ける
    console.log(costPosX, costPosY, cardCostPreview, costFontSize);
    [costPosX, costPosY, cardCostPreview, costFontSize].forEach(el => {
        el.addEventListener("input", updatePreview);
    });

    // プレビュー更新関数
    costInput.addEventListener("input", () => {
        preview.textContent = costInput.value || "0";
        updatePreview(); // フォントサイズや座標はここで反映
    });

    // 初期化呼び出し
    updatePreview();
}
