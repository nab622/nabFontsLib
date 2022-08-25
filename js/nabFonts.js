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

---------------------------------------------------------------------------------

	DISCLAIMER:
	NONE OF THESE FONTS	ARE MADE BY ME. ALL LICENSES THAT I RECIEVED
	WITH THESE FONTS ARE INCLUDED WITH THEM.

	TO THE BEST OF MY KNOWLEDGE, THESE FONTS ARE ALL OFL LICENSED, ARE
	FREEWARE OR ARE PUBLIC DOMAIN. SOME OF THEM MAY NOT HAVE LICENSES
	ATTACHED TO THEM - MY SOURCES INDICATED THESE WERE PUBLIC DOMAIN.
	IF THEY ARE NOT, AND YOU WOULD LIKE THEM REMOVED FROM THIS
	PROJECT, PLEASE	SPEAK UP AND I WILL BE HAPPY TO DO SO!

	I'M JUST A HOBBYIST TRYING TO MAKE SOMETHING NEAT, NO HARM IS
	INTENDED TO ANYONE.	:)
*/



//		------------------------------ HOW TO USE ------------------------------
//		------------------------------ HOW TO USE ------------------------------
//		------------------------------ HOW TO USE ------------------------------

/*
	ALL FONTS FOUND IN FUNCTION:
		getCustomFonts()
	BELOW WILL BE AUTOMATICALLY PARSED WHEN THE WEB PAGE LOADS. IF YOU ADD NEW FONTS, YOU MUST SPECIFY THEM THERE!

		PARSED FONTS WILL BE STORED IN THE FOLLOWING OBJECT:
			customFonts = {
				path : '',			// This is the path to the folder the custom fonts are found in
				tags : [],			// This array contains all the unique tags found in the entire fonts list, with no duplicates
				authors : [],		// This array contains all the unique artists found in the entire fonts list, with no duplicates
				license : [],		// This string is the name of the license for the font
				names : [],			// This array contains all the unique font names found in the entire fonts list, with no duplicates
				fontData : [],		// This is an array of objects, sorted by font name, each object corresponding to a single font's attributes
				errors : []			// This array contains an entry for every font that fails to parse
			}


	TO CHANGE THE FONT IN AN HTML ELEMENT, USE:
		changeFont(destinationElement, font1, font2, font3, ... )
	

	TO USE THE DEFAULT FONTS FROM THIS PACK, SET THE FONT IN AN HTML ELEMENT TO:
		'nabFonts <family>'

			The default CSS font families are:
				serif
				sans-serif
				cursive
				fantasy
				monospace

		So, for instance...
			changeFont(<destinationElement> 'nabFonts monospace')
		...WILL CHANGE THE FONT TO THE PRESELECTED MONOSPACE FONT FROM THIS LIBRARY



	TO GET DATA ON A PARTICULAR FONT, USE:
		getFontData(inputFontName)
			FONT DATA WILL BE RETURNED IN THE FOLLOWING FORMAT:
				{
					name	: inputFontName,
					authors	: [],
					styles	: [],
					weights	: [],
					tags	: [],
				}


	TO GET A FILTERED LIST OF ALL CUSTOM FONTS BY TAG, USE:
		getFilteredFontList(searchTemplate)
			searchTemplate MUST BE AN OBJECT, WITH THE FOLLOWING FORMAT:
				{
					include	:	{
						name	:	nameSearchTerm,
						authors	:	[ 'author', 'names', 'array' ],
						styles	:	[ 'styles', 'array' ],
						weights	:	[ 'weights', 'array' ],
						tags	:	[ 'tags', 'array' ]
					},
					exclude	:	{
						name	:	nameSearchTerm,
						authors	:	[ 'author', 'names', 'array' ],
						styles	:	[ 'styles', 'array' ],
						weights	:	[ 'weights', 'array' ],
						tags	:	[ 'tags', 'array' ]
					}
				}

*/



customFontPath = 'fonts'	//This is the subdirectory the custom fonts are found in, relative to the HTML file loading this library

// Set the default fonts - USE AN EMPTY STRING FOR NONE
serifFont		=	'Minya'
sansSerifFont	=	'Comic Relief'
cursiveFont		=	'Alex Brush'
fantasyFont		=	'Holy Union'	// 'Celtic Knots' and 'New Walt Disney Font' are also good fantasy fonts!
monospaceFont	=	'Cutive Mono'


function getCustomFonts() {
	return [	//	IF YOU ADD ANY ADDITIONAL FONTS, YOU MUST DEFINE THEM AS OBJECTS IN THIS ARRAY.
		{
			name		:	"A Dripping Marker",
			authors		:	[ "Wick van den Belt" ],
			variants	:	[
				{
					path		:	"A Dripping Marker - by Wick van den Belt/A Dripping Marker.ttf",
					style		:	"normal",
					weight		:	"normal"
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Elaborate", "Dripping", "Handwriting", "Marker" ]
		},
		{
			name		:	"Acknowledge",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Acknowledge - by Aenigma Fonts/Acknowledge.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Basic", "Pixelated", "Retro" ]
		},
		{
			name		:	"Airborne GP",
			authors		:	[ "Gustavo Paz L" ],
			variants	:	[
				{
					path		:	"Airborne GP - by Gustavo Paz L/Airborne GP.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'ShareAlike License',
			tags		:	[ "Sans-Serif", "Calligraphy", "Modern", "Thick", "Angular" ]
		},
		{
			name		:	"Audiowide",
			authors		:	[ "Astigmatic One Eye Typographic Institute" ],
			variants	:	[
				{
					path		:	"Audiowide - by Astigmatic One Eye Typographic Institute/Audiowide.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Sans-Serif", "Thick", "Modern" ]
		},
		{
			name		:	"Automatica",
			authors		:	[ "Astigmatic One Eye Typographic Institute" ],
			variants	:	[
				{
					path		:	"Automatica - by Aenigma Fonts/Automatica.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Thick", "Modern" ]
		},
		{
			name		:	"Babelfish Dancing",
			authors		:	[ "Manfred Klein" ],
			variants	:	[
				{
					path		:	"Babelfish - by Manfred Klein/Babelfish Dancing.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Playful" ]
		},
		{
			name		:	"Babelfish Contour",
			authors		:	[ "Manfred Klein" ],
			variants	:	[
				{
					path		:	"Babelfish - by Manfred Klein/Babelfish Contour.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Playful", "Outline", "Thick" ]
		},
		{
			name		:	"Babelfish Zebral",
			authors		:	[ "Manfred Klein" ],
			variants	:	[
				{
					path		:	"Babelfish - by Manfred Klein/Babelfish Zebral.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Playful", "Outline", "Striped" ]
		},
		{
			name		:	"Basic Handwriting",
			authors		:	[ "Osterfeld" ],
			variants	:	[
				{
					path		:	"Basic Handwriting - by Osterfeld/Basic Handwriting.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Marker", "Handwriting" ]
		},
		{
			name		:	"Blockbusta",
			authors		:	[ "Fenotype" ],
			variants	:	[
				{
					path		:	"Blockbusta - by Fenotype/Blockbusta.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Negative Space", "Retro", "Offset", "Angular", "Logo" ]
		},
		{
			name		:	"Pacifico",
			authors		:	[ "Vernon Adams" ],
			variants	:	[
				{
					path		:	"Pacifico - by Vernon Adams/Pacifico-Regular.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Sans-Serif", "Script", "Handwriting", "Thick" ]
		},
		{
			name		:	"Great Vibes",
			authors		:	[ "TypeSETit" ],
			variants	:	[
				{
					path		:	"Great Vibes - by TypeSETit/GreatVibes-Regular.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Sans-Serif", "Script", "Formal" ]
		},
		{
			name		:	"Lobster",
			authors		:	[ "Impallari Type" ],
			variants	:	[
				{
					path		:	"Lobster - by Impallari Type/Lobster-Regular.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Sans-Serif", "Script", "Thick" ]
		},
		{
			name		:	"Lobster Two",
			authors		:	[ "Impallari Type" ],
			variants	:	[
				{
					path		:	"Lobster Two - by Impallari Type/LobsterTwo-Regular.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"Lobster Two - by Impallari Type/LobsterTwo-Italic.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
				{
					path		:	"Lobster Two - by Impallari Type/LobsterTwo-Bold.ttf",
					style		:	"normal",
					weight		:	"bold",
				},
				{
					path		:	"Lobster Two - by Impallari Type/LobsterTwo-BoldItalic.ttf",
					style		:	"italic",
					weight		:	"bold",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Sans-Serif", "Script", "Thick" ]
		},
		{
			name		:	"Blockstepped",
			authors		:	[ "Gem Fonts" ],
			variants	:	[
				{
					path		:	"Blockstepped - by Gem Fonts/Blockstepped.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Serif", "Retro", "Shadow", "Offset", "Pixelated", "Formal" ]
		},
		{
			name		:	"Blockstepped 3D",
			authors		:	[ "Gem Fonts" ],
			variants	:	[
				{
					path		:	"Blockstepped - by Gem Fonts/Blockstepped 3D.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Serif", "Negative Space", "Retro", "Shadow", "Offset", "Pixelated", "Formal", "3D" ]
		},
		{
			name		:	"Sofia",
			authors		:	[ "LatinoType" ],
			variants	:	[
				{
					path		:	"Sofia - by LatinoType/Sofia-Regular.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Sans-Serif", "Elegant", "Script", "Handwriting"  ]
		},
		{
			name		:	"Blox",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Blox - by Aenigma Fonts/Blox.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Elaborate", "Blocks", "3D"  ]
		},
		{
			name		:	"Candy Stripe",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Candystripe - by Aenigma Fonts/Candy Stripe.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Playful", "Holiday", "Striped" ]
		},
		{
			name		:	"Circulate",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Circulate - by Aenigma Fonts/Circulate.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Negative Space", "Playful" ]
		},
		{
			name		:	"Classic Trash 1",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Classic Trash - by Aenigma Fonts/Classic Trash 1.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Serif", "Basic" ]
		},
		{
			name		:	"Classic Trash 2",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Classic Trash - by Aenigma Fonts/Classic Trash 2.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Serif", "Basic" ]
		},
		{
			name		:	"Crackdown Rounded 1",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Crackdown - by Aenigma Fonts/Crackdown Rounded 1.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Basic", "Thick", "Modern" ]
		},
		{
			name		:	"Crackdown Rounded 2",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Crackdown - by Aenigma Fonts/Crackdown Rounded 2.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Basic", "Thick", "Modern" ]
		},
		{
			name		:	"Crackdown Outline 1",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Crackdown - by Aenigma Fonts/Crackdown Outline 1.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Basic", "Thick", "Modern", "Negative Space" ]
		},
		{
			name		:	"Crackdown Outline 2",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Crackdown - by Aenigma Fonts/Crackdown Outline 2.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Basic", "Thick", "Modern", "Negative Space" ]
		},
		{
			name		:	"Cubic Core Mono",
			authors		:	[ "marCOmics" ],
			variants	:	[
				{
					path		:	"Cubic Core Mono - by marCOmics/Cubic Core Mono.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Angular", "Modern" ]
		},
		{
			name		:	"Cutive Mono",
			authors		:	[ "Vernon Adams" ],
			variants	:	[
				{
					path		:	"Cutive Mono - by Vernon Adams/Cutive Mono.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Serif", "Monospace", "Basic" ]
		},
		{
			name		:	"Dynamic",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Dynamic - by Aenigma Fonts/Dynamic.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Thick", "Modern" ]
		},
		{
			name		:	"Edit Undo",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Edit Undo - by Aenigma Fonts/Edit Undo.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Pixelated", "Retro", "Thick" ]
		},
		{
			name		:	"Edit Undo Line",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Edit Undo - by Aenigma Fonts/Edit Undo Line.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Pixelated", "Retro", "Thick" ]
		},
		{
			name		:	"Edit Undo Dot",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Edit Undo - by Aenigma Fonts/Edit Undo Dot.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Pixelated", "Retro", "Thick", "Dotted" ]
		},
		{
			name		:	"G-Type",
			authors		:	[ "Goma Shin" ],
			variants	:	[
				{
					path		:	"G-Type - by Goma Shin/G-Type.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Game", "Negative Space", "Retro", "Angular" ]
		},
		{
			name		:	"Graze",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Graze - by Aenigma Fonts/Graze.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Modern", "Angular", "Monospace", "Blocks", "Elaborate" ]
		},
		{
			name		:	"Grudge",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Grudge - by Aenigma Fonts/Grudge 2.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Negative Space", "Monospace", "Elaborate" ]
		},
		{
			name		:	"Hammerhead",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"Hammerhead - by Dieter Schumacher/Hammerhead.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"Hammerhead - by Dieter Schumacher/Hammerhead Italic.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Angular", "Thick", "Game", "Modern" ]
		},
		{
			name		:	"Hammerhead Thin",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"Hammerhead - by Dieter Schumacher/Hammerhead Thin.ttf",
					style		:	"normal",
					weight		:	"200",
				},
				{
					path		:	"Hammerhead - by Dieter Schumacher/Hammerhead Thin Italic.ttf",
					style		:	"italic",
					weight		:	"200",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Angular", "Thick", "Game", "Modern" ]
		},
		{
			name		:	"Hammerhead Outline",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"Hammerhead - by Dieter Schumacher/Hammerhead Outline.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"Hammerhead - by Dieter Schumacher/Hammerhead Outline Italic.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Angular", "Thick", "Game", "Modern", "Negative Space" ]
		},
		{
			name		:	"Hearts",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Hearts - by Aenigma Fonts/Hearts.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Elaborate", "Holiday", "Monospace" ]
		},
		{
			name		:	"It Lives In The Swamp",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"It Lives In The Swamp - by Aenigma Fonts/It Lives In The Swamp.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Elaborate", "Handwriting", "Marker", "Dripping", "Logo" ]
		},
		{
			name		:	"Kaliber Solid",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Kaliber - by Aenigma Fonts/Kaliber Solid.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Angular", "Modern", "Angular", "Thick" ]
		},
		{
			name		:	"Kaliber Round",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Kaliber - by Aenigma Fonts/Kaliber Round.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Angular", "Modern", "Thick" ]
		},
		{
			name		:	"Kaliber Xtreme",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Kaliber - by Aenigma Fonts/Kaliber Xtreme.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Angular", "Modern", "Thick" ]
		},
		{
			name		:	"New Walt Disney Font",
			authors		:	[ "538Lyons Font Design (Daniel Lyons)" ],
			variants	:	[
				{
					path		:	"New Walt Disney Font - by 538Lyons Font Design (Daniel Lyons)/NewWaltDisneyFontRegular-BPen.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Logo", "Elaborate", "Marker" ]
		},
		{
			name		:	"New Walt Disney UI",
			authors		:	[ "538Lyons Font Design (Daniel Lyons)" ],
			variants	:	[
				{
					path		:	"New Walt Disney Font - by 538Lyons Font Design (Daniel Lyons)/NewWaltDisneyUi-8YdA.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Logo", "Elaborate", "Marker" ]
		},
		{
			name		:	"KidZone",
			authors		:	[ "538Lyons Font Design (Daniel Lyons)" ],
			variants	:	[
				{
					path		:	"KidZone - by 538Lyons Font Design (Daniel Lyons)/KidZone.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Playful" ]
		},
		{
			name		:	"Loki Cola",
			authors		:	[ "Utopiafonts" ],
			variants	:	[
				{
					path		:	"Loki Cola - by Utopiafonts/Loki Cola.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Elaborate", "Logo", "Script" ]
		},
		{
			name		:	"Alex Brush",
			authors		:	[ "TypeSETit" ],
			variants	:	[
				{
					path		:	"Alex Brush - by TypeSETit/AlexBrush-Regular.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Sans-Serif", "Elaborate", "Script" ]
		},
		{
			name		:	"Allura",
			authors		:	[ "TypeSETit" ],
			variants	:	[
				{
					path		:	"Allura - by TypeSETit/Allura-Regular.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Sans-Serif", "Handwriting", "Script" ]
		},
		{
			name		:	"Arizonia",
			authors		:	[ "TypeSETit" ],
			variants	:	[
				{
					path		:	"Arizonia - by TypeSETit/Arizonia-Regular.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Sans-Serif", "Handwriting", "Marker", "Thick", "Calligraphy", "Script" ]
		},
		{
			name		:	"Bilbo",
			authors		:	[ "Robert Leuschke" ],
			variants	:	[
				{
					path		:	"Bilbo - by Robert Leuschke/Bilbo-Regular.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Sans-Serif", "Handwriting", "Script" ]
		},
		{
			name		:	"Bilbo Swash Caps",
			authors		:	[ "TypeSETit" ],
			variants	:	[
				{
					path		:	"Bilbo Swash Caps - by TypeSETit/BilboSwashCaps-Regular.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Sans-Serif", "Handwriting", "Script" ]
		},
		{
			name		:	"Dancing Script",
			authors		:	[ "Impallari Type" ],
			variants	:	[
				{
					path		:	"Dancing Script - by Impallari Type/DancingScript-VariableFont_wght.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Sans-Serif", "Handwriting", "Thick", "Script" ]
		},
		{
			name		:	"Grand Hotel",
			authors		:	[ "Astigmatic One Eye Typographic Institute" ],
			variants	:	[
				{
					path		:	"Grand Hotel - by Astigmatic One Eye Typographic Institute/GrandHotel-Regular.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Sans-Serif", "Thick", "Script" ]
		},
		{
			name		:	"Dynalight",
			authors		:	[ "Astigmatic One Eye Typographic Institute" ],
			variants	:	[
				{
					path		:	"Dynalight - by Astigmatic One Eye Typographic Institute/Dynalight-Regular.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Sans-Serif", "Thick", "Script" ]
		},
		{
			name		:	"Kaushan Script",
			authors		:	[ "Impallari Type" ],
			variants	:	[
				{
					path		:	"Kaushan Script - by Impallari Type/KaushanScript-Regular.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Sans-Serif", "Handwriting", "Thick", "Calligraphy", "Marker", "Script" ]
		},
		{
			name		:	"Mage 1999",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"Mage 1999 - by Dieter Schumacher/Mage 1999.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Thick", "Pixelated" ]
		},
		{
			name		:	"Minercraftory",
			authors		:	[ "Grandoplex Productions" ],
			variants	:	[
				{
					path		:	"Minercraftory - by Grandoplex Productions/Minercraftory.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Game", "Pixelated", "Retro", "Thick" ]
		},
		{
			name		:	"That's Font Folks",
			authors		:	[ "Grandoplex Productions" ],
			variants	:	[
				{
					path		:	"That's Font Folks - by Grandoplex Productions/That's Font Folks!.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Logo", "Script" ]
		},
		{
			name		:	"Mishmash",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Mish Mash - by Aenigma Fonts/Mishmash.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Modern", "Thick" ]
		},
		{
			name		:	"Mishmash Fuse",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Mish Mash - by Aenigma Fonts/Mishmash Fuse.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Modern", "Thick", "Negative Space", "Offset" ]
		},
		{
			name		:	"Mishmash Alt 1",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Mish Mash - by Aenigma Fonts/Mishmash Alt 1.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Modern", "Thick", "Angular" ]
		},
		{
			name		:	"Mishmash Alt 2",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Mish Mash - by Aenigma Fonts/Mishmash Alt 2.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Modern", "Thick", "Angular" ]
		},
		{
			name		:	"Mishmash 4x4 Outline",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Mish Mash - by Aenigma Fonts/Mishmash 4x4 Outline.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Modern", "Thick", "Angular", "Elaborate", "Negative Space" ]
		},
		{
			name		:	"Mishmash 4x4 Italic",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Mish Mash - by Aenigma Fonts/Mishmash 4x4 Italic.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Modern", "Thick", "Angular", "Playful" ]
		},
		{
			name		:	"November",
			authors		:	[ "Tepid Monkey" ],
			variants	:	[
				{
					path		:	"November - by Tepid Monkey/November.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Serif", "Monospace", "Basic", "Pixelated", "Retro" ]
		},
		{
			name		:	"Orbitron",
			authors		:	[ "Matt McInerney" ],
			variants	:	[
				{
					path		:	"Orbitron - by Matt McInerney/Orbitron.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"Orbitron - by Matt McInerney/Orbitron Medium.ttf",
					style		:	"normal",
					weight		:	"550",
				},
				{
					path		:	"Orbitron - by Matt McInerney/Orbitron Bold.ttf",
					style		:	"normal",
					weight		:	"bold",
				},
				{
					path		:	"Orbitron - by Matt McInerney/Orbitron Black.ttf",
					style		:	"normal",
					weight		:	"900",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Sans-Serif", "Basic", "Modern", "Thick" ]
		},
		{
			name		:	"Perfect Dark",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Perfect Dark - by Aenigma Fonts/Perfect Dark.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Game", "Retro", "Thick", "Angular" ]
		},
		{
			name		:	"Persuasion",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Persuasion - by Aenigma Fonts/Persuasion.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Playful", "Modern", "Thick" ]
		},
		{
			name		:	"PixelForce",
			authors		:	[ "Vasily Draigo aka Daymarius" ],
			variants	:	[
				{
					path		:	"PixelForce - by Vasily Draigo aka Daymarius/PixelForce.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Pixelated", "Retro", "Basic" ]
		},
		{
			name		:	"Plasma Drip",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Plasma Drip - by Aenigma Fonts/Plasma Drip.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Dripping", "Thick" ]
		},
		{
			name		:	"Plasma Drip Empty",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Plasma Drip - by Aenigma Fonts/Plasma Drip Empty.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Dripping", "Thick", "Negative Space" ]
		},
		{
			name		:	"Pseudo",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Pseudo - by Aenigma Fonts/Pseudo.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Striped", "Thick" ]
		},
		{
			name		:	"Rational Integer",
			authors		:	[ "Tepid Monkey" ],
			variants	:	[
				{
					path		:	"Rational Integer - by Tepid Monkey/Rational Integer.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Modern", "Angular" ]
		},
		{
			name		:	"Registry",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Registry - by Aenigma Fonts/Registry.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Script", "Handwriting" ]
		},
		{
			name		:	"Retron2000",
			authors		:	[ "Vasily Draigo aka Daymarius" ],
			variants	:	[
				{
					path		:	"Retron2000 - by Vasily Draigo aka Daymarius/Retron2000.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Pixelated", "Retro" ]
		},
		{
			name		:	"RetroVille NC",
			authors		:	[ "Grandoplex Productions" ],
			variants	:	[
				{
					path		:	"RetroVille - by Grandoplex Productions/RetroVille NC.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Pixelated", "Retro", "Basic" ]
		},
		{
			name		:	"Righteous",
			authors		:	[ "Brian J. Bonislawsky" ],
			variants	:	[
				{
					path		:	"Righteous - by Brian J. Bonislawsky/Righteous.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Sans-Serif", "Modern", "Thick" ]
		},
		{
			name		:	"ROBOTECH GP",
			authors		:	[ "Gustavo Paz L" ],
			variants	:	[
				{
					path		:	"Robotech GP - by Gustavo Paz L/ROBOTECH GP.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'ShareAlike License',
			tags		:	[ "Sans-Serif", "Modern", "Angular" ]
		},
		{
			name		:	"Roses Are FF0000",
			authors		:	[ "AJ Paglia" ],
			variants	:	[
				{
					path		:	"Roses Are FF0000 - by AJ Paglia/Roses Are FF0000.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Pixelated", "Retro", "Basic" ]
		},
		{
			name		:	"Segment 16C",
			authors		:	[ "Daniel Wikholm" ],
			variants	:	[
				{
					path		:	"Segment 16C - by Daniel Wikholm/Segment 16C.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"Segment 16C - by Daniel Wikholm/Segment 16C Italic.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
				{
					path		:	"Segment 16C - by Daniel Wikholm/Segment 16C Bold.ttf",
					style		:	"normal",
					weight		:	"bold",
				},
				{
					path		:	"Segment 16C - by Daniel Wikholm/Segment 16C Bold Italic.ttf",
					style		:	"italic",
					weight		:	"bold",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Retro", "Angular" ]
		},
		{
			name		:	"Star Jedi",
			authors		:	[ "Boba Fonts" ],
			variants	:	[
				{
					path		:	"Star Jedi - by Boba Fonts/Star Jedi/Star Jedi.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Logo", "Thick", "Retro" ]
		},
		{
			name		:	"Star Jedi Hollow",
			authors		:	[ "Boba Fonts" ],
			variants	:	[
				{
					path		:	"Star Jedi - by Boba Fonts/Star Jedi/Star Jedi Hollow.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Logo", "Thick", "Retro", "Negative Space" ]
		},
		{
			name		:	"Star Jedi Logo Double Line 1",
			authors		:	[ "Boba Fonts" ],
			variants	:	[
				{
					path		:	"Star Jedi - by Boba Fonts/Star Jedi Logo/Star Jedi Logo Double Line 1.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Logo", "Thick", "Retro" ]
		},
		{
			name		:	"Star Jedi Logo Double Line 2",
			authors		:	[ "Boba Fonts" ],
			variants	:	[
				{
					path		:	"Star Jedi - by Boba Fonts/Star Jedi Logo/Star Jedi Logo Double Line 2.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Logo", "Thick", "Retro" ]
		},
		{
			name		:	"Star Jedi Logo Mono Line",
			authors		:	[ "Boba Fonts" ],
			variants	:	[
				{
					path		:	"Star Jedi - by Boba Fonts/Star Jedi Logo/Star Jedi Logo Mono Line.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Logo", "Thick", "Retro" ]
		},
		{
			name		:	"Star Jedi Outline",
			authors		:	[ "Boba Fonts" ],
			variants	:	[
				{
					path		:	"Star Jedi - by Boba Fonts/Star Jedi Outline/Star Jedi Outline.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Logo", "Thick", "Retro", "Outline" ]
		},
		{
			name		:	"Star Jedi Special Edition",
			authors		:	[ "Boba Fonts" ],
			variants	:	[
				{
					path		:	"Star Jedi - by Boba Fonts/Star Jedi Special Edition/Star Jedi Special Edition.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Logo", "Thick", "Retro" ]
		},
		{
			name		:	"Star Trek Future",
			authors		:	[ "Alphabet & Type" ],
			variants	:	[
				{
					path		:	"Star Trek Future - by Alphabet & Type/Star Trek Future.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Logo", "Negative Space", "Narrow", "Offset" ]
		},
		{
			name		:	"Star Trek Enterprise Future",
			authors		:	[ "Alphabet & Type" ],
			variants	:	[
				{
					path		:	"Star Trek Future - by Alphabet & Type/Star Trek Enterprise Future.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Logo", "Negative Space", "Narrow", "Offset" ]
		},
		{
			name		:	"Holy Union",
			authors		:	[ "Digital Graphic Labs" ],
			variants	:	[
				{
					path		:	"Holy Union - by Digital Graphic Labs/Holy Union.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Serif", "Gothic", "Elaborate" ]
		},
		{
			name		:	"UnifrakturMaguntia",
			authors		:	[ "J. 'Mach' Wust" ],
			variants	:	[
				{
					path		:	"UnifrakturMaguntia - by J. 'Mach' Wust/UnifrakturMaguntia-Regular.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Serif", "Gothic", "Elaborate" ]
		},
		{
			name		:	"Super Mario 256",
			authors		:	[ "fsuarez913" ],
			variants	:	[
				{
					path		:	"Super Mario 256 - by fsuarez913/Super Mario 256.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Logo", "Angular", "Playful", "Thick" ]
		},
		{
			name		:	"Syndrome",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Syndrome - by Aenigma Fonts/Syndrome.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Thick", "Modern" ]
		},
		{
			name		:	"Synthetic",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Synthetic - by Aenigma Fonts/Synthetic.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Elaborate", "Narrow" ]
		},
		{
			name		:	"Technique",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Technique - by Aenigma Fonts/Technique.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Thick", "Playful" ]
		},
		{
			name		:	"Technique Outline",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Technique - by Aenigma Fonts/Technique Outline.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Thick", "Playful", "Negative Space" ]
		},
		{
			name		:	"Techno Overload",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Techno Overload - by Aenigma Fonts/Techno Overload.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Narrow", "Thick" ]
		},
		{
			name		:	"Tetricide",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Tetricide - by Aenigma Fonts/Tetricide.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Retro", "Pixelated" ]
		},
		{
			name		:	"Tonik",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Tonik - by Aenigma Fonts/Tonik.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Modern", "Elaborate" ]
		},
		{
			name		:	"Underwhelmed",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Underwhelmed - by Aenigma Fonts/Underwhelmed.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Game", "Thick", "Modern" ]
		},
		{
			name		:	"Underwhelmed Outline",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Underwhelmed - by Aenigma Fonts/Underwhelmed Outline.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Game", "Thick", "Modern", "Negative Space" ]
		},
		{
			name		:	"Unlearned",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Unlearned - by Aenigma Fonts/Unlearned.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Pixelated", "Negative Space", "Thick", "Retro" ]
		},
		{
			name		:	"Unlearned 2",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Unlearned - by Aenigma Fonts/Unlearned 2.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Negative Space", "Thick", "Retro" ]
		},
		{
			name		:	"VCR OSD Mono",
			authors		:	[ "Riciery Leal" ],
			variants	:	[
				{
					path		:	"VCR OSD Mono - by Riciery Leal/VCR OSD Mono.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Pixelated", "Retro", "Monospace", "Basic" ]
		},
		{
			name		:	"Weathered",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Weathered - by Aenigma Fonts/Weathered.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Thick", "Negative Space" ]
		},
		{
			name		:	"Weathered Solid",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Weathered - by Aenigma Fonts/Weathered Solid.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Thick", "Basic" ]
		},
		{
			name		:	"Where Is The Rest",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"Where Is The Rest - by Dieter Schumacher/Where Is The Rest.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"Where Is The Rest - by Dieter Schumacher/Where Is The Rest Italic.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Striped", "Thick" ]
		},
		{
			name		:	"Celtic Knots",
			authors		:	[ "Renn Crump" ],
			variants	:	[
				{
					path		:	"Celtic Knots - by Renn Crump/Celtic Knots.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Serif", "Celtic", "Gothic", "Elaborate" ]
		},
		{
			name		:	"Wickhop Handwriting",
			authors		:	[ "Wick van den Belt" ],
			variants	:	[
				{
					path		:	"Wickhop Handwriting - by Wick van den Belt/Wickhop Handwriting.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Handwriting", "Thick", "Playful" ]
		},
		{
			name		:	"Xerox Malfunction",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Xerox Malfunction - by Aenigma Fonts/Xerox Malfunction.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Thick", "Elaborate", "Smudged" ]
		},
		{
			name		:	"Xmas Lights",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Xmas Lights - by Aenigma Fonts/Xmas Lights.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Elaborate", "Monospace", "Holiday" ]
		},
		{
			name		:	"Comic Relief",
			authors		:	[ "Loudifier" ],
			variants	:	[
				{
					path		:	"Comic Relief - by Loudifier/ComicRelief.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Sans-Serif", "Playful", "Basic" ]
		},
		{
			name		:	"Nandaka Western",
			authors		:	[ "Goma Shin" ],
			variants	:	[
				{
					path		:	"Nandaka Western - by Goma Shin/gomarice_nandaka_western.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Thick", "Western" ]
		},
		{
			name		:	"Humeur",
			authors		:	[ "ClaudeP" ],
			variants	:	[
				{
					path		:	"Humeur - by ClaudeP/Humeur.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Symbol", "Faces" ]
		},
		{
			name		:	"Champignon",
			authors		:	[ "ClaudeP" ],
			variants	:	[
				{
					path		:	"Champignon - by ClaudeP/Champignon.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Sans-Serif", "Script", "Handwriting", "Elaborate" ]
		},
		{
			name		:	"Champignon Alt Swash",
			authors		:	[ "ClaudeP" ],
			variants	:	[
				{
					path		:	"Champignon - by ClaudeP/champignonaltswash.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Sans-Serif", "Script", "Handwriting", "Elaborate" ]
		},
		{
			name		:	"LouisaCP",
			authors		:	[ "ClaudeP" ],
			variants	:	[
				{
					path		:	"LouisaCP - By ClaudeP/LouisaCP.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Script", "Handwriting" ]
		},
		{
			name		:	"Bolina",
			authors		:	[ "ClaudeP" ],
			variants	:	[
				{
					path		:	"Bolina - by ClaudeP/Bolina.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Script", "Handwriting" ]
		},
		{
			name		:	"ZenithCP",
			authors		:	[ "ClaudeP" ],
			variants	:	[
				{
					path		:	"ZenithCP - by ClaudeP/ZenithCP.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Script", "Handwriting" ]
		},
		{
			name		:	"Postface",
			authors		:	[ "ClaudeP" ],
			variants	:	[
				{
					path		:	"Postface - by ClaudeP/Postface.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Thick", "Handwriting", "Marker" ]
		},
		{
			name		:	"OxfordCP",
			authors		:	[ "ClaudeP" ],
			variants	:	[
				{
					path		:	"OxfordCP - by ClaudeP/OxfordCP.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Thick", "Elaborate" ]
		},
		{
			name		:	"Pepinot",
			authors		:	[ "ClaudeP" ],
			variants	:	[
				{
					path		:	"Pepinot - by ClaudeP/pepinot.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Serif", "Elaborate" ]
		},
		{
			name		:	"UptightC",
			authors		:	[ "ClaudeP" ],
			variants	:	[
				{
					path		:	"UptightC - by ClaudeP/UptightC.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Elaborate", "Modern" ]
		},
		{
			name		:	"Niaisage",
			authors		:	[ "ClaudeP" ],
			variants	:	[
				{
					path		:	"Niaisage - by ClaudeP/Niaisage.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Elaborate", "Modern" ]
		},
		{
			name		:	"DojoCP",
			authors		:	[ "ClaudeP" ],
			variants	:	[
				{
					path		:	"DojoCP - by ClaudeP/DojoCP.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Elaborate", "Thick", "Modern" ]
		},
		{
			name		:	"Les Etoiles",
			authors		:	[ "ClaudeP" ],
			variants	:	[
				{
					path		:	"Les Etoiles - by ClaudeP/LesEtoiles.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Serif", "Elaborate", "Thick" ]
		},
		{
			name		:	"Bonte Divine",
			authors		:	[ "ClaudeP" ],
			variants	:	[
				{
					path		:	"Bonte Divine - by ClaudeP/BonteDivine.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Serif", "Curvy" ]
		},
		{
			name		:	"Memetica",
			authors		:	[ "Rodolfo Santos" ],
			variants	:	[
				{
					path		:	"Memetica - by Rodolfo Santos/Memetica.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Symbol", "Faces", "Meme" ]
		},
		{
			name		:	"Web Symbols",
			authors		:	[ "Just Be Nice Studio" ],
			variants	:	[
				{
					path		:	"Web Symbols - by Just Be Nice Studio/WebSymbols-Regular.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Symbol", "Icons" ]
		},
		{
			name		:	"Stateface",
			authors		:	[ "ProPublica" ],
			variants	:	[
				{
					path		:	"Stateface - by ProPublica/StateFace-Regular.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Symbol" ]
		},
		{
			name		:	"Outgunned",
			authors		:	[ "Robby Woodard" ],
			variants	:	[
				{
					path		:	"Outgunned - by Robby Woodard/Outgunned.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Symbol", "Guns" ]
		},
		{
			name		:	"Notice",
			authors		:	[ "otlab.ru" ],
			variants	:	[
				{
					path		:	"Notice - by otlab.ru/Notice.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Symbol" ]
		},
		{
			name		:	"Notice 2",
			authors		:	[ "otlab.ru" ],
			variants	:	[
				{
					path		:	"Notice - by otlab.ru/Notice 2.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Symbol" ]
		},
		{
			name		:	"Notice 3",
			authors		:	[ "otlab.ru" ],
			variants	:	[
				{
					path		:	"Notice - by otlab.ru/Notice 3.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Symbol" ]
		},
		{
			name		:	"Modern Pictograms",
			authors		:	[ "John Caserta" ],
			variants	:	[
				{
					path		:	"Modern Pictograms - by John Caserta/Modern Pictograms.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Symbol" ]
		},
		{
			name		:	"WebHostingHub Glyphs",
			authors		:	[ "Web Hosting Hub" ],
			variants	:	[
				{
					path		:	"WebHostingHub Glyphs - by Web Hosting Hub/WebHostingHub Glyphs.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Symbol" ]
		},
		{
			name		:	"Heydings Common Icons",
			authors		:	[ "Heydon Pickering" ],
			variants	:	[
				{
					path		:	"Heydings Common Icons - by Heydon Pickering/Heydings Common Icons.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Symbol" ]
		},
		{
			name		:	"Heydings Controls",
			authors		:	[ "Heydon Pickering" ],
			variants	:	[
				{
					path		:	"Heydings Controls - by Heydon Pickering/Heydings Controls.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Symbol" ]
		},
		{
			name		:	"Helloween",
			authors		:	[ "Gem Fonts" ],
			variants	:	[
				{
					path		:	"Helloween - by Gem Fonts/Helloween.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Symbol", "Halloween" ]
		},
		{
			name		:	"Helloween 2",
			authors		:	[ "Gem Fonts" ],
			variants	:	[
				{
					path		:	"Helloween - by Gem Fonts/Helloween 2.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Symbol", "Halloween" ]
		},
		{
			name		:	"Skull Capz",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Skull Capz - by Aenigma Fonts/Skull Capz.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Symbol", "Halloween" ]
		},
		{
			name		:	"Zero Velocity",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"Zero Velocity - by Aenigma Fonts/Zero Velocity.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Outline", "Elaborate" ]
		},
		{
			name		:	"OpenDyslexic",
			authors		:	[ "Abbie Gonzalez" ],
			variants	:	[
				{
					path		:	"OpenDyslexic - by Abbie Gonzalez/OpenDyslexic-Regular.otf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"OpenDyslexic - by Abbie Gonzalez/OpenDyslexic-Italic.otf",
					style		:	"italic",
					weight		:	"normal",
				},
				{
					path		:	"OpenDyslexic - by Abbie Gonzalez/OpenDyslexic-Bold.otf",
					style		:	"normal",
					weight		:	"bold",
				},
				{
					path		:	"OpenDyslexic - by Abbie Gonzalez/OpenDyslexic-Bold-Italic.otf",
					style		:	"italic",
					weight		:	"bold",
				},
			],
			license		:	'SIL Open Font License',
			tags		:	[ "Sans-Serif", "Basic", "Playful" ]
		},
		{
			name		:	"Abberancy",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Abberancy.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Slanted", "Thick", "Fast" ]
		},
		{
			name		:	"Joy Circuit",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Joy Circuit.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Negative Space", "Thick", "Outline" ]
		},
		{
			name		:	"Y2K Bug",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Y2Kbug.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Elaborate", "Playful" ]
		},
		{
			name		:	"Baileys Car",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Baileys Car.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Elaborate", "Negative Space", "Fire" ]
		},
		{
			name		:	"Barbatrick",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Barbatrick.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Thick", "Slanted", "Fast" ]
		},
		{
			name		:	"Biometric Joe",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Biometric Joe.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Elaborate", "Crumbling" ]
		},
		{
			name		:	"Birdland Aeroplane",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Birdland Aeroplane.otf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Birdland Aeroplane Bold.otf",
					style		:	"normal",
					weight		:	"bold",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Playful" ]
		},
		{
			name		:	"Biting My Nails Outline",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Biting My Nails Outline.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Negative Space", "Angular", "Modern" ]
		},
		{
			name		:	"Biting My Nails",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Biting My Nails.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Angular", "Modern", "Thick" ]
		},
		{
			name		:	"Borg 9",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Borg 9.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Thick" ]
		},
		{
			name		:	"Boron",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Boron.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Elaborate", "Narrow", "Circuit" ]
		},
		{
			name		:	"Bramalea Beauty",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Bramalea Beauty.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Negative Space", "Narrow", "Basic" ]
		},
		{
			name		:	"Capacitor",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Capacitor.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Thin", "Modern", "Angular" ]
		},
		{
			name		:	"Colourbars",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Colourbars.otf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Colourbars Bd.otf",
					style		:	"normal",
					weight		:	"bold",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Basic" ]
		},
		{
			name		:	"Counterscraps",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Counterscraps.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Symbol", "Kitchen" ]
		},
		{
			name		:	"Cutiful",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Cutiful.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Script" ]
		},
		{
			name		:	"Deluxe Ducks",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Deluxe Ducks.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Negative Space", "Modern" ]
		},
		{
			name		:	"Deportees",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Deportees.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Narrow", "Thin", "Halloween" ]
		},
		{
			name		:	"Desard",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Desard.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Playful" ]
		},
		{
			name		:	"Dyspepsia",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Dyspepsia.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Narrow", "Script" ]
		},
		{
			name		:	"Electorate Boogaloo 3",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Electorate Boogaloo 3.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Elaborate", "Thick" ]
		},
		{
			name		:	"Fabian",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Fabian.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Slanted", "Modern", "Angular", "Narrow" ]
		},
		{
			name		:	"Filepile",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Filepile.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Negative Space", "Retro", "Shadow" ]
		},
		{
			name		:	"First Blind 2",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/First Blind 2.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Modern", "Wide" ]
		},
		{
			name		:	"Fluoride Beings",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Fluoride Beings.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Elaborate", "Angled", "Angular" ]
		},
		{
			name		:	"Frak",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Frak.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Narrow", "Angular" ]
		},
		{
			name		:	"Frozdotre",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Frozdotre.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Thick" ]
		},
		{
			name		:	"Giant Tigers Back",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Giant Tigers Back.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Narrow", "Basic" ]
		},
		{
			name		:	"Giant Tigers Front",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Giant Tigers Front.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Narrow", "Basic", "Striped" ]
		},
		{
			name		:	"Giant Tigers",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Giant Tigers.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Narrow", "Basic", "Striped", "Negative Space" ]
		},
		{
			name		:	"Got No Heart Solid",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Got No Heart Solid.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Thick", "Elaborate" ]
		},
		{
			name		:	"Got No Heart",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Got No Heart.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Thick", "Elaborate", "Negative Space" ]
		},
		{
			name		:	"Graffiti Treat Back",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Graffiti Treat Back.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Angular", "Thick", "Elaborate" ]
		},
		{
			name		:	"Graffiti Treat Front",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Graffiti Treat Front.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Angular", "Elaborate" ]
		},
		{
			name		:	"Graffiti Treat",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Graffiti Treat.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Angular", "Elaborate", "Negative Space" ]
		},
		{
			name		:	"Groovy Ghosties Back",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Groovy Ghosties Back.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Thick", "Elaborate", "Halloween" ]
		},
		{
			name		:	"Groovy Ghosties Front",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Groovy Ghosties Front.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Thick", "Elaborate", "Halloween" ]
		},
		{
			name		:	"Groovy Ghosties",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Groovy Ghosties.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Thick", "Elaborate", "Halloween", "Negative Space" ]
		},
		{
			name		:	"Gumtuckey",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Gumtuckey.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif" ]
		},
		{
			name		:	"Hamma Mamma Jamma",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Hamma Mamma Jamma.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Modern", "Narrow" ]
		},
		{
			name		:	"Hawkeye Back",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Hawkeye Back.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Thick", "Elaborate" ]
		},
		{
			name		:	"Hawkeye Front",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Hawkeye Front.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Thick", "Elaborate", "Shadow" ]
		},
		{
			name		:	"Hawkeye",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Hawkeye.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Thick", "Elaborate", "Negative Space", "Shadow" ]
		},
		{
			name		:	"Hello Larry",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Hello Larry.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Thick", "Elaborate" ]
		},
		{
			name		:	"Holy Smokes",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Holy Smokes.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Cigarettes", "Negative Space", "Elaborate" ]
		},
		{
			name		:	"Hurontario",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Hurontario.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Thin", "Narrow", "Script" ]
		},
		{
			name		:	"Husky Stash",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Husky Stash.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Modern", "Elaborate" ]
		},
		{
			name		:	"Icicle Country 2",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Icicle Country 2.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Playful", "Modern" ]
		},
		{
			name		:	"Jandles",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Jandles.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Thin", "Loopy", "Elaborate", "Handwriting" ]
		},
		{
			name		:	"Jigsaw Trouserdrop",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Jigsaw Trouserdrop.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Thick", "Elaborate" ]
		},
		{
			name		:	"Jingopop",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Jingopop.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Playful", "Script" ]
		},
		{
			name		:	"Lesser Concern Shadow",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Lesser Concern Shadow.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Negative Space", "Shadow" ]
		},
		{
			name		:	"Lesser Concern",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Lesser Concern.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif" ]
		},
		{
			name		:	"Let's Eat",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Let's Eat.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif" ]
		},
		{
			name		:	"Letter Set A",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Letter Set A.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Thick", "Elaborate", "Negative Space" ]
		},
		{
			name		:	"Letter Set B",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Letter Set B.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Thick", "Elaborate", "Negative Space" ]
		},
		{
			name		:	"Letter Set C",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Letter Set C.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Thick", "Elaborate", "Negative Space", "Snow" ]
		},
		{
			name		:	"Lewinsky",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Lewinsky.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Elaborate", "Slanted" ]
		},
		{
			name		:	"Lucky Ape",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Lucky Ape.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Elaborate", "Slot Machine", "Monospace" ]
		},
		{
			name		:	"Mai Tai",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Mai Tai.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Narrow", "Modern" ]
		},
		{
			name		:	"Malache Crunch",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Malache Crunch.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Sequins" ]
		},
		{
			name		:	"Map Of You",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Map Of You.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Elaborate", "Modern", "Alien" ]
		},
		{
			name		:	"Minya",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Minya.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Basic", "Handwriting", "Basic" ]
		},
		{
			name		:	"Misirlou Day",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Misirlou Day.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Negative Space", "Retro", "Modern" ]
		},
		{
			name		:	"Misirlou",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Misirlou.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Retro", "Modern" ]
		},
		{
			name		:	"Mississauga",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Mississauga.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Narrow", "Modern" ]
		},
		{
			name		:	"Mlurmlry",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Mlurmlry.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Elaborate", "Decay", "Negative Space" ]
		},
		{
			name		:	"Mob Concrete",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Mob Concrete.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Thick", "Elaborate", "Decay" ]
		},
		{
			name		:	"Mold Papa",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Mold Papa.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Narrow", "Playful", "Thick" ]
		},
		{
			name		:	"Motorcade",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Motorcade.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Negative Space", "Thick", "Shadow" ]
		},
		{
			name		:	"Nasal",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Nasal.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Modern" ]
		},
		{
			name		:	"Neurochrome",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Neurochrome.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Negative Space", "Elaborate" ]
		},
		{
			name		:	"New Brilliant",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/New Brilliant.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Wide", "Modern", "Angular" ]
		},
		{
			name		:	"Night Court",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Night Court.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Playful", "Thick" ]
		},
		{
			name		:	"Nightporter",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Nightporter.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Distorted" ]
		},
		{
			name		:	"No Clocks",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/No Clocks.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Modern", "Wide" ]
		},
		{
			name		:	"Oil Crisis A",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Oil Crisis A.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Symbol", "Cars" ]
		},
		{
			name		:	"Oil Crisis B",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Oil Crisis B.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Symbol", "Cars" ]
		},
		{
			name		:	"Operational Amplifier",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Operational Amplifier.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Narrow", "Modern", "Angular" ]
		},
		{
			name		:	"Outright",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Outright.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Elaborate", "Thick" ]
		},
		{
			name		:	"Paint Boy",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Paint Boy.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Negative Space", "Paintbrushes" ]
		},
		{
			name		:	"Pantspatrol",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Pantspatrol.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Striped", "Thick"  ]
		},
		{
			name		:	"Peatloaf",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Peatloaf.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Elaborate", "Decay" ]
		},
		{
			name		:	"Plain Cred 1978",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Plain Cred 1978.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Thin", "Narrow", "Modern", "Basic" ]
		},
		{
			name		:	"Po Beef",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Po Beef.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Elaborate", "Playful" ]
		},
		{
			name		:	"Poke",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Poke.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Elaborate" ]
		},
		{
			name		:	"Pop Up Fontio",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Pop Up Fontio.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Elaborate", "Playful", "Jack-in-the-box" ]
		},
		{
			name		:	"Port Credit",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Port Credit.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Basic" ]
		},
		{
			name		:	"Pulse State",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Pulse State.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Elaborate", "Halloween" ]
		},
		{
			name		:	"Quinine",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Quinine.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Thick", "Elaborate" ]
		},
		{
			name		:	"Quixotic",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Quixotic.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Narrow" ]
		},
		{
			name		:	"Rina",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Rina.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Basic", "Curvy" ]
		},
		{
			name		:	"Riot Act 2 Back",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Riot Act 2 Back.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Elaborate", "Halloween" ]
		},
		{
			name		:	"Riot Act 2 Front",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Riot Act 2 Front.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Elaborate", "Halloween" ]
		},
		{
			name		:	"Riot Act 2 Glop",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Riot Act 2 Glop.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Elaborate", "Halloween" ]
		},
		{
			name		:	"Riot Act 2",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Riot Act 2.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Elaborate", "Halloween", "Negative Space" ]
		},
		{
			name		:	"Robokoz",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Robokoz.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Calligraphy", "Basic" ]
		},
		{
			name		:	"Sad Films",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Sad Films.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Slanted", "Modern" ]
		},
		{
			name		:	"Sandoval Speed",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Sandoval Speed.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Elaborate", "Slanted", "Wide", "Thick" ]
		},
		{
			name		:	"Sandoval",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Sandoval.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Elaborate", "Thick" ]
		},
		{
			name		:	"Sappy Mugs",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Sappy Mugs.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Symbol", "Faces", "Animals", "Playful" ]
		},
		{
			name		:	"Sayso Chic",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Sayso Chic.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Dotted", "Retro" ]
		},
		{
			name		:	"Scritzy X",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Scritzy X.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Modern", "Elaborate" ]
		},
		{
			name		:	"Send Cash",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Send Cash.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Decay" ]
		},
		{
			name		:	"Shifty Chica 2",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Shifty Chica 2.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Curvy", "Thick" ]
		},
		{
			name		:	"Skeletor Stance",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Skeletor Stance.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Elaborate", "Curvy" ]
		},
		{
			name		:	"Skrybylr",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Skrybylr.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Playful", "Elaborate" ]
		},
		{
			name		:	"Snidely",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Snidely.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Curvy", "Vintage", "Playful" ]
		},
		{
			name		:	"Spongy",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Spongy.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Thin" ]
		},
		{
			name		:	"Stitch & Bitch",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Stitch & Bitch.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Dashed", "Negative Space" ]
		},
		{
			name		:	"Styrofoam Feelings",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Styrofoam Feelings.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Wide", "Elaborate" ]
		},
		{
			name		:	"Superheterodyne",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Superheterodyne.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Lightning", "Thick" ]
		},
		{
			name		:	"Switching & Effects",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Switching & Effects.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Thin", "Elaborate" ]
		},
		{
			name		:	"Terylene Top",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Terylene Top.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Diamond", "Elaborate", "Playful" ]
		},
		{
			name		:	"That Secret Feeling",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/That Secret Feeling.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Negative Space", "Striped", "Playful", "Shadow" ]
		},
		{
			name		:	"Thiamine",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Thiamine.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Narrow", "Elaborate" ]
		},
		{
			name		:	"Tobin Tax",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Tobin Tax.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Elaborate" ]
		},
		{
			name		:	"Tommy Gun",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Tommy Gun.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Decay" ]
		},
		{
			name		:	"Top Bond",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Top Bond.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Wavy", "Playful" ]
		},
		{
			name		:	"Tork",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Tork.otf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Tork Bold.otf",
					style		:	"normal",
					weight		:	"bold",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Tork Italic.otf",
					style		:	"italic",
					weight		:	"normal",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Tork Bold Italic.otf",
					style		:	"italic",
					weight		:	"bold",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Curvy" ]
		},
		{
			name		:	"Canada 1500",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Canada 1500 Regular.otf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Canada 1500 Regular Italic.otf",
					style		:	"italic",
					weight		:	"normal",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Canada 1500 Light.otf",
					style		:	"normal",
					weight		:	"lighter",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Canada 1500 Light Italic.otf",
					style		:	"italic",
					weight		:	"lighter",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Canada 1500 Bold.otf",
					style		:	"normal",
					weight		:	"bold",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Canada 1500 Bold Italic.otf",
					style		:	"italic",
					weight		:	"bold",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Basic" ]
		},
		{
			name		:	"Troll Bait",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Troll Bait.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Elaborate", "Gothic", "Negative Space" ]
		},
		{
			name		:	"TRS-Million",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/TRS-Million.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Dotted", "Retro" ]
		},
		{
			name		:	"TRS-Million Twinkle",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/TRS-Million Twinkle.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Dotted", "Retro" ]
		},
		{
			name		:	"Ur Ur Ma",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Ur Ur Ma.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Calligraphy", "Narrow" ]
		},
		{
			name		:	"Waker",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Waker.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Elaborate", "Playful", "Curvy" ]
		},
		{
			name		:	"Walshes",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Walshes.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Halloween", "Angular" ]
		},
		{
			name		:	"Webster World",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Webster World.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Negative Space", "Elaborate", "Shadow" ]
		},
		{
			name		:	"Welfare Brat",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Welfare Brat.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Elaborate", "Negative Space", "Monospace" ]
		},
		{
			name		:	"Wet Pet",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Wet Pet.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Negative Space" ]
		},
		{
			name		:	"White Lake",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/White Lake.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Elaborate" ]
		},
		{
			name		:	"Wild Sewerage",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Wild Sewerage.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Decay", "Elaborate" ]
		},
		{
			name		:	"Worthless",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Worthless.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Narrow", "Distorted" ]
		},
		{
			name		:	"Xenowort",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Xenowort.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Elaborate" ]
		},
		{
			name		:	"Xolto",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Xolto.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Block", "Elaborate" ]
		},
		{
			name		:	"Xtraflexidisc",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Xtraflexidisc.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Narrow", "Curvy" ]
		},
		{
			name		:	"Y-Band Tuner",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Y-Band Tuner.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Playful" ]
		},
		{
			name		:	"Yadou",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Yadou.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Negative Space", "Thick" ]
		},
		{
			name		:	"Yawnovision",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Yawnovision.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Gothic", "Elaborate" ]
		},
		{
			name		:	"Yellow Pills",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Yellow Pills.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Sans-Serif", "Elaborate", "Narrow" ]
		},
		{
			name		:	"Yytrium Back",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Yytrium Back.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Elaborate", "Shadow" ]
		},
		{
			name		:	"Yytrium Front",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Yytrium Front.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Elaborate", "Shadow" ]
		},
		{
			name		:	"Yytrium",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Yytrium.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Elaborate", "Shadow", "Negative Space" ]
		},
		{
			name		:	"Zodillin",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Zodillin.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Public Domain',
			tags		:	[ "Serif", "Thick", "Curvy" ]
		},
		{
			name		:	"Corporate HQ",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Corporate HQ.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Thick", "Basic" ]
		},
		{
			name		:	"Karmatic Arcade",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Karmatic Arcade.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Negative Space", "Pixelated", "Offset" ]
		},
		{
			name		:	"Curses",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Curses.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Symbol" ]
		},
		{
			name		:	"Yukarimobile",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Yukarimobile.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Thick", "Angular", "Anime" ]
		},
		{
			name		:	"Azudings 1",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Azudings 1.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Symbol", "Anime" ]
		},
		{
			name		:	"Airstrip Four",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Airstrip Four.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Rounded", "Modern" ]
		},
		{
			name		:	"Alpha Echo",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Alpha Echo.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Decay", "Thick" ]
		},
		{
			name		:	"Archipelago",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Archipelago.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Modern", "Angular", "Sideways" ]
		},
		{
			name		:	"Armalite Rifle",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Armalite Rifle.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Serif", "Decay", "Military", "Broken Letters", "Thick" ]
		},
		{
			name		:	"Boston Traffic",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Boston Traffic.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Angular", "Narrow", "Military", "Broken Letters" ]
		},
		{
			name		:	"CarbonType",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/CarbonType.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Serif", "Monospace", "Typewriter", "Smudged" ]
		},
		{
			name		:	"Daisy Script",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Daisy Script.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Handwriting", "Script" ]
		},
		{
			name		:	"Death To Smudgey",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Death To Smudgey.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Serif", "Smudged", "Elaborate" ]
		},
		{
			name		:	"Edo SZ",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Edo SZ.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Marker", "Handwriting" ]
		},
		{
			name		:	"Eurocentric",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Eurocentric.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Serif", "Thick", "Soviet" ]
		},
		{
			name		:	"Extended Play",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Extended Play.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Modern", "Playful" ]
		},
		{
			name		:	"Fawn Script",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Fawn Script.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Handwriting" ]
		},
		{
			name		:	"Freelance Kamchatka",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Freelance Kamchatka.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Elaborate", "Striped" ]
		},
		{
			name		:	"Gang of Three",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Gang of Three.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Angular" ]
		},
		{
			name		:	"Gisele Script",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Gisele Script.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Handwriting", "Script" ]
		},
		{
			name		:	"Helsinki",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Helsinki.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Thick" ]
		},
		{
			name		:	"Hydrogen Type",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Hydrogen Type.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Dotted", "Monospace" ]
		},
		{
			name		:	"ICBM SS-20",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/ICBM SS-20.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Military", "Angular", "Broken Letters", "Thick" ]
		},
		{
			name		:	"ICBM SS-25",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/ICBM SS-25.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Military", "Angular", "Broken Letters", "Thick", "Decay" ]
		},
		{
			name		:	"Know Your Product",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Know Your Product.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Broken Letters", "Thick", "Military" ]
		},
		{
			name		:	"Kremlin",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Kremlin.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Soviet", "Angular" ]
		},
		{
			name		:	"Major Snafu",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Major Snafu.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Military", "Thick", "Broken Letters" ]
		},
		{
			name		:	"Maritime Flags",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Maritime Flags.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Symbol", "Flags" ]
		},
		{
			name		:	"Maxine Script",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Maxine Script.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Handwriting" ]
		},
		{
			name		:	"Nuku Nuku",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Nuku Nuku.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Angular", "Thick", "Curvy", "Anime", "Elaborate" ]
		},
		{
			name		:	"Nyamomobile",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Nyamomobile.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Anime", "Broken Letters", "Thick", "Narrow", "Elaborate" ]
		},
		{
			name		:	"Osaka Sans Serif",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Osaka Sans Serif.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Anime", "Angular", "Thick", "Elaborate" ]
		},
		{
			name		:	"Quick End Jerk",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Quick End Jerk.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Playful", "Decay" ]
		},
		{
			name		:	"Ruth Script",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Ruth Script.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Script", "Handwriting" ]
		},
		{
			name		:	"Siamese Katsong",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Siamese Katsong.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Thick", "Elaborate" ]
		},
		{
			name		:	"Single Sleeve",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Single Sleeve.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Narrow" ]
		},
		{
			name		:	"Terry Script",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Terry Script.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Handwriting" ]
		},
		{
			name		:	"Umbrage",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Umbrage.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Decay", "Thick" ]
		},
		{
			name		:	"Underwood Champion",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Underwood Champion.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Serif", "Typewriter", "Monospace" ]
		},
		{
			name		:	"virgo.01",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/virgo.01.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Thick", "Curvy" ]
		},
		{
			name		:	"Whitehall",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Whitehall.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Handwriting" ]
		},
		{
			name		:	"Xenophone",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Xenophone.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Decay", "Elaborate" ]
		},
		{
			name		:	"Zero & Zero Is",
			authors		:	[ "Vic Fieger" ],
			variants	:	[
				{
					path		:	"_Vic Fieger Fonts/Zero & Zero Is.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	'Freeware',
			tags		:	[ "Sans-Serif", "Smudged", "Thick" ]
		},



// DO NOT MODIFY BELOW THIS POINT
	]


}







// -------------------- DO NOT MODIFY BELOW THIS POINT --------------------
// -------------------- DO NOT MODIFY BELOW THIS POINT --------------------
// -------------------- DO NOT MODIFY BELOW THIS POINT --------------------
// -------------------- DO NOT MODIFY BELOW THIS POINT --------------------







// -------------------- DO NOT MODIFY BELOW THIS POINT --------------------
// -------------------- DO NOT MODIFY BELOW THIS POINT --------------------
// -------------------- DO NOT MODIFY BELOW THIS POINT --------------------
// -------------------- DO NOT MODIFY BELOW THIS POINT --------------------







/*
The above font data will be parsed, style tags with the appropriate @font-family data will be added to the page header so
each font is available to CSS, and the data will be sorted into the customFonts object below (globally-accessible):
*/
customFonts = {
	path : '',			// This is the path to the folder the custom fonts are found in
	tags : [],			// This array contains all the unique tags found in the entire fonts list, with no duplicates
	authors : [],		// This array contains all the unique artists found in the entire fonts list, with no duplicates
	fontNames : [],		// This array contains all the unique artists found in the entire fonts list, with no duplicates
	fontData : [],		// This is an array of objects, sorted by font name, each object corresponding to a single font's attributes
	errors : []			// This array contains an entry for every font that fails to parse
}

function changeFont(destinationElement) {
	if(arguments.length < 2) {
		console.log('changeFont Error: No fonts specified! changeFont needs changeFont(<HTMLElement>, <font1>, <font2>, <font3>, etc)')
		return
	}

	let joinFontsList = []
	for(let i = 1; i < arguments.length; i++) {
		joinFontsList.push(fontsLibEscapeFont(arguments[i]))
	}

	destinationElement.style.fontFamily = joinFontsList.join(', ')
}

function getFontIndex(inputFontName) {
	inputFontName = inputFontName.toLowerCase()

	let min = 0
	let max = customFonts.fontData.length
	let mid = 0
	let test = ''

	while(min < max && test != inputFontName) {
		mid = Math.floor((min + max) / 2)
		test = customFonts.fontData[mid].name.toLowerCase()

		if(test < inputFontName) {
			min = mid + 1
		} else {
			max = mid
		}
	}

	if(test != inputFontName) {
		console.log('getFontIndex Error: Could not find font \'' + inputFontName +  '\'!')
		return false
	}
	return mid
}

function getFontData(inputFontName) {
	if(inputFontName == '') return false
	tempFontName = inputFontName.toLowerCase()

	let fontIndex = getFontIndex(tempFontName)
	if(fontIndex === false) return false

	let newFontObject = {	name : customFonts.fontData[fontIndex].name,
							authors : [],
							styles : [],
							weights : [],
							tags : [],
							license : [],
							path : '',
						}

	fontsLibParseFontDataIntoNewObject(newFontObject, customFonts.fontData[fontIndex])

	newFontObject.authors.sort()
	newFontObject.styles.sort()
	newFontObject.weights.sort()
	newFontObject.tags.sort()
	return newFontObject
}

function getAllFontData(inputFontName) {
	let tempFontName = inputFontName.toLowerCase()

	let fontIndex = getFontIndex(tempFontName)
	if(fontIndex === false) return

	return customFonts.fontData[fontIndex]
}

function fontsLibMergeIntoArray(array1, array2) {
	if(!Array.isArray(array1)) array1 = [ array1 ]
	if(!Array.isArray(array2)) array2 = [ array2 ]

	let match = false
	let newArray = array1.slice()
	for(let i = 0; i < array2.length; i++) {
		match = false
		for(let j = 0; !match && j < array1.length; j++) {
			if(array2[i] == array1[j]) {
				match = true
				break
			}
		}
		if(!match) newArray.push(array2[i])
	}
	return newArray
}

function fontsLibEscapeFont(input) {
	// Escape single quotes within the font name, then wrap the entire string in single quotes so CSS sees it correctly
	return '"' + input.replace(/'/g, '\\\'') + '"'
}

function fontsLibCheckArraysDuringFiltering(array1, array2, strict = false) {
	// strict = true  means that ALL items in array2 MUST have a match in array1, and only whole-string comparisons will be done
	// strict = false  means that any number of matches between the arrays will qualify, and partial string matches are accepted

	// Everything in array2 is assumed to already be lowercase, for speed reasons

	let matches = 0
	for(let j = 0; j < array1.length; j++) {
		let match = false
		for(let k = 0; k < array2.length; k++) {
			if(strict) {
				if(array1[j].toLowerCase() == array2[k]) match = true
			} else {
				if(array1[j].toLowerCase().search(array2[k]) >= 0) return true
			}
		}
		if(match) matches++
	}
	if(strict) {
		// If ALL of the contents in array2 were matched, return true
		if(matches == array2.length) return true
		return false
	}
	return false
}

function fontsLibParseFontDataIntoNewObject(outputObject, incomingFontData) {
	outputObject.authors = fontsLibMergeIntoArray(outputObject.authors, incomingFontData.authors)
	outputObject.tags = fontsLibMergeIntoArray(outputObject.tags, incomingFontData.tags)
	outputObject.license = incomingFontData.license

	if(incomingFontData.hasOwnProperty('variants') && incomingFontData.variants.length > 0) {
		for(let i = 0; i < incomingFontData.variants.length; i++) {
			outputObject.styles = fontsLibMergeIntoArray(outputObject.styles, incomingFontData.variants[i].style)
			outputObject.weights = fontsLibMergeIntoArray(outputObject.weights, incomingFontData.variants[i].weight)
		}
	} else {
		outputObject.styles = [ 'normal' ]
		outputObject.weights = [ 'normal' ]
	}
}

function fontsLibLowercaseArray(inputArray) {
	for(let i = 0; i < inputArray.length; i++) {
		inputArray[i] = inputArray[i].toLowerCase()
	}
}

function getFilteredFontList(searchTemplate) {
	/*	searchTemplate MUST be in the following format:
			{
				include	:	{
					name	:	nameSearchTerm,
					authors	:	[ 'author', 'names', 'array' ],
					styles	:	[ 'styles', 'array' ],
					weights	:	[ 'weights', 'array' ],
					tags	:	[ 'tags', 'array' ],
					licenses:	[ 'license', 'array' ],
				},
				exclude	:	{
					name	:	nameSearchTerm,
					authors	:	[ 'author', 'names', 'array' ],
					styles	:	[ 'styles', 'array' ],
					weights	:	[ 'weights', 'array' ],
					tags	:	[ 'tags', 'array' ],
					licenses:	[ 'license', 'array' ],
				}
			}
	*/

	let outputArray = []

	if(!searchTemplate.hasOwnProperty('include') && !searchTemplate.hasOwnProperty('exclude')) {
		return customFonts.fontData
	}

	if(!searchTemplate.hasOwnProperty('include')) {
		for(let i = 0; i < customFonts.length; i++) {
			fontsLibParseFontDataIntoNewObject(newFontObject, customFonts.fontData[i])
		}
		searchTemplate.include = {}
	} else {
		if(searchTemplate.include.hasOwnProperty('name')) {
			searchTemplate.include.name = searchTemplate.include.name.toLowerCase()
		}
		if(searchTemplate.include.hasOwnProperty('authors')) {
			if(!Array.isArray(searchTemplate.include.authors)) {
				searchTemplate.include.authors = [ searchTemplate.include.authors ]
			}
			fontsLibLowercaseArray(searchTemplate.include.authors)
		}
		if(searchTemplate.include.hasOwnProperty('styles')) {
			if(!Array.isArray(searchTemplate.include.styles)) {
				searchTemplate.include.styles = [ searchTemplate.include.styles ]
			}
			fontsLibLowercaseArray(searchTemplate.include.styles)
		}
		if(searchTemplate.include.hasOwnProperty('weights')) {
			if(!Array.isArray(searchTemplate.include.weights)) {
				searchTemplate.include.weights = [ searchTemplate.include.weights ]
			}
			fontsLibLowercaseArray(searchTemplate.include.weights)
		}
		if(searchTemplate.include.hasOwnProperty('tags')) {
			if(!Array.isArray(searchTemplate.include.tags)) {
				searchTemplate.include.tags = [ searchTemplate.include.tags ]
			}
			fontsLibLowercaseArray(searchTemplate.include.tags)
		}
		if(searchTemplate.include.hasOwnProperty('licenses')) {
			if(!Array.isArray(searchTemplate.include.licenses)) {
				searchTemplate.include.licenses = [ searchTemplate.include.licenses ]
			}
			fontsLibLowercaseArray(searchTemplate.include.licenses)
		}
	}

	if(searchTemplate.hasOwnProperty('exclude')) {
		if(searchTemplate.exclude.hasOwnProperty('name')) {
			searchTemplate.exclude.name = searchTemplate.exclude.name.toLowerCase()
		}
		if(searchTemplate.exclude.hasOwnProperty('authors')) {
			if(!Array.isArray(searchTemplate.exclude.authors)) {
				searchTemplate.exclude.authors = [ searchTemplate.exclude.authors ]
			}
			fontsLibLowercaseArray(searchTemplate.exclude.authors)
		}
		if(searchTemplate.exclude.hasOwnProperty('styles')) {
			if(!Array.isArray(searchTemplate.exclude.styles)) {
				searchTemplate.exclude.styles = [ searchTemplate.exclude.styles ]
			}
			fontsLibLowercaseArray(searchTemplate.exclude.styles)
		}
		if(searchTemplate.exclude.hasOwnProperty('weights')) {
			if(!Array.isArray(searchTemplate.exclude.weights)) {
				searchTemplate.exclude.weights = [ searchTemplate.exclude.weights ]
			}
			fontsLibLowercaseArray(searchTemplate.exclude.weights)
		}
		if(searchTemplate.exclude.hasOwnProperty('tags')) {
			if(!Array.isArray(searchTemplate.exclude.tags)) {
				searchTemplate.exclude.tags = [ searchTemplate.exclude.tags ]
			}
			fontsLibLowercaseArray(searchTemplate.exclude.tags)
		}
		if(searchTemplate.exclude.hasOwnProperty('licenses')) {
			if(!Array.isArray(searchTemplate.exclude.licenses)) {
				searchTemplate.exclude.licenses = [ searchTemplate.exclude.licenses ]
			}
			fontsLibLowercaseArray(searchTemplate.exclude.licenses)
		}
	}

	for(let i = 0; i < customFonts.fontData.length; i++) {
		if(searchTemplate.hasOwnProperty('include')) {
			// First check against the includes
			if(searchTemplate.include.hasOwnProperty('name')) {
				if(customFonts.fontData[i].name.toLowerCase().search(searchTemplate.include.name.toLowerCase()) < 0) continue
			}

			if(searchTemplate.include.hasOwnProperty('authors')) {
				if(!fontsLibCheckArraysDuringFiltering(customFonts.fontData[i].authors, searchTemplate.include.authors)) continue
			}

			if(searchTemplate.include.hasOwnProperty('styles')) {
				if(!fontsLibCheckArraysDuringFiltering([ customFonts.fontData[i].style ], searchTemplate.include.styles)) continue
			}

			if(searchTemplate.include.hasOwnProperty('weights')) {
				if(!fontsLibCheckArraysDuringFiltering([ customFonts.fontData[i].weight ], searchTemplate.include.weights)) continue
			}

			if(searchTemplate.include.hasOwnProperty('tags')) {
				if(!fontsLibCheckArraysDuringFiltering(customFonts.fontData[i].tags, searchTemplate.include.tags, true)) continue
			}

			if(searchTemplate.include.hasOwnProperty('licenses')) {
				if(!customFonts.fontData[i].hasOwnProperty('license')) continue
				if(!fontsLibCheckArraysDuringFiltering([ customFonts.fontData[i].license ], searchTemplate.include.licenses, true)) continue
			}

		}

		if(searchTemplate.hasOwnProperty('exclude')) {
			// Now check against the excludes
			if(searchTemplate.exclude.hasOwnProperty('name')) {
				if(customFonts.fontData[i].name.toLowerCase().search(searchTemplate.exclude.name.toLowerCase()) >= 0) continue
			}

			if(searchTemplate.exclude.hasOwnProperty('authors')) {
				if(fontsLibCheckArraysDuringFiltering(customFonts.fontData[i].authors, searchTemplate.exclude.authors)) continue
			}

			if(searchTemplate.exclude.hasOwnProperty('styles')) {
				if(fontsLibCheckArraysDuringFiltering([ customFonts.fontData[i].style ], searchTemplate.exclude.styles)) continue
			}

			if(searchTemplate.exclude.hasOwnProperty('weights')) {
				if(fontsLibCheckArraysDuringFiltering([ customFonts.fontData[i].weight ], searchTemplate.exclude.weights)) continue
			}

			if(searchTemplate.exclude.hasOwnProperty('tags')) {
				if(fontsLibCheckArraysDuringFiltering(customFonts.fontData[i].tags, searchTemplate.exclude.tags, false)) continue
			}

			if(searchTemplate.exclude.hasOwnProperty('licenses')) {
				if(!customFonts.fontData[i].hasOwnProperty('license')) continue
				if(fontsLibCheckArraysDuringFiltering([ customFonts.fontData[i].license ], searchTemplate.exclude.licenses, false)) continue
			}
		}


		let newFontObject = {	name : customFonts.fontData[i].name,
								authors : [],
								styles : [],
								weights : [],
								tags : [],
								license : '',
							}
		fontsLibParseFontDataIntoNewObject(newFontObject, customFonts.fontData[i])

		outputArray.push(newFontObject)
	}

	return outputArray
}

function fontsLibAddDataToObject(inputData, outputObject, key, duplicate = false) {
	let test = ''
	keyType = key.toLowerCase()

	let metadata = key
	if(metadata.toLowerCase() == 'licenses') metadata = 'license'	// A bit hacky, but this isn't plural in some uses

	if(!inputData.hasOwnProperty(metadata)) return
	if(!outputObject.hasOwnProperty(key)) outputObject[key] = []

	for(let i = 0; i < inputData[metadata].length; i++) {
		if(metadata == 'license') {
			test = inputData[metadata].toLowerCase()
		} else {
			test = inputData[metadata][i].toLowerCase()
		}

		match = false
		for(let j = 0; j < outputObject[key].length; j++) {
			if(outputObject[key][j].name.toLowerCase() == test) {
				if(!duplicate) {
					outputObject[key][j].count += 1
				}
				match = true
				break
			}
		}
		if(match == false) {
			if(metadata == 'license') {
				outputObject[key].push({ name : inputData[metadata], count : 1 })
			} else {
				outputObject[key].push({ name : inputData[metadata][i], count : 1 })
			}
		}
	if(metadata == 'license') break		// Stop executing if this is licenses - we'll just end up looping over every character in the string
	}
}

function fontsLibParseCustomFonts() {
	let type = typeof(customFontPath)
	if(type === 'undefined') {
		console.log('Error: string \'customFontPath\' is not defined! Custom fonts will be unavailable.)')
		return
	}
	if(type !== 'string') {
		console.log('Error: string \'customFontPath\' is not a string! Custom fonts will be unavailable.')
		return
	}
	if(customFontPath == '') {
		console.log('Warning: no customFontPath specified! Custom fonts will be unavailable.')
		return
	}

	let customFontData = getCustomFonts()	// Load the custom fonts array

	if(typeof(customFontData) !== 'object') {
		console.log('Warning: array \'customFontData\' does not exist! No custom fonts will be loaded.')
		return
	}
	if(!Array.isArray(customFontData)) {
		console.log('Warning: \'customFontData\' is not an array! No custom fonts will be loaded.')
		return
	}
	if(customFontData.length == 0) {
		return
	}

	customFonts.path = customFontPath

	customFontData.sort((a, b)=>{
		let aTest = a.name.toLowerCase().trim()
		let bTest = b.name.toLowerCase().trim()
		if (aTest < bTest) return -1
		if (aTest > bTest) return 1
		return 0
	})

	for(let i = 0; i < customFontData.length; i++) {
		if(customFontData[i].name != '' && customFontData[i].path != '') {
			customFontData[i].tags.sort()
			customFontData[i].authors.sort()
			for(let j = 0; j < customFontData[i].variants.length; j++) {
				if(!customFontData[i].variants[j].hasOwnProperty('style')) {
					customFontData[i].variants[j].style = 'normal'
				} else {
					if(customFontData[i].variants[j].style == '') {
						customFontData[i].variants[j].style = 'normal'
					}
				}
				if(!customFontData[i].variants[j].hasOwnProperty('weight')) {
					customFontData[i].variants[j].weight = 'normal'
				} else {
					if(customFontData[i].variants[j].weight == '') {
						customFontData[i].variants[j].weight = 'normal'
					}
				}
			}
			customFonts.fontData.push(customFontData[i])
		} else {
			customFonts.errors.push(customFontData[i])
		}
	}


	customFonts.licenses = []
	let previousName = ''
	for(let i = 0; i < customFonts.fontData.length; i++) {
		if(customFonts.fontData[i].name.toLowerCase() == previousName) {
			fontsLibAddDataToObject(customFonts.fontData[i], customFonts, 'tags', true)
			fontsLibAddDataToObject(customFonts.fontData[i], customFonts, 'authors', true)
			fontsLibAddDataToObject(customFonts.fontData[i], customFonts, 'licenses', true)
		} else {
			customFonts.fontNames.push(customFonts.fontData[i].name)
			fontsLibAddDataToObject(customFonts.fontData[i], customFonts, 'tags')
			fontsLibAddDataToObject(customFonts.fontData[i], customFonts, 'authors')
			fontsLibAddDataToObject(customFonts.fontData[i], customFonts, 'licenses')
		}
		previousName = customFonts.fontData[i].name.toLowerCase()
	}
	customFonts.authors.sort( function(a, b) {
	if(a.name > b.name) return 1
	if(a.name < b.name) return -1
	return 0
	})
	customFonts.tags.sort( function(a, b) {
	if(a.name > b.name) return 1
	if(a.name < b.name) return -1
	return 0
	})
	customFonts.licenses.sort( function(a, b) {
	if(a.name > b.name) return 1
	if(a.name < b.name) return -1
	return 0
	})


	createFontCSS(customFonts.fontData)

	// ADD THIS SEPARATELY - it should not be included with the fonts list, but it must always be included!
	createFontCSS([{ name	:	"Adobe Blank",
					authors	:	[ "Ken Lunde" ],
					variants	:	[
						{
							path	:	"Adobe Blank - by Ken Lunde/AdobeBlank.otf",
							style	:	"normal",
							weight	:	"normal",
						}
					],
					tags	:	[ "blank" ],
					licenses	:	[ "SIL Open Font License" ],
		}])

	createDefaultFont(serifFont, 'serif')
	createDefaultFont(sansSerifFont, 'sans-serif')
	createDefaultFont(cursiveFont, 'cursive')
	createDefaultFont(fantasyFont, 'fantasy')
	createDefaultFont(monospaceFont, 'monospace')
}

function createDefaultFont(fontName, defaultFamily) {
	if(fontName == '') return

	let fontObject = {}
	Object.assign(fontObject, getAllFontData(fontName))
	fontObject.name = 'nabfonts ' + defaultFamily

	createFontCSS([ fontObject ])
}

function createFontCSS(inputFonts) {
	let cutPoint = 10
	var newStyle = ''

	for(i = 0; i < inputFonts.length; i++) {
		newStyle = ''
		if(!inputFonts[i].hasOwnProperty('variants')) {
			printWarning('Malformed font data: no variants listed!', inputFonts[i])
			continue
		}
		for(j = 0; j < inputFonts[i].variants.length; j++) {
			// Figure out what format the font is
			let fontFormat = inputFonts[i].variants[j].path.split('.')
			fontFormat = fontFormat.pop()
			fontFormat = fontFormat.split('?').shift()
			fontFormat = fontFormat.split('#').shift()
			switch(fontFormat) {
				case 'otf':
					fontFormat = 'opentype'
					break
				case 'eot':
					fontFormat = 'embedded-opentype'
					break
				case 'woff':
					fontFormat = 'woff'
					break
				case 'woff2':
					fontFormat = 'woff2'
					break
				case 'ttf':
					fontFormat = 'truetype'
					break
				case 'svg':
					fontFormat = 'svg'
					break
				default:
					console.log('parseCustomFonts Error: Unrecognized font format: ' + fontFormat, inputFonts[i].variants[j])
					fontFormat = ''
					continue
			}
			newStyle += '@font-face { font-family: "' + inputFonts[i].name + '"; src: url("' + encodeURI(customFonts.path + '/' + inputFonts[i].variants[j].path) + '") format("' + fontFormat + '"); font-style: ' + inputFonts[i].variants[j].style + '; font-weight: ' + inputFonts[i].variants[j].weight + '; }\n'
		}
		inputFonts[i].css = newStyle
		fontsLibCreateFontElement(newStyle)
	}
	if(newStyle != '') {
		// Add whatever is left
		fontsLibCreateFontElement(newStyle)
	}
}

function fontsLibGetCSSValue(fontName) {
	for(let i = 0; i < customFonts.fontData.length; i++) {
		if(customFonts.fontData[i].name.toLowerCase() == fontName.toLowerCase()) {
			return customFonts.fontData[i].css
		}
	}

	return ''
}

function fontsLibCreateFontElement(inputValues) {
	new_element = document.createElement('style')
	new_element.appendChild(document.createTextNode(inputValues.toString()))
	document.head.appendChild(new_element)
}


fontsLibParseCustomFonts()	// DO NOT wait for the page to load, or we create a race condition!!
