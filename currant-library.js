// Currant Library v1.0.0
// Copyright (c) 2015 The Number Guy
// Published under the MIT license: https://github.com/TheNumberGuy/Currant-Library/blob/master/LICENSE
// How to use this library: https://github.com/TheNumberGuy/Currant-Library/wiki

// GENERAL

function get(id) {
	return document.getElementById(id);
}

function isString(variable) {
	return (typeof variable == 'string' || variable instanceof String);
}

function elem(arg) {
	if (isString(arg)) return get(arg);                 // if argument is a string, return element with that id
		else if (arg && arg.nodeType === 1) return arg; // if argument is an element, return it
		else return false;                              // if argument is neither a string nor an element, return false
}

function val(str,diff,unit) {
	return (parseFloat(str.slice(0,str.length-unit.length))+diff) + unit;
}

// CSS & APPEARANCE

function show(arg) {
	if (!elem(arg)) return; // checks if element doesn't exist
	
	if (arg.previousStyleDisplayValue || arg.previousStyleDisplayValue == "") { // a manually created property with a name that (hopefully) doesn't exist already
		arg.style.display = arg.previousStyleDisplayValue;
		return true;
	} else {
		// You might want show() to also display elements which have not yet been displayed, so you can set a default display value here:
		// arg.style.display = "block"; // default value for elements which have not yet been displayed
		// If you do that, you might want to return true (next line), to prevent code from e.g. displaying the element again manually.
		return false;
	}
}

function hide(arg) {
	if (!elem(arg)) return;
	
	arg.previousStyleDisplayValue = arg.style.display;console.log(arg.style.display);
	arg.style.display = "none";
}

function displayBlock(arg) {
	if (!elem(arg)) return;
	
	arg.style.display = "block";
}

function displayInline(arg) {
	if (!elem(arg)) return;
	
	arg.style.display = "inline";
}

function displayInlineBlock(arg) {
	if (!elem(arg)) return;
	
	arg.style.display = "inline-block";
}

function visible(arg) {
	if (!elem(arg)) return;
	
	arg.style.visibility = "visible";
}

function hidden(arg) {
	if (!elem(arg)) return;
	
	arg.style.visibility = "hidden";
}

// OTHER

function addEvent(obj, event, fn) {
	if (!obj || !event || !fn) return;
	
	if (obj.addEventListener) { // feature check
		addEvent = function() { // effectively rewrites addEvent() function so feature check doesn't need to be done again
			obj.addEventListener(event, fn);
		}
	} else if (obj.attachEvent) {
		addEvent = function() {
			obj.attachEvent("on"+event, fn);
		}
	}
	addEvent(obj, event, fn); // runs the rewritten function for the first time
}

function addScript(path, body) {
	if (!isString(path)) return;
	
	var script = document.createElement("script");
	script.src = path;
	if (body) document.querySelector("body").appendChild(script);
		else document.querySelector("head").appendChild(script);
}