
/////////////
// Loading //
/////////////
$("#Input_Title").show();
$("#Input_Csv").hide();
$("#Input_Dots").hide();
$("#Input_Lines").hide();
$("#Input_Area").hide();
$("#Input_Text").hide();

//////////////////
// Setting Form //
//////////////////
function switchSettingForm() {
    $("#InputArea").toggle();
}

function showSettingForm() {
    $("#InputArea").show();
}

function hideSettingForm() {
    $("#InputArea").hide();
}

/////////////////////////
// Switch Setting Type //
/////////////////////////
function setTitleMode() {
    $("#ButtonSetTitle").css('background-color', '#FFA500');
    $("#ButtonSetCsv").css('background-color', '#EEE');
    $("#ButtonSetDots").css('background-color', '#EEE');
    $("#ButtonSetLines").css('background-color', '#EEE');
    $("#ButtonSetArea").css('background-color', '#EEE');
    $("#ButtonSetText").css('background-color', '#EEE');

    $("#Input_Title").show();
    $("#Input_Csv").hide();
    $("#Input_Dots").hide();
    $("#Input_Lines").hide();
    $("#Input_Area").hide();
    $("#Input_Text").hide();
}

function setDotsMode() {
    $("#ButtonSetTitle").css('background-color', '#EEE');
    $("#ButtonSetCsv").css('background-color', '#EEE');
    $("#ButtonSetDots").css('background-color', '#FFA500');
    $("#ButtonSetLines").css('background-color', '#EEE');
    $("#ButtonSetArea").css('background-color', '#EEE');
    $("#ButtonSetText").css('background-color', '#EEE');

    $("#Input_Title").hide();
    $("#Input_Csv").hide();
    $("#Input_Dots").show();
    $("#Input_Lines").hide();
    $("#Input_Area").hide();
    $("#Input_Text").hide();
}

function setLinesMode() {
    $("#ButtonSetTitle").css('background-color', '#EEE');
    $("#ButtonSetCsv").css('background-color', '#EEE');
    $("#ButtonSetDots").css('background-color', '#EEE');
    $("#ButtonSetLines").css('background-color', '#FFA500');
    $("#ButtonSetArea").css('background-color', '#EEE');
    $("#ButtonSetText").css('background-color', '#EEE');

    $("#Input_Title").hide();
    $("#Input_Csv").hide();
    $("#Input_Dots").hide();
    $("#Input_Lines").show();
    $("#Input_Area").hide();
    $("#Input_Text").hide();
}

function setAreaMode() {
    $("#ButtonSetTitle").css('background-color', '#EEE');
    $("#ButtonSetCsv").css('background-color', '#EEE');
    $("#ButtonSetDots").css('background-color', '#EEE');
    $("#ButtonSetLines").css('background-color', '#EEE');
    $("#ButtonSetArea").css('background-color', '#FFA500');
    $("#ButtonSetText").css('background-color', '#EEE');

    $("#Input_Title").hide();
    $("#Input_Csv").hide();
    $("#Input_Dots").hide();
    $("#Input_Lines").hide();
    $("#Input_Area").show();
    $("#Input_Text").hide();
}

function setTextMode() {
    $("#ButtonSetTitle").css('background-color', '#EEE');
    $("#ButtonSetCsv").css('background-color', '#EEE');
    $("#ButtonSetDots").css('background-color', '#EEE');
    $("#ButtonSetLines").css('background-color', '#EEE');
    $("#ButtonSetArea").css('background-color', '#EEE');
    $("#ButtonSetText").css('background-color', '#FFA500');

    $("#Input_Title").hide();
    $("#Input_Csv").hide();
    $("#Input_Dots").hide();
    $("#Input_Lines").hide();
    $("#Input_Area").hide();
    $("#Input_Text").show();
}

function setCsvMode() {
    $("#ButtonSetTitle").css('background-color', '#EEE');
    $("#ButtonSetCsv").css('background-color', '#FFA500');
    $("#ButtonSetDots").css('background-color', '#EEE');
    $("#ButtonSetLines").css('background-color', '#EEE');
    $("#ButtonSetArea").css('background-color', '#EEE');
    $("#ButtonSetText").css('background-color', '#EEE');

    $("#Input_Title").hide();
    $("#Input_Csv").show();
    $("#Input_Dots").hide();
    $("#Input_Lines").hide();
    $("#Input_Area").hide();
    $("#Input_Text").hide();
}

///////////////////////
// Load Csv And Draw //
///////////////////////
function LoadCsv() {
    var tmpCord = [[0, 0], [0, 0], [0, 0], [0, 0]];
    var CsvText = $("#InputFormCsv").val();
    // 改行コードを揃えて前後の余分な改行を除去
    CsvText = CsvText.replace("\r\n", "\n");
    CsvText = CsvText.replace("\r", "\n");
    CsvText = CsvText.trim();

    // 行ごとに分割して処理
    var CsvLines = CsvText.split("\n");
    CsvLines.forEach(function (elem, index) {
        var CsvLine = DecodeCsvData(elem);
        if (CsvLine !== false) {
            // 色をRGBに戻す
            if (CsvLine[0] !== "Text") {
                var TC = tinycolor(CsvLine[2]);
                CsvLine[2] = TC.toRgbString();
            }
            // 座標を分割
            if (CsvLine[3] !== "") {
                tmpCord[0] = CsvLine[3].split(":");
            }
            if (CsvLine[4] !== "") {
                tmpCord[1] = CsvLine[4].split(":");
            }
            if (CsvLine[5] !== "") {
                tmpCord[2] = CsvLine[5].split(":");
            }
            if (CsvLine[6] !== "") {
                tmpCord[3] = CsvLine[6].split(":");
            }

            CsvLine[7] = Number(CsvLine[7]);
            CsvLine[8] = Number(CsvLine[8]);
            CsvLine[9] = Number(CsvLine[9]);


            if (CsvLine !== false) {
                if (CsvLine[0] === "Dot") {
                    DrawDot(CsvLine[2], CsvLine[1], tmpCord[0][0], tmpCord[0][1], CsvLine[7]);
                } else if (CsvLine[0] === "Line") {
                    DrawLine(CsvLine[2], CsvLine[1], tmpCord[0][0], tmpCord[0][1], tmpCord[1][0], tmpCord[1][1], CsvLine[7], CsvLine[8], CsvLine[9]);
                } else if (CsvLine[0] === "Area") {
                    DrawArea(CsvLine[2], CsvLine[1], tmpCord[0][0], tmpCord[0][1], tmpCord[1][0], tmpCord[1][1], tmpCord[2][0], tmpCord[2][1], tmpCord[3][0], tmpCord[3][1], CsvLine[7]);
                } else if (CsvLine[0] === "Text") {
                    DrawText(CsvLine[1], tmpCord[0][0], tmpCord[0][1]);
                } else if (CsvLine[0] === "Title") {
                    DrawTitle(CsvLine[1]);
                }
            }
        }
    });

}

////////////////////
// Input Dot List //
////////////////////

DotListNumber = 1;      // 加算用関数

function InputDotListAdd() {
    $("#Input_Dot_List").append('<tr class="DotList" id="DotList_' + DotListNumber + '">' +
        '<td><input type="text" class="ColorPick" id="InputDotColor_' + DotListNumber + '" /></td>' +
        '<td><input type="text" size="40" id="InputDotLabel_' + DotListNumber + '" placeholder="Label 名前" /></td>' +
        '<td><input type="number" step="1" min="0" max="1200" class="Cord" id="InputDotCordX_' + DotListNumber + '" placeholder="X" />:</td>' +
        '<td><input type="number" step="1" min="0" max="1200" class="Cord" id="InputDotCordY_' + DotListNumber + '" placeholder="Y" /></td>' +
        '<td><input type="checkbox" id="InputDotDisplayLabel_' + DotListNumber + '" />Display Label ラベルを表示</td>' +
        '<td><img src="./Img/Icon_Remove.png" onClick="InputDotListRemove(' + DotListNumber + ')" /></td>' +
        '</tr>');
    // spectrumを設定
    $("#InputDotColor_" + DotListNumber).spectrum({
        preferredFormat: "hex",
        showPaletteOnly: true,
        togglePaletteOnly: true,
        togglePaletteMoreText: 'more',
        togglePaletteLessText: 'less',
        color: 'purple',
        palette: [
            ["#000", "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3", "#fff"],
            ["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f"],
            ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc"],
            ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd"],
            ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0"],
            ["#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79"],
            ["#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47"],
            ["#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130"]
        ]
    });
    // DotListの連番を加算
    DotListNumber++;
}

// Input Dot List Remove
function InputDotListRemove(argRemoveLine) {
    $("#DotList_" + argRemoveLine).remove();
}

/////////////////////
// Input Line List //
/////////////////////

LineListNumber = 1;

function InputLineListAdd() {
    $("#Input_Line_List").append(
        '<tbody class="LineList" id="LineList_' + LineListNumber + '">' +
        '<tr>' +
        '<td><input type="text" class="ColorPick" id="InputLineColor_' + LineListNumber + '" /></td>' +
        '<td><input type="text" id="InputLineLabel_' + LineListNumber + '" placeholder="Label 名前" /></td>' +
        '<td>' +
        '<input type="number" step="1" min="0" max="1200" class="Cord" id="InputLineBeginX_' + LineListNumber + '" placeholder="X1" />:' +
        '<input type="number" step="1" min="0" max="1200" class="Cord" id="InputLineBeginY_' + LineListNumber + '" placeholder="Y1" />To' +
        '</td>' +
        '<td>' +
        '<input type="number" step="1" min="0" max="1200" class="Cord" id="InputLineEndX_' + LineListNumber + '" placeholder="X2" />:' +
        '<input type="number" step="1" min="0" max="1200" class="Cord" id="InputLineEndY_' + LineListNumber + '" placeholder="Y2" />' +
        '</td>' +
        '<td rowspan="2"><img src="./Img/Icon_Remove.png" onClick="InputLineListRemove(' + LineListNumber + ')" /></td>' +
        '</tr><tr>' +
        '<td colspan="4">' +
        '<input type="checkbox" id="InputLineDisplayLabel_' + LineListNumber + '" />Label ラベル&nbsp;&nbsp;' +
        '<input type="checkbox" id="InputLineDisplayDistanceKm_' + LineListNumber + '" />Distance(km) 距離(km)&nbsp;&nbsp;' +
        '<input type="checkbox" id="InputLineDisplayDistanceTiles_' + LineListNumber + '" />Distance(tiles) 距離(タイル数)' +
        '</td></tr></tbody>'
    );
    // spectrumを設定
    $("#InputLineColor_" + LineListNumber).spectrum({
        preferredFormat: "hex",
        showPaletteOnly: true,
        togglePaletteOnly: true,
        togglePaletteMoreText: 'more',
        togglePaletteLessText: 'less',
        color: 'red',
        palette: [
            ["#000", "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3", "#fff"],
            ["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f"],
            ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc"],
            ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd"],
            ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0"],
            ["#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79"],
            ["#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47"],
            ["#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130"]
        ]
    });
    LineListNumber++;
}

function InputLineListRemove(argRemoveLine) {
    $("#LineList_" + argRemoveLine).remove();
}


/////////////////////
// Input Area List //
/////////////////////

AreaListNumber = 1;
function InputAreaListAdd() {
    $("#Input_Area_List").append(
        '<tbody class="AreaList" id="AreaList_' + AreaListNumber + '">' +
        '<tr><td>' +
        '<input type="text" class="ColorPick" id="InputAreaColor_' + AreaListNumber + '" />' +
        '<input type="text" id="InputAreaLabel_' + AreaListNumber + '" placeholder="Label ラベル" />' +
        '<input type="checkbox" id="InputAreaDisplayLabel_' + AreaListNumber + '" />Label ラベル' +
        '</td><td rowspan="2">' +
        '<img src="./Img/Icon_Remove.png" onClick="InputAreaListRemove(' + AreaListNumber + ')" />' +
        '</td></tr><tr>' +
        '<td>' +
        '<input type="number" step="1" min="0" max="1200" class="Cord" id="InputAreaX1_' + AreaListNumber + '" placeholder="X" />:' +
        '<input type="number" step="1" min="0" max="1200" class="Cord" id="InputAreaY1_' + AreaListNumber + '" placeholder="Y" />&nbsp;' +
        '<input type="number" step="1" min="0" max="1200" class="Cord" id="InputAreaX2_' + AreaListNumber + '" placeholder="X" />:' +
        '<input type="number" step="1" min="0" max="1200" class="Cord" id="InputAreaY2_' + AreaListNumber + '" placeholder="Y" />&nbsp;' +
        '<input type="number" step="1" min="0" max="1200" class="Cord" id="InputAreaX3_' + AreaListNumber + '" placeholder="X" />:' +
        '<input type="number" step="1" min="0" max="1200" class="Cord" id="InputAreaY3_' + AreaListNumber + '" placeholder="Y" />&nbsp;' +
        '<input type="number" step="1" min="0" max="1200" class="Cord" id="InputAreaX4_' + AreaListNumber + '" placeholder="X" />:' +
        '<input type="number" step="1" min="0" max="1200" class="Cord" id="InputAreaY4_' + AreaListNumber + '" placeholder="Y" />' +
        '</td></tr></tbody>'
    );
    // spectrumを設定
    $("#InputAreaColor_" + AreaListNumber).spectrum({
        preferredFormat: "hex",
        showAlpha: true,
    });
    AreaListNumber++;
}

function InputAreaListRemove(argRemoveLine) {
    $("#AreaList_" + argRemoveLine).remove();
}

/////////////////////
// Input Text List //
/////////////////////

// 動作モード制御変数
isPickCord = false;
// マウス追従イベントを開始（ページロードと同時に実行）
document.addEventListener("DOMContentLoaded", function () {
    const Canvas = document.getElementById("LSMap");
    // マウス追従イベント
    Canvas.addEventListener('mousemove', function (e) {
        $("#PreviewTextCord").css({
            'top': e.clientY - 30, 'left': e.clientX
        });
    });
});

// Canvas上の画像取得イベント
function GetCanvasCord(argElementNo) {
    isPickCord = true;
    hideSettingForm();

    // 要素の上にマウスポインタがある時のみ動作
    $("#LSMap").mouseout(function () {
        if (isPickCord) {
            $("#PreviewTextCord").hide();
        }
    });
    $("#LSMap").mouseover(function () {
        if (isPickCord) {
            $("#PreviewTextCord").show();
        }
    });

    // クリック時の動作
    $("#LSMap").click(function (e) {
        if (isPickCord) {
            isPickCord = false;
            $("#PreviewTextCord").hide();
            //alert( "X:" + e.offsetX + " Y:" + e.offsetY);
            // 座標情報を代入
            $("#InputTextX_" + argElementNo).val(e.offsetX);
            $("#InputTextY_" + argElementNo).val(e.offsetY);
            // 画像を差替
            $("#InputCordMode_" + argElementNo).html('<img src="./Img/Plot_Cord_Selected.png" />');
            $("#LSMap").off();
            showSettingForm();
        }
    });
}

TextListNumber = 1;
function InputTextListAdd() {
    $("#Input_Text_List").append(
        '<tr class="TextList" id="TextList_' + TextListNumber + '">' +
        '<td style="vertical-align: middle;"><input type="text" id="InputText_' + TextListNumber + '" placeholder="Label ラベル" /></td>' +
        '<td style="vertical-align: middle;">' +
        '<input type="number" step="1" min="0" max="99999" class="CordImage" id="InputTextX_' + TextListNumber + '" style="color: #DDD;" placeholder="X" disabled />:' +
        '<input type="number" step="1" min="0" max="99999" class="CordImage" id="InputTextY_' + TextListNumber + '" style="color: #DDD;" placeholder="Y" disabled />' +
        '</td><td style="vertical-align: middle;">' +
        '<span id="InputCordMode_' + TextListNumber + '" onClick="GetCanvasCord(' + TextListNumber + ')"><img src="./Img/Plot_Cord.png" /></span>' +
        '</td><td>' +
        '<img src="./Img/Icon_Remove.png" onClick="InputTextListRemove(' + TextListNumber + ')" />' +
        '</td></tr>'
    );
    TextListNumber++;
}

function InputTextListRemove(argRemoveLine) {
    $("#TextList_" + argRemoveLine).remove();
}


////////////////
// Encode Csv //
////////////////

function TitleEncodeCsv() {
    var tmpImageTitle = $("#ImageTitle").val();
    var tmpCsv = EncodeCsvData("Title", tmpImageTitle, "", "", "", "", "", "", "", "");
    $("#InputFormCsv").text(tmpCsv);
}

function DotEncodeCsv() {
    for (var i = 0; i <= DotListNumber; i++) {
        if ($("#DotList_" + i).length) {
            var tmpColor = $("#InputDotColor_" + i).val();
            var TC = tinycolor(tmpColor);
            if (TC.isValid()) {
                tmpColor = TC.toHex8String();
            } else {
                tmpColor = "#000";
            }
            var tmpLabel = $("#InputDotLabel_" + i).val();
            var tmpX1 = $("#InputDotCordX_" + i).val();
            var tmpY1 = $("#InputDotCordY_" + i).val();
            var tmpDisplayLabel = $("#InputDotDisplayLabel_" + i).prop('checked');
            if (tmpDisplayLabel) {
                tmpDisplayLabel = 1;
            } else {
                tmpDisplayLabel = 0;
            }
            var tmpCsv = EncodeCsvData("Dot", tmpLabel, tmpColor, tmpX1 + ":" + tmpY1, "", "", "", tmpDisplayLabel, 0, 0);
            $("#InputFormCsv").append(tmpCsv);
        }
    }
}

function LineEncodeCsv() {
    for (var i = 0; i <= LineListNumber; i++) {
        if ($("#LineList_" + i).length) {
            var tmpColor = $("#InputLineColor_" + i).val();
            var TC = tinycolor(tmpColor);
            if (TC.isValid()) {
                tmpColor = TC.toHex8String();
            } else {
                tmpColor = "#000";
            }
            var tmpLabel = $("#InputLineLabel_" + i).val();
            var tmpBeginX1 = $("#InputLineBeginX_" + i).val();
            var tmpBeginY1 = $("#InputLineBeginY_" + i).val();
            var tmpEndX1 = $("#InputLineEndX_" + i).val();
            var tmpEndY1 = $("#InputLineEndY_" + i).val();
            var tmpDisplayLabel = $("#InputLineDisplayLabel_" + i).prop('checked');
            if (tmpDisplayLabel) {
                tmpDisplayLabel = 1;
            } else {
                tmpDisplayLabel = 0;
            }
            var tmpDisplayDistanceKm = $("#InputLineDisplayDistanceKm_" + i).prop('checked');
            if (tmpDisplayDistanceKm) {
                tmpDisplayDistanceKm = 1;
            } else {
                tmpDisplayDistanceKm = 0;
            }
            var tmpDisplayDistanceTiles = $("#InputLineDisplayDistanceTiles_" + i).prop('checked');
            if (tmpDisplayDistanceTiles) {
                tmpDisplayDistanceTiles = 1;
            } else {
                tmpDisplayDistanceTiles = 0;
            }
            var tmpCsv = EncodeCsvData("Line", tmpLabel, tmpColor, tmpBeginX1 + ":" + tmpBeginY1, tmpEndX1 + ":" + tmpEndY1, "", "", tmpDisplayLabel, tmpDisplayDistanceKm, tmpDisplayDistanceTiles);
            $("#InputFormCsv").append(tmpCsv);
        }
    }
}

function AreaEncodeCsv() {
    for (var i = 0; i <= AreaListNumber; i++) {
        if ($("#AreaList_" + i).length) {
            var tmpColor = $("#InputAreaColor_" + i).val();
            var TC = tinycolor(tmpColor);
            if (TC.isValid()) {
                tmpColor = TC.toHex8String();
            } else {
                tmpColor = "#80FF0000";
            }
            var tmpLabel = $("#InputAreaLabel_" + i).val();
            var tmpAreaX1 = $("#InputAreaX1_" + i).val();
            var tmpAreaY1 = $("#InputAreaY1_" + i).val();
            var tmpAreaX2 = $("#InputAreaX2_" + i).val();
            var tmpAreaY2 = $("#InputAreaY2_" + i).val();
            var tmpAreaX3 = $("#InputAreaX3_" + i).val();
            var tmpAreaY3 = $("#InputAreaY3_" + i).val();
            var tmpAreaX4 = $("#InputAreaX4_" + i).val();
            var tmpAreaY4 = $("#InputAreaY4_" + i).val();
            var tmpDisplayLabel = $("#InputAreaDisplayLabel_" + i).prop('checked');
            if (tmpDisplayLabel) {
                tmpDisplayLabel = 1;
            } else {
                tmpDisplayLabel = 0;
            }
            var tmpCsv = EncodeCsvData(
                "Area", tmpLabel, tmpColor,
                tmpAreaX1 + ":" + tmpAreaY1,
                tmpAreaX2 + ":" + tmpAreaY2,
                tmpAreaX3 + ":" + tmpAreaY3,
                tmpAreaX4 + ":" + tmpAreaY4,
                tmpDisplayLabel, 0, 0);

            $("#InputFormCsv").append(tmpCsv);
        }
    }
}

function TextEncodeCsv() {
    for (var i = 0; i <= TextListNumber; i++) {
        if ($("#TextList_" + i).length) {
            var tmpText = $("#InputText_" + i).val();
            var tmpCordX1 = $("#InputTextX_" + i).val();
            var tmpCordY1 = $("#InputTextY_" + i).val();
            var tmpCsv = EncodeCsvData("Text", tmpText, "", tmpCordX1 + ":" + tmpCordY1, "", "", "", 0, 0, 0);
            $("#InputFormCsv").append(tmpCsv);
        }
    }
}

///////////////////
// 描画順序を整理 //
///////////////////
// Area -> Line -> Dot -> Text -> Title　の順でソート
function SortCsv() {
    var ImportCsvText = $("#InputFormCsv").val();
    // 改行コードを揃えて前後の余分な改行を除去
    ImportCsvText = ImportCsvText.replace("\r\n", "\n");
    ImportCsvText = ImportCsvText.replace("\r", "\n");
    ImportCsvText = ImportCsvText.trim();

    // 行ごとに分割して処理
    var ImportCsvLines = ImportCsvText.split("\n");
    var ExportCsvLines = [];
    var tmpTitleLines = [];
    var tmpDotLines = [];
    var tmpLineLines = [];
    var tmpAreaLines = [];
    var tmpTextLines = [];

    // 各配列に分散格納
    ImportCsvLines.forEach(function (oneLine) {
        switch (oneLine.substr(0, 3)) {
            case "Dot":
                tmpDotLines[tmpDotLines.length] = oneLine;
                break;
            case "Lin":
                tmpLineLines[tmpLineLines.length] = oneLine;
                break;
            case "Tit":
                tmpTitleLines[tmpTitleLines.length] = oneLine;
                break;
            case "Are":
                tmpAreaLines[tmpAreaLines.length] = oneLine;
                break;
            case "Tex":
                tmpTextLines[tmpTextLines.length] = oneLine;
                break;
            default:
                break;
        }
    });

    // 再配置
    tmpAreaLines.forEach(function (oneLine) {
        ExportCsvLines[ExportCsvLines.length] = oneLine;
    });
    tmpLineLines.forEach(function (oneLine) {
        ExportCsvLines[ExportCsvLines.length] = oneLine;
    });
    tmpDotLines.forEach(function (oneLine) {
        ExportCsvLines[ExportCsvLines.length] = oneLine;
    });
    tmpTextLines.forEach(function (oneLine) {
        ExportCsvLines[ExportCsvLines.length] = oneLine;
    });
    tmpTitleLines.forEach(function (oneLine) {
        ExportCsvLines[ExportCsvLines.length] = oneLine;
    });
    // CSVに書き出し
    $("#InputFormCsv").text("");
    ExportCsvLines.forEach(function (oneLine) {
        oneLine = oneLine.trim();
        $("#InputFormCsv").append(oneLine + "\n");
    });
}

/////////////////
// 入力チェック //
/////////////////
document.addEventListener("DOMContentLoaded", function () {
    $('input:enabled').blur(function (event) {
        var tmpClass = $(event.target).attr("class");

        switch(tmpClass){
            case "Cord":
                if( isNaN($(event.target).val())){
                    $(event.target).val("");
                }
                
            default:
                break;
        }

    });
});

//////////
// Draw //
//////////
function InfoRegist() {
    // Encode CSV
    TitleEncodeCsv();
    DotEncodeCsv();
    LineEncodeCsv();
    AreaEncodeCsv();
    TextEncodeCsv();
    // Sort CSV
    SortCsv();

    // Draw
    BaseMapDraw();
    LoadCsv();
    hideSettingForm();
}

