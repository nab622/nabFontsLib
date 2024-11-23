#!/usr/bin/env python3





# These strings are used to find/replace in the file name
findString = 'Mesmerize Ul'
replaceString = 'Mesmerize Ultra Light'


# This string will be prepended at the start of the file name
prependString = ''

# This string will be appended at the end of the file name. This is inserted BEFORE the file extension!
appendString = ''













class globalSettings:
	# The higher the number, the lower the process priority will be.
	niceValue = 15

import platform
if platform.system().lower() != 'linux':
	print('This software can only be run on a Linux system! Exiting...')
	exit()
errors = []
versionError = 0
neededDependencies = []

debug = False

# Colors to use for the text output
class colors:
	black		=	"\033[0;30m"
	darkRed		=	"\033[0;31m"
	darkGreen	=	"\033[0;32m"
	brown		=	"\033[0;33m"
	darkBlue	=	"\033[0;34m"
	purple		=	"\033[0;35m"
	darkCyan	=	"\033[0;36m"
	lightGray	=	"\033[0;37m"
	darkGray	=	"\033[1;30m"
	red			=	"\033[1;31m"
	green		=	"\033[1;32m"
	yellow		=	"\033[1;33m"
	blue		=	"\033[1;34m"
	pink		=	"\033[1;35m"
	cyan		=	"\033[1;36m"
	white		=	"\033[1;37m"
	none		=	"\033[0m"
	bold		=	'\033[1m'
	underline	=	'\033[4m'


# Special strings to use for cursor control
class cursorControl:
	up = '\033[1A'
	eraseLine = "\r" + '\033[K'
	eraseRemaining = '\033[K'
	erasePreviousLine = '\033[1A' + "\r" + '\033[K' + '\033[1A'
	eraseNextLine = "\r" + '\033[K' + '\033[1A'


# Used to differentiate different errors and different steps in the debug trace
debugColors = [
	colors.red,
	colors.blue,
	colors.brown,
	colors.cyan,
	colors.yellow,
	colors.purple,
	colors.green
]

fileColors = [
	colors.red,
	colors.blue,
	colors.brown,
	colors.cyan,
	colors.purple,
]

sizeColors = [
	colors.purple,
	colors.green,
	colors.blue,
	colors.yellow,
	colors.red,
	colors.darkRed,
	colors.white
]


if len(errors) > 0:
	i = 0
	while i < len(errors):
		print(errors[i])
		i += 1
	print()
	print('Terminating...')
	exit()


# These modules will be imported below, one at a time
# Lists of [ modulename, dependency ]
# dependency can be numeric (Referring to what version of Python is needed), or a string defining a library to install
importModules = [
[ 'os',					1.0						],
[ 'ast',				2.6						],
[ 'sys',				1.0						],
[ 'copy',				1.0						],
[ 'json',				2.7						],
[ 'math',				1.0						],
[ 'time',				1.0						],
[ 'shutil',				1.0						],
[ 'asyncio',			3.4						],
[ 'datetime',			2.7						],
[ 'traceback',			2.0						],
[ 'subprocess',			2.4						],
[ 'aioconsole',			'aioconsole'			],
]

# Import the required modules. Display errors for any that fail
errors = []
versionError = 0
neededDependencies = []
for module in importModules:
	try:
		globals()[module[0]] = __import__(module[0])
	except Exception:
		errors.append('Could not import Python module: \'' + colors.red + str(module[0]) + colors.none + '\'')
		if isinstance(module[1], str):
			neededDependencies.append(module[1])
		else:
			if module[1] > versionError:
				versionError = module[1]


importModules = [
# from						import					version/dependency
#[ 'urllib.request',			'urlopen',				1.0						],
]

#for module in importModules:
#	try:
##		from .module[0] import module[1]
#		globals()[module[0]] = __import__(module[1])
#	except Exception:
#		errors.append('Could not import Python module: \'' + colors.red + str(module[1]) + colors.none + '\'' + ' from ' + '\'' + colors.yellow + str(module[0]) + colors.none + '\'')
#		if isinstance(module[2], str):
#			neededDependencies.append(module[2])
#		else:
#			if module[2] > versionError:
#				versionError = module[2]

try:
	from urllib.request import urlopen
	import urllib.parse
except:
	# urllib is from Python 2.7
	if 2.7 > versionError:
		versionError = 2.7
	errors.append('Could not import Python module: \'' + colors.red + 'urllib' + colors.none + '\'')


if len(errors) > 0:
	print('')
	i = 0
	while i < len(errors):
		print(errors[i])
		i += 1
	print()
	if len(neededDependencies) > 0:
		if len(neededDependencies) == 1:
			print(colors.yellow + 'Install this library:' + colors.none)
		else:
			print(colors.yellow + 'Install these libraries:' + colors.none)
		print(' ' + colors.red + (colors.none + ' ' + ', ' + colors.red + ' ').join(neededDependencies) + colors.none + ' ')
		print()		# In case there is also a version error, we should have a space here
	if versionError > 0:
		print('Update to ' + colors.red + 'Python ' + str(versionError) + colors.none + ' or greater!')

def checkProgram(inputProgram):
	# This function can only accept a string
	if inputProgram == '':
		# If for any reason we were given nothing, just return True
		return True

	try:
		subprocess.run([ inputProgram ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
		return True
	except:
		return False
	return False

def checkPrograms(inputPrograms, quitOnError = False):
	# inputPrograms must be a list of objects, with the following format:
	#	{ 'program' : 'program', 'packageName' : 'name' }

	programDependencies = []

	for program in inputPrograms:
		if checkProgram(program['program']) == False:
			programDependencies.append(program['packageName'])
			print(colors.green + 'Program not found:' + colors.none + ' \'' + colors.yellow + program['program'] + colors.none + '\'')
	if len(programDependencies) > 0:
		print('')
		if len(programDependencies) == 1:
			print(colors.green + 'Install this program:' + colors.none)
		else:
			print(colors.green + 'Install these programs:' + colors.none)
		print('\'' + colors.red + (colors.none + '\'' + ', ' + colors.red + '\'').join(programDependencies) + colors.none + '\'')
		if quitOnError == True:
			raise SystemExit
			exit()

	return programDependencies

def leadingZeroes(inputNumber, places):
	output = str(inputNumber)
	placesToAdd = places - len(str(math.floor(inputNumber)))
	if placesToAdd > 0:
		return '0' * placesToAdd + output
	else:
		return output

def checkLibrary(inputLibrary):
	# This function can only accept a string
	try:
		output = subprocess.run( [ 'ldconfig', '-p' ], stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, encoding='utf8')
		output = output.stdout.split('\n')

		i = 0
		while i < len(output):
			output[i] = output[i].strip().split('.')[0]
			if output[i].find(inputLibrary) >= 0:
				return True
			i += 1
	except:
		return False
	return False

def checkLibraries(inputLibraries, quitOnError = False):
	# This function can accept a string or a list

	libraryDependencies = []

	if not isinstance(inputLibraries, list):
		inputLibraries = [ inputLibraries ]

	for library in inputLibraries:
		if checkLibrary(library) == False:
			libraryDependencies.append(library)
			print(colors.green + 'Library not found:' + colors.none + ' \'' + colors.yellow + library + colors.none + '\'')
	if len(libraryDependencies) > 0:
		print('')
		if len(libraryDependencies) == 1:
			print(colors.green + 'Install this library:' + colors.none)
		else:
			print(colors.green + 'Install these libraries:' + colors.none)
		print('\'' + colors.red + (colors.none + '\'' + ', ' + colors.red + '\'').join(libraryDependencies) + colors.none + '\'')
		if quitOnError == True:
			raise SystemExit
			exit()
	return libraryDependencies


errors += checkPrograms([
							{ 'program' : 'ffmpeg',		'packageName' : 'ffmpeg'		},
						])


if len(errors) > 0:
	raise SystemExit
	exit()


def printDebug(*args):
	global debugColors

	messages = args
	i = 0
	while i < len(messages):
		print(debugColors[i % len(debugColors)])
		print(messages[i])
		print(colors.none)
		i += 1

def getFileExtension(inputFile):
	if not '.' in inputFile:
		return inputFile
	temp = inputFile.rsplit('.', 1)
	return temp[-1]

def removeFileExtension(inputFile):
	if not '.' in inputFile:
		return inputFile
	temp = inputFile.rsplit('.', 1)
	return temp[0]

def makeFileSafeName(inputName):
	# Remove invalid characters for Windows machines so we don't have issues when serving up files to them...
	inputName = inputName.replace(":", " - ")
	inputName = inputName.replace('"', "'")
	inputName = inputName.replace("\\", "")
	inputName = inputName.replace('?', "")
	inputName = inputName.replace('*', "")
	inputName = inputName.replace("<", "")
	inputName = inputName.replace(">", "")
	inputName = inputName.replace('|', "")

	# Remove any double spaces that might have been added by something else...
	inputName = inputName.replace('  ', ' ')
	return inputName

async def makeDirectory(directory, removeFileName = True):
	temp = directory
	if removeFileName == True:
		# In case we were also given a file name, cut out the file name. We just need to create directories
		temp = temp.split('/')
		if '.' in temp[len(temp) - 1][1:]:
			temp.pop()
		temp = '/'.join(temp)
		temp = makeFileSafeName(temp)

	if not os.path.exists(temp):
		pathlib.Path(temp).mkdir(parents=True, exist_ok=True)
		if not os.path.exists(temp):
			await displayError(colors.red + 'Error: ' + colors.yellow + 'Could not create path: ' + colors.purple + "'" + colors.brown + temp + colors.purple + "'")

def getFfprobeData(inputFile, durationData = {}):
	if not durationData:
		durationData = getDurationData(inputFile)

	if isinstance(inputFile, list):
		inputFile = 'concat:' + '|'.join(inputFile)

	ffprobeCommand = ['nice', '-n', str(globalSettings.niceValue),
	'ffprobe' ] + setDuration(durationData) + [
	'-v', 'quiet',
	'-print_format', 'json',
	'-show_format',
	'-show_streams',
	inputFile
	]

#	print(colors.brown)
#	print(ffprobeCommand)
#	print(colors.none)

	return json.loads(subprocess.check_output(ffprobeCommand))

def getDurationData(inputFile):
	fileSize = 0
	if isinstance(inputFile, list):
		i = 0
		while i < len(inputFile):
			fileSize += os.path.getsize(inputFile[i])
			i += 1
		inputFile = 'concat:' + '|'.join(inputFile)
	else:
		fileSize = os.path.getsize(inputFile)

	# This value must be AT LEAST 32
	if fileSize < 32:
		fileSize = 32

	ffprobeCommand = ['nice', '-n', str(globalSettings.niceValue),
	'ffprobe',
	'-probesize', str(int(fileSize)),
	'-i', inputFile,
	'-v', 'quiet',
	'-print_format', 'json',
	'-show_format',
	'-show_streams',
	]

#	print(colors.pink)
#	print(ffprobeCommand)
#	print(colors.none)

	tempInfo = json.loads(subprocess.check_output(ffprobeCommand))

	duration = 0
	i = 0
	while i < len(tempInfo['streams']):
		temp = getDictValue(tempInfo['streams'][i], 'duration')
		if isinstance(temp, str):
			# isdigit is finnicky.
			if temp.replace('.','',1).isdigit():
				temp = float(temp)
			else:
				temp = 0
		if temp > duration:
			duration = temp
		i += 1

	return { 'duration' : duration, 'fileSize' : fileSize }

def getDictValue(data, key):
	if key in data:
		return data[key]
	return ''

def quoteSpacesInArray(inputArray):
	outputArray = copy.deepcopy(inputArray)
	i = 0
	while i < len(outputArray):
		outputArray[i] = quoteSpaces(outputArray[i])
		i += 1
	return outputArray

def quoteSpaces(inputString):
	if ' ' in inputString:
		return '\'' + inputString + '\''
	return inputString

def setDuration(inputData):
	return [
	# This value is given in microseconds. The ENTIRE VIDEO must be analyzed
#	'-analyzeduration', str(int(inputData['duration'] * 1000000)),
	'-analyzeduration', str(99999999 * 1000000),	# Duration has a chance of being reported wrong. Force an insane value here, make FFmpeg check *everything*

	# This value is given in bytes
	'-probesize', str(int(inputData['fileSize']))
	]




def changeFilenamesInFolder(inputDirectory, folderList, findString, replaceString, prependString, appendString):
	global episodeStartCount

	failures = []

	count = 0
	for inputPath in folderList:
		if not os.path.isfile(inputDirectory + '/' + inputPath):
			#Process subdirectories!
			print(colors.yellow + 'ENTERING: ' + colors.red + inputPath + colors.none)
			newList = os.listdir(inputDirectory + '/' + inputPath)
			newList.sort()
			changeFilenamesInFolder(inputDirectory + '/' + inputPath, newList, findString, replaceString, prependString, appendString)
			continue

		tempPath = inputPath.split('.')
		fileExtension = tempPath.pop()
		tempPath = '.'.join(tempPath)

		if fileExtension.upper() == 'PY':
			continue
			print('--------------------------------------------------------------')
			print(colors.yellow + 'Skipping Python file: ' + colors.blue + inputPath + colors.yellow + '...' + colors.none)
			
			continue

		if findString in tempPath:
			print('--------------------------------------------------------------')
			print(colors.yellow + 'Found path: ' + colors.blue + inputPath + colors.yellow + '...' + colors.none)
			newPath = prependString + tempPath.replace(findString, replaceString) + appendString + '.' + fileExtension
			print(colors.yellow + 'CHANGING TO:   ' + colors.green + newPath + colors.none)
			os.rename(inputDirectory + '/' + tempPath + '.' + fileExtension, inputDirectory + '/' + newPath)
			count += 1
		else:
			continue
			print(colors.yellow + 'No match!' + colors.none)
	print('--------------------------------------------------------------')

	print('Done!')
	print()
	print('Made ' + colors.white + str(count) + colors.none + ' changes.')
	print()



###########################################################################################################################
###########################################################################################################################
###########################################################################################################################
###########################################################################################################################


input(colors.yellow + 'Replacing ' + colors.cyan + '"' + colors.red + findString + colors.cyan + '"' + colors.yellow + ' with ' + colors.green + prependString + colors.cyan + '"' + colors.red + replaceString + colors.cyan + '"' + colors.green + appendString + colors.yellow + ', is this correct? Press ' + colors.cyan + '[' + colors.darkRed + 'ENTER' + colors.cyan + ']' + colors.yellow + ' to continue.' + colors.none)
print()
input(colors.brown + 'Are you ' + colors.red + 'ABSOLUTELY' + colors.brown + ' SURE? There is no going back!  Press ' + colors.cyan + '[' + colors.darkRed + 'ENTER' + colors.cyan + ']' + colors.brown + ' to continue.' + colors.none)
print()
print(colors.cyan + '----------------------------------------------------------------------------------------' + colors.none)
print()

inputDirectory = os.getcwd()	# Use the current folder
episodeStartCount = 1	# Start at this episode number


folderList = os.listdir(inputDirectory)
folderList.sort()
changeFilenamesInFolder(inputDirectory, folderList, findString, replaceString, prependString, appendString)

print()
print(colors.green + 'Done with everything!' + colors.none)
