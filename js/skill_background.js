export function initSkillBackground() {
    const slider = document.getElementById("bgOpacity");
    const valueText = document.getElementById("bgOpacityValue");
    const container = document.querySelector(".abilitiesContainer");

    if (!slider || !container || !valueText) return;

    // 初期値を反映
    updateOpacity(slider.value);

    // スライダー操作時
    slider.addEventListener("input", (e) => {
        const value = e.target.value;
        updateOpacity(value);
    });

    function updateOpacity(value) {
        const opacity = value / 100; // 0～1に変換
        container.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
        valueText.textContent = `${value}%`; // ←「背景透明度：◯◯%」の◯◯%部分
    }
}
