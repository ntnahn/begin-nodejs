var formatTimeSecToFullTime = function(sec) {
    // Get the odd second from sec
    let secondOdd = parseInt((sec%60).toFixed(0));
    // Get the minute from secondOdd
    let minute = parseInt(((sec-secondOdd)/60).toFixed(0));
    // Get the odd minute from minute
    let minuteOdd = parseInt((minute%60).toFixed(0));
    // Get the hour from minuteOdd
    let hour = parseInt(((minute-minuteOdd)/60).toFixed(0));
    // Get the odd hour from hour
    let hourOdd = parseInt((hour%60).toFixed(0));
    let callDurationTime = '';
    // Insert hour
    hourOdd = checkTime(hourOdd);
    callDurationTime += hourOdd + ':';
    // Insert minute
    minuteOdd = checkTime(minuteOdd);
    callDurationTime += minuteOdd + ':';
    // Insert second
    secondOdd = checkTime(secondOdd);
    callDurationTime += secondOdd;
    // Add zero in front of numbers < 10
    function checkTime(i) {
        if (i < 10) {
        	if ( i < 1 ) {
          		return '00';
        	}
        	i = '0' + i;
      	}
      	return i;
    }

    return callDurationTime;
};
var lifeTime = 10; // sec
var bestResult = 0;
var result = 0;
window.onload = function() {
	var timeDisplay = document.getElementById('time-display');
	timeDisplay.innerHTML = formatTimeSecToFullTime(lifeTime);

	var resultDisplay = document.getElementById('result');

	// var buttonContinue = document.getElementById('continue');

	var timeout = null;

	var timer = function() {
		lifeTime--;
		timeDisplay.innerHTML = formatTimeSecToFullTime(lifeTime);
		timeout = setTimeout(timer, 1000);
		if ( lifeTime === 0 ) {
			clearTimeout(timeout);
		}
	};
	var displayResult = function(result) {
		resultDisplay.innerHTML = result + ' times';
	}
	var root = document.getElementById('root');
	var clicked = false;
	// buttonContinue.onlick = function() {
		
	// };
	root.onclick = function() {
		if ( lifeTime === 0 ) {
			// setTimeout(function() {
			// 	// Reset
			// 	clicked = false;
			// 	buttonContinue.classList.remove('hidden');
			// }, 3000);
			return;
		}
		if ( ! clicked ) {
			// Init
			timer();
			clicked = true;
			// buttonContinue.classList.add('hidden');
		} else {
			// Playing
			displayResult(++result);
		}
	};
};