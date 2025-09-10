export async function initElement() {
    const typeSelect = document.getElementById("elementType");
    const singleSelect = document.getElementById("singleElement");
    const leftSelect = document.getElementById("leftElement");
    const rightSelect = document.getElementById("rightElement");
    const preview = document.getElementById("elementPreview");
    const resetBtn = document.getElementById("resetElement");

    // 位置調整入力欄
    const posXInput = document.getElementById("elementPosX");
    const posYInput = document.getElementById("elementPosY");

    // -------------------------
    // ページ読み込み時のデフォルト座標
    // -------------------------
    const defaultX = 42;
    const defaultY = 250;

    posXInput.value = defaultX;
    posYInput.value = defaultY;
    preview.style.left = `${defaultX}px`;
    preview.style.top = `${defaultY}px`;

    // JSONから属性をロード
    const res = await fetch("data/element.json");
    const data = await res.json();
    const singleList = data.single;

    // セレクトボックスに属性を反映
    function populateSelect(select) {
        select.innerHTML = '<option value="">選択</option>';
        singleList.forEach(attr => {
            const option = document.createElement("option");
            option.value = attr.id;
            option.textContent = attr.name;
            select.appendChild(option);
        });
    }
    populateSelect(singleSelect);
    populateSelect(leftSelect);
    populateSelect(rightSelect);

    // リセットボタン押下時
    resetBtn.addEventListener("click", () => {
        posXInput.value = defaultX;
        posYInput.value = defaultY;
        preview.style.left = `${defaultX}px`;
        preview.style.top = `${defaultY}px`;
    });

    // タイプ切替
    typeSelect.addEventListener("change", () => {
        if (typeSelect.value === "single") {
            document.getElementById("singleContainer").style.display = "flex";
            document.getElementById("dualContainer").style.display = "none";
        } else {
            document.getElementById("singleContainer").style.display = "none";
            document.getElementById("dualContainer").style.display = "flex";
        }
        updatePreview();
    });

    // セレクトと座標入力にイベントを付ける
    [singleSelect, leftSelect, rightSelect, posXInput, posYInput].forEach(el => {
        el.addEventListener("input", updatePreview);
    });

    function updatePreview() {

        preview.innerHTML = "";
        preview.style.position = "absolute";

        preview.style.left = `${posXInput.value || 660}px`;
        preview.style.top = `${posYInput.value || 840}px`;

        if (typeSelect.value === "single") {
            const attr = singleSelect.value;
            if (attr) {
                const img = document.createElement("img");
                img.src = `assets/element/single/${attr}.png`;
                img.width = 128;
                img.height = 128;
                preview.appendChild(img);
            }
        } else {
            const leftAttr = leftSelect.value;
            const rightAttr = rightSelect.value;

            if (leftAttr) {
                const imgL = document.createElement("img");
                imgL.src = `assets/element/multi/left/${leftAttr}.png`;
                imgL.width = 128;
                imgL.height = 128;
                imgL.style.position = "absolute";
                imgL.style.left = "0";
                preview.appendChild(imgL);
            }
            if (rightAttr) {
                const imgR = document.createElement("img");
                imgR.src = `assets/element/multi/right/${rightAttr}.png`;
                imgR.width = 128;
                imgR.height = 128;
                imgR.style.position = "absolute";
                imgR.style.right = "0";
                preview.appendChild(imgR);
            }
        }
    }



    // 初期表示
    updatePreview();
}


