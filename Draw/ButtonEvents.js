
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

//////////
// Draw //
//////////
function InfoRegist() {
    BaseMapDraw();
    LoadCsv();
    hideSettingForm();
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
        console.log(CsvLine);
        if (CsvLine !== false) {
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