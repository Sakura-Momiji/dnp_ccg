// note.js
export function initNote() {
    // 入力欄とプレビュー要素を取得
    const noteInput = document.getElementById("noteInput"); // 設定画面のテキスト入力
    const notePreview = document.getElementById("cardMemo"); // プレビュー右下のメモ

    // 入力時にプレビューを更新
    noteInput.addEventListener("input", () => {
        notePreview.textContent = noteInput.value || ""; // 空なら非表示に
    });

    // 初期値があれば反映
    if (noteInput.value) {
        notePreview.textContent = noteInput.value;
    }
}