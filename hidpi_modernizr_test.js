// ●高精細ディスプレイを検知する Modernizr テスト
// <html> タグに「highresdisplay（no-highresdisplay）」と、「resratio_1x」「resratio_2x」…が出力される。
// 
// devicePixelRatio が 1.25 や 1.5 など小数点付きになる場合、「resratio_1x resratio_2x」のように「resratio_」が
// 2 つ出力されるので、CSS を次のように低解像度から順に記述して、高解像度が適用されるようにする。
// 
// .resretio_1x .cssSprite {
//     background-image: url("../image/csssprite_1x.png");
// }
// .resretio_2x .cssSprite {
//     background-image: url("../image/csssprite_2x.png");
// }
// 
// devicePixelRatio が 1.5 の場合など特殊ケースに特化したい場合は自分で何とかする。

;(function(){
	var isHiDPI = false,
		isDecimal = false,
		upperRatio = '',
		resolutionCheck = function(){
			var resNum = 1,
				lowerRatio = 'resratio_1x';
			// IE 対応
			if(screen.deviceXDPI){
				if(screen.deviceXDPI/screen.logicalXDPI > 1){
					isHiDPI = true;
					resNum = screen.deviceXDPI/screen.logicalXDPI;
				}
			// IE 以外
			} else if (window.devicePixelRatio!=undefined) { 
				if(window.devicePixelRatio > 1) {
					isHiDPI = true;
					resNum = window.devicePixelRatio;
				}
			}
			if(isHiDPI){
				if(resNum == parseInt(resNum)){	// 小数点以下がない場合
					lowerRatio = 'resratio_' + resNum + 'x';
				} else {	// 小数点以下がある場合
					var ratio = Math.floor(resNum);
					isDecimal = true;
					upperRatio = ratio + 1;
					upperRatio = 'resratio_' + upperRatio + 'x';
					lowerRatio = 'resratio_' + ratio + 'x';
				}
			}
			return lowerRatio;
		},
		argObj = {};
	argObj[resolutionCheck()] = true;
	argObj['highresdisplay'] = isHiDPI;
	if(isDecimal) {
		argObj[upperRatio] = true;
	}
	Modernizr.addTest(argObj);
})();
