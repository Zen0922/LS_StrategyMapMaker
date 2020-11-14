
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
function InfoRegist(){
    BaseMapDraw();
    var tmpTitle = $("#ImageTitle").val();
    DrawTitle( tmpTitle );
    DrawLine("#F00","test",0,0,1200,1200,1,1,1);
    DrawLine("#F00","test",0,0,1200,0,1,1,1);
    DrawLine("#F00","test",0,0,0,1200,1,1,1);
    DrawLine("#F00","test",600,600,0,1200,1,1,1);
    DrawLine("#F00","test",600,600,1200,0,1,1,1);
    PlotDots();
    hideSettingForm();
}