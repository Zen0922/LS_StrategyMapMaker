// グローバル変数
const C_MAX_WIDTH = window.innerWidth - 20;
const C_MAX_HEIGHT = window.innerHeight - 60;
// 係数算出
// 算出方法：
// LSの座標の幅1200 / Canvasサイズの半分の幅1600÷2
const COE_W = (C_MAX_WIDTH / 2) / 1200;
const COE_H = C_MAX_HEIGHT / 1200;

//////////////
// Map Draw //
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

///////////////////////
// Basic Draw Method //
///////////////////////

// 指定座標にテキストをプロットする
//  Lable, CordX(Image), CordY(Image)
function DrawText(argLabel, argX, argY) {
    if (argLabel == "") {
        return false;
    } else {
        const LSMap = document.getElementById("LSMap");
        const ctx = LSMap.getContext('2d');
        // 座標（比）を画像サイズに戻す
        argX = argX * C_MAX_WIDTH;
        argY = argY * C_MAX_HEIGHT;

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
        ctx.fillText(argLabel, argX + 20, argY);
        ctx.closePath();
        return true;
    }

}

// 点をプロットする
//  CordX(LS), CordY(LS)
function DrawDot(argColor, argLabel, argX, argY, argDispLabel) {
    const LSMap = document.getElementById("LSMap");
    const ctx = LSMap.getContext('2d');
    ctx.width = C_MAX_WIDTH;
    ctx.height = C_MAX_HEIGHT;

    var tmpCord = EncodeLSToImage(argX, argY);
    var tmpx = tmpCord[0];
    var tmpy = tmpCord[1];
    ctx.beginPath();
    ctx.arc(tmpx, tmpy, 2, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
    ctx.closePath();
    ctx.fillStyle = argColor;
    ctx.fill();

    if (argDispLabel === 1) {
        DrawText(argLabel, tmpx, tmpy);
    }
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
//  argColor: HEX or rgb() or rgba()
//  argLabel: Free Text
//  argX(LS), argY(LS)
// argDisplay, argDispKm, argDispTiles -> 1:true, 0:false
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

// 面を描く関数
function DrawArea(argColor, argLabel, argX1, argY1, argX2, argY2, argX3, argY3, argX4, argY4, argDispLabel) {
    const LSMap = document.getElementById("LSMap");
    const ctx = LSMap.getContext('2d');
    var tmpCord;
    var tmpCords = [[0, 0], [0, 0], [0, 0], [0, 0]];
    var escapeCord = [0, 0];
    var tmpText;

    // Cord(LS) -> Cord(Image)
    tmpCord = EncodeLSToImage(argX1, argY1);
    tmpCords[0][0] = tmpCord[0];
    tmpCords[0][1] = tmpCord[1];
    tmpCord = EncodeLSToImage(argX2, argY2);
    tmpCords[1][0] = tmpCord[0];
    tmpCords[1][1] = tmpCord[1];
    tmpCord = EncodeLSToImage(argX3, argY3);
    tmpCords[2][0] = tmpCord[0];
    tmpCords[2][1] = tmpCord[1];
    tmpCord = EncodeLSToImage(argX4, argY4);
    tmpCords[3][0] = tmpCord[0];
    tmpCords[3][1] = tmpCord[1];

    // SortX asc
    tmpCords.sort(function (a, b) { return (a[0] - b[0]); });
    // SortY
    // 1番目と2番目の座標でYが大きい方を2番目に、3番目と4番目の座標でYが大きいほうを3番目に
    if (tmpCords[0][1] > tmpCords[1][1]) {
        escapeCord = tmpCords[0];
        tmpCords[0] = tmpCords[1];
        tmpCords[1] = escapeCord;
    }
    if (tmpCords[2][1] < tmpCords[3][1]) {
        escapeCord = tmpCords[3];
        tmpCords[3] = tmpCords[2];
        tmpCords[2] = escapeCord;
    }
    // Draw
    ctx.beginPath();
    ctx.moveTo(tmpCords[0][0], tmpCords[0][1]);
    ctx.lineTo(tmpCords[1][0], tmpCords[1][1]);
    ctx.lineTo(tmpCords[2][0], tmpCords[2][1]);
    ctx.lineTo(tmpCords[3][0], tmpCords[3][1]);
    ctx.lineTo(tmpCords[0][0], tmpCords[0][1]);
    ctx.fillStyle = argColor;
    ctx.closePath();
    ctx.fill();

    // 描画基準座標決定
    if (argDispLabel === 1) {
        var tmpCenterX = tmpCords[0][0] - (tmpCords[0][0] - tmpCords[3][0]) / 2 + 20;
        var tmpCenterY = tmpCords[0][1] - (tmpCords[0][1] - tmpCords[3][1]) / 2 - 10;

        // 描画処理
        ctx.font = "9pt sans-serif";
        var textWidth = ctx.measureText(argLabel);
        // テキスト用の枠を描画
        ctx.beginPath();
        ctx.rect(tmpCenterX, tmpCenterY, textWidth.width + 20, -30);
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fill();
        ctx.closePath();
        // テキストを描画
        ctx.beginPath();
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.fillText(argLabel, tmpCenterX + 10, tmpCenterY - 10);
        ctx.closePath();

    }
}



/////////////////////////
// Internal processing //
/////////////////////////

// LastShelterの座標を画像の座標に変換する関数
//  CordX(LS), CordY(LS) -> CordX(Image), CordY(Image)
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
