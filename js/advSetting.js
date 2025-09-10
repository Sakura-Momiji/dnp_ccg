export function initAdvSetting() {
    const advancedSelect = document.getElementById("advancedSelect");
    const advItems = document.querySelectorAll(".advanced-setting-item");

    // 初期状態はOFF
    advItems.forEach(el => el.style.display = "none");

    advancedSelect.addEventListener("change", () => {
        if (advancedSelect.value === "on") {
            advItems.forEach(el => el.style.display = "block");
        } else {
            advItems.forEach(el => el.style.display = "none");
        }
    });
}
