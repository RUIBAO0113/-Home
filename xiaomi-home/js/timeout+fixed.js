$(function() {
	window.onscroll = function() {
		var h = document.documentElement.scrollTop || document.body.scrollTop;
		// console.log(h);
		if (h > 500) {
			$(".fixedScreen li:nth-child(6)").show();
		};
		if (h <= 500) {
			$(".fixedScreen li:nth-child(6)").hide(500);

		};
		$(".fixedScreen li:nth-child(6)").click(function() {
			document.documentElement.scrollTop == 0;
			document.body.scrollTop() == 0
		})
	};
	$(".fixedScreen li:nth-child(1)").hover(function() {
		$(".fixedScreen-first-box").show()

	}, function() {
		$(".fixedScreen-first-box").hide()
	})
});


$(function(){

function tow(n) {

	return n >= 0 && n < 10 ? '0' + n : '' + n;

}

function getDate() {
	"use strict";

	var oDate = new Date(); //获取日期对象

	var oldTime = oDate.getTime(); //现在距离1970年的毫秒数

	var newDate = new Date('2021/9/11 00:00:00');

	var newTime = newDate.getTime(); //2019年距离1970年的毫秒数

	var second = Math.floor((newTime - oldTime) / 1000); //未来时间距离现在的秒数

	var day = Math.floor(second / 86400); //整数部分代表的是天；一天有24*60*60=86400秒 ；

	second = second % 86400; //余数代表剩下的秒数；

	var hour = Math.floor(second / 3600); //整数部分代表小时；

	second %= 3600; //余数代表 剩下的秒数；

	var minute = Math.floor(second / 60);

	second %= 60;


		document.querySelector(".time-swiper-sumbox-span1").innerHTML=tow(hour);
		document.querySelector(".time-swiper-sumbox-span2").innerHTML=tow(minute);
		document.querySelector(".time-swiper-sumbox-span3").innerHTML=tow(second);

}


setInterval(getDate, 1000);
})



