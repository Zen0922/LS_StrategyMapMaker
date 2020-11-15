// CSV形式で記録する
function EncodeCsvData(argType, argLabel, argColor, argCord1, argCord2, argCord3, argCord4, argDispLabel, argDispKm, argDispTiles) {
    var resultCsv = "";

    ///////////////
    // タイプ処理 //
    ///////////////
    if (!(argType === "Dot" || argType === "Line" || argType === "Area" || argType === "Text" || argType === "Title")) {
        return "";
    }
    resultCsv = argType + ",";

    ///////////////
    // ラベル処理 //
    ///////////////
    argLabel = argLabel.replace("\r\n", "");
    argLabel = argLabel.replace("\r", "");
    argLabel = argLabel.replace("\n", "");
    argLabel = argLabel.replace("<", "&lt;");
    argLabel = argLabel.replace(">", "&gt;");
    resultCsv = resultCsv + argLabel + ",";

    ///////////////
    // カラー処理 //
    ///////////////
    argColor = argColor.replace("\r\n", "");
    argColor = argColor.replace("\r", "");
    argColor = argColor.replace("\n", "");
    argColor = argColor.replace("<", "");
    argColor = argColor.replace(">", "");
    if (argType === "Title") {
        argColor = "";
    }
    resultCsv = resultCsv + argColor + ",";

    /////////////
    // 座標処理 //
    /////////////
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
    resultCsv = resultCsv + argCord1 + "," + argCord2 + "," + argCord3 + "," + argCord4 + ",";

    /////////////////
    // 表示制御情報 //
    /////////////////

    // 表示制御情報のうち不要な設定をクリア
    if (!(argType === "Dot" || argType === "Line" || argType === "Area")) {
        argDispLabel = "";
    }
    if (argType !== "Line") {
        argDispKm = "";
        argDispTiles = "";
    }

    // 表示制御情報を所定フォーマットに変換
    if (argType === "Dot" || argType === "Line" || argType === "Area") {
        if (!(argDispLabel === 1 || argDispLabel === 0)) {
            argDispLabel = 0;
        }
    }
    if (argType === "Line") {
        if (!(argDispKm === 1 || argDispKm === 0)) {
            argDispKm = 0;
        }
        if (!(argDispTiles === 1 || argDispTiles === 0)) {
            argDispTiles = 0;
        }
    }

    resultCsv = resultCsv + argDispLabel + "," + argDispKm + "," + argDispTiles;
    resultCsv = resultCsv + "\n";

    return resultCsv;
}


// CSVデータを配列で返却（1行ずつ）
function DecodeCsvData(argString) {
    var resVal = argString.split(",");
    if (resVal.length !== 10) {
        return false;
    }
    if (EncodeCsvData(resVal[0], resVal[1], resVal[2], resVal[3], resVal[4], resVal[5], resVal[6], resVal[7], resVal[8], resVal[9]) === "") {
        return false;
    }
    return resVal;
}