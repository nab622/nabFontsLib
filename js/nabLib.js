/*
MIT License

Copyright (c) 2021 nab622

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/


nabLibPresent = true


// -------------------- GLOBALS --------------------
// -------------------- GLOBALS --------------------

// To get trace data from warnings and make errors fatal, set this to true
debug = false

warningCount = 0
errorCount = 0

fileSizeDenominations = [ 'byt', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB' ]
fileSizeColors = [ '33B', '3BB', '3B3', 'BB3', 'B33', 'B3B', '999', 'FFF' ]

nabLibTransparencyGrid = 'linear-gradient(45deg, #666 0%, #666 25%, #6660 25%, #6660 75%, #666 75%, #666 100%), linear-gradient(315deg, #666 0%, #666 25%, #6660 25%, #6660 75%, #666 75%, #666 100%), linear-gradient(0deg, #444 0%, #444 100%)'
nabLibTransparencyGridSize = '0.75rem 0.75rem'

nabLibMonths = [
{	name : 'January',
	abbr : 'Jan',
	number : 1,
},
{	name : 'February',
	abbr : 'Feb',
	number : 2,
},
{	name : 'March',
	abbr : 'Mar',
	number : 3,
},
{	name : 'April',
	abbr : 'Apr',
	number : 4,
},
{	name : 'May',
	abbr : 'May',
	number : 5,
},
{	name : 'June',
	abbr : 'Jun',
	number : 6,
},
{	name : 'July',
	abbr : 'Jul',
	number : 7,
},
{	name : 'August',
	abbr : 'Aug',
	number : 8,
},
{	name : 'September',
	abbr : 'Sep',
	number : 9,
},
{	name : 'October',
	abbr : 'Oct',
	number : 10,
},
{	name : 'November',
	abbr : 'Nov',
	number : 11,
},
{	name : 'December',
	abbr : 'Dec',
	number : 12,
},
]

romanNumerals = [
	{ 'digit' : 'M',	'value' : 1000 },
	{ 'digit' : 'CM',	'value' : 900 },
	{ 'digit' : 'D',	'value' : 500 },
	{ 'digit' : 'CD',	'value' : 400 },
	{ 'digit' : 'C',	'value' : 100 },
	{ 'digit' : 'XC',	'value' : 90 },
	{ 'digit' : 'L',	'value' : 50 },
	{ 'digit' : 'XL',	'value' : 40 },
	{ 'digit' : 'X',	'value' : 10 },
	{ 'digit' : 'IX',	'value' : 9 },
	{ 'digit' : 'V',	'value' : 5 },
	{ 'digit' : 'IV',	'value' : 4 },
	{ 'digit' : 'I',	'value' : 1 }
]



// -------------------- STYLES --------------------
// -------------------- STYLES --------------------
// THESE ARE *ONLY* TO BE USED IF ABSOLUTELY NECESSARY.

if(typeof(document) !== 'undefined') {	// Undefined check allows web workers to use this file
	nabLibStyle = document.createElement('style')
	nabLibStyle.appendChild(document.createTextNode(`
	/* This animation will blink an element red to get the user's attention */
	.nabLibFlashRed {
		animation-name: nabLibFlashRedKeyframes;
		animation-duration: 1s;
		animation-direction: normal;
		animation-timing-function: ease-in-out;
	}

	@keyframes nabLibFlashRedKeyframes {
		0%		{ box-shadow: 0px 0px 0.7em 0.2em #44F, inset 0px 0px 3em #44F; }
		8%		{ box-shadow: 0px 0px 0.7em 0.2em #F44, inset 0px 0px 3em #F44; color: #444; }
		20%		{ box-shadow: 0px 0px 0.7em 0.2em #F00, inset 0px 0px 3em #F00; color: #FFF; }
		85%		{ box-shadow: 0px 0px 0.7em 0.2em #F44, inset 0px 0px 3em #F44; color: #444; }
		100%	{ box-shadow: 0px 0px 0.7em 0.2em #44F, inset 0px 0px 3em #44F; }
	}

	.nabLibHoverHighlight:hover {
		filter: brightness(110%);
	}

	`))
	document.head.appendChild(nabLibStyle)
}

function flashElementRed(inputID, alsoFlashBackground = true, focusOnElement = true) {
	// This function can accept an element or a string ID
	let element = inputID
	if(typeof(inputID) === 'string') element = document.getElementById(inputID)

	if(element === null) return
	if(element.hasOwnProperty('flashing') && element.flashing === true) return	// We're already flashing, stop now to prevent bugs

	element.flashing = true
	removeClassName(element, 'nabLibFlashRed')
	setTimeout(()=>{
		if(focusOnElement) element.focus()
		addClassName(element, 'nabLibFlashRed')
		let savedColor = element.style.backgroundColor
		if(alsoFlashBackground) element.style.backgroundColor = '#F00'
		setTimeout(()=>{
			if(alsoFlashBackground) element.style.backgroundColor = savedColor
			element.flashing = false
		}, 500)
	}, 100)
}


// -------------------- CSS --------------------
// -------------------- CSS --------------------

function getCSSVar(variableName) {
	// This is used to get CSS variable values from :root
	return getComputedStyle(document.querySelector(':root')).getPropertyValue('--' + variableName).trim()
}

function setCSSVar(variableName, newValue) {
	// This is used to set CSS variable values in :root
	if(typeof(newValue) !== 'string') newValue = newValue.toString()
	if(newValue.includes(' ')) {
		newValue = "'" + newValue.replace("'", '\\\'') + "'"
	}
	document.querySelector(':root').style.setProperty('--' + variableName, newValue)
}



// -------------------- ROMAN NUMERALS --------------------
// -------------------- ROMAN NUMERALS --------------------

function convertRomanNumeralsToInt(inputString) {
	// This function parses a string of Roman Numerals into an integer
	// If the string is not a valid Roman numeral, it will return False

	inputString = inputString.trim()
	value = 0

	if(typeof(inputString) !== 'string') return false

	if(inputString.toUpperCase() != inputString) {
		// Roman numerals must be upper case!
		return false
	}

	let i = 0	// Index of romanNumerals
	let j = 0	// Index of inputString
	let digitRepeats = 0
	while(i < romanNumerals.length && j < inputString.length) {
		digitRepeats = 0
		digitLength = romanNumerals[i]['digit'].length
		while(j + digitLength <= inputString.length && romanNumerals[i]['digit'] == inputString.substring(j, j + digitLength)) {
			digitRepeats++
			if(digitRepeats > 3) return false
			value += romanNumerals[i]['value']
			j += digitLength
		}
		i++
	}

	if(j < inputString.length) return false

	return value
}

function convertIntToRomanNumerals(inputInt) {
	// This function parses an integer to a string of Roman Numerals

	output = ''

	if(isNaN(inputInt)) return false
	inputInt = parseInt(inputInt)

	let i = 0	// Index of romanNumerals
	let j = 0	// Index of inputString
	let digitRepeats = 0
	while(i < romanNumerals.length) {
		digitRepeats = 0
		while(inputInt >= romanNumerals[i]['value']) {
			digitRepeats++
			if(digitRepeats > 3) return false
			output = output + romanNumerals[i]['digit']
			inputInt -= romanNumerals[i]['value']
		}
		i++
	}

	return output
}


// -------------------- TIME --------------------
// -------------------- TIME --------------------

function secondsToTime(inputSeconds, minFields = 2) {
	if(isNaN(inputSeconds)) printError('secondsToTime: inputSeconds is not a number!', inputSeconds)

	let output = []

	let divisors = [ 60, 60, 24, 7 ]

	for(let i = 0; i < divisors.length; i++) {
		if(inputSeconds <= 0 && i >= minFields) break
		output.unshift(leadingString(inputSeconds % divisors[i], divisors[i].toString().length, '0'))
		inputSeconds = parseInt(inputSeconds / divisors[i])
	}

	return output.join(':')
}



// -------------------- DATES --------------------
// -------------------- DATES --------------------

function dateToString(inputTimestamp, fullMonthName = true, allowCorrectionForBadDates = true) {
	if(isNaN(inputTimestamp)) printError('dateToString: inputTimestamp is not a number!', inputTimestamp)

	// Fix dates that are out of range (Remember to account for milliseconds!)
	if(allowCorrectionForBadDates == true && inputTimestamp < 2000000000) inputTimestamp *= 1000
	let offset = new Date().getTimezoneOffset() * 60 * 1000
	let date = new Date(inputTimestamp - offset)

	let year = date.getFullYear()
	let month = nabLibMonths[date.getMonth()]
	if(fullMonthName == true) {
		month = month.name
	} else {
		month = month.abbr
	}
	let day = date.getDate()

	// If we need to output the date in a specific order, determine that here

	return month + ' ' + day.toString() + getNumberSuffix(day) + ', ' + year
}



// -------------------- COLORS --------------------
// -------------------- COLORS --------------------

function checkValidHexColor(inputColor) {
	testColor = inputColor.replace(/[^A-F0-9]/ig, '')
	if(inputColor == testColor) return true
	return false
}

function hexToRgb(colorValue) {
	let output = []
	colorValue = readColor(colorValue)
	output.push(parseInt(colorValue.substring(0, 2), 16))
	output.push(parseInt(colorValue.substring(2, 4), 16))
	output.push(parseInt(colorValue.substring(4, 6), 16))

	if(colorValue.length > 6) output.push(parseInt(colorValue.substring(6, 8), 16))

	return output
}

function rgbToHex(r = null, g = null, b = null, a = 255) {
	// This function takes in three integers and returns a hex value
	// For compatibility, the parameters can also be given as an array

	if(Array.isArray(r) && r.length >= 3) {
		if(r.length > 3) a = r[3]
		b = r[2]
		g = r[1]
		r = r[0]
	}

	if(isNaN(r)) {
		printError('rgbToHex: Invalid red value: ', r, g, b, a)
	}
	if(isNaN(g)) {
		printError('rgbToHex: Invalid green value: ', r, g, b, a)
	}
	if(isNaN(b)) {
		printError('rgbToHex: Invalid blue value: ', r, g, b, a)
	}
	if(isNaN(a)) {
		printError('rgbToHex: Invalid alpha value: ', r, g, b, a)
	}

	r = clamp(parseInt(r), 0, 255)
	g = clamp(parseInt(g), 0, 255)
	b = clamp(parseInt(b), 0, 255)
	a = clamp(parseInt(a), 0, 255)

	return leadingString(r.toString(16), 2, '0') + leadingString(g.toString(16), 2, '0') + leadingString(b.toString(16), 2, '0') + (a >= 255 ? '' : leadingString(a.toString(16), 2, '0'))
}

function rgbToHsl(r, g, b) {
	// r, g, and b must be between 0 and 255

	r /= 255; g /= 255; b /= 255
	let max = Math.max(r, g, b)
	let min = Math.min(r, g, b)
	let d = max - min
	let h
	if (d === 0) h = 0
	else if (max === r) h = (g - b) / d % 6
	else if (max === g) h = (b - r) / d + 2
	else if (max === b) h = (r - g) / d + 4
	let l = (min + max) / 2
	let s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1))
	return [h * 60, s, l]
}

function hslToRgb(h, s, l) {
	let c = (1 - Math.abs(2 * l - 1)) * s
	let hp = h / 60.0
	let x = c * (1 - Math.abs((hp % 2) - 1))
	let rgb1
	if (isNaN(h)) rgb1 = [0, 0, 0]
	else if (hp <= 1) rgb1 = [c, x, 0]
	else if (hp <= 2) rgb1 = [x, c, 0]
	else if (hp <= 3) rgb1 = [0, c, x]
	else if (hp <= 4) rgb1 = [0, x, c]
	else if (hp <= 5) rgb1 = [x, 0, c]
	else if (hp <= 6) rgb1 = [c, 0, x]
	let m = l - c * 0.5
	return [
		Math.round(255 * (rgb1[0] + m)),
		Math.round(255 * (rgb1[1] + m)),
		Math.round(255 * (rgb1[2] + m))
	]
}

function hsvToRgb(h, s, v) {
/*	accepts parameters:

	h  Object = {h:x, s:y, v:z}
	OR 
	h, s, v
*/
	var r, g, b, i, f, p, q, t;
	if (arguments.length === 1) {
		s = h.s, v = h.v, h = h.h;
	}
	i = Math.floor(h * 6);
	f = h * 6 - i;
	p = v * (1 - s);
	q = v * (1 - f * s);
	t = v * (1 - (1 - f) * s);
	switch (i % 6) {
		case 0: r = v, g = t, b = p; break;
		case 1: r = q, g = v, b = p; break;
		case 2: r = p, g = v, b = t; break;
		case 3: r = p, g = q, b = v; break;
		case 4: r = t, g = p, b = v; break;
		case 5: r = v, g = p, b = q; break;
	}

	r = Math.round(r * 255)
	g = Math.round(g * 255)
	b = Math.round(b * 255)

	return [ r, g, b ]
}

function rgbToHsv(r, g, b) {
	let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn
	rabs = r / 255
	gabs = g / 255
	babs = b / 255
	v = Math.max(rabs, gabs, babs),
	diff = v - Math.min(rabs, gabs, babs)
	diffc = c => (v - c) / 6 / diff + 1 / 2
	percentRoundFn = num => Math.round(num * 100) / 100
	if (diff == 0) {
		h = s = 0
	} else {
		s = diff / v
		rr = diffc(rabs)
		gg = diffc(gabs)
		bb = diffc(babs)

		if (rabs === v) {
			h = bb - gg
		} else if (gabs === v) {
			h = (1 / 3) + rr - bb
		} else if (babs === v) {
			h = (2 / 3) + gg - rr
		}
		if (h < 0) {
			h += 1
		}else if (h > 1) {
			h -= 1
		}
	}

	h = Math.round(h * 360),
	s = percentRoundFn(s * 100),
	v = percentRoundFn(v * 100)

	return [ h, s, v ]
}

function interpolateHexColors(inputColor, changeColor, balance = 0.5) {
	inputColor = readColor(inputColor)
	changeColor = readColor(changeColor)
	balance = clamp(balance, 0, 1)

	let num1 = null
	let num2 = null
	let output = ''

	for(let i = 0; i < 8; i += 2) {
		num1 = null
		num2 = null
		if(inputColor.length >= i + 2) num1 = parseInt(inputColor.substring(i, i + 2), 16)
		if(changeColor.length >= i + 2) num2 = parseInt(changeColor.substring(i, i + 2), 16)

		if(num1 == null && num2 == null) {
			break
		} else if(num1 == null) {
			output += leadingString(num2.toString(16), 2, '0')
			continue
		} else if(num2 == null) {
			output += leadingString(num1.toString(16), 2, '0')
			continue
		}

		output += leadingString((Math.floor(num1 + ((num2 - num1) * balance))).toString(16), 2, '0')
	}

	return output
}

function interpolateHexColorInRange(min, max, value, color1, color2) {
	// This function is used to dynamically color an object based on it's value within a range
	// This is very useful for things like file sizes
	color1 = readColor(color1)
	color2 = readColor(color2)

	if(value < min) return color1
	if(value > max) return color2

	value = value - min
	max = max - min
	let multiplier = value / max

	let r1 = parseInt(color1.substring(0, 2), 16)
	let g1 = parseInt(color1.substring(2, 4), 16)
	let b1 = parseInt(color1.substring(4, 6), 16)
	let a1 = parseInt('FF', 16)
	if(color1.length == 8) a1 = parseInt(color1.substring(6, 8), 16)

	let r2 = parseInt(color2.substring(0, 2), 16)
	let g2 = parseInt(color2.substring(2, 4), 16)
	let b2 = parseInt(color2.substring(4, 6), 16)
	let a2 = parseInt('FF', 16)
	if(color2.length == 8) a2 = parseInt(color2.substring(6, 8), 16)

	let r3 = Math.floor(r1 + ((r2 - r1) * multiplier))
	let g3 = Math.floor(g1 + ((g2 - g1) * multiplier))
	let b3 = Math.floor(b1 + ((b2 - b1) * multiplier))
	let a3 = Math.floor(a1 + ((a2 - a1) * multiplier))

	return leadingString(r3.toString(16), 2, '0') + leadingString(g3.toString(16), 2, '0') + leadingString(b3.toString(16), 2, '0') + leadingString(a3.toString(16), 2, '0')
}

function readColor(color, multiplier = 1, additional = 0) {
	// This function takes in a color and returns a 6 or 8 digit hex color. To remove the alpha, use .substring(0, 6) on the result
	// multiplier and additional do not affect alpha values, only color values!

	if(typeof(color) !== 'string') color = color.toString(16)
	color = color.toUpperCase()
	color = color.replace(/[^A-F0-9]/ig, '')

	let r = ''
	let g = ''
	let b = ''
	let a = ''

	switch(color.length) {
		case 1:
			r = clamp(Math.round(parseInt(color.repeat(2), 16) * multiplier + additional), 0, 255).toString(16)

			r = leadingString(r, 2, '0')

			return (r.repeat(3)).toUpperCase()
			break

		case 2:
			r = clamp(Math.round(parseInt(color.substring(0, 1).repeat(2), 16) * multiplier + additional), 0, 255).toString(16)
			a = clamp(parseInt(color.substring(1, 2).repeat(2), 16), 0, 255).toString(16)

			r = leadingString(r, 2, '0')
			a = leadingString(a, 2, '0')

			return (r.repeat(3) + a).toUpperCase()
			break

		case 3:
			r = clamp(Math.round(parseInt(color.substring(0, 1).repeat(2), 16) * multiplier + additional), 0, 255).toString(16)
			g = clamp(Math.round(parseInt(color.substring(1, 2).repeat(2), 16) * multiplier + additional), 0, 255).toString(16)
			b = clamp(Math.round(parseInt(color.substring(2, 3).repeat(2), 16) * multiplier + additional), 0, 255).toString(16)

			r = leadingString(r, 2, '0')
			g = leadingString(g, 2, '0')
			b = leadingString(b, 2, '0')

			return (r + g + b).toUpperCase()
			break

		case 4:
			r = clamp(Math.round(parseInt(color.substring(0, 1).repeat(2), 16) * multiplier + additional), 0, 255).toString(16)
			g = clamp(Math.round(parseInt(color.substring(1, 2).repeat(2), 16) * multiplier + additional), 0, 255).toString(16)
			b = clamp(Math.round(parseInt(color.substring(2, 3).repeat(2), 16) * multiplier + additional), 0, 255).toString(16)
			a = clamp(parseInt(color.substring(3, 4).repeat(2), 16), 0, 255).toString(16)

			r = leadingString(r, 2, '0')
			g = leadingString(g, 2, '0')
			b = leadingString(b, 2, '0')
			a = leadingString(a, 2, '0')

			return (r + g + b + a).toUpperCase()
			break

		case 6:
			r = clamp(Math.round(parseInt(color.substring(0, 2), 16) * multiplier + additional), 0, 255).toString(16)
			g = clamp(Math.round(parseInt(color.substring(2, 4), 16) * multiplier + additional), 0, 255).toString(16)
			b = clamp(Math.round(parseInt(color.substring(4, 6), 16) * multiplier + additional), 0, 255).toString(16)

			r = leadingString(r, 2, '0')
			g = leadingString(g, 2, '0')
			b = leadingString(b, 2, '0')

			return (r + g + b).toUpperCase()
			break

		case 8:
			r = clamp(Math.round(parseInt(color.substring(0, 2), 16) * multiplier + additional), 0, 255).toString(16)
			g = clamp(Math.round(parseInt(color.substring(2, 4), 16) * multiplier + additional), 0, 255).toString(16)
			b = clamp(Math.round(parseInt(color.substring(4, 6), 16) * multiplier + additional), 0, 255).toString(16)
			a = clamp(Math.round(parseInt(color.substring(6, 8), 16)), 0, 255).toString(16)

			r = leadingString(r, 2, '0')
			g = leadingString(g, 2, '0')
			b = leadingString(b, 2, '0')
			a = leadingString(a, 2, '0')

			return (r + g + b + a).toUpperCase()
			break
	}

	if(debug) console.log('Invalid color: \'' + color + '\'')

	return 'CCCCCC99'
}

function invertColor(color, invertAlpha = false) {
	if(color.length != 6 && color.length != 8) {
		color = readColor(color)
	}

	let r = clamp(Math.round(parseInt(color.substring(0, 2), 16)), 0, 255)
	let g = clamp(Math.round(parseInt(color.substring(2, 4), 16)), 0, 255)
	let b = clamp(Math.round(parseInt(color.substring(4, 6), 16)), 0, 255)
	let a = ''
	if(color.length == 8) {
		let a = clamp(parseInt(color.substring(6, 8), 16), 0, 255).toString(16)
	}

	r = (255 - r).toString(16)
	g = (255 - g).toString(16)
	b = (255 - b).toString(16)
	if(invertAlpha) a = (255 - a).toString(16)

	r = leadingString(r, 2, '0')
	g = leadingString(g, 2, '0')
	b = leadingString(b, 2, '0')
	if(a != '') a = leadingString(a, 2, '0')

	return r + g + b + a
}



// -------------------- MESSAGES --------------------
// -------------------- MESSAGES --------------------

function consoleLog() {
	// This is primarily used in debugging
	for(let i = 0; i < arguments.length; i++) {
		arguments[i] = JSON.parse(JSON.stringify(arguments[i]))
	}
	console.log(arguments)
}

function printWarning() {
	warningCount++

	for(let i = 0; i < arguments.length; i++) {
		if(Array.isArray(arguments[i])) arguments[i] = arguments[i].join(', ')
		console.log('Warning ' + warningCount + ':', arguments[i])
	}
	if(debug) {
		console.trace()
	}
}

function printError() {
	errorCount++

	for(let i = 0; i < arguments.length; i++) {
		if(Array.isArray(arguments[i])) arguments[i] = arguments[i].join(', ')
		console.log('Error ' + errorCount + ':', arguments[i])
	}
	if(debug) {
		console.trace()
		throw arguments.length + ' Error' + pluralize(['', 's'], arguments.length) + ': ' + arguments
	}
}



// -------------------- FILE SIZES --------------------
// -------------------- FILE SIZES --------------------

function reduceFileSize(size, betterColorSpectrum = true) {
	// size must be in BYTES

	let iterations = 0
	let divisionUnits = 1024
	while(size > divisionUnits && iterations < fileSizeDenominations.length) {
		if(betterColorSpectrum && iterations > 2) break		// We'll finish this down below
		size /= divisionUnits
		iterations += 1
	}

	size = Math.round(size * 1000) / 1000

	let denomination = fileSizeDenominations[iterations]

	let temp = size
	if(betterColorSpectrum && iterations > 2) {
		divisionUnits = 5
		while(temp > divisionUnits && iterations < fileSizeColors.length) {
			// If we're above the GiB range, change colors every 10
			temp /= divisionUnits
			iterations += 1
		}
	}


	let color1 = fileSizeColors[iterations]
	let color2 = fileSizeColors[iterations]
	if(iterations + 1 < fileSizeColors.length) {
		color2 = fileSizeColors[iterations + 1]
	}

	return { size : size, denomination : denomination, iterations : iterations, color : interpolateHexColorInRange(0, divisionUnits, temp, color1, color2) }
}



// -------------------- VARIABLES --------------------
// -------------------- VARIABLES --------------------

function deepCopy(input) {
	return JSON.parse(JSON.stringify(input))
}



// -------------------- COMPARISON --------------------
// -------------------- COMPARISON --------------------

function inputsAreIdentical() {
	// This function takes an 2+ arrays as arguments, and if they are identical, it returns true.
	// If anything does not match or an error is thrown, it will return false.

	if(arguments.length < 2) {
		printWarning('Need at least two inputs to compare, returning true')
		return true
	}

	// Check the type of each input
	for(let i = 1; i < arguments.length; i++) {
		if(typeof(arguments[0]) !== typeof(arguments[i])) return false
	}

	if(typeof(arguments[0]) === 'object') {
		if(Array.isArray(arguments[0])) {
			// Check the length of each array
			for(let i = 1; i < arguments.length; i++) {
				if(arguments[0].length != arguments[i].length) return false
			}
			// Now check the contents...
			for(let i = 1; i < arguments.length; i++) {
				for(let j = 0; j < arguments[0].length; j++) {
					if(typeof(arguments[0][j]) !== typeof(arguments[i][j])) return false
					if(typeof(arguments[0][j]) === 'object') {
						if(inputsAreIdentical(arguments[0][j], arguments[i][j]) === false) return false
					} else {
						if(arguments[0][j] !== arguments[i][j]) return false
					}
				}
			}
		} else {
			// Check the length of each object
			for(let i = 1; i < arguments.length; i++) {
				if(Object.keys(arguments[0]).length != Object.keys(arguments[i]).length) return false
			}
			// Now check the contents...
			for(let i = 1; i < arguments.length; i++) {
				for(key in arguments[0]) {
					if(!arguments[i].hasOwnProperty(key)) return false
					if(typeof(arguments[0][key]) !== typeof(arguments[i][key])) return false
					if(typeof(arguments[0][key]) === 'object') {
						if(inputsAreIdentical(arguments[0][key], arguments[i][key]) === false) return false
					} else {
						if(arguments[0][key] !== arguments[i][key]) return false
					}
				}
			}
		}
	} else {
		for(let i = 1; i < arguments.length; i++) {
			if(arguments[0] !== arguments[i]) return false
		}
	}

	return true
}



// -------------------- PAGE HASH --------------------
// -------------------- PAGE HASH --------------------

function getHashData() {
	return unpackData(window.location.hash.substring(1))
//	return unpackData(decodeURI(window.location.hash.substring(1)))		// This breaks stuff.....
}

function clearHashData() {
	window.location.hash = ''
}

function setHashData(inputObject, sortHash = true) {
	// null is used to remove something from the hash

	let hashData = getHashData()

	// Add the new data to the hash data
	for(key in inputObject) {
		if(key == '' || typeof(key) == 'undefined') continue
		hashData[key] = inputObject[key]

		if(hashData[key] === null) {
			delete(hashData[key]) // This MUST be done before packData is run
		}
	}

	hashData = packData(hashData)
	let outputArray = []
	for(key in hashData) {
		outputArray.push({ key : key, dataType : hashData[key].dataType, value : hashData[key].value })
	}

	if(sortHash === true) {
		outputArray.sort((a, b)=>{
			if (a.key.toLowerCase() < b.key.toLowerCase()) return -1
			if (a.key.toLowerCase() > b.key.toLowerCase()) return 1
			return 0
		})
	}

	let output = ''
	for(let i = 0; i < outputArray.length; i++) {
		output += outputArray[i].key + '=' + outputArray[i].dataType + ':' + encodeURI(outputArray[i].value) + ';'
	}

	window.location.hash = output
}



// -------------------- COOKIES --------------------
// -------------------- COOKIES --------------------

function getCookieData() {
	return unpackData(document.cookie)
}

function setCookieData(inputObject, path = '/', expirationDays = 400) {
	// 400 days is the maximum for Chrome at the time of writing this

	let outputData = {}

	outputData = packData(inputObject)
	let tail = ''

	let d = new Date()
	d.setTime(d.getTime() + (expirationDays * 86400000))
	tail += 'expires=' + d.toUTCString() + '; '

	tail += 'path=' + path + ';'

	for(key in outputData) {
		if(key == '' || typeof(key) == 'undefined') continue
		document.cookie = key + '=' + outputData[key].dataType + ':' + encodeURI(outputData[key].value) + '; ' + tail
	}
}



// -------------------- DATA PACKING --------------------
// -------------------- DATA PACKING --------------------

// These functions are used to pack and unpack data for hashdata and cookies
function packData(inputData) {
	let output = {}

	for(key in inputData) {
		if(key == '' || typeof(key) == 'undefined') continue

		key = key.trim()
		let dataType = typeof(inputData[key])
		switch(dataType) {
			case 'object':
				inputData[key] = btoa(JSON.stringify(inputData[key]))
				break
			case 'boolean':
				inputData[key] = ((inputData[key]) ? 1 : 0)
				break
		}
		output[key] = { 'dataType' : dataType, 'value' : inputData[key] }
	}

	return output
}

function unpackData(inputData) {
	let output = {}
	inputData = inputData.split(';')
	for(let i = 0; i < inputData.length; i++) {
		if(inputData[i] == '') continue

		let temp1 = inputData[i].indexOf('=')
		let temp2 = inputData[i].indexOf(':')

		let varName = inputData[i].substring(0, temp1).trim()
		let dataType = inputData[i].substring(temp1 + 1, temp2)
		let value = decodeURI(inputData[i].substring(temp2 + 1))

		switch(dataType) {
			case 'number':
				value = parseFloat(value)
				break
			case 'boolean':
				value = value.toLowerCase()
				if(value == '1' || value == 't' || value.search('true') >= 0) {
					value = true
				} else {
					value = false
				}
				break
			case 'object':
				value = JSON.parse(atob(value))
				break
			case 'string':
			default:
				break
		}
		output[varName] = value
	}
	return output
}



// -------------------- MATH --------------------
// -------------------- MATH --------------------

function clamp(value, min = null, max = null) {
	if(typeof(value) !== 'number') value = parseFloat(value)

	if(min !== null) {
		if(typeof(min) !== 'number') min = parseFloat(min)
	}
	if(max !== null) {
		if(typeof(max) !== 'number') max = parseFloat(max)
	}

	if(min !== null && max !== null) {
		// If min and max are backwards, swap them!
		if(min > max) [ min, max ] = [ max, min ]
	}

	if(min !== null && value < min) return min
	if(max !== null && value > max) return max
	return value
}

function randFloatRange(min, max) {
	return Math.random() * (max - min) + min
}

function randIntRange(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}

function round(number, places = 0) {
	places = parseInt(places)
	let factor = Math.pow(10, places)
	number *= factor
	number = Math.round(number)
	return number / factor
}

// Copied from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-10.php
function lcm(x, y) {
   if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  return (!x || !y) ? 0 : Math.abs((x * y) / gcd(x, y));
}

// Copied from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-10.php
function gcd(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}



// -------------------- RANDOMS --------------------
// -------------------- RANDOMS --------------------

function randomItem() {
	// This function takes an arbitrary number of arguments in, and returns one of them at random
	if(arguments.length == 0) return null

	return arguments[randIntRange(0, arguments.length - 1)]
}



// -------------------- STRINGS --------------------
// -------------------- STRINGS --------------------

function getNumberSuffix(number) {
	if(number === 0) return ''	// Zero doesn't have a suffix
	if(number % 1 > 0) {
	// Float point errors make this part buggy, not sure how to fix that...
		number %= 1
		number *= (10 ** (number.toString().length - 2))
	}

	number %= 100

	if(number > 10 && number < 20) {
		return 'th'
	}

	number %= 10
	switch(number) {
		case 1:
			return 'st'
			break
		case 2:
			return 'nd'
			break
		case 3:
			return 'rd'
			break
		default:
			return 'th'
			break
	}
}

function ucwords(inputString) {
	// This function makes the first letter of every word uppercase

	let temp = inputString.split(' ')
	for(let i = 0; i < temp.length; i++) {
		temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].substring(1)
	}
	return temp.join(' ')
}

function pluralize(words, number) {
	// words must be an array of [ singular, plural ]
	if(number == 1) return words[0]
	return words[1]
}

function leadingString(number, spaces, spacerString = ' ') {
	// Akin to leadingSpaces or leadingZeroes. This is meant to align monospaced numbers by their decimal points

	output = number

	if(typeof(number) == String) {
		number = parseFloat(number)
	}
	number = number.toString()
	number = number.split('.')[0]

	if(spaces - number.length < 1) return output.toString()

	return spacerString.repeat(spaces - number.length) + output
}

function tailingString(number, spaces, spacerString = ' ') {
	// Akin to tailingSpaces or tailingZeroes. This is meant to align monospaced numbers by their decimal points

	output = number

	if(typeof(number) == String) {
		number = parseFloat(number)
	}
	number = number.toString()
	number = number.split('.')
	if(number.length == 1) {
		return output + spacerString.repeat(spaces + 1)
	} else {
		number = number[1]
	}

	return output + spacerString.repeat(spaces - number.length)
}

function repeatText(inputText, repeats)
{
	if(typeof(inputText) !== 'string') {
		printError('inputText not a string', inputText)
		return inputText
	}
	let newText = ''
	for(let i = 0; i < repeats; i++)
	{
		newText = newText + inputText
	}
	return newText
}

function escapeSingleQuotes(inputString) {
	return inputString.replace(/'/g, "\\\'")
}

function randomString(length, mask = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM') {
	let output = ''
	for(let i = 0; i < length; i++) {
		output = output + mask[Math.floor(Math.random() * mask.length)]
	}
	return output
}



// -------------------- OBJECTS --------------------
// -------------------- OBJECTS --------------------

function getValue(inputObject, getThisValue, defaultValue = null) {
	if(inputObject.hasOwnProperty(getThisValue)) {
		return inputObject[getThisValue]
	}
	return defaultValue
}

function combineObjects() {
	let temp = {}
	for(let i = 0; i < arguments.length; i++) {
		if(typeof(arguments[i]) !== "object") {
			printWarning('Input is not an object', arguments[i])
			continue
		}
		temp = Object.assign(temp, arguments[i])
//		temp = { ...temp, ...arguments[i] }		// Not sure what this line accomplished..?
	}
	return temp
}

function findSortedIndex(inputArray, propertyToCheck, valueToCheck, caseSensitive = true) {
	// This function is used on an array of objects that are SORTED BY THE VALUE IN propertyToCheck,
	// to find the first instance of valueToCheck in propertyToCheck

	// THE ARRAY OF OBJECTS MUST MUST MUST BE SORTED BY propertyToCheck OR THIS WILL NOT WORK

	let min = 0
	let max = inputArray.length
	let mid = 0
	let test = ''

	if(!caseSensitive) valueToCheck = valueToCheck.toLowerCase()

	while(min < max && test != valueToCheck) {
		mid = Math.floor((min + max) / 2)
		test = inputArray[mid][propertyToCheck]
		if(!caseSensitive) test = test.toLowerCase()

		if(test < valueToCheck) {
			min = mid + 1
		} else {
			max = mid
		}
	}

	if(caseSensitive) {
		while(mid > 0 && inputArray[mid - 1][propertyToCheck] == propertyToCheck) {
			mid--
		}
	} else {
		while(mid > 0 && inputArray[mid - 1][propertyToCheck].toLowerCase() == propertyToCheck) {
			mid--
		}
	}

	if(test != valueToCheck) {
		printError('Could not find \'' + valueToCheck + '\' in property \'' + propertyToCheck +  '\' of array', inputArray)
		return false
	}
	return mid
}


// -------------------- ARRAYS --------------------
// -------------------- ARRAYS --------------------

function getRandomItemsFromArray(inputArray, count = 1) {
	// This function will pick any number of items at random from an array and return them as another array
	let output = []
	for(let i = 0; i < count; i++) {
		output.push(inputArray[randIntRange(0, (inputArray.length - 1))])
	}

	return output
}

function generateRandomIndexArray(inputArrayOrCount) {
	let count = 0
	if(typeof(inputArrayOrCount) == 'number') {
		count = parseInt(inputArrayOrCount)
	} else if(Array.isArray(inputArrayOrCount)) {
		count = inputArrayOrCount.length
	} else {
		printError('generateRandomIndexArray: Input is not an array or a number!')
		return null
	}

	let temp = []
	for(let i = 0; i < count; i++) {
		temp.push(i)
	}

	let output = []
	let randomNumber = 0
	for(let i = temp.length - 1; i >= 0; i--) {
		randomNumber = randIntRange(0, i)
		output.push(temp[randomNumber])
		temp.splice(randomNumber, 1)
	}
	return output
}

function randomizeArray(inputArray) {
	let bucketArray = generateRandomIndexArray(inputArray)

	let output = []
	for(let i = 0; i < inputArray.length; i++) {
		output[i] = inputArray[bucketArray[i]]
	}

	return output
}

function removeItemFromArray(inputArray, item, caseSensitive = true) {
	if(!caseSensitive) item = item.toLowerCase()

	for(let i = 0; i < inputArray.length; i++) {
		if((caseSensitive && item == inputArray[i]) || (!caseSensitive && (item == inputArray[i].toLowerCase()))) {
			inputArray.splice(i, 1)
			i--
		}
	}
}

function removeDuplicates(inputArray, caseSensitive = true) {
	let outputArray = []
	let match = false
	for(let i = 0; i < inputArray.length; i++) {
		match = false
		for(let j = 0; j < outputArray.length; j++) {
			if(i == j) continue
			if(!caseSensitive && typeof(inputArray[i]) === 'string' && typeof(outputArray[j]) === 'string') {
				if(inputArray[i].toLowerCase() === outputArray[j].toLowerCase()) {
					match = true
					break
				}
			} else {
				if(inputArray[i] === outputArray[j]) {
					match = true
					break
				}
			}
		}
		if(!match) outputArray.push(inputArray[i])
	}
	return outputArray
}

function joinArraysNoDuplicates() {
	let output = []

	if(arguments.length == 0)
	{
		printWarning('No input specified')
		return output
	}

	let match = false
	for(let i = 0; i < arguments.length; i++) {
		if(typeof(arguments[i]) !== 'object' || !Array.isArray(arguments[i])) {
			printWarning('Input \'' + i + '\' not an array', arguments[i])
			continue
		}

		for(let j = 0; j < arguments[i].length; j++) {
			match = false
			for(let k = 0; k < output.length; k++) {
				if(output[k] == arguments[i][j]) {
					match = true
					break
				}
			}
			if(!match) output.push(arguments[i][j])
		}
	}
	return output
}



// -------------------- COMPARATORS --------------------
// -------------------- COMPARATORS --------------------

function isObject(input) {
	if(typeof(input) == 'object') {
		if(Array.isArray(input)) return false
		return true
	}
	return false
}

function isEmpty(input) {
	if(!input || input === null || input === undefined) return true

	let temp = typeof(input)
	switch(temp) {
		case 'object':
			if(Array.isArray(input)) {
				if(input.length > 0) return false
			} else {
				for (key in input) {
					if (input.hasOwnProperty(key)) return false
				}
			}
			return true
			break
		case 'function':
			printWarning('I was passed a function as input', input)
			return false
			break
		case 'number':
			if(input == 0) return true
			break
		case 'string':
			if(input == '') return true
			break
		case 'boolean':
			if(!input) return true
			break
		default:
			printError('Unknown input type \'' + temp + '\'', input)
			break
	}
	return false
}

function isInArray(value, array) {
	if(!Array.isArray(array)) return false
	for(let i = 0; i < array.length; i++) {
		if(array[i] == value) {
			return true
		}
	}
	return false
}



// -------------------- CALLBACKS --------------------
// -------------------- CALLBACKS --------------------

function doNothing()
{
	//This is used to allow a callback to do nothing, without causing any errors
	return
}



// -------------------- ANIMATIONS --------------------
// -------------------- ANIMATIONS --------------------

// These are the default values given to all animated elements. They are overridden by individual animation settings
animationDefaults = {
	animation					:	null,		// This must refer to the animations object
	delay						:	0,			// Seconds
	duration					:	2,			// Seconds
	animationTiming				:	'ease',		// This is CSS transition-timing-function
	animationDirection			:	'forward',
	animationIterationCount		:	'1',
}

animations = {
	rotate	:	{
		description	:	'Rotate on the specified axis',
		x	:	{
			description	:	'Rotate on the X axis (Horizontal)',
			transform	:	'rotateX(<value1>deg)',		// Find a way to get the value into this...
		},
		y	:	{
			description	:	'Rotate on the Y axis (Vertical)',
			transform	:	'rotateY(<value1>deg)',
		},
		z	:	{
			description	:	'Rotate on the Z axis (Windmill)',
			transform	:	'rotateZ(<value1>deg)',
		},
	},
	translate	:	{
		description	:	'Move along the specified axis',
		x	:	'animationTranslateX',
		y	:	'animationTranslateY'
	}
}

function animateElement(animationObject) {
/*
	HERE IS A SAMPLE ANIMATION OBJECT
	{
		animation		:	''			// This must be a string containing the name of the animation (Used in the switch statement below)
		values			:	[]			// This array must contain all the values needed for the animation
		duration		:	<number>	// This value is optional. It is the time (In seconds) of the animation
		delay			:	<number>	// This value is optional. It is the time (In seconds) to delay before starting the animation
	}
*/
    let args = animationObject.values
    let animation = arguments[0].toString().toLowerCase()

	// Get the arguments in a usable format
    for(let i = 1; i < arguments.length; i++) {
        args.push(arguments[i])
    }

	switch(animation) {
		case 'rotatex':
			break
	}
}

function rotateX(args) {
	if(args.length < 1) {
		printError('Not enough values supplied to create animation')
		return {}
	}
	if(isNaN(args[0])) {
		printError('Value is not a number')
		return {}
	}
	return { transform	: 'rotateX(' + args.shift() + 'deg)' }
}

function rotateY(value) {
		return { transform	: 'rotateY(' + value + 'deg)' }
}

function rotateZ(value) {
		return { transform	: 'rotateZ(' + value + 'deg)' }
}



// -------------------- DOM ELEMENTS --------------------
// -------------------- DOM ELEMENTS --------------------

function addClassName(element, newClassName) {
	let temp = []
	if(element.hasAttribute('className') || element.className != '') {
		temp = element.className.split(' ')
	}
	let temp2 = []
	for(let i = 0; i < temp.length; i++) {
		if(temp[i] == newClassName) continue
		temp2.push(temp[i])
	}
	temp2.push(newClassName)
	element.className = temp2.join(' ')
}

function removeClassName(element, removeClassName) {
	let temp = []
	if(element.hasAttribute('className') || element.className != '') {
		temp = element.className.split(' ')
	}
	let temp2 = []
	for(let i = 0; i < temp.length; i++) {
		if(temp[i] == removeClassName) continue
		temp2.push(temp[i])
	}
	element.className = temp2.join(' ')
}

function getRadioButtonValue(element) {
	// To be used on an HTML <select> element
	// inputSelect can either be the HTML element, or the ID of an element

	if(typeof(element) === 'string') element = document.getElementById(element)

	if(!element.hasAttribute('name')) {
		printWarning('Cannot get the value of a radio button that does not have a name!', element)
		return null
	}

	let radioList = document.getElementsByName(element.name)
	for(let i = 0; i < radioList.length; i++) {
		if(radioList[i].checked == true) return radioList[i].value
	}

	return null
}

function getSelectIndex(inputSelect, defaultValue = 0) {
	// To be used on an HTML <select> element
	// inputSelect can either be the HTML element, or the ID of an element

	if(typeof(inputSelect) === 'string') inputSelect = document.getElementById(inputSelect)

	for(let i = 0; i < inputSelect.children.length; i++) {
		if(inputSelect.children[i].selected == true) {
			return i
		}
	}
	return defaultValue
}

function setSelectIndex(inputSelect, newIndex) {
	// To be used on an HTML <select> element
	// inputSelect can either be the HTML element, or the ID of an element

	if(typeof(inputSelect) === 'string') inputSelect = document.getElementById(inputSelect)

	if(inputSelect.children.length == 0) return

	// If the index supplied is out of bounds, it will be clamped
	clamp(newIndex, 0, inputSelect.children.length)

	inputSelect.children[newIndex].selected = true
}

function getSelectValue(inputSelect, defaultValue = '') {
	// To be used on an HTML <select> element
	// inputSelect can either be the HTML element, or the ID of an element

	if(typeof(inputSelect) === 'string') inputSelect = document.getElementById(inputSelect)

	for(let i = 0; i < inputSelect.children.length; i++) {
		if(inputSelect.children[i].selected == true) {
			return inputSelect.children[i].value
		}
	}
	return defaultValue
}

function setSelectValue(inputSelect, newValue, caseSensitive = true) {
	// To be used on an HTML <select> element
	// inputSelect can either be the HTML element, or the ID of an element

	if(typeof(inputSelect) === 'string') inputSelect = document.getElementById(inputSelect)
	if(!caseSensitive) newValue = newValue.toLowerCase()

	let pos = false

	// Iterate in reverse so we end up with the first occurrence of a match, not the last
	for(let i = inputSelect.children.length - 1; i >= 0; i--) {
		if(caseSensitive) {
			if(inputSelect.children[i].value == newValue) {
				pos = i
			}
		} else {
			if(inputSelect.children[i].value.toLowerCase() == newValue) {
				pos = i
			}
		}
		inputSelect.children[i].selected = false
	}

	if(pos !== false) inputSelect.children[pos].selected = true
}

function applyStyle(element, styleObject) {
	for(let styleKey in styleObject) {
		element.style[styleKey] = styleObject[styleKey]
	}
}

function createElement(inputValues) {
	let new_element = null
	if(inputValues) {
		if(!inputValues.hasOwnProperty('elementType') || inputValues.elementType == '') {
			printError('\'elementType\' not specified', inputValues)
			return
		}
		if(inputValues.hasOwnProperty('animations')) {
			if(Array.isArray(inputValues.animations)) {
				// 'animations' should be an array of objects coming in. We need to split this up so there is only
				// one animation per element, so every subsequent animation needs to move on to a child
				if(inputValues.animations.length > 0) {
					inputValues = { elementType : 'span', animations : inputValues.animations.shift(), children : [ inputValues ] }
				} else {
					delete inputValues.animations
				}
			} else {
				printError('\'animations\' value is not an array of objects', inputValues)
				delete inputValues.animations
			}
		}
		new_element = document.createElement(inputValues.elementType)

		for (var key in inputValues) {
			switch(key) {
				case 'elementType':
				case 'animations':
					continue
				case 'style':
					if(!isObject(inputValues[key])) {
						printError('\'style\' attribute is not an object', inputValues[key])
						continue
					}
					applyStyle(new_element, inputValues[key])
					break
				case 'content':
					// This is to be used for things like style tags, DO NOT use it for text!
					new_element.appendChild(document.createTextNode(inputValues[key]))
					break
				case 'text':
					let test = typeof(inputValues[key])
					if(test !== "string" && test !== "number") {
						printError('\'text\' is not a string', inputValues[key])
						continue
					}
					if(inputValues.elementType == 'div') {
						let text_element = document.createElement('span')
						text_element.appendChild(document.createTextNode(inputValues[key].toString()))
						new_element.appendChild(text_element)
					}
					else
					{
						new_element.appendChild(document.createTextNode(inputValues[key].toString()))
					}
					break
				case 'children':
					if(!Array.isArray(inputValues[key])) {
						printError('\'children\' is not an array', inputValues)
						continue
					}
					for(let i = 0; i < inputValues[key].length; i++) {
						if(!inputValues[key][i].hasOwnProperty('elementType')) {
							printError('Invalid child element', inputValues[key][i])
							continue
						}
						new_element.appendChild(createElement(inputValues[key][i]))
					}
					break
				default:
					new_element[key] = inputValues[key]
			}
		}

		if(inputValues.hasOwnProperty('animations')) {
			let delay = 0
			let duration = 0
			if(isObject(inputValues[animations])) {
				printError('\'animations\' attribute is not an object', inputValues[key])
				return
			}
			inputValues.animations = combineObjects(animationDefaults, inputValues.animations)
			if(inputValues.animations.animation !== null) {
				if(typeof(inputValues.animations.animation) === 'undefined') {
						printError('Invalid animation \'' + inputValues.animations.animation + '\'')
				} else {

					if(inputValues.animations.hasOwnProperty('delay')) {
						delay = inputValues.animations.delay
						delete inputValues.animations.delay
					}
					if(inputValues.animations.hasOwnProperty('duration')) {
						inputValues.animations.transitionDuration = inputValues.animations.duration + 's'
						delete inputValues.animations.duration
					}
					if(inputValues.animations.hasOwnProperty('animationTiming')) {
						inputValues.animations.transitionTimingFunction = inputValues.animations.animationTiming
						delete inputValues.animations.animationTiming
					}

					if(delay <= 0) {
						applyStyle(new_element, inputValues.animations)
					} else {
						// Need to make sure this object doesn't go away before the timeout runs
						let animationStyleObject = combineObjects(inputValues.animations)
						setTimeout(()=>{ applyStyle(new_element, animationStyleObject) }, delay * 1000)
					}
				}
			}
		}
	}

	return new_element
}

function clearElement(e) {
	for (let i = e.children.length - 1; i >= 0; i--)
	{
		let c = e.children[i]
		e.removeChild(c)
	}
}



// -------------------- BACKGROUNDS --------------------
// -------------------- BACKGROUNDS --------------------

function generateBackgroundGradientLines(angle = 90, color = '999', maxLines = 500, opacityMultiplier = 1) {
	if(maxLines < 3) {
		printError('generateBackgroundGradientLines: Cannot render with less than two lines! \'' + maxLines.toString() + '\' lines were requested.')
		return
	}
	let opacityArray = ['00', '00', '00', '00', '00', '00', '00', '07', '08', '09', '0A', '0C']

	for(let i = 0; i < opacityArray.length; i++) {
		opacityArray[i] = parseInt(parseInt(opacityArray[i], 16) * opacityMultiplier).toString(16)
		while(opacityArray[i].length < 2) {
			opacityArray[i] = '0' + opacityArray[i]
		}
	}

	color = readColor(color)
	let outputArray = []
	maxLines--
	for(let i = 0; i < maxLines; i++) {
		outputArray.push('#' + color + opacityArray[randIntRange(0, opacityArray.length - 1)] + ' ' + i / maxLines * 100 + '%')
	}
	outputArray.push(outputArray[0])	// This makes sure the end result will tile

	let backgroundFlavor = 'linear-gradient(' + angle + 'deg, ' + outputArray.join(', ')
	return backgroundFlavor
}



// -------------------- 7SEG --------------------
// -------------------- 7SEG --------------------

/*
    --1--
  |       |
  2   8   3
  |       |
    --4--
  |       |
  5   9   6
  |       |
    --7--  0 (Zero)
*/

sevenSegCharacters = {
	// Each entry in this object should be filled with an array of numbers, corresponding to the segments that must be lit up for that character
	'0':	[ 1, 2, 3, 5, 6, 7 ],
	'1':	[ 3, 6 ],
	'2':	[ 1, 3, 4, 5, 7 ],
	'3':	[ 1, 3, 4, 6, 7 ],
	'4':	[ 2, 3, 4, 6 ],
	'5':	[ 1, 2, 4, 6, 7 ],
	'6':	[ 2, 4, 5, 6, 7 ],
	'7':	[ 1, 3, 6 ],
	'8':	[ 1, 2, 3, 4, 5, 6, 7 ],
	'9':	[ 1, 2, 3, 4, 6, 7 ],
	'.':	[ 0 ],
	'~':	[ 1 ],
	'-':	[ 4 ],
	'_':	[ 7 ],
	'=':	[ 4, 7 ],
	'`':	[ 2 ],
	'/':	[ 4, 8, 9 ],
	':':	[ 8, 9 ],
	'\'':	[ 3 ],
	'"':	[ 2, 3 ],
	'|':	[ 2, 5 ],
	'*':	[ 8 ],
	'[':	[ 1, 2, 5, 7 ],
	']':	[ 1, 3, 6, 7 ],
	'A':	[ 1, 2, 3, 4, 5, 6 ],
	'B':	[ 2, 4, 5, 6, 7 ],
	'C':	[ 4, 5, 7 ],
	'D':	[ 3, 4, 5, 6, 7 ],
	'E':	[ 1, 2, 4, 5, 7 ],
	'F':	[ 1, 2, 4, 5 ],
	'G':	[ 1, 2, 5, 6, 7 ],
	'H':	[ 2, 3, 4, 5, 6 ],
	'I':	[ 3, 6 ],
	'J':	[ 3, 5, 6, 7 ],
//	'K':	[ 2, 5, 8, 9 ],	// Doesn't really look much like a K...
	'L':	[ 2, 5, 7 ],
	'M':	[ 2, 3, 5, 6, 8 ],
	'N':	[ 4, 5, 6 ],
	'O':	[ 4, 5, 6, 7 ],
	'P':	[ 1, 2, 3, 4, 5 ],
	'Q':	[ 1, 2, 3, 4, 6 ],
	'R':	[ 4, 5 ],
	'S':	[ 1, 2, 4, 6, 7 ],
	'T':	[ 1, 8, 9 ],	// Doesn't really look much like a T...
	'U':	[ 2, 3, 5, 6, 7 ],
	'V':	[ 2, 3, 4, 9 ],	// Doesn't really look much like a V...
	'W':	[ 2, 3, 5, 6, 9 ],	// Doesn't really look like a W...
//	'X':	[  ],
	'Y':	[ 2, 3, 4, 6, 7 ],
//	'Z':	[  ],
}

function sevenSegGetNumericValue(inputObject, getThisValue, defaultValue) {
	if(inputObject[getThisValue]  && !isNaN(inputObject[getThisValue]) && inputObject[getThisValue] > 0 ) {
		return inputObject[getThisValue]
	}
	return defaultValue
}

function sevenSegParseRenderString(inputObject) {
	output = []

	inputString = getValue(inputObject, 'value', '')
	if(typeof(inputString) != "string") {
		inputString = inputString.toString()
	}

	inputString = inputString.toUpperCase()

	numDigits = sevenSegGetNumericValue(inputObject, 'numDigits', -1)

	align = getValue(inputObject, 'align', 'right')
	align = align.toLowerCase()

	i = 0
	while(
		(numDigits > 0 && output.length < numDigits && i < inputString.length ) ||
		(numDigits <= 0 && i < inputString.length)
		) {
		segmentList = []

		if(inputString[i] == '{') {
			i++
			for(i; i < inputString.length && inputString[i] != '}'; i++) {
				if(isNaN(inputString[i])) continue
				let tempNumber = parseInt(inputString[i])
				segmentList.push(clamp(tempNumber, 0, 9))
			}
		} else {
			segmentList = getValue(sevenSegCharacters, inputString[i], []).slice(0)
		}

		i++
		// If the next character is a period, we need to add it to the current character and skip the next one
		if(i < inputString.length) {
			if(!(segmentList.includes(0))) {
				test = getValue(sevenSegCharacters, inputString[i], [])
				if(test.length == 1 && test[0] == 0) {
					segmentList.push(0)
					i++
				}
			}
		}
		output.push({ segments : segmentList })
	}

	// Pad the output to match the correct length
	while(output.length < numDigits) {
		if(align == 'right') {
			output.unshift({ segments : [] })
		} else {
			output.push({ segments : [] })
		}
	}

	return output
}

function sevenSegSplitString(inputString) {
	let output = []
	let i = 0

	while(i < inputString.length) {
		let temp = ''

		if(inputString[i] == '.') {
			temp += inputString[i]
		} else {
			if(inputString[i] == '{') {
				while(inputString[i] != '}' && i < inputString.length) {
					temp += inputString[i]
					i++
				}
				temp = temp + '}'
			} else {
				temp += inputString[i]
			}

			if(i + 1 < inputString.length && inputString[i + 1] == '.') {
				i++
				temp += inputString[i]
			}
		}
		output.push(temp)
		i++
	}

	return output
}

function sevenSegCounter(inputObject, increment, delay) {
	// inputObject must be the same object that is used to render a 7seg normally
	// increment is the amount that will be added with each iteration
	// delay is the number of milliseconds between iterations

	// Enforce a minimum value here so we don't lag
	if(delay < 10) delay = 10

	if(sevenSegStatic(inputObject) === false) return
	inputObject.value += increment
	inputObject.animationTimer = setTimeout(()=>{ sevenSegCounter(inputObject, increment, delay) }, delay)
}

function sevenSegAnimate(inputObject, animation, delay, count = 0) {
	// inputObject must be the same object that is used to render a 7seg normally
	// animation must be an array of objects. Each object is an animation frame
	// containing the values you want to change in the 7seg
	// delay is the number of milliseconds each animation frame will last

	// Enforce a minimum value here so we don't lag
	if(delay < 10) delay = 10

	count %= animation.length

	inputObject = Object.assign(inputObject, animation[count])

	if(sevenSegStatic(inputObject) === false) return
	inputObject.animationTimer = setTimeout(()=>{ sevenSegAnimate(inputObject, animation, delay, count + 1) }, delay)
}

function sevenSegMarquee(inputObject, delay, reverse = false) {
	// inputObject must be the same object that is used to render a 7seg normally
	// delay is the number of milliseconds each animation frame will last

	// Enforce a minimum value here so we don't lag
	if(delay < 10) delay = 10

	if(sevenSegStatic(inputObject) === false) return
	if(inputObject.value.length > 0) {
		temp = sevenSegSplitString(inputObject.value)
		if(reverse == true) {
			temp.unshift(temp.pop())
		} else {
			temp.push(temp.shift())
		}

		inputObject.value = temp.join('')
		inputObject.animationTimer = setTimeout(()=>{sevenSegMarquee(inputObject, delay, reverse)}, delay)
	}
}

function sevenSegStatic(displayObject) {
	let renderObjects = []
	let minBrightnessDivisor = 1 / 32	// Unlit segments will be get their color from the lit segments, multiplied by this value (As a percentage)

	if(displayObject.animationTimer && displayObject.animationTimer === "object") {
		clearTimeout(displayObject.animationTimer)
	} else {
		displayObject.animationTimer = {}
	}

	let units = 'em'
	if(displayObject.hasOwnProperty('units')) units = displayObject.units

	element = displayObject.parentElementID
	if(typeof(element) === 'string') element = document.getElementById(element)
	if(element === null) {
		if(debug) printWarning('7seg: Invalid element or element ID! Cannot render.', element)
		return false
	}
	clearElement(element)

	// These values are all percentages, based off of the COLUMN SIZE.
	// The row size will calculate values based on these and the aspect ratio
	let lineSize = sevenSegGetNumericValue(displayObject, 'lineSize', 10)				// The width of the lines in the 7seg
	let paddingSize = sevenSegGetNumericValue(displayObject, 'paddingSize', 3)						// The amount of padding between elements
	let borderPadding = sevenSegGetNumericValue(displayObject, 'borderPadding', 15)		// The amount of padding at the outer edge of the element

	let renderArray = sevenSegParseRenderString(displayObject)

	let totalDigits = renderArray.length

	if(displayObject.align && displayObject.align.toLowerCase() == 'right') {
		alignment = 'right'
	} else {
		alignment = 'left'
	}


	let defaultRenderHeight = 8
	let defaultAspectRatio = 2 / 3

	let renderHeight = sevenSegGetNumericValue(displayObject, 'height', defaultRenderHeight)		//Must be in pixels!
	let renderWidth = sevenSegGetNumericValue(displayObject, 'width', renderHeight * defaultAspectRatio)	//Must be in pixels! Also, use renderHeight here, not defaultRenderHeight
	let aspectRatio = renderWidth / renderHeight		// Aspect ratio (Width divided by height)

	// Apply the width and height to the element we are populating
	element.style.width = renderWidth * totalDigits + units
	element.style.height = renderHeight + units

	let backgroundColor = getValue(displayObject, 'backgroundColor', '#000')
	element.style.backgroundColor = backgroundColor
	element.style.display = 'flex'

	let centerColumnWidth = (100 - ((lineSize * 3) + (paddingSize * 2) + (borderPadding * 2))) / 2
	let gridTemplateColumns = []
	gridTemplateColumns.push(borderPadding.toString() + '%')
	gridTemplateColumns.push(lineSize.toString() + '%')
	gridTemplateColumns.push(paddingSize.toString() + '%')
	gridTemplateColumns.push(centerColumnWidth.toString() + '%')
	gridTemplateColumns.push(lineSize.toString() + '%')
	gridTemplateColumns.push(centerColumnWidth.toString() + '%')
	gridTemplateColumns.push(paddingSize.toString() + '%')
	gridTemplateColumns.push(lineSize.toString() + '%')
	gridTemplateColumns.push(borderPadding.toString() + '%')
	gridTemplateColumns = gridTemplateColumns.join(' ')

	// Convert these to be used on the rows
	let rowLineSize = lineSize * aspectRatio
	let rowPaddingSize = paddingSize * aspectRatio
	let rowBorderPadding = borderPadding * aspectRatio

	let lineHeight = (100 - ((rowLineSize * 5) + (rowPaddingSize * 4) + (rowBorderPadding * 2))) / 4
	let gridTemplateRows = []
	gridTemplateRows.push(rowBorderPadding.toString() + '%')
	gridTemplateRows.push(rowLineSize.toString() + '%')
	gridTemplateRows.push(rowPaddingSize.toString() + '%')
	gridTemplateRows.push(lineHeight.toString() + '%')
	gridTemplateRows.push(rowLineSize.toString() + '%')
	gridTemplateRows.push(lineHeight.toString() + '%')
	gridTemplateRows.push(rowPaddingSize.toString() + '%')
	gridTemplateRows.push(rowLineSize.toString() + '%')
	gridTemplateRows.push(rowPaddingSize.toString() + '%')
	gridTemplateRows.push(lineHeight.toString() + '%')
	gridTemplateRows.push(rowLineSize.toString() + '%')
	gridTemplateRows.push(lineHeight.toString() + '%')
	gridTemplateRows.push(rowPaddingSize.toString() + '%')
	gridTemplateRows.push(rowLineSize.toString() + '%')
	gridTemplateRows.push(rowBorderPadding.toString() + '%')
	gridTemplateRows = gridTemplateRows.join(' ')



	let customClassName = getValue(displayObject, 'className', '')
	let customActiveClassName = getValue(displayObject, 'activeClassName', '')

	let activeColor1 = getValue(displayObject, 'color', 'F00')
	let activeColor2 = readColor(activeColor1, minBrightnessDivisor * 15)

	let inactiveColor1 = readColor(activeColor1, minBrightnessDivisor * 2)
	let inactiveColor2 = readColor(activeColor1, minBrightnessDivisor)

	let activeMaxColor = readColor(activeColor1, 1, 1)
	let inactiveMaxColor = readColor(activeColor1, minBrightnessDivisor * 2, 1)

	// These objects are used for the styles on the HTML elements
	let sevenSegActive =	{ 'background-image': 'radial-gradient(circle, #' + activeMaxColor + ' 0%, #' + activeColor1 + ' 10%, #' + activeColor2 + ' 100%)' }
	let sevenSegInactive =	{ 'background-image': 'radial-gradient(circle, #' + inactiveMaxColor + ' 0%, #' + inactiveColor1 + ' 10%, #' + inactiveColor2 + ' 100%)' }

	let glowAmount = 0
	glowAmount = sevenSegGetNumericValue(displayObject, 'glow', renderHeight * defaultAspectRatio * (lineSize / 100) / 2)
	if(glowAmount > 0) {
		Object.assign(sevenSegActive, { 'boxShadow' : '0' + units + ' 0' + units + ' ' + glowAmount + units + ' ' + activeColor1 })
	}

	for(let i = 0; i < renderArray.length; i++) {
		let renderCharacter = renderArray[i]

		let newDisplay = { elementType: 'div',
		style : {
			'display': 'grid',
			'grid-template-columns': gridTemplateColumns,
			'grid-template-rows': gridTemplateRows,
			'grid-gap': '0%',
			'width': '100%',
			'height': '100%',
			'overflow': 'hidden',
			},
		children: [] }

		let segment1 = { 'gridColumn': '4 / span 3', 'gridRow': '2 / span 1' }
		let segment2 = { 'gridColumn': '2 / span 1', 'gridRow': '4 / span 3' }
		let segment3 = { 'gridColumn': '8 / span 1', 'gridRow': '4 / span 3' }
		let segment4 = { 'gridColumn': '4 / span 3', 'gridRow': '8 / span 1' }
		let segment5 = { 'gridColumn': '2 / span 1', 'gridRow': '10 / span 3' }
		let segment6 = { 'gridColumn': '8 / span 1', 'gridRow': '10 / span 3' }
		let segment7 = { 'gridColumn': '4 / span 3', 'gridRow': '14 / span 1' }
		let segment8 = { 'gridColumn': '5 / span 1', 'gridRow': '5 / span 1' }
		let segment9 = { 'gridColumn': '5 / span 1', 'gridRow': '11 / span 1' }
		let segment0 = { 'gridColumn': '8 / span 1', 'gridRow': '14 / span 1' }

		let segment1on = false
		let segment2on = false
		let segment3on = false
		let segment4on = false
		let segment5on = false
		let segment6on = false
		let segment7on = false
		let segment8on = false
		let segment9on = false
		let segment0on = false

		if(renderCharacter.segments.includes(1)) segment1on = true
		if(renderCharacter.segments.includes(2)) segment2on = true
		if(renderCharacter.segments.includes(3)) segment3on = true
		if(renderCharacter.segments.includes(4)) segment4on = true
		if(renderCharacter.segments.includes(5)) segment5on = true
		if(renderCharacter.segments.includes(6)) segment6on = true
		if(renderCharacter.segments.includes(7)) segment7on = true
		if(renderCharacter.segments.includes(8)) segment8on = true
		if(renderCharacter.segments.includes(9)) segment9on = true
		if(renderCharacter.segments.includes(0)) segment0on = true

		Object.assign( segment1, ((segment1on) ? sevenSegActive : sevenSegInactive ), ((segment1on) ? getValue(displayObject, 'activeStyle', {}) : {} ), displayObject.style )
		Object.assign( segment2, ((segment2on) ? sevenSegActive : sevenSegInactive ), ((segment2on) ? getValue(displayObject, 'activeStyle', {}) : {} ), displayObject.style )
		Object.assign( segment3, ((segment3on) ? sevenSegActive : sevenSegInactive ), ((segment3on) ? getValue(displayObject, 'activeStyle', {}) : {} ), displayObject.style )
		Object.assign( segment4, ((segment4on) ? sevenSegActive : sevenSegInactive ), ((segment4on) ? getValue(displayObject, 'activeStyle', {}) : {} ), displayObject.style )
		Object.assign( segment5, ((segment5on) ? sevenSegActive : sevenSegInactive ), ((segment5on) ? getValue(displayObject, 'activeStyle', {}) : {} ), displayObject.style )
		Object.assign( segment6, ((segment6on) ? sevenSegActive : sevenSegInactive ), ((segment6on) ? getValue(displayObject, 'activeStyle', {}) : {} ), displayObject.style )
		Object.assign( segment7, ((segment7on) ? sevenSegActive : sevenSegInactive ), ((segment7on) ? getValue(displayObject, 'activeStyle', {}) : {} ), displayObject.style )
		Object.assign( segment8, displayObject.style, { 'border-radius': '100%' }, ((segment8on) ? sevenSegActive : sevenSegInactive ), ((segment8on) ? getValue(displayObject, 'activeStyle', {}) : {} ),  )
		Object.assign( segment9, displayObject.style, { 'border-radius': '100%' }, ((segment9on) ? sevenSegActive : sevenSegInactive ), ((segment9on) ? getValue(displayObject, 'activeStyle', {}) : {} ),  )
		Object.assign( segment0, displayObject.style, { 'border-radius': '100%', 'transform': 'translate(75%, 25%)' }, ((segment0on) ? sevenSegActive : sevenSegInactive ), ((segment0on) ? getValue(displayObject, 'activeStyle', {}) : {} ),  )

		newDisplay.children = newDisplay.children.concat({ elementType: 'div', style: segment1, className: customClassName + ((segment1on) ? customActiveClassName: '') })
		newDisplay.children = newDisplay.children.concat({ elementType: 'div', style: segment2, className: customClassName + ((segment2on) ? customActiveClassName : '') })
		newDisplay.children = newDisplay.children.concat({ elementType: 'div', style: segment3, className: customClassName + ((segment3on) ? customActiveClassName : '') })
		newDisplay.children = newDisplay.children.concat({ elementType: 'div', style: segment4, className: customClassName + ((segment4on) ? customActiveClassName : '') })
		newDisplay.children = newDisplay.children.concat({ elementType: 'div', style: segment5, className: customClassName + ((segment5on) ? customActiveClassName : '') })
		newDisplay.children = newDisplay.children.concat({ elementType: 'div', style: segment6, className: customClassName + ((segment6on) ? customActiveClassName : '') })
		newDisplay.children = newDisplay.children.concat({ elementType: 'div', style: segment7, className: customClassName + ((segment7on) ? customActiveClassName : '') })
		newDisplay.children = newDisplay.children.concat({ elementType: 'div', style: segment8, className: customClassName + ((segment8on) ? customActiveClassName : '') })
		newDisplay.children = newDisplay.children.concat({ elementType: 'div', style: segment9, className: customClassName + ((segment9on) ? customActiveClassName : '') })
		newDisplay.children = newDisplay.children.concat({ elementType: 'div', style: segment0, className: customClassName + ((segment0on) ? customActiveClassName : '') })

		element.appendChild(createElement(newDisplay))
	}
}



// -------------------- STARSCAPE --------------------
// -------------------- STARSCAPE --------------------

nabLibStarscapes = 0
async function generateStarCanvasURL(canvasWidth, canvasHeight, starCount, starColor, starIntensityMin, starIntensityMax) {
	// There is a bug in Chrome that randomly causes the canvas to have a black background

	if(starCount < 1) starCount = 1

/*
	let starfield = document.createElement('canvas');

	starfield.width = canvasWidth
	starfield.height = canvasHeight
*/
	let starfield = new OffscreenCanvas(canvasWidth, canvasHeight)

	let ctx = starfield.getContext('2d')

	let starLocation = {}
	let gradient = {}
	for(let i = 0; i < starCount; i++) {
 		starLocation = { 'x' : randFloatRange(0, starfield.width), 'y' : randFloatRange(0, starfield.height) }

		// Inner circle x, y, radius, outer circle x, y, radius
		gradient = ctx.createRadialGradient(starLocation.x, starLocation.y, starIntensityMin, starLocation.x, starLocation.y, randFloatRange(starIntensityMin, starIntensityMax));

		// Add the color stops
		gradient.addColorStop(0, '#' + starColor + 'AA')
		gradient.addColorStop(randFloatRange(starIntensityMin, starIntensityMax), '#' + starColor + '00');

		// Set the fill style and draw a rectangle
		ctx.fillStyle = gradient
		ctx.fillRect(0, 0, canvasWidth, canvasHeight)
	}

let imagePromise = new Promise(function(resolve, reject) {
	let output = starfield.convertToBlob({type: "image/png"})
	resolve(output)
}).then( (output)=>{
	return URL.createObjectURL(output)
})


// The output below needs to be the output of the promise above...
	return await imagePromise
}

async function renderStarscape(renderElement = null, starCount = 300, layers = 5, backgroundColor = '000', starColor = 'FFF', scrollLeftOrRight = 1, scrollUpOrDown = 0, scrollSpeed = 20) {
	let outputChild = { elementType : 'div', style : { display : 'grid', width : '100%', height : '100%', margin : '0px' }, children : [] }
	let defaultStyle = { gridArea : '1 / 1', width : '100%', height : '100%', margin : '0px' }

	// Chromium randomly renders starscapes with a black background! For chromium only, add a blend mode
	// This is very intense on the GPU so ONLY do it on Chrome!
	let userAgentString = (navigator.userAgent).toLowerCase()
	if(userAgentString.includes('chrom')) defaultStyle.mixBlendMode = 'lighten'

	layers = parseInt(layers)

	if(!checkValidHexColor(backgroundColor)) {
		// User may have given us a CSS variable. If so, accomodate it
		backgroundColor = 'var(--' + backgroundColor + ')'
	} else {
		backgroundColor = readColor(backgroundColor)
	}
	starColor = readColor(starColor)

	defaultStyle.padding = '0px'

	scrollSpeed = clamp(scrollSpeed, 1, 50000)	// Prevent division by 0 below and restrict this to it's max value

	// Colors
	starColor = readColor(starColor)

	let starIntensityMin = 0.25
	let starIntensityMax = 0.85
	let starIntensityVariance = 0.1

	// Sizes
	let layerSizeMultiplier = 100
	let layerBaseSize = (layers / 2) * layerSizeMultiplier		// Do not change this or animations will look awful
	let canvasSizeXMax = 0
	let canvasSizeXMin = 0
	let canvasSizeYMax = 0
	let canvasSizeYMin = 0

	let starSizeMin = 0.5
	let starSizeMax = 1

	let gradientSizeMin = 1
	let gradientSizeMax = 10

	let animationName = ''

	let canvasSize = {}
	let starIntensity = starIntensityMax
	let layerMultiplier = 1

	nabLibStarscapes++

	let starfieldElements = new Promise(async function(resolve, reject) {
		let outputElements = []
		for(let currentLayer = 1; currentLayer <= layers; currentLayer++) {
			let newElement = { elementType : 'div', style : defaultStyle }
			newElement.style.zIndex = currentLayer * -1

			canvasSizeXMax = (layers - currentLayer + 1) * layerSizeMultiplier + layerBaseSize
			canvasSizeXMin = canvasSizeXMax
			canvasSizeYMax = (layers - currentLayer + 1) * layerSizeMultiplier + layerBaseSize
			canvasSizeYMin = canvasSizeYMax

			layerMultiplier = 1 / layers * currentLayer * 0.5 + 0.5
			animationName = 'nabLibStarscape-' + nabLibStarscapes.toString() + '-layer-' + currentLayer.toString() + '-of-' + layers.toString()

			canvasSize = { 'x' : randFloatRange(canvasSizeXMin, canvasSizeXMax), 'y' : randFloatRange(canvasSizeYMin, canvasSizeYMax) }

			let starfield = await generateStarCanvasURL(canvasSize.x, canvasSize.y, Math.floor(starCount / layers), starColor, starIntensity - starIntensityVariance, starIntensity + starIntensityVariance)
			newElement.style.backgroundImage = 'url(\'' + starfield + '\')'

			newElement.style.animation = animationName + ' ' + (500 / scrollSpeed * layerMultiplier).toString() + 's linear infinite'

			starIntensity = clamp(((starIntensityMax - starIntensityMin) / layers * currentLayer) + starIntensityMin, starIntensityVariance + 0.001, 1 - starIntensityVariance - 0.001)
			outputElements.push(deepCopy(newElement))

			if(scrollLeftOrRight != 0 || scrollUpOrDown != 0) {
				let horizontalScroll = '0%'
				let verticalScroll = '0%'
				if(scrollLeftOrRight < 0) {
					horizontalScroll = canvasSize.x + 'px'
				} else if(scrollLeftOrRight > 0) {
					horizontalScroll = '-' + canvasSize.x + 'px'
				}
				if(scrollUpOrDown < 0) {
					verticalScroll = canvasSize.y + 'px'
				} else if(scrollUpOrDown > 0) {
					verticalScroll = '-' + canvasSize.y + 'px'
				}
				outputElements.push({ elementType : 'style', text : '@keyframes ' + animationName + ' {0% { background-position: 0px 0px; } 100% { background-position: ' + horizontalScroll + ' ' + verticalScroll + ' } }' })
			}
		}
		resolve(outputElements)
	}).then( (starfieldElements)=>{

		outputChild.children = outputChild.children.concat(starfieldElements)
		outputChild = { elementType : 'div', style : { backgroundColor : backgroundColor, display : 'grid', width : '100%', height : '100%', position : 'inherit' }, children : [ outputChild ] }

	})

	starfieldElements = await starfieldElements

	if(renderElement === null) {
		// If there was no valid output element, just output the object data
		return outputChild
	}

	if(typeof(renderElement) === 'string' && renderElement != '') {
		// If we were given a string, check for an ID
		renderElement = document.getElementById(renderElement)
		if(renderElement !== null) {
			renderElement.appendChild(createElement(outputChild))
			return
		}
		
	} else if(typeof(renderElement) === 'object') {
		renderElement.appendChild(createElement(outputChild))
		return
	}

	// If there was no valid output element, just output the object data
	return outputChild

}



// -------------------- MODAL FORMS --------------------
// -------------------- MODAL FORMS --------------------

modalFormCount = 0	// This is used to make sure there are no conflicts between forms
function createModalForm(data) {
/*
//	data must be in the following format (All 'label' values are optional):
{
	callback : <function>
	callbackDataArray : <data for callback function>
	label : 'Form Label',
	style : { <Styles to apply to the element> },
	clickBackgroundToClose : false,
	okayButton : true,
	cancelButton : true,
	categories : [
		{
			label : 'Category Label',
			name : 'inputName',	// This value is used to return the data in an object in returnData[name]
			allowDisable : false,
			startDisabled : true,
			style : { <Styles to apply to the element> },
			inputs : [
				{
					label : 'Input Label',
					type : 'radio/checkbox/text/number/color/date/dropdown/font/login',
					required : true,
					style : { <Styles to apply to the element> },
					prompts : [
						{
							spacerBefore : true,	// This will add a hr element above the prompt
							spacerAfter : true,		// This will add a hr element below the prompt
							label : 'Question',
							readOnly : false,
							default : 'true/placeholderText',
							style : { <Styles to apply to the element> },
							validateFunction : functionName		// This function is called on the value of the input to validate. If it returns false, flashRed is triggered. NOT COMPATIBLE with font, button or color!
						},
					],
				},
			],
		},
	]
}
*/

	let modalBlacklist = superTextConvertWhitelistToBlacklist([ 'weight', 'l', 'b', 'i', 'u', 's', 'size', 'font', 'color', 'sub', 'sup', 'ol', 'ul', 'li', 'br' ])

	if(data.hasOwnProperty('elementToFocusOnAfterClose')) {
		if(typeof(data.elementToFocusOnAfterClose) === 'string') data.elementToFocusOnAfterClose = document.getElementById(data.elementToFocusOnAfterClose)
		if(typeof(data.elementToFocusOnAfterClose) === 'undefined') data.elementToFocusOnAfterClose = document.activeElement
	} else {
		data.elementToFocusOnAfterClose = document.activeElement
	}

	let focusElement = null

	let postRenderExecution = []

	if(!data.hasOwnProperty('callback')) data.callback = ()=>{}		// Make sure this is not undefined
	if(!data.hasOwnProperty('callbackDataArray')) data.callbackDataArray = null	// Make sure this is not undefined

	// Make sure these exist and have values!
	if(!data.hasOwnProperty('okayButton') || data.okayButton !== false) data.okayButton = true
	if(!data.hasOwnProperty('cancelButton') || data.cancelButton !== false) data.cancelButton = true

	let modalID = 'modalForm' + modalFormCount + randomString(30)
	modalFormCount++
	let modalFocusID = modalID + 'FocusID'

	let modalButtonStyle = { flex : '1 1 0px', width : '0px', cursor : 'pointer' }
	let categoryDisabledFilters = 'blur(0.05em) saturate(50%) brightness(85%)'

	let inputCount = 0	// This is used to set up the IDs for retrieving the data
	let modalInputs = []
	let modalContent = { elementType : 'div', id : modalFocusID, tabIndex : (-1 * modalFormCount).toString(), style : { flex : '1 1', display : 'flex', padding : '0.5em', flexDirection : 'column', textAlign : 'center', cursor : 'auto', overflow: 'auto' }, children : modalInputs }
	let modal = { elementType : 'div', className : 'modalForm', onclick : (evt)=>{ evt.stopPropagation() }, style : { minWidth : '15em', maxHeight : '90%', display : 'flex', flexDirection : 'column', textAlign : 'center', cursor : 'auto', overflow: 'hidden', fontFamily : '\'nabfonts sans-serif\', sans-serif', backgroundImage : generateBackgroundGradientLines(90, '999', 500, 0.5) }, children : [ modalContent ] }
	let modalBackground = { elementType : 'div', id : modalID, style : { backgroundColor : '#111B', display : 'flex', alignItems : 'center', justifyContent : 'center', position: 'fixed', top : '0px', left : '0px', width : '100%', height : '100%', zIndex : '214748360', userSelect : 'none' }, children : [ modal ] }

	if(data.hasOwnProperty('style')) modal.style = combineObjects(getValue(data, 'style', {}), modal.style)

	if(data.hasOwnProperty('label') && data.label != '') modal.children.unshift({ elementType : 'span', className : 'modalHeadline', style : { borderBottom : '0.1em inset #4449' }, children : superTextMarkup(data.label, modalBlacklist, null, null, false) })

	if(data.hasOwnProperty('clickBackgroundToClose') && data.clickBackgroundToClose === true) {
		modalBackground.style.cursor = 'pointer'
		modalBackground.onclick = ()=>{ closeModalForm(modalID) }
	}

	let validateFunctions = []

	let inputLists = { forceInputs : [], returnInputs : [] }

	for(let i = 0; i < data.categories.length; i++) {
		let categories = []

		let categoryID = modalID + 'Category' + i.toString() + 'Container'

		let categoryInputs = []
		let categoryToggle = modalID + 'category' + i.toString() + 'Toggle'

		let categoryLabel = []
		let startDisabled = false
		if(data.categories[i].hasOwnProperty('allowDisable') && data.categories[i].allowDisable === true && data.categories[i].hasOwnProperty('startDisabled') && data.categories[i].startDisabled === true) startDisabled = true

		if(!data.categories[i].hasOwnProperty('label')) data.categories[i].label = ''
		categoryLabel.push({ elementType : 'div', children : superTextMarkup(data.categories[i].label, modalBlacklist, null, null, false), style : { textAlign: 'left', flex : '1 1' } })
		if(data.categories[i].hasOwnProperty('allowDisable') && data.categories[i].allowDisable === true) {
			categoryLabel.push({ elementType : 'div', style : { display : 'flex', alignItems : 'center', justifyContent : 'center', gap : '0.333em', color : '#9999', textAlign: 'right' }, children : [
				{ elementType : 'span', style : { opacity : '.75', textAlign: 'right', fontFamily : '\'nabfonts monospace\', monospace' }, text : 'Enabled:' },
				{ elementType : 'input', id : categoryToggle, type : 'checkbox', checked : (startDisabled == true ? '' : 'checked'), style : { textAlign: 'right' }, onchange : ()=>{
					let checked = !document.getElementById(categoryToggle).checked
					if(checked === true) {
						document.getElementById(categoryID).style.filter = categoryDisabledFilters
						document.getElementById(categoryID).style.cursor = 'pointer'
					} else {
						document.getElementById(categoryID).style.filter = ''
						document.getElementById(categoryID).style.cursor = 'auto'
					}
					for(let z = 0; z < categoryInputs.length; z++) {
						document.getElementById(categoryInputs[z]).disabled = checked
					}
				} }
			] })
		}

		modalContent.children.push({ elementType : 'div', style : { display : 'flex', gap : '2em', alignItems : 'center', justifyContent : 'center', textAlign: 'left', padding : '0em 0.9em 0em 0.9em', transform : 'translateY(0.6em)', lineHeight : '1em', zIndex : '9999' }, children : categoryLabel })

		categories.push({ elementType : 'div', id : categoryID, className : 'modalFormCategory', style : { display : 'flex', filter : (startDisabled ? categoryDisabledFilters : ''), flexDirection : 'column', margin : '0em 0em 0.75em 0em', padding : '1.5em 0.5em 1.75em 0.5em', borderRadius : '1em', border : '0.1em inset #777F', borderTop : 'none', backgroundImage : generateBackgroundGradientLines(90, '999', 500, 0.35) }, children : [ 
		]})

		if(data.categories[i].hasOwnProperty('style')) categories[categories.length - 1].style = combineObjects(data.categories[i].style, categories[categories.length - 1].style)

		let inputElements = []

		if(data.categories[i].hasOwnProperty('inputs')) {
			let inputsData = data.categories[i].inputs

			for(let j = 0; j < inputsData.length; j++) {
				if(inputsData[j].type != 'button') {
					if(!inputsData[j].hasOwnProperty('name')) {
						inputsData[j].name = null
					}
				}

				if(inputsData[j].hasOwnProperty('label') && inputsData[j].label != '') {
					inputElements.push({ elementType : 'span', style : { fontSize : '1.25em' }, children : [
						{ elementType : 'span', className : 'modalFormInputLabel', children : superTextMarkup(inputsData[j].label, modalBlacklist, null, null, false) }
					]})
				}

				if(!inputsData[j].hasOwnProperty('prompts')) continue
				let inputPrompts = inputsData[j].prompts

				if(!Array.isArray(inputPrompts)) {
					inputPrompts = [ inputPrompts ]
				}

				if(inputPrompts.length <= 0) {
					printWarning('No prompts given for input ' + j + (data.categories[i].hasOwnProperty('label') && data.categories[i].label != '' ? ' in category \'' + data.categories[i].label + '\'' : ''))
					continue
				}

				inputLists.returnInputs.push({ name : inputsData[j].name, ids : [] })

				let spacerAfter = false
				for(let l = 0; l < inputPrompts.length; l++) {
					let inputID = modalID + 'input' + inputCount.toString()
					inputLists.returnInputs[inputLists.returnInputs.length - 1].ids.push(inputID)
					categoryInputs.push(inputID)	// This is used for the "Activated" checkbox

					if(inputsData[j].hasOwnProperty('required') && inputsData[j].required === true) inputLists.forceInputs.push(inputID)
					let inputItem = { elementType : 'div', style : {}, children : [] }

//					if(data.hasOwnProperty('style')) modal.style = combineObjects(getValue(data, 'style', {}), modal.style)
					if(inputsData[j].hasOwnProperty('style')) inputItem.style = combineObjects(inputsData[j].style, inputItem.style)

					// Every 'input' tag needs to start with this as the basis. It contains everything needed to make sure the JS and CSS works correctly
					let inputElementToAdd = { elementType : 'div', id : inputID, disabled : startDisabled }
					if(inputPrompts[l].hasOwnProperty('style')) inputElementToAdd.style = inputPrompts[l].style

					if(focusElement === null && startDisabled === false) focusElement = inputID		// Mark the first active element for automatic focus

					let onchangeFunction = null
					if(inputPrompts[l].hasOwnProperty('validateFunction')) {
						let validateFunction = inputPrompts[l].validateFunction
						onchangeFunction = ()=>{
							let element = document.getElementById(inputID)
							let result = validateFunction(element.value)
							if(result == false) flashElementRed(element)
							return result
						}
					}
					validateFunctions.push({ id : inputID, function : onchangeFunction, originalFunction : inputPrompts[l].validateFunction })

					if(inputPrompts[l].hasOwnProperty('readOnly') && inputPrompts[l].readOnly === true) {
						inputElementToAdd.readOnly = true
//						inputElementToAdd.style.userSelect = 'all'		// This doesn't seem to work on text inputs...
					}

					if(inputPrompts[l].hasOwnProperty('spacerBefore') && inputPrompts[l].spacerBefore == true) {
						// This item needs a spacer before it! Add a horizontal rule.
						inputElements = inputElements.concat([ { elementType : 'hr', style : { width : '80%' } } ])
					}

					spacerAfter = false
					if(inputPrompts[l].hasOwnProperty('spacerAfter') && inputPrompts[l].spacerAfter == true) {
						// This item needs a spacer after it
						spacerAfter = true
					}

					switch(inputsData[j].type.toLowerCase()) {

//	Types are: text/radio/checkbox/color/date/dropdown/font/login
//	inputItem is the element that will contain the output for each type of input

/*
						case 'login':
							break

*/

						case 'time':
							inputElementToAdd = combineObjects(inputElementToAdd, { id : '', style : { display : 'flex', gap : '0.5em', flexDirection : 'row', alignItems : 'center', justifyContent : 'center' }, children : [
								{ elementType : 'input', id : inputID, onchange : onchangeFunction, disabled : startDisabled, type : 'time', style : { textAlign : 'center' } },
							] })
							if(inputPrompts[l].hasOwnProperty('default')) inputElementToAdd.children[0].value = inputPrompts[l].default
							if(inputPrompts[l].hasOwnProperty('min')) inputElementToAdd.children[0].min = new Date(inputPrompts[l].min).toISOString().substring(0, 10)
							if(inputPrompts[l].hasOwnProperty('max')) inputElementToAdd.children[0].max = new Date(inputPrompts[l].max).toISOString().substring(0, 10)
							if(inputPrompts[l].hasOwnProperty('label')) inputElementToAdd.children.unshift({ elementType : 'span', children : superTextMarkup(inputPrompts[l].label, modalBlacklist, null, null, false) })
							l = inputPrompts.length		// Terminate the loop, we can only have one prompt
							break


						case 'date':
							inputElementToAdd = combineObjects(inputElementToAdd, { id : '', style : { display : 'flex', gap : '0.5em', flexDirection : 'row', alignItems : 'center', justifyContent : 'center' }, children : [
								{ elementType : 'input', id : inputID, onchange : onchangeFunction, disabled : startDisabled, type : 'date', style : { textAlign : 'center' } },
							] })
							if(inputPrompts[l].hasOwnProperty('default')) inputElementToAdd.children[0].value = inputPrompts[l].default
							if(inputPrompts[l].hasOwnProperty('min')) inputElementToAdd.children[0].min = new Date(inputPrompts[l].min).toISOString().substring(0, 10)
							if(inputPrompts[l].hasOwnProperty('max')) inputElementToAdd.children[0].max = new Date(inputPrompts[l].max).toISOString().substring(0, 10)
							if(inputPrompts[l].hasOwnProperty('label')) inputElementToAdd.children.unshift({ elementType : 'span', children : superTextMarkup(inputPrompts[l].label, modalBlacklist, null, null, false) })
							l = inputPrompts.length		// Terminate the loop, we can only have one prompt
							break


						case 'font':
							// Font is not compatible with validateFunction
							if(typeof(fontsLibRenderPage) === 'undefined') {
								printWarning('fontsLib.js is not installed! Font selection impossible.')
								l = inputPrompts.length
								j = inputsData.length
								continue
							}

							let fontsLibID = 'fontsLib' + inputID
							inputElementToAdd.children = [{ elementType : 'div', id : fontsLibID, style : { maxWidth : '90vw', maxHeight : 'calc(100vh - 14em)', display : 'flex', flexDirection : 'column' } }]
							categories[categories.length - 1].style.padding = '0px'
							let fontSelectionText = ''
							try {
								fontSelectionText = inputPrompts[l].text
							} catch {
							}

							let promptData = inputsData[j].prompts[l]	// This is needed because the iterators change before post-execution
							postRenderExecution.push(()=>{
								let fontsLibRenderElement = document.getElementById(fontsLibID)
								fontsLibRenderPage(fontsLibRenderElement, false, fontSelectionText);
								fontsLibRenderElement.children[0].style.flex = '1 1'

								if(promptData.hasOwnProperty('font')) {
									setTimeout(()=>{ fontsLibChangeAllSampleFonts(promptData.font) }, 75)
								}
							})

							// Change the input IDs to reference the correct elements in the fonts library page
							inputLists.returnInputs[0].ids[0] = 'fontsLibFontSelection'
							inputLists.returnInputs.push({ name : 'sampleText', ids : [ 'fontsLibSampleTextText' ] })
							focusElement = 'fontsLibSampleTextText'		// Set the focus to the sample text field

							l = inputsData[j].length	// Terminate the iteration here. Fonts must be chosen alone.
							j = inputsData.length		// Terminate the iteration here. Fonts must be chosen alone.
							break


						case 'button':
							// Button is not compatible with validateFunction
							inputItem.style = combineObjects(inputItem.style, { display : 'flex', flex : '1 1', width : '100%' })
							inputElementToAdd = combineObjects(inputElementToAdd, { elementType : 'div', style : { display : 'flex', gap : '0.75em', textAlign : 'left', alignItems : 'center', justifyContent : 'center' }, children : [
									{ elementType : 'button', style : combineObjects(inputPrompts[l].style, { cursor : 'pointer', borderRadius : '20%' }), text : inputPrompts[l].value, onclick : ()=>{ inputPrompts[l].onclick } },
									{ elementType : 'span', style : { flex : '1 1' }, children : superTextMarkup(inputPrompts[l].label, modalBlacklist, null, null, false) },
								]
							})

							if(inputsData[j].hasOwnProperty('closeAfterClick') && inputsData[j].closeAfterClick === true) {
								inputElementToAdd.children[0].onclick = ()=>{ inputPrompts[l].onclick(); closeModalForm(modalID); }
							}
							break


						case 'color':
							// Color is not compatible with validateFunction
							// Check/apply default color
							if(!inputPrompts[l].hasOwnProperty('default')) inputPrompts[l].default = ''
							inputPrompts[l].default = readColor(inputPrompts[l].default)

							// Check for alpha allowed
							if(!inputPrompts[l].hasOwnProperty('allowAlpha') || inputPrompts[l].allowAlpha !== true) {
								inputPrompts[l].allowAlpha = false
								inputPrompts[l].default = inputPrompts[l].default.substring(0, 6)
							} else {
								inputPrompts[l].allowAlpha = true
							}

							// Check for see through alpha, or checkerboard alpha
							if(inputPrompts[l].allowAlpha === false || !inputPrompts[l].hasOwnProperty('seeThroughAlpha') || inputPrompts[l].seeThroughAlpha !== true) {
								inputPrompts[l].seeThroughAlpha = false
							} else {
								inputPrompts[l].seeThroughAlpha = true
							}

							inputElementToAdd = combineObjects(inputElementToAdd, { id : '', style : { display : 'flex', minWidth : '34rem', gap : '0.5em', flexDirection : 'row', alignItems : 'center', justifyContent : 'center' }, children : [
								{ elementType : 'div', style : { display : 'flex', flexDirection : 'row', gap : '1em', alignItems : 'center', justifyContent : 'center' }, children : [
									renderColorPickerInputElement(inputPrompts[l].default, inputPrompts[l].allowAlpha, inputPrompts[l].seeThroughAlpha, null, inputID, true)
								]},
							]})
							if(inputPrompts[l].hasOwnProperty('default')) inputElementToAdd.children[0].value = '#' + readColor(inputPrompts[l].default)
							if(inputPrompts[l].hasOwnProperty('label')) inputElementToAdd.children.unshift({ elementType : 'span', children : superTextMarkup(inputPrompts[l].label, modalBlacklist, null, null, false) })
							l = inputPrompts.length		// Terminate the loop, we can only have one prompt
							break


						case 'number':
							let inputScript = ()=>{}
							if(inputPrompts[l].hasOwnProperty('min')) {
								let min = parseFloat(inputPrompts[l].min)
								if(inputPrompts[l].hasOwnProperty('max')) {
									let max = parseFloat(inputPrompts[l].max)
									// Both min and max
									inputScript = ()=>{
										console.log(inputID)
										console.log(document.getElementById(inputID).value)
										let value = document.getElementById(inputID).value
										if(isNaN(document.getElementById(inputID).value)) return
										value = parseFloat(value)
										document.getElementById(inputID).value = clamp(value, min, max)
									}
								} else {
									// Just min
									inputScript = ()=>{
										console.log(document.getElementById(inputID).value)
										let value = document.getElementById(inputID).value
										if(isNaN(document.getElementById(inputID).value)) return
										value = parseFloat(value)
										document.getElementById(inputID).value = clamp(value, min, value)
									}
								}
							} else {
								// Just max
								let max = parseFloat(inputPrompts[l].max)
								inputScript = ()=>{
									console.log(document.getElementById(inputID).value)
									let value = document.getElementById(inputID).value
									if(isNaN(document.getElementById(inputID).value)) return
									value = parseFloat(value)
									document.getElementById(inputID).value = clamp(value, value, max)
								}
							}

							inputElementToAdd = combineObjects(inputElementToAdd, { id : '', style : { display : 'flex', gap : '0.5em', flexDirection : 'row', alignItems : 'center', justifyContent : 'center' }, children : [
								{ elementType : 'input', id : inputID, onchange : onchangeFunction, disabled : startDisabled, type : 'number', style : { textAlign : 'center' }, onchange : inputScript },
							] })
							if(inputPrompts[l].hasOwnProperty('default')) inputElementToAdd.children[0].value = inputPrompts[l].default
							if(inputPrompts[l].hasOwnProperty('min')) inputElementToAdd.children[0].min = inputPrompts[l].min
							if(inputPrompts[l].hasOwnProperty('max')) inputElementToAdd.children[0].max = inputPrompts[l].max

							if(inputPrompts[l].hasOwnProperty('label')) inputElementToAdd.children.unshift({ elementType : 'span', children : superTextMarkup(inputPrompts[l].label, modalBlacklist, null, null, false) })
							l = inputPrompts.length		// Terminate the loop, we can only have one prompt
							break


						case 'dropdown':
							inputElementToAdd = combineObjects(inputElementToAdd, { elementType : 'select', onchange : onchangeFunction })
							if(!inputElementToAdd.hasOwnProperty('children')) inputElementToAdd.children = []
							// Prevent other iterations from taking place. Iterate here and do everything now.
							while(l < inputPrompts.length) {
								if(!inputPrompts[l].hasOwnProperty('value')) inputPrompts[l].value = inputPrompts[l].label
								inputElementToAdd.children.push({ elementType : 'option', disabled : startDisabled, value : inputPrompts[l].value, children : superTextMarkup(inputPrompts[l].label, modalBlacklist, null, null, false) })
								if(inputPrompts[l].hasOwnProperty('default') && inputPrompts[l].default === true) inputElementToAdd.children[inputElementToAdd.children.length - 1].selected = true
								l++
							}
							break


						case 'checkbox':
							let selected = false
							if(inputPrompts[l].hasOwnProperty('default') && typeof(inputPrompts[l].default) === 'string') {
								inputPrompts[l].default = inputPrompts[l].default.toLowerCase()
								if(inputPrompts[l].default == 'true') inputPrompts[l].default = true
							} else if(inputPrompts[l].hasOwnProperty('default') && inputPrompts[l].default === true) {
								selected = true
							}
							inputElementToAdd = combineObjects(inputElementToAdd, { id : '', style : { cursor : 'pointer' }, className : 'nabLibHoverHighlight', onclick : ()=>{ document.getElementById(inputID).checked = true }, children : [
								{ elementType : 'input', type : 'checkbox', style : { cursor : 'pointer' }, id : inputID, disabled : startDisabled, checked : selected },
								{ elementType : 'label', 'for' : inputID, onchange : onchangeFunction, style : { cursor : 'pointer' }, children : superTextMarkup(inputPrompts[l].label, modalBlacklist, null, null, false) },
							] })

							l = inputPrompts.length		// Terminate the loop, we can only have one prompt
							break


						case 'radio':
							let radioSelected = false
							inputItem.style.width = '100%'
							if(inputPrompts[l].hasOwnProperty('default') && inputPrompts[l].default !== false) radioSelected = true
							inputElementToAdd = combineObjects(inputElementToAdd, { id : '', className : 'nabLibHoverHighlight', style : { cursor : 'pointer', width : '100%', display : 'grid', gridTemplateColumns : '1.35em auto' }, onclick : ()=>{ document.getElementById(inputID).checked = true }, children : [
								{ elementType : 'input', type : 'radio', id : inputID, onchange : onchangeFunction, name : modalID + 'Input' + j.toString() + 'RadioButtons', checked : radioSelected, disabled : startDisabled, value : (inputPrompts[l].hasOwnProperty('value') ? inputPrompts[l].value : inputPrompts[l].label), style : { cursor : 'pointer' }, },
								{ elementType : 'label', 'for' : inputID, style : { cursor : 'pointer', paddingLeft : '0.3em', textAlign: 'left' }, children : superTextMarkup(inputPrompts[l].label, modalBlacklist, null, null, false) },
							] })
							break


						case 'text':
							inputItem.style = combineObjects(inputItem.style, { display : 'flex', gap : '0.5em' })
							if(inputPrompts[l].hasOwnProperty('label') && inputPrompts[l].label != '') inputItem.children.push({ elementType : 'span', style : { textAlign : 'right' }, children : superTextMarkup(inputPrompts[l].label, modalBlacklist, null, null, false) })
							let defaultValue = ''
							if(inputPrompts[l].hasOwnProperty('default')) defaultValue = inputPrompts[l].default
							inputElementToAdd = combineObjects(inputElementToAdd, { elementType : 'input', disabled : startDisabled, type : 'text', id : inputID, onchange : onchangeFunction, style : {}, placeholder : defaultValue, value : defaultValue })
							if(inputPrompts[l].hasOwnProperty('style')) inputElementToAdd.style = combineObjects(inputPrompts[l].style, inputElementToAdd.style)
							inputElementToAdd.onfocus = ()=>{ document.getElementById(inputID).select(); }
							l = inputPrompts.length		// Terminate the loop, we can only have one prompt
							break


						default:
							printError('createModalForm(): No modal input type \'' + inputsData[j].type + '\'!')

					}
					inputItem.children.push(inputElementToAdd)
					inputElements = inputElements.concat([ inputItem ])
					inputCount++

					if(spacerAfter == true) {
						// This item needs a spacer after it! Add a horizontal rule.
						inputElements = inputElements.concat([ { elementType : 'hr', style : { width : '80%' } } ])
					}
				}
			}
		}

		categories[categories.length - 1].children.push({ elementType : 'div', style : { display : 'flex', gap : '0.5em', flexDirection : 'column', alignItems : 'center', justifyContent : 'center' }, children : inputElements, onclick : ()=>{
			let checkbox = document.getElementById(categoryToggle)
			if(checkbox === null) return
			if(checkbox.checked == false) {
				checkbox.checked = true
				checkbox.onchange()
			}
		} })

		for(let k = 0; k < categories.length; k++) {
			modalContent.children.push(categories[k])
		}
	}

	let okayCancelButtons = []
	if(data.cancelButton === true) {
		// Cancel/Close button
		let cancelText = 'Cancel'
		if(data.okayButton === false) {
			cancelText = 'Close'
		}
		okayCancelButtons.push(
		{ elementType : 'div', className : 'modalFormButton modalForm' + cancelText + 'Button', onclick : ()=>{ data.elementToFocusOnAfterClose.focus(); closeModalForm(modalID); }, style : modalButtonStyle, children : [
				{ elementType : 'div', style : { lineHeight : '2em' }, text : cancelText }
		]})
	}

	if(data.okayButton === true) {
		// Okay button
		okayCancelButtons.push(
		{ elementType : 'div', className : 'modalFormButton modalFormOkayButton', onclick : ()=>{
			// Before continuing, check all of the validating inputs. If any of them fail, do not continue and flash them red!
			for(let i = 0; i < validateFunctions.length; i++) {
				if(validateFunctions[i]['function'] === null) continue
				let element = document.getElementById(validateFunctions[i].id)
				if(element === null) continue
				if(validateFunctions[i]['function'](element.value) !== true) return
			}
			data.elementToFocusOnAfterClose.focus()
			returnModalInputs(modalID, data.callback, data.callbackDataArray, inputLists.returnInputs, inputLists.forceInputs)
		}, style : modalButtonStyle, children : [
			{ elementType : 'div', style : { lineHeight : '2em' }, text : 'Okay' }
		]})
	}

	if(okayCancelButtons.length > 0) {
		modal.children.push({ elementType : 'div', className : 'modalFormButtonContainer', style : { padding : '0.5em 0em 0em 0em', borderTop : '0.1em inset #4449', display : 'flex', alignItems : 'center', justifyContent : 'center' }, children : okayCancelButtons })
	}

	document.body.appendChild(createElement(modalBackground))

	for(let i = 0; i < postRenderExecution.length; i++) {
		postRenderExecution[i]()
	}

	if(focusElement === null) focusElement = modalFocusID	// If no focus element specified, focus on the scrolling div for accessibility
	document.getElementById(focusElement).focus()
}

function getModalInputValue(inputElement) {
	let type = ''
	if(inputElement.tagName.toLowerCase() == 'select') {
		type = 'dropdown'
	} else if(inputElement.tagName.toLowerCase() == 'textarea') {
		type = 'textarea'
	} else if(inputElement.hasAttribute('type')) {
		type = inputElement.type.toLowerCase()
	} else if(inputElement.hasAttribute('value')) {
		// No idea what type of element this is. Try to just return the value
		printWarning('Unrecognized mocal input type!', inputElement)
		return inputElement.value
	}

	try {
		switch(type) {
			case 'color':
				return readColor(inputElement.value)
				break

			case 'dropdown':
				return getSelectValue(inputElement, null)
				break

			case 'radio':
				return getRadioButtonValue(inputElement)
				break

			case 'checkbox':
				return inputElement.checked
				break

			case 'number':
				let min = inputElement.value
				let max = inputElement.value
				if(inputElement.hasAttribute('min')) min = inputElement.min
				if(inputElement.hasAttribute('max')) max = inputElement.max
				return clamp(inputElement.value, min, max).toString()
				break

			case 'date':
			case 'time':
				// min and max can be given as date objects or timestamps
				let tempDate = Math.floor((new Date(inputElement.value)).getTime() / 1000)
				let dateMin = inputElement.value
				let dateMax = inputElement.value
				if(inputElement.hasAttribute('min')) dateMin = Math.floor((new Date(inputElement.min)).getTime() / 1000)
				if(inputElement.hasAttribute('max')) dateMax = Math.floor((new Date(inputElement.max)).getTime() / 1000)
				return new Date(clamp(tempDate, dateMin, dateMax))
				break

			case 'text':
			case 'textarea':
				return inputElement.value
				break

			default:
				return inputElement.value
		}
	} catch(error) {
		printWarning('nabLib: getModalInputValue: ' + error, 'Returning null', inputElement)
	}
	return null
}

function returnModalInputs(id, callback, callbackDataArray, inputsList, forceInputs = []) {
	let match = false
	let iterationMatch = false
	// Loop in reverse so the focus ends up on the first field that isn't filled out
	for(let i = forceInputs.length - 1; i >= 0 ; i--) {
		iterationMatch = false
		let forceElement = document.getElementById(forceInputs[i])
		if(forceElement.hasAttribute('disabled') && forceElement.disabled == true) continue		// If this input is disabled, skip. We can't require input on a disabled field

		let value = getModalInputValue(forceElement)
		if(value !== '' && value !== null) continue

		iterationMatch = match = true
		forceElement.focus()

		flashElementRed(forceElement)
	}
	if(match === true) return

	let matchedInputNames = []
	let outputs = {}

	for(let i = 0; i < inputsList.length; i++) {
		let newOutput = []
		let hasData = false
		for(let j = 0; j < inputsList[i].ids.length; j++) {

			let inputElement = document.getElementById(inputsList[i].ids[j])
			if(inputElement.hasAttribute('name')) {
				if(isInArray(inputElement.name, matchedInputNames)) continue
				matchedInputNames.push(inputElement.name)
			}
			if(inputElement.hasAttribute('disabled') && inputElement.disabled == true) {
				newOutput.push(null)	// If this element is disabled, do not get it's output
			} else {
				hasData = true
				newOutput.push(getModalInputValue(inputElement))
			}
		}
		if(hasData == true) outputs[inputsList[i].name] = newOutput
	}

	closeModalForm(id)
	callback(outputs, callbackDataArray)
}

function closeModalForm(id) {
	let element = document.getElementById(id)
	element.parentElement.removeChild(element)
}



// -------------------- COLOR PICKER --------------------
// -------------------- COLOR PICKER --------------------

nabLibColorPickerCount = 0
nabLibColorPickerEditElement = null
function renderColorPickerInputElement(startingValue = '999', allowAlpha = false, seeThroughAlpha = false, putTextElement = null, inputID = '', startDisabled = false) {
	let radius = 0.25
	let buttonHeight = 3

	nabLibColorPickerCount++
	if(inputID == '') inputID = 'nabLibColorPickerInput-' + nabLibColorPickerCount.toString()

	let CSSVar = false
	if(getCSSVar(startingValue) != '') {
		CSSVar = true
	}

	let inputColorID = inputID + '-Color'
	let inputContainerID = inputID + '-Container'
	let inputModalID = inputID + '-Modal'

	if(typeof(putTextElement) === 'string') putTextElement = document.getElementById(putTextElement)
	if(putTextElement === null) putTextElement = inputColorID

	function nabLibColorPickerClickOutside(event) {

		let inputModal = document.getElementById(inputModalID)
		let boundingBox = inputModal.children[inputModal.children.length - 1].getBoundingClientRect()

		if(	event.clientX < boundingBox.left || event.clientX > boundingBox.right ||
			event.clientY < boundingBox.top || event.clientY > boundingBox.bottom) {
				nabLibColorPickerClose()
		}

//		event.stopPropagation()
	}

	function nabLibColorPickerClose() {
		window.removeEventListener('click', nabLibColorPickerClickOutside)
		document.getElementById(inputModalID).remove()
	}

	return 	{ elementType : 'div', id : inputContainerID, type : 'color', style : { cursor : 'auto', backgroundColor : '', display : 'grid', gridTemplateColumns : radius.toString() + 'rem 1fr ' + radius.toString() + 'rem', gridTemplateRows : radius.toString() + 'rem ' + (buttonHeight - (radius * 2)).toString() + 'rem ' + radius.toString() + 'rem 1fr', width : '12rem' },
		onclick : ()=>{

			if(document.getElementById(inputModalID) !== null) {
				return	// If this is already open, stop it from reopening
			}

			document.getElementById(inputContainerID).appendChild(createElement({ elementType : 'div', id : inputModalID, style : { gridArea : '4 / 1 / 4 / 4', zIndex : '2147483647' }, }))

			let x = document.getElementById(inputContainerID)
			let scrollHeights = []
			while(x.tagName != 'BODY') {
				scrollHeights.push({ element : x, scroll : x.scrollTop })
				x = x.parentElement
			}

			let inputElement = document.getElementById(inputID)
			renderColorPicker(inputModalID, inputID, putTextElement, (CSSVar == true ? startingValue : inputElement.value), allowAlpha, seeThroughAlpha, nabLibColorPickerClose)

			x = document.getElementById(inputContainerID)
			for(let i = 0; i < scrollHeights.length; i++) {
				scrollHeights[i].element.scrollTop = scrollHeights[i].scroll
			}

			setTimeout( ()=>{ window.addEventListener('click', nabLibColorPickerClickOutside) }, 25 )
		},
		children : [
			{ elementType : 'div', style : { borderRadius : radius.toString() + 'em 0 0 ' + radius.toString() + 'em', gridArea : '1 / 1 / 4 / 1', backgroundColor : '#555' }, },	// Left
			{ elementType : 'div', style : { borderRadius : '0 ' + radius.toString() + 'em ' + radius.toString() + 'em 0', gridArea : '1 / 3 / 4 / 4', backgroundColor : '#555' }, },	// Right
			{ elementType : 'div', style : { gridArea : '1 / 2 / 2 / 3', backgroundColor : '#555' }, },	// Top
			{ elementType : 'div', style : { gridArea : '3 / 2 / 4 / 3', backgroundColor : '#555' }, },	// Bottom
			{ elementType : 'div', style : { gridArea : '2 / 2 / 2 / 2', display : 'grid', border : '0.075em solid #AAA', backgroundImage : nabLibTransparencyGrid, backgroundSize : nabLibTransparencyGridSize }, children : [
				{ elementType : 'input', type : 'hidden', disabled : startDisabled, id : inputID, value : (getCSSVar(startingValue) == '' ? startingValue : readColor(getCSSVar(startingValue))), style : { display : 'none', gridArea : '1 / 1' },
					oninput : ()=>{
						let inputElement = document.getElementById(inputID)
						let outputElement = document.getElementById(inputColorID)
						outputElement.style.backgroundColor = '#' + readColor(inputElement.value)
					},
				},
				{ elementType : 'div', id : inputColorID, style : { gridArea : '1 / 1', fontWeight : 'bold', display : 'flex', alignItems : 'center', justifyContent : 'center', cursor : 'pointer', backgroundColor : (getCSSVar(startingValue) == '' ? '#' + startingValue : '#' + readColor(getCSSVar(startingValue))) },
					children : (putTextElement === inputColorID ? [ nabLibColorPickerAddColorText(startingValue) ] : []) },
			]},
	]}
}

// USE renderColorPicker IF YOU WANT THE USER TO INPUT A COLOR
// This function is only intended to render a color picker directly into an element
function renderColorPicker(renderElement, inputFormElement, putTextElement = null, defaultValue = '999', allowAlpha = false, seeThroughAlpha = false, closeFormFunction = null) {
	// inputID and inputModalID are used to integrate the color picker properly with the input element

	if(allowAlpha !== true) seeThroughAlpha = false // Bug prevention

	if(typeof(renderElement) === 'string') renderElement = document.getElementById(renderElement)
	if(typeof(inputFormElement) === 'string') inputFormElement = document.getElementById(inputFormElement)
	if(typeof(putTextElement) === 'string') putTextElement = document.getElementById(putTextElement)

	nabLibColorPickerCount++
	let colorPickerNumber = nabLibColorPickerCount

	let colorPickerId = 'nabLibColorPicker' + colorPickerNumber.toString()
	let colorPickerScrubberId = colorPickerId + '-Scrubber'
	let colorPickerDragId = colorPickerId + '-Drag'
	let colorPickerValueId = colorPickerId + '-Value'

	let colorPickerFieldColorId = colorPickerId + '-FieldColor'
	let colorPickerFieldSaturationId = colorPickerId + '-FieldSaturation'
	let colorPickerFieldValueId = colorPickerId + '-FieldValue'
	let colorPickerFieldAlphaId = colorPickerId + '-FieldAlpha'

	let colorPickerRId = colorPickerId + '-RSlider'
	let colorPickerGId = colorPickerId + '-GSlider'
	let colorPickerBId = colorPickerId + '-BSlider'
	let colorPickerRTextId = colorPickerId + '-RText'
	let colorPickerGTextId = colorPickerId + '-GText'
	let colorPickerBTextId = colorPickerId + '-BText'

	let colorPickerHId = colorPickerId + '-HSlider'
	let colorPickerSId = colorPickerId + '-SSlider'
	let colorPickerVId = colorPickerId + '-LSlider'
	let colorPickerHTextId = colorPickerId + '-HText'
	let colorPickerSTextId = colorPickerId + '-SText'
	let colorPickerVTextId = colorPickerId + '-LText'

	let colorPickerVBackgroundId = colorPickerId + '-LColor'
	let colorPickerSBackgroundId = colorPickerId + '-SColor'

	let colorPickerAId = colorPickerId + '-ASlider'
	let colorPickerATextId = colorPickerId + '-AText'

	let colorPickerSwatchId = colorPickerId + '-Swatch'

	let startingValue
	let CSSVar = false
	if(getCSSVar(defaultValue) == '') {
		startingValue = defaultValue
	} else {
		CSSVar = true
		startingValue = getCSSVar(defaultValue)
	}
	startingValue = readColor(startingValue)
	if(allowAlpha !== true) startingValue = startingValue.substring(0, 6)

	let r = parseInt(startingValue.substring(0, 2), 16)
	let g = parseInt(startingValue.substring(2, 4), 16)
	let b = parseInt(startingValue.substring(4, 6), 16)

	let hsv = rgbToHsv(r, g, b)
	let h = round(hsv[0])
	let s = round(hsv[1])
	let v = round(hsv[2])

	let a = 255
	if(allowAlpha === true && startingValue.length > 6) a = parseInt(startingValue.substring(6, 8), 16)

	let mouseMoveFunction = null

	let borderSpace = 0.75
	let backgroundColor1 = '2a2a2a'	// Top color
	let backgroundColor2 = '333333'	// Alpha color
	let backgroundColor3 = '444444'	// Bottom color

	let adjustmentSizeLong = 7.5
	let adjustmentSizeShort = 1.5

	let shadowBorderRadius = 0.2

	let colorPickerCSS = document.createElement('style')
	colorPickerCSS.appendChild(document.createTextNode('.nabLibColorPickerText {text-align: center; font-family: \'nabfonts sans-serif\', sans-serif; font-size: 0.75rem; font-weight: bold; } .nabLibColorPickerBoxShadow:hover { box-shadow: 0 0 0 ' + (shadowBorderRadius * 0.75).toString() + 'rem #000, 0 0 0 ' + shadowBorderRadius.toString() + 'rem #FFFF } .nabLibColorPickerBoxShadow { border-radius: ' + shadowBorderRadius + 'rem; box-shadow: 0 0 0 ' + (shadowBorderRadius * 0.75).toString() + 'rem #000, 0 0 0 ' + shadowBorderRadius.toString() + 'rem #FFFA } .nabLibColorPickerGrid > div { width: 100%; height: 100% }'))
	document.head.appendChild(colorPickerCSS)


	let upperRows = borderSpace.toString() + 'rem ' + adjustmentSizeShort.toString() + 'rem ' + borderSpace.toString() + 'rem ' + adjustmentSizeLong.toString() + 'rem ' + borderSpace.toString() + 'rem ' + adjustmentSizeShort.toString() + 'rem '
	let alphaRows = ''
	if(allowAlpha === true) alphaRows = adjustmentSizeShort.toString() + 'rem ' + adjustmentSizeShort.toString() + 'rem '
	let lowerRows =  adjustmentSizeShort.toString() + 'rem ' + adjustmentSizeShort.toString() + 'rem ' + borderSpace.toString() + 'rem ' + adjustmentSizeShort.toString() + 'rem ' + borderSpace.toString() + 'rem ' + adjustmentSizeShort.toString() + 'rem ' + borderSpace.toString() + 'rem ' + adjustmentSizeShort.toString() + 'rem ' + borderSpace.toString() + 'rem ' + adjustmentSizeShort.toString() + 'rem ' + borderSpace.toString() + 'rem'


	let columns = borderSpace.toString() + 'rem ' + (adjustmentSizeShort + borderSpace).toString() + 'rem ' + ((shadowBorderRadius * 2) + 1).toString() + 'rem 14rem ' + borderSpace.toString() + 'rem ' + adjustmentSizeShort.toString() + 'rem ' + borderSpace.toString() + 'rem'
	let rows = upperRows + alphaRows + lowerRows

	let tempHeight = rows.split('rem ')
	let tempWidth = columns.split('rem ')
	let totalHeight = 0
	for(let c = 0; c < tempHeight.length; c++) {
		totalHeight += parseFloat(tempHeight[c])
	}
	let totalWidth = 0
	for(let c = 0; c < tempWidth.length; c++) {
		totalWidth += parseFloat(tempWidth[c])
	}


	let gridBackground = ''
	if(seeThroughAlpha !== true) gridBackground = nabLibTransparencyGrid

	renderElement.appendChild(createElement({ elementType : 'div', onclick : ()=>{ event.stopPropagation() }, className : 'nabLibColorPickerText nabLibColorPickerGrid', id : colorPickerId, style : { width : totalWidth.toString() + 'rem', height : totalHeight.toString() + 'rem', color : '#EEE', border : '1px solid #F00', borderRadius : borderSpace.toString() + 'rem', overflow : 'hidden', display : 'grid', alignItems : 'center', justifyItems : 'center',
		gridTemplateColumns : columns,
		gridTemplateRows : rows,
	}, children : [


		// Background color
		{ elementType : 'div', style : { gridArea : '1 / 1 / 4 / -1', backgroundColor : '#' + backgroundColor1, }, },		// Top
		{ elementType : 'div', style : { gridArea : '4 / 1 / 4 / 1', backgroundColor : '#' + backgroundColor1 }, },			// Upper middle left side
		{ elementType : 'div', style : { gridArea : '4 / 3 / 4 / 3', backgroundColor : '#' + backgroundColor1 }, },			// Upper middle middle bar
		{ elementType : 'div', style : { gridArea : '4 / 5 / 4 / -1', backgroundColor : '#' + backgroundColor1 }, },		// Upper middle right side
		{ elementType : 'div', style : { gridArea : '5 / 1 / 8 / -1', backgroundColor : '#' + backgroundColor1,
			backgroundImage : (allowAlpha == true ? 'linear-gradient(0deg, #' + backgroundColor3 + ' 0.75em, #' + backgroundColor1 + ' 1.5em)' : ''),
		}, },		// Middle spacer bar
		{ elementType : 'div', style : { gridArea : '8 / 1 / 8 / 4', backgroundColor : '#' + backgroundColor3 }, },			// Middle left
		{ elementType : 'div', style : { gridArea : '8 / -2 / 8 / -1', backgroundColor : '#' + backgroundColor3 }, },		// Middle right
		{ elementType : 'div', style : { gridArea : '-12 / 1 / -1 / -1', 
			backgroundImage : 'linear-gradient(180deg, #' + (allowAlpha == true ? backgroundColor3 : backgroundColor1) + ' 0.75em, #' + (allowAlpha == true ? backgroundColor3 : backgroundColor1) + '00 1.5em)',
		backgroundColor : '#' + backgroundColor2 }, },		// Bottom


		// Hue
		{ elementType : 'input', spellcheck : 'false', id : colorPickerHTextId, style : { gridArea : '2 / 2 / 2 / 3', fontFamily : '\'nabfonts monospace\', monospace', textAlign : 'center', fontWeight : 'bold' }, size : 3, min : 0, max : 360, value : h,
			oninput : ()=>{ hsvChanged() },
			onfocus : ()=>{ selectAllInputText(colorPickerHText) },
		},
		{ elementType : 'span', style : { gridArea : '2 / 3 / 2 / 4' }, text : 'H' },
		{ elementType : 'div', style : { gridArea : '2 / 4 / 2 / 4', display : 'flex', flexDirection : 'row', alignItems : 'center', justifyContent : 'center', gap : shadowBorderRadius.toString() + 'rem', }, children : [
			{ elementType : 'div', className : 'nabLibColorPickerBoxShadow', style : { display : 'flex', flex : '1 1', padding : '0.25rem 0rem', backgroundImage : 'linear-gradient(90deg, #F00, #FF0, #0F0, #0FF, #00F, #F0F, #F00)' }, children : [
				{ elementType : 'input', id : colorPickerHId, tabIndex : '-1', type : 'range', min : 0, max : 360, step : 1, value : h, style : { cursor : 'pointer', flex : '1 1', background : 'linear-gradient(180deg, #FFF0 0%, #FFF9 40%, #000 50%, #FFF9 60%, #FFF0 100%)', margin : 0, padding : 0 },
					oninput : ()=>{
						colorPickerHText.value = colorPickerH.value
						hsvChanged()
					},
				},
			]},
		]},


		// Swatch
		{ elementType : 'div', style : { gridArea : '4 / 2 / 4 / 2', display : 'grid', gap : '0.225em', gridTemplateRows : '1.5em 1fr 1.5em', gridTemplateColumns : '1fr' }, children : [
			{ elementType : 'div', style : { gridArea : '1 / 1 / 1 / 1', backgroundColor : '#' + backgroundColor1 }, },
			{ elementType : 'div', style : { gridArea : '3 / 1 / 3 / 1', backgroundColor : '#' + backgroundColor1 }, },
			{ elementType : 'div', className : 'nabLibColorPickerBoxShadow', style : { gridArea : '2 / 1 / 2 / 1', backgroundImage : gridBackground, backgroundSize : nabLibTransparencyGridSize, display : 'flex', overflow : 'hidden' }, children : [
				{ elementType : 'div', id : colorPickerSwatchId, style : { backgroundColor : '#' + startingValue, flex : '1 1' } },
			]},
		]},


		// Color Field
		{ elementType : 'div', className : 'nabLibColorPickerBoxShadow', style : { gridArea : '4 / 4 / 4 / 5', overflow : 'hidden', display : 'grid', userSelect : 'none', cursor : 'pointer', backgroundImage : gridBackground, backgroundSize : nabLibTransparencyGridSize, textShadow : '#000 0.0rem 0.075rem, #000 0rem -0.075rem, #000 0.075rem 0rem, #000 -0.075rem 0rem, #000 0.075rem 0.075rem, #000 0.075rem -0.075rem, #000 -0.075rem 0.075rem, #000 -0.075rem -0.075rem' }, children : [
			{ elementType : 'div', id : colorPickerFieldAlphaId, style : { gridArea : '1 / 1', display : 'grid', opacity : 1 }, children : [		// Alpha
				{ elementType : 'div', id : colorPickerFieldColorId, style : { gridArea : '1 / 1', backgroundColor : '#04F' }, },					// Color
				{ elementType : 'div', id : colorPickerFieldSaturationId, style : { gridArea : '1 / 1', backgroundImage : 'linear-gradient(90deg, #FFFF 0%, #FFF0 100%)' }, },		// Saturation
				{ elementType : 'div', id : colorPickerFieldValueId, style : { gridArea : '1 / 1', backgroundImage : 'linear-gradient(0deg, #000F 0%, #0000 100%)' }, },		// Value
				{ elementType : 'div', id : colorPickerDragId, style : { gridArea : '1 / 1', display : 'flex', alignItems : 'center', justifyContent : 'center' },
					onmousedown : ()=>{
						nabLibColorPickerEditElement = nabLibColorPickerCount
						mouseMoveFunction = nabLibColorPickerMouseMoved
						nabLibColorPickerStartDrag(event)
					},
				},
			]},

			// Scrubber
			{ elementType : 'div', id : colorPickerScrubberId, style : { zIndex : '999', gridArea : '1 / 1', fontSize : '2rem', fontFamily : '"nabfonts sans-serif", sans-serif', pointerEvents : 'none', position : 'relative', display : 'grid', alignItems : 'center', justifyContent : 'center' }, children : [
				{ elementType : 'div', style : { gridArea : '1 / 1', display : 'flex', alignItems : 'center', justifyContent : 'center' }, children : [
					{ elementType : 'span', text : '+'},
				]}
			]},

		]},


		// Value
		{ elementType : 'span', style : { gridArea : '2 / -3 / 4 / -3' }, text : 'V' },
		{ elementType : 'input', id : colorPickerVTextId, style : { gridArea : '5 / -3 / 7 / -2', fontFamily : '\'nabfonts monospace\', monospace', textAlign : 'center', fontWeight : 'bold' }, size : 3, min : 0, max : 100, value : v,
			oninput : ()=>{ hsvChanged() },
			onfocus : ()=>{ selectAllInputText(colorPickerVText) },
		},
		{ elementType : 'div', className : 'nabLibColorPickerBoxShadow', style : { gridArea : '4 / -3 / 4 / -2', backgroundImage : 'linear-gradient(0deg, #000 0%, #FFF 100%)', display : 'grid' }, children : [
			{ elementType : 'div', id : colorPickerVBackgroundId, style : { borderRadius : shadowBorderRadius.toString() + 'em', gridArea : '1 / 1', backgroundColor : '#' + hsvToRgb(h, 1, 1) } },
			{ elementType : 'div', style : { borderRadius : shadowBorderRadius.toString() + 'em', gridArea : '1 / 1', backgroundImage : 'linear-gradient(0deg, #000 0%, #0000 100%)' } },
			{ elementType : 'div', style : { width : '1.5rem', gridArea : '1 / 1', display : 'flex', alignItems : 'center', justifyContent : 'center' }, children : [
				// Firefox has a *STUPID* bug with vertical orientation of sliders, so this will have to do.
				{ elementType : 'input', id : colorPickerVId, alt : 'Value', tabIndex : '-1', type : 'range', id : colorPickerVId, min : 0, max : 100, step : 1, value : v, /* orient : 'vertical', */ style : { transform : 'rotateZ(-90deg)', height : '1rem', cursor : 'pointer', width : adjustmentSizeLong.toString() + 'rem', /* writingMode: 'bt-lr', WebkitAppearance : 'slider-vertical', */ margin : 0, padding : 0 },
					oninput : ()=>{
						colorPickerVText.value = colorPickerV.value
						hsvChanged()
					},
				},
			]},
		]},


		// Saturation
		{ elementType : 'input', id : colorPickerSTextId, style : { gridArea : '6 / 2 / 6 / 2', fontFamily : '\'nabfonts monospace\', monospace', textAlign : 'center', fontWeight : 'bold' }, size : 3, min : 0, max : 100, value : s,
			oninput : ()=>{ hsvChanged() },
			onfocus : ()=>{ selectAllInputText(colorPickerSText) },
		},
		{ elementType : 'span', style : { gridArea : '6 / 3 / 6 / 3' }, text : 'S' },
		{ elementType : 'div', className : 'nabLibColorPickerBoxShadow', style : { gridArea : '6 / 4 / 6 / 4', display : 'grid' }, children : [
			{ elementType : 'div', id : colorPickerSBackgroundId, style : { borderRadius : shadowBorderRadius.toString() + 'em', gridArea : '1 / 1', backgroundImage : 'linear-gradient(90deg, #' + rgbToHex(hsvToRgb(h, 0, v)) + ' 0%, #' + rgbToHex(hsvToRgb(h, 1, v)) + ' 100%)', } },
			{ elementType : 'input', tabIndex : '-1', type : 'range', id : colorPickerSId, min : 0, max : 100, step : 1, value : s, style : { gridArea : '1 / 1', cursor : 'pointer', margin : 0, padding : 0 },
				oninput : ()=>{
					colorPickerSText.value = colorPickerS.value
					hsvChanged()
				},
			},
		]},


		// Spacer
		{ elementType : 'div', style : { gridArea : '7 / 1 / 7 / -1', height : '0.05rem', display : 'flex', alignItems : 'center', justifyContent : 'center' }, children : [
			{ elementType : 'hr', style : { width : '85%', opacity : '0.5' }, },
		]},


		// Alpha
		{ elementType : 'input', id : colorPickerATextId, style : { gridArea : '8 / 2 / 8 / 3', fontFamily : '\'nabfonts monospace\', monospace', textAlign : 'center', fontWeight : 'bold', display : (allowAlpha === true ? 'grid' : 'none') }, size : 3, min : 0, max : 255, value : a,
			oninput : ()=>{ alphaChanged() },
			onfocus : ()=>{ selectAllInputText(colorPickerAText) },
		},
		{ elementType : 'span', style : { gridArea : '8 / 3 / 8 / 4', display : (allowAlpha === true ? 'grid' : 'none') }, text : 'A' },
		{ elementType : 'div', style : { display : (allowAlpha === true ? 'grid' : 'none'), alignItems : 'center', gap : shadowBorderRadius.toString() + 'rem', gridArea : '8 / 4 / 8 / -2' }, children : [

			{ elementType : 'div', className : 'nabLibColorPickerBoxShadow', style : { gridArea : '1 / 1', height : '100%', width : '100%', backgroundImage : gridBackground, backgroundSize : nabLibTransparencyGridSize }, },
			{ elementType : 'div', style : { gridArea : '1 / 1', height : '100%', width : '100%', backgroundImage : 'linear-gradient(90deg, #' + backgroundColor1 + '00, #' + backgroundColor1 + ')' }, },
			{ elementType : 'input', tabIndex : '-1', type : 'range', id : colorPickerAId, min : 0, max : 255, step : 1, value : a, style : { gridArea : '1 / 1', cursor : 'pointer', background : 'linear-gradient(180deg, #FFF0 0%, #FFF9 40%, #000 50%, #FFF9 60%, #FFF0 100%)', margin : 0, padding : 0 },
				oninput : ()=>{
					colorPickerAText.value = colorPickerA.value
					alphaChanged()
				},
			},
		]},


		// Spacer
		{ elementType : 'div', style : { gridArea : '-12 / 1 / -12 / -1', height : '0.05rem', display : 'flex', alignItems : 'center', justifyContent : 'center' }, children : [
			{ elementType : 'hr', style : { width : '85%', opacity : '0.5' }, },
		]},


		// Red
		{ elementType : 'input', id : colorPickerRTextId, style : { gridArea : '-11 / 2 / -11 / 2', fontFamily : '\'nabfonts monospace\', monospace', fontWeight : 'bold' }, size : 3, value : r,
			oninput : ()=>{ rgbChanged() },
			onfocus : ()=>{ selectAllInputText(colorPickerRText) },
		},
		{ elementType : 'div', style : { gridArea : '-11 / 3 / -11 / 3', display : 'flex', alignItems : 'center', justifyContent : 'center', width : '1rem' }, text : 'R' },
		{ elementType : 'div', style : { gridArea : '-11 / 4 / -11 / -2', display : 'flex', flexDirection : 'row', alignItems : 'center', justifyContent : 'center', }, children : [
			{ elementType : 'div', className : 'nabLibColorPickerBoxShadow', style : { flex : '1 1', display : 'flex', padding : '0.25rem 0rem', backgroundImage : 'linear-gradient(90deg, #000, #F00)' }, children : [
				{ elementType : 'input', tabIndex : '-1', type : 'range', id : colorPickerRId, min : 0, max : 255, step : 1, value : r, style : { cursor : 'pointer', flex : '1 1', background : 'linear-gradient(180deg, #FFF0 0%, #FFF9 40%, #000 50%, #FFF9 60%, #FFF0 100%)', margin : 0, padding : 0 },
					oninput : ()=>{
						colorPickerRText.value = colorPickerR.value
						rgbChanged()
					},
				},
			]},
		]},


		// Green
		{ elementType : 'input', id : colorPickerGTextId, style : { gridArea : '-9 / 2 / -9 / 2', fontFamily : '\'nabfonts monospace\', monospace', fontWeight : 'bold' }, size : 3, value : g,
			oninput : ()=>{ rgbChanged() },
			onfocus : ()=>{ selectAllInputText(colorPickerGText) },
		},
		{ elementType : 'div', style : { gridArea : '-9 / 3 / -9 / 3', display : 'flex', alignItems : 'center', justifyContent : 'center', width : '1rem' }, text : 'G' },
		{ elementType : 'div', style : { gridArea : '-9 / 4 / -9 / -2', display : 'flex', flexDirection : 'row', alignItems : 'center', justifyContent : 'center', }, children : [
			{ elementType : 'div', className : 'nabLibColorPickerBoxShadow', style : { flex : '1 1', display : 'flex', padding : '0.25rem 0rem', backgroundImage : 'linear-gradient(90deg, #000, #0F0)' }, children : [
				{ elementType : 'input', tabIndex : '-1', type : 'range', id : colorPickerGId, min : 0, max : 255, step : 1, value : g, style : { cursor : 'pointer', flex : '1 1', background : 'linear-gradient(180deg, #FFF0 0%, #FFF9 40%, #000 50%, #FFF9 60%, #FFF0 100%)', margin : 0, padding : 0 },
					oninput : ()=>{
						colorPickerGText.value = colorPickerG.value
						rgbChanged()
					},
				},
			]},
		]},


		// Blue
		{ elementType : 'input', id : colorPickerBTextId, style : { gridArea : '-7 / 2 / -7 / 2', fontFamily : '\'nabfonts monospace\', monospace', fontWeight : 'bold' }, size : 3, value : b,
			oninput : ()=>{ rgbChanged() },
			onfocus : ()=>{ selectAllInputText(colorPickerBText) },
		},
		{ elementType : 'div', style : { gridArea : '-7 / 3 / -7 / 3', display : 'flex', alignItems : 'center', justifyContent : 'center', width : '1rem' }, text : 'B' },
		{ elementType : 'div', style : { gridArea : '-7 / 4 / -7 / -2', display : 'flex', flexDirection : 'row', alignItems : 'center', justifyContent : 'center', }, children : [
			{ elementType : 'div', className : 'nabLibColorPickerBoxShadow', style : { flex : '1 1', display : 'flex', padding : '0.25rem 0rem', backgroundImage : 'linear-gradient(90deg, #000, #00F)' }, children : [
				{ elementType : 'input', tabIndex : '-1', type : 'range', id : colorPickerBId, min : 0, max : 255, step : 1, value : b, style : { cursor : 'pointer', flex : '1 1', background : 'linear-gradient(180deg, #FFF0 0%, #FFF9 40%, #000 50%, #FFF9 60%, #FFF0 100%)', margin : 0, padding : 0 },
					oninput : ()=>{
						colorPickerBText.value = colorPickerB.value
						rgbChanged()
					},
				},
			]},
		]},


		// Value
		{ elementType : 'div', style : { gridArea : '-5 / 2 / -5 / 4', display : 'flex', alignItems : 'center', justifyContent : 'end', }, text : 'Hex value:' },
		{ elementType : 'div', style : { gridArea : '-5 / 4 / -5 / 4', display : 'flex', alignItems : 'center', justifyContent : 'start', paddingLeft : '1.5em', }, text : '#' },
		{ elementType : 'input', id : colorPickerValueId, style : { userSelect : 'all', margin : '0em 6em 0em 1em', width : '8em', gridArea : '-5 / 4 / -5 / 4' }, value : readColor(startingValue), maxLength : 8,
			oninput : ()=>{
				let temp = colorPickerValueElement.value
				updateColorPicker()
				colorPickerValueElement.value = temp
			},
			onchange : ()=>{
				updateColorPicker()
			},
			onfocus : ()=>{ selectAllInputText(colorPickerValueElement) },
		},


		// Buttons
		{ elementType : 'div', style : { gridArea : '-3 / 2 / -3 / -2', userSelect : 'none', display : 'flex', alignItems : 'center', justifyContent : 'center', gap : shadowBorderRadius.toString() + 'rem' }, children : [
			{ elementType : 'div', className : 'nabLibColorPickerButtonHover nabLibHoverHighlight', style : { backgroundColor : '#700', flex : '1 1', padding : '0.3rem', borderRadius : '0.5rem' },
				children : [{ elementType : 'div', text : 'Cancel' }],
				onclick : ()=>{
					colorPickerValueElement.value = startingValue
					colorPickerValueElement.oninput()
					closeModal()
				},
			},
			{ elementType : 'div', className : 'nabLibColorPickerButtonHover nabLibHoverHighlight', style : { backgroundColor : '#770', flex : '1 1', padding : '0.3rem', borderRadius : '0.5rem' },
				children : [{ elementType : 'div', text : 'Revert' }],
				onclick : ()=>{
					colorPickerValueElement.value = startingValue
					colorPickerValueElement.oninput()
				},
			},
			{ elementType : 'div', className : 'nabLibColorPickerButtonHover nabLibHoverHighlight', style : { backgroundColor : '#070', flex : '1 1', padding : '0.3rem', borderRadius : '0.5rem' },
				children : [{ elementType : 'div', text : 'Okay' }],
				onclick : ()=>{
					closeModal()
				},
			},
		]},


	]}))

	function closeModal() {
		if(typeof(closeFormFunction) === 'function') {
			closeFormFunction()
		} else {
			colorPickerElement.remove()
		}
	}

	let colorPickerElement = document.getElementById(colorPickerId)

	// Button hover
	let colorPickerStyle = document.createElement('style')
	colorPickerStyle.appendChild(document.createTextNode(`
	.nabLibColorPickerButtonHover:active {
		border-style: inset;
	}

	.nabLibColorPickerButtonHover:active * {
		transform: translate(0.1em, 0.1em);
	}

	.nabLibColorPickerButtonHover {
		border: 0.1rem outset #555;
	}
	`))
	colorPickerElement.appendChild(colorPickerStyle)

	let colorPickerScrubberElement = document.getElementById(colorPickerScrubberId)
	let colorPickerDragElement = document.getElementById(colorPickerDragId)
	let colorPickerValueElement = document.getElementById(colorPickerValueId)

	let colorPickerFieldColorElement = document.getElementById(colorPickerFieldColorId)
	let colorPickerFieldSaturationElement = document.getElementById(colorPickerFieldSaturationId)
	let colorPickerFieldValueElement = document.getElementById(colorPickerFieldValueId)
	let colorPickerFieldAlphaElement = document.getElementById(colorPickerFieldAlphaId)

	let colorPickerSwatchElement = document.getElementById(colorPickerSwatchId)

	let colorPickerR = document.getElementById(colorPickerRId)
	let colorPickerG = document.getElementById(colorPickerGId)
	let colorPickerB = document.getElementById(colorPickerBId)

	let colorPickerRText = document.getElementById(colorPickerRTextId)
	let colorPickerGText = document.getElementById(colorPickerGTextId)
	let colorPickerBText = document.getElementById(colorPickerBTextId)

	let colorPickerA = document.getElementById(colorPickerAId)
	let colorPickerAText = document.getElementById(colorPickerATextId)

	let colorPickerH = document.getElementById(colorPickerHId)
	let colorPickerS = document.getElementById(colorPickerSId)
	let colorPickerV = document.getElementById(colorPickerVId)

	let colorPickerHText = document.getElementById(colorPickerHTextId)
	let colorPickerSText = document.getElementById(colorPickerSTextId)
	let colorPickerVText = document.getElementById(colorPickerVTextId)

	let colorPickerVBackground = document.getElementById(colorPickerVBackgroundId)
	let colorPickerSBackground = document.getElementById(colorPickerSBackgroundId)


	colorPickerRText.onchange = colorPickerRText.oninput
	colorPickerGText.onchange = colorPickerGText.oninput
	colorPickerBText.onchange = colorPickerBText.oninput

	colorPickerAText.onchange = colorPickerAText.oninput

	colorPickerHText.onchange = colorPickerHText.oninput
	colorPickerSText.onchange = colorPickerSText.oninput
	colorPickerVText.onchange = colorPickerVText.oninput


	colorPickerValueElement.focus()


	function selectAllInputText(inputElement) {
		inputElement.selectionStart = 0
		inputElement.selectionEnd = inputElement.value.length + 1
	}

	function hsvChanged() {
		let temp = 0

		let savedValue = null
		let selectionStart = 0
		let selectionEnd = 0
		switch(document.activeElement.id) {
			case colorPickerHText.id:
				savedValue = clamp(colorPickerHText.value, 0, 360)
				selectionStart = colorPickerHText.selectionStart
				selectionEnd = colorPickerHText.selectionEnd
				break
			case colorPickerSText.id:
				savedValue = clamp(colorPickerSText.value, 0, 255)
				selectionStart = colorPickerSText.selectionStart
				selectionEnd = colorPickerSText.selectionEnd
				break
			case colorPickerVText.id:
				savedValue = clamp(colorPickerVText.value, 0, 255)
				selectionStart = colorPickerVText.selectionStart
				selectionEnd = colorPickerVText.selectionEnd
				break
		}

		temp = parseInt(colorPickerHText.value)
		if(isNaN(temp)) return
		h = colorPickerH.value = colorPickerHText.value = clamp(temp, 0, 360) / 360

		temp = parseInt(colorPickerSText.value)
		if(isNaN(temp)) return
		s = colorPickerS.value = colorPickerSText.value = clamp(temp, 0, 255) / 100

		temp = parseInt(colorPickerVText.value)
		if(isNaN(temp)) return
		v = colorPickerV.value = colorPickerVText.value = clamp(temp, 0, 255) / 100

		let tempRGB = hsvToRgb(h, s, v)
		for(let i = 0; i < tempRGB.length; i++) {
			tempRGB[i] = leadingString(Math.round(tempRGB[i]).toString(16), 2, '0')
		}

		let tempA = ''
		if(a != 255) tempA = leadingString(clamp(Math.round(parseInt(a)), 0, 255).toString(16), 2, '0')
		tempRGB = tempRGB.join('') + tempA

		colorPickerValueElement.value = readColor(tempRGB)

		updateColorPicker()

		if(savedValue !== null) {
			switch(document.activeElement.id) {
				case colorPickerHText.id:
					colorPickerHText.value = savedValue
					colorPickerHText.selectionStart = selectionStart
					colorPickerHText.selectionEnd = selectionEnd
					break
				case colorPickerSText.id:
					colorPickerSText.value = savedValue
					colorPickerSText.selectionStart = selectionStart
					colorPickerSText.selectionEnd = selectionEnd
					break
				case colorPickerVText.id:
					colorPickerVText.value = savedValue
					colorPickerVText.selectionStart = selectionStart
					colorPickerVText.selectionEnd = selectionEnd
					break
			}
		}
	}

	function rgbChanged() {
		let temp = 0

		let savedValue = null
		let selectionStart = 0
		let selectionEnd = 0
		switch(document.activeElement.id) {
			case colorPickerRText.id:
				savedValue = clamp(colorPickerRText.value, 0, 255)
				selectionStart = colorPickerRText.selectionStart
				selectionEnd = colorPickerRText.selectionEnd
				break
			case colorPickerGText.id:
				savedValue = clamp(colorPickerGText.value, 0, 255)
				selectionStart = colorPickerGText.selectionStart
				selectionEnd = colorPickerGText.selectionEnd
				break
			case colorPickerBText.id:
				savedValue = clamp(colorPickerBText.value, 0, 255)
				selectionStart = colorPickerBText.selectionStart
				selectionEnd = colorPickerBText.selectionEnd
				break
		}

		temp = parseInt(colorPickerRText.value)
		if(isNaN(temp)) return
		r = colorPickerR.value = colorPickerRText.value = clamp(temp, 0, 255)

		temp = parseInt(colorPickerGText.value)
		if(isNaN(temp)) return
		g = colorPickerG.value = colorPickerGText.value = clamp(temp, 0, 255)

		temp = parseInt(colorPickerBText.value)
		if(isNaN(temp)) return
		b = colorPickerB.value = colorPickerBText.value = clamp(temp, 0, 255)


		let tempR = leadingString(clamp(Math.round(parseInt(r)), 0, 255).toString(16), 2, '0')
		let tempG = leadingString(clamp(Math.round(parseInt(g)), 0, 255).toString(16), 2, '0')
		let tempB = leadingString(clamp(Math.round(parseInt(b)), 0, 255).toString(16), 2, '0')

		let tempA = ''
		if(a != 255) tempA = leadingString(clamp(Math.round(parseInt(a)), 0, 255).toString(16), 2, '0')

		colorPickerValueElement.value = readColor(tempR + tempG + tempB + tempA)

		updateColorPicker()

		if(savedValue !== null) {
			switch(document.activeElement.id) {
				case colorPickerRText.id:
					colorPickerRText.value = savedValue
					colorPickerRText.selectionStart = selectionStart
					colorPickerRText.selectionEnd = selectionEnd
					break
				case colorPickerGText.id:
					colorPickerGText.value = savedValue
					colorPickerGText.selectionStart = selectionStart
					colorPickerGText.selectionEnd = selectionEnd
					break
				case colorPickerBText.id:
					colorPickerBText.value = savedValue
					colorPickerBText.selectionStart = selectionStart
					colorPickerBText.selectionEnd = selectionEnd
					break
			}
		}
	}

	function alphaChanged() {
		let temp = parseInt(colorPickerAText.value)
		if(isNaN(temp)) return
		a = colorPickerA.value = colorPickerAText.value = clamp(temp, 0, 255)


		temp = colorPickerValueElement.value = colorPickerValueElement.value.substring(0, 6)
		if(a < 255) {
			temp = temp + leadingString(a.toString(16), 2, '0')
		}

		colorPickerValueElement.value = temp

		updateColorPicker()
	}

	function updateColorPicker() {
		// This function updates the sliders and values on the color picker based on the hex value given at the bottom

		let colorValue = readColor(colorPickerValueElement.value)

		if(allowAlpha !== true) colorValue = colorValue.substring(0, 6)

		colorPickerValueElement.value = colorValue

		r = clamp(Math.round(parseInt(colorValue.substring(0, 2), 16)), 0, 255)
		g = clamp(Math.round(parseInt(colorValue.substring(2, 4), 16)), 0, 255)
		b = clamp(Math.round(parseInt(colorValue.substring(4, 6), 16)), 0, 255)

		if(isNaN(r)) r = 255
		if(isNaN(g)) g = 255
		if(isNaN(b)) b = 255

		hsv = rgbToHsv(r, g, b)
		h = round(hsv[0])
		s = round(hsv[1])
		v = round(hsv[2])

		colorPickerR.value = r
		colorPickerG.value = g
		colorPickerB.value = b

		colorPickerRText.value = r
		colorPickerGText.value = g
		colorPickerBText.value = b

		colorPickerH.value = h
		colorPickerS.value = s
		colorPickerV.value = v

		colorPickerHText.value = h
		colorPickerSText.value = s
		colorPickerVText.value = v

		a = 255
		if(allowAlpha === true) {
			a = clamp(Math.round(parseInt(colorValue.substring(6, 8), 16)), 0, 255)
			if(isNaN(a)) a = 255
			colorPickerA.value = colorPickerAText.value = a
		}

		// Update swatch, field and scrubber
		colorPickerSwatchElement.style.backgroundColor = '#' + colorValue.substring(0, 6)

		colorPickerScrubberElement.style.left = (s - 50).toString() + '%'
		colorPickerScrubberElement.style.top = (-1 * v + 50).toString() + '%'
		colorPickerFieldAlphaElement.style.backgroundColor = '#' + colorValue.substring(0, 6)

		let fieldBackground = rgbToHex(hsvToRgb(h / 360, 1, 1))
		colorPickerFieldColorElement.style.backgroundColor = '#' + fieldBackground

		if(a == 255) {
			colorPickerSwatchElement.style.opacity = 1
			colorPickerFieldAlphaElement.style.opacity = 1
		} else {
			colorPickerSwatchElement.style.opacity = 1 / 255 * a
			colorPickerFieldAlphaElement.style.opacity = 1 / 255 * a
		}

		// Update saturation slider
		colorPickerSBackground.style.backgroundImage = 'linear-gradient(90deg, #' + rgbToHex(hsvToRgb(h / 360, 0, v / 100)) + ' 0%, #' + fieldBackground + ' 100%)'

		// Update value slider
		colorPickerVBackground.style.backgroundColor = '#' + fieldBackground

		if(inputFormElement !== null) {
			inputFormElement.value = colorValue
			try {
				inputFormElement.oninput()
			} catch(err) {
				inputFormElement.onchange()
			}
		}

		if(CSSVar == true) {
			setCSSVar(defaultValue, '#' + colorValue)
		}

		if(putTextElement !== null && putTextElement.hasChildNodes()) {
			clearElement(putTextElement)
			putTextElement.appendChild(createElement(nabLibColorPickerAddColorText(colorValue)))
		}
		
	}

	function clearSelection()
	{
		// Copied from StackOverflow
		if (window.getSelection) {window.getSelection().removeAllRanges();}
		else if (document.selection) {document.selection.empty();}
	}

	function nabLibColorPickerStartDrag(event) {
		if(mouseMoveFunction === null) return // mouseMoveFunction is what determines how this works, if it is null just quit here

		clearSelection()
		window.addEventListener('mouseup', nabLibColorPickerEndDrag)
		window.addEventListener('mousemove', mouseMoveFunction)
		mouseMoveFunction(event)
	}

	function nabLibColorPickerEndDrag(event) {
		nabLibColorPickerEditElement = null

		window.removeEventListener('mouseup', nabLibColorPickerEndDrag)
		window.removeEventListener('mousemove', mouseMoveFunction)
	}

	function nabLibColorPickerMouseMoved(event) {
		let boundingBox = colorPickerDragElement.getBoundingClientRect()

		let xMin = boundingBox.x
		let yMin = boundingBox.y
		let xMax = boundingBox.width + boundingBox.x
		let yMax = boundingBox.height + boundingBox.y

		let xPos = event.clientX - xMin
		let yPos = event.clientY - yMin

		xPos = clamp((xPos / boundingBox.width) * 100, 0, 100)
		yPos = clamp(100 - ((yPos / boundingBox.height) * 100), 0, 100)

		s = colorPickerS.value = colorPickerSText.value = xPos
		v = colorPickerV.value = colorPickerVText.value = yPos

		hsvChanged()
	}

	updateColorPicker()
}

function nabLibColorPickerAddColorText(colorValue) {
	if(!checkValidHexColor(colorValue)) {
		colorValue = getCSSVar(colorValue)
	}
	colorValue = readColor(colorValue)
	let rgb = hexToRgb(colorValue)
	let r = rgb[0]
	let g = rgb[1]
	let b = rgb[2]

	let hsl = rgbToHsl(r, g, b)

	let textColor = '#FFF'
	let textShadowColor = '#000'

	if(hsl[2] >= 0.5) {
		textColor = '#000'
		textShadowColor = '#FFF'
	}

	let textStyle = {
		fontSize : '1.5rem',
		fontFamily : '"nabfonts monospace", monospace',
		color : textColor,
		textShadow : '0.05rem 0rem ' + textShadowColor + ', -0.05rem 0rem ' + textShadowColor + ', 0rem 0.05rem ' + textShadowColor + ', 0rem -0.05rem ' + textShadowColor + ', 0.05rem 0.05rem ' + textShadowColor + ', 0.05rem -0.05rem ' + textShadowColor + ', -0.05rem 0.05rem ' + textShadowColor + ', -0.05rem -0.05rem ' + textShadowColor
	}

	return { elementType : 'span', style : textStyle, text : '#' + colorValue }
}



// -------------------- SUPERTEXT MARKUP --------------------
// -------------------- SUPERTEXT MARKUP --------------------

superTextMarkupData = {
	hideTags : 0,
	maxFontSize : 700,
	minFontSize : 25,
	markup : [
		// Anything in the parameters object will be SuperImposed on the created element. Even elementType is okay to change.
		// 'parameters' are automatically applied styles
		// 'variables' are things the user can set, like URL links and such, inside the declaring tag, like: "[url link='page.php']Link Text Here[/url]"
		// noText : true		means that even if the user put text in the tag, it will be ignored (Useful for things like images)
		// nest : true			means that everything contained within that tag will be a child
		// block : true			means that the button in the editor will get special formatting
		// noClosingTag : true	means that the parser will not require a closing tag on this element. Uses are things like [br] or [hr]
		// noMarkup : true	means that the contents of this tag will not be parsed.		BE AWARE THIS IS BUGGED - If you use it on a nested element, it will terminate along with the parent!!
		// The following are global properties that can be used on any tag:
		//		fg					=	text color
		//		bg					=	background color
		//		font				=	Typeface
		//		block				= 	If the next tag after this is a line break, ignore that line break (Helps with formatting). Also, in the editor this will have a colored border
		//		size				=	Font size (Percent, range from minFontSize to maxFontSize [in percent])
		//		nomarkup			= 	No other tags inside this tag will be parsed
		//		ignoreNomarkup		= 	Even when nomarkup is active, this tag will still apply
		//		ignoreLineBreaks	=	Ignore all line breaks immediately nested inside this element. This option MUST be used with 'nest'


		{ tag : 'l',
							description: 'Lighter text (Alias of "weight=lighter")',
							symbol : { character : 'l', font : 'webhostinghub glyphs' },
							category : { name : 'Formatting', index : 1 },
							nest : true,
							parameters : { style : { fontWeight : 'lighter' } },
		},
		{ tag : 'b',
							description: 'Bolder text (Alias of "weight=bolder")',
							symbol : { character : '', font : 'webhostinghub glyphs' },
							category : { name : 'Formatting', index : 2 },
							nest : true,
							parameters : { style : { fontWeight : 'bolder' } },
		},
		{ tag : 'weight',
							description: 'Specify the weight of the font',
							symbol : { character : '', font : 'webhostinghub glyphs' },
							category : { name : 'Formatting', index : 3 },
							nest : true,
							variables : { fontWeight : 'weight' },
		},
		{ tag : 'i',
							description: 'Italic',
							symbol : { character : '', font : 'webhostinghub glyphs' },
							category : { name : 'Formatting', index : 4 },
							parameters : { style : { fontStyle : 'italic' } },
		},
		{ tag : 'u',
							description: 'Underline',
							symbol : { character : '', font : 'webhostinghub glyphs' },
							category : { name : 'Formatting', index : 5 },
							parameters : { style : { textDecoration : 'underline' } },
		},
		{ tag : 's',
							description: 'Strikethrough',
							symbol : { character : '', font : 'webhostinghub glyphs' },
							category : { name : 'Formatting', index : 6 },
							parameters : { style : { textDecoration : 'line-through' } },
		},
		{ tag : 'size',
							description: 'Font size',
							symbol : { character : '', font : 'webhostinghub glyphs' },
							category : { name : 'Formatting', index : 7 },
		},
		{ tag : 'sup',
							description: 'Superscript',
							symbol : { character : '', font : 'webhostinghub glyphs', color : '33B' },
							category : { name : 'Formatting', index : 8 },
							parameters : { style : { verticalAlign : 'super', fontSize : '0.75em' } },
		},
		{ tag : 'sub',
							description: 'Subscript',
							symbol : { character : '', font : 'webhostinghub glyphs', color : '33B' },
							category : { name : 'Formatting', index : 9 },
							parameters : { style : { verticalAlign : 'sub', fontSize : '0.75em' } },
		},
		{ tag : 'font',
							description: 'Change typeface',
							symbol : { character : '', font : 'webhostinghub glyphs' },
							category : { name : 'Formatting', index : 10 },
		},
		{ tag : 'color',
							description: 'Text/background color',
							symbol : { character : '', font : 'webhostinghub glyphs', color : 'F55' },
							category : { name : 'Formatting', index : 11 },
		},
		{ tag : 'br',
							description: 'Line break',
							symbol : { character : '', font : 'webhostinghub glyphs' },
							noClosingTag : true,
							noText : true,
							ignoreNomarkup : true,
							parameters : { elementType : 'br' },
		},
		{ tag : 'hr',
							description: 'Horizontal Line',
							symbol : { character : '−', font : 'webhostinghub glyphs', color : '55B' },
							noClosingTag : true,
							block : true,
							noText : true,
							category : { name : 'Inserts', index : 2 },
							parameters : { elementType : 'hr' },
							variables : { width : 'width' },
		},
		{ tag : 'url',
							description: 'Hyperlink',
							symbol : { character : '', font : 'webhostinghub glyphs', color : '39B' },
							nest : true,
							category : { name : 'embed', index : 1 },
							variables : { href : 'link' },
							parameters : { elementType : 'a', target : '_blank' },
		},
		{ tag : 'hash',
							description: 'Hash data change',
							symbol : { character : '', font : 'webhostinghub glyphs', color : '39B' },
							nest : true,
							category : { name : 'embed', index : 2 },
							variables : { data : 'data' },
							parameters : { elementType : 'span', style : { cursor : 'pointer', textDecoration : 'underline', color : 'blue' } },
		},
		{ tag : 'img',
							description: 'Image',
							symbol : { character : '⊷', font : 'webhostinghub glyphs', color : '2C2' },
							noText : true,
							noClosingTag : true,
							category : { name : 'embed', index : 3 },
							variables : { src : 'link' },
							parameters : { elementType : 'img' },
		},
		{ tag : 'hbox',
							description: 'Box with horizontally aligned items (No line breaks)',
							symbol : { character : '', font : 'webhostinghub glyphs', color : '607' },
							category : { name : 'grouping', index : 1 },
							nest : true,
							ignoreLineBreaks : true,
							parameters : { elementType : 'div', style : { textAlign : 'center', width : 'fit-content', padding : '0.35em', width : 'auto', display: 'inline-flex', flexDirection : 'row', justifyContent : 'center', alignItems : 'center', gap : '0.25em', borderColor : '#9994', borderStyle : 'solid', borderWidth : '0.05em' } },
		},
		{ tag : 'vbox',
							description: 'Box with vertically aligned items (No line breaks)',
							symbol : { character : '', font : 'webhostinghub glyphs', color : '607' },
							category : { name : 'grouping', index : 2 },
							nest : true,
							ignoreLineBreaks : true,
							parameters : { elementType : 'div', style : { textAlign : 'center', width : 'fit-content', padding : '0.35em', width : 'auto', display: 'inline-flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', gap : '0.25em', borderColor : '#9994', borderStyle : 'solid', borderWidth : '0.05em' } },
		},
		{ tag : 'grid',
							description: 'Box with a grid layout (No line breaks)',
							symbol : { character : '', font : 'webhostinghub glyphs', color : '607' },
							category : { name : 'grouping', index : 3 },
							nest : true,
							ignoreLineBreaks : true,
							parameters : { elementType : 'div', style : { textAlign : 'center', width : 'fit-content', padding : '0.35em', width : 'auto', display: 'inline-grid', gap : '0.5em', border : '0.1em #9994 solid' } },
		},
		{ tag : 'left',
							description: 'Block text and left align',
							symbol : { character : '', font : 'webhostinghub glyphs', color : '829' },
							block : true,
							nest : true,
							category : { name : 'Alignment', index : 1 },
							parameters : { elementType : 'p', style : { width: '100%', textAlign : 'left', marginTop : '0px', marginBottom : '0px' } },
		},
		{ tag : 'center',
							description: 'Block text and center align',
							symbol : { character : '', font : 'webhostinghub glyphs', color : '829' },
							block : true,
							nest : true,
							category : { name : 'Alignment', index : 2 },
							parameters : { elementType : 'p', style : { width: '100%', textAlign : 'center', marginTop : '0px', marginBottom : '0px' } },
		},
		{ tag : 'right',
							description: 'Block text and right align',
							symbol : { character : '', font : 'webhostinghub glyphs', color : '829' },
							block : true,
							nest : true,
							category : { name : 'Alignment', index : 3 },
							parameters : { elementType : 'p', style : { width: '100%', textAlign : 'right', marginTop : '0px', marginBottom : '0px' } },
		},
		{ tag : 'justify',
							description: 'Block text and justify',
							symbol : { character : '', font : 'webhostinghub glyphs', color : '829' },
							block : true,
							nest : true,
							category : { name : 'Alignment', index : 4 },
							parameters : { elementType : 'p', style : { width: '100%', textAlign : 'justify', marginTop : '0px', marginBottom : '0px' } },
		},
		{ tag : 'ol',
							description: 'Ordered list',
							symbol : { character : '', font : 'webhostinghub glyphs' },
							block : true,
							nest : true,
							category : { name : 'Organization', index : 1 },
							parameters : { elementType : 'ol', style : { marginTop : '0', marginBottom : '0' } },
		},
		{ tag : 'ul',
							description: 'Unordered list',
							symbol : { character : '', font : 'webhostinghub glyphs' },
							block : true,
							nest : true,
							category : { name : 'Organization', index : 2 },
							parameters : { elementType : 'ul', style : { marginTop : '0', marginBottom : '0' } },
		},
		{ tag : 'li',
							description: 'List item',
							symbol : { character : '', font : 'webhostinghub glyphs' },
							block : true,
							nest : true,
							category : { name : 'Organization', index : 3 },
							parameters : { elementType : 'li' },
		},
		{ tag : 'quote',
							description: 'Quote block, include markup',
							symbol : { character : '', font : 'webhostinghub glyphs', color : '3B3' },
							block : true,
							nest : true,
							category : { name : 'Quote', index : 1 },
							parameters : { elementType : 'p', style : { textAlign : 'justify', backgroundColor : '#292929', backgroundImage : 'linear-gradient(135deg, #7770 0%, #7770 49%, #7771 48.1%, #7771 51.9%, #7770 52%, #7770 100%)', backgroundRepeat : 'repeat', backgroundPosition: 'center', backgroundSize : '0.25em 0.25em', padding : '0.2em', border : '0.1em inset #393939' } },
		},
		{ tag : 'iquote',
							description: 'Inline quote, include markup',
							symbol : { character : '', font : 'webhostinghub glyphs', color : '3B3' },
							nest : true,
							category : { name : 'Quote', index : 3 },
							parameters : { elementType : 'span', style : { display : 'inline-block',  textAlign : 'justify', backgroundColor : '#292929', backgroundImage : 'linear-gradient(135deg, #7770 0%, #7770 49%, #7771 48.1%, #7771 51.9%, #7770 52%, #7770 100%)', backgroundRepeat : 'repeat', backgroundPosition: 'center', backgroundSize : '0.25em 0.25em', margin : '0.3em', padding : '0em 0.375em 0em 0.375em', lineHeight : '2.1em',  border : '0.1em inset #393939' } },
		},
		{ tag : 'code',
							description: 'Code block, no markup',
							symbol : { character : '', font : 'webhostinghub glyphs', color : 'B44' },
							noMarkup : true,
							block : true,
							nest : true,
							category : { name : 'Quote', index : 2 },
							parameters : { elementType : 'pre', style : { textAlign : 'left', fontFamily : '"nabfonts monospace", monospace', whiteSpace : 'break-spaces', backgroundColor : '#222', backgroundImage : 'linear-gradient(45deg, #7770 0%, #7770 49%, #7771 48.1%, #7771 51.9%, #7770 52%, #7770 100%)', backgroundRepeat : 'repeat', backgroundPosition: 'center', backgroundSize : '0.25em 0.25em', padding : '0.2em', border : '0.1em inset #333' } },
		},
		{ tag : 'icode',
							description: 'Inline code snippet, no markup',
							symbol : { character : '', font : 'webhostinghub glyphs', color : 'B44' },
							noMarkup : true,
							nest : true,
							category : { name : 'Quote', index : 4 },
							parameters : { elementType : 'span', style : { display : 'inline-block', textAlign : 'left', fontFamily : '"nabfonts monospace", monospace', whiteSpace : 'break-spaces', backgroundColor : '#222', backgroundImage : 'linear-gradient(45deg, #7770 0%, #7770 49%, #7771 48.1%, #7771 51.9%, #7770 52%, #7770 100%)', backgroundRepeat : 'repeat', backgroundPosition: 'center', backgroundSize : '0.25em 0.25em', margin : '0.3em', padding : '0em 0.375em 0em 0.375em', lineHeight : '2.1em', border : '0.1em inset #333' } },
		},
		{ tag : 'hide',
							description: 'Hide contents until user shows them',
							symbol : { character : '', font : 'webhostinghub glyphs', color : '228' },
							block : true,
							nest : true,
							category : { name : 'visibility', index : 1 },
							parameters : { elementType : 'div', border : '0.1em inset #0005', borderRadius : '0.5em', padding : '0.5em' },
		},
		{ tag : 'nomarkup',
							description: 'Ignore markup',
							symbol : { character : '', font : 'webhostinghub glyphs', color : 'F00' },
							category : { name : 'meta', index : 2 },
							noMarkup : true
		},
		{ tag : 'youtube',
							description: 'Embed a YouTube video',
							symbol : { character : '', font : 'webhostinghub glyphs', color : 'F00' },
							category : { name : 'embed', index : 4 },
							noClosingTag : true,
							block : true,
							noText : true,
							parameters : { elementType : 'iframe', style : { aspectRatio : '560 / 315', width : 'calc(100% - 0.2em)', border : '0.1em inset #333' }, title : 'YouTube video player', frameborder : '0', allow : 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture', allowfullscreen : 'true' },
							variables : { link : 'link' },
		},
		{ tag : 'soundcloud',
							description: 'Embed a SoundCloud track',
							symbol : { character : '', font : 'webhostinghub glyphs', color : 'F50' },
							category : { name : 'embed', index : 5 },
							noClosingTag : true,
							block : true,
							noText : true,
							parameters : { elementType : 'iframe', style : { minHeight : '300', width : 'calc(100% - 0.2em)', border : '0.1em inset #333' }, title : 'SoundCloud Player', scrolling : 'no', frameborder : '0', allow : 'autoplay;', allowfullscreen : 'true' },
							variables : { link : 'link' },
		},
	],
	smileyFaces : [
		// All 'replacement' values are done in superTextMarkup. The resulting text from this process is destined for that next.
		{ text : ':)',				font : 'webhostinghub glyphs',		color : 'ff0',		character : '',		description : 'Smile' },
		{ text : ';)',				font : 'webhostinghub glyphs',		color : 'ff0',		character : '',		description : 'Wink' },
		{ text : ':D',				font : 'webhostinghub glyphs',		color : 'ff0',		character : '',		description : 'Grin' },
		{ text : 'XD',				font : 'webhostinghub glyphs',		color : 'ff0',		character : '',		description : 'Eyes closed grin' },
		{ text : '>:D',				font : 'webhostinghub glyphs',		color : 'a00',		character : '',		description : 'Evil grin' },
		{ text : ':P',				font : 'webhostinghub glyphs',		color : 'ff0',		character : '',		description : 'Stick tongue out' },
		{ text : ';P',				font : 'webhostinghub glyphs',		color : 'ff0',		character : '',		description : 'Wink with tongue out' },
		{ text : 'XP',				font : 'webhostinghub glyphs',		color : 'ff0',		character : '',		description : 'Eyes closed tongue out' },
		{ text : ':(',				font : 'webhostinghub glyphs',		color : 'bb5',		character : '',		description : 'Frown' },
		{ text : 'X(',				font : 'webhostinghub glyphs',		color : 'bb5',		character : '',		description : 'Eyes closed frown' },
		{ text : 'o.0',				font : 'webhostinghub glyphs',		color : 'ff0',		character : '',		description : 'Surprised or confused' },
		{ text : ':`(',				font : 'webhostinghub glyphs',		color : '3bf',		character : '',		description : 'Crying' },
		{ text : 'zzz',				font : 'webhostinghub glyphs',		color : '9cf',		character : '',		description : 'Sleeping' },
		{ text : '<3',				font : 'webhostinghub glyphs',		color : 'f00',		character : '',		description : 'Heart' },
		{ text : '</3',				font : 'webhostinghub glyphs',		color : 'f00',		character : '',		description : 'Heartbreak' },
		{ text : 'trollface',		font : 'memetica',					color : 'fff',		character : 'T',		size : '175',		description : 'Trollface' },
	],
	instructions : {
		character : '',
		color : '09B',
		font : 'webhostinghub glyphs',
		text : `[center size=125][size size=300]SuperText Markup Help[/size]
SuperText Markup is similar to BBCode, with a few important differences.

Just like BBCode, tags are used to format text. These tags can change the color, size, font, alignment, arrangement, and more.

[hr width=75% fg=f00]

Tags are created by putting brackets around the tag name. For example, to create a [b fg=0bb size=150]s[/b] tag for strikethrough text:
[iquote size=130][b fg=f55 nomarkup][[/b][color fg=0bb]s[/color][b fg=f55 nomarkup]][/b][/iquote]

To terminate the strikethrough formatting, add another tag with a slash in it:
[iquote size=130][b fg=f55 nomarkup][/[/b][color fg=0bb]s[/color][b fg=f55 nomarkup]][/b][/iquote]

When put together:
[hbox][iquote size=130][b fg=f55 nomarkup][[/b][color fg=0bb]s[/color][b fg=f55 nomarkup]][/b][l]Sample Text[/l][b fg=f55 nomarkup][/[/b][color fg=0bb]s[/color][b fg=f55 nomarkup]][/b][/iquote]
Becomes:
[iquote size=130][s]Sample Text[/s][/iquote]
[/hbox]

[hr width=75% fg=0f0]

Similar to BBCode, tags must be ended in the reverse order they are started in (nested).

Unlike BBCode, SuperText Markup features a [iquote size=130][b fg=f55 nomarkup][[/b][color fg=0bb]L[/color][b fg=f55 nomarkup]][/b][/iquote] tag and a [iquote size=130][b fg=f55 nomarkup][[/b][color fg=0bb]weight[/color][b fg=f55 nomarkup]][/b][/iquote] tag, and the [iquote size=130][b fg=f55 nomarkup][[/b][color fg=0bb]b[/color][b fg=f55 nomarkup]][/b][/iquote] tag behaves slightly differently.
The [iquote size=130][b fg=f55 nomarkup][[/b][color fg=0bb]L[/color][b fg=f55 nomarkup]][/b][/iquote] and [iquote size=130][b fg=f55 nomarkup][[/b][color fg=0bb]b[/color][b fg=f55 nomarkup]][/b][/iquote] tags will cause the font weight to become lighter or bolder, respectively, as long as the font being used supports different weights.
[nomarkup](Keep in mind that most fonts only support 'normal' weight [400] and 'bold' weight [700].)[/nomarkup]

The [iquote size=130][b fg=f55 nomarkup][[/b][color fg=0bb]weight[/color][b fg=f55 nomarkup]][/b][/iquote] tag is for manually setting a numeric weight, from 100 to 900. You can also set this value to [color fg=0f0]normal[/color], [color fg=0f0]bold[/color], [color fg=0f0]bolder[/color], or [color fg=0f0]lighter[/color].

[hr width=35]
The [iquote size=130][b fg=f55 nomarkup][[/b][color fg=0bb]URL[/color][b fg=f55 nomarkup]][/b][/iquote] tag is used for hotlinking to other web pages or websites. The URL to go to is given in a [color fg=f55]link[/color] parameter. If you only need to change the page hash, use the [b fg=f55 nomarkup][[/b][color fg=0bb]hash[/color][b fg=f55 nomarkup]][/b] tag (Below).
The [iquote size=130][b fg=f55 nomarkup][[/b][color fg=0bb]hash[/color][b fg=f55 nomarkup]][/b][/iquote] tag is used for changing data in the URL hash. This is useful for linking between pages on Javascript-run websites. The hash data to be changed is given in a [color fg=f55]data[/color] parameter.
[color fg=ff5]MAKE SURE that your input is valid JSON[/color], including double quotes on all variable names and values, or this will not work!

[hr width=35]

The [b fg=F40]hbox[/b], [b fg=F40]vbox[/b] and [b fg=F40]grid[/b] tags can be used to organize and group things in place. Each new line or new tag generates a new element, which is positioned in the grid or box:
[iquote][iquote size=130][nomarkup][grid cols=3 fg=9999]
Test 1
[/nomarkup][nomarkup]Test 2
[/nomarkup][nomarkup]Test 3
[/nomarkup][nomarkup]Test 4
[/nomarkup][nomarkup]Test 5
[/grid][/nomarkup][/iquote][/iquote]

Becomes:
[iquote size=130][grid cols=3 fg=9999]Test 1
Test 2
Test 3
Test 4
Test 5[/grid][/iquote]

All buttons for [b fg=F40]grouping[/b] tags have a [b fg=F40]colored outline[/b] around them as well. They will also suppress all line breaks inside them (Except for those inside a nested tag).

[hr width=75% fg=00f]

Some tags, like [b fg=F55 nomarkup][hr][/b], [b fg=F55 nomarkup][img][/b], and [b fg=F55 nomarkup][youtube][/b], do not need a closing tag.

[hr width=75% fg=ff0]

SuperText also features global options that can be applied to any tag. These include:

[l]
[ul]
[li][b fg=f55]font[/b] (Typeface [sub]Can be the name of a specific font, or a generic CSS font-family. Put the name in quotes if there is a space in it![/sub])[/li]
[li][b fg=f55]weight[/b] (Font weight, valid values are 100 through 900, normal, bold, bolder, and lighter)[/li]
[li][b fg=f55]size[/b] (Font size, given as a percentage)[/li]
[li][b fg=f55]fg[/b] (Foreground color, given in hexadecimal)[/li]
[li][b fg=f55]bg[/b] (Background color, given in hexadecimal)[/li]
[li][b fg=f55]nomarkup[/b] (SuperText will not process any markup inside this tag)[/li]
[/ul][/l]

Hexadecimal colors can be given in the following formats:
[size size=65][b fg=f55]R = Red[/b], [b fg=5f5]G = Green[/b], [b fg=55f]B = Blue[/b], [b fg=444]A = Alpha[/b], [b fg=888]L = Luminosity[/b]
(Alpha values cause problems and thus are ignored on everything but borders and lines)[/size]
[l]
[ul]
[li]1 digit: [b fg=888]L[/b][/li]
[li]2 digits: [b fg=888]L[/b][b fg=444]A[/b][/li]
[li]3 digits: [b fg=f55]R[/b][b fg=5f5]G[/b][b fg=55f]B[/b][/li]
[li]4 digits: [b fg=f55]R[/b][b fg=5f5]G[/b][b fg=55f]B[/b][b fg=444]A[/b][/li]
[li]6 digits: [b fg=f55]RR[/b][b fg=5f5]GG[/b][b fg=55f]BB[/b][/li]
[li]8 digits: [b fg=f55]RR[/b][b fg=5f5]GG[/b][b fg=55f]BB[/b][b fg=444]AA[/b][/li]
[/ul]
[/l]

So, for example:
[iquote font='nabfonts monospace' size=130][nomarkup][b font='nabfonts monospace' [/nomarkup][color fg=c44]fg=2d2 bg=22c[/color][nomarkup]]Sam[i [/nomarkup][color fg=c44]fg=e44[/color][nomarkup] nomarkup]pl[u]e T[/u]e[/i]xt[/b][/nomarkup][/iquote]
Becomes:
[iquote size=130][b font='nabfonts monospace' fg=2d2 bg=22c]Sam[i fg=e44 nomarkup]pl[u]e T[/u]e[/i]xt[/b][/iquote]

[hr width=75% fg=0ff]

[color fg=c44 nomarkup][hide][/color] tags can be used to hide a portion of a message until a button is clicked:

[hide]Surprise![/hide]

You can also change the text on the button, like this:

[iquote size=130][nomarkup][hide [/nomarkup][nomarkup fg=c44]text='Zeeky Boogy Doog!'[/nomarkup][nomarkup]]BOOM[/hide][/nomarkup][/iquote]

[hide text='Zeeky Boogy Doog!']BOOM[/hide]

[hr width=75% fg=a0f]

Finally, all tags and global parameters in SuperText Markup are case-insensitive.

[hr width=75% fg=777]

Happy formatting!

[/center]`,
	}
}

// Parse the data
superTextMarkupData.categories = []
for(let i = 0; i < superTextMarkupData.markup.length; i++) {
	// Tags really should be forced to lower case for efficiency later. They're case-insensitive anyways
	superTextMarkupData.markup[i].tag = superTextMarkupData.markup[i].tag.toLowerCase()

	if(superTextMarkupData.markup[i].hasOwnProperty('category') &&
		superTextMarkupData.markup[i].category.hasOwnProperty('name') &&
		superTextMarkupData.markup[i].category.hasOwnProperty('index')
	) {
		let categoryName = superTextMarkupData.markup[i].category.name.toLowerCase()
		if(!superTextMarkupData.categories.hasOwnProperty(categoryName)) superTextMarkupData.categories[categoryName] = []
		if(typeof(superTextMarkupData.categories[categoryName][superTextMarkupData.markup[i].category.index]) !== 'undefined') {
			superTextMarkupData.categories[categoryName].splice(superTextMarkupData.markup[i].category.index, 0, superTextMarkupData.markup[i])
		} else {
			superTextMarkupData.categories[categoryName][superTextMarkupData.markup[i].category.index] = superTextMarkupData.markup[i]
		}
	}
}

// Add the smiley face button (The splice position determines the button order where it appears)
if(!superTextMarkupData.categories.hasOwnProperty('inserts')) superTextMarkupData.categories.inserts = []
superTextMarkupData.categories.inserts.splice(0, 0, { tag : 'smiley', description : 'Add a smiley face', noClosingTag : true, symbol : { character : superTextMarkupData.smileyFaces[0].character, textShadow : true, font : superTextMarkupData.smileyFaces[0].font, color : superTextMarkupData.smileyFaces[0].color } })
if(!superTextMarkupData.categories.hasOwnProperty('meta')) superTextMarkupData.categories.meta = []
superTextMarkupData.categories.meta.push({ tag : 'cleanup', description : 'Remove tags from selection', symbol : { character : '', font : superTextMarkupData.instructions.font, color : '444' } })
superTextMarkupData.categories.meta.push({ tag : 'help', description : 'Help', symbol : { character : superTextMarkupData.instructions.character, font : superTextMarkupData.instructions.font, color : superTextMarkupData.instructions.color } })

// Remove any rogue entries in the categories...
for(category in superTextMarkupData.categories) {
	let categoryEntries = []
	for(let i = 0; i < superTextMarkupData.categories[category].length; i++) {
		if(typeof(superTextMarkupData.categories[category][i]) === 'undefined') {
			superTextMarkupData.categories[category].splice(i, 1)
			i--
		}
	}
}


// This array *MUST* be sorted and then reversed, or tags can get incorrectly matched
// Also this must happen AFTER the parsing step above, or the category order will be messed up
superTextMarkupData.markup.sort((a, b)=>{
	if (a.tag < b.tag) return 1
	if (a.tag > b.tag) return -1
	return 0
})

/*
// Automatically add all block tags to the help screen
superTextMarkupData.instructions.text = superTextMarkupData.instructions.text.split(':_-ADDBLOCKTAGSHERE-_:')
for(let i = superTextMarkupData.markup.length - 1; i >= 0; i--) {
	if(!superTextMarkupData.markup[i].hasOwnProperty('block') || superTextMarkupData.markup[i].block !== true) continue
	superTextMarkupData.instructions.text.splice(superTextMarkupData.instructions.text.length - 1, 0, (superTextMarkupData.instructions.text.length == 2 ? '' : ', ') + '[b fg=f55 nomarkup][[/b][b fg=0bb nomarkup]' + superTextMarkupData.markup[i].tag + '[/b][b fg=f55 nomarkup]][/b]')
}
superTextMarkupData.instructions.text[superTextMarkupData.instructions.text.length - 2] = superTextMarkupData.instructions.text[superTextMarkupData.instructions.text.length - 2].replace(', ', ', and ')
superTextMarkupData.instructions.text = superTextMarkupData.instructions.text.join('')

// Automatically add all nested tags to the help screen
superTextMarkupData.instructions.text = superTextMarkupData.instructions.text.split(':_-ADDNESTEDTAGSHERE-_:')
for(let i = superTextMarkupData.markup.length - 1; i >= 0; i--) {
	if(!superTextMarkupData.markup[i].hasOwnProperty('nest') || superTextMarkupData.markup[i].nest !== true) continue
	superTextMarkupData.instructions.text.splice(superTextMarkupData.instructions.text.length - 1, 0, (superTextMarkupData.instructions.text.length == 2 ? '' : ', ') + '[b fg=f55 nomarkup][[/b][b fg=0bb nomarkup]' + superTextMarkupData.markup[i].tag + '[/b][b fg=f55 nomarkup]][/b]')
}
superTextMarkupData.instructions.text[superTextMarkupData.instructions.text.length - 2] = superTextMarkupData.instructions.text[superTextMarkupData.instructions.text.length - 2].replace(', ', ', and ')
superTextMarkupData.instructions.text = superTextMarkupData.instructions.text.join('')
*/

function superTextMarkupGenerateElement(preprocessorInfo, baseFontSize, tagBlacklist = []) {
	let output = { elementType : 'span', style : {} }
	if(preprocessorInfo.hasOwnProperty('text')) output.text = preprocessorInfo.text
	let noMarkup = false

	let parameters = []
	if(preprocessorInfo.hasOwnProperty('markup')) {
		parameters = preprocessorInfo.markup
	}

	let spoilerText = 'Show/Hide'
	let hasChildren = false
	let hideTag = false
	let variables = []

	if(parameters.length > 0 && !(parameters[parameters.length - 1].hasOwnProperty('doNotRender') && parameters[parameters.length - 1].doNotRender == true)) {
		if(parameters[parameters.length - 1].parameters.hasOwnProperty('nest') &&
		parameters[parameters.length - 1].parameters.nest == true &&
		parameters[parameters.length - 1].parameters.tag == 'hide') {
			hideTag = true
		}
	}

let fontWeightDynamic = false

	for(i = 0; i < parameters.length; i++) {
		spoilerText = 'Show/Hide'	// This has to be here to force the spoiler text to reset every iteration, otherwise it carries over

		if(parameters[i].parameters.hasOwnProperty('noText') && parameters[i].parameters.noText === true) {
			output.text = ''
		}

		if(parameters[i].hasOwnProperty('variables')) {
			variables = parameters[i].variables
		} else {
			variables = []
		}

		if(noMarkup == false) {

			if(parameters[i].parameters.hasOwnProperty('smileyFace') && parameters[i].parameters.smileyFace === true) {
				hasChildren = true
				output.text = ''
				if(!output.hasOwnProperty('children')) output.children = []
				let smiley = { elementType : 'span', style : { fontFamily : parameters[i].parameters.symbol.font, color : '#' + readColor(parameters[i].parameters.symbol.color), textDecoration : 'none', fontWeight : 'normal', fontStyle : 'normal' }, text : parameters[i].parameters.symbol.character }
				if(parameters[i].parameters.symbol.hasOwnProperty('size')) smiley.style.fontSize = (parameters[i].parameters.symbol.size / 100).toString() + 'em'
				output.children.push(smiley)
				break
			}

			if(!(parameters[i].hasOwnProperty('doNotRender')) || parameters[i].doNotRender !== true) {
				if(parameters[i].parameters.hasOwnProperty('parameters')) {
					for(parameter in parameters[i].parameters.parameters) {
						if(parameter.toLowerCase() == 'style') {
							// Apply styles here without overwriting anything
							for(styleKey in parameters[i].parameters.parameters.style) {
/*
if(styleKey == 'fontWeight') {
	let check = parameters[i].parameters.parameters.style[styleKey].toLowerCase()
	if(check == 'bolder' || check == 'lighter') {
		fontWeightDynamic = true
		output.style[styleKey] = parameters[i].parameters.parameters.style[styleKey]
	} else {
		fontWeightDynamic = false
	}
	if(fontWeightDynamic == true) {
		console.log('SKIPPING FONT WEIGHT: ' + styleKey, i)
		continue
	}
}
*/
								if(output.style.hasOwnProperty(styleKey)) {
//									output.style[styleKey] += ' ' + parameters[i].parameters.parameters.style[styleKey]		// I have no idea what property this was initially intended for...
									output.style[styleKey] = parameters[i].parameters.parameters.style[styleKey]
								} else {
									output.style[styleKey] = parameters[i].parameters.parameters.style[styleKey]
								}
							}
						} else {
							output[parameter] = parameters[i].parameters.parameters[parameter]
						}
					}
				}
			}


			if(parameters[i].parameters.hasOwnProperty('variables')) {
				for(variable in parameters[i].parameters.variables) {
					if(variables.hasOwnProperty(parameters[i].parameters.variables[variable])) {
						if(parameters[i].parameters.tag == 'youtube' && variable == 'link') {
							let tempVideoSource = variables[parameters[i].parameters.variables[variable]].split('/').pop().split('?', 2).pop().substring(2)
							output.src = 'https://www.youtube.com/embed/' + tempVideoSource.split('&', 1).shift()
							let videoVariables = tempVideoSource.split('&')
							videoVariables.shift()
							let parsedVariables = []
							let allowedVariables = [ 'start', 'end' ]	// THESE MUST BE LOWERCASE
							for(let c = 0; c < allowedVariables.length; c++) {
								for(let v = videoVariables.length - 1; v >= 0 ; v--) {
									if(videoVariables[v].substring(0, 2).toLowerCase() == 't=') {
										// Make sure to change 't' to 'start' so it works!
										videoVariables[v] = 'star' + videoVariables[v]
									}
									if(videoVariables[v].substring(0, allowedVariables[c].length + 1).toLowerCase() == allowedVariables[c] + '=') {
										let variableValue = videoVariables[v].split('=').pop()
										if(allowedVariables[c] == 'start' || allowedVariables[c] == 'end') {
											//Parse the time value
											let tempTimeValue = variableValue.toLowerCase()
											let h = 0
											let m = 0
											let s = 0
											if(tempTimeValue.length > 0 && tempTimeValue.includes('h')) {
												tempTimeValue = tempTimeValue.split('h')
												h = parseInt(tempTimeValue.shift())
												tempTimeValue = tempTimeValue[0]
											}
											if(tempTimeValue.length > 0 && tempTimeValue.includes('m')) {
												tempTimeValue = tempTimeValue.split('m')
												m = parseInt(tempTimeValue.shift())
												tempTimeValue = tempTimeValue[0]
											}
											if(tempTimeValue.length > 0) {
												if(tempTimeValue.includes('s')) {
													tempTimeValue = tempTimeValue.split('s')
													s = parseInt(tempTimeValue.shift())
													tempTimeValue = tempTimeValue[0]
												} else {
													s = parseInt(tempTimeValue)
												}
											}
											if(isNaN(h) || isNaN(m) || isNaN(s)) {
												printWarning('Invalid YouTube video time: ' + variableValue)
												break
											}
											variableValue = ((h * 3600) + (m * 60) + s).toString()
										}
										parsedVariables.push(allowedVariables[c] + '=' + (variableValue))
									}
								}
							}
							if(parsedVariables.length > 0) output.src = output.src + '?' + parsedVariables.join('&')
							continue
						}
						if(parameters[i].parameters.tag == 'soundcloud' && variable == 'link') {
							let link = variables[parameters[i].parameters.variables[variable]].toLowerCase()	// FIXME: Eventually this may not work...
							link = link.split('/')
							let track = link.pop()
							let author = link.pop()
							output.src = 'https://w.soundcloud.com/player/?url=https://soundcloud.com/' + author + '/' + track
							continue
						}
						if(parameters[i].parameters.tag == 'hash' && variable == 'data') {
							let hashData = variables[parameters[i].parameters.variables[variable]]
							try {
								hashData = JSON.parse(hashData)
								let titleText = ['#']
								for(key in hashData) {
									titleText.push(key + ' = ' + hashData[key] + ';')
								}
								output.title = titleText.join(' ')
								output.onclick = ()=>{
									setHashData(hashData)
								}
							} catch {
								// Error parsing the JSON object! Get the user's attention by removing the link's visibility.
								output.style.textDecoration = ''
								output.style.cursor = 'auto'
								output.style.color = 'inherit'
							}
							continue
						}
						output[variable] = variables[parameters[i].parameters.variables[variable]]
						if(parameters[i].parameters.tag == 'hr' && variable == 'width') {
							output[variable] = clamp(output[variable], 1, 100) + '%'
						}
					}
				}
			}


			// Handle global options here, like colors and fonts, since they can apply to any tag
			for(key in variables) {
				let temp = key.toLowerCase()
				switch(temp) {
					case 'text':
						if(hideTag == true && variables[key].trim() != '') spoilerText = variables[key]
						break

					case 'nomarkup':
						if(tagBlacklist.includes('nomarkup')) continue
						if(variables[key].toLowerCase() == 'false') break
						noMarkup = true
						break

					case 'cols':
					case 'columns':
						if(tagBlacklist.includes('grid')) continue
						if(parameters[i].parameters.tag != 'grid') continue
						output.style.gridTemplateColumns = 'repeat(' + variables[key] + ', 1fr)'
						break

					case 'weight':
						if(tagBlacklist.includes('weight')) continue
/*
let check = variables[key].toLowerCase()
if(check == 'bolder' || check == 'lighter') {
	fontWeightDynamic = true
	output.style.fontWeight = variables[key]
} else {
	fontWeightDynamic = false
}
if(fontWeightDynamic == true) {
	console.log('SKIPPING FONT WEIGHT: ' + styleKey, i)
	continue
}
*/
						if(typeof(variables[key]) === 'string' && isNaN(variables[key])) {
							let tempWeight = variables[key].toLowerCase()
							if(tempWeight == 'normal' || tempWeight == 'bold' || tempWeight == 'bolder' || tempWeight == 'lighter') {
								output.style.fontWeight = variables[key]
							} else {
								continue
							}
						} else {
							output.style.fontWeight = parseInt(clamp(variables[key], 100, 900) / 100) * 100
						}
						break

					case 'fg':
					case 'color':
					case 'fgcolor':
						if(tagBlacklist.includes('color')) continue
						if(parameters[i].parameters.tag == 'hr' || parameters[i].parameters.tag == 'vbox' || parameters[i].parameters.tag == 'hbox' || parameters[i].parameters.tag == 'grid') {
							temp = 'borderColor'
							let tempColor = readColor(variables[key]).substring(0, 8)
							output.style[temp] = '#' + tempColor + ' ' + '#' + tempColor + ' ' + '#' + tempColor + ' ' + '#' + tempColor	// Allow alphas on border colors
							break
						}
						temp = 'color'
						output.style[temp] = '#' + readColor(variables[key]).substring(0, 6)	// Use substring to cut off any alpha values from the end. Stuff breaks when alpha is used
						break

					case 'bg':
					case 'bgcolor':
					case 'highlight':
						if(tagBlacklist.includes('color')) continue
						temp = 'backgroundColor'
						output.style[temp] = '#' + readColor(variables[key]).substring(0, 6)	// Use substring to cut off any alpha values from the end. Stuff breaks when alpha is used
						break

					case 'font':
					case 'fontfamily':
					case 'font-family':
						if(tagBlacklist.includes('font')) continue

						let newFont = variables[key].split(',')
						for(let h = 0; h < newFont.length; h++) {
							newFont[h] = newFont[h].trim()

							if((newFont[h].startsWith("'") && newFont[h].endsWith("'")) || (newFont[h].startsWith('"') && newFont[h].endsWith('"'))) {
								// If the font is quoted with single or double quotes, remove them. We will not be needing them
								newFont[h] = newFont[h].substring(1, newFont[h].length - 1)
							}

							newFont[h] = newFont[h].toLowerCase()
							if(typeof(customFonts) !== 'undefined') {
								switch(newFont[h]) {
									case 'adobe blank':
										// Prevent users from activating this
										newFont[h] = 'nabfonts sans-serif'
										break
									case 'serif':
									case 'sans-serif':
									case 'cursive':
									case 'fantasy':
									case 'monospace':
										if(typeof(nabFontsLibPresent) !== 'undefined' && nabFontsLibPresent == true) newFont[h] = 'nabfonts ' + newFont[h] + ', ' + newFont[h]
										break
									default:
										break
								}

								if(getFontData(newFont[h]) === false) {
									newFont.splice(h, 1)
									h--
									continue
								}
							}
							if(newFont[h] == '') {
								newFont.splice(h, 1)
								h--
								continue
							}
						}

						if(newFont.length > 0) output.style.fontFamily = "'" + newFont.join('\', \'') + "'"
						break

					case 'size':
						if(tagBlacklist.includes('size')) continue
					case 'fontsize':
						if((parameters[i].hasOwnProperty('doNotRender')) && parameters[i].doNotRender === true) break	// If this is a nested tag, DO NOT apply a fontSize - it is already applied!
						temp = 'fontSize'
						if(typeof(baseFontSize) === 'number') {
							output.style[temp] = 'min(calc(' + parseInt(superTextMarkupData.maxFontSize / 100) + 'rem * ' + baseFontSize + '), ' + ((clamp(parseInt(variables[key].replace(/\D/g, '')), superTextMarkupData.minFontSize, superTextMarkupData.maxFontSize) / 100)).toString() + 'rem)'	// This HAS to use rem, not em, or nested sizes will break while interacting with other tags
						} else {
							output.style[temp] = 'min(' + parseInt(superTextMarkupData.maxFontSize / 100) + 'rem, ' + ((clamp(parseInt(variables[key].replace(/\D/g, '')), superTextMarkupData.minFontSize, superTextMarkupData.maxFontSize) / 100)).toString() + 'rem)'	// This HAS to use rem, not em, or nested sizes will break while interacting with other tags
						}
						break
				}
			}
		}
		if(parameters[i].parameters.hasOwnProperty('nest') && parameters[i].parameters.nest == true) {
			parameters[i].doNotRender = true
		}
	}

	if(preprocessorInfo.hasOwnProperty('children')) {
		output.children = []
		for(let i = 0; i < preprocessorInfo.children.length; i++) {
			let tempChild = superTextMarkupGenerateElement(preprocessorInfo.children[i], baseFontSize, tagBlacklist)
			if(tempChild !== null) {
				hasChildren = true
				output.children.push(tempChild)
			}
		}
	}

	if(output.elementType == 'span' && output.text == '' && hasChildren == false) {
		// Empty tag. Skip it.
		return null
	}

	if(hideTag == true) {
		let spoilerButtonID = 'superTextMarkuphideTag' + superTextMarkupData.hideTags++
		let spoilerDivID = spoilerButtonID + 'div'
		output.id = spoilerDivID
		let tempStyle = Object.assign(output.style)
		output.style = { display : 'none', minHeight : '0.5em' }
		output = { elementType : 'div', children : [
			{ elementType : 'button', id : spoilerButtonID, className : 'superTextMarkupButton', style : { fontFamily : '\'nabfonts monospace\', monospace', fontWeight : 'bold', fontSize : '0.75em', borderRadius : '0.35em', padding : '0.1em 0.5em 0.1em 0.5em', userSelect : 'none', cursor : 'pointer' }, text : spoilerText, onclick : ()=>{ let temp = document.getElementById(spoilerDivID); if(temp.style.display != 'none') { temp.style.display = 'none' } else { temp.style.display = 'block' } } },
			{ elementType : 'br' },
			{ elementType : 'div', style : { marginTop : '0.25em', padding : '0.25em', border : '0.2em solid #000', backgroundColor : '#0002', overflow : 'auto' }, children : [ output ] },
		]}
	}

	return output
}

function superTextMarkupStripTagsFromText(inputText) {
	let output = []

	let loc = 0
	let prevLoc = 0
	let i = 0
	for(i; i < inputText.length; i++) {
		loc = inputText.indexOf('[', i)
		if(loc < 0) break
		let result = superTextMarkupProcessTagInfo(loc, inputText, [], [], false, true)
		if(result === false) {
			continue	// No tag here. Keep going
		}

		if(result.tagInfo.tag == 'br') {
			inputText = inputText.substring(0, loc) + "\n" + inputText.substring(result.endLoc + 1, inputText.length)
			i = loc
			continue
		}

		output.push(inputText.substring(prevLoc, loc))
		loc = i = result.endLoc
		prevLoc = loc + 1
	}

	output.push(inputText.substring(prevLoc, inputText.length))	// Get the remaining text

	i = 0
	for(i; i < output.length; i++) {
		if(output[i] == '') {
			output.splice(i, 1)
			i--
		}
	}

	return output.join('')
}

function superTextMarkupProcessTagInfo(startLoc, inputText, tagBlacklist = [], activeMarkups = [], noMarkup = false, addSmilies = true) {
	// startLoc must be the location of the opening '['

	if(activeMarkups.length < 1) noMarkup = false	// Force this if the markup array is empty

	let loc = startLoc + 1	// Move past the opening bracket
	while(loc < inputText.length && inputText[loc] == ' ' ) {
		loc++
	}

	if(inputText[loc] == '/') {
		// Closing tag
		loc++
		let endLoc = inputText.indexOf(']', loc)
		let tagName = inputText.substring(loc, endLoc).trim().toLowerCase()

		let tagInfo = superTextMarkupGetTagData(tagName)
		if(tagInfo == false) return false
		if(tagInfo.hasOwnProperty('noClosingTag') && tagInfo.noClosingTag == true) return false
		if(noMarkup) {
			if(tagName != activeMarkups[activeMarkups.length - 1].tag) {
				return false
			}
		}
		if(tagBlacklist.includes(tagName)) return false
		return { openingTag : false, endLoc : endLoc, tagInfo : { tag : tagName, parameters : tagInfo } }
	}

	let parameters = []
	let currentParam = ''
	let quoteNum = 0	// 0 == no quotes, 1 == single quotes, 2 == double quotes
	while(loc < inputText.length) {
		let temp = inputText[loc]
		if(temp == '\\' && loc + 1 < inputText.length) {
			// Allow escaped characters - spaces, quotes, double quotes, etc
			if(	inputText[loc + 1] == "'" &&
				inputText[loc + 1] == '"' &&
				inputText[loc + 1] == ' '
			) {
				currentParam = currentParam + temp
				loc += temp.length
				continue
			}
		}
		if(quoteNum == 1) {
			if(temp == "'") quoteNum = 0
		} else if(quoteNum == 2) {
			if(temp == '"') quoteNum = 0
		} else if(quoteNum < 1) {
			if(temp == "'") {
				quoteNum = 1
			} else if(temp == '"') {
				quoteNum = 2
			} else if(temp == ' ') {
				// New parameter!
				parameters.push(currentParam)
				currentParam = ''
				temp = ''
				loc++	// Force to go past the space
				continue
			} else if(temp == ']') {
				parameters.push(currentParam)
				break
			}
		}
		currentParam = currentParam + temp
		loc += temp.length
	}

	if(loc >= inputText.length) {
		// Malformed code! Must terminate.
		return false
	}

	let tagName = parameters.shift().toLowerCase()
	if(tagBlacklist.includes(tagName)) return false
	let tagData = superTextMarkupGetTagData(tagName)
	if(tagData === false && addSmilies === false) {
		// Did not match a tag!
		return false
	}

	if(noMarkup) {
		if(!tagData.hasOwnProperty('ignoreNomarkup') || tagData.ignoreNomarkup == false) return false
	}

	if(tagData === false) {
		tagData = superTextMarkupGetSmileyData(tagName)
		if(tagData === false) return false	// No smiley, no tag. Terminate.
		tagData = Object.assign(tagData)
		return { openingTag : true, endLoc : loc, tagInfo : { tag : tagName, parameters : { smileyFace : true, noClosingTag : true, symbol : tagData }, variables : {} } }
	}

	tagData = Object.assign(tagData)

	let outputVariables = {}
	for(let i = 0; i < parameters.length; i++) {
		let paramLoc = 0
		let paramKey = ''
		let paramValue = ''

		let j = 0
		for(j = 0; j < parameters[i].length; j++){
			if(parameters[i][j] == '=') break
		}

		paramKey = parameters[i].substring(0, j).toLowerCase()
		if(paramKey == '') continue
		paramValue = parameters[i].substring(j + 1)

		let quote = ''
		if(paramValue[0] == '"' || paramValue[0] == "'") {
			quote = paramValue[0]
			paramValue = paramValue.substring(1)
		}

		j = paramValue.length
		if(paramValue[j - 1] == quote) {
			if((j > 2 && paramValue[j - 2] == '\\')) {
				paramValue = paramValue.substring(0, j - 2)
			} else {
				paramValue = paramValue.substring(0, j - 1)
			}
		}

		outputVariables[paramKey] = paramValue
	}

	if(loc < 0) loc = inputText.length

	return { openingTag : true, endLoc : loc, tagInfo : { tag : tagName, parameters : tagData, variables : outputVariables } }
}

function superTextMarkupGetTagData(tag) {
	tag = tag.toLowerCase()
	for(let i = 0; i < superTextMarkupData.markup.length; i++) {
		if(tag == superTextMarkupData.markup[i].tag) return superTextMarkupData.markup[i]
	}
	return false
}

function superTextMarkupGetSmileyData(tag) {
	for(let i = 0; i < superTextMarkupData.smileyFaces.length; i++) {
		// DO NOT CHANGE THE LOWER CASE CHECK HERE. It breaks things. I know it's inefficient, but too bad.
		if(tag == superTextMarkupData.smileyFaces[i].text.toLowerCase()) return superTextMarkupData.smileyFaces[i]
	}
	return false
}

function superTextConvertWhitelistToBlacklist(whiteList) {
	// This function is useful if you want to use a whitelist for your tags, rather than a blacklist
	let output = []
	for(let i = 0; i < whiteList.length; i++) {
		whiteList[i] = whiteList[i].toLowerCase()
	}

	for(let i = 0; i < superTextMarkupData.markup.length; i++) {
		if(!whiteList.includes(superTextMarkupData.markup[i].tag)) output.push(superTextMarkupData.markup[i].tag)
	}

	return output
}

function superTextMarkup(inputText, tagBlacklist = [], defaultFont = 'nabfonts sans-serif', defaultFontSize = 1.5, addSmilies = true) {
	// This function takes text as input, and returns an array of objects ready to be rendered by createElement()
	// To render the output, apply it as a child to another element, and call createElement() on it, like this:
	//			createElement({ elementType : 'span', children : superTextMarkup(inputText) })

	// Since this is the parent element of the markup, force the correct font and size
	let parentStyle = { textAlign : 'justify' }
	if(defaultFont !== '' && defaultFont !== null && defaultFont !== false) parentStyle.fontFamily = defaultFont
	if(defaultFontSize !== null && defaultFontSize !== false && defaultFontSize > 0) {
		parentStyle.fontSize = defaultFontSize + 'rem'
	} else {
		defaultFontSize = 1		// No font size desired, so we need to set the multiplier to 1!
	}
	if(!Array.isArray(tagBlacklist)) tagBlacklist = []

	return [ { elementType : 'span', style : parentStyle, children : superTextMarkupGenerateElements(inputText, defaultFontSize, tagBlacklist, addSmilies) } ]
}

function superTextMarkupGenerateElements(inputText, defaultFontSize, tagBlacklist = [], addSmilies = true, loc = 0, activeMarkups = [], nomarkup = false, recursions = 0, ignoreLineBreaks = false) {
	let ignoreNextLineBreak = false

	if(typeof(inputText) === 'undefined') inputText = ''

	let preprocessor = [{ markup : activeMarkups.slice(0), startPoint : loc }]

	if(recursions === 0) {
		for(let i = 0; i < tagBlacklist.length; i++) {
			tagBlacklist[i] = tagBlacklist[i].toLowerCase()
		}
		tagBlacklist.sort()
		if(typeof(customFonts) === 'undefined') addSmilies = false	// Disable smilies if there are no custom fonts
		inputText = inputText.replace(new RegExp("\n", 'g'), '[br]')		// Change line breaks to the correct formatting
	} else {
		ignoreNextLineBreak = true	// When starting a nested tag, ignore the first line break. Helps with formatting the input text
	}

	let terminate = false
	for(loc; terminate == false && loc >= 0 && loc < inputText.length; loc++) {
		loc = inputText.indexOf('[', loc)
		if(loc < 0) break
		let result = superTextMarkupProcessTagInfo(loc, inputText, tagBlacklist, activeMarkups, nomarkup, addSmilies)

		if(result === false) {
			continue	// No tag here. Keep going
		}

		if(preprocessor.length > 0) preprocessor[preprocessor.length - 1].endPoint = loc

		if(result.openingTag == true) {

// **************************************************************** OPENING TAGS ****************************************************************

			loc = result.endLoc


			if(ignoreLineBreaks == true && result.tagInfo.tag == 'br') {
				preprocessor.push({ markup : activeMarkups.slice(0), startPoint : loc + 1 })
				continue
			}

			if(ignoreNextLineBreak == true && result.tagInfo.tag == 'br' && preprocessor.length > 0 && preprocessor[preprocessor.length - 1].startPoint == preprocessor[preprocessor.length - 1].endPoint) {
				ignoreNextLineBreak = false
				preprocessor.push({ markup : activeMarkups.slice(0), startPoint : loc + 1 })
				continue
			}
			ignoreNextLineBreak = false
			activeMarkups.push({ tag : result.tagInfo.tag, parameters : result.tagInfo.parameters, variables : result.tagInfo.variables })

			preprocessor.push({ markup : activeMarkups.slice(0), startPoint : loc + 1 })

			if((result.tagInfo.parameters.hasOwnProperty('noMarkup') && result.tagInfo.parameters.noMarkup === true) || (result.tagInfo.variables.hasOwnProperty('nomarkup') && result.tagInfo.variables.nomarkup.toLowerCase() != 'false')) {
				tagData = result.tagInfo
				nomarkup = true
			}

			if(result.tagInfo.parameters.hasOwnProperty('block') && result.tagInfo.parameters.block == true) {
				ignoreNextLineBreak = true
			}

			if(result.tagInfo.parameters.hasOwnProperty('noClosingTag') && result.tagInfo.parameters.noClosingTag === true) {
				preprocessor[preprocessor.length - 1].endPoint = loc + 1
				activeMarkups.pop()
				preprocessor.push({ markup : activeMarkups.slice(0), startPoint : loc + 1 })
				continue
			}

			if(result.tagInfo.parameters.hasOwnProperty('nest') && result.tagInfo.parameters.nest === true) {
				let ignoreLineBreaksOnChildren = false
				if(result.tagInfo.parameters.hasOwnProperty('ignoreLineBreaks') && result.tagInfo.parameters.ignoreLineBreaks === true) {
					ignoreLineBreaksOnChildren = true
				}
// This old line was what allowed improper nesting of tags. It was disabled because [b], [l] and [weight weight=bolder, weight=lighter] do not work correctly with this active.
//				preprocessor[preprocessor.length - 1].children = superTextMarkupGenerateElements(inputText, defaultFontSize, tagBlacklist, addSmilies, loc + 1, activeMarkups, nomarkup, recursions + 1, ignoreLineBreaksOnChildren)
				preprocessor[preprocessor.length - 1].children = superTextMarkupGenerateElements(inputText, defaultFontSize, tagBlacklist, addSmilies, loc + 1, [activeMarkups.pop()], nomarkup, recursions + 1, ignoreLineBreaksOnChildren)
				nomarkup = false
				let nestedChildren = preprocessor[preprocessor.length - 1].children

				loc = nestedChildren[0].endPoint	// This is forced back up for us from the recursion of this function

				if(loc <= preprocessor[preprocessor.length - 1].startPoint || loc >= inputText.length) {
					// If we went backwards or stayed the same, then there's a malformed tag in the nested material and we likely went past the end. Terminate.
					loc = inputText.length
				} else {
					preprocessor[preprocessor.length - 1].endPoint = loc - 1
					preprocessor.push({ markup : activeMarkups.slice(0), startPoint : loc + 1 })
				}
			}

		} else {

// **************************************************************** CLOSING TAGS ****************************************************************

			for(let j = activeMarkups.length - 1; j >= 0; j--) {
				if(activeMarkups[j].tag == result.tagInfo.tag) {
					if(recursions > 0 && result.tagInfo.hasOwnProperty('parameters') && result.tagInfo.parameters.hasOwnProperty('nest') && result.tagInfo.parameters.nest == true) {
						terminate = true
					}
					activeMarkups.splice(j, 1)
					nomarkup = false	// This can't possibly be true any longer if we just closed a tag
					if(loc > 0) {
						preprocessor[preprocessor.length - 1].endPoint = loc	// Terminate the previous tag here
					} else {
						preprocessor[preprocessor.length - 1].endPoint = inputText.length - 1
					}
					loc = result.endLoc
					preprocessor.push({ markup : activeMarkups.slice(0), startPoint : loc + 1 })
					break
				}
			}

// **********************************************************************************************************************************************

		}
	}


	// Terminate the last tag here
	if(recursions == 0) {
		preprocessor[preprocessor.length - 1].endPoint = inputText.length
	} else {
		if(loc >= 0 && loc < inputText.length) {
			preprocessor[preprocessor.length - 1].endPoint = loc
		} else {
			preprocessor[preprocessor.length - 1].endPoint = inputText.length
		}
	}

	for(let i = 0; i < preprocessor.length; i++) {
		if(i > 0 && preprocessor[i].startPoint == preprocessor[i].endPoint && preprocessor[i].markup.length == 0) {
			// Blank element. Ignore it. (Always allow a blank element 0, because it is necessary for nesting to work correctly)
			preprocessor.splice(i, 1)
			i--
			continue
		}
		if(!preprocessor[i].hasOwnProperty('children')) preprocessor[i].text = inputText.substring(preprocessor[i].startPoint, preprocessor[i].endPoint)
	}

	if(recursions > 0) {

		// Need to pass this back for recursions...
		if(loc >= 0 && loc < inputText.length) {
			let newIndex = inputText.indexOf(']', loc - 1)
			if(newIndex < 0) newIndex = inputText.length - 1
			preprocessor[0].endPoint = newIndex
		} else {
			preprocessor[0].endPoint = loc - 1
		}

		return preprocessor
	}

//console.log('ALL PREPROCESSOR DATA:', preprocessor)

	let output = []
	for(let i = 0; i < preprocessor.length; i++) {
		let tempChild = superTextMarkupGenerateElement(preprocessor[i], defaultFontSize, tagBlacklist)
		if(tempChild !== null) output.push(tempChild)
	}
	return output
}

function superTextMarkupEditorGetSelectedText(textAreaID) {
	let textArea = document.getElementById(textAreaID)
	let selectionStart = textArea.selectionStart
	let selectionEnd = textArea.selectionEnd

	let selectedText = ''

	if(selectionStart != selectionEnd) {
		// Something is selected
		selectedText = textArea.value.substring(selectionStart, selectionEnd)
	}

	return selectedText
}

function superTextMarkupAddMarkupToTextField(textAreaID, tag, variables = {}, replaceText = '') {
	let textArea = document.getElementById(textAreaID)
	let openingTag = '[' + tag.tag
	let closingTag = '[/' + tag.tag + ']'

	for(variable in variables) {
		for(let i = 0; i < variables[variable].length; i++) {
			if(variables[variable][i] == null) continue
			if(variables[variable][i].indexOf(' ') >= 0) {
				if(variables[variable][i].indexOf('\'') >= 0) {
					openingTag = openingTag + ' ' + variable.toLowerCase() + '="' + variables[variable][i] + '"'
				} else {
					openingTag = openingTag + ' ' + variable.toLowerCase() + '=\'' + variables[variable][i] + '\''
				}
			} else {
				openingTag = openingTag + ' ' + variable.toLowerCase() + '=' + variables[variable][i]
			}
		}
	}

	openingTag = openingTag + ']'

	let selectionStart = textArea.selectionStart
	let selectionEnd = textArea.selectionEnd
	let endText = textArea.value.substring(selectionEnd)

	// If there is not supposed to be a closing tag, don't do anything with it
	if(tag.hasOwnProperty('noClosingTag') && tag.noClosingTag === true) closingTag = ''

	let selectedText = replaceText

	if(selectionStart != selectionEnd) {
		// Something is selected
		if(replaceText === null || replaceText == '') {
			selectedText = textArea.value.substring(selectionStart, selectionEnd)
		}
		selectionEnd = selectionStart + selectedText.length

		if(tag.hasOwnProperty('nest') && tag.nest === true && openingTag[0] == '\n') {
			closingTag = closingTag + '\n'
		}

		// If we're adding an ordered or unordered list, we should account for that
		if((tag.tag == 'ol' || tag.tag == 'ul')) {
			let addEndingNewlines = 0
			selectedText = selectedText.split('\n')
			for(let x = 0; x < selectedText.length; x++) {
				if(selectedText[x].trim().substring(0, 4) == '[li]') {
					// This line already has a [li] tag
					// FIXME: I have no idea how to handle this condition...
				} else if(selectedText[x].trim() == '') {
					// Blank line. Skip
					selectedText.splice(x, 1)
					x--
					addEndingNewlines++
					continue
				}
				addEndingNewlines = 0
			}
			openingTag += '\n'
			closingTag = '\n' + closingTag + '\n'.repeat(addEndingNewlines)
			selectedText = '[li]' + selectedText.join('[/li]\n[li]') + '[/li]'
			selectionEnd = selectionStart + selectedText.length
		}

		// If we're making list items, we should split them on every line too
		if(tag.tag == 'li') {
			let addEndingNewlines = 0
			selectedText = selectedText.split('\n')
			for(let x = 0; x < selectedText.length; x++) {
				if(selectedText[x].trim() == '') {
					// Blank line. Skip
					selectedText.splice(x, 1)
					x--
					addEndingNewlines++
					continue
				}
				addEndingNewlines = 0
			}
			closingTag += '\n'.repeat(addEndingNewlines)
			selectedText = selectedText.join('[/li]\n[li]')
			selectionEnd = selectionStart + selectedText.length
		}
	} else {
		// Nothing is selected
		selectionEnd = selectionStart + selectedText.length
	}

	textArea.value = textArea.value.substring(0, selectionStart) + openingTag + selectedText + closingTag + endText		// Add the tags
	textArea.selectionEnd = selectionEnd

	if(typeof(textArea.oninput) !== 'undefined') textArea.oninput()	// Force an update to the markup
	textArea.focus()
	textArea.setSelectionRange(selectionStart + openingTag.length, selectionEnd + openingTag.length)
}

function superTextMarkupRemoveTagsFromSelection(inputData, data) {
	let textAreaID = data[0]

	let textArea = document.getElementById(textAreaID)
	let selectionStart = textArea.selectionStart
	let selectionEnd = textArea.selectionEnd

	let startText = textArea.value.substring(0, selectionStart)
	let	selectedText = superTextMarkupStripTagsFromText(textArea.value.substring(selectionStart, selectionEnd))
	let endText = textArea.value.substring(selectionEnd)

	textArea.value = startText + selectedText + endText
	textArea.focus()
	textArea.setSelectionRange(selectionStart, selectionStart + selectedText.length)
	textArea.oninput()
}

function superTextMarkupPickColors(colors, data) {
	let textAreaID = data[0]
	let tagInfo = data[1]

	superTextMarkupAddMarkupToTextField(textAreaID, tagInfo, colors)
}

function superTextMarkupAddYouTube(inputData, data) {
	let textAreaID = data[0]
	let tagInfo = data[1]

	superTextMarkupAddMarkupToTextField(textAreaID, tagInfo, inputData)
}

function superTextMarkupAddSoundCloud(inputData, data) {
	let textAreaID = data[0]
	let tagInfo = data[1]

	superTextMarkupAddMarkupToTextField(textAreaID, tagInfo, inputData)
}

function superTextMarkupAddURL(inputData, data) {
	let textAreaID = data[0]
	let tagInfo = data[1]

	let text = (' ' + inputData.link).slice(1)	// Force a deep copy of the string - DO NOT use a reference!
	if(inputData.hasOwnProperty('text')) text = (' ' + inputData.text).slice(1)
	delete inputData.text

	if(text.substring(0, 4).toLowerCase() == 'www.') {
		text = 'https://' + text
		inputData.url = text
	}

	superTextMarkupAddMarkupToTextField(textAreaID, tagInfo, inputData, text)
}

function superTextMarkupAddHash(inputData, data) {
	let textAreaID = data[0]
	let tagInfo = data[1]

	let text = (' ' + inputData.link).slice(1)	// Force a deep copy of the string - DO NOT use a reference!
	if(inputData.hasOwnProperty('text')) text = (' ' + inputData.text).slice(1)
	delete inputData.text

	superTextMarkupAddMarkupToTextField(textAreaID, tagInfo, inputData, text)
}

function superTextMarkupAddHide(inputData, data) {
	let textAreaID = data[0]
	let tagInfo = data[1]

	superTextMarkupAddMarkupToTextField(textAreaID, tagInfo, inputData)
}

function superTextMarkupAddImage(inputData, data) {
	let textAreaID = data[0]
	let tagInfo = data[1]

	superTextMarkupAddMarkupToTextField(textAreaID, tagInfo, inputData)
}

function superTextMarkupAddGrid(inputData, data) {
	let textAreaID = data[0]
	let tagInfo = data[1]

	if(inputData.hasOwnProperty('columns'))	inputData.columns[0] = Math.max(0, parseInt(inputData.columns[0])).toString()
	superTextMarkupAddMarkupToTextField(textAreaID, tagInfo, inputData)
}

function superTextMarkupPickFont(inputData, data) {
	let textAreaID = data[0]
	let tagInfo = data[1]

	let text = null

	if(inputData.hasOwnProperty('sampleText')) {
		text = inputData.sampleText[0]
	}

	superTextMarkupAddMarkupToTextField(textAreaID, tagInfo, { font : inputData.font }, text)
}

function superTextMarkupAddHr(inputData, data) {
	let textAreaID = data[0]
	let tagInfo = data[1]

	superTextMarkupAddMarkupToTextField(textAreaID, tagInfo, inputData)
}

function superTextMarkupAddSize(inputData, data) {
	let textAreaID = data[0]
	let tagInfo = data[1]

	superTextMarkupAddMarkupToTextField(textAreaID, tagInfo, inputData)
}

function superTextMarkupAddSmileyToTextField(textAreaID, tagInfo) {
	superTextMarkupAddMarkupToTextField(textAreaID, combineObjects(tagInfo, { tag : tagInfo.text, noClosingTag : true }))
}

function superTextMarkupMakeEditorHighlights(inputText, tagBlacklist = [], addSmilies = true) {
	inputText += '\n\n\n'	// Without this, the scroll breaks when there are newlines at the bottom
	inputText = inputText.split('\n')

	let highlightOpacity = '4A'	// This value is a hex string, and IT MUST BE TWO DIGITS. It is appended to the color from the tag info
	let defaultHighlightColor = '000'	// This is a string representing the hex value of the default color to use if no color is supplied

	let outputElements = []
	for(let i = 0; i < inputText.length; i++) {
		let endLoc = 0
		for(startLoc = 0; startLoc >= 0 && startLoc < inputText[i].length; startLoc++) {
			endLoc = inputText[i].indexOf('[', startLoc)
			let elementID = 'spellCheckElement' + startLoc.toString()
			if(endLoc < 0) {
				spellCheckElements.push(elementID)
				outputElements.push({ elementType : 'span', id : elementID, text : inputText[i].substring(startLoc) })
				break
			}
			outputElements.push({ elementType : 'span', id : elementID, text : inputText[i].substring(startLoc, endLoc) })
			startLoc = endLoc

			let tagInfo = superTextMarkupProcessTagInfo(startLoc, inputText[i], tagBlacklist, [], false, addSmilies)
			if(tagInfo === false) {
				spellCheckElements.push(elementID)
				outputElements.push({ elementType : 'span', style : { backgroundColor : 'none' }, text : '[' })
			} else {
				endLoc = tagInfo.endLoc
				if(endLoc < 0) endLoc = inputText[i].length -1
				let color = ''
				if(	tagInfo.tagInfo.hasOwnProperty('parameters') &&
					tagInfo.tagInfo.parameters.hasOwnProperty('symbol') &&
					tagInfo.tagInfo.parameters.symbol.hasOwnProperty('color')
					) {
					color = readColor(tagInfo.tagInfo.parameters.symbol.color) + highlightOpacity
				} else {
					color = readColor(defaultHighlightColor) + highlightOpacity
				}
				outputElements.push({ elementType : 'span', style : { backgroundColor : '#' + color }, text : inputText[i].substring(startLoc, endLoc + 1) })
				startLoc = endLoc
//				if(startLoc < 0) break
			}
		}
		outputElements.push({ elementType : 'br' })
	}

	return { elementType : 'span', children : outputElements }
}

function superTextMarkupEditorCharCount(textAreaID, charCountID, maxChars) {
	clearElement(document.getElementById(charCountID))
	let charCount = document.getElementById(textAreaID).value.length
	let newCharCount = { elementType : 'span', style : { fontWeight : 'bold' }, text : Number(charCount).toLocaleString() }

	if(maxChars > 0) {
		if(charCount >= maxChars) {
			//red
			newCharCount.style.color = '#F00'
		} else {
			if((maxChars < 1000 && maxChars - charCount <= 100) || charCount > maxChars * 0.9 ) {
				//yellow
			newCharCount.style.color = '#FF0'
			}
		}
	}

	document.getElementById(charCountID).appendChild(createElement(newCharCount))

	if(maxChars > 0) {
		document.getElementById(charCountID).appendChild(createElement({ elementType : 'span', text : ' / ' + Number(maxChars).toLocaleString() }))
	}
}

superTextEditorTimers = {}
superTextMarkupEditorCount = 0
function superTextMarkupMakeEditor(editorElement, renderElement, maxChars = 0, textAreaHasFocus = true, tagBlacklist = [], defaultFont = 'nabfonts sans-serif', defaultFontSize = 1.5, addSmilies = true) {
	if(typeof(nabFontsLibPresent) === 'undefined' || nabFontsLibPresent === false) {
		printError('nabLib.js: superTextMarkupMakeEditor: nabFonts.js is not present, editor unavailable')
		return
	}

	for(let i = 0; i < tagBlacklist.length; i++) {
		tagBlacklist[i] = tagBlacklist[i].toLowerCase()
	}
	tagBlacklist.sort()		// Used for the help menu. Makes things more readable

	reRenderTimeout = 500 

	// Spell check doesn't have good browser support right now, and it slows down the page like crazy.
	// If that ever changes, change this to true and spell check will work again
	let allowSpellCheck = false

	renderElement.style.whiteSpace = 'break-spaces'

	superTextMarkupEditorCount++

	let editorID = editorElement.id + superTextMarkupEditorCount.toString()

	let textAreaID = editorID + 'Source'
	let formatDivID = textAreaID + 'Formatting'
	let outputElement = { elementType : 'div', style : { width : '100%' }, children : [] }
	let emGridSpacing = 0.1
	let formatButtons = { elementType : 'div', style : { display : 'grid', gridGap : emGridSpacing + 'em ' + emGridSpacing + 'em', margin : '0 auto', padding : emGridSpacing + 'em', fontSize : '1.5em' }, children : [] }
	let buttonShadow = '0.05em 0.05em #0003, -0.05em 0.05em #0003, 0.05em -0.05em #0003, -0.05em -0.05em #0003'

	clearElement(editorElement)

	let categoryOrder = [	// This array configures the arrangement of the buttons. Each array is a row, and it's contents are the categories it will contain
		[ 'formatting' ],
		[ 'alignment', 'organization', 'visibility' ],
		[ 'quote', 'embed' ],
		[ 'grouping', 'inserts', 'meta' ],
	]

	// Let's grab any categories that were missed...
	let addedCategories = []
	for(let i = 0; i < categoryOrder.length; i++) {
		for(let h = 0; h < categoryOrder[i].length; h++) {
			if(categoryOrder[i][h] == 'inserts' && addSmilies !== true) {
				categoryOrder[i].splice(h, 1)
				h--
				continue
			}
			addedCategories.push(categoryOrder[i][h])
		}
	}
	for(category in superTextMarkupData.categories) {
		if(!addedCategories.includes(category) && !(addSmilies !== true && category != 'smileyFaces')) categoryOrder.push([ category ])
	}

	let rows = categoryOrder.length
	let cols = 0
	// Get a count for the number of items in each row
	for(let i = 0; i < categoryOrder.length; i++) {
		let tempCols = categoryOrder[i].length - 1
		for(let h = 0; h < categoryOrder[i].length; h++) {
			if(superTextMarkupData.categories.hasOwnProperty(categoryOrder[i][h])) {
				tempCols += superTextMarkupData.categories[categoryOrder[i][h]].length
			} else {
				printWarning('SuperTextMarkup property does not exist: "' + categoryOrder[i][h] + '"')
			}
		}
		if(tempCols > cols) cols = tempCols
	}

	formatButtons.style.width = 'min(' + (4 * cols).toString() + 'rem, 100%)'
	formatButtons.style.gridTemplateRows = 'max-content '.repeat(rows)
	formatButtons.style.gridTemplateColumns = 'max-content '.repeat(cols)
	formatButtons.style.gridTemplateRows = ('calc(' + ((100 / (rows == 0 ? 1 : rows)).toString() + '%  - ' + (emGridSpacing * rows / (rows + 1)) + 'em) ')).repeat(rows)
	formatButtons.style.gridTemplateColumns = ('calc(' + ((100 / (cols == 0 ? 1 : cols)).toString() + '%  - ' + (emGridSpacing * cols / (cols + 1)) + 'em) ')).repeat(cols)

	let spacer = { elementType : 'div', style : { display: 'flex', alignItems : 'center', justifyContent : 'center' }, children : [
					{ elementType : 'span', style : { fontSize : 'inherit', color : '#9994', textAlign: 'center', userSelect : 'none', aspectRatio : '1 / 1' }, text : ' | ' }
				]}

	let i = 0
	for(i; i < categoryOrder.length; i++) {
		let categoryChildren = []
		let h = 0
		let cumulative = 0	// The number of elements pushed to the grid so far. Used to count out the columns per row and pad as needed
		let lastCumulative = 0	// For preventing stray line breaks
		for(h; h < categoryOrder[i].length; h++) {
			if(h > 0 && cumulative != lastCumulative) {
				// Add a spacer
				formatButtons.children.push(spacer)
				cumulative++
			}
			lastCumulative = cumulative

			let categoryEntries = []
			let category = categoryOrder[i][h]

			if(superTextMarkupData.categories.hasOwnProperty(category)) {
				let j = 0
				for(j; j < superTextMarkupData.categories[category].length; j++) {
					let tagInfo = superTextMarkupData.categories[category][j]	// 'let' is necessary here, because of the function declaration below
					if(tagBlacklist.includes(tagInfo.tag)) continue
					if(tagInfo.hasOwnProperty('symbol')) {
						let onclickAction = ()=>{
							superTextMarkupAddMarkupToTextField(textAreaID, tagInfo)
						}
						switch(tagInfo.tag.toLowerCase()) {

							case 'color':
								onclickAction = ()=>{
									createModalForm({
										elementToFocusOnAfterClose : textAreaID,
										callback : superTextMarkupPickColors,
										callbackDataArray : [ textAreaID, tagInfo ],
										label : 'Choose Colors',
										categories : [
											{
												allowDisable : true,
												startDisabled : true,
												inputs : [
													{
														label : 'Foreground Color',
														type : 'color',
														name : 'fg',
														required : true,
														prompts : [
															{
																default : randomItem('000', '444', '999', 'eee', 'b00', '0b0', '00b', 'bb0', '0bb', 'b0b'),
															},
														],
													},
												],
											},
											{
												allowDisable : true,
												startDisabled : true,
												inputs : [
													{
														label : 'Background Color',
														type : 'color',
														name : 'bg',
														required : true,
														prompts : [
															{
																default : randomItem('000', '444', '999', 'eee', 'b00', '0b0', '00b', 'bb0', '0bb', 'b0b'),
															},
														],
													},
												],
											},
										]
									})
								}
								break

							case 'font':
								let fontPrompts = []
								onclickAction = ()=>{
									let selectedText = superTextMarkupEditorGetSelectedText(textAreaID)
									createModalForm({
										elementToFocusOnAfterClose : textAreaID,
										callback : superTextMarkupPickFont,
										callbackDataArray : [ textAreaID, tagInfo ],
										label : 'Choose Font',
										categories : [
											{
												allowDisable : false,
												inputs : [
													{
														type : 'font',
														name : 'font',
														prompts : [
															{
																default : selectedText,
															},
														],
													},
												]
											}
										]
									})
								}
							break

							case 'size':
								onclickAction = ()=>{
									createModalForm({
										elementToFocusOnAfterClose : textAreaID,
										callback : superTextMarkupAddSize,
										callbackDataArray : [ textAreaID, tagInfo ],
										 label : 'Choose Font Size',
										categories : [
											{
												allowDisable : false,
												startDisabled : true,
												inputs : [
													{
														label : 'Percentage[br][size size=85] Minimum: [font font="nabfonts monospace" weight=bold]' + superTextMarkupData.minFontSize.toString() + '[/font], Maximum: [font font="nabfonts monospace" weight=bold]' + superTextMarkupData.maxFontSize.toString() + '[/font][/size]',
														type : 'number',
														required : true,
														name : 'size',
														prompts : [
															{
																default : '100',
																min : superTextMarkupData.minFontSize,
																max : superTextMarkupData.maxFontSize,
															},
														],
													},
												],
											},
										]
									})
								}
								break

						case 'weight':
								onclickAction = ()=>{
									createModalForm({
										elementToFocusOnAfterClose : textAreaID,
										callback : superTextMarkupAddHr,
										callbackDataArray : [ textAreaID, tagInfo ],
										label : 'Choose Font Weight',
										categories : [
											{
												allowDisable : false,
												startDisabled : true,
												inputs : [
													{
														label : 'Select font weight[br][size size=80]Keep in mind that most fonts only support[br][b]normal[/b] and [b]bold[/b] weights[/size]',
														type : 'radio',
														name : 'weight',
														required : true,
														prompts : [
															{
																value : 'lighter',
																label : '[weight weight=300]Lighter (Dynamic)[/weight]',
																spacerBefore : true,
															},
															{
																value : 'bolder',
																label : '[weight weight=700]Bolder (Dynamic)[/weight]',
																spacerAfter : true,
															},
															{
																value : 100,
																label : '[b font="nabfonts monospace"]100[/b] - [weight font="\'raleway\', \'nabfonts sans-serif\' \'sans-serif\'" weight=100]Thin[/weight]',
															},
															{
																value : 200,
																label : '[b font="nabfonts monospace"]200[/b] - [weight font="\'raleway\', \'nabfonts sans-serif\' \'sans-serif\'" weight=200]Extra light[/weight]',
															},
															{
																value : 300,
																label : '[b font="nabfonts monospace"]300[/b] - [weight font="\'raleway\', \'nabfonts sans-serif\' \'sans-serif\'" weight=300]Light[/weight]',
															},
															{
																value : 400,
																label : '[b font="nabfonts monospace"]400[/b] - [weight font="\'raleway\', \'nabfonts sans-serif\' \'sans-serif\'" weight=400]Normal[/weight]',
																default : true,
															},
															{
																value : 500,
																label : '[b font="nabfonts monospace"]500[/b] - [weight font="\'raleway\', \'nabfonts sans-serif\' \'sans-serif\'" weight=500]Medium[/weight]',
															},
															{
																value : 600,
																label : '[b font="nabfonts monospace"]600[/b] - [weight font="\'raleway\', \'nabfonts sans-serif\' \'sans-serif\'" weight=600]Semi bold[/weight]',
															},
															{
																value : 700,
																label : '[b font="nabfonts monospace"]700[/b] - [weight font="\'raleway\', \'nabfonts sans-serif\' \'sans-serif\'" weight=700]Bold[/weight]',
															},
															{
																value : 800,
																label : '[b font="nabfonts monospace"]800[/b] - [weight font="\'raleway\', \'nabfonts sans-serif\' \'sans-serif\'" weight=800]Extra bold[/weight]',
															},
															{
																value : 900,
																label : '[b font="nabfonts monospace"]900[/b] - [weight font="\'raleway\', \'nabfonts sans-serif\' \'sans-serif\'" weight=900]Black[/weight]',
															},
														],
													},
												],
											},
										]
									})
								}
								break

							case 'hr':
								onclickAction = ()=>{
									createModalForm({
										elementToFocusOnAfterClose : textAreaID,
										callback : superTextMarkupAddHr,
										callbackDataArray : [ textAreaID, tagInfo ],
										label : 'Horizontal Rule Width',
										categories : [
											{
												allowDisable : false,
												startDisabled : true,
												inputs : [
													{
														label : 'Percentage',
														type : 'number',
														name : 'width',
														required : true,
														prompts : [
															{
																default : '50',
																min : '1',
																max : '100',
															},
														],
													},
												],
											},
										]
									})
								}
								break

							case 'img':
								onclickAction = ()=>{
									let selectedText = superTextMarkupEditorGetSelectedText(textAreaID)
									createModalForm({
										elementToFocusOnAfterClose : textAreaID,
										callback : superTextMarkupAddImage,
										callbackDataArray : [ textAreaID, tagInfo ],
										label : 'Insert Image',
										categories : [
											{
												allowDisable : false,
												inputs : [
													{
														label : 'URL',
														type : 'text',
														name : 'link',
														required : true,
														prompts : [
															{
																default : (selectedText == '' ? 'https://' : selectedText),
																style : { fontFamily : 'nabfonts monospace, monospace', fontSize : 'inherit', width : 'min(90vw, 40em)' },
															},
														],
													},
												]
											},
										]
									})
								}
								break

							case 'url':
								onclickAction = ()=>{
									let selectedText = superTextMarkupEditorGetSelectedText(textAreaID)
									createModalForm({
										elementToFocusOnAfterClose : textAreaID,
										callback : superTextMarkupAddURL,
										callbackDataArray : [ textAreaID, tagInfo ],
										label : 'Insert Hyperlink',
										categories : [
											{
												allowDisable : false,
												inputs : [
													{
														label : 'URL',
														type : 'text',
														name : 'link',
														required : true,
														prompts : [
															{
																default : 'https://',
																style : { fontFamily : 'nabfonts monospace, monospace', fontSize : 'inherit', width : 'min(90vw, 40em)' },
																validateFunction : (value)=>{
																	try {
																		let test = value.toLowerCase()
																		if(test.trim().length < 9) return false
																		if(test.substring(0, 7) != 'http://' && test.substring(0, 8) != 'https://') return false
																	} catch {
																		return false
																	}
																	return true
																},
															},
														],
													},
												]
											},
											{
												allowDisable : false,
												startDisabled : (selectedText == '' ? true : false),
												inputs : [
													{
														label : 'Link Text',
														required : true,
														type : 'text',
														name : 'text',
														prompts : [
															{
																default : (selectedText == '' ? 'Link text here' : selectedText),
																style : { fontFamily : 'nabfonts monospace, monospace', fontSize : 'inherit', width : 'min(90vw, 40em)' },
															},
														],
													},
												]
											}
										]
									})
								}
								break

							case 'hash':
								onclickAction = ()=>{
									let selectedText = superTextMarkupEditorGetSelectedText(textAreaID)
									createModalForm({
										elementToFocusOnAfterClose : textAreaID,
										callback : superTextMarkupAddHash,
										callbackDataArray : [ textAreaID, tagInfo ],
										label : 'Change Page Hash',
										categories : [
											{
												allowDisable : false,
												inputs : [
													{
														label : 'Hash Data\n[size size=85]This is a JSON Object, use double quotes and braces[/size]',
														type : 'text',
														name : 'data',
														required : true,
														prompts : [
															{
																default : '{"variable":"value"}',
																style : { fontFamily : 'nabfonts monospace, monospace', fontSize : 'inherit', width : 'min(90vw, 40em)' },
																validateFunction : (value)=>{
																	try {
																		JSON.parse(value)
																		return true
																	} catch {
																		return false
																	}
																	return false
																},
															},
														],
													},
												]
											},
											{
												allowDisable : false,
												startDisabled : (selectedText == '' ? true : false),
												inputs : [
													{
														label : 'Link Text',
														required : true,
														type : 'text',
														name : 'text',
														prompts : [
															{
																default : (selectedText == '' ? 'Link text here' : selectedText),
																style : { fontFamily : 'nabfonts monospace, monospace', fontSize : 'inherit', width : 'min(90vw, 40em)' },
															},
														],
													},
												]
											}
										]
									})
								}
								break

							case 'youtube':
								onclickAction = ()=>{
									let selectedText = superTextMarkupEditorGetSelectedText(textAreaID)
									createModalForm({
										elementToFocusOnAfterClose : textAreaID,
										callback : superTextMarkupAddYouTube,
										callbackDataArray : [ textAreaID, tagInfo ],
										label : 'Insert YouTube Video',
										categories : [
											{
												allowDisable : false,
												inputs : [
													{
														label : 'URL or video ID',
														type : 'text',
														name : 'link',
														required : true,
														prompts : [
															{
																default : (selectedText == '' ? 'https://' : selectedText),
																style : { fontFamily : 'nabfonts monospace, monospace', fontSize : 'inherit', width : 'min(90vw, 40em)' },
															},
														],
													},
												]
											},
										]
									})
								}
								break

							case 'soundcloud':
								onclickAction = ()=>{
									let selectedText = superTextMarkupEditorGetSelectedText(textAreaID)
									createModalForm({
										callback : superTextMarkupAddSoundCloud,
										callbackDataArray : [ textAreaID, tagInfo ],
										label : 'Insert SoundCloud Player',
										categories : [
											{
												allowDisable : false,
												inputs : [
													{
														label : 'URL',
														type : 'text',
														name : 'link',
														required : true,
														prompts : [
															{
																default : (selectedText == '' ? 'https://' : selectedText),
																style : { fontFamily : 'nabfonts monospace, monospace', fontSize : 'inherit', width : 'min(90vw, 40em)' },
															},
														],
													},
												]
											},
										]
									})
								}
								break

							case 'smiley':
								let smileyArray = []
								for(let x = 0; x < superTextMarkupData.smileyFaces.length; x++) {
									smileyArray.push(
										{
											label : superTextMarkupData.smileyFaces[x].description,
											value : superTextMarkupData.smileyFaces[x].character,
											style : { aspectRatio : '1 / 1', backgroundColor : '#999', fontSize : (superTextMarkupData.smileyFaces[x].hasOwnProperty('size') ? 'calc(' + superTextMarkupData.smileyFaces[x].size / 100 + ' * 1.5em)' : '1.5em'), fontFamily : superTextMarkupData.smileyFaces[x].font, color : '#' + superTextMarkupData.smileyFaces[x].color, textShadow : buttonShadow },
											onclick : ()=>{
												superTextMarkupAddSmileyToTextField(textAreaID, superTextMarkupData.smileyFaces[x])
											},
										})
								}

								onclickAction = ()=>{
									createModalForm({
										elementToFocusOnAfterClose : textAreaID,
										label : 'Insert Smiley',
										okayButton : false,
										categories : [
											{
												allowDisable : false,
												inputs : [
													{
														type : 'button',
														closeAfterClick : true,
														prompts : smileyArray,
													},
												]
											}
										]
									})
								}
							break

							case 'grid':
								onclickAction = ()=>{
									createModalForm({
										elementToFocusOnAfterClose : textAreaID,
										callback : superTextMarkupAddGrid,
										callbackDataArray : [ textAreaID, tagInfo ],
										label : 'Grid Columns',
										categories : [
											{
												allowDisable : false,
												inputs : [
													{
														label : 'Number of Columns',
														type : 'number',
														name : 'columns',
														required : true,
														prompts : [
															{
																default : '3',
																style : { fontFamily : 'nabfonts monospace, monospace', fontSize : 'inherit', width : 'min(90vw, 20em)' },
															},
														],
													},
												]
											},
										]
									})
								}
								break

							case 'hide':
								onclickAction = ()=>{
									createModalForm({
										elementToFocusOnAfterClose : textAreaID,
										callback : superTextMarkupAddHide,
										callbackDataArray : [ textAreaID, tagInfo ],
										label : 'Add Hidden Text',
										categories : [
											{
												allowDisable : true,
												startDisabled : true,
												inputs : [
													{
														label : 'Button Label (Optional)',
														type : 'text',
														name : 'text',
														required : true,
														prompts : [
															{
																default : 'Show/Hide',
																style : { fontFamily : 'nabfonts monospace, monospace', fontSize : 'inherit', width : 'min(90vw, 15em)' },
															},
														],
													},
												]
											},
										]
									})
								}
								break

							case 'help':
								onclickAction = ()=>{
									let testString = 'modalForm' + modalFormCount.toString()
									createModalForm({
										elementToFocusOnAfterClose : textAreaID,
										label : 'SuperText Markup Help',
										cancelButton : false,
										categories : [
											{
												allowDisable : false,
											}
										]
									})
									let elementList = document.getElementsByClassName('modalFormCategory')
									let disallowedTags = 'None.'
									if(tagBlacklist.length > 0) disallowedTags = '[b fg=f55 nomarkup][' + tagBlacklist.join('][/b], [b fg=f55 nomarkup][') + '][/b]'
									for(let i = 0; i < elementList.length; i++) {
										if(elementList[i].id.indexOf(testString) == 0){
											elementList[i].appendChild(createElement({ elementType : 'span', children : superTextMarkup('Disallowed tags:\n[b font="nabfonts monospace"]' + disallowedTags + '[/b]\n\n[hr width=75 fg=f90]' + superTextMarkupData.instructions.text, defaultFont, defaultFontSize, addSmilies) }))
											break
										}
									}
								}
								break

							case 'cleanup':
								onclickAction = ()=>{
									let testString = 'modalForm' + modalFormCount.toString()
									createModalForm({
										elementToFocusOnAfterClose : textAreaID,
										callback : superTextMarkupRemoveTagsFromSelection,
										callbackDataArray : [ textAreaID ],
										label : 'Clean Up Tags',
										categories : [
											{
												allowDisable : false,
												inputs : [
													{
														type : 'text',
														label : 'Are you sure you want to remove [b]ALL[/b]\nSuperText tags from the selected text?',
													}
												]
											}
										]
									})
								}
								break
						}

						let newCategoryEntry = { elementType : 'button', className : 'superTextMarkupButton', style : { fontSize : (superTextMarkupData.categories[category][j].symbol.hasOwnProperty('size') ? superTextMarkupData.categories[category][j].symbol.size / 100 + 'em' : 'inherit'), cursor : 'pointer', borderRadius : '20%', userSelect : 'none', aspectRatio : '1 / 1', textShadow : (superTextMarkupData.categories[category][j].symbol.hasOwnProperty('textShadow') && superTextMarkupData.categories[category][j].symbol.textShadow == true ? buttonShadow : 'none') }, text : superTextMarkupData.categories[category][j].symbol.character, onclick : onclickAction }
						if(superTextMarkupData.categories[category][j].symbol.hasOwnProperty('font')) newCategoryEntry.style.fontFamily = superTextMarkupData.categories[category][j].symbol.font
						if(superTextMarkupData.categories[category][j].symbol.hasOwnProperty('color')) newCategoryEntry.style.color = '#' + readColor(superTextMarkupData.categories[category][j].symbol.color)
						if(superTextMarkupData.categories[category][j].hasOwnProperty('block') && superTextMarkupData.categories[category][j].block === true) newCategoryEntry.style.boxShadow = 'inset 0px 0px 0.1em 0.1em #08B'
						if(superTextMarkupData.categories[category][j].hasOwnProperty('ignoreLineBreaks') && superTextMarkupData.categories[category][j].ignoreLineBreaks === true) newCategoryEntry.style.boxShadow = 'inset 0px 0px 0.1em 0.1em #F40'

						let tooltip = { elementType : 'div', id : editorID + tagInfo.tag.toLowerCase() + 'Tooltip', style : { zIndex : '214748364', display : 'inline-block', position : 'absolute', transform : 'translateY(calc(-50% + 4.5rem))', pointerEvents : 'none', userSelect : 'none', textAlign : 'center', border : 'outset 0.125em #555', opacity : 0, padding : '0.25em', margin : '0', backgroundColor: '#335', backgroundImage : 'linear-gradient(180deg, #fff0 0%, #fff2 100%)', borderRadius : '.4em', transition : 'opacity 0.25s', fontSize : '1rem', fontFamily : '"nabfonts sans-serif", "sans-serif"' }, text : superTextMarkupData.categories[category][j].description }
						if(tagInfo.tag.toLowerCase() == 'size') {
							// Add extra text for font size
							tooltip.text = tooltip.text + ' (Percent, from ' + superTextMarkupData.minFontSize.toString() + ' to ' + superTextMarkupData.maxFontSize.toString() + ')'
						}
						newCategoryEntry.onmouseover = ()=>{ document.getElementById(editorID + tagInfo.tag.toLowerCase() + 'Tooltip').style.opacity = 1 }
						newCategoryEntry.onmouseout = ()=>{ document.getElementById(editorID + tagInfo.tag.toLowerCase() + 'Tooltip').style.opacity = 0 }

						formatButtons.children.push({ elementType : 'div', style : { display: 'flex', alignItems : 'stretch', justifyContent : 'center' }, children : [ tooltip, newCategoryEntry ]})
						cumulative++
					}
				}
			}
		}

		if(cumulative == lastCumulative && cumulative > 0) {
			// Remove any stray spacers at the end of a row
			formatButtons.children.pop()
			cumulative--
		}

		while(cumulative < cols) {
			formatButtons.children.push({ elementType : 'div' })
			cumulative++
		}
	}

	outputElement.children.push(formatButtons)

	let charCountAndSpellCheck = []
	let spellCheckEnabledId = textAreaID + 'SpellCheckEnabled'	// This MUST be outside the if statement below
	if(allowSpellCheck == true) {
		charCountAndSpellCheck.push({ elementType : 'div', style : { display : 'flex', gap : '0.5em' }, children : [
			{ elementType : 'input', type : 'checkbox', id : spellCheckEnabledId, checked : 'checked', style : { fontWeight : 'bold' }, onchange : ()=>{ if(document.getElementById(spellCheckEnabledId).checked == true) { document.getElementById(textAreaID).oninput() } } },
			{ elementType : 'span', style : { fontWeight : 'bold' }, text : 'Spell Check' },
		] })
	}

	let charCountID = textAreaID + 'charCount'
	charCountAndSpellCheck.push({ elementType : 'div', style : { textAlign : 'right', flex : '1 1' }, children : [
		{ elementType : 'span', id : charCountID, children : []},
		{ elementType : 'span', text : ' characters' }
	] })

	outputElement.children.push({ elementType : 'div', style : { display : 'flex', gap : '5em', justifyContent : 'center', padding : '0.25em 0.5em 0.25em 0.5em', fontFamily : '\'nabfonts monospace\', monospace' }, children : charCountAndSpellCheck })

	outputElement.children.push( { elementType : 'div', style : { margin : '0 auto', padding : '0.25em', borderRadius : '0.25em', border : '0.1em inset #777', backgroundColor : '#7774', fontFamily : 'nabfonts monospace', fontSize : '1.25em', lineHeight : '0em', width : 'calc(100% - 1.25em)', height : '15em' }, children : [
		{ elementType : 'div', id : formatDivID, style : { width : '100%', overflowY : 'scroll', overflowX : 'hidden', height : '100%', margin : '0px', padding : '0px', borderRadius : '0', lineHeight : 'normal', pointerEvents : 'none' }, children : [
			{ elementType : 'pre', style : { color : 'transparent', backgroundColor : 'transparent', textShadow : 'none', boxSizing : 'border-box', margin : '0px', padding : '0px', border : '0px', borderRadius : '0', fontFamily : 'inherit', fontSize : 'inherit', lineHeight : 'normal', whiteSpace : 'pre-wrap', wordBreak : 'break-word', width : '100%' }}
		]},
		{ elementType : 'textarea', id : textAreaID, style : { cursor : 'auto', color : '#FFF', caretColor : '#F00', height : '100%', margin : '0px', padding : '0px', overflowY : 'scroll', overflowX : 'hidden', transform : 'translateY(-100%)', fontFamily : 'inherit', fontSize : 'inherit', lineHeight : 'normal', border : 'none', outline : 'none', borderRadius : '0', backgroundColor : 'transparent', height: '100%', width : '100%', resize : 'none' }, placeholder : 'Enter your text here', oninput : ()=>{
			if(superTextEditorTimers.hasOwnProperty(textAreaID)) {
				 if(superTextEditorTimers[textAreaID].active == true) return	// If there is an operation running, don't touch anything
				clearTimeout(superTextEditorTimers[textAreaID].timer)
			} else {
				superTextEditorTimers[textAreaID] = { timer : null, active : false }
			}
			superTextEditorTimers[textAreaID].timer = setTimeout(()=>{
				superTextEditorTimers[textAreaID].active = true
				clearElement(renderElement)
				renderElement.appendChild(createElement({ elementType : 'span', children : superTextMarkup(document.getElementById(textAreaID).value, tagBlacklist, defaultFont, defaultFontSize, addSmilies) }))
				clearElement(document.getElementById(formatDivID).children[0])
				spellCheckElements = []
				document.getElementById(formatDivID).children[0].appendChild(createElement(superTextMarkupMakeEditorHighlights(document.getElementById(textAreaID).value, tagBlacklist, addSmilies)))
				superTextMarkupEditorCharCount(textAreaID, charCountID, maxChars)

				if(allowSpellCheck == true) {
					if(document.getElementById(spellCheckEnabledId).checked == true) {
						let returnFocus = document.activeElement
						// Trick the browser into performing a spell check on the background goods
						for(let i = 0; i < spellCheckElements.length; i++) {
							let spellCheckElement = document.getElementById(spellCheckElements[i])
							spellCheckElement.contentEditable = true
							spellCheckElement.spellcheck = true
							spellCheckElement.onfocus = ()=>{ document.getElementById(textAreaID).focus() }
							spellCheckElement.focus()

//						setTimeout(()=>{ spellCheckElement.focus(); returnFocus.focus(); }, 10)	// Failed attempt at getting this to work in Chrome
						}
						returnFocus.focus()
					}
				}
				document.getElementById(textAreaID).onscroll()		// Make sure to line the elements up after every input. Newlines matter!

				superTextEditorTimers[textAreaID].active = false
			}, reRenderTimeout)
			}, onscroll : ()=>{
				document.getElementById(formatDivID).scrollTop = document.getElementById(textAreaID).scrollTop
				document.getElementById(formatDivID).scrollLeft = document.getElementById(textAreaID).scrollLeft
			}
		}
	]})
	outputElement.children[outputElement.children.length - 1].onchange = outputElement.children[outputElement.children.length - 1].oninput	// Just to make sure this is updated

	editorElement.appendChild(createElement(outputElement))

	if(textAreaHasFocus == true) document.getElementById(textAreaID).focus()

	document.getElementById(textAreaID).spellcheck = false	// For some stupid reason, this doesn't work if set up above, so it has to be set here

	document.getElementById(textAreaID).oninput()	// Do an initial render
}
