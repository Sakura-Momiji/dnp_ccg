export function initFrameSelector() {
  const frameSelect = document.getElementById("frameSelect");
  const framePreview = document.getElementById("framePreview");

  fetch("data/frames.json")
    .then(response => response.json())
    .then(frames => {
      frames.forEach(frame => {
        const option = document.createElement("option");
        option.value = frame.file;
        option.textContent = frame.name;
        frameSelect.appendChild(option);
      });

      if (frames.length > 0) {
        framePreview.src = `assets/frame/${frames[0].file}`;
      }
    });

  frameSelect.addEventListener("change", () => {
    framePreview.src = `assets/frame/${frameSelect.value}`;
    console.log("カード枠を変更:", frameSelect.value);
  });
}