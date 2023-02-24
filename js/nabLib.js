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




// -------------------- GLOBALS --------------------
// -------------------- GLOBALS --------------------

// To get trace data from warnings and make errors fatal, set this to true
debug = false

warningCount = 0
errorCount = 0

fileSizeDenominations = [ 'byt', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB' ]
fileSizeColors = [ '33B', '3BB', '3B3', 'BB3', 'B33', 'B3B', '999', 'FFF' ]

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
`))
document.head.appendChild(nabLibStyle)



// -------------------- CSS --------------------
// -------------------- CSS --------------------

function getCSSVar(variableName) {
	// This is used to get CSS variable values from :root
	return getComputedStyle(document.querySelector(':root')).getPropertyValue('--' + variableName).trim()
}

function setCSSVar(variableName, newValue) {
	// This is used to set CSS variable values in :root
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


// -------------------- DATES --------------------
// -------------------- DATES --------------------

function dateToString(inputTimestamp, fullMonthName = true) {

	inputTimestamp *= 1000
	let offset = new Date().getTimezoneOffset() * 60 * 1000
	let date = new Date(inputTimestamp - offset)

	let year = parseInt(date.toISOString().substr(0, 4))
	let month = nabLibMonths[parseInt(date.toISOString().substr(5, 2)) - 1]
	if(fullMonthName == true) {
		month = month.name
	} else {
		month = month.abbr
	}
	let day = parseInt(date.toISOString().substr(8, 2))

	// If we need to output the date in a specific order, determine that here

	return month + ' ' + day.toString() + getNumberSuffix(day) + ', ' + year
}



// -------------------- COLORS --------------------
// -------------------- COLORS --------------------

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

			return r.repeat(3)
			break

		case 2:
			r = clamp(Math.round(parseInt(color.substring(0, 1).repeat(2), 16) * multiplier + additional), 0, 255).toString(16)
			a = clamp(parseInt(color.substring(1, 2).repeat(2), 16), 0, 255).toString(16)

			r = leadingString(r, 2, '0')
			a = leadingString(a, 2, '0')

			return r.repeat(3) + a
			break

		case 3:
			r = clamp(Math.round(parseInt(color.substring(0, 1).repeat(2), 16) * multiplier + additional), 0, 255).toString(16)
			g = clamp(Math.round(parseInt(color.substring(1, 2).repeat(2), 16) * multiplier + additional), 0, 255).toString(16)
			b = clamp(Math.round(parseInt(color.substring(2, 3).repeat(2), 16) * multiplier + additional), 0, 255).toString(16)

			r = leadingString(r, 2, '0')
			g = leadingString(g, 2, '0')
			b = leadingString(b, 2, '0')

			return r + g + b
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

			return r + g + b + a
			break

		case 6:
			r = clamp(Math.round(parseInt(color.substring(0, 2), 16) * multiplier + additional), 0, 255).toString(16)
			g = clamp(Math.round(parseInt(color.substring(2, 4), 16) * multiplier + additional), 0, 255).toString(16)
			b = clamp(Math.round(parseInt(color.substring(4, 6), 16) * multiplier + additional), 0, 255).toString(16)

			r = leadingString(r, 2, '0')
			g = leadingString(g, 2, '0')
			b = leadingString(b, 2, '0')

			return r + g + b
			break

		case 8:
			r = clamp(Math.round(parseInt(color.substring(0, 2), 16) * multiplier + additional), 0, 255).toString(16)
			g = clamp(Math.round(parseInt(color.substring(2, 4), 16) * multiplier + additional), 0, 255).toString(16)
			b = clamp(Math.round(parseInt(color.substring(4, 6), 16) * multiplier + additional), 0, 255).toString(16)
			a = clamp(parseInt(color.substring(6, 8), 16), 0, 255).toString(16)

			r = leadingString(r, 2, '0')
			g = leadingString(g, 2, '0')
			b = leadingString(b, 2, '0')
			a = leadingString(a, 2, '0')

			return r + g + b + a
			break
	}

	if(debug) console.log('Invalid color: \'' + color + '\'')

	return 'CCCCCC99'
}



// -------------------- MESSAGES --------------------
// -------------------- MESSAGES --------------------

function consoleLog() {
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
	let output = {}
	let hashData = decodeURI(window.location.hash.substring(1))

	hashData = hashData.split(';')
	for(let i = 0; i < hashData.length; i++) {
		if(hashData[i] == '') continue

		let temp1 = hashData[i].indexOf('=')
		let temp2 = hashData[i].indexOf(':')

		let varName = hashData[i].substring(0, temp1)
		let dataType = hashData[i].substring(temp1 + 1, temp2)
		let value = decodeURI(hashData[i].substring(temp2 + 1))

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

function setHashData(inputObject) {
	let hashData = getHashData()
	let output = ''

	// Add the new data to the hash data
	for(key in inputObject) {
		if(key == '' || typeof(key) == 'undefined') continue
		hashData[key] = inputObject[key]
	}

	for(key in hashData) {
		let dataType = typeof(hashData[key])
		switch(dataType) {
			case 'object':
				hashData[key] = btoa(JSON.stringify(hashData[key]))
				break
			case 'boolean':
				hashData[key] = ((hashData[key]) ? 1 : 0)
				break
		}
		output += key + '=' + dataType + ':' + encodeURI(hashData[key]) + ';'
	}

	window.location.hash = encodeURI(output)
}



// -------------------- MATH --------------------
// -------------------- MATH --------------------

function clamp(value, min, max) {
	if(typeof(value) !== 'number') value = parseFloat(value)
	if(typeof(min) !== 'number') min = parseFloat(min)
	if(typeof(max) !== 'number') max = parseFloat(max)

	// If min and max are backwards, swap them!
	if(min > max) [ min, max ] = [ max, min ]

	if(value < min) return min
	if(value > max) return max
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
				case 'text':
					let test = typeof(inputValues[key])
					if(test !== "string" && test !== "number") {
						printError('\'text\' is not a string:', inputValues[key])
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

function hslToRgb(h, s, l, o = 1) {
	// ALL inputs to this function should be between 0 and 1

	var r, g, b

	if (s == 0) {
		r = g = b = l	// achromatic
	} else {
		function hue2rgb(p, q, t) {
			if (t < 0) t += 1
			if (t > 1) t -= 1
			if (t < 1/6) return p + (q - p) * 6 * t
			if (t < 1/2) return q
			if (t < 2/3) return p + (q - p) * (2/3 - t) * 6
			return p
		}

		var q = l < 0.5 ? l * (1 + s) : l + s - l * s
		var p = 2 * l - q

		r = hue2rgb(p, q, h + 1/3)
		g = hue2rgb(p, q, h)
		b = hue2rgb(p, q, h - 1/3)
	}

	r *= 255
	g *= 255
	b *= 255

	o = clamp(o, 0, 1)

	if(o == 1) return 'rgba(' + r + ',' + g + ',' + b + ',' + o + ')'
	return 'rgb(' + r + ',' + g + ',' + b + ')'
}



// -------------------- BACKGROUNDS --------------------
// -------------------- BACKGROUNDS --------------------

function generateBackgroundGradientLines(angle = 90, color = '999', maxLines = 500, opacityMultiplier = 1) {
	let opacityArray = ['00', '00', '00', '00', '00', '00', '00', '07', '08', '09', '0A', '0C']

	for(let i = 0; i < opacityArray.length; i++) {
		opacityArray[i] = parseInt(parseInt(opacityArray[i], 16) * opacityMultiplier).toString(16)
		while(opacityArray[i].length < 2) {
			opacityArray[i] = '0' + opacityArray[i]
		}
	}

	color = readColor(color)
	let outputArray = []
	for(let i = 0; i < maxLines; i++) {
		outputArray.push('#' + color + opacityArray[randIntRange(0, opacityArray.length - 1)] + ' ' + i / maxLines * 100 + '%')
	}

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

	sevenSegStatic(inputObject)
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

	sevenSegStatic(inputObject)
	inputObject.animationTimer = setTimeout(()=>{ sevenSegAnimate(inputObject, animation, delay, count + 1) }, delay)
}

function sevenSegMarquee(inputObject, delay, reverse = false) {
	// inputObject must be the same object that is used to render a 7seg normally
	// delay is the number of milliseconds each animation frame will last

	// Enforce a minimum value here so we don't lag
	if(delay < 10) delay = 10

	sevenSegStatic(inputObject)
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

function generateStarCanvasURL(canvasWidth, canvasHeight, starCount, starColor, starIntensityMin, starIntensityMax) {
	// There is a bug in Chrome that randomly causes the canvas to have a black background

	let starfield = document.createElement('canvas');
	if(starCount < 1) starCount = 1

	starfield.width = canvasWidth
	starfield.height = canvasHeight

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

	return starfield.toDataURL()
}

function renderStarscape(renderElement, starCount = 300, layers = 5, backgroundColor = '000', starColor = 'FFF', scrollLeftOrRight = 1, scrollUpOrDown = 0, scrollSpeed = 20) {
	let defaultStyle = { 'width' : '100%', 'height' : '100%', 'margin' : '0px' }
	let renderChild = createElement({ 'elementType' : 'div', 'style' : defaultStyle, 'children' : [] })

	layers = parseInt(layers)

	backgroundColor = readColor(backgroundColor)
	starColor = readColor(starColor)

	let savedElements = []
	for (let i = renderElement.children.length - 1; i >= 0; i--)
	{
		let c = renderElement.children[i]
		savedElements.unshift(c)
		renderElement.removeChild(c)
	}
/*
	let parentTagName = renderElement.parentElement.tagName.toLowerCase()
	if(parentTagName !== null && parentTagName != 'body') {
		renderElement.style.position = 'relative'	// This causes issues with the parent element if it is the body element...
	}
*/
	renderElement.style.backgroundColor = '#' + backgroundColor

	defaultStyle.padding = '0px'

	scrollSpeed = clamp(scrollSpeed, 1, 50000)	// Prevent division by 0 below and restrict this to it's max value

	// Colors
	backgroundColor = readColor(backgroundColor)
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
	let renderChildID = randomString(75)
	for(let currentLayer = 1; currentLayer <= layers; currentLayer++) {
		let newElement = { 'elementType' : 'div', 'style' : defaultStyle }
		newElement.style.zIndex = currentLayer * -1

		if(currentLayer == 1) {
			// The first layer MUST be relative positioned
			newElement.style.position = 'relative'
		} else {
			newElement.style.position = 'absolute'
			newElement.style.top = '0px'
			newElement.style.left = '0px'
		}

		if(currentLayer == 1) newElement.id = renderChildID

		canvasSizeXMax = (layers - currentLayer + 1) * layerSizeMultiplier + layerBaseSize
		canvasSizeXMin = canvasSizeXMax
		canvasSizeYMax = (layers - currentLayer + 1) * layerSizeMultiplier + layerBaseSize
		canvasSizeYMin = canvasSizeYMax

		layerMultiplier = 1 / layers * currentLayer * 0.5 + 0.5
		animationName = randomString(50) + layers + currentLayer

		canvasSize = { 'x' : randFloatRange(canvasSizeXMin, canvasSizeXMax), 'y' : randFloatRange(canvasSizeYMin, canvasSizeYMax) }
		newElement.style.backgroundImage = 'url(' + generateStarCanvasURL(canvasSize.x, canvasSize.y, Math.floor(starCount / layers), starColor, starIntensity - starIntensityVariance, starIntensity + starIntensityVariance) + ')'
		newElement.style.animation = animationName + ' ' + 500 / scrollSpeed * layerMultiplier + 's linear infinite'

		starIntensity = clamp(((starIntensityMax - starIntensityMin) / layers * currentLayer) + starIntensityMin, starIntensityVariance + 0.001, 1 - starIntensityVariance - 0.001)
		renderElement.appendChild(createElement(newElement))

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
			renderElement.appendChild(createElement({ 'elementType' : 'style', 'text' : '@keyframes ' + animationName + ' {0% { background-position: 0px 0px; } 100% { background-position: ' + horizontalScroll + ' ' + verticalScroll + ' } }' }))
		}
	}

	for(let i = 0; i < savedElements.length; i++) {
		renderElement.appendChild(savedElements[i])
	}
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
							label : 'Question',
							readOnly : false,
							default : 'true/placeholderText',
							style : { <Styles to apply to the element> },
						},
					],
				},
			],
		},
	]
}
*/

	let modalBlacklist = superTextConvertWhitelistToBlacklist([ 'b', 'i', 'u', 's', 'size', 'color', 'sub', 'sup', 'ol', 'ul', 'li', 'br' ])

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
	let modalBackground = { elementType : 'div', id : modalID, style : { backgroundColor : '#111B', display : 'flex', alignItems : 'center', justifyContent : 'center', position: 'fixed', top : '0px', left : '0px', width : '100%', height : '100%', userSelect : 'none' }, children : [ modal ] }

	if(data.hasOwnProperty('style')) modal.style = combineObjects(getValue(data, 'style', {}), modal.style)

	if(data.hasOwnProperty('label') && data.label != '') modal.children.unshift({ elementType : 'span', className : 'modalHeadline', style : { borderBottom : '0.1em inset #4449' }, children : superTextMarkup(data.label, modalBlacklist, null, null, false) })

	if(data.hasOwnProperty('clickBackgroundToClose') && data.clickBackgroundToClose === true) {
		modalBackground.style.cursor = 'pointer'
		modalBackground.onclick = ()=>{ closeModalForm(modalID) }
	}

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

				for(let l = 0; l < inputPrompts.length; l++) {
					let inputID = modalID + 'input' + inputCount.toString()
					inputLists.returnInputs[inputLists.returnInputs.length - 1].ids.push(inputID)
					categoryInputs.push(inputID)	// This is used for the "Activated" checkbox

					if(inputsData[j].hasOwnProperty('required') && inputsData[j].required === true) inputLists.forceInputs.push(inputID)
					let inputItem = { elementType : 'div', style : {}, children : [] }

	//				if(data.hasOwnProperty('style')) modal.style = combineObjects(getValue(data, 'style', {}), modal.style)
					if(inputsData[j].hasOwnProperty('style')) inputItem.style = combineObjects(inputsData[j].style, inputItem.style)

					// Every 'input' tag needs to start with this as the basis. It contains everything needed to make sure the JS and CSS works correctly
					let inputElementToAdd = { elementType : 'div', id : inputID, disabled : startDisabled }
					if(inputPrompts[l].hasOwnProperty('style')) inputElementToAdd.style = inputPrompts[l].style

					if(focusElement === null && startDisabled === false) focusElement = inputID		// Mark the first active element for automatic focus

					if(inputPrompts[l].hasOwnProperty('readOnly') && inputPrompts[l].readOnly === true) {
						inputElementToAdd.readOnly = true
//						inputElementToAdd.style.userSelect = 'all'		// This doesn't seem to work on text inputs...
					}

					switch(inputsData[j].type.toLowerCase()) {

	//	Types are: text/radio/checkbox/color/date/dropdown/font/login
	//	inputItem is the element that will contain the output for each type of input

	/*
						case 'login':
							break

						case 'date':
							break

	*/

						case 'font':
							if(typeof(fontsLibRenderPage) === 'undefined') {
								printWarning('nabFontsLib is not installed! Font selection impossible.')
								continue
							}

							let fontsLibID = 'fontsLib' + inputID
							inputElementToAdd.children = [{ elementType : 'div', id : fontsLibID, style : { maxWidth : '90vw', maxHeight : 'calc(100vh - 14em)', display : 'flex', flexDirection : 'column' } }]
							categories[categories.length - 1].style.padding = '0px'
							postRenderExecution.push(()=>{
								let fontsLibRenderElement = document.getElementById(fontsLibID)
								fontsLibRenderPage(fontsLibRenderElement, false);
	//							fontsLibRenderElement.children[0].style.maxHeight = 'calc(90% - 7em)'
								fontsLibRenderElement.children[0].style.flex = '1 1'
							})

							// Change the input IDs list to reference the correct element in the fonts library page
							let lastInputListItem = inputLists.returnInputs[inputLists.returnInputs.length - 1]
							lastInputListItem.ids[lastInputListItem.ids.length - 1] = 'fontsLibFontSelection'

							break

						case 'button':
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
							inputElementToAdd = combineObjects(inputElementToAdd, { id : '', style : { display : 'flex', gap : '0.5em', flexDirection : 'row', alignItems : 'center', justifyContent : 'center' }, children : [
								{ elementType : 'input', id : inputID, disabled : startDisabled, type : 'color', style : { cursor : 'pointer', width : '12rem', height : '3rem' } },
							] })
							if(inputPrompts[l].hasOwnProperty('default')) inputElementToAdd.children[0].value = '#' + readColor(inputPrompts[l].default)
							if(inputPrompts[l].hasOwnProperty('label')) inputElementToAdd.children.unshift({ elementType : 'span', children : superTextMarkup(inputPrompts[l].label, modalBlacklist, null, null, false) })
							l = inputPrompts.length		// Terminate the loop, we can only have one prompt
							break

						case 'number':
							inputElementToAdd = combineObjects(inputElementToAdd, { id : '', style : { display : 'flex', gap : '0.5em', flexDirection : 'row', alignItems : 'center', justifyContent : 'center' }, children : [
								{ elementType : 'input', id : inputID, disabled : startDisabled, type : 'number', style : { textAlign : 'center' } },
							] })
							if(inputPrompts[l].hasOwnProperty('default')) inputElementToAdd.children[0].value = inputPrompts[l].default
							if(inputPrompts[l].hasOwnProperty('min')) inputElementToAdd.children[0].min = inputPrompts[l].min
							if(inputPrompts[l].hasOwnProperty('max')) inputElementToAdd.children[0].max = inputPrompts[l].max
							if(inputPrompts[l].hasOwnProperty('label')) inputElementToAdd.children.unshift({ elementType : 'span', children : superTextMarkup(inputPrompts[l].label, modalBlacklist, null, null, false) })
							l = inputPrompts.length		// Terminate the loop, we can only have one prompt
							break

						case 'dropdown':
							inputElementToAdd = combineObjects(inputElementToAdd, { elementType : 'select' })
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
							inputElementToAdd = combineObjects(inputElementToAdd, { id : '', children : [
								{ elementType : 'input', type : 'checkbox', id : inputID, disabled : startDisabled, checked : selected },
								{ elementType : 'label', 'for' : inputID, children : superTextMarkup(inputPrompts[l].label, modalBlacklist, null, null, false) },
							] })

							l = inputPrompts.length		// Terminate the loop, we can only have one prompt
							break

						case 'radio':
							let radioSelected = false
							if(inputPrompts[l].hasOwnProperty('default') && inputPrompts[l].default !== false) radioSelected = true
							inputElementToAdd = combineObjects(inputElementToAdd, { id : '', children : [
								{ elementType : 'input', type : 'radio', id : inputID, name : modalID + 'Input' + j.toString() + 'RadioButtons', checked : radioSelected, disabled : startDisabled, value : inputPrompts[l].label },
								{ elementType : 'label', 'for' : inputID, children : superTextMarkup(inputPrompts[l].label, modalBlacklist, null, null, false) },
							] })
							break

						case 'text':
							inputItem.style = combineObjects(inputItem.style, { display : 'flex', gap : '0.5em' })
							if(inputPrompts[l].hasOwnProperty('label') && inputPrompts[l].label != '') inputItem.children.push({ elementType : 'span', style : { textAlign : 'right' }, children : superTextMarkup(inputPrompts[l].label, modalBlacklist, null, null, false) })
							let defaultValue = ''
							if(inputPrompts[l].hasOwnProperty('default')) defaultValue = inputPrompts[l].default
							inputElementToAdd = combineObjects(inputElementToAdd, { elementType : 'input', disabled : startDisabled, type : 'text', id : inputID, style : {}, placeholder : defaultValue, value : defaultValue })
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
		{ elementType : 'div', className : 'modalFormButton modalFormOkayButton', onclick : ()=>{ data.elementToFocusOnAfterClose.focus(); returnModalInputs(modalID, data.callback, data.callbackDataArray, inputLists.returnInputs, inputLists.forceInputs); }, style : modalButtonStyle, children : [
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

			case 'text':
				return inputElement.value
				break

			default:
				if(inputElement.hasAttribute('value')) return inputElement.value
		}
	} catch(error) {
		printWarning(error, 'Returning null', inputElement)
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
		removeClassName(forceElement, 'nabLibFlashRed')
		setTimeout(()=>{
			addClassName(forceElement, 'nabLibFlashRed')
		}, 100)
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



// -------------------- SUPERTEXT MARKUP --------------------
// -------------------- SUPERTEXT MARKUP --------------------

superTextMarkupData = {
	hideTags : 0,
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
		//		size				=	Font size (Percent, range from 25-500%)
		//		nomarkup			= 	No other tags inside this tag will be parsed
		//		ignoreNomarkup		= 	Even when nomarkup is active, this tag will still apply


		{ tag : 'b',
							description: 'Bold',
							symbol : { character : '', font : 'webhostinghub glyphs' },
							category : { name : 'Formatting', index : 1 },
							parameters : { style : { fontWeight : 'bold' } },
		},
		{ tag : 'i',
							description: 'Italic',
							symbol : { character : '', font : 'webhostinghub glyphs' },
							category : { name : 'Formatting', index : 2 },
							parameters : { style : { fontStyle : 'italic' } },
		},
		{ tag : 'u',
							description: 'Underline',
							symbol : { character : '', font : 'webhostinghub glyphs' },
							category : { name : 'Formatting', index : 3 },
							parameters : { style : { textDecoration : 'underline' } },
		},
		{ tag : 's',
							description: 'Strikethrough',
							symbol : { character : '', font : 'webhostinghub glyphs' },
							category : { name : 'Formatting', index : 4 },
							parameters : { style : { textDecoration : 'line-through' } },
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
							category : { name : 'Separators', index : 1 },
							parameters : { elementType : 'hr' }, variables : { width : 'width' },
		},
		{ tag : 'url',
							description: 'Hyperlink',
							symbol : { character : '', font : 'webhostinghub glyphs', color : '39B' },
							nest : true,
							category : { name : 'embed', index : 1 },
							variables : { href : 'link' },
							parameters : { elementType : 'a', target : '_blank' },
		},
		{ tag : 'img',
							description: 'Image',
							symbol : { character : '⊷ ', font : 'webhostinghub glyphs', color : '2C2' },
							noText : true,
							noClosingTag : true,
							category : { name : 'embed', index : 2 },
							variables : { src : 'link' },
							parameters : { elementType : 'img' },
		},
		{ tag : 'l',
							description: 'Block text and left align',
							symbol : { character : '', font : 'webhostinghub glyphs', color : '829' },
							block : true,
							nest : true,
							category : { name : 'Alignment', index : 1 },
							parameters : { elementType : 'p', style : { width: '100%', textAlign : 'left', marginTop : '0px', marginBottom : '0px' } },
		},
		{ tag : 'c',
							description: 'Block text and center align',
							symbol : { character : '', font : 'webhostinghub glyphs', color : '829' },
							block : true,
							nest : true,
							category : { name : 'Alignment', index : 2 },
							parameters : { elementType : 'p', style : { width: '100%', textAlign : 'center', marginTop : '0px', marginBottom : '0px' } },
		},
		{ tag : 'r',
							description: 'Block text and right align',
							symbol : { character : '', font : 'webhostinghub glyphs', color : '829' },
							block : true,
							nest : true,
							category : { name : 'Alignment', index : 3 },
							parameters : { elementType : 'p', style : { width: '100%', textAlign : 'right', marginTop : '0px', marginBottom : '0px' } },
		},
		{ tag : 'j',
							description: 'Block text and justify',
							symbol : { character : '', font : 'webhostinghub glyphs', color : '829' },
							block : true,
							nest : true,
							category : { name : 'Alignment', index : 4 },
							parameters : { elementType : 'p', style : { width: '100%', textAlign : 'justify', marginTop : '0px', marginBottom : '0px' } },
		},
/*
		{ tag : 'h1',
							description: 'Heading 1',
							symbol : { character : '', font : 'webhostinghub glyphs', color : 'DC2' },
							category : { name : 'Heading', index : 1 },
							parameters : { elementType : 'span', style : { fontSize : 'min(6rem, ' + (1 + 0.5 * 6).toString() + 'em)', marginTop : '0px', marginBottom : '0px' } },
		},
		{ tag : 'h2',
							description: 'Heading 2',
							symbol : { character : '', font : 'webhostinghub glyphs', color : 'CB3' },
							category : { name : 'Heading', index : 2 },
							parameters : { elementType : 'span', style : { fontSize : 'min(6rem, ' + (1 + 0.5 * 5).toString() + 'em)', marginTop : '0px', marginBottom : '0px' } },
		},
		{ tag : 'h3',
							description: 'Heading 3',
							symbol : { character : '', font : 'webhostinghub glyphs', color : 'BA4' },
							category : { name : 'Heading', index : 3 },
							parameters : { elementType : 'span', style : { fontSize : 'min(6rem, ' + (1 + 0.5 * 4).toString() + 'em)', marginTop : '0px', marginBottom : '0px' } },
		},
		{ tag : 'h4',
							description: 'Heading 4',
							symbol : { character : '', font : 'webhostinghub glyphs', color : 'A95' },
							category : { name : 'Heading', index : 4 },
							parameters : { elementType : 'span', style : { fontSize : 'min(6rem, ' + (1 + 0.5 * 3).toString() + 'em)', marginTop : '0px', marginBottom : '0px' } },
		},
		{ tag : 'h5',
							description: 'Heading 5',
							symbol : { character : '', font : 'webhostinghub glyphs', color : '986' },
							category : { name : 'Heading', index : 5 },
							parameters : { elementType : 'span', style : { fontSize : 'min(6rem, ' + (1 + 0.5 * 2).toString() + 'em)', marginTop : '0px', marginBottom : '0px' } },
		},
		{ tag : 'h6',
							description: 'Heading 6',
							symbol : { character : '', font : 'webhostinghub glyphs', color : '877' },
							category : { name : 'Heading', index : 6 },
							parameters : { elementType : 'span', style : { fontSize : 'min(6rem, ' + (1 + 0.5 * 1).toString() + 'em)', marginTop : '0px', marginBottom : '0px' } },
		},
*/
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
		{ tag : 'color',
							description: 'Text/background color',
							symbol : { character : '', font : 'webhostinghub glyphs', color : 'F33' },
							category : { name : 'Formatting', index : 7 },
		},
		{ tag : 'font',
							description: 'Change typeface',
							symbol : { character : '', font : 'webhostinghub glyphs' },
							category : { name : 'Formatting', index : 6 },
		},
		{ tag : 'size',
							description: 'Font size (Percent, 25 to 500)',
							symbol : { character : '', font : 'webhostinghub glyphs' },
							category : { name : 'Formatting', index : 5 },
		},
		{ tag : 'quote',
							description: 'Block quote, include markup',
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
							description: 'Block code snippet, no markup',
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
							category : { name : 'Control', index : 1 },
							parameters : { elementType : 'div', border : '0.1em inset #0005', borderRadius : '0.5em', padding : '0.5em' },
		},
		{ tag : 'nomarkup',
							description: 'Ignore markup',
							symbol : { character : '', font : 'webhostinghub glyphs', color : 'F00' },
							category : { name : 'meta', index : 1 },
							noMarkup : true
		},
		{ tag : 'youtube',
							description: 'Embed a YouTube video',
							symbol : { character : '', font : 'webhostinghub glyphs', color : 'FF2209' },
							category : { name : 'embed', index : 3 },
							noClosingTag : true,
							block : true,
							noText : true,
							parameters : { elementType : 'iframe', style : { aspectRatio : '560 / 315', width : 'calc(100% - 0.2em)', border : '0.1em inset #333' }, title : 'YouTube video player', frameborder : '0', allow : 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture', allowfullscreen : 'true' }, variables : { link : 'link' },
		},
		{ tag : 'soundcloud',
							description: 'Embed a SoundCloud track',
							symbol : { character : '', font : 'webhostinghub glyphs', color : 'F50' },
							category : { name : 'embed', index : 4 },
							noClosingTag : true,
							block : true,
							noText : true,
							parameters : { elementType : 'iframe', style : { minHeight : '300', width : 'calc(100% - 0.2em)', border : '0.1em inset #333' }, title : 'SoundCloud Player', scrolling : 'no', frameborder : '0', allow : 'autoplay;', allowfullscreen : 'true' }, variables : { link : 'link' },
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
		text : `[c][size size=300]SuperText Markup Help[/size]
SuperText Markup is similar to BBCode, with a few important differences.

Just like BBCode, tags are used to format text. These tags can change the color, size, font, alignment, and more.

[hr width=75% fg=f00]

Tags are created by putting brackets around the tag name. For example, to create a [b fg=0bb]b[/b] tag for bold text:
[iquote][b fg=f55 nomarkup][[/b][color fg=0bb]b[/color][b fg=f55 nomarkup]][/b][/iquote]

To terminate the bold formatting, add another tag with a slash in it:
[iquote][b fg=f55 nomarkup][/[/b][color fg=0bb]b[/color][b fg=f55 nomarkup]][/b][/iquote]

When put together:
[iquote][b fg=f55 nomarkup][[/b][color fg=0bb]b[/color][b fg=f55 nomarkup]][/b]Sample Text[b fg=f55 nomarkup][/[/b][color fg=0bb]b[/color][b fg=f55 nomarkup]][/b][/iquote]
Becomes:
[iquote][b]Sample Text[/b][/iquote]

[hr width=75% fg=0f0]

Unlike BBCode, many tags do not have to be correctly nested to work properly:
[iquote][b nomarkup fg=f55][u][/b]Sa[b nomarkup fg=5f5][s][/b]mple [b nomarkup fg=33f][i][/b]T[b nomarkup fg=f55][/u][/b]e[b nomarkup fg=5f5][/s][/b]xt[b nomarkup fg=33f][/i][/b][/iquote]
Becomes:
[iquote][u]Sa[s]mple [i]T[/u]e[/s]xt[/i][/iquote]

The only tags that require correct nesting are the [b fg=08b]block[/b] tags:
[c][iquote font='nabfonts monospace']:_-ADDBLOCKTAGSHERE-_:[/iquote][/c]
All buttons for [b fg=08b]block[/b] tags have a [b fg=08b]colored outline[/b] around them.

[hr width=75% fg=00f]

Some tags, like [b fg=F55 nomarkup][hr][/b], [b fg=F55 nomarkup][img][/b], and [b fg=F55 nomarkup][youtube][/b], do not need a closing tag.

[hr width=75% fg=ff0]

SuperText also features global options that can be applied to any tag. These include:
[l]
[ul]
[li][b fg=f55]font[/b] (Typeface [sub]Can be the name of a specific font, or a generic CSS font-family. Put the name in quotes if there is a space in it![/sub])[/li]
[li][b fg=f55]size[/b] (Font size, given as a percentage)[/li]
[li][b fg=f55]nomarkup[/b] (SuperText will not process any markup inside this tag)[/li]
[li][b fg=f55]fg[/b] (Foreground color, given in hexadecimal)[/li]
[li][b fg=f55]bg[/b] (Background color, given in hexadecimal)[/li]
[/ul][/l]

Hexadecimal colors can be given in the following formats:
[size size=65][b fg=f55]R = Red[/b], [b fg=5f5]G = Green[/b], [b fg=55f]B = Blue[/b], [b fg=444]A = Alpha[/b], [b fg=888]L = Luminosity[/b]
(Alpha values cause problems and thus are ignored, but the rest of the color will still work)[/size]
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
[iquote][b nomarkup][b [/b][b nomarkup fg=c44]font='monospace' fg=2d2 bg=22c[/b][b nomarkup]]Sam[i [/b][b nomarkup fg=c44]fg=e44 nomarkup[/b][b nomarkup]]pl[u]e T[/u]e[/i]xt[/b][/b][/iquote]
Becomes:
[iquote][b font='monospace' fg=2d2 bg=22c]Sam[i fg=e44 nomarkup]pl[u]e T[/u]e[/i]xt[/b][/iquote]

[hr width=75% fg=0ff]

[color fg=c44 nomarkup][hide][/color] tags can be used to hide a portion of a message until a button is clicked:

[hide]Surprise![/hide]

You can also change the text on the button, like this:

[iquote][nomarkup][hide [/nomarkup][nomarkup fg=c44]text='Zeeky Boogy Doog!'[/nomarkup][nomarkup]]BOOM[/hide][/nomarkup][/iquote]

[hide text='Zeeky Boogy Doog!']BOOM[/hide]

[hr width=75% fg=a0f]

Finally, all tags and parameters in SuperText Markup are case-insensitive.

[hr width=75% fg=777]

Happy formatting!

[/c]`,
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

superTextMarkupData.categories.smileyFaces = [{ tag : 'smiley', description : 'Add a smiley face', noClosingTag : true, symbol : { character : superTextMarkupData.smileyFaces[0].character, font : superTextMarkupData.smileyFaces[0].font, color : superTextMarkupData.smileyFaces[0].color } }]
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

// Automatically add all block tags to the help screen
superTextMarkupData.instructions.text = superTextMarkupData.instructions.text.split(':_-ADDBLOCKTAGSHERE-_:')
for(let i = superTextMarkupData.markup.length - 1; i >= 0; i--) {
	if(!superTextMarkupData.markup[i].hasOwnProperty('block') || superTextMarkupData.markup[i].block !== true) continue
	superTextMarkupData.instructions.text.splice(superTextMarkupData.instructions.text.length - 1, 0, (superTextMarkupData.instructions.text.length == 2 ? '' : ', ') + '[b fg=f55 nomarkup][[/b][b fg=0bb nomarkup]' + superTextMarkupData.markup[i].tag + '[/b][b fg=f55 nomarkup]][/b]')
}
superTextMarkupData.instructions.text[superTextMarkupData.instructions.text.length - 2] = superTextMarkupData.instructions.text[superTextMarkupData.instructions.text.length - 2].replace(', ', ', and ')
superTextMarkupData.instructions.text = superTextMarkupData.instructions.text.join('')


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

	for(i = 0; i < parameters.length; i++) {
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
								if(output.style.hasOwnProperty(styleKey)) {
									output.style[styleKey] += ' ' + parameters[i].parameters.parameters.style[styleKey]
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
						output[variable] = variables[parameters[i].parameters.variables[variable]]
						if(parameters[i].parameters.tag == 'hr' && variable == 'width') {
							output[variable] = clamp(output[variable], 1, 100) + '%'
						}
/*
// Pretty sure this was only used for hackish nonsense and can be removed...
					} else {
						output[variable] = output.text
*/
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

					case 'fg':
					case 'color':
					case 'fgcolor':
						if(tagBlacklist.includes('color')) continue
						temp = 'color'
						if(output.elementType == 'hr') {
							temp = 'borderColor'
						}
						output.style[temp] = '#' + readColor(variables[key]).substring(0, 6)	// Use substring to cut off any alpha values from the end
						break

					case 'bg':
					case 'bgcolor':
					case 'highlight':
						if(tagBlacklist.includes('color')) continue
						temp = 'backgroundColor'
						output.style[temp] = '#' + readColor(variables[key]).substring(0, 6)	// Use substring to cut off any alpha values from the end
						break

					case 'font':
					case 'fontfamily':
					case 'font-family':
					case 'type':
						if(variables[key].trim() == '') continue
						if(tagBlacklist.includes('font')) continue
						temp = 'fontFamily'
						let newFont = variables[key].toLowerCase()
						if(typeof(customFonts) !== 'undefined') {
							switch(newFont) {
								case 'serif':
								case 'sans-serif':
								case 'cursive':
								case 'fantasy':
								case 'monospace':
									newFont = '\'nabfonts ' + newFont + '\', ' + newFont
									break
								default:
									if(getFontData(newFont) === false) newFont = 'nabfonts sans-serif'
							}
						}
						output.style[temp] = "'" + newFont + "'"
						break

					case 'size':
						if(tagBlacklist.includes('size')) continue
					case 'fontsize':
						if((parameters[i].hasOwnProperty('doNotRender')) && parameters[i].doNotRender === true) break	// If this is a nested tag, DO NOT apply a fontSize - it is already applied!
						temp = 'fontSize'
						if(typeof(baseFontSize) === 'number') {
							output.style[temp] = 'min(calc(6rem * ' + baseFontSize + '), ' + ((clamp(parseInt(variables[key].replace(/\D/g, '')), 25, 500) / 100)).toString() + 'em)'
						} else {
							output.style[temp] = 'min(6rem, ' + ((clamp(parseInt(variables[key].replace(/\D/g, '')), 25, 500) / 100)).toString() + 'em)'
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

	let tagName = parameters.shift()
	if(tagBlacklist.includes(tagName)) return false
	let tagData = superTextMarkupGetTagData(tagName.toLowerCase())
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
		if(tag == superTextMarkupData.smileyFaces[i].text) return superTextMarkupData.smileyFaces[i]
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

function superTextMarkupGenerateElements(inputText, defaultFontSize, tagBlacklist = [], addSmilies = true, loc = 0, activeMarkups = [], nomarkup = false, recursions = 0) {
	let ignoreNextLineBreak = false

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
				preprocessor[preprocessor.length - 1].children = superTextMarkupGenerateElements(inputText, defaultFontSize, tagBlacklist, addSmilies, loc + 1, activeMarkups, nomarkup, recursions + 1)
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

function superTextMarkupAddMarkupToTextField(textAreaID, tag, variables = {}, additionalText = '') {
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

/*
// This got annoying really fast
	if((tag.hasOwnProperty('nest') && tag.nest === true) || (tag.hasOwnProperty('noText') && tag.noText === true)) {
		if(!(selectionStart > 0 && textArea.value[selectionStart - 1] == ']')) {
			openingTag = '\n' + openingTag
		}
	}
*/

	let selectedText = additionalText + ''

	if(selectionStart != selectionEnd) {
		// Something is selected
		selectedText = textArea.value.substring(selectionStart, selectionEnd)
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
		text = 'http://' + text
		inputData.url = text
	}

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

function superTextMarkupPickFont(inputData, data) {
	let textAreaID = data[0]
	let tagInfo = data[1]

	superTextMarkupAddMarkupToTextField(textAreaID, tagInfo, inputData)
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
	for(let i = 0; i < tagBlacklist.length; i++) {
		tagBlacklist[i] = tagBlacklist[i].toLowerCase()
	}
	tagBlacklist.sort()		// Used for the help menu. Makes things more readable

	reRenderTimeout = 500 

	// Spell check doesn't have good browser support right now, and it slows down the page like crazy.
	// If that ever changes, change this to true and spell check will work again
	let allowSpellCheck = false

	renderElement.style.whiteSpace = 'pre'

	superTextMarkupEditorCount++

	let editorID = editorElement.id + superTextMarkupEditorCount.toString()

	let textAreaID = editorID + 'Source'
	let formatDivID = textAreaID + 'Formatting'
	let outputElement = { elementType : 'div', style : { width : '100%' }, children : [] }
	let emGridSpacing = 0.1
	let formatButtons = { elementType : 'div', style : { display : 'grid', gridGap : emGridSpacing + 'em ' + emGridSpacing + 'em', margin : '0 auto', padding : emGridSpacing + 'em', fontSize : '1.5em' }, children : [] }
	let buttonShadow = '0.025em 0.025em #0003, -0.025em 0.025em #0003, 0.025em -0.025em #0003, -0.025em -0.025em #0003'

	clearElement(editorElement)

	let categoryOrder = [	// This array configures the arrangement of the buttons. Each array is a row, and it's contents are the categories it will contain
		[ 'formatting', 'separators' ],
		[ 'alignment', 'organization', 'control' ],
		[ 'quote', 'embed' ],
		[ 'smileyFaces', 'meta' ],
	]

	// Let's grab any categories that were missed...
	let addedCategories = []
	for(let i = 0; i < categoryOrder.length; i++) {
		for(let h = 0; h < categoryOrder[i].length; h++) {
			if(categoryOrder[i][h] == 'smileyFaces' && addSmilies !== true) {
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
										label : 'Pick Colors',
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
								for(let x = 0; x < customFonts.fontNames.length; x++) {
									fontPrompts.push({ label : customFonts.fontNames[x], value : customFonts.fontNames[x] })
								}
/*
								onclickAction = ()=>{
									createModalForm({
										elementToFocusOnAfterClose : textAreaID,
										callback : superTextMarkupPickFont,
										callbackDataArray : [ textAreaID, tagInfo ],
										label : 'Select Font',
										categories : [
											{
												allowDisable : false,
												inputs : [
													{
														type : 'dropdown',
														name : 'font',
														prompts : fontPrompts,
													},
												]
											}
										]
									})
								}
*/
								onclickAction = ()=>{
									createModalForm({
										elementToFocusOnAfterClose : textAreaID,
										callback : superTextMarkupPickFont,
										callbackDataArray : [ textAreaID, tagInfo ],
										label : 'Select Font',
										categories : [
											{
												allowDisable : false,
												inputs : [
													{
														type : 'font',
														name : 'font',
														prompts : [
															{
																default : randomItem('000', '444', '999', 'eee', 'b00', '0b0', '00b', 'bb0', '0bb', 'b0b'),
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
										label : 'Font Size',
										categories : [
											{
												allowDisable : false,
												startDisabled : true,
												inputs : [
													{
														label : 'Percentage',
														type : 'number',
														required : true,
														name : 'size',
														prompts : [
															{
																default : '100',
																min : '25',
																max : '500',
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
									createModalForm({
										elementToFocusOnAfterClose : textAreaID,
										callback : superTextMarkupAddImage,
										callbackDataArray : [ textAreaID, tagInfo ],
										label : 'Image',
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
									createModalForm({
										elementToFocusOnAfterClose : textAreaID,
										callback : superTextMarkupAddURL,
										callbackDataArray : [ textAreaID, tagInfo ],
										label : 'Hyperlink',
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
															},
														],
													},
												]
											},
											{
												allowDisable : true,
												startDisabled : true,
												inputs : [
													{
														label : 'Link Text',
														type : 'text',
														name : 'text',
														prompts : [
															{
																default : 'Link text here',
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
									createModalForm({
										elementToFocusOnAfterClose : textAreaID,
										callback : superTextMarkupAddYouTube,
										callbackDataArray : [ textAreaID, tagInfo ],
										label : 'YouTube Video',
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
																default : 'https://',
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
									createModalForm({
										callback : superTextMarkupAddSoundCloud,
										callbackDataArray : [ textAreaID, tagInfo ],
										label : 'SoundCloud Player',
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

							case 'hide':
								onclickAction = ()=>{
									createModalForm({
										elementToFocusOnAfterClose : textAreaID,
										callback : superTextMarkupAddHide,
										callbackDataArray : [ textAreaID, tagInfo ],
										label : 'Hidden Text',
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
//																default : '',
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
/*
// This part doesn't work right because the blacklist on markup for modals prevents a lot of the formatting necessary for this to be readable
								let disallowedTags = 'None.'
								if(tagBlacklist.length > 0) disallowedTags = '[b fg=f55 nomarkup][' + tagBlacklist.join('][/b], [b fg=f55 nomarkup][') + '][/b]'
								onclickAction = ()=>{
									let testString = 'modalForm' + modalFormCount.toString()
									createModalForm({
										elementToFocusOnAfterClose : textAreaID,
										label : 'SuperText Markup Help',
										cancelButton : false,
										categories : [
											{
												allowDisable : false,
												inputs : [
													{
														label : 'Disallowed tags:\n[b font="nabfonts monospace"]' + disallowedTags + '[/b]\n\n[hr width=75 fg=f90]' + superTextMarkupData.instructions.text
													}
												]
											}
										]
									})
								}
								break
*/
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

						let newCategoryEntry = { elementType : 'button', className : 'superTextMarkupButton', style : { fontSize : (superTextMarkupData.categories[category][j].symbol.hasOwnProperty('size') ? superTextMarkupData.categories[category][j].symbol.size / 100 + 'em' : 'inherit'), cursor : 'pointer', borderRadius : '20%', userSelect : 'none', aspectRatio : '1 / 1', textShadow : buttonShadow }, text : superTextMarkupData.categories[category][j].symbol.character, onclick : onclickAction }
						if(superTextMarkupData.categories[category][j].symbol.hasOwnProperty('font')) newCategoryEntry.style.fontFamily = superTextMarkupData.categories[category][j].symbol.font
						if(superTextMarkupData.categories[category][j].symbol.hasOwnProperty('color')) newCategoryEntry.style.color = '#' + readColor(superTextMarkupData.categories[category][j].symbol.color)
						if(superTextMarkupData.categories[category][j].hasOwnProperty('block') && superTextMarkupData.categories[category][j].block === true) newCategoryEntry.style.boxShadow = 'inset 0px 0px 0.1em 0.1em #08B'

						let tooltip = { elementType : 'div', id : editorID + tagInfo.tag.toLowerCase() + 'Tooltip', style : { zIndex : '999999999', display : 'inline-block', position : 'absolute', transform : 'translateY(calc(-50% + 4.5rem))', pointerEvents : 'none', userSelect : 'none', textAlign : 'center', border : 'outset 0.125em #555', opacity : 0, padding : '0.25em', margin : '0', backgroundColor: '#335', backgroundImage : 'linear-gradient(180deg, #fff0 0%, #fff2 100%)', borderRadius : '.4em', transition : 'opacity 0.25s', fontSize : '1rem', fontFamily : '"nabfonts sans-serif", "sans-serif"' }, text : superTextMarkupData.categories[category][j].description }
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
