(function ($) {
	(function(global, factory) {
		if (typeof define === 'function' && define.amd) {
			define(function() {
				return factory(global, global.document);
			});
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = factory(global, global.document);
		} else {
			global.Shake = factory(global, global.document);
		}
	} (typeof window !== 'undefined' ? window : this, function (window, document) {

		'use strict';

		function Shake(options) {
			//feature detect
			this.hasDeviceMotion = 'ondevicemotion' in window;

			this.options = {
				threshold: 15, //default velocity threshold for shake to register
				timeout: 1000 //default interval between events
			};

			if (typeof options === 'object') {
				for (var i in options) {
					if (options.hasOwnProperty(i)) {
						this.options[i] = options[i];
					}
				}
			}

			//use date to prevent multiple shakes firing
			this.lastTime = new Date();

			//accelerometer values
			this.lastX = null;
			this.lastY = null;
			this.lastZ = null;

			//create custom event
			if (typeof document.CustomEvent === 'function') {
				this.event = new document.CustomEvent('shake', {
					bubbles: true,
					cancelable: true
				});
			} else if (typeof document.createEvent === 'function') {
				this.event = document.createEvent('Event');
				this.event.initEvent('shake', true, true);
			} else {
				return false;
			}
		}

		//reset timer values
		Shake.prototype.reset = function () {
			this.lastTime = new Date();
			this.lastX = null;
			this.lastY = null;
			this.lastZ = null;
		};

		//start listening for devicemotion
		Shake.prototype.start = function () {
			this.reset();
			if (this.hasDeviceMotion) {
				window.addEventListener('devicemotion', this, false);
			}
		};

		//stop listening for devicemotion
		Shake.prototype.stop = function () {
			if (this.hasDeviceMotion) {
				window.removeEventListener('devicemotion', this, false);
			}
			this.reset();
		};

		//calculates if shake did occur
		Shake.prototype.devicemotion = function (e) {
			var current = e.accelerationIncludingGravity;
			var currentTime;
			var timeDifference;
			var deltaX = 0;
			var deltaY = 0;
			var deltaZ = 0;

			if ((this.lastX === null) && (this.lastY === null) && (this.lastZ === null)) {
				this.lastX = current.x;
				this.lastY = current.y;
				this.lastZ = current.z;
				return;
			}

			deltaX = Math.abs(this.lastX - current.x);
			deltaY = Math.abs(this.lastY - current.y);
			deltaZ = Math.abs(this.lastZ - current.z);

			if (((deltaX > this.options.threshold) && (deltaY > this.options.threshold)) || ((deltaX > this.options.threshold) && (deltaZ > this.options.threshold)) || ((deltaY > this.options.threshold) && (deltaZ > this.options.threshold))) {
				//calculate time in milliseconds since last shake registered
				currentTime = new Date();
				timeDifference = currentTime.getTime() - this.lastTime.getTime();

				if (timeDifference > this.options.timeout) {
					window.dispatchEvent(this.event);
					this.lastTime = new Date();
				}
			}

			this.lastX = current.x;
			this.lastY = current.y;
			this.lastZ = current.z;

		};

		//event handler
		Shake.prototype.handleEvent = function (e) {
			if (typeof (this[e.type]) === 'function') {
				return this[e.type](e);
			}
		};

		return Shake;
	}));

	var myShakeEvent = new Shake({
		threshold: 15
	});

	myShakeEvent.start();

	window.addEventListener('shake', shakeEventDidOccur, false);

	/* 音乐 */
	var musicHandle=$('.m-music');
	var audio=document.getElementById('J_audio');
	var audioFlag=0;
	musicHandle.on('click',function(){
		audioFlag=1;
		if($(this).hasClass('m-play')){
			audio.pause();
			$(this).removeClass('m-play');
			// $.fn.coffee.stop();
		}else{
			audio.play();
			$(this).addClass('m-play');
			// $.fn.coffee.start();
		}
	});
})(Zepto);

//摇一摇功能
function shakeEventDidOccur () {
	var result = document.getElementById("result");
	var hand = document.getElementById("hand");
	hand.className = "hand hand-animate";
	var arr = ['1','2','3','4','5'];
	var num = Math.floor(Math.random()*4);
	console.log(arr[num]);
	if(arr[num] == '1'){
		window.location.href = 'no_gift.html'
	}else{
		setTimeout(function(){
			hand.className = "hand";
			var body = $("body");
			var bh = body.height();
			var bw = body.width();
			$(".fullbg").css({
				height : bh,
				width  : bw,
				display: "block"
			});
			$("#form").show(500);
			var height = $("#form").height();
			var t = height / 2;
			$("#form").css('margin-top', '-' + t + 'px');
		}, 1000);
		//result.innerHTML = "恭喜，摇得"+arr[num]+"！";
	}

}



//弹窗功能
function show(ele) {
	var body = $("body");
	var bh = body.height();
	var bw = body.width();
	$(".fullbg").css({
		height : bh,
		width  : bw,
		display: "block"
	});
	$("#" + ele).show(500);
	var height = $("#" + ele).height();
	var t = height / 2;
	$("#" + ele).css('margin-top', '-' + t + 'px');
}
function mask_hide(ele) {
	$("#" + ele).hide();
	$(".fullbg").hide();
}