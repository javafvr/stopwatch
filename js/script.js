'use strict';

window.onload = function() {
	let msElem = document.getElementById('milliseconds'),
		secElem = document.getElementById('seconds'),
		minElem = document.getElementById('minutes'),
		hrElem = document.getElementById('hours'),
		startTimer = document.getElementById('startTimer'),
		stopTimer = document.getElementById('stopTimer'),
		clearTimer = document.getElementById('clearTimer'),
		timerId='';

	startTimer.onclick = function(e) {
		timerId = setTimeout(function tick() {
				timerId = setTimeout(tick, 0);
				
				if (msElem.innerHTML>999) {
					msElem.innerHTML=addPrefix(0,3);
					secElem.innerHTML++;
					secElem.innerHTML = addPrefix(secElem.innerHTML,2);

					if (secElem.innerHTML>59) {
						secElem.innerHTML=addPrefix(0,2);;
						minElem.innerHTML++;
						minElem.innerHTML = addPrefix(minElem.innerHTML,2);

						if (minElem.innerHTML>59) {
							minElem.innerHTML=addPrefix(0,2);;
							hrElem.innerHTML++;
							hrElem.innerHTML = addPrefix(hrElem.innerHTML,2);

						}
					}

				} else{
					msElem.innerHTML++
					msElem.innerHTML = addPrefix(msElem.innerHTML,3);
				}
			}, 0);
	};

	stopTimer.onclick = function(e){
		clearTimeout(timerId);
	};

	clearTimer.onclick = function(e){
		msElem.innerHTML = addPrefix(0,3);
		secElem.innerHTML = addPrefix(0,2);
		minElem.innerHTML = addPrefix(0,2);
		hrElem.innerHTML = addPrefix(0,2);
	};

	function addPrefix(number, len) {
		let delta = len - number.toString().length;
		let strNum ='';
		
		for (var i = 0; i < delta; i++) {
			strNum += '0';
		}

		return (strNum + number).slice(-length);
	}
};