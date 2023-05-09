#!/usr/bin/env python3

import os, json


fontsLibFile = 'js/nabFonts.js'


# Accepted file extensions
fontFileExtensions = [ 'otf', 'eot', 'woff', 'woff2', 'ttf', 'svg' ]
instructionFileExtensions = [ 'png', 'gif', 'jpg', 'jpeg', 'webp', 'bmp', 'pdf' ]	# pdf is not actually usable, but having this here will trigger errors if a pdf is seen and not referenced


# Each of these needs to be filtered. We don't need false positive results from them
ignoreList = [
	'/adobeblank.otf',		# This must NEVER be displayed, it is used as a debug thing only
	'/opendyslexic.otf',	# This is a variable weight font. It is good to have handy, but it is pointless when defining fonts for use on the web or in a collection
	'DancingScript-VariableFontWeight.ttf',		# This is a variable font weight. It is good to have handy, but it is pointless when defining fonts for use on the web or in a collection
	'WebHostingHub Glyphs Index',		# WebHostingHub Glyphs has it's own interface included that indexes all of the symbols. It is included in a subfolder within the webHostinHub Glyphs folder

	'_Aenigma Fonts/Unused/',		# A bunch of these are old versions that don't matter. Be sure to exclude them

	'Star Jedi/sample003.jpg',			# Star Jedi has a bunch of sample images that are not instructions files
	'Star Jedi/starjedi hollow sample.jpg',			# Star Jedi has a bunch of sample images that are not instructions files
	'Star Jedi/starjedi sample.jpg',			# Star Jedi has a bunch of sample images that are not instructions files
	'Star Jedi Logo/logodoubleline samples.jpg',			# Star Jedi has a bunch of sample images that are not instructions files
	'Star Jedi Logo/logomonoline samples.jpg',			# Star Jedi has a bunch of sample images that are not instructions files
	'Star Jedi Outline/Star Jedi Outline sample.jpg',			# Star Jedi has a bunch of sample images that are not instructions files
	'Star Jedi Special Edition/stjedise sample.jpg',			# Star Jedi has a bunch of sample images that are not instructions files

	'/Square Unique.ttf',		# Reused for usability's sake. Ignore
	'/Canada 1500',				# Reused for usability's sake. Ignore
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


def printMissingData(inputList1, inputList2):
	output = []
	i = 0
	while i < len(inputList1):
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
		j = 0
		while j < len(caseInsensitive):
			if j == i:
				j += 1
				continue
			if caseInsensitive[i] == caseInsensitive[j] and not inputData[i] in duplicates and not checkIgnoreList(inputData[i]):
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
	fontsLibFileContents[i] = fontsLibFileContents[i].split('//')[0]
	i += 1
fontsLibFileContents = '\n'.join(fontsLibFileContents)
fontsLibFileContents = fontsLibFileContents.split('/*')
i = 0
while i < len(fontsLibFileContents):
	temp = fontsLibFileContents[i].split('*/', 1)
	fontsLibFileContents[i] = temp[len(temp) - 1]
	i += 1
fontsLibFileContents = ''.join(fontsLibFileContents)


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



# ==========================================
# This bit is used for debugging
start = 0
end = 0
output = ''
if end > 0:
	while start < len(fontsLibFileContents) and start <= end:
		output += fontsLibFileContents[start]
		start += 1
	print('Total characters: ' + str(len(fontsLibFileContents)) + '\n\n' + output + '\n\n')
# ==========================================



data = json.loads(fontsLibFileContents)
data.sort(key=lambda x: x['name'], reverse=False)



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
instructionFileJSON = []
for fontParameters in data:
	if 'tags' in fontParameters:
		thisFontTagErrors = []

		tempTags = []
		for i in range(len(fontParameters['tags'])):
			if fontParameters['tags'][i].strip() == '':
				otherErrors.append({'fontName' : fontParameters['name'], 'message' : 'Blank tag found!' })
			else:
				tempTags.append(fontParameters['tags'][i].lower())

		if len(fontParameters['tags']) < 3 and not 'symbol' in tempTags:
			otherErrors.append({'fontName' : fontParameters['name'], 'message' : 'Font has less than 3 tags!' })

		if not 'sans-serif' in tempTags and not 'serif' in tempTags and not 'symbol' in tempTags:
			otherErrors.append({'fontName' : fontParameters['name'], 'message' : 'Font has no serif, sans-serif or symbol tag!' })
		else:
			if 'sans-serif' in tempTags and 'serif' in tempTags:
				otherErrors.append({'fontName' : fontParameters['name'], 'message' : 'Font has mixed Serif and Sans-Serif tags!' })
			if 'sans-serif' in tempTags and 'symbol' in tempTags:
				otherErrors.append({'fontName' : fontParameters['name'], 'message' : 'Font has mixed Symbol and Sans-Serif tags!' })
			if 'symbol' in tempTags and 'serif' in tempTags:
				otherErrors.append({'fontName' : fontParameters['name'], 'message' : 'Font has mixed Serif and Symbol tags!' })

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
		for instruction in fontParameters['instructions']:
			instructionFileJSON.append(instruction)




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
printMissingData(instructionFileList, instructionFileJSON)



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




print(colors.darkRed + 'Done!' + colors.none)
