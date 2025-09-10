// js/main.js
// main.js はエントリーポイントとして全体の初期化を行う


import { initModal } from './modal.js';
import { initImageUpload } from './imageUpload.js';
import { initFrameSelector } from './frameSelector.js';
import { initNameText } from './name_text.js';
import { initSave } from './save.js';
import { initStatus } from './status.js';
import { initRace } from './race.js';
import { initSkill } from './skill.js';
import { initCardType } from './cardType.js';
import { initNote } from './note.js';
import { initElement } from './element.js';
import { initType } from './type.js';
import { initSkillBackground } from "./skill_background.js";
import { initRarity } from "./rarity.js";
import { initCopy } from "./copy.js";
import { initAdvSetting } from "./advSetting.js";
import { initCost } from "./cost.js";

document.addEventListener("DOMContentLoaded", () => {

    // ------------------------
    // 1. 各種初期化処理
    // ------------------------
    initModal();        // モーダル処理
    initImageUpload();  // 画像アップロード処理
    initFrameSelector(); // カード枠選択処理
    initNameText();    // カード名・コスト入力処理
    initSave();        // 画像保存処理
    initStatus();     // 攻撃力・防御力入力処理
    initRace();        // 種族選択処理
    initSkill();       // スキル・アビリティ入力処理
    initCardType();    //カードタイプ選択処理
    initNote();      //カード右下メモ入力処理
    initElement();    //カード属性選択処理
    initType();      //カード種別選択処理
    initSkillBackground(); //スキル・アビリティ背景透明度調整処理
    initRarity();      //レアリティ選択処理
    initCopy();        // 画像コピー処理
    initAdvSetting();      // 詳細設定モーダル処理
    initCost();   // コスト関連処理

    //アップロードした画像をリセットする機能
    document.getElementById("resetBase").addEventListener("click", () => {
        document.getElementById("baseUpload").value = "";
        document.getElementById("basePreview").src = "";
    });

    document.getElementById("resetOverlay").addEventListener("click", () => {
        document.getElementById("overlayUpload").value = "";
        document.getElementById("overlayPreview").src = "";
    });

    // ------------------------
    // 2. カード生成ボタンイベント
    // ------------------------


    // ------------------------
    // 3. モーダル初期化
    // ------------------------
    initModal("#rulesBtn", "data/modals/readme.json");
    initModal("#howtoBtn", "data/modals/how_to_use.json");
    initModal("#updatelogBtn", "data/modals/update_log.json");
    initModal("#templateBtn", "data/modals/template.json");


    // デバッグ用ログ
    const rulesBtn = document.getElementById("rulesBtn");
    const howtoBtn = document.getElementById("howtoBtn");
    const updatelogBtn = document.getElementById("updatelogBtn");
    const templateBtn = document.getElementById("templateBtn");

    rulesBtn.addEventListener("click", () => {
        console.log("利用規約ボタンがクリックされました");
    });

    howtoBtn.addEventListener("click", () => {
        console.log("使い方ボタンがクリックされました");
    });

    updatelogBtn.addEventListener("click", () => {
        console.log("アプデ履歴ボタンがクリックされました");
    });

    templateBtn.addEventListener("click", () => {
        console.log("テンプレートボタンがクリックされました");
    });

});

