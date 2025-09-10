export function initRace() {
  const race1Select = document.getElementById("race1Select");
  const race2Select = document.getElementById("race2Select");
  const racePreview = document.getElementById("racePreview");

  // JSON を読み込んでセレクトボックスに追加
  fetch("data/races.json")
    .then(res => res.json())
    .then(data => {
      Object.keys(data).forEach(key => {
        const option1 = document.createElement("option");
        option1.value = key;
        option1.textContent = data[key];
        race1Select.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = key;
        option2.textContent = data[key];
        race2Select.appendChild(option2);
      });
    });

  function updateRacePreview() {
    const val1 = race1Select.value ? race1Select.options[race1Select.selectedIndex].text : "";
    const val2 = race2Select.value ? race2Select.options[race2Select.selectedIndex].text : "";

    if(val1 && val2) {
      racePreview.textContent = `${val1} / ${val2}`;
    } else if(val1) {
      racePreview.textContent = val1;
    } else if(val2) {
      racePreview.textContent = val2;
    } else {
      racePreview.textContent = "—";
    }
  }

  race1Select.addEventListener("change", updateRacePreview);
  race2Select.addEventListener("change", updateRacePreview);
}
