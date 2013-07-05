// Retina など HiDPI 対応を想定した CSS スプライトの background-size を、スプライト画像の更新の時にいちいち更新しないでも済むようにするスクリプト
;(function(){
	$(document).ready(function(){
		var setIconSpriteImgSize = function(src, target){
			var iconSpriteLowResImg = new Image();
			iconSpriteLowResImg.src = src;
			iconSpriteLowResImg.onload = function(){$(target).css({'background-size': '' + iconSpriteLowResImg.width + 'px ' + iconSpriteLowResImg.height + 'px'});};
		};
		
		// CSS スプライトの低解像度画像の数だけ書く
		// ここでは、低解像度：「～_1x.png」、高解像度：「～_2x.png」「～_3x.png」……と想定
		setIconSpriteImgSize('./img/small_sprite.png','.spriteTest');
		// setIconSpriteImgSize('./img/spriteSmall_1x.png','.cssSpriteSmall');
		// setIconSpriteImgSize('./img/spriteMedium_1x.png','.cssSpriteMedium');
		// setIconSpriteImgSize('./img/spriteLarge_1x.png','.cssSpriteLarge');

		// ●引数の指定
		// ・src：低解像度画像の相対パス
		// ・target：
		// 　　CSS スプライトを適用するアイコン画像のクラス。
		// 　　ここでは、CSS スプライトを適用するタグが 2 つのクラスを持つことを想定
		// 　　例：
		// 　　　HTML
		// 　　　　<div class="cssSpriteSmall iconNext"></div>
		// 　　　CSS
		// 　　　　　.cssSpriteSmall {	// ←これを引数に指定
		// 　　　　　	background-image: url("../img/spriteSmall_1x.png");
		// 　　　　　	background-repeat: no-repeat;
		// 　　　　　}
		// 　　　　　.iconNext {
		// 　　　　　	background-position: -16px 0;
		// 　　　　　}
	});
})();
