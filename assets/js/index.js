//From cirnornd.js
function randomInt(min, max) {   
	let badArg = new Error("Bad args ;-;");
	
	try {
		if( typeof min != 'number' || typeof max != 'number' ) throw badArg;
		min += 1
		return Math.floor(Math.random() * (max - min + 1)) + min;
	
	} catch (error) {
    return error;
  }
}

var contains = function(needle) {

    var findNaN = needle !== needle;
    var indexOf;

    if(!findNaN && typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function(needle) {
            var i = -1, index = -1;

            for(i = 0; i < this.length; i++) {
                var item = this[i];

                if((findNaN && item !== item) || item === needle) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return indexOf.call(this, needle) > -1;
};


let nal = navigator.language;

function setDaytimeMessage () {
	engMessageSet();
};

function setRandomBackground () {

	let backgroundClasses = [

		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen',
		'twenty',
		'twentyone',
		'twentytwo',
		'twentythree',
		'twentyfour',
		'twentyfive'

	],
	currentBackgroundClass = pickFromArray(backgroundClasses);

	document.body.classList.add(currentBackgroundClass);

};



function setTime () {

	let date = new Date(),

		time = [

			formatTimeUnit(date.getHours()),
			formatTimeUnit(date.getMinutes()),
			formatTimeUnit(date.getSeconds())

		];

	// joins all of the array elements into a string using the ':' separator
	// example: [16, 32, 03] -> "16:32:03"

	setHTMLContent('time', time.join(':'));

};

function init () {


	// init() gets executed only when the page is fully loaded

	setDaytimeMessage();
	setRandomBackground();
	setTime();

	// set interval to update time every second

	let timeInterval = setInterval(setTime, 1000);
};

// initialize on page load through a listener

document.addEventListener('DOMContentLoaded', init);

// UTILITY FUNCTIONS

// format time

function formatTimeUnit (unit) { return unit < 10 ? '0' + unit : unit };

// setHTMLContent is the kind of function that is referred to as a 'wrapper'

function setHTMLContent (selector, content) { return document.querySelector(selector) .innerHTML = content };

function getRandIndex(array) { return Math.floor(Math.random() * (array.length - 1)) }

function pickFromArray(array) { return array[Math.floor(Math.random() * (array.length - 1))] };

// Disable right click

document.oncontextmenu=RightMouseDown;
function RightMouseDown() { return false; }

// LANGUAGE FUNCTIONS

// English


function engMessageSet() {
        
	let hour = new Date().getHours();
	let time = "Good morning! UwU"
	
        if (hour < 12)      time = 'Good morning! UwU';
	else if (hour > 18) time = 'Good afternoon! OwO';
	else 		    time = 'Good evening! ^w^';
	
	setHTMLContent('.greeting', time);

}
