export function initNameText() {
    const titleInput = document.getElementById("titleInput");
    
    const cardNamePreview = document.getElementById("cardNamePreview");
    

    // 入力時に反映＆自動縮小
    titleInput.addEventListener("input", () => {
        cardNamePreview.textContent = titleInput.value || "カード名";
        fitTextToWidth(cardNamePreview, 700); //最大幅設定
    });

    

    // JSONテンプレートから初期値を読み込む

    // 文字幅に応じてフォントサイズを自動調整する関数
    function fitTextToWidth(element, maxWidth, minFontSize = 12, defaultFontSize = 64) {
        if (!element.textContent) {
            element.style.fontSize = defaultFontSize + "px";
            return;
        }

        let fontSize = defaultFontSize;
        element.style.fontSize = fontSize + "px";

        while (element.scrollWidth > maxWidth && fontSize > minFontSize) {
            fontSize -= 1;
            element.style.fontSize = fontSize + "px";
        }
    }
}
