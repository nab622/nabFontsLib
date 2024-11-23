#!/usr/bin/env python3

import os, math, json


fontsLibFile = 'js/nabFonts.js'


# Accepted file extensions
fontFileExtensions = [ 'otf', 'eot', 'woff', 'woff2', 'ttf', 'svg' ]
instructionFileExtensions = [ 'png', 'gif', 'jpg', 'jpeg', 'webp', 'bmp', 'pdf' ]	# pdf is not actually usable, but having this here will trigger errors if a pdf is seen and not referenced


# Each of these needs to be filtered. We don't need false positive results from them
ignoreList = [
	'/adobeblank.otf',		# This must NEVER be displayed, it is used as a debug thing only
	'/license.pdf',			# This will ignore the license for the Typodermic fonts
	'/opendyslexic.otf',	# This is a variable weight font. It is good to have handy, but it is pointless when defining fonts for use on the web or in a collection
	'WebHostingHub Glyphs Index',		# WebHostingHub Glyphs has it's own interface included that indexes all of the symbols. It is included in a subfolder within the webHostinHub Glyphs folder

	'_Aenigma Fonts/Unused/',		# A bunch of these are old versions that don't matter. Be sure to exclude them

	'Star Jedi/sample003.jpg',			# Star Jedi has a bunch of sample images that are not instructions files
	'Star Jedi/starjedi hollow sample.jpg',			# Star Jedi has a bunch of sample images that are not instructions files
	'Star Jedi/starjedi sample.jpg',			# Star Jedi has a bunch of sample images that are not instructions files
	'Star Jedi Logo/logodoubleline samples.jpg',			# Star Jedi has a bunch of sample images that are not instructions files
	'Star Jedi Logo/logomonoline samples.jpg',			# Star Jedi has a bunch of sample images that are not instructions files
	'Star Jedi Outline/Star Jedi Outline sample.jpg',			# Star Jedi has a bunch of sample images that are not instructions files
	'Star Jedi Special Edition/stjedise sample.jpg',			# Star Jedi has a bunch of sample images that are not instructions files

	'libre barcode',			# Libre barcode generates a bunch of stuff. Fix that

	' Variable ',			# Disregard variable font weights (Make sure there's a space around the word so it doesn't match everything)


	# The following items apply to instruction files only
	'Head-Ding-Chart.gif',
	'Skull Capz.gif',

	'Segment16C.jpg',
	'ROBOTECH GP.png',
	'LOC_startrek_font.jpg',
	'qualitype-doc.pdf',
]



# Colors to use for the text output
class colors:
	black = "\033[0;30m"
	darkRed = "\033[0;31m"
	darkGreen = "\033[0;32m"
	brown = "\033[0;33m"
	darkBlue = "\033[0;34m"
	purple = "\033[0;35m"
	darkCyan = "\033[0;36m"
	lightGray = "\033[0;37m"
	darkGray = "\033[1;30m"
	red = "\033[1;31m"
	green = "\033[1;32m"
	yellow = "\033[1;33m"
	blue = "\033[1;34m"
	pink = "\033[1;35m"
	cyan = "\033[1;36m"
	white = "\033[1;37m"
	none = "\033[0m"
	bold = '\033[1m'
	underline = '\033[4m'


pathColors = [ colors.yellow, colors.purple, colors.darkGreen, colors.pink ]
fontColor = colors.darkBlue


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


i = 0
while i < len(ignoreList):
	ignoreList[i] = ignoreList[i].lower()
	i += 1


def checkIgnoreList(fontPath):
	fontPath = fontPath.lower()
	i = 0
	while i < len(ignoreList):
		if ignoreList[i] in fontPath:
			return True
		i += 1
	return False

def colorizePath(inputPath):
	output = ''
	slashColor = colors.darkGray

	temp = inputPath.split('/')
	fontName = temp.pop()
	i = 0
	while i < len(temp):
		output += pathColors[i % len(pathColors)] + temp[i] + slashColor + '/'
		i += 1
	output += fontColor + fontName

	output += colors.none
	return output

def pluralize(number, singular, plural):
	if number == 1:
		return singular
	return plural

def checkInstructionsFiles(inputList, instructionFileList):
	output = []
	for fontData in inputList:
		if 'instruction' in fontData:
			for instruction in inputList['instruction']:
				if not fontsPath + '/' + instruction in instructionFileList:
					output.append([ fontParameters['name'], fontsPath + '/' + instruction ])

	output.reverse()

	if len(output) == 0:
		print(colors.green + 'None!')
	else:
		for outputItem in output:
			print(colors.darkRed + '> ' + colors.yellow + outputItem[0] + ' missing file: ' + colorizePath(outputItem[1]) )
		print(colors.white + str(len(output)) + colors.brown + ' missing instruction files.')
	print(colors.none + '\n\n')


def checkForInvalidFontName(fontName):
	temp = fontName.split('/').pop().split('.')
	if len(temp) < 2:
		return True
	return False


def printMissingData(inputList1, inputList2):
	output = []
	i = 0
	while i < len(inputList1):
		if checkForInvalidFontName(inputList1[i]):
			i += 1
			continue
		if not inputList1[i] in inputList2 and not checkIgnoreList(inputList1[i].lower()):
			output.append(inputList1[i])
		i += 1

	output.reverse()

	i = 0
	while i < len(output):
		print(colors.darkRed + '> ' + colorizePath(output[i]))
		i += 1
	if len(output) == 0:
		print(colors.green + 'None!')
	else:
		print(colors.white + str(len(output)) + colors.brown + pluralize(len(output), ' discrepancy.', ' discrepancies.'))
	print(colors.none + '\n\n')

def printDuplicateData(inputData):
	duplicates = []

	caseInsensitive = []
	i = 0
	while i < len(inputData):
		caseInsensitive.append(inputData[i].lower())
		i += 1

	i = 0
	while i < len(caseInsensitive):
		if checkForInvalidFontName(caseInsensitive[i]):
			i += 1
			continue
		j = 0
		while j < len(caseInsensitive):
			if j == i:
				j += 1
				continue
			match = False
			for ignoreItem in ignoreList:
				if caseInsensitive[i].find(ignoreItem) >= 0:
					match = True
					break
			if not match == False:
				i += 1
				break
			if caseInsensitive[i] == caseInsensitive[j] and not inputData[i] in duplicates:
				duplicates.append(inputData[i])
			j += 1
		i += 1

	duplicates.reverse()

	i = 0
	if len(duplicates) == 0:
		print(colors.green + 'None!')
	else:
		while i < len(duplicates):
			print(colors.darkRed + '> ' + colorizePath(duplicates[i]))
			i += 1
		print(colors.white + str(len(duplicates)) + colors.brown + ' duplicates.')
	print(colors.none + '\n\n')

def readFile(filename):
	with open(filename, 'r') as f:
		contents = f.read()
	return contents


fontsLibFileContents = readFile(fontsLibFile)


# Get the fonts path from the JS file
fontsPath = fontsLibFileContents.split('customFontPath = ')[1]
fontsPath = fontsPath.split('\n')[0]
fontsPath = fontsPath.split('//')[0].strip()
fontsPath = fontsPath[1:-1]		# Remove quotes

try:
	fontsLibFileContents = fontsLibFileContents.split('/* PYTHON START READ POINT */')[1]
	fontsLibFileContents = fontsLibFileContents.split('/* PYTHON STOP READ POINT */')[0]
	fontsLibFileContents = '[' + fontsLibFileContents + ']'
except:
	print('Could not find Python delimiters in \'' + fontsLibFile + '\'!')
	exit()


# Remove comments
fontsLibFileContents = fontsLibFileContents.split('\n')
i = 0
while i < len(fontsLibFileContents):
	if fontsLibFileContents[i][0:2] == '//':
		fontsLibFileContents[i] = ''
	i += 1
fontsLibFileContents = '\n'.join(fontsLibFileContents)
fontsLibFileContents = fontsLibFileContents.split('/*')
i = 0
while i < len(fontsLibFileContents):
	temp = fontsLibFileContents[i].split('*/', 1)
	fontsLibFileContents[i] = temp[len(temp) - 1]
	i += 1
fontsLibFileContents = ''.join(fontsLibFileContents)


'''
# Fix customFontPath
fontsLibFileContents = fontsLibFileContents.replace(' customFontPath', 'customFontPath')
fontsLibFileContents = fontsLibFileContents.replace('customFontPath ', 'customFontPath')
fontsLibFileContents = fontsLibFileContents.replace('+customFontPath+ ', '+customFontPath+')
fontsLibFileContents = fontsLibFileContents.replace(' +customFontPath+', '+customFontPath+')
fontsLibFileContents = fontsLibFileContents.replace('"+customFontPath+"', fontsPath)

#fontsLibFileContents = fontsLibFileContents.replace(' customFontPath', '"fontsPath"')

fontsLibFileContents = fontsLibFileContents.replace(',\n', '')			# Remove tailing commas
fontsLibFileContents = fontsLibFileContents.replace('",]\n', '"]')		# Remove tailing commas
fontsLibFileContents = fontsLibFileContents.replace('", ]\n', '"]')		# Remove tailing commas
fontsLibFileContents = fontsLibFileContents.replace('",  ]\n', '"]')	# Remove tailing commas
fontsLibFileContents = fontsLibFileContents.replace('	', '')	# Remove tabs

fontsLibFileContents = fontsLibFileContents.replace('\nname:', ',"name":')	# THIS MUST BE DONE BEFORE NEWLINE REMOVAL!!

fontsLibFileContents = fontsLibFileContents.replace('\n', '')	# Remove newlines
fontsLibFileContents = fontsLibFileContents.replace('}{', '},{')	# Fix missing commas

fontsLibFileContents = fontsLibFileContents.replace('authors:', ',"authors":')
fontsLibFileContents = fontsLibFileContents.replace('variants:', ',"variants":')
fontsLibFileContents = fontsLibFileContents.replace('path:', ',"path":')
fontsLibFileContents = fontsLibFileContents.replace('style:', ',"style":')
fontsLibFileContents = fontsLibFileContents.replace('weight:', ',"weight":')
fontsLibFileContents = fontsLibFileContents.replace('license:', ',"license":')
fontsLibFileContents = fontsLibFileContents.replace('tags:', ',"tags":')
fontsLibFileContents = fontsLibFileContents.replace('instructions:', ',"instructions":')

fontsLibFileContents = fontsLibFileContents.replace('{,', '{')	# Fix missing commas
fontsLibFileContents = fontsLibFileContents.replace('[,', '[')	# Fix missing commas
'''


def printDataForDebug(start, end, errorPoint):
	# ==========================================
	# This bit is used for debugging
#	start = 0
#	end = 0
	output = ''
	if end > 0:
		while start < len(fontsLibFileContents) and start <= end:
			if start + 15 > errorPoint and start - 15 < errorPoint:
				if start + 5 > errorPoint and start - 5 < errorPoint:
					output += colors.red
				else:
					output += colors.yellow
			else:
				output += colors.none
			output += fontsLibFileContents[start]
			start += 1
		print('Total characters: ' + str(len(fontsLibFileContents)) + '\n\n' + output + '\n\n')
	# ==========================================



from functools import cmp_to_key

def compareFontTags(a, b):
	a = a.lower()
	b = b.lower()

	if a == 'sans-serif':
		return -1
	if a == 'serif':
		return -1
	if a == 'symbols only':
		return -1

	if b == 'sans-serif':
		return 1
	if b == 'serif':
		return 1
	if b == 'symbols only':
		return 1

	if a < b:
		return -1
	if a > b:
		return 1
	return 0

def compareAnythingInLowercase(a, b):
	a = a.lower()
	b = b.lower()

	if a < b:
		return -1
	if a > b:
		return 1
	return 0

def compareNamesInLowercase(a, b):
	x = a['name'].lower()
	y = b['name'].lower()

	if x < y:
		return -1
	if x > y:
		return 1
	return 0

def convertRomanNumeralsToInt(inputString):
	# This function parses a string of Roman Numerals into an integer
	# If the string is not a valid Roman numeral, it will return False

	inputString = inputString.strip()
	value = 0

	if not isinstance(inputString, str):
		return False

	if not inputString.isupper():
		# Roman numerals must be upper case!
		return False

	i = 0	# Index of romanNumerals
	j = 0	# Index of inputString
	while i < len(romanNumerals) and j < len(inputString):
		digitRepeats = 0
		digitLength = len(romanNumerals[i]['digit'])
		while j + digitLength <= len(inputString) and romanNumerals[i]['digit'] == inputString[j:j + digitLength]:
			digitRepeats += 1
			if digitRepeats > 3:
				return False
			value += romanNumerals[i]['value']
			j += digitLength
		i += 1

	if j < len(inputString):
		return False

	return value

def sortFontsByName(a, b):
	x = a['name'].strip().split(' ')
	y = b['name'].strip().split(' ')

	temp = ''

	i = -1

	while i + 1 < len(x) and i + 1 < len(y):
		i += 1

		if i > 1:	# Only run this after the first word in a font name
			# Check both for roman numerals
			temp = convertRomanNumeralsToInt(x[i])
			if temp != False:
				x[i] = temp

			temp = convertRomanNumeralsToInt(y[i])
			if temp != False:
				y[i] = temp

			x[i] = str(x[i])
			y[i] = str(y[i])

		if x[i].isnumeric() and y[i].isnumeric():
			# If both are numbers, check to see which one is larger
			x[i] = float(x[i])
			y[i] = float(y[i])
			if x[i] > y[i]:
				return 1
			if x[i] < y[i]:
				return -1

		# One might be a number and the other not. Check that
		if isinstance(x[i], float):
			return 1
		if isinstance(y[i], float):
			return -1

		# Both are strings. Compare accordingly
		x[i] = x[i].lower()
		y[i] = y[i].lower()
		stringX = x[i]
		stringY = y[i]

		if i > 0:
			# Detect semi condensed and semi expanded
			if stringX == 'semi' and len(x) > i + 1:
				temp = x[i + 1].lower()
				if temp == 'condensed' or temp == 'expanded':
					stringX = stringX + ' ' + temp
			if stringY == 'semi' and len(y) > i + 1:
				temp = y[i + 1].lower()
				if temp == 'condensed' or temp == 'expanded':
					stringY = stringY + ' ' + temp

			widths = [ 'condensed', 'semi condensed', 'semi expanded', 'expanded' ]
			if stringX in widths and not stringY in widths: return -1
			if not stringX in widths and stringY in widths: return 1

			if stringX == 'condensed' and stringY != 'condensed':
				return -1
			if stringX == 'semi condensed' and stringY != 'semi condensed':
				if stringY != 'condensed':
					return -1
				else:
					return 1
			if stringY == 'condensed':
				return 1
			if stringY == 'semi condensed':
				return 1

			if stringY == 'semi expanded' and stringX != 'semi expanded':
				if stringY != 'expanded':
					return 1
				else:
					return -1
			if stringY == 'expanded' and stringX != 'expanded':
				return -1
			if stringX == 'semi expanded':
				return 1
			if stringX == 'expanded':
				return 1

		if stringX == stringY:
			continue

		if stringX < stringY:
			return -1
		if stringX > stringY:
			return 1

	# Detect a regular font vs condensed, semi condensed, semi expanded and expanded
	stringX = ' '.join(x[i:len(x)]).lower()
	stringY = ' '.join(y[i:len(y)]).lower()

	if stringX == '':
		if stringY == 'condensed' or stringY == 'semi condensed':
			return -1
		if stringY == 'semi expanded' or stringY == 'expanded':
				return 1

	if stringY == '':
		if stringX == 'condensed' or stringX == 'semi condensed':
			return -1
		if stringX == 'semi expanded' or stringX == 'expanded':
				return 1

	if len(x) > len(y):
		return 1
	if len(x) < len(y):
		return -1

	return 0


def clamp(number, minValue, maxValue):
	if number < minValue:
		return minValue
	if number > maxValue:
		return maxValue
	return number

try:
	data = json.loads(fontsLibFileContents)
except Exception as e:
	print('Error parsing JSON data:' + colors.red)
	print(e)
	print(colors.none)
	errorPoint = str(e).split('(char ')[1]
	errorPoint = errorPoint.split(')')[0]
	errorPoint = int(errorPoint)
	start = clamp(errorPoint - 450, 0, errorPoint)
	end = errorPoint + 50
	printDataForDebug(start, end, errorPoint)
	exit()


data.sort(key=cmp_to_key(sortFontsByName))

for fontData in data:
	fontData['tags'].sort(key=cmp_to_key(compareFontTags))
	fontData['authors'].sort(key=cmp_to_key(compareAnythingInLowercase))


JSONFontsList = []
i = 0
while i < len(data):
	j = 0
	while j < len(data[i]['variants']):
		JSONFontsList.append(fontsPath + '/' + data[i]['variants'][j]['path'])
		j += 1
	i += 1
JSONFontsList.sort()



fontFileList = []
instructionFileList = []
for dirpath, dirnames, filenames in os.walk(fontsPath):
	for f in filenames:
		fp = os.path.join(dirpath, f)
		extension = fp.split('.')
		extension = extension[len(extension) - 1].lower()
		if extension in fontFileExtensions:
			fontFileList.append(fp)
		elif extension in instructionFileExtensions:
			instructionFileList.append(fp)
fontFileList.sort()


duplicateTagErrors = []
otherErrors = []
fontsWithInstructionText = []
for fontParameters in data:
	if fontParameters['name'] == '':
		continue
	if 'tags' in fontParameters:
		thisFontTagErrors = []

		tempTags = []
		for i in range(len(fontParameters['tags'])):
			if fontParameters['tags'][i].strip() == '':
				otherErrors.append({'fontName' : fontParameters['name'], 'message' : 'Blank tag found!' })
			elif fontParameters['tags'][i].strip().lower().startswith('weight: ') or fontParameters['tags'][i].strip().lower().startswith('file format: '):
				otherErrors.append({'fontName' : fontParameters['name'], 'message' : 'Forbidden tag found: "' + colors.red + fontParameters['tags'][i] + colors.none + '"'})
			else:
				tempTags.append(fontParameters['tags'][i].lower())

		if len(fontParameters['tags']) < 3 and not 'symbols only' in tempTags:
			otherErrors.append({'fontName' : fontParameters['name'], 'message' : 'Font has less than 3 tags!' })

		if not 'sans-serif' in tempTags and not 'serif' in tempTags and not 'symbols only' in tempTags:
			otherErrors.append({'fontName' : fontParameters['name'], 'message' : 'Font has no serif, sans-serif or \'Symbols Only\' tag!' })
		else:
			if 'sans-serif' in tempTags and 'serif' in tempTags:
				otherErrors.append({'fontName' : fontParameters['name'], 'message' : 'Font has mixed Serif and Sans-Serif tags!' })
			if 'sans-serif' in tempTags and 'symbols only' in tempTags:
				otherErrors.append({'fontName' : fontParameters['name'], 'message' : 'Font has mixed \'Symbols Only\' and Sans-Serif tags!' })
			if 'symbols only' in tempTags and 'serif' in tempTags:
				otherErrors.append({'fontName' : fontParameters['name'], 'message' : 'Font has mixed Serif and \'Symbols Only\' tags!' })

		for i in range(len(tempTags)):
			for j in range(len(tempTags)):
				if j == i:
					continue
				if not tempTags in thisFontTagErrors:
#					print(fontParameters['tags'][i].lower())
					if tempTags[i] == tempTags[j]:
						thisFontTagErrors.append(tempTags)
						duplicateTagErrors.append({'fontName' : fontParameters['name'], 'tag' : fontParameters['tags'][i] })

	if 'instructions' in fontParameters:
		variants = []
		for variant in fontParameters['variants']:
			variants.append(variant['path'])
		fontsWithInstructionText.append({ 'name' : fontParameters['name'], 'paths' : variants })




print(colors.lightGray + 'Duplicate fonts on the hard drive:' + colors.none)
printDuplicateData(fontFileList)



print(colors.lightGray + 'Fonts missing from the hard drive:')
printMissingData(JSONFontsList, fontFileList)



print(colors.lightGray + 'Duplicate fonts in the JSON data:' + colors.none)
printDuplicateData(JSONFontsList)



print(colors.lightGray + 'Fonts missing from the JSON data:')
printMissingData(fontFileList, JSONFontsList)



print(colors.lightGray + 'Fonts missing instruction files:')
checkInstructionsFiles(data, instructionFileList)



print(colors.lightGray + 'Instruction files missing from the JSON data:')
instructionErrors = []
i = 0
ignoreListLowerCase = []
for item in ignoreList:
	ignoreListLowerCase.append(item.lower())

for instructionFile in instructionFileList:
	instructionFileLowerCase = instructionFile.lower()
	match = False
	for ignoreListItem in ignoreListLowerCase:
		if ignoreListItem in instructionFileLowerCase:
			match = True
			break
	if not match == False:
		continue

	instructionFileLowerCase = instructionFileLowerCase.replace(fontsPath + '/', '', 1)
	instructionFileLowerCase = instructionFileLowerCase.split('/')
	instructionFileLowerCase.pop()
	instructionFileLowerCase = '/'.join(instructionFileLowerCase)

	for fontData in fontsWithInstructionText:
		if not match == False:
			break
		for path in fontData['paths']:
			pathLowerCase = path.lower()
			pathLowerCase = pathLowerCase.split('/')
			pathLowerCase.pop()
			pathLowerCase = '/'.join(pathLowerCase)
			match = False
			for ignoreListItem in ignoreListLowerCase:
				if ignoreListItem in pathLowerCase:
					match = True
					break
			if not match == False:
				break

#			print(colors.red, pathLowerCase, colors.green, instructionFileLowerCase, colors.none)
			if pathLowerCase in instructionFileLowerCase:
				match = True
				break
		if not match == False:
			break
	if match == False:
		instructionErrors.append(instructionFile)


if len(instructionErrors) == 0:
	print(colors.green + 'None!')
else:
	for item in instructionErrors:
		print(colorizePath(item))
	print(colors.white + str(len(instructionErrors)) + colors.brown + pluralize(len(instructionErrors), ' discrepancy.', ' discrepancies.'))
print()
print()
print()



print(colors.lightGray + 'Duplicate tags on fonts:')
if len(duplicateTagErrors) == 0:
	print(colors.green + 'None!')
else:
	for error in duplicateTagErrors:
		print(colors.darkRed + '> ' + colors.yellow + error['fontName'] + colors.brown + ' has duplicate tag: ' + colors.cyan + error['tag'])
	print(colors.white + str(len(duplicateTagErrors)) + colors.brown + ' issues.')
print(colors.none + '\n\n')




print(colors.lightGray + 'Other errors:')
if len(otherErrors) == 0:
	print(colors.green + 'None!')
else:
	for error in otherErrors:
		print(colors.darkRed + '> ' + colors.yellow + error['fontName'] + colors.brown + ' has error: ' + colors.cyan + error['message'])
	print(colors.white + str(len(otherErrors)) + colors.brown + ' issues.')
print(colors.none + '\n\n')



print()
print()
print(colors.green + 'Writing sorted font data...' + colors.none)
# Write JSON to the file
f = open("Sorted Output.txt", "w")
json.dump(data, f, indent='\t', separators=(",", ":"))
#f.write(outputData[1:-1])
f.close()

# Reread the data back in so we can remove the unnecessary brackets
f = open("Sorted Output.txt", "r")
fileContents = f.readlines()
f.close()

fileContents.pop(0)
fileContents.pop()
i = 0
while i < len(fileContents):
	fileContents[i] = fileContents[i][1:]
	i += 1

# Write data back without the brackets
f = open("Sorted Output.txt", "w")
f.writelines(fileContents)

print(colors.darkRed + 'Done!' + colors.none)
