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

function PlotText(argLabel, argX, argY) {
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
}

function PlotDot(argX, argY) {
    const LSMap = document.getElementById("LSMap");
    const ctx = LSMap.getContext('2d');
    ctx.width = C_MAX_WIDTH;
    ctx.height = C_MAX_HEIGHT;

    var tmpCord = EncodeLSToImage(argX, argY);
    var tmpx = tmpCord[0];
    var tmpy = tmpCord[1];
    //$("#Points").text("x :" + x + "\n" + "y :" + y + "\n" + "COE_X: " + COE_Y + "\n" + "COE_Y: " + COE_Y + "\n" + "tmpx: " + tmpx + "\n" + "tmpy: " + tmpy);
    ctx.beginPath();
    ctx.arc(tmpx, tmpy, 5, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
    ctx.closePath();
    ctx.fillStyle = "rgb(255,0,0)";
    ctx.fill();
    return Array(tmpx, tmpy);
}

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


