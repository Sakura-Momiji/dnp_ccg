export function initSkill() {
    const skillGroups = document.querySelectorAll(".skill-group");
    const preview1 = document.getElementById("skillLine1");
    const preview2 = document.getElementById("skillLine2");

function updatePreview() {
    skillGroups.forEach((group, index) => {
        const type = group.querySelector(".skillTypeSelect").value; // skill / ability
        const name = group.querySelector(".skillNameInput").value || "";
        const desc = group.querySelector(".skillDescInput").value || "";

        const line = index === 0 ? preview1 : preview2;

        if (name || desc) {
            // タイプラベルと名前用のクラスをタイプ別に分ける
            let typeLabel, typeLabelClass, nameClass, descClass;

            if (type === "skill") {
                typeLabel = "スキル ";
                typeLabelClass = "skillTypeLabel";
                nameClass = "skillNameText";
                descClass = "skillDesc";
            } else {
                typeLabel = "アビリティ";
                typeLabelClass = "abilityTypeLabel";
                nameClass = "abilityNameText";
                descClass = "abilityDesc";
            }

            line.innerHTML = `
                <span class="${typeLabelClass}">${typeLabel}</span>
                <span class="${nameClass}">${name}</span>
                <div class="${descClass}">${desc.replace(/\n/g, "<br>")}</div>
            `;
        } else {
            line.innerHTML = "";
        }
    });
}

    skillGroups.forEach(group => {
        group.querySelector(".skillTypeSelect").addEventListener("change", updatePreview);
        group.querySelector(".skillNameInput").addEventListener("input", updatePreview);
        group.querySelector(".skillDescInput").addEventListener("input", updatePreview);
    });
}
