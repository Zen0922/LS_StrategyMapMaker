// グローバル変数
const C_MAX_WIDTH = window.innerWidth - 20;
const C_MAX_HEIGHT = window.innerHeight - 60;
// 係数算出
// 算出方法：
// LSの座標の幅1200 / Canvasサイズの半分の幅1600÷2
const COE_W = (C_MAX_WIDTH / 2) / 1200;
const COE_H = C_MAX_HEIGHT / 1200;

//////////////
// BaseDraw //
//////////////
function BaseMapDraw() {
    const LSMap = document.getElementById("LSMap");
    const ctx = LSMap.getContext('2d');

    var tmpX = 0;
    var tmpY = 0;

    document.getElementById('LSMap').width = C_MAX_WIDTH;
    document.getElementById('LSMap').height = C_MAX_HEIGHT;

    // Canvasサイズ
    ctx.width = C_MAX_WIDTH;
    ctx.height = C_MAX_HEIGHT;

    // Land Colors
    const C_COLOR_DEATHDESERT = "rgba(255,228,181,0.7)";
    const C_COLOR_BADLANDS = "rgba(204,255,204,0.7)";
    const C_COLOR_BARRENGLASSLAND = "rgba(153,204,51,0.7)";
    const C_COLOR_DARKFOREST = "rgba(51,102,51,0.7)";
    const C_COLOR_DOOMSDAYWASTELAND = "rgba(153,102,0,0.7)";

    // Outline - Death Desert
    ctx.beginPath();
    ctx.moveTo(C_MAX_WIDTH / 2, 0);
    ctx.lineTo(0, C_MAX_HEIGHT / 2);
    ctx.lineTo(C_MAX_WIDTH / 2, C_MAX_HEIGHT);
    ctx.lineTo(C_MAX_WIDTH, C_MAX_HEIGHT / 2);
    ctx.lineTo(C_MAX_WIDTH / 2, 0);
    ctx.closePath();
    ctx.fillStyle = C_COLOR_DEATHDESERT;
    ctx.shadowColor = "rgba(0,0,0,0.3)";
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 50;
    ctx.fill();

    // Outline - Badlands
    ctx.beginPath();
    var tmpCord = EncodeLSToImage(200, 200);
    tmpX = tmpCord[0];
    tmpY = tmpCord[1];
    ctx.moveTo(tmpX, tmpY);
    tmpCord = EncodeLSToImage(200, 1000);
    tmpX = tmpCord[0];
    tmpY = tmpCord[1];
    ctx.lineTo(tmpX, tmpY);
    tmpCord = EncodeLSToImage(1000, 1000);
    tmpX = tmpCord[0];
    tmpY = tmpCord[1];
    ctx.lineTo(tmpX, tmpY);
    tmpCord = EncodeLSToImage(1000, 200);
    tmpX = tmpCord[0];
    tmpY = tmpCord[1];
    ctx.lineTo(tmpX, tmpY);
    tmpCord = EncodeLSToImage(200, 200);
    tmpX = tmpCord[0];
    tmpY = tmpCord[1];
    ctx.lineTo(tmpX, tmpY);
    ctx.closePath();
    ctx.fillStyle = C_COLOR_BADLANDS;
    ctx.shadowColor = C_COLOR_BADLANDS;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 50;
    ctx.fill();

    // Outline - Barren Glassland
    ctx.beginPath();
    var tmpCord = EncodeLSToImage(400, 400);
    tmpX = tmpCord[0];
    tmpY = tmpCord[1];
    ctx.moveTo(tmpX, tmpY);
    tmpCord = EncodeLSToImage(400, 800);
    tmpX = tmpCord[0];
    tmpY = tmpCord[1];
    ctx.lineTo(tmpX, tmpY);
    tmpCord = EncodeLSToImage(800, 800);
    tmpX = tmpCord[0];
    tmpY = tmpCord[1];
    ctx.lineTo(tmpX, tmpY);
    tmpCord = EncodeLSToImage(800, 400);
    tmpX = tmpCord[0];
    tmpY = tmpCord[1];
    ctx.lineTo(tmpX, tmpY);
    tmpCord = EncodeLSToImage(400, 400);
    tmpX = tmpCord[0];
    tmpY = tmpCord[1];
    ctx.lineTo(tmpX, tmpY);
    ctx.closePath();
    ctx.fillStyle = C_COLOR_BARRENGLASSLAND;
    ctx.shadowColor = C_COLOR_BARRENGLASSLAND;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 50;
    ctx.fill();

    // Outline - Dark Forest
    ctx.beginPath();
    var tmpCord = EncodeLSToImage(500, 500);
    tmpX = tmpCord[0];
    tmpY = tmpCord[1];
    ctx.moveTo(tmpX, tmpY);
    tmpCord = EncodeLSToImage(500, 700);
    tmpX = tmpCord[0];
    tmpY = tmpCord[1];
    ctx.lineTo(tmpX, tmpY);
    tmpCord = EncodeLSToImage(700, 700);
    tmpX = tmpCord[0];
    tmpY = tmpCord[1];
    ctx.lineTo(tmpX, tmpY);
    tmpCord = EncodeLSToImage(700, 500);
    tmpX = tmpCord[0];
    tmpY = tmpCord[1];
    ctx.lineTo(tmpX, tmpY);
    tmpCord = EncodeLSToImage(500, 500);
    tmpX = tmpCord[0];
    tmpY = tmpCord[1];
    ctx.lineTo(tmpX, tmpY);
    ctx.closePath();
    ctx.fillStyle = C_COLOR_DARKFOREST;
    ctx.shadowColor = C_COLOR_DARKFOREST;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 50;
    ctx.fill();

    // Outline - Doomsday Wasteland
    ctx.beginPath();
    var tmpCord = EncodeLSToImage(574, 574);
    tmpX = tmpCord[0];
    tmpY = tmpCord[1];
    ctx.moveTo(tmpX, tmpY);
    tmpCord = EncodeLSToImage(574, 626);
    tmpX = tmpCord[0];
    tmpY = tmpCord[1];
    ctx.lineTo(tmpX, tmpY);
    tmpCord = EncodeLSToImage(626, 626);
    tmpX = tmpCord[0];
    tmpY = tmpCord[1];
    ctx.lineTo(tmpX, tmpY);
    tmpCord = EncodeLSToImage(626, 574);
    tmpX = tmpCord[0];
    tmpY = tmpCord[1];
    ctx.lineTo(tmpX, tmpY);
    tmpCord = EncodeLSToImage(574, 574);
    tmpX = tmpCord[0];
    tmpY = tmpCord[1];
    ctx.lineTo(tmpX, tmpY);
    ctx.closePath();
    ctx.fillStyle = C_COLOR_DOOMSDAYWASTELAND;
    ctx.shadowColor = C_COLOR_DOOMSDAYWASTELAND;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 20;
    ctx.fill();

    // 影の設定を戻す
    ctx.shadowBlur = 0;

}

// PlotDots
// 入力フォーマット
//  XXXX:YYYY,Label<Return>
function PlotDots() {
    var plotText = $("#Points").val();
    // 改行コードを揃えて前後の余分な改行を除去
    plotText = plotText.replace("\r\n", "\n");
    plotText = plotText.replace("\r", "\n");
    plotText = plotText.trim();
    // 行ごとに分割して処理
    var plotLines = plotText.split("\n");
    plotLines.forEach(function (elem, index) {
        // テキストを分解
        tmpText = elem.split(",");
        tmpLabel = tmpText[1];
        tmpCord = tmpText[0].split(":");
        tmpX = tmpCord[0];
        tmpY = tmpCord[1];
        var realCord = PlotDot(tmpX, tmpY);     // 点をプロット
        // ラベルを表示
        PlotText(tmpLabel, realCord[0] + 10, realCord[1]);
    });

}

// 指定座標にテキストをプロットする
function PlotText(argLabel, argX, argY) {
    if (argLabel == "") {
        return false;
    } else {
        const LSMap = document.getElementById("LSMap");
        const ctx = LSMap.getContext('2d');
        ctx.width = C_MAX_WIDTH;
        ctx.height = C_MAX_HEIGHT;

        ctx.font = "bold 12pt sans-serif";
        var textWidth = ctx.measureText(argLabel);
        // テキスト用の枠を描画
        ctx.beginPath();
        ctx.rect(argX + 10, argY + 10, textWidth.width + 20, -30);
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fill();
        ctx.closePath();
        // テキストを描画
        ctx.beginPath();
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.fillText(tmpLabel, argX + 20, argY);
        ctx.closePath();
        return true;
    }

}

// LastShelterの座標を画像の座標に変換して点（丸）をプロットする関数
function PlotDot(argX, argY) {
    const LSMap = document.getElementById("LSMap");
    const ctx = LSMap.getContext('2d');
    ctx.width = C_MAX_WIDTH;
    ctx.height = C_MAX_HEIGHT;

    var tmpCord = EncodeLSToImage(argX, argY);
    var tmpx = tmpCord[0];
    var tmpy = tmpCord[1];
    ctx.beginPath();
    ctx.arc(tmpx, tmpy, 5, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
    ctx.closePath();
    ctx.fillStyle = "rgb(255,0,0)";
    ctx.fill();
    return Array(tmpx, tmpy);
}

// LastShelterの座標を画像の座標に変換する関数
function EncodeLSToImage(ix, iy) {
    var ox = 0;
    var baseX = 0;
    var oy = 0;
    var baseY = 0;
    var result = [];

    // 傾きを計算する
    COE_X = C_MAX_WIDTH / C_MAX_HEIGHT;
    COE_Y = C_MAX_HEIGHT / C_MAX_WIDTH;

    // X座標を求める
    ox = ix * COE_W;    // 基準座標
    baseX = C_MAX_WIDTH / 2 - iy * COE_W;
    ox = ox + baseX;

    // Y座標を求める
    oy = -1 * COE_Y * ox + C_MAX_HEIGHT / 2;
    baseY = C_MAX_HEIGHT * ix / 1200;
    oy = oy + baseY;

    result[0] = ox;
    result[1] = oy;
    return result;
}

// タイトルを画像に出力する関数
function DrawTitle(argTitle) {
    const LSMap = document.getElementById("LSMap");
    const ctx = LSMap.getContext('2d');

    ctx.font = "italic 18pt sans-serif";
    // テキスト用の枠を描画
    ctx.beginPath();
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillText(argTitle, 10, 30);
    ctx.closePath();
}

// 線を描く関数
function DrawLine(argColor, argLabel, argX1, argY1, argX2, argY2, argDispLabel, argDispKm, argDispTiles) {
    const LSMap = document.getElementById("LSMap");
    const ctx = LSMap.getContext('2d');
    var tmpCord;
    var tmpText;

    // LS座標を画像座標に変換
    tmpCord = EncodeLSToImage(argX1, argY1);
    var tmpX1 = tmpCord[0];
    var tmpY1 = tmpCord[1];
    tmpCord = EncodeLSToImage(argX2, argY2);
    var tmpX2 = tmpCord[0];
    var tmpY2 = tmpCord[1];

    ctx.beginPath();
    ctx.moveTo(tmpX1, tmpY1);
    ctx.lineTo(tmpX2, tmpY2);
    ctx.strokeStyle = argColor;
    ctx.closePath();
    ctx.stroke();

    //////////////////////////
    // ラベル・距離の表示処理 //
    //////////////////////////
    // 距離（km）の計算
    if (argDispKm === 1) {
        // 距離の計算
        var tmpDisKm = CalcDistanceKm(argX1, argY1, argX2, argY2);
    }
    // 距離（タイル数）の計算
    if (argDispTiles === 1) {
        var tmpDisTiles = CalcDistanceTiles(argX1, argY1, argX2, argY2);
    }

    // 距離・タイル数の表示テキスト生成
    if (argDispKm === 1 && argDispTiles === 1) {
        tmpText = "(" + tmpDisKm + "km - " + tmpDisTiles + "Tiles)";
    } else if (argDispKm === 1 && argDispTiles !== 1) {
        tmpText = "(" + tmpDisKm + "km)";
    } else if (argDispKm !== 1 && argDispTiles === 1) {
        tmpText = "(" + tmpDisTiles + "Tiles)";
    }

    // 最終テキスト生成
    if (argDispLabel === 1 && (argDispKm === 1 || argDispTiles === 1)) {
        tmpText = argLabel + " " + tmpText;
    } else {
        tmpText = argLabel;
    }

    // 描画基準座標決定
    var tmpCenterX = tmpX2 - (tmpX2 - tmpX1) / 2 + 20;
    var tmpCenterY = tmpY2 - (tmpY2 - tmpY1) / 2 - 10;

    // 描画処理
    ctx.font = "9pt sans-serif";
    var textWidth = ctx.measureText(tmpText);
    // テキスト用の枠を描画
    ctx.beginPath();
    ctx.rect(tmpCenterX, tmpCenterY, textWidth.width + 20, -30);
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fill();
    ctx.closePath();
    // テキストを描画
    ctx.beginPath();
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillText(tmpText, tmpCenterX + 10, tmpCenterY - 10);
    ctx.closePath();
}

// 2点間の距離を計算
function CalcDistanceKm(argX1, argY1, argX2, argY2) {
    // d=√((x_2-x_1)²+(y_2-y_1)²)
    return Math.round(Math.sqrt(Math.pow(argX2 - argX1, 2) + Math.pow(argY2 - argY1, 2)));
}

// 2点間の最小タイル数を計算
function CalcDistanceTiles(argX1, argY1, argX2, argY2) {
    var tmpDisX = Math.abs(argX1 - argX2);
    var tmpDisY = Math.abs(argY1 - argY2);
    if (tmpDisX < tmpDisY) {
        return tmpDisY;
    } else {
        return tmpDisX;
    }
}

// CSV形式で記録する
function EncodeCsvData(argType, argLabel, argColor, argCord1, argCord2, argCord3, argCord4) {
    var resultCsv = "";

    // タイプ処理
    if (!(argType === "Dot" || argType === "Line" || argType === "Area" || argType === "Text" || argType === "Title")) {
        return "";
    }
    resultCsv = argType + ",";

    // ラベル処理
    argLabel = argLabel.replace("\r\n", "");
    argLabel = argLabel.replace("\r", "");
    argLabel = argLabel.replace("\n", "");
    argLabel = argLabel.replace("<", "&lt;");
    argLabel = argLabel.replace(">", "&gt;");
    resultCsv = resultCsv + argLabel + ",";

    // カラー処理
    argColor = argColor.replace("\r\n", "");
    argColor = argColor.replace("\r", "");
    argColor = argColor.replace("\n", "");
    argColor = argColor.replace("<", "");
    argColor = argColor.replace(">", "");
    if (argType === "Title") {
        argColor = "";
    }
    resultCsv = resultCsv + argColor + ",";

    // 座標処理
    if (!isLSCord(argCord1)) {
        argCord1 = "";
    }
    if (!isLSCord(argCord2)) {
        argCord2 = "";
    }
    if (!isLSCord(argCord3)) {
        argCord3 = "";
    }
    if (!isLSCord(argCord4)) {
        argCord4 = "";
    }

    // 入力タイプ別に不要な座標を削除する処理
    if (argType === "Dot" || argType === "Text") {
        argCord2 = "";
        argCord3 = "";
        argCord4 = "";
    } else if (argType === "Line") {
        argCord3 = "";
        argCord4 = "";
    } else if (argType === "Title") {
        argCord1 = "";
        argCord2 = "";
        argCord3 = "";
        argCord4 = "";
    }
    // 座標の組み合わせチェック（必要な座標が存在するか）
    if (argCord1 === "" && (argType === "Dot" || argType === "Text")) {
        return "";
    } else if ((argCord1 === "" || argCord2 === "") && argType === "Line") {
        return "";
    } else if ((argCord1 === "" || argCord2 === "" || argCord3 === "" || argCord4 === "") && argType === "Area") {
        return "";
    }
    resultCsv = resultCsv + argCord1 + "," + argCord2 + "," + argCord3 + "," + argCord4 + "\n";

    return resultCsv;
}

console.log(DecodeCsvData("Area,Test,#F00,1200:1200,1200:1200,1200:1200,1200:1200"))

// CSVデータを配列で返却
function DecodeCsvData(argString) {
    var resVal = argString.split(",");
    if (resVal.length !== 7) {
        return false;
    }
    if (EncodeCsvData(resVal[0], resVal[1], resVal[2], resVal[3], resVal[4], resVal[5], resVal[6]) === "") {
        return false;
    }
    return resVal;

}

// LastShelterの座標かどうかを判別する
function isLSCord(argCord) {
    // 座標フォーマットに一致するか？
    //  9999:9999
    if (!(/^\d{1,4}:\d{1,4}$/.test(argCord))) {
        return false;
    }
    var tmpCord = argCord.split(":");
    if (!(0 <= tmpCord[0] && tmpCord[0] <= 1200)) {
        return false;
    }
    if (!(0 <= tmpCord[1] && tmpCord[1] <= 1200)) {
        return false;
    }
    return true;
}