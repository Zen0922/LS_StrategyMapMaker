# LS_StrategyMapMaker

## CSV Format(memo)


|Type|Label|Color|Cord1|Cord2|Cord3|Cord4|DisplayLabel|DisplayKm|DisplayTiles|
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|0|1|2|3|4|5|6|7|8|9|
|`Dot`|●|●|●(LS)||||●|||
|`Line`|●|●|●(LS)|●(LS)|||●|●|●|
|`Area`|●|●|●(LS)|●(LS)|●(LS)|●(LS)|●|||
|`Text`|●|●|●(Image)|||||||
|`Title`|●|||||||||

●=必須入力

### Type

### Label


### Color
 点や線の色を16進数で指定してください。
 現在、rgb()やrgba()は使用できません。（CSVなので、",(カンマ)"が含まれてしまうことから正常に読み込みできません。）
 透過度を設定したい場合は、8桁のコードを指定してください。

### Cord1～4
#### (LS)
Last Shelterで使用する座標を指定します。
 
#### (Image)
画像上の座標を指定します。
この時、画像サイズはウィンドウサイズにより変化することから、画像サイズに対する比率で指定します。
幅が1000pxの画像にX座標100pxの位置に配置する場合、0.1を指定します。
（位置は画面上の設定ボタンから設定することを推奨します。）

### DisplayLabel
ラベルを表示するかを指定します。
Specifies whether to display the label.
- 表示する場合は"1"を指定してください。  Specify "1" to display.
- 表示しない場合は"0"を指定してください。  Specify "0" if you do not want to display it.

### DisplayKm


### DisplayTiles
