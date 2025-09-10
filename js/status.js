// status.js
export function initStatus() {
  const atkInput = document.getElementById("atkInput");
  const defInput = document.getElementById("defInput");
  const atkPreview = document.getElementById("atkPreview");
  const defPreview = document.getElementById("defPreview");

  atkInput.addEventListener("input", () => {
    atkPreview.textContent = atkInput.value || "0";
  });

  defInput.addEventListener("input", () => {
    defPreview.textContent = defInput.value || "0";
  });
}

