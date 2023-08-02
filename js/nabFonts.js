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
	ATTACHED TO THEM - MY SOURCES INDICATED THESE WERE PUBLIC DOMAIN OR
	FREEWARE. IF THEY ARE NOT, AND YOU WOULD LIKE THEM REMOVED FROM THIS
	PROJECT, PLEASE	SPEAK UP AND I WILL BE HAPPY TO DO SO!

	I'M JUST A HOBBYIST TRYING TO MAKE SOMETHING NEAT, NO HARM IS
	INTENDED TO ANYONE.	:)
*/



//		------------------------------ HOW TO USE ------------------------------
//		------------------------------ HOW TO USE ------------------------------
//		------------------------------ HOW TO USE ------------------------------

/*

	***   THIS FILE MUST BE THE VERY LAST ONE INCLUDED IN THE PAGE HEADER, OR THINGS MAY CONFLICT!   ***
	***   THIS FILE MUST BE THE VERY LAST ONE INCLUDED IN THE PAGE HEADER, OR THINGS MAY CONFLICT!   ***

	***   THIS FILE MUST BE THE VERY LAST ONE INCLUDED IN THE PAGE HEADER, OR THINGS MAY CONFLICT!   ***
	***   THIS FILE MUST BE THE VERY LAST ONE INCLUDED IN THE PAGE HEADER, OR THINGS MAY CONFLICT!   ***


	ALL FONTS FOUND IN FUNCTION getCustomFonts() BELOW WILL BE AUTOMATICALLY PARSED
	WHEN THE WEB PAGE LOADS. IF YOU ADD NEW FONTS, YOU MUST SPECIFY THEM THERE!

		PARSED FONTS WILL BE STORED IN THE FOLLOWING OBJECT:
			customFonts = {
				paths : [],			// This is array of paths to the custom fonts (A single font can have many files)
				tags : [],			// This array contains all the unique tags found in the entire fonts list, with no duplicates
				authors : [],		// This array contains all the unique artists found in the entire fonts list, with no duplicates
				license : '',		// This string is the name of the license for the font
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
					paths	: [],
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


nabFontsLibPresent = true



if(typeof(customFontPath) === 'undefined') {
	customFontPath = 'fonts'	//This is the subdirectory the custom fonts are found in, relative to the HTML file loading this library
	// DO NOT change this value if it has already been declared!
}



// If they have not already been set, let's set the default fonts here
// USE AN EMPTY STRING FOR NONE
if(typeof(serifFont) === 'undefined')			serifFont		=	'Crimson'
if(typeof(sansSerifFont) === 'undefined')		sansSerifFont	=	'Canada 1500'
if(typeof(cursiveFont) === 'undefined') 		cursiveFont		=	'Alex Brush'
if(typeof(fantasyFont) === 'undefined') 		fantasyFont		=	'Holy Union'
if(typeof(monospaceFont) === 'undefined') 		monospaceFont	=	'Cutive Mono'



nabFontsFontWeights = {
	min : 100,
	max : 900,
	'default' : 400,

	'100' : 'Thin',
	'200' : 'Extra Light',
	'300' : 'Light',
	'400' : 'Normal',
	'500' : 'Medium',
	'600' : 'Semi Bold',
	'700' : 'Bold',
	'800' : 'Extra Bold',
	'900' : 'Black',
}


function getCustomFonts() {
	return [	//	IF YOU ADD ANY ADDITIONAL FONTS, YOU MUST DEFINE THEM AS OBJECTS IN THIS ARRAY.
// DO NOT MODIFY THIS LINE			/* PYTHON START READ POINT */

{
	"name":"10.15 Saturday Night",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/10.15 Saturday Night - by Aenigma Fonts/10.15 Saturday Night.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"3D",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"10.15 Saturday Night Round",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/10.15 Saturday Night - by Aenigma Fonts/10.15 Saturday Night Round.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"3D",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"18 Holes",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Double Bogey - by Aenigma Fonts/18 Holes.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Blank pieces:[br][grid cols=3][vbox][color fg=f72]{[/color][size font='18 Holes' size=350]{[/size][/vbox][vbox][color fg=f72]^[/color][size font='18 Holes' size=350]^[/size][/vbox][vbox][color fg=f72]}[/color][size font='18 Holes' size=350]}[/size][/vbox][/grid][br][br]Other extra characters:[br][grid cols=4][vbox][size font='18 Holes' size=350]\u00aa[/size][/vbox][vbox][size font='18 Holes' size=350]\u00ab[/size][/vbox][vbox][size font='18 Holes' size=350]\u00ac[/size][/vbox][vbox][size font='18 Holes' size=350]\u00ae[/size][/vbox][vbox][size font='18 Holes' size=350]\u0160[/size][/vbox][vbox][size font='18 Holes' size=350]\u00a7[/size][/vbox][vbox][size font='18 Holes' size=350]\u0161[/size][/vbox][vbox][size font='18 Holes' size=350]\u00a9[/size][/vbox][/grid][br][grid cols=5][vbox][size font='18 Holes' size=350]\u00af[/size][/vbox][vbox][size font='18 Holes' size=350]\u00b0[/size][/vbox][vbox][size font='18 Holes' size=350]\u00b1[/size][/vbox][vbox][size font='18 Holes' size=350]\u00b2[/size][/vbox][vbox][size font='18 Holes' size=350]\u00b3[/size][/vbox][vbox][size font='18 Holes' size=350]\u00b5[/size][/vbox][vbox][size font='18 Holes' size=350]\u00b6[/size][/vbox][vbox][size font='18 Holes' size=350]\u00b7[/size][/vbox][vbox][size font='18 Holes' size=350]\u00b9[/size][/vbox][vbox][size font='18 Holes' size=350]\u00ba[/size][/vbox][vbox][size font='18 Holes' size=350]\u00bb[/size][/vbox][vbox][size font='18 Holes' size=350]\u0152[/size][/vbox][vbox][size font='18 Holes' size=350]\u0153[/size][/vbox][vbox][size font='18 Holes' size=350]\u0178[/size][/vbox][vbox][size font='18 Holes' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Negative Space",
		"Ornamental"
	]
},
{
	"name":"36 Days Ago",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/36 Days Ago - by Aenigma Fonts/36 Days Ago.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=5][vbox][size font='36 days ago' size=350]\u00c8[/size][/vbox][vbox][size font='36 days ago' size=350]\u00c9[/size][/vbox][vbox][size font='36 days ago' size=350]\u00ca[/size][/vbox][vbox][size font='36 days ago' size=350]\u00cb[/size][/vbox][vbox][size font='36 days ago' size=350]\u00cc[/size][/vbox][vbox][size font='36 days ago' size=350]\u00cd[/size][/vbox][vbox][size font='36 days ago' size=350]\u00ce[/size][/vbox][vbox][size font='36 days ago' size=350]\u00cf[/size][/vbox][vbox][size font='36 days ago' size=350]\u00d0[/size][/vbox][vbox][size font='36 days ago' size=350]\u00d1[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Plain"
	]
},
{
	"name":"36 Days Ago Thick",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/36 Days Ago - by Aenigma Fonts/36 Days Ago Thick.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=5][vbox][size font='36 days ago thick' size=350]\u00c8[/size][/vbox][vbox][size font='36 days ago thick' size=350]\u00c9[/size][/vbox][vbox][size font='36 days ago thick' size=350]\u00ca[/size][/vbox][vbox][size font='36 days ago thick' size=350]\u00cb[/size][/vbox][vbox][size font='36 days ago thick' size=350]\u00cc[/size][/vbox][vbox][size font='36 days ago thick' size=350]\u00cd[/size][/vbox][vbox][size font='36 days ago thick' size=350]\u00ce[/size][/vbox][vbox][size font='36 days ago thick' size=350]\u00cf[/size][/vbox][vbox][size font='36 days ago thick' size=350]\u00d0[/size][/vbox][vbox][size font='36 days ago thick' size=350]\u00d1[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"37 Kilobyte",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/37 Kilobyte.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Rounded Chars",
		"Thick Stroke"
	]
},
{
	"name":"90 Stars",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/90 Stars - by Aenigma Fonts/90 Stars.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Symbols Only",
		"Stars"
	]
},
{
	"name":"309",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/309.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/309 Italic.ttf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"3D LET",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/3D LET - by Aenigma Fonts/3D LET.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"3D",
		"Hard To Read",
		"Monospace",
		"Negative Space",
		"No Lowercase",
		"No Symbols",
		"Ornamental"
	]
},
{
	"name":"6809 Chargen",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/6809 Chargen.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Dotted",
		"Ornamental",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"8-Bit Limit",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/8-Bit Limit - by Aenigma Fonts/8-Bit Limit.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Broken Letters",
		"Partial Symbol Set",
		"Pixelated",
		"Retro"
	]
},
{
	"name":"8-Bit Limit Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/8-Bit Limit - by Aenigma Fonts/8-Bit Limit Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Broken Letters",
		"Negative Space",
		"Partial Symbol Set",
		"Pixelated",
		"Retro"
	]
},
{
	"name":"8-Bit Limit Round",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/8-Bit Limit - by Aenigma Fonts/8-Bit Limit Round.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Broken Letters",
		"Partial Symbol Set",
		"Pixelated",
		"Retro"
	]
},
{
	"name":"8-Bit Limit Round Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/8-Bit Limit - by Aenigma Fonts/8-Bit Limit Round Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Broken Letters",
		"Negative Space",
		"Partial Symbol Set",
		"Pixelated",
		"Retro"
	]
},
{
	"name":"A To Z",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/A To Z.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distorted",
		"No Lowercase",
		"No Symbols",
		"Ornamental",
		"Pixelated",
		"Retro"
	]
},
{
	"name":"Aaargh",
	"authors":[
		"Tup Wanders"
	],
	"variants":[
		{
			"path":"_Tup Wanders/Free Fonts/Aaargh.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain",
		"Thin Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Abberancy",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Abberancy.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Leading Left Hook",
		"Ornamental",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"Acid Reflux",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Acid Reflux - by Aenigma Fonts/Acid Reflux.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distorted",
		"Negative Space",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Ackbar",
	"authors":[
		"A J Paglia"
	],
	"variants":[
		{
			"path":"_A J Paglia Fonts/Free Fonts/Ackbar.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Partial Symbol Set",
		"Plain",
		"Star Wars",
		"Thick Stroke"
	]
},
{
	"name":"Acknowledge",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Acknowledge - by Aenigma Fonts/Acknowledge.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Pixelated",
		"Plain",
		"Retro"
	]
},
{
	"name":"Adriator",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Adriator.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Multi-Stroke",
		"No Lowercase",
		"Ornamental",
		"Thick Stroke"
	]
},
{
	"name":"AE Systematic",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/AE Systematic - by Aenigma Fonts/AE Systematic.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Pixelated",
		"Retro"
	]
},
{
	"name":"Aenigma Scrawl 4",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Aenigma Scrawl 4 - by Aenigma Fonts/Aenigma Scrawl 4.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Handwriting",
		"Playful",
		"Slanted",
		"Uneven Chars"
	]
},
{
	"name":"Aftermath",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Aftermath - by Aenigma Fonts/Aftermath.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distressed",
		"Hard To Read",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Airborne GP",
	"authors":[
		"Gustavo Paz L"
	],
	"variants":[
		{
			"path":"Airborne GP - by Gustavo Paz L/Airborne GP.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"ShareAlike License",
	"tags":[
		"Sans-Serif",
		"Calligraphy",
		"Elegant",
		"Partial Symbol Set",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Airstrip Four",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Airstrip Four.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"No Uppercase",
		"Partial Symbol Set",
		"Plain",
		"Rounded Edges"
	]
},
{
	"name":"Aldo the Apache",
	"authors":[
		"A J Paglia"
	],
	"variants":[
		{
			"path":"_A J Paglia Fonts/Free Fonts/Aldo the Apache.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Alegreya",
	"authors":[
		"Juan Pablo del Peral"
	],
	"variants":[
		{
			"path":"Alegreya - by Juan Pablo del Peral/Alegreya.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"Alegreya - by Juan Pablo del Peral/Alegreya Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"Alegreya - by Juan Pablo del Peral/Alegreya Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"Alegreya - by Juan Pablo del Peral/Alegreya Bold Italic.otf",
			"style":"italic",
			"weight":"bold"
		},
		{
			"path":"Alegreya - by Juan Pablo del Peral/Alegreya Black.otf",
			"style":"normal",
			"weight":"900"
		},
		{
			"path":"Alegreya - by Juan Pablo del Peral/Alegreya Black Italic.otf",
			"style":"italic",
			"weight":"900"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Alegreya SC",
	"authors":[
		"Juan Pablo del Peral"
	],
	"variants":[
		{
			"path":"Alegreya - by Juan Pablo del Peral/Alegreya SC.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"Alegreya - by Juan Pablo del Peral/Alegreya SC Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"Alegreya - by Juan Pablo del Peral/Alegreya SC Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"Alegreya - by Juan Pablo del Peral/Alegreya SC Bold Italic.otf",
			"style":"italic",
			"weight":"bold"
		},
		{
			"path":"Alegreya - by Juan Pablo del Peral/Alegreya SC Black.otf",
			"style":"normal",
			"weight":"900"
		},
		{
			"path":"Alegreya - by Juan Pablo del Peral/Alegreya SC Black Italic.otf",
			"style":"italic",
			"weight":"900"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Alex Brush",
	"authors":[
		"TypeSETit"
	],
	"variants":[
		{
			"path":"Alex Brush - by TypeSETit/Alex Brush.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Elegant",
		"Handwriting",
		"Script",
		"Slanted"
	]
},
{
	"name":"AlleyOop",
	"authors":[
		"A J Paglia"
	],
	"variants":[
		{
			"path":"_A J Paglia Fonts/Free Fonts/AlleyOop.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"No Lowercase",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"Allura",
	"authors":[
		"TypeSETit"
	],
	"variants":[
		{
			"path":"Allura - by TypeSETit/Allura.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Handwriting",
		"Script",
		"Slanted"
	]
},
{
	"name":"Alpha Beta",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Alpha Beta - by Aenigma Fonts/Alpha Beta.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Pixelated",
		"Retro"
	]
},
{
	"name":"Alpha Echo",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Alpha Echo.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decay",
		"No Lowercase",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Amalgamate",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Amalgamate - by Aenigma Fonts/Amalgamate.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters",
		"Striped"
	]
},
{
	"name":"Amalgamate Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Amalgamate - by Aenigma Fonts/Amalgamate Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters",
		"Negative Space",
		"Outline",
		"Striped"
	]
},
{
	"name":"Amiko",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Amiko - by Impallari Type/Amiko.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Impallari Type/Amiko - by Impallari Type/Amiko Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Amiko - by Impallari Type/Amiko Bold.ttf",
			"style":"normal",
			"weight":"Bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Plain",
		"Playful",
		"Thick Stroke"
	]
},
{
	"name":"Amity Jack",
	"authors":[
		"A J Paglia"
	],
	"variants":[
		{
			"path":"_A J Paglia Fonts/Free Fonts/Amity Jack.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"No Lowercase",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"Amperzand",
	"authors":[
		"A J Paglia"
	],
	"variants":[
		{
			"path":"_A J Paglia Fonts/Free Fonts/Amperzand.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Leading Left Hook",
		"Ornamental",
		"Partial Symbol Set",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"Amplitude",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Amplitude - by Aenigma Fonts/Amplitude.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=7][vbox][size font='amplitude' size=350]\u00cd[/size][/vbox][vbox][size font='amplitude' size=350]\u00ce[/size][/vbox][vbox][size font='amplitude' size=350]\u00cf[/size][/vbox][vbox][size font='amplitude' size=350]\u00d0[/size][/vbox][vbox][size font='amplitude' size=350]\u00d1[/size][/vbox][vbox][size font='amplitude' size=350]\u00d2[/size][/vbox][vbox][size font='amplitude' size=350]\u00d3[/size][/vbox][vbox][size font='amplitude' size=350]\u00d4[/size][/vbox][vbox][size font='amplitude' size=350]\u00d5[/size][/vbox][vbox][size font='amplitude' size=350]\u00d6[/size][/vbox][vbox][size font='amplitude' size=350]\u00d7[/size][/vbox][vbox][size font='amplitude' size=350]\u00d8[/size][/vbox][vbox][size font='amplitude' size=350]\u00d9[/size][/vbox][vbox][size font='amplitude' size=350]\u00ce[/size][/vbox][vbox][size font='amplitude' size=350]\u00da[/size][/vbox][vbox][size font='amplitude' size=350]\u00db[/size][/vbox][vbox][size font='amplitude' size=350]\u00dc[/size][/vbox][vbox][size font='amplitude' size=350]\u00dd[/size][/vbox][vbox][size font='amplitude' size=350]\u00de[/size][/vbox][vbox][size font='amplitude' size=350]\u00df[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Typewriter",
		"Vintage"
	]
},
{
	"name":"Anasthesia",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Anasthesia.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Anasthesia Italic.ttf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Anchor Jack",
	"authors":[
		"A J Paglia"
	],
	"variants":[
		{
			"path":"_A J Paglia Fonts/Free Fonts/Anchor Jack.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"No Lowercase",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"Archipelago",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Archipelago.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Hard To Read",
		"No Lowercase",
		"Partial Symbol Set",
		"Sideways",
		"Uneven Chars"
	]
},
{
	"name":"Arizonia",
	"authors":[
		"TypeSETit"
	],
	"variants":[
		{
			"path":"Arizonia - by TypeSETit/Arizonia.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Calligraphy",
		"Elegant",
		"Handwriting",
		"Script",
		"Slanted"
	]
},
{
	"name":"Arm Wrestler",
	"authors":[
		"A J Paglia"
	],
	"variants":[
		{
			"path":"_A J Paglia Fonts/Free Fonts/Arm Wrestler.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Partial Symbol Set",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"Armalite Rifle",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Armalite Rifle.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Broken Letters",
		"Decay",
		"No Lowercase",
		"Partial Symbol Set",
		"Stencil",
		"Thick Stroke"
	]
},
{
	"name":"Arthritis",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Arthritis - by Aenigma Fonts/Arthritis.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Bones",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Partial Symbol Set"
	]
},
{
	"name":"Aspartame",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Aspartame - by Aenigma Fonts/Aspartame.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Curvy Letters",
		"Plain"
	]
},
{
	"name":"Asterisp Alpha",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Asterisp Alpha.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only"
	]
},
{
	"name":"Asterisp Beta",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Asterisp Beta.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only"
	]
},
{
	"name":"Asterisp Delta",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Asterisp Delta.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only"
	]
},
{
	"name":"Asterisp Epsilon",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Asterisp Epsilon.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only"
	]
},
{
	"name":"Asterisp Eta",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Asterisp Eta.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only"
	]
},
{
	"name":"Asterisp Gamma",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Asterisp Gamma.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only"
	]
},
{
	"name":"Asterisp Iota",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Asterisp Iota.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only"
	]
},
{
	"name":"Asterisp Theta",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Asterisp Theta.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only"
	]
},
{
	"name":"Asterisp Zeta",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Asterisp Zeta.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only"
	]
},
{
	"name":"Ataxia",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Ataxia - by Aenigma Fonts/Ataxia.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Block Shaped",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Ataxia Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Ataxia - by Aenigma Fonts/Ataxia Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Block Shaped",
		"Negative Space",
		"Outline",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Audiowide",
	"authors":[
		"Astigmatic One Eye Typographic Institute"
	],
	"variants":[
		{
			"path":"Audiowide - by Astigmatic One Eye Typographic Institute/Audiowide.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Rounded Chars"
	]
},
{
	"name":"Automatica",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Automatica - by Aenigma Fonts/Automatica.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Rounded Chars",
		"Rounded Edges",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Babelfish Contour",
	"authors":[
		"Manfred Klein"
	],
	"variants":[
		{
			"path":"Babelfish - by Manfred Klein/Babelfish Contour.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"No Symbols",
		"Ornamental",
		"Outline",
		"Playful",
		"Thick Stroke"
	]
},
{
	"name":"Babelfish Dancing",
	"authors":[
		"Manfred Klein"
	],
	"variants":[
		{
			"path":"Babelfish - by Manfred Klein/Babelfish Dancing.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"No Symbols",
		"Ornamental",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"Babelfish Zebral",
	"authors":[
		"Manfred Klein"
	],
	"variants":[
		{
			"path":"Babelfish - by Manfred Klein/Babelfish Zebral.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Decay",
		"No Symbols",
		"Ornamental",
		"Playful",
		"Striped"
	]
},
{
	"name":"Backlash",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Backlash - by Aenigma Fonts/Backlash.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"Bailey's Car",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Bailey's Car.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Fire",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Partial Symbol Set"
	]
},
{
	"name":"BALL",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/BALL.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Dotted",
		"Ornamental",
		"Partial Symbol Set",
		"Uneven Chars"
	]
},
{
	"name":"Baltar",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Baltar.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"Bandwidth",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Bandwidth - by Aenigma Fonts/Bandwidth.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"To make a 'Banded' space, use the underscore:[br][grid][vbox][size font='bandwidth' size=350]_[/size][/vbox][/grid][br][br]End Caps:[br][grid cols=3][vbox]Round:[br][grid cols=2][vbox][size font='bandwidth' size=350]\u00c0[/size][/vbox][vbox][size font='bandwidth' size=350]\u00c1[/size][/vbox][/grid][/vbox][vbox]Square:[br][grid cols=2][vbox][size font='bandwidth' size=350]\u00c2[/size][/vbox][vbox][size font='bandwidth' size=350]\u00c3[/size][/vbox][/grid][/vbox][vbox]Triangular:[br][grid cols=2][vbox][size font='bandwidth' size=350]\u00c4[/size][/vbox][vbox][size font='bandwidth' size=350]\u00c5[/size][/vbox][/grid][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Ornamental",
		"Rounded Chars",
		"Striped"
	]
},
{
	"name":"Bandwidth Bandless",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Bandwidth - by Aenigma Fonts/Bandwidth Bandless.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Rounded Chars",
		"Striped"
	]
},
{
	"name":"Bandwidth Bandmess",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Bandwidth - by Aenigma Fonts/Bandwidth Bandmess.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distressed",
		"Playful",
		"Rounded Chars",
		"Striped",
		"Uneven Chars"
	]
},
{
	"name":"Barbatrick",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Barbatrick.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Distorted",
		"No Lowercase",
		"Ornamental",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"Beagle Brigade AU",
	"authors":[
		"A J Paglia"
	],
	"variants":[
		{
			"path":"_A J Paglia Fonts/Free Fonts/Beagle Brigade AU.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Decay",
		"No Lowercase",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"Beat My Guest",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Beat My Guest.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Handwriting",
		"Negative Space",
		"Ornamental",
		"Uneven Chars"
	]
},
{
	"name":"Bend 2 Squares",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Bend 2 Squares - by Aenigma Fonts/Bend 2 Squares.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Plain"
	]
},
{
	"name":"Bend 2 Squares Outline 1",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Bend 2 Squares - by Aenigma Fonts/Bend 2 Squares Outline 1.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Negative Space",
		"Outline",
		"Plain"
	]
},
{
	"name":"Bend 2 Squares Outline 2",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Bend 2 Squares - by Aenigma Fonts/Bend 2 Squares Outline 2.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Negative Space",
		"Outline",
		"Plain",
		"Shadow"
	]
},
{
	"name":"Bendable",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Bendable - by Aenigma Fonts/Bendable.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Plain",
		"Playful"
	]
},
{
	"name":"Betsy Flanagan",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Betsy Flanagan.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Keyboard",
		"Monospace",
		"Ornamental"
	]
},
{
	"name":"Betsy Flanagan 2",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Betsy Flanagan 2.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only",
		"Decorated",
		"Keyboard",
		"Ornamental"
	]
},
{
	"name":"Bewilder",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Bewilder - by Aenigma Fonts/Bewilder.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Calligraphy",
		"Narrow Chars",
		"Slanted"
	]
},
{
	"name":"Bewilder Thick",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Bewilder - by Aenigma Fonts/Bewilder Thick.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Calligraphy",
		"Narrow Chars",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"BIGARIAL",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/BIGARIAL.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"BIGARIALLEFT",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/BIGARIALLEFT.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Hard To Read",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Sideways",
		"Thick Stroke"
	]
},
{
	"name":"Bilbo",
	"authors":[
		"Robert Leuschke"
	],
	"variants":[
		{
			"path":"Bilbo - by Robert Leuschke/Bilbo.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Handwriting",
		"Script",
		"Slanted"
	]
},
{
	"name":"Bilbo Swash Caps",
	"authors":[
		"TypeSETit"
	],
	"variants":[
		{
			"path":"Bilbo Swash Caps - by TypeSETit/Bilbo Swash Caps.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Elegant",
		"Handwriting",
		"Script",
		"Slanted"
	]
},
{
	"name":"Binary",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Binary - by Aenigma Fonts/Binary.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"ASCII",
		"Binary",
		"Decorated",
		"Monospace",
		"Ornamental",
		"Pixelated",
		"Retro"
	]
},
{
	"name":"Binary 01s",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Binary - by Aenigma Fonts/Binary 01s.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Symbols Only",
		"ASCII",
		"Binary",
		"Decorated",
		"Monospace",
		"Ornamental",
		"Pixelated",
		"Retro"
	]
},
{
	"name":"Binary CHR",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Binary - by Aenigma Fonts/Binary CHR.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Pixelated",
		"Retro"
	]
},
{
	"name":"Biometric Joe",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Biometric Joe.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Decay",
		"Decorated",
		"Ornamental"
	]
},
{
	"name":"Birdland Aeroplane",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Birdland Aeroplane.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Birdland Aeroplane Bold.otf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"Bit Blocks",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Bit Blocks - by Aenigma Fonts/Bit Blocks.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"[grid cols=10 size=130 font='Bit Blocks'][hbox][/hbox][hbox][/hbox][hbox][/hbox][hbox]![/hbox][hbox]\"[/hbox][hbox]#[/hbox][hbox]$[/hbox][hbox]%[/hbox][hbox]&[/hbox][hbox]'[/hbox][hbox]([/hbox][hbox])[/hbox][hbox]*[/hbox][hbox]+[/hbox][hbox],[/hbox][hbox]-[/hbox][hbox].[/hbox][hbox]/[/hbox][hbox]0[/hbox][hbox]1[/hbox][hbox]2[/hbox][hbox]3[/hbox][hbox]4[/hbox][hbox]5[/hbox][hbox]6[/hbox][hbox]7[/hbox][hbox]8[/hbox][hbox]9[/hbox][hbox]:[/hbox][hbox];[/hbox][hbox]<[/hbox][hbox]=[/hbox][hbox]>[/hbox][hbox]?[/hbox][hbox]@[/hbox][hbox]A[/hbox][hbox]B[/hbox][hbox]C[/hbox][hbox]D[/hbox][hbox]E[/hbox][hbox]F[/hbox][hbox]G[/hbox][hbox]H[/hbox][hbox]I[/hbox][hbox]J[/hbox][hbox]K[/hbox][hbox]L[/hbox][hbox]M[/hbox][hbox]N[/hbox][hbox]O[/hbox][hbox]P[/hbox][hbox]Q[/hbox][hbox]R[/hbox][hbox]S[/hbox][hbox]T[/hbox][hbox]U[/hbox][hbox]V[/hbox][hbox]W[/hbox][hbox]X[/hbox][hbox]Y[/hbox][hbox]Z[/hbox][hbox][[/hbox][hbox]\\[/hbox][hbox]][/hbox][hbox]^[/hbox][hbox]_[/hbox][hbox]`[/hbox][hbox]a[/hbox][hbox]b[/hbox][hbox]c[/hbox][hbox]d[/hbox][hbox]e[/hbox][hbox]f[/hbox][hbox]g[/hbox][hbox]h[/hbox][hbox]i[/hbox][hbox]j[/hbox][hbox]k[/hbox][hbox]l[/hbox][hbox]m[/hbox][hbox]n[/hbox][hbox]o[/hbox][hbox]p[/hbox][hbox]q[/hbox][hbox]r[/hbox][hbox]s[/hbox][hbox]t[/hbox][hbox]u[/hbox][hbox]v[/hbox][hbox]w[/hbox][hbox]x[/hbox][hbox]y[/hbox][hbox]z[/hbox][hbox]{[/hbox][hbox]|[/hbox][hbox]}[/hbox][hbox]~[/hbox][hbox]\u007f[/hbox][hbox]\u0080[/hbox][hbox]\u0081[/hbox][hbox]\u0082[/hbox][hbox]\u0083[/hbox][hbox]\u0084[/hbox][hbox]\u0085[/hbox][hbox]\u0086[/hbox][hbox]\u0087[/hbox][hbox]\u0088[/hbox][hbox]\u0089[/hbox][hbox]\u008a[/hbox][hbox]\u008b[/hbox][hbox]\u008c[/hbox][hbox]\u008d[/hbox][hbox]\u008e[/hbox][hbox]\u008f[/hbox][hbox]\u0090[/hbox][hbox]\u0091[/hbox][hbox]\u0092[/hbox][hbox]\u0093[/hbox][hbox]\u0094[/hbox][hbox]\u0095[/hbox][hbox]\u0096[/hbox][hbox]\u0097[/hbox][hbox]\u0098[/hbox][hbox]\u0099[/hbox][hbox]\u009a[/hbox][hbox]\u009b[/hbox][hbox]\u009c[/hbox][hbox]\u009d[/hbox][hbox]\u009e[/hbox][hbox]\u009f[/hbox][hbox]\u00a0[/hbox][hbox]\u00a1[/hbox][hbox]\u00a2[/hbox][hbox]\u00a3[/hbox][hbox]\u20ac[/hbox][hbox]\u00a5[/hbox][hbox]\u0160[/hbox][hbox]\u00a7[/hbox][hbox]\u0161[/hbox][hbox]\u00a9[/hbox][hbox]\u00aa[/hbox][hbox]\u00ab[/hbox][hbox]\u00ac[/hbox][hbox]\u00ad[/hbox][hbox]\u00ae[/hbox][hbox]\u00af[/hbox][hbox]\u00b0[/hbox][hbox]\u00b1[/hbox][hbox]\u00b2[/hbox][hbox]\u00b3[/hbox][hbox]\u017d[/hbox][hbox]\u00b5[/hbox][hbox]\u00b6[/hbox][hbox]\u00b7[/hbox][hbox]\u017e[/hbox][hbox]\u00b9[/hbox][hbox]\u00ba[/hbox][hbox]\u00bb[/hbox][hbox]\u0152[/hbox][hbox]\u0153[/hbox][hbox]\u0178[/hbox][hbox]\u00bf[/hbox][hbox]\u00c0[/hbox][hbox]\u00c1[/hbox][hbox]\u00c2[/hbox][hbox]\u00c3[/hbox][hbox]\u00c4[/hbox][hbox]\u00c5[/hbox][hbox]\u00c6[/hbox][hbox]\u00c7[/hbox][hbox]\u00c8[/hbox][hbox]\u00c9[/hbox][hbox]\u00ca[/hbox][hbox]\u00cb[/hbox][hbox]\u00cc[/hbox][hbox]\u00cd[/hbox][hbox]\u00ce[/hbox][hbox]\u00cf[/hbox][hbox]\u00d0[/hbox][hbox]\u00d1[/hbox][hbox]\u00d2[/hbox][hbox]\u00d3[/hbox][hbox]\u00d4[/hbox][hbox]\u00d5[/hbox][hbox]\u00d6[/hbox][hbox]\u00d7[/hbox][hbox]\u00d8[/hbox][hbox]\u00d9[/hbox][hbox]\u00da[/hbox][hbox]\u00db[/hbox][hbox]\u00dc[/hbox][hbox]\u00dd[/hbox][hbox]\u00de[/hbox][hbox]\u00df[/hbox][hbox]\u00e0[/hbox][hbox]\u00e1[/hbox][hbox]\u00e2[/hbox][hbox]\u00e3[/hbox][hbox]\u00e4[/hbox][hbox]\u00e5[/hbox][hbox]\u00e6[/hbox][hbox]\u00e7[/hbox][hbox]\u00e8[/hbox][hbox]\u00e9[/hbox][hbox]\u00ea[/hbox][hbox]\u00eb[/hbox][hbox]\u00ec[/hbox][hbox]\u00ed[/hbox][hbox]\u00ee[/hbox][hbox]\u00ef[/hbox][hbox]\u00f0[/hbox][hbox]\u00f1[/hbox][hbox]\u00f2[/hbox][hbox]\u00f3[/hbox][hbox]\u00f4[/hbox][hbox]\u00f5[/hbox][hbox]\u00f6[/hbox][hbox]\u00f7[/hbox][hbox]\u00f8[/hbox][hbox]\u00f9[/hbox][hbox]\u00fa[/hbox][hbox]\u00fb[/hbox][hbox]\u00fc[/hbox][hbox]\u00fd[/hbox][hbox]\u00fe[/hbox][hbox]\u00ff[/hbox][hbox][/hbox][hbox][/hbox][hbox][/hbox][hbox][/hbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Symbols Only",
		"Monospace"
	]
},
{
	"name":"Biting My Nails",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Biting My Nails.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"No Lowercase"
	]
},
{
	"name":"Biting My Nails - Outline",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Biting My Nails - Outline.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Negative Space",
		"No Lowercase",
		"Outline"
	]
},
{
	"name":"Bizzare",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Bizzare.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Bizzare Bold.ttf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters",
		"Hard To Read",
		"No Lowercase",
		"No Symbols",
		"Ornamental",
		"Uneven Chars"
	]
},
{
	"name":"Blackoninaut",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Blackoninaut - by Aenigma Fonts/Blackoninaut.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Aenigma Fonts/Blackoninaut - by Aenigma Fonts/Blackoninaut Bold.ttf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=8][vbox][size font='blackoninaut' size=350]\u00b0[/size][/vbox][vbox][size font='blackoninaut' size=350]\u00b1[/size][/vbox][vbox][size font='blackoninaut' size=350]\u00b2[/size][/vbox][vbox][size font='blackoninaut' size=350]\u00b3[/size][/vbox][vbox][size font='blackoninaut' size=350]\u00b5[/size][/vbox][vbox][size font='blackoninaut' size=350]\u00b6[/size][/vbox][vbox][size font='blackoninaut' size=350]\u00b7[/size][/vbox][vbox][size font='blackoninaut' size=350]\u017e[/size][/vbox][vbox][size font='blackoninaut' size=350]\u00b9[/size][/vbox][vbox][size font='blackoninaut' size=350]\u00ba[/size][/vbox][vbox][size font='blackoninaut' size=350]\u00bb[/size][/vbox][vbox][size font='blackoninaut' size=350]\u0152[/size][/vbox][vbox][size font='blackoninaut' size=350]\u0153[/size][/vbox][vbox][size font='blackoninaut' size=350]\u0178[/size][/vbox][vbox][size font='blackoninaut' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Elegant",
		"Gothic"
	]
},
{
	"name":"Blackoninaut Redux",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Blackoninaut - by Aenigma Fonts/Blackoninaut Redux.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=8][vbox][size font='blackoninaut redux' size=350]\u00b0[/size][/vbox][vbox][size font='blackoninaut redux' size=350]\u00b1[/size][/vbox][vbox][size font='blackoninaut redux' size=350]\u00b2[/size][/vbox][vbox][size font='blackoninaut redux' size=350]\u00b3[/size][/vbox][vbox][size font='blackoninaut redux' size=350]\u00b5[/size][/vbox][vbox][size font='blackoninaut redux' size=350]\u00b6[/size][/vbox][vbox][size font='blackoninaut redux' size=350]\u00b7[/size][/vbox][vbox][size font='blackoninaut redux' size=350]\u017e[/size][/vbox][vbox][size font='blackoninaut redux' size=350]\u00b9[/size][/vbox][vbox][size font='blackoninaut redux' size=350]\u00ba[/size][/vbox][vbox][size font='blackoninaut redux' size=350]\u00bb[/size][/vbox][vbox][size font='blackoninaut redux' size=350]\u0152[/size][/vbox][vbox][size font='blackoninaut redux' size=350]\u0153[/size][/vbox][vbox][size font='blackoninaut redux' size=350]\u0178[/size][/vbox][vbox][size font='blackoninaut redux' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Elegant",
		"Gothic",
		"Narrow Chars"
	]
},
{
	"name":"Bleak Segments",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Bleak Segments - by Aenigma Fonts/Bleak Segments.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Ornamental",
		"Striped"
	]
},
{
	"name":"Block Tilt",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Block Tilt - by Aenigma Fonts/Block Tilt.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"3D",
		"Blocks",
		"Ornamental",
		"Partial Symbol Set",
		"Slanted"
	]
},
{
	"name":"Blox",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Blox - by Aenigma Fonts/Blox.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"3D",
		"Blocks",
		"Decorated",
		"No Lowercase",
		"No Symbols",
		"Ornamental"
	]
},
{
	"name":"Bobcaygeon",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Bobcaygeon - by Aenigma Fonts/Bobcaygeon.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Bobcaygeon Plain",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Bobcaygeon - by Aenigma Fonts/Bobcaygeon Plain.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Plain",
		"Rounded Edges"
	]
},
{
	"name":"Bocuma",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Bocuma - by Aenigma Fonts/Bocuma.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=7][vbox][size font='bocuma' size=350]\u00b2[/size][/vbox][vbox][size font='bocuma' size=350]\u00b3[/size][/vbox][vbox][size font='bocuma' size=350]\u00b5[/size][/vbox][vbox][size font='bocuma' size=350]\u00b6[/size][/vbox][vbox][size font='bocuma' size=350]\u00b7[/size][/vbox][vbox][size font='bocuma' size=350]\u00b9[/size][/vbox][vbox][size font='bocuma' size=350]\u00ba[/size][/vbox][vbox][size font='bocuma' size=350]\u00bb[/size][/vbox][vbox][size font='bocuma' size=350]\u0152[/size][/vbox][vbox][size font='bocuma' size=350]\u0153[/size][/vbox][vbox][size font='bocuma' size=350]\u0178[/size][/vbox][vbox][size font='bocuma' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Curvy Letters",
		"Playful"
	]
},
{
	"name":"Bocuma Angle",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Bocuma - by Aenigma Fonts/Bocuma Angle.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=7][vbox][size font='bocuma angle' size=350]\u00b2[/size][/vbox][vbox][size font='bocuma angle' size=350]\u00b3[/size][/vbox][vbox][size font='bocuma angle' size=350]\u00b5[/size][/vbox][vbox][size font='bocuma angle' size=350]\u00b6[/size][/vbox][vbox][size font='bocuma angle' size=350]\u00b7[/size][/vbox][vbox][size font='bocuma angle' size=350]\u00b9[/size][/vbox][vbox][size font='bocuma angle' size=350]\u00ba[/size][/vbox][vbox][size font='bocuma angle' size=350]\u00bb[/size][/vbox][vbox][size font='bocuma angle' size=350]\u0152[/size][/vbox][vbox][size font='bocuma angle' size=350]\u0153[/size][/vbox][vbox][size font='bocuma angle' size=350]\u0178[/size][/vbox][vbox][size font='bocuma angle' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters"
	]
},
{
	"name":"Bocuma Angle Dent",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Bocuma - by Aenigma Fonts/Bocuma Angle Dent.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=7][vbox][size font='bocuma angle dent' size=350]\u00b2[/size][/vbox][vbox][size font='bocuma angle dent' size=350]\u00b3[/size][/vbox][vbox][size font='bocuma angle dent' size=350]\u00b5[/size][/vbox][vbox][size font='bocuma angle dent' size=350]\u00b6[/size][/vbox][vbox][size font='bocuma angle dent' size=350]\u00b7[/size][/vbox][vbox][size font='bocuma angle dent' size=350]\u00b9[/size][/vbox][vbox][size font='bocuma angle dent' size=350]\u00ba[/size][/vbox][vbox][size font='bocuma angle dent' size=350]\u00bb[/size][/vbox][vbox][size font='bocuma angle dent' size=350]\u0152[/size][/vbox][vbox][size font='bocuma angle dent' size=350]\u0153[/size][/vbox][vbox][size font='bocuma angle dent' size=350]\u0178[/size][/vbox][vbox][size font='bocuma angle dent' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters",
		"Decay"
	]
},
{
	"name":"Bocuma Batty",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Bocuma - by Aenigma Fonts/Bocuma Batty.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=7][vbox][size font='bocuma batty' size=350]\u00b2[/size][/vbox][vbox][size font='bocuma batty' size=350]\u00b3[/size][/vbox][vbox][size font='bocuma batty' size=350]\u00b5[/size][/vbox][vbox][size font='bocuma batty' size=350]\u00b6[/size][/vbox][vbox][size font='bocuma batty' size=350]\u00b7[/size][/vbox][vbox][size font='bocuma batty' size=350]\u00b9[/size][/vbox][vbox][size font='bocuma batty' size=350]\u00ba[/size][/vbox][vbox][size font='bocuma batty' size=350]\u00bb[/size][/vbox][vbox][size font='bocuma batty' size=350]\u0152[/size][/vbox][vbox][size font='bocuma batty' size=350]\u0153[/size][/vbox][vbox][size font='bocuma batty' size=350]\u0178[/size][/vbox][vbox][size font='bocuma batty' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Distressed",
		"Halloween"
	]
},
{
	"name":"Bocuma Dent",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Bocuma - by Aenigma Fonts/Bocuma Dent.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=7][vbox][size font='bocuma dent' size=350]\u00b2[/size][/vbox][vbox][size font='bocuma dent' size=350]\u00b3[/size][/vbox][vbox][size font='bocuma dent' size=350]\u00b5[/size][/vbox][vbox][size font='bocuma dent' size=350]\u00b6[/size][/vbox][vbox][size font='bocuma dent' size=350]\u00b7[/size][/vbox][vbox][size font='bocuma dent' size=350]\u00b9[/size][/vbox][vbox][size font='bocuma dent' size=350]\u00ba[/size][/vbox][vbox][size font='bocuma dent' size=350]\u00bb[/size][/vbox][vbox][size font='bocuma dent' size=350]\u0152[/size][/vbox][vbox][size font='bocuma dent' size=350]\u0153[/size][/vbox][vbox][size font='bocuma dent' size=350]\u0178[/size][/vbox][vbox][size font='bocuma dent' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Curvy Letters",
		"Decay",
		"Playful"
	]
},
{
	"name":"Bomr",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Bomr.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Leading Left Hook",
		"No Lowercase",
		"Ornamental",
		"Playful"
	]
},
{
	"name":"Borg 9",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Borg 9.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Ornamental",
		"Partial Symbol Set",
		"Striped",
		"Thick Stroke"
	]
},
{
	"name":"Boron",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Boron.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Circuit",
		"Decorated",
		"Narrow Chars",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Boston Traffic",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Boston Traffic.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Narrow Chars",
		"No Lowercase",
		"Partial Symbol Set",
		"Stencil"
	]
},
{
	"name":"Braeside - Lumberboy",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Braeside - Lumberboy.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"No Lowercase",
		"Partial Symbol Set",
		"Stencil",
		"Thick Stroke"
	]
},
{
	"name":"Braeside - Outline",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Braeside - Outline.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Negative Space",
		"No Lowercase",
		"Outline",
		"Partial Symbol Set",
		"Stencil",
		"Thick Stroke"
	]
},
{
	"name":"Braille CC0",
	"authors":[
		"GGBotNet"
	],
	"variants":[
		{
			"path":"Braille CC0 - by GGBotNet/Braille CC0.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only",
		"Braille",
		"Dotted"
	]
},
{
	"name":"Bramalea Beauty",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Bramalea Beauty.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Decay",
		"Narrow Chars",
		"Negative Space",
		"Outline",
		"Partial Symbol Set"
	]
},
{
	"name":"Brass Knuckle",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Brass Knuckle - by Aenigma Fonts/Brass Knuckle.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Ornamental",
		"Thick Stroke"
	]
},
{
	"name":"Brass Knuckle SS",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Brass Knuckle - by Aenigma Fonts/Brass Knuckle SS.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Ornamental",
		"Thick Stroke"
	]
},
{
	"name":"Brass Knuckle Star",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Brass Knuckle - by Aenigma Fonts/Brass Knuckle Star.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Composite Font",
		"Negative Space",
		"Ornamental",
		"Thick Stroke"
	]
},
{
	"name":"Brial",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Brial.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Ornamental",
		"Thick Stroke"
	]
},
{
	"name":"Brigadoom",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Brigadoom - by Aenigma Fonts/Brigadoom.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=3][vbox][size font='brigadoom' size=350]\u00c8[/size][/vbox][vbox][size font='brigadoom' size=350]\u00c9[/size][/vbox][vbox][size font='brigadoom' size=350]\u00ca[/size][/vbox][vbox][size font='brigadoom' size=350]\u00cb[/size][/vbox][vbox][size font='brigadoom' size=350]\u00cc[/size][/vbox][vbox][size font='brigadoom' size=350]\u00cd[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters",
		"Narrow Chars",
		"Ornamental"
	]
},
{
	"name":"Brigadoom Wide",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Brigadoom - by Aenigma Fonts/Brigadoom Wide.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=3][vbox][size font='brigadoom wide' size=350]\u00c8[/size][/vbox][vbox][size font='brigadoom wide' size=350]\u00c9[/size][/vbox][vbox][size font='brigadoom wide' size=350]\u00ca[/size][/vbox][vbox][size font='brigadoom wide' size=350]\u00cb[/size][/vbox][vbox][size font='brigadoom wide' size=350]\u00cc[/size][/vbox][vbox][size font='brigadoom wide' size=350]\u00cd[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters",
		"Ornamental"
	]
},
{
	"name":"Bulgari",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Bulgari.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Broken Letters",
		"Ornamental",
		"Partial Symbol Set",
		"Rounded Chars",
		"Slanted"
	]
},
{
	"name":"Bumped",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Bumped - by Aenigma Fonts/Bumped.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=4][vbox][size font='bumped' size=350]\u00c8[/size][/vbox][vbox][size font='bumped' size=350]\u00c9[/size][/vbox][vbox][size font='bumped' size=350]\u00ca[/size][/vbox][vbox][size font='bumped' size=350]\u00cb[/size][/vbox][vbox][size font='bumped' size=350]\u00cc[/size][/vbox][vbox][size font='bumped' size=350]\u00cd[/size][/vbox][vbox][size font='bumped' size=350]\u00ce[/size][/vbox][vbox][size font='bumped' size=350]\u00cf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Negative Space",
		"Outline"
	]
},
{
	"name":"Butterbelly",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Butterbelly.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Partial Symbol Set",
		"Plain",
		"Uneven Chars"
	]
},
{
	"name":"Buxotic",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Buxotic.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Cosmic",
		"Hard To Read",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Cabin",
	"authors":[
		"Impallari Type",
		"Rodrigo Fuenzalida"
	],
	"variants":[
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Italic.ttf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Bold.ttf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Bold Italic.ttf",
			"style":"italic",
			"weight":"bold"
		},
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Semi Bold Italic.ttf",
			"style":"italic",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Medium Italic.ttf",
			"style":"italic",
			"weight":"500"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Cabin Condensed",
	"authors":[
		"Impallari Type",
		"Rodrigo Fuenzalida"
	],
	"variants":[
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Condensed.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Condensed Italic.ttf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Condensed Bold.ttf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Condensed Bold Italic.ttf",
			"style":"italic",
			"weight":"bold"
		},
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Condensed Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Condensed Semi Bold Italic.ttf",
			"style":"italic",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Condensed Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Condensed Medium Italic.ttf",
			"style":"italic",
			"weight":"500"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Narrow Chars",
		"Plain"
	]
},
{
	"name":"Cabin Semi Condensed",
	"authors":[
		"Impallari Type",
		"Rodrigo Fuenzalida"
	],
	"variants":[
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Semi Condensed.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Semi Condensed Italic.ttf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Semi Condensed Bold.ttf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Semi Condensed Bold Italic.ttf",
			"style":"italic",
			"weight":"bold"
		},
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Semi Condensed Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Semi Condensed Semi Bold Italic.ttf",
			"style":"italic",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Semi Condensed Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Cabin - by Impallari Type, Rodrigo Fuenzalida/static/Cabin Semi Condensed Medium Italic.ttf",
			"style":"italic",
			"weight":"500"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Cabin Sketch",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Cabin Sketch - by Impallari Type/Cabin Sketch.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Impallari Type/Cabin Sketch - by Impallari Type/Cabin Sketch Bold.ttf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"instructions":[
		"This font looks best in bold."
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Playful"
	]
},
{
	"name":"Canada 1500",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Canada 1500.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Canada 1500 Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Canada 1500 Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Canada 1500 Bold Italic.otf",
			"style":"italic",
			"weight":"bold"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Canada 1500 Light.otf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Canada 1500 Light Italic.otf",
			"style":"italic",
			"weight":"300"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Candy Stripe",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Candy Stripe - by Aenigma Fonts/Candy Stripe.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Holiday",
		"Ornamental",
		"Partial Symbol Set",
		"Striped"
	]
},
{
	"name":"Cantora One",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Cantora One - by Impallari Type/Cantora One.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"Capacitor",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Capacitor.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters",
		"Hard To Read",
		"Thin Stroke",
		"Wide Chars"
	]
},
{
	"name":"CarbonType",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/CarbonType.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Decay",
		"Monospace",
		"Partial Symbol Set",
		"Smudged",
		"Typewriter"
	]
},
{
	"name":"CAT Engravers",
	"authors":[
		"Peter Wiegel"
	],
	"variants":[
		{
			"path":"CAT Engravers - by Peter Wiegel/CAT Engravers.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Elegant",
		"Gothic"
	]
},
{
	"name":"Caveat",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Caveat - by Impallari Type/static/Caveat.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Caveat - by Impallari Type/static/Caveat Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Caveat - by Impallari Type/static/Caveat Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Caveat - by Impallari Type/static/Caveat Bold.ttf",
			"style":"normal",
			"weight":"700"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Handwriting",
		"Slanted"
	]
},
{
	"name":"Caveat Brush",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Caveat Brush - by Impallari Type/Caveat Brush.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Handwriting",
		"Marker",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"Certified",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Certified.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Certified Italic.ttf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Partial Symbol Set",
		"Plain"
	]
},
{
	"name":"Charles In Charge",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Charles In Charge.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Thick Stroke"
	]
},
{
	"name":"Chemical Reaction A",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Chemical Reaction - by Aenigma Fonts/Chemical Reaction A.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Calligraphy"
	]
},
{
	"name":"Chemical Reaction B",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Chemical Reaction - by Aenigma Fonts/Chemical Reaction B.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Calligraphy"
	]
},
{
	"name":"Chintzy CPU",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Chintzy CPU - by Aenigma Fonts/Chintzy CPU.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Ornamental",
		"Partial Symbol Set",
		"Retro",
		"Thick Stroke"
	]
},
{
	"name":"Chintzy CPU Shadow",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Chintzy CPU - by Aenigma Fonts/Chintzy CPU Shadow.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Partial Symbol Set",
		"Retro",
		"Shadow",
		"Thick Stroke"
	]
},
{
	"name":"Chumbly",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Chumbly - by Aenigma Fonts/Chumbly.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Cinzel",
	"authors":[
		"ndiscovered"
	],
	"variants":[
		{
			"path":"Cinzel - by ndiscovered/Cinzel.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"Cinzel - by ndiscovered/Cinzel Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"Cinzel - by ndiscovered/Cinzel Black.otf",
			"style":"normal",
			"weight":"900"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"No Lowercase",
		"Plain"
	]
},
{
	"name":"Cinzel Decorative",
	"authors":[
		"ndiscovered"
	],
	"variants":[
		{
			"path":"Cinzel - by ndiscovered/Cinzel Decorative.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"Cinzel - by ndiscovered/Cinzel Decorative Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"Cinzel - by ndiscovered/Cinzel Decorative Black.otf",
			"style":"normal",
			"weight":"900"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Broken Letters",
		"Elegant",
		"Formal",
		"Leading Left Hook",
		"No Lowercase",
		"Ornamental"
	]
},
{
	"name":"Circulate",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Circulate - by Aenigma Fonts/Circulate.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Negative Space",
		"Uneven Chars"
	]
},
{
	"name":"Classic Trash 1",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Classic Trash - by Aenigma Fonts/Classic Trash 1.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Plain",
		"Playful"
	]
},
{
	"name":"Classic Trash 2",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Classic Trash - by Aenigma Fonts/Classic Trash 2.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Plain",
		"Playful"
	]
},
{
	"name":"CLAW 1",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/CLAW - by Aenigma Fonts/CLAW 1.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Claws",
		"Fangs",
		"Halloween",
		"Negative Space",
		"Ornamental"
	]
},
{
	"name":"CLAW 2",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/CLAW - by Aenigma Fonts/CLAW 2.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Claws",
		"Fangs",
		"Halloween",
		"Negative Space",
		"Ornamental"
	]
},
{
	"name":"Cleaved TTR",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Cleaved TTR - by Aenigma Fonts/Cleaved TTR.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Decay",
		"Narrow Chars",
		"Partial Symbol Set"
	]
},
{
	"name":"Code Of Life",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Code Of Life - by Aenigma Fonts/Code Of Life.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"[font font='code of life' size=500 fg=299]{[color fg=f74]C[/color][color fg=f93]c[/color] [color fg=f54]O[/color][color fg=fb5]o[/color] [color fg=f53]D[/color][color fg=fd7]d[/color] [color fg=f52]E[/color][color fg=ff9]e[/color] -[color fg=f51]O[/color][color fg=ffb]o[/color] [color fg=f51]F[/color][color fg=ffb]f[/color] -[color fg=f52]L[/color][color fg=ff9]l[/color] [color fg=f53]I[/color][color fg=fd7]i[/color] [color fg=f54]F[/color][color fg=fb5]f[/color] [color fg=f74]E[/color][color fg=f93]e[/color] ][/font][br][br][size size=80]The fancy text above was generated by: [icode]{Cc Oo Dd Ee -Oo Ff -Ll Ii Ff Ee ][/icode][/size][br][br][grid cols=6][vbox][color fg=f74][[/color][font font='code of life' size=400 fg=299][[/font][/vbox][vbox][color fg=f74]{[/color][font font='code of life' size=400 fg=299]{[/font][/vbox][vbox][color fg=f74]<space>[/color][font font='code of life' size=400 fg=299] [/font][/vbox][vbox][color fg=f74]-[/color][font font='code of life' size=400 fg=299]-[/font][/vbox][vbox][color fg=f74]}[/color][font font='code of life' size=400 fg=299]}[/font][/vbox][vbox][color fg=f74]][/color][font font='code of life' size=400 fg=299]][/font][/vbox][/grid][br][br][center][ul][li]Lowercase letters and numbers appear in the bottom slot of the DNA.[/li][li]Uppercase letters and symbols !@#$%^&*() appear in the top slot[br]of the DNA as letters and numbers.[/li][li]A space will create the DNA symbol around the upper & lower characters, and[br]advance to the next slot.[/li][li]A comma [size size=200 fg=f93],[/size] will make a blank space, without adding the DNA symbol.[/li][li]A period [size size=200 fg=f93].[/size] will make a small space. This is useful if you[br]are just typing the characters, and not using the DNA symbols.[/li][li]A hyphen [size size=200 fg=f93]-[/size] will add a decorative twist to the DNA.[/li][/ul][/center][br][br][color fg=fa3]Below is a complete chart of the additional characters that work in a browser.[/color][br][br][color fg=4f4]These are the upper characters:[/color][br][grid cols=10][vbox][color fg=f93]A[/color][font font='code of life' fg=299 size=500]A[/font][/vbox][vbox][color fg=f93]B[/color][font font='code of life' fg=299 size=500]B[/font][/vbox][vbox][color fg=f93]C[/color][font font='code of life' fg=299 size=500]C[/font][/vbox][vbox][color fg=f93]D[/color][font font='code of life' fg=299 size=500]D[/font][/vbox][vbox][color fg=f93]E[/color][font font='code of life' fg=299 size=500]E[/font][/vbox][vbox][color fg=f93]F[/color][font font='code of life' fg=299 size=500]F[/font][/vbox][vbox][color fg=f93]G[/color][font font='code of life' fg=299 size=500]G[/font][/vbox][vbox][color fg=f93]H[/color][font font='code of life' fg=299 size=500]H[/font][/vbox][vbox][color fg=f93]I[/color][font font='code of life' fg=299 size=500]I[/font][/vbox][vbox][color fg=f93]J[/color][font font='code of life' fg=299 size=500]J[/font][/vbox][vbox][color fg=f93]K[/color][font font='code of life' fg=299 size=500]K[/font][/vbox][vbox][color fg=f93]L[/color][font font='code of life' fg=299 size=500]L[/font][/vbox][vbox][color fg=f93]M[/color][font font='code of life' fg=299 size=500]M[/font][/vbox][vbox][color fg=f93]N[/color][font font='code of life' fg=299 size=500]N[/font][/vbox][vbox][color fg=f93]O[/color][font font='code of life' fg=299 size=500]O[/font][/vbox][vbox][color fg=f93]P[/color][font font='code of life' fg=299 size=500]P[/font][/vbox][vbox][color fg=f93]Q[/color][font font='code of life' fg=299 size=500]Q[/font][/vbox][vbox][color fg=f93]R[/color][font font='code of life' fg=299 size=500]R[/font][/vbox][vbox][color fg=f93]S[/color][font font='code of life' fg=299 size=500]S[/font][/vbox][vbox][color fg=f93]T[/color][font font='code of life' fg=299 size=500]T[/font][/vbox][vbox][color fg=f93]U[/color][font font='code of life' fg=299 size=500]U[/font][/vbox][vbox][color fg=f93]V[/color][font font='code of life' fg=299 size=500]V[/font][/vbox][vbox][color fg=f93]W[/color][font font='code of life' fg=299 size=500]W[/font][/vbox][vbox][color fg=f93]X[/color][font font='code of life' fg=299 size=500]X[/font][/vbox][vbox][color fg=f93]Y[/color][font font='code of life' fg=299 size=500]Y[/font][/vbox][vbox][color fg=f93]Z[/color][font font='code of life' fg=299 size=500]Z[/font][/vbox][vbox][color fg=f93]0[/color][font font='code of life' fg=299 size=500])[/font][/vbox][vbox][color fg=f93]1[/color][font font='code of life' fg=299 size=500]![/font][/vbox][vbox][color fg=f93]2[/color][font font='code of life' fg=299 size=500]@[/font][/vbox][vbox][color fg=f93]3[/color][font font='code of life' fg=299 size=500]#[/font][/vbox][vbox][color fg=f93]4[/color][font font='code of life' fg=299 size=500]$[/font][/vbox][vbox][color fg=f93]5[/color][font font='code of life' fg=299 size=500]%[/font][/vbox][vbox][color fg=f93]6[/color][font font='code of life' fg=299 size=500]^[/font][/vbox][vbox][color fg=f93]7[/color][font font='code of life' fg=299 size=500]&[/font][/vbox][vbox][color fg=f93]8[/color][font font='code of life' fg=299 size=500]*[/font][/vbox][vbox][color fg=f93]9[/color][font font='code of life' fg=299 size=500]([/font][/vbox][vbox][color fg=f93]@[/color][font font='code of life' fg=299 size=500]\u00ac[/font][/vbox][vbox][color fg=f93]%[/color][font font='code of life' fg=299 size=500]\u0160[/font][/vbox][vbox][color fg=f93]&[/color][font font='code of life' fg=299 size=500]\u0152[/font][/vbox][vbox][color fg=f93].[/color][font font='code of life' fg=299 size=500]\u0153[/font][/vbox][vbox][color fg=f93]'[/color][font font='code of life' fg=299 size=500]\u008e[/font][/vbox][vbox][color fg=f93]:[/color][font font='code of life' fg=299 size=500]\u00a0[/font][/vbox][vbox][color fg=f93];[/color][font font='code of life' fg=299 size=500]\u00a2[/font][/vbox][vbox][color fg=f93]?[/color][font font='code of life' fg=299 size=500]\u00aa[/font][/vbox][vbox][color fg=f93]([/color][font font='code of life' fg=299 size=500]\u0090[/font][/vbox][vbox][color fg=f93]{[/color][font font='code of life' fg=299 size=500]\u00ba[/font][/vbox][vbox][color fg=f93][[/color][font font='code of life' fg=299 size=500]\u00ae[/font][/vbox][vbox][color fg=f93]][/color][font font='code of life' fg=299 size=500]\u00b2[/font][/vbox][vbox][color fg=f93]/[/color][font font='code of life' fg=299 size=500]\u009e[/font][/vbox][vbox][color fg=f93]\\[/color][font font='code of life' fg=299 size=500]\u00b0[/font][/vbox][vbox][color fg=f93]-[/color][font font='code of life' fg=299 size=500]\u0161[/font][/vbox][vbox][color fg=f93]_[/color][font font='code of life' fg=299 size=500]\u00b6[/font][/vbox][vbox][color fg=f93]~[/color][font font='code of life' fg=299 size=500]\u00c0[/font][/vbox][vbox][color fg=f93]\u00c6[/color][font font='code of life' fg=299 size=500]\u00c6[/font][/vbox][/grid][br][br][br][color fg=4f4]These are the lower characters:[/color][br][grid cols=10][vbox][color fg=f93]A[/color][font font='code of life' fg=299 size=500]a[/font][/vbox][vbox][color fg=f93]B[/color][font font='code of life' fg=299 size=500]b[/font][/vbox][vbox][color fg=f93]C[/color][font font='code of life' fg=299 size=500]c[/font][/vbox][vbox][color fg=f93]D[/color][font font='code of life' fg=299 size=500]d[/font][/vbox][vbox][color fg=f93]E[/color][font font='code of life' fg=299 size=500]e[/font][/vbox][vbox][color fg=f93]F[/color][font font='code of life' fg=299 size=500]f[/font][/vbox][vbox][color fg=f93]G[/color][font font='code of life' fg=299 size=500]g[/font][/vbox][vbox][color fg=f93]H[/color][font font='code of life' fg=299 size=500]h[/font][/vbox][vbox][color fg=f93]I[/color][font font='code of life' fg=299 size=500]i[/font][/vbox][vbox][color fg=f93]J[/color][font font='code of life' fg=299 size=500]j[/font][/vbox][vbox][color fg=f93]K[/color][font font='code of life' fg=299 size=500]k[/font][/vbox][vbox][color fg=f93]L[/color][font font='code of life' fg=299 size=500]l[/font][/vbox][vbox][color fg=f93]M[/color][font font='code of life' fg=299 size=500]m[/font][/vbox][vbox][color fg=f93]N[/color][font font='code of life' fg=299 size=500]n[/font][/vbox][vbox][color fg=f93]O[/color][font font='code of life' fg=299 size=500]o[/font][/vbox][vbox][color fg=f93]P[/color][font font='code of life' fg=299 size=500]p[/font][/vbox][vbox][color fg=f93]Q[/color][font font='code of life' fg=299 size=500]q[/font][/vbox][vbox][color fg=f93]R[/color][font font='code of life' fg=299 size=500]r[/font][/vbox][vbox][color fg=f93]S[/color][font font='code of life' fg=299 size=500]s[/font][/vbox][vbox][color fg=f93]T[/color][font font='code of life' fg=299 size=500]t[/font][/vbox][vbox][color fg=f93]U[/color][font font='code of life' fg=299 size=500]u[/font][/vbox][vbox][color fg=f93]V[/color][font font='code of life' fg=299 size=500]v[/font][/vbox][vbox][color fg=f93]W[/color][font font='code of life' fg=299 size=500]w[/font][/vbox][vbox][color fg=f93]X[/color][font font='code of life' fg=299 size=500]x[/font][/vbox][vbox][color fg=f93]Y[/color][font font='code of life' fg=299 size=500]y[/font][/vbox][vbox][color fg=f93]Z[/color][font font='code of life' fg=299 size=500]z[/font][/vbox][vbox][color fg=f93]0[/color][font font='code of life' fg=299 size=500]0[/font][/vbox][vbox][color fg=f93]1[/color][font font='code of life' fg=299 size=500]1[/font][/vbox][vbox][color fg=f93]2[/color][font font='code of life' fg=299 size=500]2[/font][/vbox][vbox][color fg=f93]3[/color][font font='code of life' fg=299 size=500]3[/font][/vbox][vbox][color fg=f93]4[/color][font font='code of life' fg=299 size=500]4[/font][/vbox][vbox][color fg=f93]5[/color][font font='code of life' fg=299 size=500]5[/font][/vbox][vbox][color fg=f93]6[/color][font font='code of life' fg=299 size=500]6[/font][/vbox][vbox][color fg=f93]7[/color][font font='code of life' fg=299 size=500]7[/font][/vbox][vbox][color fg=f93]8[/color][font font='code of life' fg=299 size=500]8[/font][/vbox][vbox][color fg=f93]9[/color][font font='code of life' fg=299 size=500]9[/font][/vbox][vbox][color fg=f93]^[/color][font font='code of life' fg=299 size=500]\u00b5[/font][/vbox][vbox][color fg=f93]&[/color][font font='code of life' fg=299 size=500]\u008d[/font][/vbox][vbox][color fg=f93].[/color][font font='code of life' fg=299 size=500]\u009d[/font][/vbox][vbox][color fg=f93]'[/color][font font='code of life' fg=299 size=500]\u008f[/font][/vbox][vbox][color fg=f93]:[/color][font font='code of life' fg=299 size=500]\u00a1[/font][/vbox][vbox][color fg=f93];[/color][font font='code of life' fg=299 size=500]\u00a3[/font][/vbox][vbox][color fg=f93]?[/color][font font='code of life' fg=299 size=500]\u00ab[/font][/vbox][vbox][color fg=f93]{[/color][font font='code of life' fg=299 size=500]\u00bb[/font][/vbox][vbox][color fg=f93]}[/color][font font='code of life' fg=299 size=500]\u00bf[/font][/vbox][vbox][color fg=f93][[/color][font font='code of life' fg=299 size=500]\u00af[/font][/vbox][vbox][color fg=f93]][/color][font font='code of life' fg=299 size=500]\u00b3[/font][/vbox][vbox][color fg=f93]<[/color][font font='code of life' fg=299 size=500]\u00a5[/font][/vbox][vbox][color fg=f93]>[/color][font font='code of life' fg=299 size=500]\u00a9[/font][/vbox][vbox][color fg=f93]/[/color][font font='code of life' fg=299 size=500]\u0178[/font][/vbox][vbox][color fg=f93]\\[/color][font font='code of life' fg=299 size=500]\u00b1[/font][/vbox][vbox][color fg=f93]=[/color][font font='code of life' fg=299 size=500]\u00a7[/font][/vbox][vbox][color fg=f93]_[/color][font font='code of life' fg=299 size=500]\u00b7[/font][/vbox][vbox][color fg=f93]~[/color][font font='code of life' fg=299 size=500]\u00c1[/font][/vbox][vbox][color fg=f93]\u00c6[/color][font font='code of life' fg=299 size=500]\u00e6[/font][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Decorated",
		"DNA",
		"Hard To Read",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Code Of Life - Spheroids",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Code Of Life - by Aenigma Fonts/Code Of Life - Spheroids.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Decorated",
		"Hard To Read",
		"No Lowercase",
		"Ornamental"
	]
},
{
	"name":"Code Of Life - Spheroids X",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Code Of Life - by Aenigma Fonts/Code Of Life - Spheroids X.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Hard To Read",
		"No Lowercase",
		"Ornamental"
	]
},
{
	"name":"Coffee Beans",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Coffee Beans.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Dotted",
		"No Lowercase",
		"No Symbols",
		"Ornamental"
	]
},
{
	"name":"Collective Round Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Collective - by Aenigma Fonts/Collective Round Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Negative Space",
		"No Lowercase",
		"Outline",
		"Partial Symbol Set",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Collective Round Solid",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Collective - by Aenigma Fonts/Collective Round Solid.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"No Lowercase",
		"Partial Symbol Set",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Collective Solid",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Collective - by Aenigma Fonts/Collective Solid.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters",
		"No Lowercase",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Collective Solid Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Collective - by Aenigma Fonts/Collective Solid Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters",
		"Negative Space",
		"No Lowercase",
		"Outline",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Color Basic",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Color Basic.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Monospace",
		"Negative Space",
		"No Lowercase",
		"Pixelated",
		"Retro"
	]
},
{
	"name":"Colourbars",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Colourbars.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Colourbars Bold.otf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Curvy Letters",
		"Plain",
		"Playful"
	]
},
{
	"name":"Combermere",
	"authors":[
		"J Hudson"
	],
	"variants":[
		{
			"path":"Combermere - by J Hudson/Combermere.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Calligraphy",
		"Elegant",
		"Gothic"
	]
},
{
	"name":"Combustion I",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Combustion - by Aenigma Fonts/Combustion I.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=5][vbox][size font='combustion I' size=350]\u00c8[/size][/vbox][vbox][size font='combustion I' size=350]\u00c9[/size][/vbox][vbox][size font='combustion I' size=350]\u00ca[/size][/vbox][vbox][size font='combustion I' size=350]\u00cb[/size][/vbox][vbox][size font='combustion I' size=350]\u00cc[/size][/vbox][vbox][size font='combustion I' size=350]\u00cd[/size][/vbox][vbox][size font='combustion I' size=350]\u00ce[/size][/vbox][vbox][size font='combustion I' size=350]\u00cf[/size][/vbox][vbox][size font='combustion I' size=350]\u00d0[/size][/vbox][vbox][size font='combustion I' size=350]\u00d1[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Narrow Chars",
		"Slanted",
		"Thin Stroke"
	]
},
{
	"name":"Combustion II",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Combustion - by Aenigma Fonts/Combustion II.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=5][vbox][size font='combustion II' size=350]\u00c8[/size][/vbox][vbox][size font='combustion II' size=350]\u00c9[/size][/vbox][vbox][size font='combustion II' size=350]\u00ca[/size][/vbox][vbox][size font='combustion II' size=350]\u00cb[/size][/vbox][vbox][size font='combustion II' size=350]\u00cc[/size][/vbox][vbox][size font='combustion II' size=350]\u00cd[/size][/vbox][vbox][size font='combustion II' size=350]\u00ce[/size][/vbox][vbox][size font='combustion II' size=350]\u00cf[/size][/vbox][vbox][size font='combustion II' size=350]\u00d0[/size][/vbox][vbox][size font='combustion II' size=350]\u00d1[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Calligraphy",
		"Narrow Chars",
		"Slanted",
		"Thin Stroke"
	]
},
{
	"name":"Combustion Plain",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Combustion - by Aenigma Fonts/Combustion Plain.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=5][vbox][size font='combustion plain' size=350]\u00c8[/size][/vbox][vbox][size font='combustion plain' size=350]\u00c9[/size][/vbox][vbox][size font='combustion plain' size=350]\u00ca[/size][/vbox][vbox][size font='combustion plain' size=350]\u00cb[/size][/vbox][vbox][size font='combustion plain' size=350]\u00cc[/size][/vbox][vbox][size font='combustion plain' size=350]\u00cd[/size][/vbox][vbox][size font='combustion plain' size=350]\u00ce[/size][/vbox][vbox][size font='combustion plain' size=350]\u00cf[/size][/vbox][vbox][size font='combustion plain' size=350]\u00d0[/size][/vbox][vbox][size font='combustion plain' size=350]\u00d1[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Narrow Chars",
		"Plain",
		"Thin Stroke"
	]
},
{
	"name":"Combustion Tall",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Combustion - by Aenigma Fonts/Combustion Tall.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=5][vbox][size font='combustion tall' size=350]\u00c8[/size][/vbox][vbox][size font='combustion tall' size=350]\u00c9[/size][/vbox][vbox][size font='combustion tall' size=350]\u00ca[/size][/vbox][vbox][size font='combustion tall' size=350]\u00cb[/size][/vbox][vbox][size font='combustion tall' size=350]\u00cc[/size][/vbox][vbox][size font='combustion tall' size=350]\u00cd[/size][/vbox][vbox][size font='combustion tall' size=350]\u00ce[/size][/vbox][vbox][size font='combustion tall' size=350]\u00cf[/size][/vbox][vbox][size font='combustion tall' size=350]\u00d0[/size][/vbox][vbox][size font='combustion tall' size=350]\u00d1[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Narrow Chars",
		"Plain"
	]
},
{
	"name":"Combustion Wide",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Combustion - by Aenigma Fonts/Combustion Wide.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=5][vbox][size font='combustion wide' size=350]\u00c8[/size][/vbox][vbox][size font='combustion wide' size=350]\u00c9[/size][/vbox][vbox][size font='combustion wide' size=350]\u00ca[/size][/vbox][vbox][size font='combustion wide' size=350]\u00cb[/size][/vbox][vbox][size font='combustion wide' size=350]\u00cc[/size][/vbox][vbox][size font='combustion wide' size=350]\u00cd[/size][/vbox][vbox][size font='combustion wide' size=350]\u00ce[/size][/vbox][vbox][size font='combustion wide' size=350]\u00cf[/size][/vbox][vbox][size font='combustion wide' size=350]\u00d0[/size][/vbox][vbox][size font='combustion wide' size=350]\u00d1[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Narrow Chars",
		"Plain"
	]
},
{
	"name":"Comic Relief",
	"authors":[
		"Loudifier"
	],
	"variants":[
		{
			"path":"Comic Relief - by Loudifier/ComicRelief.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Playful"
	]
},
{
	"name":"Competent",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Competent.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Partial Symbol Set",
		"Plain"
	]
},
{
	"name":"Compliant Confuse 1 Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Compliant Confuse - by Aenigma Fonts/Compliant Confuse 1 Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters",
		"Negative Space",
		"Outline"
	]
},
{
	"name":"Compliant Confuse 1 Solid",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Compliant Confuse - by Aenigma Fonts/Compliant Confuse 1 Solid.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters"
	]
},
{
	"name":"Compliant Confuse 2 Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Compliant Confuse - by Aenigma Fonts/Compliant Confuse 2 Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Negative Space",
		"Outline",
		"Rounded Edges"
	]
},
{
	"name":"Compliant Confuse 2 Solid",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Compliant Confuse - by Aenigma Fonts/Compliant Confuse 2 Solid.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Rounded Edges"
	]
},
{
	"name":"Compliant Confuse 3 Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Compliant Confuse - by Aenigma Fonts/Compliant Confuse 3 Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Negative Space",
		"Outline",
		"Rounded Edges"
	]
},
{
	"name":"Compliant Confuse 3 Solid",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Compliant Confuse - by Aenigma Fonts/Compliant Confuse 3 Solid.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Rounded Edges"
	]
},
{
	"name":"Conduit",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Conduit - by Aenigma Fonts/Conduit.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Partial Symbol Set",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Conduit 2",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Conduit - by Aenigma Fonts/Conduit 2.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Aenigma Fonts/Conduit - by Aenigma Fonts/Conduit 2 Italic.ttf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Partial Symbol Set",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Contour Generator",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Contour Generator.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters",
		"Logo",
		"No Lowercase",
		"Thick Stroke"
	]
},
{
	"name":"Corporate HQ",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Corporate HQ.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Partial Symbol Set",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"Corpulent Caps",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Corpulent Caps - by Aenigma Fonts/Corpulent Caps.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"No Lowercase",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Corpulent Caps Shadow",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Corpulent Caps - by Aenigma Fonts/Corpulent Caps Shadow.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"No Lowercase",
		"Rounded Edges",
		"Shadow",
		"Thick Stroke"
	]
},
{
	"name":"Counterscraps",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Counterscraps.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only",
		"Kitchen"
	]
},
{
	"name":"Crack Man",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Crack Man.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Composite Font",
		"Negative Space",
		"No Lowercase",
		"Shadow",
		"Thick Stroke"
	]
},
{
	"name":"Crack Man - Back",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Crack Man - Back.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Composite Font",
		"No Lowercase",
		"Shadow",
		"Thick Stroke"
	]
},
{
	"name":"Crack Man - Front",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Crack Man - Front.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Composite Font",
		"No Lowercase",
		"Thick Stroke"
	]
},
{
	"name":"Crackdown Outline 1",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Crackdown - by Aenigma Fonts/Crackdown Outline 1.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Outline",
		"Plain",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Crackdown Outline 2",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Crackdown - by Aenigma Fonts/Crackdown Outline 2.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Outline",
		"Plain",
		"Rounded Edges",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Crackdown R",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Crackdown - by Aenigma Fonts/Crackdown R.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Rounded Edges",
		"Wide Chars"
	]
},
{
	"name":"Crackdown R2",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Crackdown - by Aenigma Fonts/Crackdown R2.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Rounded Edges"
	]
},
{
	"name":"Cranberry Gin",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Cranberry Gin.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Broken Letters",
		"Partial Symbol Set"
	]
},
{
	"name":"Cretino",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Cretino.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Distressed",
		"Elegant",
		"Gothic",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Crimson",
	"authors":[
		"Sebastian Kosch"
	],
	"variants":[
		{
			"path":"Crimson - by Sebastian Kosch/Crimson.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"Crimson - by Sebastian Kosch/Crimson Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"Crimson - by Sebastian Kosch/Crimson Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"Crimson - by Sebastian Kosch/Crimson Bold Italic.otf",
			"style":"italic",
			"weight":"bold"
		},
		{
			"path":"Crimson - by Sebastian Kosch/Crimson Demi Bold.otf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"Crimson - by Sebastian Kosch/Crimson Demi Bold Italic.otf",
			"style":"italic",
			"weight":"600"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Cubic Core Mono",
	"authors":[
		"marCOmics"
	],
	"variants":[
		{
			"path":"Cubic Core Mono - by marCOmics/Cubic Core Mono.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Partial Symbol Set",
		"Pixelated"
	]
},
{
	"name":"Cuomotype",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Cuomotype.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Decay"
	]
},
{
	"name":"Curses",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Curses.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Symbols Only"
	]
},
{
	"name":"Cutiful",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Cutiful.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Leading Left Hook",
		"Script",
		"Slanted",
		"Swirl",
		"Thick Stroke"
	]
},
{
	"name":"Cutive",
	"authors":[
		"Vernon Adams"
	],
	"variants":[
		{
			"path":"Cutive - by Vernon Adams/Cutive.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Cutive Mono",
	"authors":[
		"Vernon Adams"
	],
	"variants":[
		{
			"path":"Cutive - by Vernon Adams/Cutive Mono.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain",
		"Typewriter"
	]
},
{
	"name":"Cyclopentane",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Cyclopentane.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Hard To Read",
		"No Lowercase",
		"Ornamental",
		"Thick Stroke"
	]
},
{
	"name":"Daisy Script",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Daisy Script.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Handwriting",
		"Partial Symbol Set",
		"Script",
		"Slanted"
	]
},
{
	"name":"Danceclub",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Danceclub.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Dancing Script",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Dancing Script - by Impallari Type/static/Dancing Script.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Dancing Script - by Impallari Type/static/Dancing Script Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Dancing Script - by Impallari Type/static/Dancing Script Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Dancing Script - by Impallari Type/static/Dancing Script Bold.ttf",
			"style":"normal",
			"weight":"700"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Elegant",
		"Handwriting",
		"Script",
		"Slanted"
	]
},
{
	"name":"Dar Skin",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Dar Skin.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Texture",
		"Thick Stroke"
	]
},
{
	"name":"Dark Side",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Dark Side - by Aenigma Fonts/Dark Side.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Halloween",
		"Negative Space",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Dash Dot",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Dash Dot - by Aenigma Fonts/Dash Dot.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Dashed",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Playful",
		"Stitch",
		"Uneven Chars"
	]
},
{
	"name":"Dastardly",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Dastardly - by Aenigma Fonts/Dastardly.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=3 font=dastardly][vbox][size size=500]\u0153[/size][/vbox][vbox][size size=500]\u0178[/size][/vbox][vbox][size size=500]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Angular",
		"Halloween",
		"Narrow Chars"
	]
},
{
	"name":"Datacut",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Datacut.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Datacut Italic.ttf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Dazzle Ships",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Dazzle Ships.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Broken Letters",
		"Decorated",
		"Ornamental",
		"Thick Stroke"
	]
},
{
	"name":"Death To Smudgey",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Death To Smudgey.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Decorated",
		"Ornamental",
		"Partial Symbol Set",
		"Smudged",
		"Uneven Chars"
	]
},
{
	"name":"Decrepit",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Decrepit - by Aenigma Fonts/Decrepit.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Decay",
		"Striped",
		"Thick Stroke"
	]
},
{
	"name":"Delta Hey Max Nine",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Delta Hey Max Nine.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Curvy Letters",
		"Partial Symbol Set",
		"Playful",
		"Swirl",
		"Vintage"
	]
},
{
	"name":"Deluxe Ducks",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Deluxe Ducks.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Multi-Stroke",
		"Negative Space",
		"No Uppercase",
		"Ornamental",
		"Outline"
	]
},
{
	"name":"Dendritic Voltage",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Dendritic Voltage.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"No Lowercase",
		"Ornamental",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Dented",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Dented - by Aenigma Fonts/Dented.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decay",
		"Narrow Chars",
		"Rounded Chars"
	]
},
{
	"name":"Dephunked",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Dephunked - by Aenigma Fonts/Dephunked.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distorted",
		"Dotted",
		"Halftone",
		"No Symbols",
		"Ornamental",
		"Thick Stroke"
	]
},
{
	"name":"Deportees",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Deportees.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Distressed",
		"Halloween",
		"Handwriting",
		"Narrow Chars",
		"Thin Stroke"
	]
},
{
	"name":"Desard",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Desard.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Handwriting",
		"Playful"
	]
},
{
	"name":"Detonate",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Detonate - by Aenigma Fonts/Detonate.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Rounded Edges",
		"Slanted"
	]
},
{
	"name":"Discordance",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Discordance - by Aenigma Fonts/Discordance.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distorted",
		"Halloween",
		"Narrow Chars",
		"Ornamental",
		"Thin Stroke"
	]
},
{
	"name":"Domine",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Domine - by Impallari Type/static/Domine.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Impallari Type/Domine - by Impallari Type/static/Domine Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Domine - by Impallari Type/static/Domine Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Domine - by Impallari Type/static/Domine Bold.ttf",
			"style":"normal",
			"weight":"700"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"DomoAregato",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/DomoAregato.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/DomoAregato Italic.ttf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Anime",
		"Broken Letters",
		"Curvy Letters",
		"Ornamental",
		"Partial Symbol Set",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"Dornen",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Dornen.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Angular",
		"No Lowercase",
		"No Symbols",
		"Ornamental",
		"Thick Stroke"
	]
},
{
	"name":"Dosis",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Dosis - by Impallari Type/static/Dosis Extra Light.ttf",
			"style":"normal",
			"weight":"200"
		},
		{
			"path":"_Impallari Type/Dosis - by Impallari Type/static/Dosis Light.ttf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"_Impallari Type/Dosis - by Impallari Type/static/Dosis.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Impallari Type/Dosis - by Impallari Type/static/Dosis Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Dosis - by Impallari Type/static/Dosis Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Dosis - by Impallari Type/static/Dosis Bold.ttf",
			"style":"normal",
			"weight":"700"
		},
		{
			"path":"_Impallari Type/Dosis - by Impallari Type/static/Dosis Extra Bold.ttf",
			"style":"normal",
			"weight":"800"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain",
		"Rounded Edges"
	]
},
{
	"name":"Double Bogey",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Double Bogey - by Aenigma Fonts/Double Bogey.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=4][vbox][size font='double bogey' size=350]\u0160[/size][/vbox][vbox][size font='double bogey' size=350]\u00a7[/size][/vbox][vbox][size font='double bogey' size=350]\u0161[/size][/vbox][vbox][size font='double bogey' size=350]\u00a9[/size][/vbox][/grid][br][grid cols=5][vbox][size font='double bogey' size=350]\u00af[/size][/vbox][vbox][size font='double bogey' size=350]\u00b0[/size][/vbox][vbox][size font='double bogey' size=350]\u00b1[/size][/vbox][vbox][size font='double bogey' size=350]\u00b2[/size][/vbox][vbox][size font='double bogey' size=350]\u00b3[/size][/vbox][vbox][size font='double bogey' size=350]\u00b5[/size][/vbox][vbox][size font='double bogey' size=350]\u00b6[/size][/vbox][vbox][size font='double bogey' size=350]\u00b7[/size][/vbox][vbox][size font='double bogey' size=350]\u00b9[/size][/vbox][vbox][size font='double bogey' size=350]\u00ba[/size][/vbox][vbox][size font='double bogey' size=350]\u00bb[/size][/vbox][vbox][size font='double bogey' size=350]\u0152[/size][/vbox][vbox][size font='double bogey' size=350]\u0153[/size][/vbox][vbox][size font='double bogey' size=350]\u0178[/size][/vbox][vbox][size font='double bogey' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Hard To Read",
		"Negative Space",
		"Ornamental"
	]
},
{
	"name":"Double Bogey Layer 1",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Double Bogey - by Aenigma Fonts/Double Bogey Layer 1.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=4][vbox][size font='double bogey layer 1' size=350]\u0160[/size][/vbox][vbox][size font='double bogey layer 1' size=350]\u00a7[/size][/vbox][vbox][size font='double bogey layer 1' size=350]\u0161[/size][/vbox][vbox][size font='double bogey layer 1' size=350]\u00a9[/size][/vbox][/grid][br][grid cols=5][vbox][size font='double bogey layer 1' size=350]\u00af[/size][/vbox][vbox][size font='double bogey layer 1' size=350]\u00b0[/size][/vbox][vbox][size font='double bogey layer 1' size=350]\u00b1[/size][/vbox][vbox][size font='double bogey layer 1' size=350]\u00b2[/size][/vbox][vbox][size font='double bogey layer 1' size=350]\u00b3[/size][/vbox][vbox][size font='double bogey layer 1' size=350]\u00b5[/size][/vbox][vbox][size font='double bogey layer 1' size=350]\u00b6[/size][/vbox][vbox][size font='double bogey layer 1' size=350]\u00b7[/size][/vbox][vbox][size font='double bogey layer 1' size=350]\u00b9[/size][/vbox][vbox][size font='double bogey layer 1' size=350]\u00ba[/size][/vbox][vbox][size font='double bogey layer 1' size=350]\u00bb[/size][/vbox][vbox][size font='double bogey layer 1' size=350]\u0152[/size][/vbox][vbox][size font='double bogey layer 1' size=350]\u0153[/size][/vbox][vbox][size font='double bogey layer 1' size=350]\u0178[/size][/vbox][vbox][size font='double bogey layer 1' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Decorated",
		"Hard To Read",
		"Negative Space",
		"Ornamental"
	]
},
{
	"name":"Double Bogey Layer 2",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Double Bogey - by Aenigma Fonts/Double Bogey Layer 2.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=4][vbox][size font='double bogey layer 2' size=350]\u0160[/size][/vbox][vbox][size font='double bogey layer 2' size=350]\u00a7[/size][/vbox][vbox][size font='double bogey layer 2' size=350]\u0161[/size][/vbox][vbox][size font='double bogey layer 2' size=350]\u00a9[/size][/vbox][/grid][br][grid cols=5][vbox][size font='double bogey layer 2' size=350]\u00af[/size][/vbox][vbox][size font='double bogey layer 2' size=350]\u00b0[/size][/vbox][vbox][size font='double bogey layer 2' size=350]\u00b1[/size][/vbox][vbox][size font='double bogey layer 2' size=350]\u00b2[/size][/vbox][vbox][size font='double bogey layer 2' size=350]\u00b3[/size][/vbox][vbox][size font='double bogey layer 2' size=350]\u00b5[/size][/vbox][vbox][size font='double bogey layer 2' size=350]\u00b6[/size][/vbox][vbox][size font='double bogey layer 2' size=350]\u00b7[/size][/vbox][vbox][size font='double bogey layer 2' size=350]\u00b9[/size][/vbox][vbox][size font='double bogey layer 2' size=350]\u00ba[/size][/vbox][vbox][size font='double bogey layer 2' size=350]\u00bb[/size][/vbox][vbox][size font='double bogey layer 2' size=350]\u0152[/size][/vbox][vbox][size font='double bogey layer 2' size=350]\u0153[/size][/vbox][vbox][size font='double bogey layer 2' size=350]\u0178[/size][/vbox][vbox][size font='double bogey layer 2' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Decorated",
		"Hard To Read",
		"Negative Space",
		"Ornamental"
	]
},
{
	"name":"Double Bogey Layer 3",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Double Bogey - by Aenigma Fonts/Double Bogey Layer 3.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=4][vbox][size font='double bogey layer 3' size=350]\u0160[/size][/vbox][vbox][size font='double bogey layer 3' size=350]\u00a7[/size][/vbox][vbox][size font='double bogey layer 3' size=350]\u0161[/size][/vbox][vbox][size font='double bogey layer 3' size=350]\u00a9[/size][/vbox][/grid][br][grid cols=5][vbox][size font='double bogey layer 3' size=350]\u00af[/size][/vbox][vbox][size font='double bogey layer 3' size=350]\u00b0[/size][/vbox][vbox][size font='double bogey layer 3' size=350]\u00b1[/size][/vbox][vbox][size font='double bogey layer 3' size=350]\u00b2[/size][/vbox][vbox][size font='double bogey layer 3' size=350]\u00b3[/size][/vbox][vbox][size font='double bogey layer 3' size=350]\u00b5[/size][/vbox][vbox][size font='double bogey layer 3' size=350]\u00b6[/size][/vbox][vbox][size font='double bogey layer 3' size=350]\u00b7[/size][/vbox][vbox][size font='double bogey layer 3' size=350]\u00b9[/size][/vbox][vbox][size font='double bogey layer 3' size=350]\u00ba[/size][/vbox][vbox][size font='double bogey layer 3' size=350]\u00bb[/size][/vbox][vbox][size font='double bogey layer 3' size=350]\u0152[/size][/vbox][vbox][size font='double bogey layer 3' size=350]\u0153[/size][/vbox][vbox][size font='double bogey layer 3' size=350]\u0178[/size][/vbox][vbox][size font='double bogey layer 3' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Decorated",
		"Hard To Read",
		"Negative Space",
		"Ornamental"
	]
},
{
	"name":"Double Bogey Layer 4",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Double Bogey - by Aenigma Fonts/Double Bogey Layer 4.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=4][vbox][size font='double bogey layer 4' size=350]\u0160[/size][/vbox][vbox][size font='double bogey layer 4' size=350]\u00a7[/size][/vbox][vbox][size font='double bogey layer 4' size=350]\u0161[/size][/vbox][vbox][size font='double bogey layer 4' size=350]\u00a9[/size][/vbox][/grid][br][grid cols=5][vbox][size font='double bogey layer 4' size=350]\u00af[/size][/vbox][vbox][size font='double bogey layer 4' size=350]\u00b0[/size][/vbox][vbox][size font='double bogey layer 4' size=350]\u00b1[/size][/vbox][vbox][size font='double bogey layer 4' size=350]\u00b2[/size][/vbox][vbox][size font='double bogey layer 4' size=350]\u00b3[/size][/vbox][vbox][size font='double bogey layer 4' size=350]\u00b5[/size][/vbox][vbox][size font='double bogey layer 4' size=350]\u00b6[/size][/vbox][vbox][size font='double bogey layer 4' size=350]\u00b7[/size][/vbox][vbox][size font='double bogey layer 4' size=350]\u00b9[/size][/vbox][vbox][size font='double bogey layer 4' size=350]\u00ba[/size][/vbox][vbox][size font='double bogey layer 4' size=350]\u00bb[/size][/vbox][vbox][size font='double bogey layer 4' size=350]\u0152[/size][/vbox][vbox][size font='double bogey layer 4' size=350]\u0153[/size][/vbox][vbox][size font='double bogey layer 4' size=350]\u0178[/size][/vbox][vbox][size font='double bogey layer 4' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Decorated",
		"Hard To Read",
		"Negative Space",
		"Ornamental"
	]
},
{
	"name":"Draggle",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Draggle - by Aenigma Fonts/Draggle.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Partial Symbol Set",
		"Plain",
		"Playful"
	]
},
{
	"name":"Draggle Over Kerned",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Draggle - by Aenigma Fonts/Draggle Over Kerned.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Partial Symbol Set",
		"Plain",
		"Playful"
	]
},
{
	"name":"Dream Orphans",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Dream Orphans.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Dream Orphans Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Dream Orphans Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Dream Orphans Bold Italic.otf",
			"style":"italic",
			"weight":"bold"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Narrow Chars",
		"Plain"
	]
},
{
	"name":"Dynalight",
	"authors":[
		"Astigmatic One Eye Typographic Institute"
	],
	"variants":[
		{
			"path":"Dynalight - by Astigmatic One Eye Typographic Institute/Dynalight.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Elegant",
		"Formal",
		"Plain",
		"Script",
		"Slanted"
	]
},
{
	"name":"Dynamic",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Dynamic - by Aenigma Fonts/Dynamic.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Rounded Chars",
		"Thick Stroke"
	]
},
{
	"name":"Dyphusion",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Dyphusion - by Aenigma Fonts/Dyphusion.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=5][vbox][size font='dyphusion' size=350]\u00b2[/size][/vbox][vbox][size font='dyphusion' size=350]\u00b3[/size][/vbox][vbox][size font='dyphusion' size=350]\u00b9[/size][/vbox][vbox][size font='dyphusion' size=350]\u00ba[/size][/vbox][vbox][size font='dyphusion' size=350]\u00bb[/size][/vbox][vbox][size font='dyphusion' size=350]\u0152[/size][/vbox][vbox][size font='dyphusion' size=350]\u0153[/size][/vbox][vbox][size font='dyphusion' size=350]\u0178[/size][/vbox][vbox][size font='dyphusion' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Multi-Stroke",
		"Ornamental",
		"Striped"
	]
},
{
	"name":"Dyspepsia",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Dyspepsia.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Leading Left Hook",
		"Narrow Chars",
		"Script",
		"Thick Stroke"
	]
},
{
	"name":"Dystorque",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Dystorque - by Aenigma Fonts/Dystorque.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"Ecliptic",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Ecliptic - by Aenigma Fonts/Ecliptic.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Partial Symbol Set",
		"Rounded Chars"
	]
},
{
	"name":"Eden Mills",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Eden Mills.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Eden Mills Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Eden Mills Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Eden Mills Bold Italic.otf",
			"style":"italic",
			"weight":"bold"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Block Shaped",
		"Leading Left Hook"
	]
},
{
	"name":"Edgewater",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Edgewater.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Broken Letters",
		"Decay",
		"No Lowercase",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Edit Undo",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Edit Undo - by Aenigma Fonts/Edit Undo.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"No Lowercase",
		"Pixelated",
		"Retro",
		"Thick Stroke"
	]
},
{
	"name":"Edit Undo Dot",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Edit Undo - by Aenigma Fonts/Edit Undo Dot.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Dotted",
		"No Lowercase",
		"Pixelated",
		"Retro",
		"Thick Stroke"
	]
},
{
	"name":"Edit Undo Line",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Edit Undo - by Aenigma Fonts/Edit Undo Line.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"No Lowercase",
		"Pixelated",
		"Retro",
		"Striped",
		"Thick Stroke"
	]
},
{
	"name":"Edmunds",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Edmunds.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Vintage",
		"Western"
	]
},
{
	"name":"Edmunds - Distressed",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Edmunds - Distressed.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Decay",
		"Vintage",
		"Western"
	]
},
{
	"name":"Edo SZ",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Edo SZ.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decay",
		"Distressed",
		"Handwriting",
		"Marker",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Electorate Boogaloo 3",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Electorate Boogaloo 3.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Hard To Read",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Elsewhere 2",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Elsewhere - by Aenigma Fonts/Elsewhere.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Calligraphy",
		"Plain",
		"Rounded Edges"
	]
},
{
	"name":"Elsewhere 2",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Elsewhere - by Aenigma Fonts/Elsewhere 2.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Calligraphy",
		"Plain",
		"Rounded Edges"
	]
},
{
	"name":"Embossing Tape 1",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Embossing Tape - by Aenigma Fonts/Embossing Tape 1.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decay",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Shadow"
	]
},
{
	"name":"Embossing Tape 2",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Embossing Tape - by Aenigma Fonts/Embossing Tape 2.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"3D",
		"Decay",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Shadow",
		"Slanted"
	]
},
{
	"name":"Embossing Tape 3",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Embossing Tape - by Aenigma Fonts/Embossing Tape 3.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decay",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Shadow"
	]
},
{
	"name":"Encapsulate",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Encapsulate - by Aenigma Fonts/Encapsulate.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Empty outlines:[br][grid cols=2][vbox][size font='encapsulate' size=350]\u00c8[/size][/vbox][vbox][size font='encapsulate' size=350]\u00c9[/size][/vbox][/grid][br][br]Optionally close the outer edges using brackets:[br][grid cols=2][vbox][color fg=f74][[/color][size font='encapsulate' size=350] [ [/size][/vbox][vbox][color fg=f74]][/color][size font='encapsulate' size=350]][/size][/vbox][/grid][br][br]Extra characters:[br][grid cols=4][vbox][size font='encapsulate' size=350]\u00ca[/size][/vbox][vbox][size font='encapsulate' size=350]\u00cb[/size][/vbox][vbox][size font='encapsulate' size=350]\u00cc[/size][/vbox][vbox][size font='encapsulate' size=350]\u00cd[/size][/vbox][vbox][size font='encapsulate' size=350]\u00ce[/size][/vbox][vbox][size font='encapsulate' size=350]\u00cf[/size][/vbox][vbox][size font='encapsulate' size=350]\u00d0[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Ornamental",
		"Outline",
		"Partial Symbol Set",
		"Striped"
	]
},
{
	"name":"Encapsulate Plain",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Encapsulate - by Aenigma Fonts/Encapsulate Plain.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=4][vbox][size font='encapsulate plain' size=350]\u00ca[/size][/vbox][vbox][size font='encapsulate plain' size=350]\u00cb[/size][/vbox][vbox][size font='encapsulate plain' size=350]\u00cc[/size][/vbox][vbox][size font='encapsulate plain' size=350]\u00cd[/size][/vbox][vbox][size font='encapsulate plain' size=350]\u00ce[/size][/vbox][vbox][size font='encapsulate plain' size=350]\u00cf[/size][/vbox][vbox][size font='encapsulate plain' size=350]\u00d0[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Ornamental",
		"Plain"
	]
},
{
	"name":"Encode Sans",
	"authors":[
		"Andres Torresi",
		"Impallari Type",
		"Jacques Le Bailly"
	],
	"variants":[
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Thin.ttf",
			"style":"normal",
			"weight":"100"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Extra Light.ttf",
			"style":"normal",
			"weight":"200"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Light.ttf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Bold.ttf",
			"style":"normal",
			"weight":"700"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Extra Bold.ttf",
			"style":"normal",
			"weight":"800"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Black.ttf",
			"style":"normal",
			"weight":"900"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Encode Sans Condensed",
	"authors":[
		"Andres Torresi",
		"Impallari Type",
		"Jacques Le Bailly"
	],
	"variants":[
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Condensed Thin.ttf",
			"style":"normal",
			"weight":"100"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Condensed Extra Light.ttf",
			"style":"normal",
			"weight":"200"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Condensed Light.ttf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Condensed.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Condensed Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Condensed Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Condensed Bold.ttf",
			"style":"normal",
			"weight":"700"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Condensed Extra Bold.ttf",
			"style":"normal",
			"weight":"800"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Condensed Black.ttf",
			"style":"normal",
			"weight":"900"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Narrow Chars",
		"Plain"
	]
},
{
	"name":"Encode Sans Semi Condensed",
	"authors":[
		"Andres Torresi",
		"Impallari Type",
		"Jacques Le Bailly"
	],
	"variants":[
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Semi Condensed Thin.ttf",
			"style":"normal",
			"weight":"100"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Semi Condensed Extra Light.ttf",
			"style":"normal",
			"weight":"200"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Semi Condensed Light.ttf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Semi Condensed.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Semi Condensed Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Semi Condensed Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Semi Condensed Bold.ttf",
			"style":"normal",
			"weight":"700"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Semi Condensed Extra Bold.ttf",
			"style":"normal",
			"weight":"800"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Semi Condensed Black.ttf",
			"style":"normal",
			"weight":"900"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Encode Sans Semi Expanded",
	"authors":[
		"Andres Torresi",
		"Impallari Type",
		"Jacques Le Bailly"
	],
	"variants":[
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Semi Expanded Thin.ttf",
			"style":"normal",
			"weight":"100"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Semi Expanded Extra Light.ttf",
			"style":"normal",
			"weight":"200"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Semi Expanded Light.ttf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Semi Expanded.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Semi Expanded Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Semi Expanded Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Semi Expanded Bold.ttf",
			"style":"normal",
			"weight":"700"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Semi Expanded Extra Bold.ttf",
			"style":"normal",
			"weight":"800"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Semi Expanded Black.ttf",
			"style":"normal",
			"weight":"900"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Encode Sans Expanded",
	"authors":[
		"Andres Torresi",
		"Impallari Type",
		"Jacques Le Bailly"
	],
	"variants":[
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Expanded Thin.ttf",
			"style":"normal",
			"weight":"100"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Expanded Extra Light.ttf",
			"style":"normal",
			"weight":"200"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Expanded Light.ttf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Expanded.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Expanded Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Expanded Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Expanded Bold.ttf",
			"style":"normal",
			"weight":"700"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Expanded Extra Bold.ttf",
			"style":"normal",
			"weight":"800"
		},
		{
			"path":"_Impallari Type/Encode Sans - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans Expanded Black.ttf",
			"style":"normal",
			"weight":"900"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain",
		"Wide Chars"
	]
},
{
	"name":"Encode Sans SC",
	"authors":[
		"Andres Torresi",
		"Impallari Type",
		"Jacques Le Bailly"
	],
	"variants":[
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Thin.ttf",
			"style":"normal",
			"weight":"100"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Extra Light.ttf",
			"style":"normal",
			"weight":"200"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Light.ttf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Bold.ttf",
			"style":"normal",
			"weight":"700"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Extra Bold.ttf",
			"style":"normal",
			"weight":"800"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Black.ttf",
			"style":"normal",
			"weight":"900"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Encode Sans SC Condensed",
	"authors":[
		"Andres Torresi",
		"Impallari Type",
		"Jacques Le Bailly"
	],
	"variants":[
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Condensed Thin.ttf",
			"style":"normal",
			"weight":"100"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Condensed Extra Light.ttf",
			"style":"normal",
			"weight":"200"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Condensed Light.ttf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Condensed.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Condensed Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Condensed Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Condensed Bold.ttf",
			"style":"normal",
			"weight":"700"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Condensed Extra Bold.ttf",
			"style":"normal",
			"weight":"800"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Condensed Black.ttf",
			"style":"normal",
			"weight":"900"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Narrow Chars",
		"Plain"
	]
},
{
	"name":"Encode Sans SC Semi Condensed",
	"authors":[
		"Andres Torresi",
		"Impallari Type",
		"Jacques Le Bailly"
	],
	"variants":[
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Semi Condensed Thin.ttf",
			"style":"normal",
			"weight":"100"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Semi Condensed Extra Light.ttf",
			"style":"normal",
			"weight":"200"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Semi Condensed Light.ttf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Semi Condensed.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Semi Condensed Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Semi Condensed Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Semi Condensed Bold.ttf",
			"style":"normal",
			"weight":"700"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Semi Condensed Extra Bold.ttf",
			"style":"normal",
			"weight":"800"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Semi Condensed Black.ttf",
			"style":"normal",
			"weight":"900"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Encode Sans SC Semi Expanded",
	"authors":[
		"Andres Torresi",
		"Impallari Type",
		"Jacques Le Bailly"
	],
	"variants":[
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Semi Expanded Thin.ttf",
			"style":"normal",
			"weight":"100"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Semi Expanded Extra Light.ttf",
			"style":"normal",
			"weight":"200"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Semi Expanded Light.ttf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Semi Expanded.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Semi Expanded Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Semi Expanded Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Semi Expanded Bold.ttf",
			"style":"normal",
			"weight":"700"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Semi Expanded Extra Bold.ttf",
			"style":"normal",
			"weight":"800"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Semi Expanded Black.ttf",
			"style":"normal",
			"weight":"900"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Encode Sans SC Expanded",
	"authors":[
		"Andres Torresi",
		"Impallari Type",
		"Jacques Le Bailly"
	],
	"variants":[
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Expanded Thin.ttf",
			"style":"normal",
			"weight":"100"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Expanded Extra Light.ttf",
			"style":"normal",
			"weight":"200"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Expanded Light.ttf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Expanded.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Expanded Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Expanded Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Expanded Bold.ttf",
			"style":"normal",
			"weight":"700"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Expanded Extra Bold.ttf",
			"style":"normal",
			"weight":"800"
		},
		{
			"path":"_Impallari Type/Encode Sans SC - by Impallari Type, Andres Torresi, Jacques Le Bailly/static/Encode Sans SC Expanded Black.ttf",
			"style":"normal",
			"weight":"900"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Energy Dimension",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Energy Dimension.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"3D",
		"No Lowercase",
		"Offset",
		"Ornamental",
		"Outline",
		"Partial Symbol Set"
	]
},
{
	"name":"Eniltuo",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Eniltuo.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Partial Symbol Set",
		"Slanted"
	]
},
{
	"name":"Ennobled Pet",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Ennobled Pet.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Animals",
		"Decorated",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"Entangled",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Entangled - by Aenigma Fonts/Entangled.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"End caps:[br][grid cols=2][vbox][size font='entangled' size=350] \u00ab [/size][/vbox][vbox][size font='entangled' size=350]\u00bb[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Hard To Read",
		"Negative Space",
		"Ornamental",
		"Rounded Edges",
		"Striped"
	]
},
{
	"name":"Entangled Layer A",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Entangled - by Aenigma Fonts/Entangled Layer A.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"End caps:[br][grid cols=2][vbox][size font='entangled layer a' size=350] \u00ab [/size][/vbox][vbox][size font='entangled layer a' size=350]\u00bb[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Decorated",
		"Hard To Read",
		"Negative Space",
		"Ornamental",
		"Rounded Edges",
		"Striped"
	]
},
{
	"name":"Entangled Layer B",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Entangled - by Aenigma Fonts/Entangled Layer B.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"End caps:[br][grid cols=2][vbox][size font='entangled layer b' size=350] \u00ab [/size][/vbox][vbox][size font='entangled layer b' size=350]\u00bb[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Decorated",
		"Hard To Read",
		"Negative Space",
		"Ornamental",
		"Rounded Edges",
		"Striped"
	]
},
{
	"name":"Entangled Plain",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Entangled - by Aenigma Fonts/Entangled Plain.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Hard To Read",
		"Negative Space",
		"Rounded Edges",
		"Striped"
	]
},
{
	"name":"Enthuse",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Enthuse - by Aenigma Fonts/Enthuse.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=5][vbox][size font='enthuse' size=350]\u00c8[/size][/vbox][vbox][size font='enthuse' size=350]\u00c9[/size][/vbox][vbox][size font='enthuse' size=350]\u00ca[/size][/vbox][vbox][size font='enthuse' size=350]\u00cb[/size][/vbox][vbox][size font='enthuse' size=350]\u00cc[/size][/vbox][vbox][size font='enthuse' size=350]\u00cd[/size][/vbox][vbox][size font='enthuse' size=350]\u00ce[/size][/vbox][vbox][size font='enthuse' size=350]\u00cf[/size][/vbox][vbox][size font='enthuse' size=350]\u00d0[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Ornamental"
	]
},
{
	"name":"Enthuse Solid",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Enthuse - by Aenigma Fonts/Enthuse Solid.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=5][vbox][size font='enthuse solid' size=350]\u00c8[/size][/vbox][vbox][size font='enthuse solid' size=350]\u00c9[/size][/vbox][vbox][size font='enthuse solid' size=350]\u00ca[/size][/vbox][vbox][size font='enthuse solid' size=350]\u00cb[/size][/vbox][vbox][size font='enthuse solid' size=350]\u00cc[/size][/vbox][vbox][size font='enthuse solid' size=350]\u00cd[/size][/vbox][vbox][size font='enthuse solid' size=350]\u00ce[/size][/vbox][vbox][size font='enthuse solid' size=350]\u00cf[/size][/vbox][vbox][size font='enthuse solid' size=350]\u00d0[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Calligraphy",
		"Negative Space",
		"Ornamental"
	]
},
{
	"name":"Entypo",
	"authors":[
		"Daniel Bruce"
	],
	"variants":[
		{
			"path":"Entypo - by Daniel Bruce/Entypo.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"ShareAlike License",
	"tags":[
		"Symbols Only"
	]
},
{
	"name":"Euphoric",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Euphoric - by Aenigma Fonts/Euphoric.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"Euphoric 3D",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Euphoric - by Aenigma Fonts/Euphoric 3D.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"3D",
		"Negative Space",
		"Playful",
		"Shadow",
		"Uneven Chars"
	]
},
{
	"name":"Eurocentric",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Eurocentric.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"No Lowercase",
		"Partial Symbol Set",
		"Soviet",
		"Thick Stroke"
	]
},
{
	"name":"Exaggerate",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Exaggerate - by Aenigma Fonts/Exaggerate.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"3D",
		"No Symbols",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Excelsior Sans",
	"authors":[
		"A J Paglia"
	],
	"variants":[
		{
			"path":"_A J Paglia Fonts/Free Fonts/Excelsior Sans.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Calligraphy",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Extended Play",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Extended Play.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"No Lowercase",
		"Partial Symbol Set",
		"Plain",
		"Uneven Chars"
	]
},
{
	"name":"Extraction",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Extraction - by Aenigma Fonts/Extraction.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Decay",
		"Distressed",
		"Ornamental",
		"Thick Stroke"
	]
},
{
	"name":"Fabian",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Fabian.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Block Shaped",
		"Narrow Chars",
		"Partial Symbol Set",
		"Slanted"
	]
},
{
	"name":"Fadgod",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Fadgod.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Broken Letters",
		"Hard To Read",
		"Ornamental",
		"Thin Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Failed Attempt",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Failed Attempt.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Dotted",
		"Ornamental",
		"Retro",
		"Slanted"
	]
},
{
	"name":"False Positive",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/False Positive - by Aenigma Fonts/False Positive.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Plain"
	]
},
{
	"name":"False Positive Round",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/False Positive - by Aenigma Fonts/False Positive Round.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Plain",
		"Rounded Edges"
	]
},
{
	"name":"Farro",
	"authors":[
		"Grayscale Limited"
	],
	"variants":[
		{
			"path":"Farro - by Grayscale Limited/Farro Light.otf",
			"style":"normal",
			"weight":"200"
		},
		{
			"path":"Farro - by Grayscale Limited/Farro.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"Farro - by Grayscale Limited/Farro Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"Farro - by Grayscale Limited/Farro Medium.otf",
			"style":"normal",
			"weight":"500"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Fascii",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Fascii - by Aenigma Fonts/Fascii.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"ASCII",
		"Broken Letters",
		"Dashed",
		"Multi-Stroke",
		"Narrow Chars",
		"Playful"
	]
},
{
	"name":"Fascii Cross",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Fascii - by Aenigma Fonts/Fascii Cross.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Broken Letters",
		"Narrow Chars",
		"Ornamental",
		"Stitch"
	]
},
{
	"name":"Fascii Scraggly",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Fascii - by Aenigma Fonts/Fascii Scraggly.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Broken Letters",
		"Decay",
		"Distorted",
		"Narrow Chars"
	]
},
{
	"name":"Fascii Smudge",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Fascii - by Aenigma Fonts/Fascii Smudge.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Decay",
		"Narrow Chars"
	]
},
{
	"name":"Fascii Twigs",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Fascii - by Aenigma Fonts/Fascii Twigs.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Halloween",
		"Narrow Chars",
		"Thin Stroke"
	]
},
{
	"name":"Fat Marker",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Fat Marker.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Fat Marker Italic.ttf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Handwriting",
		"Marker",
		"Partial Symbol Set",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"Fatboy Slim BLTC 2",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Fatboy Slim BLTC 2 - by Aenigma Fonts/Fatboy Slim BLTC 2.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Handwriting",
		"Marker",
		"No Lowercase",
		"Playful",
		"Rounded Edges",
		"Uneven Chars"
	]
},
{
	"name":"Faux Snow",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Faux Snow - by Aenigma Fonts/Faux Snow.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Symbols Only",
		"Snow"
	]
},
{
	"name":"Fawn Script",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Fawn Script.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Handwriting",
		"Marker",
		"Partial Symbol Set"
	]
},
{
	"name":"Fidgety",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Fidgety - by Aenigma Fonts/Fidgety.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distorted",
		"Halloween",
		"Negative Space",
		"Outline"
	]
},
{
	"name":"Filepile",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Filepile.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Logo",
		"Negative Space",
		"No Lowercase",
		"Outline",
		"Partial Symbol Set",
		"Shadow"
	]
},
{
	"name":"First Blind 2",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/First Blind 2.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Leading Left Hook",
		"No Lowercase",
		"Ornamental",
		"Wide Chars"
	]
},
{
	"name":"Flipside",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Flipside - by Aenigma Fonts/Flipside.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"No Lowercase",
		"Ornamental",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Fluoride Beings",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Fluoride Beings.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"3D",
		"Angular",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"FM College Team",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/FM College Team.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"College",
		"Partial Symbol Set"
	]
},
{
	"name":"FM College Team In&Out",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/FM College Team In&Out.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"College",
		"Ornamental",
		"Outline",
		"Partial Symbol Set"
	]
},
{
	"name":"FM College Team Outline",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/FM College Team Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"College",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Partial Symbol Set"
	]
},
{
	"name":"FM University",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/FM University.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"College",
		"No Lowercase",
		"Ornamental",
		"Outline",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Fontmaker Slash",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Fontmaker Slash.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Thin Stroke"
	]
},
{
	"name":"Fontovision",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Fontovision.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Leading Left Hook",
		"No Uppercase",
		"Ornamental",
		"Partial Symbol Set",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"Fontovision II",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Fontovision II.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"3D",
		"Leading Left Hook",
		"No Uppercase",
		"Ornamental",
		"Partial Symbol Set",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"Fontovision III",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Fontovision III.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"3D",
		"Leading Left Hook",
		"No Uppercase",
		"Ornamental",
		"Partial Symbol Set",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"Fontovision IV",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Fontovision IV.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Leading Left Hook",
		"Negative Space",
		"No Uppercase",
		"Ornamental",
		"Outline",
		"Partial Symbol Set",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"Forcible",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Forcible - by Aenigma Fonts/Forcible.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Partial Symbol Set",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Foreshadow",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Foreshadow - by Aenigma Fonts/Foreshadow.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"3D",
		"Broken Letters",
		"Hard To Read",
		"No Lowercase",
		"Striped",
		"Thick Stroke"
	]
},
{
	"name":"Foreshadow Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Foreshadow - by Aenigma Fonts/Foreshadow Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"3D",
		"Broken Letters",
		"Hard To Read",
		"Negative Space",
		"No Lowercase",
		"Outline",
		"Striped",
		"Thick Stroke"
	]
},
{
	"name":"Forque",
	"authors":[
		"Tup Wanders"
	],
	"variants":[
		{
			"path":"_Tup Wanders/Free Fonts/Forque.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Fragile Bombers",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Fragile Bombers.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"Fragile Bombers - Attack",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Fragile Bombers - Attack.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Decay",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"Fragile Bombers - Down",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Fragile Bombers - Down.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Distorted",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"Frak",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Frak.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Broken Letters",
		"Distressed",
		"Partial Symbol Set",
		"Slanted"
	]
},
{
	"name":"Freak Turbulence",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Freak Turbulence - by Aenigma Fonts/Freak Turbulence.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Rounded Chars",
		"Wide Chars"
	]
},
{
	"name":"Freelance Kamchatka",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Freelance Kamchatka.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Striped"
	]
},
{
	"name":"Frizzed",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Frizzed - by Aenigma Fonts/Frizzed.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distorted",
		"No Symbols",
		"Ornamental"
	]
},
{
	"name":"Frozdotre",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Frozdotre.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Ornamental",
		"Rounded Chars",
		"Thick Stroke"
	]
},
{
	"name":"Fully Completely",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Fully Completely - by Aenigma Fonts/Fully Completely.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Marker",
		"Playful",
		"Rounded Edges",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Galapogos",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Galapogos - by Aenigma Fonts/Galapogos.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Galvanize",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Galvanize - by Aenigma Fonts/Galvanize.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=3][vbox][size font='galvanize' size=350]\u0153[/size][/vbox][vbox][size font='galvanize' size=350]\u0178[/size][/vbox][vbox][size font='galvanize' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Rounded Edges"
	]
},
{
	"name":"Gang of Three",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Gang of Three.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Gaposis Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Gaposis - by Aenigma Fonts/Gaposis Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Negative Space",
		"Partial Symbol Set",
		"Pixelated",
		"Retro",
		"Striped",
		"Thick Stroke"
	]
},
{
	"name":"Gaposis Solid",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Gaposis - by Aenigma Fonts/Gaposis Solid.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Partial Symbol Set",
		"Pixelated",
		"Retro",
		"Wide Chars"
	]
},
{
	"name":"Gasping",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Gasping - by Aenigma Fonts/Gasping.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decay",
		"Halloween",
		"Narrow Chars"
	]
},
{
	"name":"Gather",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Gather - by Aenigma Fonts/Gather.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Plain",
		"Rounded Edges"
	]
},
{
	"name":"Gather Gapped",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Gather - by Aenigma Fonts/Gather Gapped.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Narrow Chars",
		"Plain",
		"Rounded Edges"
	]
},
{
	"name":"Gawain",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Gawain.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"No Lowercase",
		"No Symbols",
		"Ornamental",
		"Outline",
		"Thick Stroke"
	]
},
{
	"name":"Genotype Hollow",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Genotype - by Aenigma Fonts/Genotype Hollow.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Narrow Chars",
		"Negative Space",
		"Ornamental",
		"Thick Stroke"
	]
},
{
	"name":"Genotype Round Hollow",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Genotype - by Aenigma Fonts/Genotype Round Hollow.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Negative Space",
		"Ornamental",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Genotype Round Solid",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Genotype - by Aenigma Fonts/Genotype Round Solid.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Genotype Solid",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Genotype - by Aenigma Fonts/Genotype Solid.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Narrow Chars",
		"Thick Stroke"
	]
},
{
	"name":"Gesture",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Gesture - by Aenigma Fonts/Gesture Thin.ttf",
			"style":"normal",
			"weight":"100"
		},
		{
			"path":"_Aenigma Fonts/Gesture - by Aenigma Fonts/Gesture Thin Slant.ttf",
			"style":"italic",
			"weight":"100"
		},
		{
			"path":"_Aenigma Fonts/Gesture - by Aenigma Fonts/Gesture.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Aenigma Fonts/Gesture - by Aenigma Fonts/Gesture Slant.ttf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Calligraphy",
		"Elegant",
		"No Lowercase",
		"Thick Stroke"
	]
},
{
	"name":"Ghostmeat",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Ghostmeat.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Graffiti",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Outline",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Ghostmeat - Back",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Ghostmeat - Back.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Graffiti",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Ghostmeat - Front",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Ghostmeat - Front.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Graffiti",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Giant Tigers",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Giant Tigers.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Narrow Chars",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Striped"
	]
},
{
	"name":"Giant Tigers - Back",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Giant Tigers - Back.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Narrow Chars",
		"No Lowercase",
		"Partial Symbol Set",
		"Plain"
	]
},
{
	"name":"Giant Tigers - Front",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Giant Tigers - Front.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Composite Font",
		"Narrow Chars",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Striped"
	]
},
{
	"name":"Gisele Script",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Gisele Script.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Curvy Letters",
		"Handwriting",
		"Partial Symbol Set",
		"Script",
		"Uneven Chars"
	]
},
{
	"name":"Gladifilthefte",
	"authors":[
		"Tup Wanders"
	],
	"variants":[
		{
			"path":"_Tup Wanders/Free Fonts/Gladifilthefte.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Partial Symbol Set",
		"Plain",
		"Slanted"
	]
},
{
	"name":"Glazkrak",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Glazkrak.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Decay",
		"Decorated",
		"Glass",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Golden Girdle",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Golden Girdle.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Hard To Read",
		"Logo",
		"No Lowercase",
		"Ornamental",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Goose Bumps",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Goose Bumps - by Aenigma Fonts/Goose Bumps.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Curvy Letters",
		"Halloween",
		"Ornamental",
		"Rounded Edges"
	]
},
{
	"name":"Goose Bumps II",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Goose Bumps - by Aenigma Fonts/Goose Bumps II.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Curvy Letters",
		"Halloween",
		"Ornamental"
	]
},
{
	"name":"Got No Heart",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Got No Heart.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Hard To Read",
		"Heart",
		"Negative Space",
		"No Lowercase",
		"Outline",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Got No Heart - Solid",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Got No Heart - Solid.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Hard To Read",
		"Heart",
		"No Lowercase",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Graduate",
	"authors":[
		"Eduardo Tunni"
	],
	"variants":[
		{
			"path":"Graduate - by Eduardo Tunni/Graduate.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Angular",
		"Block Shaped",
		"College",
		"No Lowercase"
	]
},
{
	"name":"Graffiti Treat",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Graffiti Treat.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Composite Font",
		"Graffiti",
		"Hard To Read",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Outline",
		"Partial Symbol Set"
	]
},
{
	"name":"Graffiti Treat - Back",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Graffiti Treat - Back.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Composite Font",
		"Graffiti",
		"Hard To Read",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Graffiti Treat - Front",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Graffiti Treat - Front.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Composite Font",
		"Graffiti",
		"Hard To Read",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Grand Hotel",
	"authors":[
		"Astigmatic One Eye Typographic Institute"
	],
	"variants":[
		{
			"path":"Grand Hotel - by Astigmatic One Eye Typographic Institute/Grand Hotel.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Curvy Letters",
		"Elegant",
		"Handwriting",
		"Script"
	]
},
{
	"name":"Granular",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Granular - by Aenigma Fonts/Granular.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Decorated",
		"Dotted",
		"Ornamental"
	]
},
{
	"name":"Grapple",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Grapple - by Aenigma Fonts/Grapple.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Broken Letters",
		"Thick Stroke"
	]
},
{
	"name":"Grave Digger",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Grave Digger.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Broken Letters",
		"Gothic",
		"Leading Left Hook",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Graveyard",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Graveyard - by Aenigma Fonts/Graveyard.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Broken Letters",
		"Decay",
		"Distressed",
		"Halloween",
		"Narrow Chars"
	]
},
{
	"name":"Gravitate",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Gravitate - by Aenigma Fonts/Gravitate.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=6][vbox][size font='gravitate' size=350]\u00c8[/size][/vbox][vbox][size font='gravitate' size=350]\u00c9[/size][/vbox][vbox][size font='gravitate' size=350]\u00ca[/size][/vbox][vbox][size font='gravitate' size=350]\u00cb[/size][/vbox][vbox][size font='gravitate' size=350]\u00cc[/size][/vbox][vbox][size font='gravitate' size=350]\u00cd[/size][/vbox][vbox][size font='gravitate' size=350]\u00ce[/size][/vbox][vbox][size font='gravitate' size=350]\u00cf[/size][/vbox][vbox][size font='gravitate' size=350]\u00d0[/size][/vbox][vbox][size font='gravitate' size=350]\u00d1[/size][/vbox][vbox][size font='gravitate' size=350]\u00d2[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Gravitate Segments",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Gravitate - by Aenigma Fonts/Gravitate Segments.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=6][vbox][size font='gravitate segments' size=350]\u00c8[/size][/vbox][vbox][size font='gravitate segments' size=350]\u00c9[/size][/vbox][vbox][size font='gravitate segments' size=350]\u00ca[/size][/vbox][vbox][size font='gravitate segments' size=350]\u00cb[/size][/vbox][vbox][size font='gravitate segments' size=350]\u00cc[/size][/vbox][vbox][size font='gravitate segments' size=350]\u00cd[/size][/vbox][vbox][size font='gravitate segments' size=350]\u00ce[/size][/vbox][vbox][size font='gravitate segments' size=350]\u00cf[/size][/vbox][vbox][size font='gravitate segments' size=350]\u00d0[/size][/vbox][vbox][size font='gravitate segments' size=350]\u00d1[/size][/vbox][vbox][size font='gravitate segments' size=350]\u00d2[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Ornamental",
		"Rounded Edges",
		"Striped",
		"Thick Stroke"
	]
},
{
	"name":"Graze",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Graze - by Aenigma Fonts/Graze.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=4][vbox][size font='graze' size=350]\u00ce[/size][/vbox][vbox][size font='graze' size=350]\u00cf[/size][/vbox][vbox][size font='graze' size=350]\u00d0[/size][/vbox][vbox][size font='graze' size=350]\u00d1[/size][/vbox][vbox][size font='graze' size=350]\u00d2[/size][/vbox][vbox][size font='graze' size=350]\u00d3[/size][/vbox][vbox][size font='graze' size=350]\u00d4[/size][/vbox][vbox][size font='graze' size=350]\u00d5[/size][/vbox][/grid][br][br]Caps:[br][grid cols=3][vbox][size font='graze' size=350]\u00c8[/size][/vbox][vbox][/vbox][vbox][size font='graze' size=350]\u00c9[/size][/vbox][/grid][grid cols=2][vbox][size font='graze' size=350]\u00ca[/size][/vbox][vbox][size font='graze' size=350]\u00cb[/size][/vbox][/grid][grid cols=2][vbox][size font='graze' size=350]\u00cc[/size][/vbox][vbox][size font='graze' size=350]\u00cd[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Decorated",
		"Hard To Read",
		"Monospace",
		"Ornamental",
		"Sideways",
		"Thick Stroke"
	]
},
{
	"name":"Great Heights",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Great Heights - by Aenigma Fonts/Great Heights.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Calligraphy",
		"Narrow Chars",
		"Plain",
		"Slanted"
	]
},
{
	"name":"Great Vibes",
	"authors":[
		"TypeSETit"
	],
	"variants":[
		{
			"path":"Great Vibes - by TypeSETit/Great Vibes.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Elegant",
		"Handwriting",
		"Script",
		"Slanted"
	]
},
{
	"name":"Groovy Ghosties",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Groovy Ghosties.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Decorated",
		"Halloween",
		"Hard To Read",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Outline",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Groovy Ghosties - Back",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Groovy Ghosties - Back.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Halloween",
		"Hard To Read",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Groovy Ghosties - Front",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Groovy Ghosties - Front.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Decorated",
		"Halloween",
		"Hard To Read",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Grotesque",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Grotesque - by Aenigma Fonts/Grotesque.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Decorated",
		"Distorted",
		"Halloween",
		"Ornamental",
		"Thin Stroke"
	]
},
{
	"name":"Grudge",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Grudge - by Aenigma Fonts/Grudge.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Negative Space",
		"No Lowercase",
		"Ornamental"
	]
},
{
	"name":"Grudge 2",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Grudge - by Aenigma Fonts/Grudge 2.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Negative Space",
		"No Lowercase",
		"Ornamental"
	]
},
{
	"name":"Gumtuckey",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Gumtuckey.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Distorted",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Gyrose",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Gyrose - by Aenigma Fonts/Gyrose.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Angular",
		"No Lowercase",
		"Ornamental",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Gyrose Shift",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Gyrose - by Aenigma Fonts/Gyrose Shift.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Angular",
		"No Lowercase",
		"Ornamental",
		"Thick Stroke",
		"Uneven Chars",
		"Wide Chars"
	]
},
{
	"name":"Gyrose Squeeze",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Gyrose - by Aenigma Fonts/Gyrose Squeeze.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Angular",
		"Narrow Chars",
		"No Lowercase",
		"Ornamental"
	]
},
{
	"name":"Hack & Slash",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Hack & Slash - by Aenigma Fonts/Hack & Slash.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Halloween",
		"Negative Space",
		"Ornamental"
	]
},
{
	"name":"Hairball",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Hairball - by Aenigma Fonts/Hairball.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Animals",
		"Narrow Chars",
		"Ornamental",
		"Texture"
	]
},
{
	"name":"Half Eighties",
	"authors":[
		"Jayvee Enaguas"
	],
	"variants":[
		{
			"path":"Half Eighties - by Jayvee Enaguas/Half Eighties.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Monospace",
		"Pixelated",
		"Retro"
	]
},
{
	"name":"Hamma Mamma Jamma",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Hamma Mamma Jamma.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Partial Symbol Set",
		"Uneven Chars"
	]
},
{
	"name":"Hammerhead",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Hammerhead Thin.ttf",
			"style":"normal",
			"weight":"100"
		},
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Hammerhead Thin Italic.ttf",
			"style":"italic",
			"weight":"100"
		},
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Hammerhead.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Hammerhead Italic.ttf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters",
		"Composite Font",
		"Logo",
		"No Lowercase",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Hammerhead Outline",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Hammerhead Outline.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Hammerhead Outline Italic.ttf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters",
		"Composite Font",
		"Logo",
		"Negative Space",
		"No Lowercase",
		"Outline",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Hand Me Down Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Hand Me Down - by Aenigma Fonts/Hand Me Down Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Handwriting",
		"Negative Space",
		"Outline",
		"Playful",
		"Rounded Chars",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Hand Me Down Solid",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Hand Me Down - by Aenigma Fonts/Hand Me Down Solid.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Handwriting",
		"Marker",
		"Playful",
		"Rounded Chars",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Hassle",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Hassle - by Aenigma Fonts/Hassle.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distorted",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Partial Symbol Set"
	]
},
{
	"name":"Hawkeye",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Hawkeye.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Composite Font",
		"Graffiti",
		"Hard To Read",
		"Negative Space",
		"No Lowercase",
		"Outline",
		"Shadow",
		"Thick Stroke"
	]
},
{
	"name":"Hawkeye - Back",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Hawkeye - Back.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Composite Font",
		"Graffiti",
		"Hard To Read",
		"No Lowercase",
		"Shadow",
		"Thick Stroke"
	]
},
{
	"name":"Hawkeye - Front",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Hawkeye - Front.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Composite Font",
		"Graffiti",
		"Hard To Read",
		"No Lowercase",
		"Thick Stroke"
	]
},
{
	"name":"Head-Ding Maker",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Head-Ding Maker - By Aenigma Fonts/Head-Ding Maker.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"[font font='nabfonts sans-serif'][b size=125]To use:[/b][br][br]Choose a head shape by typing one of the following characters:[br][grid font='nabfonts monospace' cols=10][br][vbox][color fg=aa6]0[font font='head-ding maker' size=250]0 [/font][/color][/vbox][br][vbox][color fg=aa6]1[font font='head-ding maker' size=250]1~[/font][/color][/vbox][br][vbox][color fg=aa6]2[font font='head-ding maker' size=250]2 [/font][/color][/vbox][br][vbox][color fg=aa6]3[font font='head-ding maker' size=250]3 [/font][/color][/vbox][br][vbox][color fg=aa6]4[font font='head-ding maker' size=250]4 [/font][/color][/vbox][br][vbox][color fg=aa6]5[font font='head-ding maker' size=250]5 [/font][/color][/vbox][br][vbox][color fg=aa6]6[font font='head-ding maker' size=250]6 [/font][/color][/vbox][br][vbox][color fg=aa6]7[font font='head-ding maker' size=250]7 [/font][/color][/vbox][br][vbox][color fg=aa6]8[font font='head-ding maker' size=250]8 [/font][/color][/vbox][br][vbox][color fg=aa6]9[font font='head-ding maker' size=250]9 [/font][/color][/vbox][br][/grid][br][br]Next, choose eyes and a mouth from the following chart:[br][grid font='nabfonts monospace' cols=9 font='nabfonts monospace'][br][vbox][center][color fg=c33][b]A[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]A[/color][color fg=3cc]a [/font][size size=10][br][br][/size][b]a[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]B[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]B[/color][color fg=3cc]b [/font][size size=10][br][br][/size][b]b[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]C[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]C[/color][color fg=3cc]c [/font][size size=10][br][br][/size][b]c[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]D[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]D[/color][color fg=3cc]d [/font][size size=10][br][br][/size][b]d[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]E[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]E[/color][color fg=3cc]e [/font][size size=10][br][br][/size][b]e[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]F[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]F[/color][color fg=3cc]f [/font][size size=10][br][br][/size][b]f[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]G[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]G[/color][color fg=3cc]g [/font][size size=10][br][br][/size][b]g[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]H[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]H[/color][color fg=3cc]h [/font][size size=10][br][br][/size][b]h[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]I[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]I[/color][color fg=3cc]i [/font][size size=10][br][br][/size][b]i[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]J[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]J[/color][color fg=3cc]j [/font][size size=10][br][br][/size][b]j[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]K[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]K[/color][color fg=3cc]k [/font][size size=10][br][br][/size][b]k[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]L[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]L[/color][color fg=3cc]l [/font][size size=10][br][br][/size][b]l[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]M[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]M[/color][color fg=3cc]m [/font][size size=10][br][br][/size][b]m[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]N[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]N[/color][color fg=3cc]n [/font][size size=10][br][br][/size][b]n[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]O[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]O[/color][color fg=3cc]o [/font][size size=10][br][br][/size][b]o[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]P[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]P[/color][color fg=3cc]p [/font][size size=10][br][br][/size][b]p[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]Q[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]Q[/color][color fg=3cc]q [/font][size size=10][br][br][/size][b]q[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]R[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]R[/color][color fg=3cc]r [/font][size size=10][br][br][/size][b]r[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]S[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]S[/color][color fg=3cc]s [/font][size size=10][br][br][/size][b]s[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]T[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]T[/color][color fg=3cc]t [/font][size size=10][br][br][/size][b]t[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]U[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]U[/color][color fg=3cc]u [/font][size size=10][br][br][/size][b]u[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]V[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]V[/color][color fg=3cc]v [/font][size size=10][br][br][/size][b]v[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]W[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]W[/color][color fg=3cc]w [/font][size size=10][br][br][/size][b]w[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]X[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]X[/color][color fg=3cc]x [/font][size size=10][br][br][/size][b]x[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]Y[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]Y[/color][color fg=3cc]y [/font][size size=10][br][br][/size][b]y[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]Z[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]Z[/color][color fg=3cc]z [/font][size size=10][br][br][/size][b]z[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]_[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]_[/color][color fg=3cc]- [/font][size size=10][br][br][/size][b]-[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]+[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]+[/color][color fg=3cc]= [/font][size size=10][br][br][/size][b]=[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]|[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]|[/color][color fg=3cc]\\ [/font][size size=10][br][br][/size][b]\\[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]{[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]{[/color][color fg=3cc][ [/font][size size=10][br][br][/size][b][[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]}[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]}[/color][color fg=3cc]] [/font][size size=10][br][br][/size][b]][/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]:[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]:[/color][color fg=3cc]; [/font][size size=10][br][br][/size][b];[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]\"[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]\"[/color][color fg=3cc]' [/font][size size=10][br][br][/size][b]'[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]<[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]<[/color][color fg=3cc], [/font][size size=10][br][br][/size][b],[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]>[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]>[/color][color fg=3cc]. [/font][size size=10][br][br][/size][b].[/b][/color][/center][/vbox][br][vbox][center][color fg=c33][b]?[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]?[/color][color fg=3cc]/ [/font][size size=10][br][br][/size][b]/[/b][/color][/center][/vbox][br][/grid][br][br]After this, type a space to move on to the next character.[br]If you used face shape [b fg=aa6]1[/b], use a ~ to get the correct size space.[br][br]Since everything is drawn in-place, you can stack multiple face shapes, eyes and mouths if you like.[br][/font]"
	],
	"license":"Freeware",
	"tags":[
		"Symbols Only",
		"Faces"
	]
},
{
	"name":"Heart Sweet Heart",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Heart Sweet Heart.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Dotted",
		"Heart",
		"No Lowercase",
		"Partial Symbol Set"
	]
},
{
	"name":"Hearts",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Hearts - by Aenigma Fonts/Hearts.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"After typing in your text, type an underscore  [b fg=f44 size=150]_[/b]  to close up the last heart.[br][br]For a blank heart, type [b fg=f44 size=150]`[/b]."
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Heart",
		"Monospace",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Outline",
		"Partial Symbol Set"
	]
},
{
	"name":"Heavy Bevel",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Heavy Bevel - by Aenigma Fonts/Heavy Bevel.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Bevel",
		"Block Shaped",
		"Negative Space",
		"Ornamental",
		"Partial Symbol Set",
		"Retro",
		"Thick Stroke"
	]
},
{
	"name":"Hello Larry",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Hello Larry.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Hard To Read",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Helsinki",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Helsinki.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"No Lowercase",
		"Partial Symbol Set",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"Heydings Common Icons",
	"authors":[
		"Heydon Pickering"
	],
	"variants":[
		{
			"path":"Heydings Common Icons - by Heydon Pickering/Heydings Common Icons.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Symbols Only"
	]
},
{
	"name":"Heydings Controls",
	"authors":[
		"Heydon Pickering"
	],
	"variants":[
		{
			"path":"Heydings Controls - by Heydon Pickering/Heydings Controls.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Symbols Only"
	]
},
{
	"name":"Highway To Heck",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Highway To Heck.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Decay",
		"Formal",
		"Thick Stroke"
	]
},
{
	"name":"Hillock",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Hillock - by Aenigma Fonts/Hillock.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distorted",
		"Offset",
		"Partial Symbol Set",
		"Rounded Edges",
		"Shadow",
		"Thick Stroke"
	]
},
{
	"name":"Holy Smokes",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Holy Smokes.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Cigarettes",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"Holy Union",
	"authors":[
		"Digital Graphic Labs"
	],
	"variants":[
		{
			"path":"Holy Union - by Digital Graphic Labs/Holy Union.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Elegant",
		"Gothic"
	]
},
{
	"name":"Home Sweet Home",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Home Sweet Home.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Dotted",
		"No Lowercase",
		"Ornamental",
		"Outline",
		"Partial Symbol Set",
		"Stitch"
	]
},
{
	"name":"Home Sweet Home - Outline",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Home Sweet Home - Outline.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Dotted",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Stitch"
	]
},
{
	"name":"Homespun",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Homespun - by Aenigma Fonts/Homespun.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters",
		"Pixelated",
		"Retro",
		"VCR"
	]
},
{
	"name":"Hooked Up 101",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Hooked Up 101.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"3D",
		"Angular",
		"Partial Symbol Set",
		"Plain",
		"Slanted"
	]
},
{
	"name":"Horsepower",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Horsepower.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Narrow Chars",
		"Partial Symbol Set"
	]
},
{
	"name":"HOUSEPIPES",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/HOUSEPIPES.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/HOUSEPIPES Italic.ttf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"No Lowercase",
		"Partial Symbol Set",
		"Pixelated",
		"Retro"
	]
},
{
	"name":"Hurontario",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Hurontario.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Handwriting",
		"Narrow Chars",
		"Partial Symbol Set",
		"Script",
		"Slanted",
		"Thin Stroke"
	]
},
{
	"name":"Husky Stash",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Husky Stash.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Ornamental",
		"Partial Symbol Set",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"Hyde",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Jekyll and Hyde - by Aenigma Fonts/Hyde.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distressed",
		"Halloween",
		"Thick Stroke"
	]
},
{
	"name":"Hydrogen Type",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Hydrogen Type.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Dotted",
		"Monospace",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Hyperion Sunset",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Hyperion Sunset - by Aenigma Fonts/Hyperion Sunset.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Plain",
		"Wide Chars"
	]
},
{
	"name":"ICBM SS-20",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/ICBM SS-20.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters",
		"No Lowercase",
		"Partial Symbol Set",
		"Stencil",
		"Thick Stroke"
	]
},
{
	"name":"ICBM SS-25",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/ICBM SS-25.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters",
		"Decay",
		"No Lowercase",
		"Partial Symbol Set",
		"Stencil",
		"Thick Stroke"
	]
},
{
	"name":"Icicle Country 2",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Icicle Country 2.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"3D",
		"Angular",
		"Partial Symbol Set",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"Impossibilium",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Impossibilium - by Aenigma Fonts/Impossibilium.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Formal",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Induction",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Induction.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"No Lowercase",
		"Ornamental",
		"Wide Chars"
	]
},
{
	"name":"Inertia",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Inertia - by Aenigma Fonts/Inertia.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distorted",
		"Hard To Read",
		"No Symbols",
		"Ornamental"
	]
},
{
	"name":"Inevitable",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Inevitable - by Aenigma Fonts/Inevitable.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Calligraphy",
		"Distorted",
		"Narrow Chars",
		"Partial Symbol Set"
	]
},
{
	"name":"Injekuta",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Injekuta Light.otf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Injekuta.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Injekuta Bold.otf",
			"style":"normal",
			"weight":"700"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Injekuta Black.otf",
			"style":"normal",
			"weight":"900"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"No Lowercase",
		"Ornamental"
	]
},
{
	"name":"Ink Swipes",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Ink Swipes - by Aenigma Fonts/Ink Swipes.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Decay",
		"Ornamental",
		"Striped",
		"Thick Stroke"
	]
},
{
	"name":"Ink Tank",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Ink Tank - by Aenigma Fonts/Ink Tank.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Decay",
		"Negative Space",
		"Outline",
		"Partial Symbol Set"
	]
},
{
	"name":"Instant Tunes",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Instant Tunes.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Curvy Letters",
		"Fangs",
		"Leading Left Hook",
		"No Lowercase",
		"Ornamental"
	]
},
{
	"name":"Interplanetary Crap",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Interplanetary Crap.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Decay",
		"Stencil"
	]
},
{
	"name":"Intersect",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Intersect - by Aenigma Fonts/Intersect.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=5][vbox][size font='intersect' size=350]\u00c8[/size][/vbox][vbox][size font='intersect' size=350]\u00c9[/size][/vbox][vbox][size font='intersect' size=350]\u00ca[/size][/vbox][vbox][size font='intersect' size=350]\u00cb[/size][/vbox][vbox][size font='intersect' size=350]\u00cc[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Multi-Stroke",
		"Rounded Chars"
	]
},
{
	"name":"Intersect Closed",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Intersect - by Aenigma Fonts/Intersect Closed.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=5][vbox][size font='intersect closed' size=350]\u00c8[/size][/vbox][vbox][size font='intersect closed' size=350]\u00c9[/size][/vbox][vbox][size font='intersect closed' size=350]\u00ca[/size][/vbox][vbox][size font='intersect closed' size=350]\u00cb[/size][/vbox][vbox][size font='intersect closed' size=350]\u00cc[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Multi-Stroke",
		"Negative Space",
		"Outline",
		"Rounded Chars"
	]
},
{
	"name":"Intersect Open",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Intersect - by Aenigma Fonts/Intersect Open.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=5][vbox][size font='intersect open' size=350]\u00c8[/size][/vbox][vbox][size font='intersect open' size=350]\u00c9[/size][/vbox][vbox][size font='intersect open' size=350]\u00ca[/size][/vbox][vbox][size font='intersect open' size=350]\u00cb[/size][/vbox][vbox][size font='intersect open' size=350]\u00cc[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Multi-Stroke",
		"Negative Space",
		"Outline",
		"Rounded Chars"
	]
},
{
	"name":"Iomanoid",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Iomanoid.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Bevel",
		"Chiseled",
		"Composite Font",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Iomanoid - Back",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Iomanoid - Back.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Chiseled",
		"Composite Font",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Iomanoid - Front",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Iomanoid - Front.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Chiseled",
		"Composite Font",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Iomanoid - Shine",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Iomanoid - Shine.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Chiseled",
		"Composite Font",
		"Hard To Read",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Iron Sans",
	"authors":[
		"A J Paglia"
	],
	"variants":[
		{
			"path":"_A J Paglia Fonts/Free Fonts/Iron Sans.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Irritate",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Irritate - by Aenigma Fonts/Irritate.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Decay",
		"Texture"
	]
},
{
	"name":"It Lives In The Swamp",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/It Lives In The Swamp - by Aenigma Fonts/It Lives In The Swamp.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Dripping",
		"Handwriting",
		"Negative Space",
		"Ornamental",
		"Outline"
	]
},
{
	"name":"Jagged",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Jagged - by Aenigma Fonts/Jagged.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distorted",
		"Negative Space",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Jandles",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Jandles.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Curvy Letters",
		"Handwriting",
		"Script",
		"Thin Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Janken",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Janken - by Aenigma Fonts/Janken.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Marker",
		"Rounded Chars",
		"Rounded Edges"
	]
},
{
	"name":"Jargon",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Jargon - by Aenigma Fonts/Jargon.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Calligraphy",
		"Plain"
	]
},
{
	"name":"Jasper",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Jasper - by Aenigma Fonts/Jasper.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Distorted",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Partial Symbol Set",
		"Shadow"
	]
},
{
	"name":"Jasper Solid",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Jasper - by Aenigma Fonts/Jasper Solid.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Distorted",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Jawbreaker",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Jawbreaker - by Aenigma Fonts/Jawbreaker.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=3][vbox][size font='jawbreaker' size=350]\u0153[/size][/vbox][vbox][size font='jawbreaker' size=350]\u0178[/size][/vbox][vbox][size font='jawbreaker' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Plain",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Jawbreaker Hard",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Jawbreaker - by Aenigma Fonts/Jawbreaker Hard.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=3][vbox][size font='jawbreaker hard' size=350]\u0153[/size][/vbox][vbox][size font='jawbreaker hard' size=350]\u0178[/size][/vbox][vbox][size font='jawbreaker hard' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Plain",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Jawbreaker Outline 1",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Jawbreaker - by Aenigma Fonts/Jawbreaker Outline 1.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=3][vbox][size font='jawbreaker outline 1' size=350]\u0153[/size][/vbox][vbox][size font='jawbreaker outline 1' size=350]\u0178[/size][/vbox][vbox][size font='jawbreaker outline 1' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Negative Space",
		"Outline",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Jawbreaker Outline 2",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Jawbreaker - by Aenigma Fonts/Jawbreaker Outline 2.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=3][vbox][size font='jawbreaker outline 2' size=350]\u0153[/size][/vbox][vbox][size font='jawbreaker outline 2' size=350]\u0178[/size][/vbox][vbox][size font='jawbreaker outline 2' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Negative Space",
		"Outline",
		"Rounded Edges",
		"Shadow",
		"Thick Stroke"
	]
},
{
	"name":"Jekyll",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Jekyll and Hyde - by Aenigma Fonts/Jekyll.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Distressed",
		"Halloween"
	]
},
{
	"name":"Jena Gotisch",
	"authors":[
		"Peter Wiegel"
	],
	"variants":[
		{
			"path":"Jena Gotisch - by Peter Wiegel/Jena Gotisch.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Elegant",
		"Gothic",
		"Hard To Read",
		"Ornamental"
	]
},
{
	"name":"Jeopardize",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Jeopardize - by Aenigma Fonts/Jeopardize.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Aenigma Fonts/Jeopardize - by Aenigma Fonts/Jeopardize Thick.ttf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Calligraphy"
	]
},
{
	"name":"Jigsaw Trouserdrop",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Jigsaw Trouserdrop.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Decay",
		"No Lowercase",
		"Ornamental",
		"Puzzle",
		"Thick Stroke"
	]
},
{
	"name":"Jingopop",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Jingopop.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"No Uppercase",
		"Partial Symbol Set",
		"Playful",
		"Script",
		"Uneven Chars"
	]
},
{
	"name":"Johnny Mac Scrawl",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Johnny Mac Scrawl - by Aenigma Fonts/Johnny Mac Scrawl.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Handwriting",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"Jolt Of Caffeine",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Jolt Of Caffeine - by Aenigma Fonts/Jolt Of Caffeine.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Distressed",
		"Negative Space",
		"Outline"
	]
},
{
	"name":"Joy Circuit",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Joy Circuit.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Outline",
		"Thick Stroke"
	]
},
{
	"name":"Jupiter Crash",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Jupiter Crash - by Aenigma Fonts/Jupiter Crash.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Pixelated",
		"Retro"
	]
},
{
	"name":"Kaliber Round",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Kaliber - by Aenigma Fonts/Kaliber Round.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Partial Symbol Set",
		"Rounded Chars",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"Kaliber Solid",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Kaliber - by Aenigma Fonts/Kaliber Solid.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Partial Symbol Set",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"Kaliber Xtreme",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Kaliber - by Aenigma Fonts/Kaliber Xtreme.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Alien",
		"Partial Symbol Set",
		"Playful",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"Karma - Future",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Karma - Future.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Pixelated",
		"Retro",
		"Shadow",
		"VCR"
	]
},
{
	"name":"Karma - Suture",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Karma - Suture.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Pixelated",
		"Retro",
		"VCR"
	]
},
{
	"name":"Karmatic Arcade",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Karmatic Arcade.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"No Lowercase",
		"Offset",
		"Partial Symbol Set",
		"Pixelated",
		"Retro",
		"Shadow"
	]
},
{
	"name":"Katalyst Active",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Katalyst - by Aenigma Fonts/Katalyst Active.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Partial Symbol Set",
		"Texture",
		"Thick Stroke"
	]
},
{
	"name":"Katalyst Inactive",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Katalyst - by Aenigma Fonts/Katalyst Inactive.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Ornamental",
		"Partial Symbol Set",
		"Texture",
		"Thick Stroke"
	]
},
{
	"name":"Kaushan Script",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Kaushan Script - by Impallari Type/Kaushan Script.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Calligraphy",
		"Handwriting",
		"Script",
		"Slanted"
	]
},
{
	"name":"Key Ridge",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Key Ridge - by Aenigma Fonts/Key Ridge.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=6][vbox][size font='key ridge' size=350]\u00b5[/size][/vbox][vbox][size font='key ridge' size=350]\u00b6[/size][/vbox][vbox][size font='key ridge' size=350]\u00b7[/size][/vbox][vbox][size font='key ridge' size=350]\u017e[/size][/vbox][vbox][size font='key ridge' size=350]\u00b9[/size][/vbox][vbox][size font='key ridge' size=350]\u00ba[/size][/vbox][vbox][size font='key ridge' size=350]\u00bb[/size][/vbox][vbox][size font='key ridge' size=350]\u0152[/size][/vbox][vbox][size font='key ridge' size=350]\u0153[/size][/vbox][vbox][size font='key ridge' size=350]\u0178[/size][/vbox][vbox][size font='key ridge' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Angular",
		"Uneven Chars"
	]
},
{
	"name":"Key Ridge Alt",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Key Ridge - by Aenigma Fonts/Key Ridge Alt.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=5][vbox][size font='key ridge alt' size=350]\u00bb[/size][/vbox][vbox][size font='key ridge alt' size=350]\u0152[/size][/vbox][vbox][size font='key ridge alt' size=350]\u0153[/size][/vbox][vbox][size font='key ridge alt' size=350]\u0178[/size][/vbox][vbox][size font='key ridge alt' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Angular",
		"Uneven Chars"
	]
},
{
	"name":"Keypunch029",
	"authors":[
		"Stewart C. Russell"
	],
	"variants":[
		{
			"path":"Keypunch029 - by Stewart C. Russell/Keypunch029.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"Keypunch029 - by Stewart C. Russell/Keypunch029 Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"Keypunch029 - by Stewart C. Russell/Keypunch029 Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"Keypunch029 - by Stewart C. Russell/Keypunch029 Bold Italic.otf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Dotted",
		"Monospace",
		"No Lowercase"
	]
},
{
	"name":"Kickflip",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Kickflip - by Aenigma Fonts/Kickflip.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra lowercase characters:[br][grid cols=8][vbox][size font='kickflip' size=350]\u008d[/size][/vbox][vbox][size font='kickflip' size=350]\u008e[/size][/vbox][vbox][size font='kickflip' size=350]\u008f[/size][/vbox][vbox][size font='kickflip' size=350]\u0090[/size][/vbox][vbox][size font='kickflip' size=350]\u009d[/size][/vbox][vbox][size font='kickflip' size=350]\u009e[/size][/vbox][vbox][size font='kickflip' size=350]\u00a1[/size][/vbox][vbox][size font='kickflip' size=350]\u00a2[/size][/vbox][vbox][size font='kickflip' size=350]\u00a3[/size][/vbox][vbox][size font='kickflip' size=350]\u00a5[/size][/vbox][vbox][size font='kickflip' size=350]\u0160[/size][/vbox][vbox][size font='kickflip' size=350]\u00a7[/size][/vbox][vbox][size font='kickflip' size=350]\u0161[/size][/vbox][vbox][size font='kickflip' size=350]\u00a9[/size][/vbox][vbox][size font='kickflip' size=350]\u00aa[/size][/vbox][vbox][size font='kickflip' size=350]\u00ab[/size][/vbox][vbox][size font='kickflip' size=350]\u00ac[/size][/vbox][vbox][size font='kickflip' size=350]\u00b5[/size][/vbox][vbox][size font='kickflip' size=350]\u00b6[/size][/vbox][vbox][size font='kickflip' size=350]\u00b7[/size][/vbox][vbox][size font='kickflip' size=350]\u00b9[/size][/vbox][vbox][size font='kickflip' size=350]\u00ba[/size][/vbox][vbox][size font='kickflip' size=350]\u00bb[/size][/vbox][/grid][br][br]Extra uppercase characters:[br][grid cols=6][vbox][size font='kickflip' size=350]\u00ae[/size][/vbox][vbox][size font='kickflip' size=350]\u00af[/size][/vbox][vbox][size font='kickflip' size=350]\u00b0[/size][/vbox][vbox][size font='kickflip' size=350]\u00b1[/size][/vbox][vbox][size font='kickflip' size=350]\u00b2[/size][/vbox][vbox][size font='kickflip' size=350]\u00b3[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distressed",
		"No Lowercase",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Kicking Limos",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Kicking Limos.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Hard To Read",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Slanted"
	]
},
{
	"name":"King Arthur Special",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/King Arthur Special.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Partial Symbol Set",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"King Richard",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/King Richard.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/King Richard Italic.otf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Formal",
		"Leading Left Hook",
		"Plain"
	]
},
{
	"name":"Kinkaid",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Kinkaid - by Aenigma Fonts/Kinkaid.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Calligraphy",
		"Curvy Letters",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Kirby No Kira Kizzu",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Kirby No Kira Kizzu - by Aenigma Fonts/Kirby No Kira Kizzu.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Handwriting",
		"Marker",
		"Partial Symbol Set",
		"Playful",
		"Rounded Edges",
		"Uneven Chars"
	]
},
{
	"name":"Knot",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Knot - by Aenigma Fonts/Knot.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=4][vbox][size font='knot' size=350]\u00c8[/size][/vbox][vbox][size font='knot' size=350]\u00c9[/size][/vbox][vbox][size font='knot' size=350]\u00ca[/size][/vbox][vbox][size font='knot' size=350]\u00cb[/size][/vbox][/grid][br][br]Extra knots:[br][grid cols=5][vbox][size font='knot' size=350]\u00cc[/size][/vbox][vbox][size font='knot' size=350]\u00cd[/size][/vbox][vbox][size font='knot' size=350]\u00ce[/size][/vbox][vbox][size font='knot' size=350]\u00cf[/size][/vbox][vbox][size font='knot' size=350]\u00d0[/size][/vbox][vbox][size font='knot' size=350]\u00d1[/size][/vbox][vbox][size font='knot' size=350]\u00d2[/size][/vbox][vbox][size font='knot' size=350]\u00d3[/size][/vbox][vbox][size font='knot' size=350]\u00d4[/size][/vbox][vbox][size font='knot' size=350]\u00d5[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Hard To Read",
		"Loops",
		"Ornamental"
	]
},
{
	"name":"Know Your Product",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Know Your Product.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Distorted",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Stencil",
		"Thick Stroke"
	]
},
{
	"name":"Konector",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Konector - by Aengima Fonts/Konector.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Broken Letters",
		"Dotted",
		"Ornamental",
		"Thick Stroke"
	]
},
{
	"name":"Konector Eerie",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Konector - by Aengima Fonts/Konector Eerie.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Broken Letters",
		"Dotted",
		"Ornamental",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Konector Outline 1",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Konector - by Aengima Fonts/Konector Outline 1.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Broken Letters",
		"Dotted",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Thick Stroke"
	]
},
{
	"name":"Konector Outline 2",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Konector - by Aengima Fonts/Konector Outline 2.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Broken Letters",
		"Dotted",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Thick Stroke"
	]
},
{
	"name":"Kremlin",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Kremlin.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Hard To Read",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Soviet"
	]
},
{
	"name":"Kurvature",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Kurvature - by Aenigma Fonts/Kurvature.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Rounded Chars",
		"Rounded Edges",
		"Slanted"
	]
},
{
	"name":"Kwokwi",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Kwokwi.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Curvy Letters",
		"Ornamental",
		"Playful",
		"Shadow"
	]
},
{
	"name":"Kwokwi - Back",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Kwokwi - Back.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Curvy Letters",
		"Hard To Read",
		"Negative Space",
		"Playful",
		"Shadow"
	]
},
{
	"name":"Kwokwi - Front",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Kwokwi - Front.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Curvy Letters",
		"Plain",
		"Playful"
	]
},
{
	"name":"Kwokwi - Stripes",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Kwokwi - Stripes.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Curvy Letters",
		"Decay",
		"Playful",
		"Striped"
	]
},
{
	"name":"Lakeshore",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Lakeshore - by Aenigma Fonts/Lakeshore.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Plain",
		"Rounded Edges"
	]
},
{
	"name":"Lamebrain",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Lamebrain - by Aenigma Fonts/Lamebrain.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Marker",
		"Playful",
		"Rounded Edges",
		"Uneven Chars"
	]
},
{
	"name":"Larkspur",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Larkspur - by Aenigma Fonts/Larkspur.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Partial Symbol Set",
		"Wide Chars"
	]
},
{
	"name":"Lesser Concern",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Lesser Concern.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Partial Symbol Set",
		"Plain"
	]
},
{
	"name":"Lesser Concern - Shadow",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Lesser Concern - Shadow.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Negative Space",
		"Partial Symbol Set",
		"Plain",
		"Shadow"
	]
},
{
	"name":"Let's Eat",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Let's Eat.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Decay",
		"Narrow Chars",
		"Partial Symbol Set"
	]
},
{
	"name":"Lethargic",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Lethargic - by Aenigma Fonts/Lethargic.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decay",
		"Distorted",
		"Partial Symbol Set",
		"Wide Chars"
	]
},
{
	"name":"Letter Set - C",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Letter Set - C.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Snow",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Letter Set - A",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Letter Set - A.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Snow",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Letter Set - B",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Letter Set - B.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"3D",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Outline",
		"Partial Symbol Set",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Lewinsky",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Lewinsky.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Hard To Read",
		"Multi-Stroke",
		"No Uppercase",
		"Ornamental",
		"Partial Symbol Set",
		"Slanted",
		"Wide Chars"
	]
},
{
	"name":"Libre Barcode 39",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"Libre Barcode - by Lasse Fister/Libre Barcode 39.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"Libre Barcode - by Lasse Fister/Libre Barcode 39.ttf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"instructions":[
		"Go to this link for full instructions on how to use this font, and a free generator:[br][br][color fg=39f]https://graphicore.github.io/librebarcode/documentation/code39.html[/color]"
	],
	"license":"SIL Open Font License",
	"tags":[
		"Symbols Only",
		"Bar Code"
	]
},
{
	"name":"Libre Barcode 39 Extended",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"Libre Barcode - by Lasse Fister/Libre Barcode 39 Extended.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"Libre Barcode - by Lasse Fister/Libre Barcode 39 Extended.ttf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"instructions":[
		"Go to this link for full instructions on how to use this font, and a free generator:[br][br][color fg=39f]https://graphicore.github.io/librebarcode/documentation/code39.html[/color]"
	],
	"license":"SIL Open Font License",
	"tags":[
		"Symbols Only",
		"Bar Code"
	]
},
{
	"name":"Libre Barcode 39 Extended Text",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"Libre Barcode - by Lasse Fister/Libre Barcode 39 Extended Text.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"Libre Barcode - by Lasse Fister/Libre Barcode 39 Extended Text.ttf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"instructions":[
		"Go to this link for full instructions on how to use this font, and a free generator:[br][br][color fg=39f]https://graphicore.github.io/librebarcode/documentation/code39.html[/color]"
	],
	"license":"SIL Open Font License",
	"tags":[
		"Symbols Only",
		"Bar Code"
	]
},
{
	"name":"Libre Barcode 39 Text",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"Libre Barcode - by Lasse Fister/Libre Barcode 39 Text.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"Libre Barcode - by Lasse Fister/Libre Barcode 39 Text.ttf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"instructions":[
		"Go to this link for full instructions on how to use this font, and a free generator:[br][br][color fg=39f]https://graphicore.github.io/librebarcode/documentation/code39.html[/color]"
	],
	"license":"SIL Open Font License",
	"tags":[
		"Symbols Only",
		"Bar Code"
	]
},
{
	"name":"Libre Barcode 128",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"Libre Barcode - by Lasse Fister/Libre Barcode 128.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"Libre Barcode - by Lasse Fister/Libre Barcode 128.ttf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"instructions":[
		"Go to this link for full instructions on how to use this font, and a free generator:[br][br][color fg=39f]https://graphicore.github.io/librebarcode/documentation/code128.html[/color]"
	],
	"license":"SIL Open Font License",
	"tags":[
		"Symbols Only",
		"Bar Code"
	]
},
{
	"name":"Libre Barcode 128 Text",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"Libre Barcode - by Lasse Fister/Libre Barcode 128 Text.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"Libre Barcode - by Lasse Fister/Libre Barcode 128 Text.ttf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"instructions":[
		"Go to this link for full instructions on how to use this font, and a free generator:[br][br][color fg=39f]https://graphicore.github.io/librebarcode/documentation/code128.html[/color]"
	],
	"license":"SIL Open Font License",
	"tags":[
		"Symbols Only",
		"Bar Code"
	]
},
{
	"name":"Libre Barcode EAN13 Text",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"Libre Barcode - by Lasse Fister/Libre Barcode EAN13 Text.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"Libre Barcode - by Lasse Fister/Libre Barcode EAN13 Text.ttf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"instructions":[
		"Go to this link for full instructions on how to use this font, and a free generator:[br][br][color fg=39f]https://graphicore.github.io/librebarcode/documentation/ean13[/color]"
	],
	"license":"SIL Open Font License",
	"tags":[
		"Symbols Only",
		"Bar Code"
	]
},
{
	"name":"Libre Baskerville",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Libre Baskerville - by Impallari Type/Libre Baskerville.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Impallari Type/Libre Baskerville - by Impallari Type/Libre Baskerville Italic.ttf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_Impallari Type/Libre Baskerville - by Impallari Type/Libre Baskerville Bold.ttf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Libre Bodoni",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Libre Bodoni - by Impallari Type, Rodrigo Fuenzalida/static/Libre Bodoni.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Libre Bodoni - by Impallari Type, Rodrigo Fuenzalida/static/Libre Bodoni Italic.ttf",
			"style":"italic",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Libre Bodoni - by Impallari Type, Rodrigo Fuenzalida/static/Libre Bodoni Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Libre Bodoni - by Impallari Type, Rodrigo Fuenzalida/static/Libre Bodoni Medium Italic.ttf",
			"style":"italic",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Libre Bodoni - by Impallari Type, Rodrigo Fuenzalida/static/Libre Bodoni Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Libre Bodoni - by Impallari Type, Rodrigo Fuenzalida/static/Libre Bodoni Semi Bold Italic.ttf",
			"style":"italic",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Libre Bodoni - by Impallari Type, Rodrigo Fuenzalida/static/Libre Bodoni Bold.ttf",
			"style":"normal",
			"weight":"700"
		},
		{
			"path":"_Impallari Type/Libre Bodoni - by Impallari Type, Rodrigo Fuenzalida/static/Libre Bodoni Bold Italic.ttf",
			"style":"italic",
			"weight":"700"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Libre Caslon Display",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Libre Caslon Display - by Impallary Type/Libre Caslon Display.ttf",
			"style":"normal",
			"weight":"400"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Libre Caslon Text",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Libre Caslon Text - by Impallary Type/Libre Caslon Text.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Libre Caslon Text - by Impallary Type/Libre Caslon Text Italic.ttf",
			"style":"italic",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Libre Caslon Text - by Impallary Type/Libre Caslon Text Bold.ttf",
			"style":"normal",
			"weight":"700"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Libre Franklin",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Libre Franklin - by Impallari Type/static/Libre Franklin Thin.ttf",
			"style":"normal",
			"weight":"100"
		},
		{
			"path":"_Impallari Type/Libre Franklin - by Impallari Type/static/Libre Franklin Thin Italic.ttf",
			"style":"italic",
			"weight":"100"
		},
		{
			"path":"_Impallari Type/Libre Franklin - by Impallari Type/static/Libre Franklin Extra Light.ttf",
			"style":"normal",
			"weight":"200"
		},
		{
			"path":"_Impallari Type/Libre Franklin - by Impallari Type/static/Libre Franklin Extra Light Italic.ttf",
			"style":"italic",
			"weight":"200"
		},
		{
			"path":"_Impallari Type/Libre Franklin - by Impallari Type/static/Libre Franklin Light.ttf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"_Impallari Type/Libre Franklin - by Impallari Type/static/Libre Franklin Light Italic.ttf",
			"style":"italic",
			"weight":"300"
		},
		{
			"path":"_Impallari Type/Libre Franklin - by Impallari Type/static/Libre Franklin.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Libre Franklin - by Impallari Type/static/Libre Franklin Italic.ttf",
			"style":"italic",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Libre Franklin - by Impallari Type/static/Libre Franklin Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Libre Franklin - by Impallari Type/static/Libre Franklin Medium Italic.ttf",
			"style":"italic",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Libre Franklin - by Impallari Type/static/Libre Franklin Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Libre Franklin - by Impallari Type/static/Libre Franklin Semi Bold Italic.ttf",
			"style":"italic",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Libre Franklin - by Impallari Type/static/Libre Franklin Bold.ttf",
			"style":"normal",
			"weight":"700"
		},
		{
			"path":"_Impallari Type/Libre Franklin - by Impallari Type/static/Libre Franklin Bold Italic.ttf",
			"style":"italic",
			"weight":"700"
		},
		{
			"path":"_Impallari Type/Libre Franklin - by Impallari Type/static/Libre Franklin Extra Bold.ttf",
			"style":"normal",
			"weight":"800"
		},
		{
			"path":"_Impallari Type/Libre Franklin - by Impallari Type/static/Libre Franklin Extra Bold Italic.ttf",
			"style":"italic",
			"weight":"800"
		},
		{
			"path":"_Impallari Type/Libre Franklin - by Impallari Type/static/Libre Franklin Black.ttf",
			"style":"normal",
			"weight":"900"
		},
		{
			"path":"_Impallari Type/Libre Franklin - by Impallari Type/static/Libre Franklin Black Italic.ttf",
			"style":"italic",
			"weight":"900"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Licorice Strings",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Licorice Strings - by Aenigma Fonts/Licorice Strings.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Ornamental",
		"Swirl"
	]
},
{
	"name":"Life Savers",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Life Savers - by Impallari Type/Life Savers.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Life Savers - by Impallari Type/Life Savers Bold.ttf",
			"style":"normal",
			"weight":"700"
		},
		{
			"path":"_Impallari Type/Life Savers - by Impallari Type/Life Savers Extra Bold.ttf",
			"style":"normal",
			"weight":"800"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Plain",
		"Typewriter",
		"Uneven Chars"
	]
},
{
	"name":"Lights Out",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Lights Out - by Aenigma Fonts/Lights Out.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Broken Letters",
		"Decay",
		"Formal",
		"Handwriting",
		"Uneven Chars"
	]
},
{
	"name":"Lilliput Steps",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Lilliput Steps.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Monospace",
		"Partial Symbol Set",
		"Pixelated",
		"Retro"
	]
},
{
	"name":"Line Dings",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Line Dings - by Aenigma Fonts/Line Dings.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"End caps:[br][grid cols=6][vbox][color fg=f74]`[/color][size font='line dings' size=350]`[/size][/vbox][vbox][color fg=f74]~[/color][size font='line dings' size=350]~[/size][/vbox][vbox][color fg=f74]1[/color][size font='line dings' size=350]1[/size][/vbox][vbox][color fg=f74]![/color][size font='line dings' size=350]![/size][/vbox][vbox][color fg=f74]2[/color][size font='line dings' size=350]2[/size][/vbox][vbox][color fg=f74]@[/color][size font='line dings' size=350]@[/size][/vbox][vbox][color fg=f74]3[/color][size font='line dings' size=350]3[/size][/vbox][vbox][color fg=f74]#[/color][size font='line dings' size=350]#[/size][/vbox][vbox][color fg=f74]4[/color][size font='line dings' size=350]4[/size][/vbox][vbox][color fg=f74]$[/color][size font='line dings' size=350]$[/size][/vbox][vbox][color fg=f74]5[/color][size font='line dings' size=350]5[/size][/vbox][vbox][color fg=f74]%[/color][size font='line dings' size=350]%[/size][/vbox][vbox][color fg=f74]6[/color][size font='line dings' size=350]6[/size][/vbox][vbox][color fg=f74]^[/color][size font='line dings' size=350]^[/size][/vbox][vbox][color fg=f74]7[/color][size font='line dings' size=350]7[/size][/vbox][vbox][color fg=f74]&[/color][size font='line dings' size=350]&[/size][/vbox][vbox][color fg=f74]8[/color][size font='line dings' size=350]8[/size][/vbox][vbox][color fg=f74]*[/color][size font='line dings' size=350]*[/size][/vbox][vbox][color fg=f74]9[/color][size font='line dings' size=350]9[/size][/vbox][vbox][color fg=f74]([/color][size font='line dings' size=350]([/size][/vbox][vbox][color fg=f74]0[/color][size font='line dings' size=350]0[/size][/vbox][vbox][color fg=f74])[/color][size font='line dings' size=350])[/size][/vbox][vbox][color fg=f74]-[/color][size font='line dings' size=350]-[/size][/vbox][vbox][color fg=f74]_[/color][size font='line dings' size=350]_[/size][/vbox][vbox][color fg=f74]=[/color][size font='line dings' size=350]=[/size][/vbox][vbox][color fg=f74]+[/color][size font='line dings' size=350]+[/size][/vbox][vbox][color fg=f74]\\[/color][size font='line dings' size=350]\\[/size][/vbox][vbox][color fg=f74]|[/color][size font='line dings' size=350]|[/size][/vbox][vbox][color fg=f74];[/color][size font='line dings' size=350];[/size][/vbox][vbox][color fg=f74]:[/color][size font='line dings' size=350]:[/size][/vbox][/grid][br][br]Line pieces:[br][grid cols=6][vbox][color fg=f74]A[/color][size font='line dings' size=350]A[/size][/vbox][vbox][color fg=f74]a[/color][size font='line dings' size=350]a[/size][/vbox][vbox][color fg=f74]B[/color][size font='line dings' size=350]B[/size][/vbox][vbox][color fg=f74]b[/color][size font='line dings' size=350]b[/size][/vbox][vbox][color fg=f74]C[/color][size font='line dings' size=350]C[/size][/vbox][vbox][color fg=f74]c[/color][size font='line dings' size=350]c[/size][/vbox][vbox][color fg=f74]D[/color][size font='line dings' size=350]D[/size][/vbox][vbox][color fg=f74]d[/color][size font='line dings' size=350]d[/size][/vbox][vbox][color fg=f74]E[/color][size font='line dings' size=350]E[/size][/vbox][vbox][color fg=f74]e[/color][size font='line dings' size=350]e[/size][/vbox][vbox][color fg=f74]F[/color][size font='line dings' size=350]F[/size][/vbox][vbox][color fg=f74]f[/color][size font='line dings' size=350]f[/size][/vbox][vbox][color fg=f74]G[/color][size font='line dings' size=350]G[/size][/vbox][vbox][color fg=f74]g[/color][size font='line dings' size=350]g[/size][/vbox][vbox][color fg=f74]H[/color][size font='line dings' size=350]H[/size][/vbox][vbox][color fg=f74]h[/color][size font='line dings' size=350]h[/size][/vbox][vbox][color fg=f74]I[/color][size font='line dings' size=350]I[/size][/vbox][vbox][color fg=f74]i[/color][size font='line dings' size=350]i[/size][/vbox][vbox][color fg=f74]J[/color][size font='line dings' size=350]J[/size][/vbox][vbox][color fg=f74]j[/color][size font='line dings' size=350]j[/size][/vbox][vbox][color fg=f74]K[/color][size font='line dings' size=350]K[/size][/vbox][vbox][color fg=f74]k[/color][size font='line dings' size=350]k[/size][/vbox][vbox][color fg=f74]L[/color][size font='line dings' size=350]L[/size][/vbox][vbox][color fg=f74]l[/color][size font='line dings' size=350]l[/size][/vbox][vbox][color fg=f74]M[/color][size font='line dings' size=350]M[/size][/vbox][vbox][color fg=f74]m[/color][size font='line dings' size=350]m[/size][/vbox][vbox][color fg=f74]N[/color][size font='line dings' size=350]N[/size][/vbox][vbox][color fg=f74]n[/color][size font='line dings' size=350]n[/size][/vbox][vbox][color fg=f74]O[/color][size font='line dings' size=350]O[/size][/vbox][vbox][color fg=f74]o[/color][size font='line dings' size=350]o[/size][/vbox][vbox][color fg=f74]P[/color][size font='line dings' size=350]P[/size][/vbox][vbox][color fg=f74]p[/color][size font='line dings' size=350]p[/size][/vbox][vbox][color fg=f74]Q[/color][size font='line dings' size=350]Q[/size][/vbox][vbox][color fg=f74]q[/color][size font='line dings' size=350]q[/size][/vbox][vbox][color fg=f74]R[/color][size font='line dings' size=350]R[/size][/vbox][vbox][color fg=f74]r[/color][size font='line dings' size=350]r[/size][/vbox][vbox][color fg=f74]S[/color][size font='line dings' size=350]S[/size][/vbox][vbox][color fg=f74]s[/color][size font='line dings' size=350]s[/size][/vbox][vbox][color fg=f74]T[/color][size font='line dings' size=350]T[/size][/vbox][vbox][color fg=f74]t[/color][size font='line dings' size=350]t[/size][/vbox][vbox][color fg=f74]U[/color][size font='line dings' size=350]U[/size][/vbox][vbox][color fg=f74]u[/color][size font='line dings' size=350]u[/size][/vbox][vbox][color fg=f74]V[/color][size font='line dings' size=350]V[/size][/vbox][vbox][color fg=f74]v[/color][size font='line dings' size=350]v[/size][/vbox][vbox][color fg=f74]W[/color][size font='line dings' size=350]W[/size][/vbox][vbox][color fg=f74]w[/color][size font='line dings' size=350]w[/size][/vbox][vbox][color fg=f74]X[/color][size font='line dings' size=350]X[/size][/vbox][vbox][color fg=f74]x[/color][size font='line dings' size=350]x[/size][/vbox][vbox][color fg=f74]Y[/color][size font='line dings' size=350]Y[/size][/vbox][vbox][color fg=f74]y[/color][size font='line dings' size=350]y[/size][/vbox][vbox][color fg=f74]Z[/color][size font='line dings' size=350]Z[/size][/vbox][vbox][color fg=f74]z[/color][size font='line dings' size=350]z[/size][/vbox][vbox][color fg=f74]{[/color][size font='line dings' size=350]{[/size][/vbox][vbox][color fg=f74]}[/color][size font='line dings' size=350]}[/size][/vbox][vbox][color fg=f74][[/color][size font='line dings' size=350][[/size][/vbox][vbox][color fg=f74]][/color][size font='line dings' size=350]][/size][/vbox][vbox][color fg=f74]\"[/color][size font='line dings' size=350]\"[/size][/vbox][vbox][color fg=f74]'[/color][size font='line dings' size=350]'[/size][/vbox][vbox][color fg=f74]<[/color][size font='line dings' size=350]<[/size][/vbox][vbox][color fg=f74],[/color][size font='line dings' size=350],[/size][/vbox][vbox][color fg=f74]>[/color][size font='line dings' size=350]>[/size][/vbox][vbox][color fg=f74].[/color][size font='line dings' size=350].[/size][/vbox][vbox][color fg=f74]?[/color][size font='line dings' size=350]?[/size][/vbox][vbox][color fg=f74]/[/color][size font='line dings' size=350]/[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Symbols Only",
		"Monospace"
	]
},
{
	"name":"Living by Numbers",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Living by Numbers.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Partial Symbol Set",
		"Playful",
		"Slanted",
		"Uneven Chars"
	]
},
{
	"name":"Lobster",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Lobster - by Impallari Type, Cyreal/Lobster.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Broken Letters",
		"Calligraphy",
		"Curvy Letters",
		"Leading Left Hook",
		"Script",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"Lobster Two",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Lobster Two - by Impallari Type/Lobster Two.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Impallari Type/Lobster Two - by Impallari Type/Lobster Two Italic.ttf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_Impallari Type/Lobster Two - by Impallari Type/Lobster Two Bold.ttf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"_Impallari Type/Lobster Two - by Impallari Type/Lobster Two Bold Italic.ttf",
			"style":"italic",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Broken Letters",
		"Calligraphy",
		"Curvy Letters",
		"Leading Left Hook",
		"Script"
	]
},
{
	"name":"Lockergnome",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Lockergnome.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Playful",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Loki Cola",
	"authors":[
		"Utopia Fonts"
	],
	"variants":[
		{
			"path":"Loki Cola - by Utopia Fonts/Loki Cola.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Elegant",
		"Leading Left Hook",
		"Logo",
		"Ornamental",
		"Partial Symbol Set",
		"Script",
		"Slanted"
	]
},
{
	"name":"Loopy",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Loopy - by Aenigma Fonts/Loopy.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"[size size=130]To use:[/size][br][center][ul][li]Start by using an open parenthesis [color fg=f74]([/color] for the opening end cap.[/li][li]For each character, type a loop character first (Listed below), then[br]the character to insert into the loop ([color fg=f74]A[/color]-[color fg=f74]Z[/color], [color fg=f74]0[/color]-[color fg=f74]9[/color], and symbols [color fg=f74]! ? @ &[/color]).[/li][li]To add a blank loop, use a hyphen [color fg=f74]-[/color] .[/li][li]To add a space without a loop, use an underscore [color fg=f74]_[/color] .[/li][li]Use a closing parenthesis [color fg=f74])[/color] for the closing end cap.[/li][/ul][/center][br][br]Loop characters:[br][grid cols=4][vbox][color fg=f74]-[/color][size font='loopy' size=225]-[/size][/vbox][vbox][color fg=f74]<[/color][size font='loopy' size=225]<[/size][/vbox][vbox][color fg=f74]>[/color][size font='loopy' size=225]>[/size][/vbox][vbox][color fg=f74]+[/color][size font='loopy' size=225]+[/size][/vbox][/grid][br][br]End caps:[br][grid cols=2][vbox][color fg=f74]([/color][size font='loopy' size=225]([/size][/vbox][vbox][color fg=f74])[/color][size font='loopy' size=225])[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Loops",
		"Negative Space",
		"Ornamental",
		"Outline"
	]
},
{
	"name":"Lowdown",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Lowdown - by Aenigma Fonts/Lowdown.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=5][vbox][size font='lowdown' size=350]\u00c8[/size][/vbox][vbox][size font='lowdown' size=350]\u00c9[/size][/vbox][vbox][size font='lowdown' size=350]\u00ca[/size][/vbox][vbox][size font='lowdown' size=350]\u00cb[/size][/vbox][vbox][size font='lowdown' size=350]\u00cc[/size][/vbox][vbox][size font='lowdown' size=350]\u00cd[/size][/vbox][vbox][size font='lowdown' size=350]\u00ce[/size][/vbox][vbox][size font='lowdown' size=350]\u00cf[/size][/vbox][vbox][size font='lowdown' size=350]\u00d0[/size][/vbox][vbox][size font='lowdown' size=350]\u00d1[/size][/vbox][vbox][size font='lowdown' size=350]\u00d2[/size][/vbox][vbox][size font='lowdown' size=350]\u00d3[/size][/vbox][vbox][size font='lowdown' size=350]\u00d4[/size][/vbox][vbox][size font='lowdown' size=350]\u00d5[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Handwriting",
		"Rounded Edges",
		"Script"
	]
},
{
	"name":"Lucid Type A",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Lucid Type - by Aenigma Fonts/Lucid Type A.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Plain",
		"Rounded Edges"
	]
},
{
	"name":"Lucid Type A Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Lucid Type - by Aenigma Fonts/Lucid Type A Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Negative Space",
		"Outline",
		"Plain",
		"Rounded Edges"
	]
},
{
	"name":"Lucid Type B",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Lucid Type - by Aenigma Fonts/Lucid Type B.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Narrow Chars",
		"Plain",
		"Rounded Edges"
	]
},
{
	"name":"Lucid Type B Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Lucid Type - by Aenigma Fonts/Lucid Type B Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Narrow Chars",
		"Negative Space",
		"Outline",
		"Plain",
		"Rounded Edges"
	]
},
{
	"name":"Lucky Ape",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Lucky Ape.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Decorated",
		"Hard To Read",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Slot Machine"
	]
},
{
	"name":"Lunasol",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Lunasol.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Broken Letters",
		"Composite Font",
		"Multi-Stroke",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Lunasol - Aurora",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Lunasol - Aurora.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Broken Letters",
		"Composite Font",
		"Multi-Stroke",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Outline",
		"Partial Symbol Set"
	]
},
{
	"name":"Lunasol - Eclipse",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Lunasol - Eclipse.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Composite Font",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Lunasol - Sequence",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Lunasol - Sequence.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Broken Letters",
		"Composite Font",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Lyneous",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Lyneous - by Aenigma Fonts/Lyneous.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Angular",
		"Broken Letters",
		"Ornamental",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"Lyneous Linear",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Lyneous - by Aenigma Fonts/Lyneous Linear.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Angular",
		"Block Shaped",
		"Broken Letters",
		"Multi-Stroke",
		"Ornamental"
	]
},
{
	"name":"LYNX",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/LYNX - by Aenigma Fonts/LYNX.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Dotted",
		"Hard To Read",
		"Loops",
		"Negative Space",
		"Ornamental"
	]
},
{
	"name":"Macropsia",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Macropsia - by Aenigma Fonts/Macropsia.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Partial Symbol Set",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Mad's Scrawl",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Mad's Scrawl - by Aenigma Fonts/Mad's Scrawl.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Handwriting",
		"Playful",
		"Rounded Edges",
		"Uneven Chars"
	]
},
{
	"name":"Mage 1999",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Mage 1999.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Ornamental",
		"Partial Symbol Set",
		"Pixelated",
		"Retro",
		"Thick Stroke"
	]
},
{
	"name":"Mai Tai",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Mai Tai.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Narrow Chars",
		"Partial Symbol Set",
		"Rounded Chars",
		"Uneven Chars"
	]
},
{
	"name":"Major Snafu",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Major Snafu.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"No Lowercase",
		"Partial Symbol Set",
		"Stencil",
		"Thick Stroke"
	]
},
{
	"name":"Malache Crunch",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Malache Crunch.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Dotted",
		"No Lowercase",
		"Ornamental",
		"Rounded Chars",
		"Sequins"
	]
},
{
	"name":"Mango",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Mango.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Composite Font",
		"Curvy Letters",
		"Negative Space",
		"Outline",
		"Partial Symbol Set",
		"Playful",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Mango - Fill",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Mango - Fill.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Composite Font",
		"Curvy Letters",
		"Partial Symbol Set",
		"Playful",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Mango - Scribble",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Mango - Scribble.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Composite Font",
		"Curvy Letters",
		"Decay",
		"Distorted",
		"Partial Symbol Set",
		"Playful",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Map Of You",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Map Of You.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Alien",
		"Broken Letters",
		"Decorated",
		"No Lowercase",
		"Partial Symbol Set",
		"Rounded Chars"
	]
},
{
	"name":"Maritime Flags",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Maritime Flags.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Symbols Only",
		"Flags",
		"Monospace"
	]
},
{
	"name":"Marquee Moon",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Marquee Moon.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Multi-Stroke",
		"Narrow Chars",
		"No Lowercase",
		"Ornamental"
	]
},
{
	"name":"Massive Retaliation",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Massive Retaliation.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"No Lowercase",
		"Partial Symbol Set",
		"Rounded Chars",
		"Thick Stroke"
	]
},
{
	"name":"Material Design Icons",
	"authors":[
		"Google"
	],
	"variants":[
		{
			"path":"Material Design Icons - by Google/Material Design Icons Round.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Apache License",
	"tags":[
		"Symbols Only",
		"Monospace"
	]
},
{
	"name":"Maxine Script",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Maxine Script.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Handwriting",
		"Marker",
		"Partial Symbol Set",
		"Script",
		"Uneven Chars"
	]
},
{
	"name":"Memetica",
	"authors":[
		"Rodolfo Santos"
	],
	"variants":[
		{
			"path":"Memetica - by Rodolfo Santos/Memetica.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Symbols Only",
		"Faces",
		"Meme"
	]
},
{
	"name":"Merriweather Sans",
	"authors":[
		"Sorkin Type"
	],
	"variants":[
		{
			"path":"Merriweather Sans - by Sorkin Type/static/Merriweather Sans Light.ttf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"Merriweather Sans - by Sorkin Type/static/Merriweather Sans Light Italic.ttf",
			"style":"italic",
			"weight":"300"
		},
		{
			"path":"Merriweather Sans - by Sorkin Type/static/Merriweather Sans.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"Merriweather Sans - by Sorkin Type/static/Merriweather Sans Italic.ttf",
			"style":"italic",
			"weight":"400"
		},
		{
			"path":"Merriweather Sans - by Sorkin Type/static/Merriweather Sans Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"Merriweather Sans - by Sorkin Type/static/Merriweather Sans Medium Italic.ttf",
			"style":"italic",
			"weight":"500"
		},
		{
			"path":"Merriweather Sans - by Sorkin Type/static/Merriweather Sans Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"Merriweather Sans - by Sorkin Type/static/Merriweather Sans Semi Bold Italic.ttf",
			"style":"italic",
			"weight":"600"
		},
		{
			"path":"Merriweather Sans - by Sorkin Type/static/Merriweather Sans Bold.ttf",
			"style":"normal",
			"weight":"700"
		},
		{
			"path":"Merriweather Sans - by Sorkin Type/static/Merriweather Sans Bold Italic.ttf",
			"style":"italic",
			"weight":"700"
		},
		{
			"path":"Merriweather Sans - by Sorkin Type/static/Merriweather Sans Extra Bold.ttf",
			"style":"normal",
			"weight":"800"
		},
		{
			"path":"Merriweather Sans - by Sorkin Type/static/Merriweather Sans Extra Bold Italic.ttf",
			"style":"italic",
			"weight":"800"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Mighty Mighty Friars",
	"authors":[
		"A J Paglia"
	],
	"variants":[
		{
			"path":"_A J Paglia Fonts/Free Fonts/Mighty Mighty Friars.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"No Lowercase",
		"Partial Symbol Set",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"Milonga",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Milonga - by Impallari Type/Milonga.ttf",
			"style":"normal",
			"weight":"400"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Broken Letters",
		"Curvy Letters",
		"Fangs",
		"Leading Left Hook"
	]
},
{
	"name":"Miltonian",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Miltonian - by Impallari Type/Miltonian.ttf",
			"style":"normal",
			"weight":"400"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Playful",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Miltonian Tattoo",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Miltonian Tattoo - by Impallari Type/Miltonian Tattoo.ttf",
			"style":"normal",
			"weight":"400"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Ornamental",
		"Playful",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Mincer",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Mincer - by Aenigma Fonts/Mincer.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Gothic",
		"Negative Space",
		"Ornamental",
		"Outline"
	]
},
{
	"name":"Mini Kaliber Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Mini Kaliber - by Aenigma Fonts/Mini Kaliber Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Negative Space",
		"Pixelated",
		"Retro",
		"Thick Stroke"
	]
},
{
	"name":"Mini Kaliber Solid",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Mini Kaliber - by Aenigma Fonts/Mini Kaliber Solid.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Pixelated",
		"Retro",
		"Thick Stroke"
	]
},
{
	"name":"Minya",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Minya.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Handwriting",
		"Plain",
		"Playful",
		"Typewriter",
		"Uneven Chars"
	]
},
{
	"name":"Mishmash",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Mishmash - by Aenigma Fonts/Mishmash.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Ornamental",
		"Plain",
		"Rounded Chars"
	]
},
{
	"name":"Mishmash 4x4i",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Mishmash - by Aenigma Fonts/Mishmash 4x4i.ttf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Broken Letters",
		"No Lowercase",
		"Ornamental",
		"Playful"
	]
},
{
	"name":"Mishmash 4x4o",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Mishmash - by Aenigma Fonts/Mishmash 4x4o.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Broken Letters",
		"Decorated",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Playful"
	]
},
{
	"name":"Mishmash ALT1",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Mishmash - by Aenigma Fonts/Mishmash ALT1.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"No Lowercase",
		"Ornamental",
		"Playful"
	]
},
{
	"name":"Mishmash ALT2",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Mishmash - by Aenigma Fonts/Mishmash ALT2.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"No Lowercase",
		"Ornamental",
		"Playful"
	]
},
{
	"name":"Mishmash Fuse",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Mishmash - by Aenigma Fonts/Mishmash Fuse.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Negative Space",
		"Offset",
		"Ornamental",
		"Plain",
		"Rounded Chars"
	]
},
{
	"name":"Misirlou",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Misirlou.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Hard To Read",
		"No Uppercase",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Misirlou - Day",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Misirlou - Day.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Hard To Read",
		"Negative Space",
		"No Uppercase",
		"Offset",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Mississauga",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Mississauga.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Broken Letters",
		"Formal",
		"Narrow Chars",
		"Partial Symbol Set"
	]
},
{
	"name":"Mister Firley",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Mister Firley.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Partial Symbol Set",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Mlurmlry",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Mlurmlry.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Decay",
		"Multi-Stroke",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Partial Symbol Set"
	]
},
{
	"name":"Mob Concrete",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Mob Concrete.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Decay",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Mobilize",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Mobilize - by Aenigma Fonts/Mobilize.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Playful",
		"Rounded Edges",
		"Uneven Chars"
	]
},
{
	"name":"Model Worker",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Model Worker.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Decay",
		"Distressed",
		"Halloween",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Modern Pictograms",
	"authors":[
		"John Caserta"
	],
	"variants":[
		{
			"path":"Modern Pictograms - by John Caserta/Modern Pictograms.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Symbols Only"
	]
},
{
	"name":"Moja",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Moja.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Frame",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Texture"
	]
},
{
	"name":"Moja C",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Moja C.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only",
		"Composite Font",
		"Frame"
	]
},
{
	"name":"Moja D",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Moja D.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Frame",
		"Hard To Read",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Texture"
	]
},
{
	"name":"Moja A",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Moja A.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only",
		"Composite Font",
		"Frame"
	]
},
{
	"name":"Moja B",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Moja B.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only",
		"Composite Font",
		"Frame"
	]
},
{
	"name":"Moja E",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Moja E.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Formal",
		"No Lowercase",
		"Partial Symbol Set",
		"Plain"
	]
},
{
	"name":"Mold Papa",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Mold Papa.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Distressed",
		"Narrow Chars",
		"Partial Symbol Set",
		"Playful",
		"Thick Stroke"
	]
},
{
	"name":"Monkey Phonics",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Monkey Phonics - by Aenigma Fonts/Monkey Phonics.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Rounded Edges",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Moronic Misfire",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Moronic Misfire - by Aenigma Fonts/Moronic Misfire.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Block Shaped",
		"Partial Symbol Set",
		"Rounded Edges"
	]
},
{
	"name":"Motorcade",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Motorcade.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"3D",
		"Hard To Read",
		"Negative Space",
		"No Lowercase",
		"Offset",
		"Ornamental",
		"Partial Symbol Set",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"Movieboard",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Movieboard.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Negative Space",
		"No Lowercase",
		"No Symbols",
		"Ornamental"
	]
},
{
	"name":"Mysterons",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Mysterons - by Aenigma Fonts/Mysterons.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=5][vbox][size font='mysterons' size=350]\u00c8[/size][/vbox][vbox][size font='mysterons' size=350]\u00c9[/size][/vbox][vbox][size font='mysterons' size=350]\u00ca[/size][/vbox][vbox][size font='mysterons' size=350]\u00cb[/size][/vbox][vbox][size font='mysterons' size=350]\u00cc[/size][/vbox][vbox][size font='mysterons' size=350]\u00cd[/size][/vbox][vbox][size font='mysterons' size=350]\u00ce[/size][/vbox][vbox][size font='mysterons' size=350]\u00cf[/size][/vbox][vbox][size font='mysterons' size=350]\u00d0[/size][/vbox][vbox][size font='mysterons' size=350]\u00d1[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Rounded Chars",
		"Uneven Chars"
	]
},
{
	"name":"Naftalene",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Naftalene.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Narrow Chars",
		"Ornamental",
		"Partial Symbol Set",
		"Uneven Chars"
	]
},
{
	"name":"Nails",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Nails.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Nails",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Nanosecond Thick",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Nanosecond - by Aenigma Fonts/Nanosecond Thick.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Nanosecond Thin",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Nanosecond - by Aenigma Fonts/Nanosecond Thin.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Rounded Edges"
	]
},
{
	"name":"Nanosecond Wide",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Nanosecond - by Aenigma Fonts/Nanosecond Wide.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Rounded Edges",
		"Wide Chars"
	]
},
{
	"name":"Nasal",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Nasal.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Broken Letters",
		"No Lowercase",
		"Partial Symbol Set",
		"Rounded Chars",
		"Thick Stroke"
	]
},
{
	"name":"Naughts",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Naughts - by Aenigma Fonts/Naughts.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Bones",
		"Partial Symbol Set",
		"Rounded Chars",
		"Rounded Edges"
	]
},
{
	"name":"Neural",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Neural - by Aenigma Fonts/Neural.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Rounded Edges",
		"Slanted"
	]
},
{
	"name":"Neural Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Neural - by Aenigma Fonts/Neural Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Outline",
		"Plain",
		"Rounded Edges",
		"Slanted"
	]
},
{
	"name":"Neurochrome",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Neurochrome.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"3D",
		"Block Shaped",
		"Negative Space",
		"Ornamental",
		"Partial Symbol Set",
		"Rounded Chars",
		"Slanted",
		"Wide Chars"
	]
},
{
	"name":"New Brilliant",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/New Brilliant.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Wide Chars"
	]
},
{
	"name":"New Rocker",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/New Rocker - by Impallari Type/New Rocker.ttf",
			"style":"normal",
			"weight":"400"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Angular",
		"Gothic",
		"Halloween",
		"Thick Stroke"
	]
},
{
	"name":"Night Court",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Night Court.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Partial Symbol Set",
		"Playful",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Nightporter",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Nightporter.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Distorted",
		"Halloween",
		"Playful"
	]
},
{
	"name":"No Clocks",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/No Clocks.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"No Uppercase",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Nominal",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Nominal - by Aenigma Fonts/Nominal.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=4][vbox][size font='nominal' size=350]\u00c8[/size][/vbox][vbox][size font='nominal' size=350]\u00c9[/size][/vbox][vbox][size font='nominal' size=350]\u00ca[/size][/vbox][vbox][size font='nominal' size=350]\u00cb[/size][/vbox][vbox][size font='nominal' size=350]\u00cc[/size][/vbox][vbox][size font='nominal' size=350]\u00cd[/size][/vbox][vbox][size font='nominal' size=350]\u00ce[/size][/vbox][vbox][size font='nominal' size=350]\u00cf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Script",
		"Thick Stroke"
	]
},
{
	"name":"Nostalgia",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Nostalgia - by Aenigma Fonts/Nostalgia.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Calligraphy",
		"Formal",
		"Thick Stroke"
	]
},
{
	"name":"Not Quite Right",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Not Quite Right - by Aenigma Fonts/Not Quite Right.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Distressed",
		"Partial Symbol Set",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Notice",
	"authors":[
		"otlab.ru"
	],
	"variants":[
		{
			"path":"Notice - by otlab.ru/Notice.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Symbols Only",
		"Monospace",
		"Negative Space"
	]
},
{
	"name":"Notice 2",
	"authors":[
		"otlab.ru"
	],
	"variants":[
		{
			"path":"Notice - by otlab.ru/Notice 2.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Symbols Only",
		"Monospace",
		"Negative Space"
	]
},
{
	"name":"Notice 3",
	"authors":[
		"otlab.ru"
	],
	"variants":[
		{
			"path":"Notice - by otlab.ru/Notice 3.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Symbols Only",
		"Monospace",
		"Negative Space"
	]
},
{
	"name":"Nucleus",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Nucleus - by Aenigma Fonts/Nucleus.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Symbols Only",
		"Monospace"
	]
},
{
	"name":"Nuku Nuku",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Nuku Nuku.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Anime",
		"Broken Letters",
		"Curvy Letters",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Numberpile",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Numberpile.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only",
		"Composite Font",
		"Monospace",
		"Negative Space"
	]
},
{
	"name":"Numberpile - Reversed",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Numberpile - Reversed.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only",
		"Composite Font",
		"Outline"
	]
},
{
	"name":"Numskull",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Numskull - by Aenigma Fonts/Numskull.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"3D",
		"Distressed",
		"Narrow Chars",
		"Partial Symbol Set",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"Nyamomobile",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Nyamomobile.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Anime",
		"Broken Letters",
		"No Uppercase",
		"Partial Symbol Set",
		"Slanted",
		"Stencil",
		"Thick Stroke"
	]
},
{
	"name":"Nymonak",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Nymonak - by Aenigma Fonts/Nymonak.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=6][vbox][size font='nymonak' size=350]\u00c8[/size][/vbox][vbox][size font='nymonak' size=350]\u00c9[/size][/vbox][vbox][size font='nymonak' size=350]\u00ca[/size][/vbox][vbox][size font='nymonak' size=350]\u00cb[/size][/vbox][vbox][size font='nymonak' size=350]\u00cc[/size][/vbox][vbox][size font='nymonak' size=350]\u00cd[/size][/vbox][vbox][size font='nymonak' size=350]\u00ce[/size][/vbox][vbox][size font='nymonak' size=350]\u00cf[/size][/vbox][vbox][size font='nymonak' size=350]\u00d0[/size][/vbox][vbox][size font='nymonak' size=350]\u00d1[/size][/vbox][vbox][size font='nymonak' size=350]\u00d2[/size][/vbox][vbox][size font='nymonak' size=350]\u00d3[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Bones",
		"Ornamental",
		"Rounded Edges"
	]
},
{
	"name":"Obloquy Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Obloquy - by Aenigma Fonts/Obloquy Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Outline",
		"Partial Symbol Set",
		"Rounded Chars",
		"Rounded Edges",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Obloquy Solid",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Obloquy - by Aenigma Fonts/Obloquy Solid.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Partial Symbol Set",
		"Rounded Chars",
		"Rounded Edges",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Obstacle",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Obstacle - by Aenigma Fonts/Obstacle.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Narrow Chars"
	]
},
{
	"name":"Obstacle Lines",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Obstacle - by Aenigma Fonts/Obstacle Lines.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Multi-Stroke",
		"Narrow Chars",
		"Ornamental"
	]
},
{
	"name":"Octoville",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Octoville.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Narrow Chars",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"Off Kilter L",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Off Kilter - by Aenigma Fonts/Off Kilter L.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Partial Symbol Set",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Off Kilter R",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Off Kilter - by Aenigma Fonts/Off Kilter R.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Partial Symbol Set",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Oil Crisis - A",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Oil Crisis - A.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only",
		"Cars"
	]
},
{
	"name":"Oil Crisis - B",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Oil Crisis - B.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only",
		"Cars"
	]
},
{
	"name":"OldStandard TT",
	"authors":[
		"Alexey Kryukov"
	],
	"variants":[
		{
			"path":"OldStandard TT - by Alexey Kryukov/OldStandard.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"OldStandard TT - by Alexey Kryukov/OldStandard Italic.ttf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"OldStandard TT - by Alexey Kryukov/OldStandard Bold.ttf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Oneworldonefuture",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Oneworldonefuture.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Oneworldonefuture Extra Bold.ttf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Narrow Chars",
		"No Lowercase",
		"Partial Symbol Set"
	]
},
{
	"name":"Open Sans",
	"authors":[
		"Steve Matteson"
	],
	"variants":[
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans/Open Sans Light.ttf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans/Open Sans Light Italic.ttf",
			"style":"italic",
			"weight":"300"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans/Open Sans.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans/Open Sans Italic.ttf",
			"style":"italic",
			"weight":"400"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans/Open Sans Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans/Open Sans Medium Italic.ttf",
			"style":"italic",
			"weight":"500"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans/Open Sans Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans/Open Sans Semi Bold Italic.ttf",
			"style":"italic",
			"weight":"600"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans/Open Sans Bold.ttf",
			"style":"normal",
			"weight":"700"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans/Open Sans Bold Italic.ttf",
			"style":"italic",
			"weight":"700"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans/Open Sans Extra Bold.ttf",
			"style":"normal",
			"weight":"800"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans/Open Sans Extra Bold Italic.ttf",
			"style":"italic",
			"weight":"800"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Open Sans Condensed",
	"authors":[
		"Steve Matteson"
	],
	"variants":[
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Condensed/Open Sans Condensed Light.ttf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Condensed/Open Sans Condensed Light Italic.ttf",
			"style":"italic",
			"weight":"300"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Condensed/Open Sans Condensed.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Condensed/Open Sans Condensed Italic.ttf",
			"style":"italic",
			"weight":"400"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Condensed/Open Sans Condensed Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Condensed/Open Sans Condensed Medium Italic.ttf",
			"style":"italic",
			"weight":"500"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Condensed/Open Sans Condensed Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Condensed/Open Sans Condensed Semi Bold Italic.ttf",
			"style":"italic",
			"weight":"600"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Condensed/Open Sans Condensed Bold.ttf",
			"style":"normal",
			"weight":"700"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Condensed/Open Sans Condensed Bold Italic.ttf",
			"style":"italic",
			"weight":"700"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Condensed/Open Sans Condensed Extra Bold.ttf",
			"style":"normal",
			"weight":"800"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Condensed/Open Sans Condensed Extra Bold Italic.ttf",
			"style":"italic",
			"weight":"800"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Narrow Chars",
		"Plain"
	]
},
{
	"name":"Open Sans Semi Condensed",
	"authors":[
		"Steve Matteson"
	],
	"variants":[
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Semi Condensed/Open Sans Semi Condensed Light.ttf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Semi Condensed/Open Sans Semi Condensed Light Italic.ttf",
			"style":"italic",
			"weight":"300"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Semi Condensed/Open Sans Semi Condensed.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Semi Condensed/Open Sans Semi Condensed Italic.ttf",
			"style":"italic",
			"weight":"400"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Semi Condensed/Open Sans Semi Condensed Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Semi Condensed/Open Sans Semi Condensed Medium Italic.ttf",
			"style":"italic",
			"weight":"500"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Semi Condensed/Open Sans Semi Condensed Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Semi Condensed/Open Sans Semi Condensed Semi Bold Italic.ttf",
			"style":"italic",
			"weight":"600"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Semi Condensed/Open Sans Semi Condensed Bold.ttf",
			"style":"normal",
			"weight":"700"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Semi Condensed/Open Sans Semi Condensed Bold Italic.ttf",
			"style":"italic",
			"weight":"700"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Semi Condensed/Open Sans Semi Condensed Extra Bold.ttf",
			"style":"normal",
			"weight":"800"
		},
		{
			"path":"Open Sans - by Steve Matteson/static/Open Sans Semi Condensed/Open Sans Semi Condensed Extra Bold Italic.ttf",
			"style":"italic",
			"weight":"800"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"OpenDyslexic",
	"authors":[
		"Abelardo Gonzalez"
	],
	"variants":[
		{
			"path":"OpenDyslexic - by Abelardo Gonzalez/OpenDyslexic.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"OpenDyslexic - by Abelardo Gonzalez/OpenDyslexic Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"OpenDyslexic - by Abelardo Gonzalez/OpenDyslexic Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"OpenDyslexic - by Abelardo Gonzalez/OpenDyslexic Bold Italic.otf",
			"style":"italic",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"OpenDyslexic Alta",
	"authors":[
		"Abelardo Gonzalez"
	],
	"variants":[
		{
			"path":"OpenDyslexic Alta - by Abelardo Gonzalez/OpenDyslexic Alta.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"OpenDyslexic Alta - by Abelardo Gonzalez/OpenDyslexic Alta Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"OpenDyslexic Alta - by Abelardo Gonzalez/OpenDyslexic Alta Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"OpenDyslexic Alta - by Abelardo Gonzalez/OpenDyslexic Alta Bold Italic.otf",
			"style":"italic",
			"weight":"bold"
		}
	],
	"license":"Bitstream License",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Playful"
	]
},
{
	"name":"Operational Amplifier",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Operational Amplifier.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters",
		"Narrow Chars",
		"Partial Symbol Set",
		"Slanted"
	]
},
{
	"name":"Opiated",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Opiated - by Aenigma Fonts/Opiated.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Orbicular",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Orbicular - by Aenigma Fonts/Orbicular.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Orbitron",
	"authors":[
		"Matt McInerney"
	],
	"variants":[
		{
			"path":"Orbitron - by Matt McInerney/Orbitron.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"Orbitron - by Matt McInerney/Orbitron Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"Orbitron - by Matt McInerney/Orbitron Bold.ttf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"Orbitron - by Matt McInerney/Orbitron Black.ttf",
			"style":"normal",
			"weight":"900"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Plain",
		"Wide Chars"
	]
},
{
	"name":"Osaka Sans Serif",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Osaka Sans Serif.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Anime",
		"Broken Letters",
		"No Lowercase",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Oswald",
	"authors":[
		"Cyreal",
		"Kalapi Gajjar",
		"Vernon Adams"
	],
	"variants":[
		{
			"path":"Oswald - by Vernon Adams, Kalapi Gajjar, Cyreal/static/Oswald Extra Light.ttf",
			"style":"normal",
			"weight":"200"
		},
		{
			"path":"Oswald - by Vernon Adams, Kalapi Gajjar, Cyreal/static/Oswald Light.ttf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"Oswald - by Vernon Adams, Kalapi Gajjar, Cyreal/static/Oswald.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"Oswald - by Vernon Adams, Kalapi Gajjar, Cyreal/static/Oswald Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"Oswald - by Vernon Adams, Kalapi Gajjar, Cyreal/static/Oswald Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"Oswald - by Vernon Adams, Kalapi Gajjar, Cyreal/static/Oswald Bold.ttf",
			"style":"normal",
			"weight":"700"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Narrow Chars",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"Outer Sider",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Outer Sider - by Aenigma Fonts/Outer Sider.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Outline",
		"Rounded Edges"
	]
},
{
	"name":"Outgunned",
	"authors":[
		"Robby Woodard"
	],
	"variants":[
		{
			"path":"Outgunned - by Robby Woodard/Outgunned.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Symbols Only",
		"Guns"
	]
},
{
	"name":"Outright",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Outright.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Hard To Read",
		"Leading Left Hook",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"Overhead",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Overhead - by Aenigma Fonts/Overhead.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distressed",
		"Narrow Chars",
		"Ornamental"
	]
},
{
	"name":"Overload",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Overload.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Overload - Burn",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Overload - Burn.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Outline",
		"Plain",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Pacifico",
	"authors":[
		"Vernon Adams"
	],
	"variants":[
		{
			"path":"Pacifico - by Vernon Adams/Pacifico.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Broken Letters",
		"Elegant",
		"Handwriting",
		"Script",
		"Thick Stroke"
	]
},
{
	"name":"Paint Boy",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Paint Boy.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Paintbrushes",
		"Partial Symbol Set"
	]
},
{
	"name":"Palms",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Palms.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Tree"
	]
},
{
	"name":"Pantspatrol",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Pantspatrol.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Ornamental",
		"Partial Symbol Set",
		"Striped",
		"Thick Stroke"
	]
},
{
	"name":"Peatloaf",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Peatloaf.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Decay",
		"Gothic",
		"Halloween",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Perfect Dark",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Perfect Dark - by Aenigma Fonts/Perfect Dark.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extenders:[br][grid cols=3][vbox][color fg=f72]![/color][size font='perfect dark' size=350] ! [/size][/vbox][vbox][color fg=f72]@[/color][size font='perfect dark' size=350]@[/size][/vbox][vbox][color fg=f72]#[/color][size font='perfect dark' size=350]#[/size][/vbox][vbox][color fg=f72]$[/color][size font='perfect dark' size=350]$[/size][/vbox][vbox][color fg=f72]%[/color][size font='perfect dark' size=350]%[/size][/vbox][vbox][color fg=f72]^[/color][size font='perfect dark' size=350]^[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Angular",
		"Broken Letters",
		"Logo",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Retro",
		"Thick Stroke"
	]
},
{
	"name":"Perlenkette",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Perlenkette.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Dotted",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Persuasion",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Persuasion - by Aenigma Fonts/Persuasion.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Playful",
		"Thick Stroke"
	]
},
{
	"name":"Petit Formal Script",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Petit Formal Script - by Impallari Type/Petit Formal Script.ttf",
			"style":"normal",
			"weight":"400"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Handwriting",
		"Script",
		"Slanted"
	]
},
{
	"name":"Phorfeit",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Phorfeit - by Aenigma Fonts/Phorfeit.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Aenigma Fonts/Phorfeit - by Aenigma Fonts/Phorfeit Slant.ttf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Rounded Edges",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Pincers",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Pincers - by Aenigma Fonts/Pincers.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Bones",
		"Broken Letters",
		"Distressed",
		"Halloween",
		"Ornamental"
	]
},
{
	"name":"Pindown",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Pindown - by Aenigma Fonts/Pindown.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"To make a dotted space, use the grave character [color size=150 fg=f74]`[/color] several times in a row.[br]Each grave character will make a vertical row of dots."
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Dotted",
		"Hard To Read",
		"Negative Space",
		"Offset",
		"Ornamental",
		"Rounded Chars"
	]
},
{
	"name":"Pindown X",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Pindown - by Aenigma Fonts/Pindown X.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Dotted",
		"Negative Space",
		"Offset",
		"Ornamental",
		"Rounded Chars"
	]
},
{
	"name":"Pindown X Plain",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Pindown - by Aenigma Fonts/Pindown X Plain.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Dotted",
		"Ornamental",
		"Rounded Chars"
	]
},
{
	"name":"Pindown Plain",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Pindown - by Aenigma Fonts/Pindown Plain.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"To make a dotted space, use the grave character [color size=150 fg=f74]`[/color] several times in a row.[br]Each grave character will make a vertical row of dots."
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Dotted",
		"Ornamental",
		"Rounded Chars"
	]
},
{
	"name":"Pixel Krud",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Pixel Krud - by Aenigma Fonts/Pixel Krud.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Distorted",
		"Ornamental",
		"Partial Symbol Set",
		"Pixelated"
	]
},
{
	"name":"Plain Cred 1978",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Plain Cred 1978.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"No Lowercase",
		"Partial Symbol Set",
		"Plain",
		"Thin Stroke"
	]
},
{
	"name":"Plasma Drip",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Plasma Drip - by Aenigma Fonts/Plasma Drip.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Dripping",
		"Halloween",
		"Ornamental",
		"Thick Stroke"
	]
},
{
	"name":"Plasma Drip Empty",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Plasma Drip - by Aenigma Fonts/Plasma Drip Empty.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Dripping",
		"Halloween",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Thick Stroke"
	]
},
{
	"name":"Plasmatic",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Plasmatic.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Rounded Edges"
	]
},
{
	"name":"Plastic Bag",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Plastic Bag.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Hard To Read",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Pneumatics",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Pneumatics - by Aenigma Fonts/Pneumatics.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=6][vbox][size font='pneumatics' size=350]\u00c0[/size][/vbox][vbox][size font='pneumatics' size=350]\u00c1[/size][/vbox][vbox][size font='pneumatics' size=350]\u00c2[/size][/vbox][vbox][size font='pneumatics' size=350]\u00c3[/size][/vbox][vbox][size font='pneumatics' size=350]\u00c4[/size][/vbox][vbox][size font='pneumatics' size=350]\u00c5[/size][/vbox][vbox][size font='pneumatics' size=350]\u00c6[/size][/vbox][vbox][size font='pneumatics' size=350]\u00c7[/size][/vbox][vbox][size font='pneumatics' size=350]\u00c8[/size][/vbox][vbox][size font='pneumatics' size=350]\u00c9[/size][/vbox][vbox][size font='pneumatics' size=350]\u00ca[/size][/vbox][vbox][size font='pneumatics' size=350]\u00cb[/size][/vbox][vbox][size font='pneumatics' size=350]\u00cc[/size][/vbox][vbox][size font='pneumatics' size=350]\u00cd[/size][/vbox][vbox][size font='pneumatics' size=350]\u00ce[/size][/vbox][vbox][size font='pneumatics' size=350]\u00cf[/size][/vbox][vbox][size font='pneumatics' size=350]\u00d0[/size][/vbox][vbox][size font='pneumatics' size=350]\u00d1[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Rounded Chars"
	]
},
{
	"name":"Pneumatics Tall",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Pneumatics - by Aenigma Fonts/Pneumatics Tall.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=6][vbox][size font='pneumatics tall' size=350]\u00c0[/size][/vbox][vbox][size font='pneumatics tall' size=350]\u00c1[/size][/vbox][vbox][size font='pneumatics tall' size=350]\u00c2[/size][/vbox][vbox][size font='pneumatics tall' size=350]\u00c3[/size][/vbox][vbox][size font='pneumatics tall' size=350]\u00c4[/size][/vbox][vbox][size font='pneumatics tall' size=350]\u00c5[/size][/vbox][vbox][size font='pneumatics tall' size=350]\u00c6[/size][/vbox][vbox][size font='pneumatics tall' size=350]\u00c7[/size][/vbox][vbox][size font='pneumatics tall' size=350]\u00c8[/size][/vbox][vbox][size font='pneumatics tall' size=350]\u00c9[/size][/vbox][vbox][size font='pneumatics tall' size=350]\u00ca[/size][/vbox][vbox][size font='pneumatics tall' size=350]\u00cb[/size][/vbox][vbox][size font='pneumatics tall' size=350]\u00cc[/size][/vbox][vbox][size font='pneumatics tall' size=350]\u00cd[/size][/vbox][vbox][size font='pneumatics tall' size=350]\u00ce[/size][/vbox][vbox][size font='pneumatics tall' size=350]\u00cf[/size][/vbox][vbox][size font='pneumatics tall' size=350]\u00d0[/size][/vbox][vbox][size font='pneumatics tall' size=350]\u00d1[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Calligraphy",
		"Narrow Chars",
		"Plain",
		"Rounded Chars"
	]
},
{
	"name":"Pneumatics Wide",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Pneumatics - by Aenigma Fonts/Pneumatics Wide.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=6][vbox][size font='pneumatics wide' size=350]\u00c0[/size][/vbox][vbox][size font='pneumatics wide' size=350]\u00c1[/size][/vbox][vbox][size font='pneumatics wide' size=350]\u00c2[/size][/vbox][vbox][size font='pneumatics wide' size=350]\u00c3[/size][/vbox][vbox][size font='pneumatics wide' size=350]\u00c4[/size][/vbox][vbox][size font='pneumatics wide' size=350]\u00c5[/size][/vbox][vbox][size font='pneumatics wide' size=350]\u00c6[/size][/vbox][vbox][size font='pneumatics wide' size=350]\u00c7[/size][/vbox][vbox][size font='pneumatics wide' size=350]\u00c8[/size][/vbox][vbox][size font='pneumatics wide' size=350]\u00c9[/size][/vbox][vbox][size font='pneumatics wide' size=350]\u00ca[/size][/vbox][vbox][size font='pneumatics wide' size=350]\u00cb[/size][/vbox][vbox][size font='pneumatics wide' size=350]\u00cc[/size][/vbox][vbox][size font='pneumatics wide' size=350]\u00cd[/size][/vbox][vbox][size font='pneumatics wide' size=350]\u00ce[/size][/vbox][vbox][size font='pneumatics wide' size=350]\u00cf[/size][/vbox][vbox][size font='pneumatics wide' size=350]\u00d0[/size][/vbox][vbox][size font='pneumatics wide' size=350]\u00d1[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Calligraphy",
		"Plain",
		"Rounded Chars",
		"Wide Chars"
	]
},
{
	"name":"Po Beef",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Po Beef.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Hard To Read",
		"No Uppercase",
		"Partial Symbol Set",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"Poke",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Poke.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Decorated",
		"Halloween",
		"No Lowercase",
		"Partial Symbol Set"
	]
},
{
	"name":"Pop Up Fontio",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Pop Up Fontio.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"3D",
		"Decorated",
		"Hard To Read",
		"Jack-in-the-box",
		"Negative Space",
		"No Lowercase",
		"Partial Symbol Set",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"Port Credit",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Port Credit.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Powderworks",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Powderworks - by Aenigma Fonts/Powderworks.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Logo",
		"No Symbols",
		"No Uppercase",
		"Rounded Edges",
		"Script"
	]
},
{
	"name":"President Gas",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/President Gas.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters",
		"Narrow Chars",
		"Stencil",
		"Thick Stroke"
	]
},
{
	"name":"Providence",
	"authors":[
		"A J Paglia"
	],
	"variants":[
		{
			"path":"_A J Paglia Fonts/Free Fonts/Providence.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Pseudo",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Pseudo - by Aenigma Fonts/Pseudo.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Hard To Read",
		"Ornamental",
		"Partial Symbol Set",
		"Striped",
		"Thick Stroke"
	]
},
{
	"name":"Public Sans",
	"authors":[
		"Dan Williams",
		"Impallari Type",
		"Rodrigo Fuenzalida",
		"USWDS"
	],
	"variants":[
		{
			"path":"_Impallari Type/Public Sans - by USWDS, Dan Williams, Impallari Type, Rodrigo Fuenzalida/static/Public Sans Thin.ttf",
			"style":"normal",
			"weight":"100"
		},
		{
			"path":"_Impallari Type/Public Sans - by USWDS, Dan Williams, Impallari Type, Rodrigo Fuenzalida/static/Public Sans Thin Italic.ttf",
			"style":"italic",
			"weight":"100"
		},
		{
			"path":"_Impallari Type/Public Sans - by USWDS, Dan Williams, Impallari Type, Rodrigo Fuenzalida/static/Public Sans Extra Light.ttf",
			"style":"normal",
			"weight":"200"
		},
		{
			"path":"_Impallari Type/Public Sans - by USWDS, Dan Williams, Impallari Type, Rodrigo Fuenzalida/static/Public Sans Extra Light Italic.ttf",
			"style":"italic",
			"weight":"200"
		},
		{
			"path":"_Impallari Type/Public Sans - by USWDS, Dan Williams, Impallari Type, Rodrigo Fuenzalida/static/Public Sans Light.ttf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"_Impallari Type/Public Sans - by USWDS, Dan Williams, Impallari Type, Rodrigo Fuenzalida/static/Public Sans Light Italic.ttf",
			"style":"italic",
			"weight":"300"
		},
		{
			"path":"_Impallari Type/Public Sans - by USWDS, Dan Williams, Impallari Type, Rodrigo Fuenzalida/static/Public Sans.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Public Sans - by USWDS, Dan Williams, Impallari Type, Rodrigo Fuenzalida/static/Public Sans Italic.ttf",
			"style":"italic",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Public Sans - by USWDS, Dan Williams, Impallari Type, Rodrigo Fuenzalida/static/Public Sans Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Public Sans - by USWDS, Dan Williams, Impallari Type, Rodrigo Fuenzalida/static/Public Sans Medium Italic.ttf",
			"style":"italic",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Public Sans - by USWDS, Dan Williams, Impallari Type, Rodrigo Fuenzalida/static/Public Sans Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Public Sans - by USWDS, Dan Williams, Impallari Type, Rodrigo Fuenzalida/static/Public Sans Semi Bold Italic.ttf",
			"style":"italic",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Public Sans - by USWDS, Dan Williams, Impallari Type, Rodrigo Fuenzalida/static/Public Sans Bold.ttf",
			"style":"normal",
			"weight":"700"
		},
		{
			"path":"_Impallari Type/Public Sans - by USWDS, Dan Williams, Impallari Type, Rodrigo Fuenzalida/static/Public Sans Bold Italic.ttf",
			"style":"italic",
			"weight":"700"
		},
		{
			"path":"_Impallari Type/Public Sans - by USWDS, Dan Williams, Impallari Type, Rodrigo Fuenzalida/static/Public Sans Extra Bold.ttf",
			"style":"normal",
			"weight":"800"
		},
		{
			"path":"_Impallari Type/Public Sans - by USWDS, Dan Williams, Impallari Type, Rodrigo Fuenzalida/static/Public Sans Extra Bold Italic.ttf",
			"style":"italic",
			"weight":"800"
		},
		{
			"path":"_Impallari Type/Public Sans - by USWDS, Dan Williams, Impallari Type, Rodrigo Fuenzalida/static/Public Sans Black.ttf",
			"style":"normal",
			"weight":"900"
		},
		{
			"path":"_Impallari Type/Public Sans - by USWDS, Dan Williams, Impallari Type, Rodrigo Fuenzalida/static/Public Sans Black Italic.ttf",
			"style":"italic",
			"weight":"900"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Pulse State",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Pulse State.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Broken Letters",
		"Distressed",
		"Halloween",
		"Hard To Read",
		"Ornamental"
	]
},
{
	"name":"Pyrite",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Pyrite.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Chiseled",
		"Narrow Chars",
		"No Lowercase",
		"Uneven Chars"
	]
},
{
	"name":"Qbicle 1",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Qbicle - by Aenigma Fonts/Qbicle 1.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"3D",
		"Blocks",
		"Hard To Read",
		"Negative Space",
		"No Lowercase",
		"Ornamental"
	]
},
{
	"name":"Qbicle 2",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Qbicle - by Aenigma Fonts/Qbicle 2.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"3D",
		"Blocks",
		"Hard To Read",
		"Negative Space",
		"No Lowercase",
		"Ornamental"
	]
},
{
	"name":"Qbicle 3",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Qbicle - by Aenigma Fonts/Qbicle 3.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"3D",
		"Blocks",
		"Hard To Read",
		"Negative Space",
		"No Lowercase",
		"Ornamental"
	]
},
{
	"name":"Qbicle 4",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Qbicle - by Aenigma Fonts/Qbicle 4.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"3D",
		"Blocks",
		"Hard To Read",
		"Negative Space",
		"No Lowercase",
		"Ornamental"
	]
},
{
	"name":"Qlumpy",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Qlumpy - by Aenigma Fonts/Qlumpy.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Qlumpy Shadow",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Qlumpy - by Aenigma Fonts/Qlumpy Shadow.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Offset",
		"Outline",
		"Rounded Edges",
		"Shadow",
		"Thick Stroke"
	]
},
{
	"name":"QTAbbie",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTAbbie.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Rounded Edges"
	]
},
{
	"name":"QTAgateType",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTAgateType.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTAgateType Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTAgateType Italic.otf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain",
		"Wide Chars"
	]
},
{
	"name":"QTAncientOlive",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTAncientOlive.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTAncientOlive Bold.otf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"QTAntiquePost",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTAntiquePost.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"QTArabian",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTArabian.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Calligraphy",
		"Elegant",
		"Wide Chars"
	]
},
{
	"name":"QTArnieB",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTArnieB.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Broken Letters",
		"Elegant",
		"Thick Stroke"
	]
},
{
	"name":"QTArtiston",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTArtiston.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Broken Letters",
		"Leading Left Hook",
		"Script",
		"Slanted"
	]
},
{
	"name":"QTAtchen",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTAtchen.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Thick Stroke",
		"Western"
	]
},
{
	"name":"QTAvanti",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTAvanti.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTAvanti Italic.otf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"QTBasker",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTBasker.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTBasker Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTBasker Bold.otf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"QTBeckman",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTBeckman.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Gothic",
		"Thick Stroke"
	]
},
{
	"name":"QTBengal",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTBengal.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTBengal Bold.otf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"QTBlackForest",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTBlackForest.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Elegant",
		"Formal",
		"Leading Left Hook"
	]
},
{
	"name":"QTBlimpo",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTBlimpo.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Broken Letters",
		"Rounded Chars",
		"Thick Stroke"
	]
},
{
	"name":"QTBodini",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTBodini.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTBodini Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTBodini Italic.otf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"QTBodiniPoster",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTBodiniPoster.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTBodiniPoster Italic.otf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"QTBookmann",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTBookmann.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTBookmann Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTBookmann Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTBookmann Bold Italic.otf",
			"style":"italic",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"QTBoulevard",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTBoulevard.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Broken Letters",
		"Elegant",
		"Leading Left Hook",
		"Script",
		"Slanted"
	]
},
{
	"name":"QTBrushStroke",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTBrushStroke.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Leading Left Hook",
		"Script",
		"Slanted"
	]
},
{
	"name":"QTCaligulaType",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTCaligulaType.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Leading Left Hook",
		"Plain"
	]
},
{
	"name":"QTCanaithType",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTCanaithType.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Calligraphy",
		"Elegant"
	]
},
{
	"name":"QTCascadeType",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTCascadeType.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Calligraphy",
		"Elegant",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"QTCaslan",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTCaslan.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTCaslan Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTCaslan Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTCaslan Bold Italic.otf",
			"style":"italic",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"QTCaslanOpen",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTCaslanOpen.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Negative Space",
		"Outline"
	]
},
{
	"name":"QTCasual",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTCasual.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Marker",
		"Plain",
		"Rounded Edges"
	]
},
{
	"name":"QTChanceryType",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTChanceryType.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTChanceryType Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTChanceryType Bold.otf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Script"
	]
},
{
	"name":"QTChicagoLand",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTChicagoLand.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"College",
		"Thick Stroke"
	]
},
{
	"name":"QTClayTablet",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTClayTablet.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters",
		"Halloween",
		"Hard To Read",
		"Ornamental"
	]
},
{
	"name":"QTCloisteredMonk",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTCloisteredMonk.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Elegant",
		"Gothic"
	]
},
{
	"name":"QTCoronation",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTCoronation.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Broken Letters",
		"Leading Left Hook",
		"Script",
		"Slanted"
	]
},
{
	"name":"QTDeuce",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTDeuce.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"No Lowercase",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"QTDingBits",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTDingBits.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Symbols Only",
		"Snow",
		"Stars"
	]
},
{
	"name":"QTDoghaus",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTDoghausLight.otf",
			"style":"normal",
			"weight":"200"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTDoghaus.otf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTDoghausHeavy.otf",
			"style":"normal",
			"weight":"700"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Plain",
		"Rounded Chars"
	]
},
{
	"name":"QTDublinIrish",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTDublinIrish.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Calligraphy",
		"Gothic"
	]
},
{
	"name":"QTEraType",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTEraType.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTEraType Bold.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Formal",
		"Plain"
	]
},
{
	"name":"QTEurotype",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTEurotype.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTEurotype Bold.otf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"QTFloraline",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTFloraline.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTFloraline Bold.otf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain",
		"Slanted"
	]
},
{
	"name":"QTFlorencia",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTFlorencia.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Script",
		"Thin Stroke"
	]
},
{
	"name":"QTFraktur",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTFraktur.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Elegant",
		"Gothic",
		"Thick Stroke"
	]
},
{
	"name":"QTFrank",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTFrank.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"QTFrankHeavy",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTFrankHeavy.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"QTFrizQuad",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTFrizQuad.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTFrizQuad Bold.otf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Broken Letters",
		"Calligraphy",
		"Formal"
	]
},
{
	"name":"QTFuture",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTFuture.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTFuture Italic.otf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"QTFuturePoster",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTFuturePoster.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Broken Letters",
		"Ornamental",
		"Stencil",
		"Thick Stroke"
	]
},
{
	"name":"QTGaromand",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTGaromand.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTGaromand Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTGaromand Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTGaromand Bold Italic.otf",
			"style":"italic",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"QTGhoulFace",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTGhoulFace.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Dripping",
		"Halloween",
		"Ornamental"
	]
},
{
	"name":"QTGraphLite",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTGraphLite.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"QTGraveure",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTGraveure.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTGraveure Bold.otf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Block Shaped",
		"No Lowercase",
		"Plain"
	]
},
{
	"name":"QTGreece",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTGreece.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"No Lowercase",
		"Playful",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"QTHandwriting",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTHandwriting.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Broken Letters",
		"Handwriting",
		"Script",
		"Slanted",
		"Thin Stroke"
	]
},
{
	"name":"QTHeidelbergType",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTHeidelbergType.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Calligraphy",
		"Elegant",
		"Gothic"
	]
},
{
	"name":"QTHelvet Black",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTHelvet Black.otf",
			"style":"normal",
			"weight":"900"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"QTHelvet Bold Outline",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTHelvet Bold Outline.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Negative Space",
		"Outline",
		"Plain"
	]
},
{
	"name":"QTHelvetCondensed",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTHelvetCondensedLight.otf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTHelvetCondensed.otf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTHelvetCondensed Black.otf",
			"style":"normal",
			"weight":"900"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"QTHoboken",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTHoboken.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Playful",
		"Rounded Chars"
	]
},
{
	"name":"QTHowardType",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTHowardType.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Thin Stroke"
	]
},
{
	"name":"QTHowardTypeFat",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTHowardTypeFat.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"QTImpromptu",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTImpromptu.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Playful",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"QTJupiter",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTJupiter.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Elegant",
		"No Lowercase",
		"Ornamental"
	]
},
{
	"name":"QTKooper",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTKooper.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTKooper Italic.otf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"QTKorrin",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTKorrin.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTKorrin Italic.otf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"QTKung Fu",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTKung Fu.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Calligraphy",
		"Elegant"
	]
},
{
	"name":"QTLautrecType",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTLautrecType.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Curvy Letters",
		"Halloween"
	]
},
{
	"name":"QTLetterGoth",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTLetterGoth.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTLetterGoth Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTLetterGoth Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTLetterGoth Bold Italic.otf",
			"style":"italic",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Monospace",
		"Plain"
	]
},
{
	"name":"QTLinoScroll",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTLinoScroll.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Elegant",
		"Gothic"
	]
},
{
	"name":"QTLinoStroke",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTLinoStroke.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Broken Letters",
		"Elegant",
		"Leading Left Hook",
		"Script"
	]
},
{
	"name":"QTLondonScroll",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTLondonScroll.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Elegant",
		"Gothic"
	]
},
{
	"name":"QTMagicMarker",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTMagicMarker.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Marker",
		"Rounded Edges",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"QTMerryScript",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTMerryScript.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Broken Letters",
		"Elegant",
		"Leading Left Hook",
		"Script"
	]
},
{
	"name":"QTMilitary",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTMilitary.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Block Shaped",
		"Broken Letters",
		"No Lowercase",
		"Stencil",
		"Thick Stroke"
	]
},
{
	"name":"QTOKCorral",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTOKCorral.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Narrow Chars",
		"Vintage",
		"Western"
	]
},
{
	"name":"QTOKCorral Condensed",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTOKCorral Condensed.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Narrow Chars",
		"Vintage",
		"Western"
	]
},
{
	"name":"QTOKCorral Extended",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTOKCorral Extended.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Vintage",
		"Western"
	]
},
{
	"name":"QTOldGoudy",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTOldGoudy.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTOldGoudy Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTOldGoudy Bold.otf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"QTOptimum",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTOptimum.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTOptimum Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTOptimum Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTOptimum Bold Italic.otf",
			"style":"italic",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"QTPalatine",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTPalatine.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTPalatine Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTPalatine Bold.otf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"QTPandora",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTPandora.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Decay",
		"Plain"
	]
},
{
	"name":"QTParisFrance",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTParisFrance.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Uneven Chars"
	]
},
{
	"name":"QTPeignoir",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTPeignoir Lite.otf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTPeignoir.otf",
			"style":"normal",
			"weight":"400"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Uneven Chars"
	]
},
{
	"name":"QTPiltdown",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTPiltdown.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Angular",
		"No Lowercase",
		"Playful"
	]
},
{
	"name":"QTPristine",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTPristine.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTPristine Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTPristine Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTPristine Bold Italic.otf",
			"style":"italic",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Typewriter"
	]
},
{
	"name":"QTRobotic2000",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTRobotic2000.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Broken Letters",
		"Rounded Edges"
	]
},
{
	"name":"QTSanDiego",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTSanDiego.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Marker",
		"Plain",
		"Uneven Chars"
	]
},
{
	"name":"QTSchoolCentury",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTSchoolCentury.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTSchoolCentury Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTSchoolCentury Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTSchoolCentury Bold Italic.otf",
			"style":"italic",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"QTSloganType",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTSloganType.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Script",
		"Uneven Chars"
	]
},
{
	"name":"QTSnowCaps",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTSnowCaps.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Snow"
	]
},
{
	"name":"QTStoryTimeCaps",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTStoryTimeCaps.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Decorated",
		"Formal",
		"Ornamental",
		"Plain"
	]
},
{
	"name":"QTTechTone",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTTechTone.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTTechTone Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTTechTone Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTTechTone Bold Italic.otf",
			"style":"italic",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Thin Stroke"
	]
},
{
	"name":"QTTheatre",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTTheatre.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"QTTimeOutline",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTTimeOutline.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Negative Space",
		"Outline",
		"Plain"
	]
},
{
	"name":"QTTumbleweed",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTTumbleweed.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Curvy Letters",
		"No Lowercase",
		"Ornamental",
		"Western"
	]
},
{
	"name":"QTUSA Uncial",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTUSA Uncial.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Calligraphy",
		"No Uppercase"
	]
},
{
	"name":"QTVagaRound",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTVagaRound.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTVagaRound Bold.otf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain",
		"Rounded Edges"
	]
},
{
	"name":"QTWeise",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTWeise.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTWeise Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"_QualiType - by John Colletti/opentype/QTWeise Italic.otf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"QTWestEnd",
	"authors":[
		"John Colletti"
	],
	"variants":[
		{
			"path":"_QualiType - by John Colletti/opentype/QTWestEnd.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"No Lowercase",
		"Rounded Edges",
		"Uneven Chars"
	]
},
{
	"name":"Quacksalver",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Quacksalver - by Aenigma Fonts/Quacksalver.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=7][vbox][size font='quacksalver' size=350]\u00c7[/size][/vbox][vbox][size font='quacksalver' size=350]\u00c8[/size][/vbox][vbox][size font='quacksalver' size=350]\u00c9[/size][/vbox][vbox][size font='quacksalver' size=350]\u00ca[/size][/vbox][vbox][size font='quacksalver' size=350]\u00cb[/size][/vbox][vbox][size font='quacksalver' size=350]\u00cc[/size][/vbox][vbox][size font='quacksalver' size=350]\u00cd[/size][/vbox][vbox][size font='quacksalver' size=350]\u00ce[/size][/vbox][vbox][size font='quacksalver' size=350]\u00cf[/size][/vbox][vbox][size font='quacksalver' size=350]\u00d0[/size][/vbox][vbox][size font='quacksalver' size=350]\u00d1[/size][/vbox][vbox][size font='quacksalver' size=350]\u00d2[/size][/vbox][vbox][size font='quacksalver' size=350]\u00d3[/size][/vbox][vbox][size font='quacksalver' size=350]\u00d4[/size][/vbox][vbox][size font='quacksalver' size=350]\u00d5[/size][/vbox][vbox][size font='quacksalver' size=350]\u00d6[/size][/vbox][vbox][size font='quacksalver' size=350]\u00d7[/size][/vbox][vbox][size font='quacksalver' size=350]\u00d8[/size][/vbox][vbox][size font='quacksalver' size=350]\u00d9[/size][/vbox][vbox][size font='quacksalver' size=350]\u00da[/size][/vbox][vbox][size font='quacksalver' size=350]\u00db[/size][/vbox][vbox][size font='quacksalver' size=350]\u00dc[/size][/vbox][vbox][size font='quacksalver' size=350]\u00dd[/size][/vbox][vbox][size font='quacksalver' size=350]\u00de[/size][/vbox][vbox][size font='quacksalver' size=350]\u00df[/size][/vbox][vbox][size font='quacksalver' size=350]\u00e0[/size][/vbox][vbox][size font='quacksalver' size=350]\u00e7[/size][/vbox][vbox][size font='quacksalver' size=350]\u00e8[/size][/vbox][vbox][size font='quacksalver' size=350]\u00e9[/size][/vbox][vbox][size font='quacksalver' size=350]\u00ea[/size][/vbox][vbox][size font='quacksalver' size=350]\u00eb[/size][/vbox][vbox][size font='quacksalver' size=350]\u00ec[/size][/vbox][vbox][size font='quacksalver' size=350]\u00ed[/size][/vbox][vbox][size font='quacksalver' size=350]\u00ee[/size][/vbox][vbox][size font='quacksalver' size=350]\u00ef[/size][/vbox][vbox][size font='quacksalver' size=350]\u00f0[/size][/vbox][vbox][size font='quacksalver' size=350]\u00f1[/size][/vbox][vbox][size font='quacksalver' size=350]\u00f2[/size][/vbox][vbox][size font='quacksalver' size=350]\u00f3[/size][/vbox][vbox][size font='quacksalver' size=350]\u00f4[/size][/vbox][vbox][size font='quacksalver' size=350]\u00f5[/size][/vbox][vbox][size font='quacksalver' size=350]\u00f6[/size][/vbox][vbox][size font='quacksalver' size=350]\u00f7[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Plain"
	]
},
{
	"name":"Quadrangle",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Quadrangle.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"Quadratic",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Quadratic - by Aenigma Fonts/Quadratic.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Curvy Letters",
		"Rounded Chars"
	]
},
{
	"name":"Quadratic Cal",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Quadratic - by Aenigma Fonts/Quadratic Cal.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Calligraphy",
		"Curvy Letters",
		"Rounded Chars"
	]
},
{
	"name":"Quandary",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Quandary - by Aenigma Fonts/Quandary.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Partial Symbol Set",
		"Rounded Chars",
		"Thick Stroke"
	]
},
{
	"name":"Quantum Flat",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Quantum - by Aenigma Fonts/Quantum Flat.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Quantum Flat Hollow",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Quantum - by Aenigma Fonts/Quantum Flat Hollow.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Partial Symbol Set",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Quantum Round",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Quantum - by Aenigma Fonts/Quantum Round.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Ornamental",
		"Partial Symbol Set",
		"Rounded Chars",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Quantum Round Hollow",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Quantum - by Aenigma Fonts/Quantum Round Hollow.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Partial Symbol Set",
		"Rounded Chars",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Quantum Taper",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Quantum - by Aenigma Fonts/Quantum Taper.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Broken Letters",
		"Ornamental",
		"Partial Symbol Set",
		"Rounded Chars",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Quarantine",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Quarantine - by Aenigma Fonts/Quarantine.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=8][vbox][size font='quarantine' size=350]\u00c8[/size][/vbox][vbox][size font='quarantine' size=350]\u00c9[/size][/vbox][vbox][size font='quarantine' size=350]\u00ca[/size][/vbox][vbox][size font='quarantine' size=350]\u00cb[/size][/vbox][vbox][size font='quarantine' size=350]\u00cc[/size][/vbox][vbox][size font='quarantine' size=350]\u00cd[/size][/vbox][vbox][size font='quarantine' size=350]\u00ce[/size][/vbox][vbox][size font='quarantine' size=350]\u00cf[/size][/vbox][vbox][size font='quarantine' size=350]\u00d0[/size][/vbox][vbox][size font='quarantine' size=350]\u00d1[/size][/vbox][vbox][size font='quarantine' size=350]\u00d2[/size][/vbox][vbox][size font='quarantine' size=350]\u00d3[/size][/vbox][vbox][size font='quarantine' size=350]\u00d4[/size][/vbox][vbox][size font='quarantine' size=350]\u00d5[/size][/vbox][vbox][size font='quarantine' size=350]\u00d6[/size][/vbox][vbox][size font='quarantine' size=350]\u00d7[/size][/vbox][vbox][size font='quarantine' size=350]\u00d8[/size][/vbox][vbox][size font='quarantine' size=350]\u00d9[/size][/vbox][vbox][size font='quarantine' size=350]\u00da[/size][/vbox][vbox][size font='quarantine' size=350]\u00db[/size][/vbox][vbox][size font='quarantine' size=350]\u00dc[/size][/vbox][vbox][size font='quarantine' size=350]\u00dd[/size][/vbox][vbox][size font='quarantine' size=350]\u00de[/size][/vbox][vbox][size font='quarantine' size=350]\u00df[/size][/vbox][vbox][size font='quarantine' size=350]\u00e0[/size][/vbox][vbox][size font='quarantine' size=350]\u00e1[/size][/vbox][vbox][size font='quarantine' size=350]\u00e2[/size][/vbox][vbox][size font='quarantine' size=350]\u00e3[/size][/vbox][vbox][size font='quarantine' size=350]\u00e4[/size][/vbox][vbox][size font='quarantine' size=350]\u00e5[/size][/vbox][vbox][size font='quarantine' size=350]\u00e7[/size][/vbox][vbox][size font='quarantine' size=350]\u00e8[/size][/vbox][vbox][size font='quarantine' size=350]\u00e9[/size][/vbox][vbox][size font='quarantine' size=350]\u00ea[/size][/vbox][vbox][size font='quarantine' size=350]\u00eb[/size][/vbox][vbox][size font='quarantine' size=350]\u00ec[/size][/vbox][vbox][size font='quarantine' size=350]\u00ed[/size][/vbox][vbox][size font='quarantine' size=350]\u00ee[/size][/vbox][vbox][size font='quarantine' size=350]\u00ef[/size][/vbox][vbox][size font='quarantine' size=350]\u00f0[/size][/vbox][vbox][size font='quarantine' size=350]\u00f1[/size][/vbox][vbox][size font='quarantine' size=350]\u00f2[/size][/vbox][vbox][size font='quarantine' size=350]\u00f3[/size][/vbox][vbox][size font='quarantine' size=350]\u00f4[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Narrow Chars",
		"Uneven Chars"
	]
},
{
	"name":"Quarterly",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Quarterly - by Aenigma Fonts/Quarterly Thin.ttf",
			"style":"normal",
			"weight":"100"
		},
		{
			"path":"_Aenigma Fonts/Quarterly - by Aenigma Fonts/Quarterly Thick.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Wide Chars"
	]
},
{
	"name":"Quattrocento",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Quattrocento - by Impallari Type/Quattrocento.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Quattrocento - by Impallari Type/Quattrocento Bold.ttf",
			"style":"normal",
			"weight":"700"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Quattrocento Sans",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Quattrocento Sans - by Impallari Type/Quattrocento Sans.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Quattrocento Sans - by Impallari Type/Quattrocento Sans Italic.ttf",
			"style":"italic",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Quattrocento Sans - by Impallari Type/Quattrocento Sans Bold.ttf",
			"style":"normal",
			"weight":"700"
		},
		{
			"path":"_Impallari Type/Quattrocento Sans - by Impallari Type/Quattrocento Sans Bold Italic.ttf",
			"style":"italic",
			"weight":"700"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Queasy",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Queasy - by Aenigma Fonts/Queasy.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Partial Symbol Set",
		"Playful",
		"Rounded Chars",
		"Rounded Edges"
	]
},
{
	"name":"Queasy Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Queasy - by Aenigma Fonts/Queasy Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Outline",
		"Partial Symbol Set",
		"Playful",
		"Rounded Chars",
		"Rounded Edges"
	]
},
{
	"name":"Quick End Jerk",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Quick End Jerk.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decay",
		"Decorated",
		"Ornamental",
		"Partial Symbol Set",
		"Playful",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Quill Experimental Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Quill Experimental - by Aenigma Fonts/Quill Experimental Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Halloween",
		"Negative Space",
		"Outline",
		"Partial Symbol Set",
		"Uneven Chars"
	]
},
{
	"name":"Quill Experimental Solid",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Quill Experimental - by Aenigma Fonts/Quill Experimental Solid.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Halloween",
		"Partial Symbol Set",
		"Uneven Chars"
	]
},
{
	"name":"Quinine",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Quinine.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Hard To Read",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Quixotic",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Quixotic.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Distressed",
		"Leading Left Hook",
		"Narrow Chars",
		"No Lowercase",
		"Uneven Chars"
	]
},
{
	"name":"Racing Sans One",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Racing Sans One - by Impallari Type/Racing Sans One.ttf",
			"style":"normal",
			"weight":"400"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"Radios in Motion",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Radios in Motion.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Dashed",
		"Decorated",
		"Dotted",
		"Morse Code",
		"Partial Symbol Set"
	]
},
{
	"name":"Radios in Motion - Hard",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Radios in Motion - Hard.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only",
		"Dashed",
		"Dotted",
		"Morse Code"
	]
},
{
	"name":"Raleway",
	"authors":[
		"Impallari Type",
		"Matt McInerney",
		"Rodrigo Fuenzalida"
	],
	"variants":[
		{
			"path":"_Impallari Type/Raleway - by Matt McInerney, Impallari Type, Rodrigo Fuenzalida/static/Raleway Thin.ttf",
			"style":"normal",
			"weight":"100"
		},
		{
			"path":"_Impallari Type/Raleway - by Matt McInerney, Impallari Type, Rodrigo Fuenzalida/static/Raleway Thin Italic.ttf",
			"style":"italic",
			"weight":"100"
		},
		{
			"path":"_Impallari Type/Raleway - by Matt McInerney, Impallari Type, Rodrigo Fuenzalida/static/Raleway Extra Light.ttf",
			"style":"normal",
			"weight":"200"
		},
		{
			"path":"_Impallari Type/Raleway - by Matt McInerney, Impallari Type, Rodrigo Fuenzalida/static/Raleway Extra Light Italic.ttf",
			"style":"italic",
			"weight":"200"
		},
		{
			"path":"_Impallari Type/Raleway - by Matt McInerney, Impallari Type, Rodrigo Fuenzalida/static/Raleway Light.ttf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"_Impallari Type/Raleway - by Matt McInerney, Impallari Type, Rodrigo Fuenzalida/static/Raleway Light Italic.ttf",
			"style":"italic",
			"weight":"300"
		},
		{
			"path":"_Impallari Type/Raleway - by Matt McInerney, Impallari Type, Rodrigo Fuenzalida/static/Raleway.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Raleway - by Matt McInerney, Impallari Type, Rodrigo Fuenzalida/static/Raleway Italic.ttf",
			"style":"italic",
			"weight":"400"
		},
		{
			"path":"_Impallari Type/Raleway - by Matt McInerney, Impallari Type, Rodrigo Fuenzalida/static/Raleway Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Raleway - by Matt McInerney, Impallari Type, Rodrigo Fuenzalida/static/Raleway Medium Italic.ttf",
			"style":"italic",
			"weight":"500"
		},
		{
			"path":"_Impallari Type/Raleway - by Matt McInerney, Impallari Type, Rodrigo Fuenzalida/static/Raleway Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Raleway - by Matt McInerney, Impallari Type, Rodrigo Fuenzalida/static/Raleway Semi Bold Italic.ttf",
			"style":"italic",
			"weight":"600"
		},
		{
			"path":"_Impallari Type/Raleway - by Matt McInerney, Impallari Type, Rodrigo Fuenzalida/static/Raleway Bold.ttf",
			"style":"normal",
			"weight":"700"
		},
		{
			"path":"_Impallari Type/Raleway - by Matt McInerney, Impallari Type, Rodrigo Fuenzalida/static/Raleway Bold Italic.ttf",
			"style":"italic",
			"weight":"700"
		},
		{
			"path":"_Impallari Type/Raleway - by Matt McInerney, Impallari Type, Rodrigo Fuenzalida/static/Raleway Extra Bold.ttf",
			"style":"normal",
			"weight":"800"
		},
		{
			"path":"_Impallari Type/Raleway - by Matt McInerney, Impallari Type, Rodrigo Fuenzalida/static/Raleway Extra Bold Italic.ttf",
			"style":"italic",
			"weight":"800"
		},
		{
			"path":"_Impallari Type/Raleway - by Matt McInerney, Impallari Type, Rodrigo Fuenzalida/static/Raleway Black.ttf",
			"style":"normal",
			"weight":"900"
		},
		{
			"path":"_Impallari Type/Raleway - by Matt McInerney, Impallari Type, Rodrigo Fuenzalida/static/Raleway Black Italic.ttf",
			"style":"italic",
			"weight":"900"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Raleway Dots",
	"authors":[
		"Brenda Gallo",
		"Impallari Type",
		"Matt McInerney",
		"Rodrigo Fuenzalida"
	],
	"variants":[
		{
			"path":"_Impallari Type/Raleway Dots - by Matt McInerney, Impallari Type, Rodrigo Fuenzalida, Brenda Gallo/Raleway Dots.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Dotted",
		"Ornamental",
		"Thin Stroke"
	]
},
{
	"name":"Rambling",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Rambling - by Aenigma Fonts/Rambling.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=6][vbox][size font='rambling' size=350]\u00c8[/size][/vbox][vbox][size font='rambling' size=350]\u00c9[/size][/vbox][vbox][size font='rambling' size=350]\u00ca[/size][/vbox][vbox][size font='rambling' size=350]\u00cb[/size][/vbox][vbox][size font='rambling' size=350]\u00cc[/size][/vbox][vbox][size font='rambling' size=350]\u00cd[/size][/vbox][vbox][size font='rambling' size=350]\u00ce[/size][/vbox][vbox][size font='rambling' size=350]\u00cf[/size][/vbox][vbox][size font='rambling' size=350]\u00d0[/size][/vbox][vbox][size font='rambling' size=350]\u00d1[/size][/vbox][vbox][size font='rambling' size=350]\u00d2[/size][/vbox][vbox][size font='rambling' size=350]\u00d3[/size][/vbox][vbox][size font='rambling' size=350]\u00d4[/size][/vbox][vbox][size font='rambling' size=350]\u00d5[/size][/vbox][vbox][size font='rambling' size=350]\u00d6[/size][/vbox][vbox][size font='rambling' size=350]\u00d7[/size][/vbox][vbox][size font='rambling' size=350]\u00d8[/size][/vbox][vbox][size font='rambling' size=350]\u00d9[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Plain",
		"Rounded Edges"
	]
},
{
	"name":"Ranchers",
	"authors":[
		"Impallari Type"
	],
	"variants":[
		{
			"path":"_Impallari Type/Ranchers - by Impallari Type/Ranchers.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Plain",
		"Playful",
		"Thick Stroke"
	]
},
{
	"name":"Ravaged By Years",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Ravaged By Years - by Aenigma Fonts/Ravaged By Years.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distressed",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Partial Symbol Set"
	]
},
{
	"name":"Rave",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Rave.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Ornamental",
		"Partial Symbol Set",
		"Wide Chars"
	]
},
{
	"name":"Ravenous Caterpillar",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Ravenous Caterpillar - by Aenigma Fonts/Ravenous Caterpillar.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Ornamental",
		"Rounded Chars"
	]
},
{
	"name":"Raydiate",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Raydiate - by Aenigma Fonts/Raydiate.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decay",
		"Negative Space",
		"No Symbols",
		"Ornamental",
		"Outline",
		"Smudged"
	]
},
{
	"name":"Razor Keen",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Razor Keen.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Distressed",
		"Halloween",
		"Partial Symbol Set",
		"Slanted",
		"Uneven Chars"
	]
},
{
	"name":"Reason",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Reason - by Aenigma Fonts/Reason.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Reason Shadow",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Reason - by Aenigma Fonts/Reason Shadow.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Offset",
		"Ornamental",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Redundant",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Redundant - by Aenigma Fonts/Redundant.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Playful"
	]
},
{
	"name":"Regenerate",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Regenerate - by Aenigma Fonts/Regenerate.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Wide Chars"
	]
},
{
	"name":"Registry",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Registry - by Aenigma Fonts/Registry.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Handwriting",
		"Rounded Edges",
		"Script",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"Rehearsal Curve",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Rehearsal - by Aenigma Fonts/Rehearsal Curve.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Block Shaped",
		"Rounded Edges",
		"Wide Chars"
	]
},
{
	"name":"Rehearsal Offset",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Rehearsal - by Aenigma Fonts/Rehearsal Offset.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Block Shaped",
		"Rounded Edges",
		"Uneven Chars",
		"Wide Chars"
	]
},
{
	"name":"Rehearsal Point",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Rehearsal - by Aenigma Fonts/Rehearsal Point.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Angular",
		"Block Shaped",
		"Wide Chars"
	]
},
{
	"name":"Relapse",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Relapse - by Aenigma Fonts/Relapse.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distressed",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Remakeoffabulous",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Remakeoffabulous.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"No Uppercase",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Remakeoffabulous2",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Remakeoffabulous2.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"No Uppercase",
		"Partial Symbol Set"
	]
},
{
	"name":"Remakeoffabulous3",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Remakeoffabulous3.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"No Uppercase",
		"Partial Symbol Set",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Renju",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Renju.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Decay",
		"Ornamental",
		"Uneven Chars",
		"Vintage",
		"Western"
	]
},
{
	"name":"Revert",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Revert - by Aenigma Fonts/Revert.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Thick Stroke"
	]
},
{
	"name":"Revert Round",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Revert - by Aenigma Fonts/Revert Round.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Righteous",
	"authors":[
		"Brian J. Bonislawsky"
	],
	"variants":[
		{
			"path":"Righteous - by Brian J. Bonislawsky/Righteous.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"Rina",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Rina.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Curvy Letters",
		"Leading Left Hook",
		"Plain",
		"Uneven Chars"
	]
},
{
	"name":"Riot Act 2 - Back",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Riot Act 2 - Back.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Distressed",
		"Halloween",
		"Monsters",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Riot Act 2 - Front",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Riot Act 2 - Front.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Distressed",
		"Halloween",
		"Monsters",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Riot Act 2 - Glop",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Riot Act 2 - Glop.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only",
		"Composite Font",
		"Monsters"
	]
},
{
	"name":"Riot Act 2 - Outline",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Riot Act 2 - Outline.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Composite Font",
		"Distressed",
		"Halloween",
		"Monsters",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Outline",
		"Partial Symbol Set"
	]
},
{
	"name":"Robokoz",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Robokoz.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Calligraphy",
		"Elegant",
		"Handwriting",
		"Wide Chars"
	]
},
{
	"name":"ROBOTECH GP",
	"authors":[
		"Gustavo Paz L"
	],
	"variants":[
		{
			"path":"Robotech GP - by Gustavo Paz L/ROBOTECH GP.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"ShareAlike License",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Roboto Slab",
	"authors":[
		"Christian Robertson"
	],
	"variants":[
		{
			"path":"Roboto Slab - by Christian Robertson/Roboto Slab Thin.ttf",
			"style":"normal",
			"weight":"100"
		},
		{
			"path":"Roboto Slab - by Christian Robertson/Roboto Slab Light.ttf",
			"style":"normal",
			"weight":"200"
		},
		{
			"path":"Roboto Slab - by Christian Robertson/Roboto Slab.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"Roboto Slab - by Christian Robertson/Roboto Slab Bold.ttf",
			"style":"normal",
			"weight":"bold"
		}
	],
	"license":"Apache License",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Roses Are FF0000",
	"authors":[
		"A J Paglia"
	],
	"variants":[
		{
			"path":"_A J Paglia Fonts/Free Fonts/Roses Are FF0000.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Pixelated",
		"Retro"
	]
},
{
	"name":"Rotund",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Rotund - by Aenigma Fonts/Rotund.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Rotund Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Rotund - by Aenigma Fonts/Rotund Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Partial Symbol Set",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Rough Day",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Rough Day - by Aenigma Fonts/Rough Day.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Decay",
		"Ornamental"
	]
},
{
	"name":"Rustproof Body",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Rustproof Body.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Broken Letters",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Ruth Script",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Ruth Script.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Elegant",
		"Handwriting",
		"Partial Symbol Set",
		"Script",
		"Slanted"
	]
},
{
	"name":"Ryuker",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Ryuker - by Aenigma Fonts/Ryuker.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=7][vbox][size font='ryuker' size=350]\u00c8[/size][/vbox][vbox][size font='ryuker' size=350]\u00c9[/size][/vbox][vbox][size font='ryuker' size=350]\u00ca[/size][/vbox][vbox][size font='ryuker' size=350]\u00cb[/size][/vbox][vbox][size font='ryuker' size=350]\u00cc[/size][/vbox][vbox][size font='ryuker' size=350]\u00cd[/size][/vbox][vbox][size font='ryuker' size=350]\u00ce[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Thick Stroke"
	]
},
{
	"name":"Sad Films",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Sad Films.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Broken Letters",
		"Leading Left Hook",
		"Partial Symbol Set",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"Saffron",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Saffron - by Aenigma Fonts/Saffron.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Hard To Read",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Sandoval",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Sandoval.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Hard To Read",
		"Ornamental",
		"Partial Symbol Set",
		"Slanted",
		"Striped",
		"Thick Stroke"
	]
},
{
	"name":"Sandoval - Speed",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Sandoval - Speed.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Hard To Read",
		"Ornamental",
		"Partial Symbol Set",
		"Slanted",
		"Striped",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Sappy Mugs",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Sappy Mugs.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only",
		"Animals",
		"Faces",
		"Negative Space",
		"Outline",
		"Playful"
	]
},
{
	"name":"Sarabelle",
	"authors":[
		"A J Paglia"
	],
	"variants":[
		{
			"path":"_A J Paglia Fonts/Free Fonts/Sarabelle.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Handwriting",
		"Partial Symbol Set",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"Sarcastic",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Sarcastic - by Aenigma Fonts/Sarcastic.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Playful",
		"Rounded Edges"
	]
},
{
	"name":"Saunder",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Saunder - by Aenigma Fonts/Saunder.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Plain"
	]
},
{
	"name":"Sayso Chic",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Sayso Chic.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Dotted",
		"Ornamental",
		"Partial Symbol Set",
		"Retro"
	]
},
{
	"name":"Scalelines",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Scalelines - by Aenigma Fonts/Scalelines.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Angular",
		"Distorted",
		"Ornamental",
		"Striped"
	]
},
{
	"name":"Scalelines Maze",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Scalelines - by Aenigma Fonts/Scalelines Maze.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Angular",
		"Distorted",
		"Hard To Read",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Striped"
	]
},
{
	"name":"Screengem",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Screengem.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"No Lowercase",
		"Partial Symbol Set",
		"Plain",
		"Playful",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Scritzy X",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Scritzy X.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Distressed",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Segment 16C",
	"authors":[
		"Daniel Wikholm"
	],
	"variants":[
		{
			"path":"Segment 16C - by Daniel Wikholm/Segment 16C.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"Segment 16C - by Daniel Wikholm/Segment 16C Italic.ttf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"Segment 16C - by Daniel Wikholm/Segment 16C Bold.ttf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"Segment 16C - by Daniel Wikholm/Segment 16C Bold Italic.ttf",
			"style":"italic",
			"weight":"bold"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Broken Letters",
		"Hard To Read",
		"Ornamental"
	]
},
{
	"name":"Selawik",
	"authors":[
		"Microsoft"
	],
	"variants":[
		{
			"path":"Selawik - by Microsoft/Selawik Extra Light.ttf",
			"style":"normal",
			"weight":"200"
		},
		{
			"path":"Selawik - by Microsoft/Selawik Light.ttf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"Selawik - by Microsoft/Selawik.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"Selawik - by Microsoft/Selawik Semi Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"Selawik - by Microsoft/Selawik Bold.ttf",
			"style":"normal",
			"weight":"700"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Send Cash",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Send Cash.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Distressed",
		"Ornamental",
		"Partial Symbol Set",
		"Uneven Chars"
	]
},
{
	"name":"Sequence",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Sequence - by Aenigma Fonts/Sequence.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=6][vbox][size font='sequence' size=350]\u00c8[/size][/vbox][vbox][size font='sequence' size=350]\u00c9[/size][/vbox][vbox][size font='sequence' size=350]\u00ca[/size][/vbox][vbox][size font='sequence' size=350]\u00cb[/size][/vbox][vbox][size font='sequence' size=350]\u00cc[/size][/vbox][vbox][size font='sequence' size=350]\u00cd[/size][/vbox][vbox][size font='sequence' size=350]\u00ce[/size][/vbox][vbox][size font='sequence' size=350]\u00cf[/size][/vbox][vbox][size font='sequence' size=350]\u00d0[/size][/vbox][vbox][size font='sequence' size=350]\u00d1[/size][/vbox][vbox][size font='sequence' size=350]\u00d2[/size][/vbox][vbox][size font='sequence' size=350]\u00d3[/size][/vbox][vbox][size font='sequence' size=350]\u00d4[/size][/vbox][vbox][size font='sequence' size=350]\u00d5[/size][/vbox][vbox][size font='sequence' size=350]\u00d6[/size][/vbox][vbox][size font='sequence' size=350]\u00d7[/size][/vbox][vbox][size font='sequence' size=350]\u00d8[/size][/vbox][vbox][size font='sequence' size=350]\u00d9[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Ornamental",
		"Rounded Edges"
	]
},
{
	"name":"Setback",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Setback - by Aenigma Fonts/Setback.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Broken Letters",
		"Pixelated",
		"Retro",
		"Thick Stroke"
	]
},
{
	"name":"Shifty Chica 2",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Shifty Chica 2.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Curvy Letters",
		"Elegant",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Shredded For You",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Shredded For You.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Siamese Katsong",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Siamese Katsong.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Broken Letters",
		"No Uppercase",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Sideways",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Sideways - by Aenigma Fonts/Sideways.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Thick Stroke"
	]
},
{
	"name":"Simpleton",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Simpleton - by Aenigma Fonts/Simpleton.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Dotted",
		"Ornamental",
		"Retro"
	]
},
{
	"name":"Single Sleeve",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Single Sleeve.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"No Lowercase",
		"Partial Symbol Set",
		"Plain",
		"Uneven Chars"
	]
},
{
	"name":"Skeletor Stance",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Skeletor Stance.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Distressed",
		"No Uppercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Skraype",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Skraype.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Decay",
		"Ornamental",
		"Playful",
		"Stencil",
		"Thick Stroke"
	]
},
{
	"name":"Skrybylr",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Skrybylr.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Hard To Read",
		"No Lowercase",
		"Ornamental",
		"Playful",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Skull Capz",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Skull Capz - by Aenigma Fonts/Skull Capz.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"[center][font font='Skull Capz' fg=aaa size=400][color fg=f40]S[/color]a[color fg=f90]K[/color]f[color fg=fc0]U[/color]j[color fg=f90]L[/color]m[color fg=f40]L[/color]r [color fg=f00]C[/color]u[color fg=f30]A[/color]v[color fg=f60]P[/color]x[color fg=f90]Z[/color]z[/font][br][size size=80]The fancy text above was generated by: [iquote]SaKfUjLmLr CuAvPxZz[/iquote][/size][br][b size=125]To use:[/b][br][/center][br][ul][br][li]Type in a capital letter or a number that you want to appear inside the skull[/li][br][li]Next, type in a lower case letter to create a skull.[/li][br][/ul][br][br][center][br]The skulls correspond to the following letters:[br][grid cols=4 fg=fff2][br][font font='nabfonts monospace' size=120][br][vbox fg=fff5][b fg=f74]a[/b][font font='Skull Capz' fg=eee size=250] a [/font][/vbox][vbox fg=fff5][b fg=f74]b[/b][font font='Skull Capz' fg=eee size=250]b[/font][/vbox][vbox fg=fff5][b fg=f74]c[/b][font font='Skull Capz' fg=eee size=250]c[/font][/vbox][br][vbox fg=fff5][b fg=f74]d[/b][font font='Skull Capz' fg=eee size=250]d[/font][/vbox][vbox fg=fff5][b fg=f74]e[/b][font font='Skull Capz' fg=eee size=250]e[/font][/vbox][vbox fg=fff5][b fg=f74]f[/b][font font='Skull Capz' fg=eee size=250]f[/font][/vbox][br][vbox fg=fff5][b fg=f74]g[/b][font font='Skull Capz' fg=eee size=250]g[/font][/vbox][vbox fg=fff5][b fg=f74]h[/b][font font='Skull Capz' fg=eee size=250]h[/font][/vbox][vbox fg=fff5][b fg=f74]i[/b][font font='Skull Capz' fg=eee size=250]i[/font][/vbox][br][vbox fg=fff5][b fg=f74]j[/b][font font='Skull Capz' fg=eee size=250]j[/font][/vbox][vbox fg=fff5][b fg=f74]k[/b][font font='Skull Capz' fg=eee size=250]k[/font][/vbox][vbox fg=fff5][b fg=f74]l[/b][font font='Skull Capz' fg=eee size=250]l[/font][/vbox][br][vbox fg=fff5][b fg=f74]m[/b][font font='Skull Capz' fg=eee size=250]m[/font][/vbox][vbox fg=fff5][b fg=f74]n[/b][font font='Skull Capz' fg=eee size=250]n[/font][/vbox][vbox fg=fff5][b fg=f74]o[/b][font font='Skull Capz' fg=eee size=250]o[/font][/vbox][br][vbox fg=fff5][b fg=f74]p[/b][font font='Skull Capz' fg=eee size=250]p[/font][/vbox][vbox fg=fff5][b fg=f74]q[/b][font font='Skull Capz' fg=eee size=250]q[/font][/vbox][vbox fg=fff5][b fg=f74]r[/b][font font='Skull Capz' fg=eee size=250]r[/font][/vbox][br][vbox fg=fff5][b fg=f74]s[/b][font font='Skull Capz' fg=eee size=250]s[/font][/vbox][vbox fg=fff5][b fg=f74]t[/b][font font='Skull Capz' fg=eee size=250]t[/font][/vbox][vbox fg=fff5][b fg=f74]u[/b][font font='Skull Capz' fg=eee size=250]u[/font][/vbox][br][vbox fg=fff5][b fg=f74]v[/b][font font='Skull Capz' fg=eee size=250]v[/font][/vbox][vbox fg=fff5][b fg=f74]w[/b][font font='Skull Capz' fg=eee size=250]w[/font][/vbox][vbox fg=fff5][b fg=f74]x[/b][font font='Skull Capz' fg=eee size=250]x[/font][/vbox][br][font] [/font][vbox fg=fff5][b fg=f74]y[/b][font font='Skull Capz' fg=eee size=250]y[/font][/vbox][vbox fg=fff5][b fg=f74]z[/b][font font='Skull Capz' fg=eee size=250]z[/font][/font][/vbox][br][/grid][/center]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Halloween",
		"No Lowercase",
		"No Symbols",
		"Ornamental"
	]
},
{
	"name":"Slender",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Slender - by Aenigma Fonts/Slender.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Hard To Read",
		"Narrow Chars",
		"Plain"
	]
},
{
	"name":"Slender Mini",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Slender - by Aenigma Fonts/Slender Mini.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Plain"
	]
},
{
	"name":"Slender Stubby",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Slender - by Aenigma Fonts/Slender Stubby.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Plain",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Slender Wide",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Slender - by Aenigma Fonts/Slender Wide.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Plain"
	]
},
{
	"name":"Sloe Gin Rickey",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Sloe Gin Rickey.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Leading Left Hook",
		"Ornamental",
		"Slanted"
	]
},
{
	"name":"Sloppy Joetsu",
	"authors":[
		"j4p4n"
	],
	"variants":[
		{
			"path":"Sloppy Joetsu - by j4p4n/Sloppy Joetsu.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Sans-Serif",
		"Handwriting",
		"Hard To Read",
		"Partial Symbol Set",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"Snailets",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Snailets - by Aenigma Fonts/Snailets.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Use lowercase letters for normal characters.[br]Use uppercase letters to attach a snail to the letter.[br][br]Snails:[br][grid cols=2][vbox][size font='snailets' size=450]\u00b2[/size][/vbox][vbox][size font='snailets' size=450]\u00b3[/size][/vbox][/grid][br][br]Extra characters:[br][grid cols=5][vbox][size font='snailets' size=450]\u00b5[/size][/vbox][vbox][size font='snailets' size=450]\u00b6[/size][/vbox][vbox][size font='snailets' size=450]\u00b7[/size][/vbox][vbox][size font='snailets' size=450]\u00b8[/size][/vbox][vbox][size font='snailets' size=450]\u00b9[/size][/vbox][vbox][size font='snailets' size=450]\u00ba[/size][/vbox][vbox][size font='snailets' size=450]\u00bb[/size][/vbox][vbox][size font='snailets' size=450]\u00bc[/size][/vbox][vbox][size font='snailets' size=450]\u00bd[/size][/vbox][vbox][size font='snailets' size=450]\u00be[/size][/vbox][vbox][size font='snailets' size=450]\u00bf[/size][/vbox][vbox][size font='snailets' size=450]\u0152[/size][/vbox][vbox][size font='snailets' size=450]\u0153[/size][/vbox][vbox][size font='snailets' size=450]\u0178[/size][/vbox][vbox][size font='snailets' size=450]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Outline",
		"Rounded Edges",
		"Swirl"
	]
},
{
	"name":"Snickles",
	"authors":[
		"Tup Wanders"
	],
	"variants":[
		{
			"path":"_Tup Wanders/Free Fonts/Snickles.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Marker",
		"Playful",
		"Slanted",
		"Uneven Chars"
	]
},
{
	"name":"Snidely",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Snidely.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Curvy Letters",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"So Run Down",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/So Run Down.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Decay",
		"Distressed",
		"Hard To Read",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Uneven Chars"
	]
},
{
	"name":"Sofia",
	"authors":[
		"LatinoType"
	],
	"variants":[
		{
			"path":"Sofia - by LatinoType/Sofia.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Serif",
		"Calligraphy",
		"Elegant",
		"Handwriting",
		"Script"
	]
},
{
	"name":"Spacious",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Spacious - by Aenigma Fonts/Spacious.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Rounded Edges",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Spacious Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Spacious - by Aenigma Fonts/Spacious Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Outline",
		"Rounded Edges",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Spastic",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Spastic - by Aenigma Fonts/Spastic.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decay",
		"Distorted",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Splatz",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Splatz - by Aenigma Fonts/Splatz.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"No Symbols",
		"Ornamental",
		"Smudged"
	]
},
{
	"name":"Spongy",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Spongy.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Broken Letters",
		"Partial Symbol Set",
		"Thin Stroke"
	]
},
{
	"name":"Square Route",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Square Route - by Aenigma Fonts/Square Route.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Partial Symbol Set",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Square Unique",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Square Unique Thin.ttf",
			"style":"normal",
			"weight":"200"
		},
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Square Unique.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Square Unique Extra Bold.ttf",
			"style":"normal",
			"weight":"600"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Partial Symbol Set",
		"Wide Chars"
	]
},
{
	"name":"Squealer",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Squealer.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Chiseled",
		"Formal",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Squealer - Embossed",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Squealer - Embossed.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Bevel",
		"Chiseled",
		"Negative Space",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Stagnation",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Stagnation - by Aenigma Fonts/Stagnation.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decay",
		"Distressed",
		"Negative Space",
		"Ornamental",
		"Outline"
	]
},
{
	"name":"Star Jedi",
	"authors":[
		"Boba Fonts"
	],
	"variants":[
		{
			"path":"Star Jedi - by Boba Fonts/Star Jedi/Star Jedi.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Leading Left Hook",
		"Logo",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Star Wars",
		"Thick Stroke"
	]
},
{
	"name":"Star Jedi Hollow",
	"authors":[
		"Boba Fonts"
	],
	"variants":[
		{
			"path":"Star Jedi - by Boba Fonts/Star Jedi/Star Jedi Hollow.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Logo",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Outline",
		"Partial Symbol Set",
		"Star Wars",
		"Thick Stroke"
	]
},
{
	"name":"Star Jedi Logo Double Line 1",
	"authors":[
		"Boba Fonts"
	],
	"variants":[
		{
			"path":"Star Jedi - by Boba Fonts/Star Jedi Logo/Star Jedi Logo Double Line 1.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Leading Left Hook",
		"Logo",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Star Wars",
		"Thick Stroke"
	]
},
{
	"name":"Star Jedi Logo Double Line 2",
	"authors":[
		"Boba Fonts"
	],
	"variants":[
		{
			"path":"Star Jedi - by Boba Fonts/Star Jedi Logo/Star Jedi Logo Double Line 2.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Leading Left Hook",
		"Logo",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Star Wars",
		"Thick Stroke"
	]
},
{
	"name":"Star Jedi Logo Mono Line",
	"authors":[
		"Boba Fonts"
	],
	"variants":[
		{
			"path":"Star Jedi - by Boba Fonts/Star Jedi Logo/Star Jedi Logo Mono Line.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Leading Left Hook",
		"Logo",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Star Wars",
		"Thick Stroke"
	]
},
{
	"name":"Star Jedi Outline",
	"authors":[
		"Boba Fonts"
	],
	"variants":[
		{
			"path":"Star Jedi - by Boba Fonts/Star Jedi Outline/Star Jedi Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Logo",
		"No Lowercase",
		"Ornamental",
		"Outline",
		"Partial Symbol Set",
		"Star Wars",
		"Thick Stroke"
	]
},
{
	"name":"Star Jedi Special Edition",
	"authors":[
		"Boba Fonts"
	],
	"variants":[
		{
			"path":"Star Jedi - by Boba Fonts/Star Jedi Special Edition/Star Jedi Special Edition.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Leading Left Hook",
		"Logo",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Star Wars",
		"Thick Stroke"
	]
},
{
	"name":"Star Trek Enterprise Future",
	"authors":[
		"Alphabet & Type"
	],
	"variants":[
		{
			"path":"Star Trek Future - by Alphabet & Type/Star Trek Enterprise Future.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Logo",
		"Narrow Chars",
		"Negative Space",
		"No Lowercase",
		"Offset",
		"Outline",
		"Slanted",
		"Star Trek"
	]
},
{
	"name":"Star Trek Future",
	"authors":[
		"Alphabet & Type"
	],
	"variants":[
		{
			"path":"Star Trek Future - by Alphabet & Type/Star Trek Future.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Logo",
		"Narrow Chars",
		"Negative Space",
		"No Lowercase",
		"Offset",
		"Outline",
		"Star Trek"
	]
},
{
	"name":"Starbats",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Starbats.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Monospace",
		"Negative Space",
		"No Lowercase",
		"No Symbols",
		"Ornamental"
	]
},
{
	"name":"StateFace",
	"authors":[
		"ProPublica"
	],
	"variants":[
		{
			"path":"Stateface - by ProPublica/StateFace.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"MIT License",
	"instructions":[
		"Here are the characters for each state by name:[font font='nabfonts monospace'][br][grid cols=3][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]B[/b][font font=stateface size=250 fg=b22]B[/font][font size=75]Alabama[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]A[/b][font font=stateface size=250 fg=b22]A[/font][font size=75]Alaska[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]D[/b][font font=stateface size=250 fg=b22]D[/font][font size=75]Arizona[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]C[/b][font font=stateface size=250 fg=b22]C[/font][font size=75]Arkansas[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]E[/b][font font=stateface size=250 fg=b22]E[/font][font size=75]California[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]F[/b][font font=stateface size=250 fg=b22]F[/font][font size=75]Colorado[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]G[/b][font font=stateface size=250 fg=b22]G[/font][font size=75]Connecticut[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]H[/b][font font=stateface size=250 fg=b22]H[/font][font size=75]Delaware[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]I[/b][font font=stateface size=250 fg=b22]I[/font][font size=75]Florida[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]J[/b][font font=stateface size=250 fg=b22]J[/font][font size=75]Georgia[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]K[/b][font font=stateface size=250 fg=b22]K[/font][font size=75]Hawaii[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]M[/b][font font=stateface size=250 fg=b22]M[/font][font size=75]Idaho[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]N[/b][font font=stateface size=250 fg=b22]N[/font][font size=75]Illinois[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]O[/b][font font=stateface size=250 fg=b22]O[/font][font size=75]Indiana[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]L[/b][font font=stateface size=250 fg=b22]L[/font][font size=75]Iowa[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]P[/b][font font=stateface size=250 fg=b22]P[/font][font size=75]Kansas[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]Q[/b][font font=stateface size=250 fg=b22]Q[/font][font size=75]Kentucky[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]R[/b][font font=stateface size=250 fg=b22]R[/font][font size=75]Louisiana[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]U[/b][font font=stateface size=250 fg=b22]U[/font][font size=75]Maine[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]T[/b][font font=stateface size=250 fg=b22]T[/font][font size=75]Maryland[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]S[/b][font font=stateface size=250 fg=b22]S[/font][font size=75]Massachusetts[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]V[/b][font font=stateface size=250 fg=b22]V[/font][font size=75]Michigan[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]W[/b][font font=stateface size=250 fg=b22]W[/font][font size=75]Minnesota[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]Y[/b][font font=stateface size=250 fg=b22]Y[/font][font size=75]Mississippi[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]X[/b][font font=stateface size=250 fg=b22]X[/font][font size=75]Missouri[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]Z[/b][font font=stateface size=250 fg=b22]Z[/font][font size=75]Montana[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]c[/b][font font=stateface size=250 fg=b22]c[/font][font size=75]Nebraska[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]g[/b][font font=stateface size=250 fg=b22]g[/font][font size=75]Nevada[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]d[/b][font font=stateface size=250 fg=b22]d[/font][font size=75]New Hampshire[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]e[/b][font font=stateface size=250 fg=b22]e[/font][font size=75]New Jersey[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]f[/b][font font=stateface size=250 fg=b22]f[/font][font size=75]New Mexico[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]h[/b][font font=stateface size=250 fg=b22]h[/font][font size=75]New York[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]a[/b][font font=stateface size=250 fg=b22]a[/font][font size=75]North Carolina[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]b[/b][font font=stateface size=250 fg=b22]b[/font][font size=75]North Dakota[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]i[/b][font font=stateface size=250 fg=b22]i[/font][font size=75]Ohio[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]j[/b][font font=stateface size=250 fg=b22]j[/font][font size=75]Oklahoma[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]k[/b][font font=stateface size=250 fg=b22]k[/font][font size=75]Oregon[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]l[/b][font font=stateface size=250 fg=b22]l[/font][font size=75]Pennsylvania[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]m[/b][font font=stateface size=250 fg=b22]m[/font][font size=75]Rhode Island[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]n[/b][font font=stateface size=250 fg=b22]n[/font][font size=75]South Carolina[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]o[/b][font font=stateface size=250 fg=b22]o[/font][font size=75]South Dakota[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]p[/b][font font=stateface size=250 fg=b22]p[/font][font size=75]Tennessee[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]q[/b][font font=stateface size=250 fg=b22]q[/font][font size=75]Texas[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]r[/b][font font=stateface size=250 fg=b22]r[/font][font size=75]Utah[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]t[/b][font font=stateface size=250 fg=b22]t[/font][font size=75]Vermont[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]s[/b][font font=stateface size=250 fg=b22]s[/font][font size=75]Virginia[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]u[/b][font font=stateface size=250 fg=b22]u[/font][font size=75]Washington[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]y[/b][font font=stateface size=250 fg=b22]y[/font][font size=75]Washington D.C.[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]v[/b][font font=stateface size=250 fg=b22]v[/font][font size=75]Wisconsin[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]w[/b][font font=stateface size=250 fg=b22]w[/font][font size=75]West Virginia[/font][/vbox][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]x[/b][font font=stateface size=250 fg=b22]x[/font][font size=75]Wyoming[/font][/vbox][br][b] [/b][br][vbox][b font='nabfonts monospace' size=125 fg=0ff]z[/b][font font=stateface size=250 fg=b22]z[/font][font size=75]U.S. Map[/font][/vbox][br][/grid][br][/font]"
	],
	"tags":[
		"Symbols Only",
		"U.S.A."
	]
},
{
	"name":"Stitch & Bitch",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Stitch & Bitch.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Dashed",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Stitch",
		"Thick Stroke"
	]
},
{
	"name":"Storm",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Storm.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decay",
		"Distorted",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"Stranded",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Stranded - by Aenigma Fonts/Stranded.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"No Symbols",
		"Playful",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"STRIPES & STARS",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/STRIPES & STARS.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Dotted",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Stars",
		"Striped",
		"U.S.A."
	]
},
{
	"name":"Stupefaction",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Stupefaction.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Hard To Read",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Styrofoam Feelings",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Styrofoam Feelings.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Hard To Read",
		"Ornamental",
		"Partial Symbol Set",
		"Uneven Chars",
		"Wide Chars"
	]
},
{
	"name":"Subpear",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Subpear.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Narrow Chars",
		"Plain"
	]
},
{
	"name":"Sudbury Basin",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Sudbury Basin.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"No Lowercase",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Sudbury Basin - 3D",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Sudbury Basin - 3D.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Negative Space",
		"No Lowercase",
		"Offset",
		"Outline",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Superglue",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Superglue.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"No Lowercase",
		"Ornamental",
		"Rounded Edges",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Superheterodyne",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Superheterodyne.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Leading Left Hook",
		"Lightning",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Supra Genius Curves",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Supra Genius - by Aenigma Fonts/Supra Genius Curves.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Rounded Chars",
		"Rounded Edges"
	]
},
{
	"name":"Supra Genius Lines",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Supra Genius - by Aenigma Fonts/Supra Genius Lines.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Narrow Chars"
	]
},
{
	"name":"Swirled",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Swirled - by Aenigma Fonts/Swirled.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"No Symbols",
		"Ornamental",
		"Playful",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Switching & Effects",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Switching & Effects.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Distressed",
		"Halloween",
		"Hard To Read",
		"Ornamental",
		"Partial Symbol Set",
		"Thin Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Symmetry",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Symmetry - by Aenigma Fonts/Symmetry.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Symbols Only",
		"Monospace"
	]
},
{
	"name":"Syndrome",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Syndrome - by Aenigma Fonts/Syndrome.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Ornamental",
		"Thick Stroke"
	]
},
{
	"name":"Synthetic",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Synthetic - by Aenigma Fonts/Synthetic.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Hard To Read",
		"Multi-Stroke",
		"Narrow Chars",
		"Ornamental"
	]
},
{
	"name":"Syracuse",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Syracuse - by Aenigma Fonts/Syracuse.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=6][vbox][size font='syracuse' size=350]\u00ae[/size][/vbox][vbox][size font='syracuse' size=350]\u00af[/size][/vbox][vbox][size font='syracuse' size=350]\u00b0[/size][/vbox][vbox][size font='syracuse' size=350]\u00b1[/size][/vbox][vbox][size font='syracuse' size=350]\u00b2[/size][/vbox][vbox][size font='syracuse' size=350]\u00b3[/size][/vbox][vbox][size font='syracuse' size=350]\u00b5[/size][/vbox][vbox][size font='syracuse' size=350]\u00b6[/size][/vbox][vbox][size font='syracuse' size=350]\u00b7[/size][/vbox][vbox][size font='syracuse' size=350]\u00b9[/size][/vbox][vbox][size font='syracuse' size=350]\u00ba[/size][/vbox][vbox][size font='syracuse' size=350]\u00bb[/size][/vbox][vbox][size font='syracuse' size=350]\u0152[/size][/vbox][vbox][size font='syracuse' size=350]\u0153[/size][/vbox][vbox][size font='syracuse' size=350]\u0178[/size][/vbox][vbox][size font='syracuse' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Narrow Chars",
		"Thick Stroke"
	]
},
{
	"name":"Tearful",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Tearful - by Aenigma Fonts/Tearful.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"[center][ul][li]Use uppercase letters and [color fg=f74]!@#$%^&*()[/color] for the upper teardrops.[/li][li]Use lowercase letters and 0-9 for the lower teardrops.[/li][li]For a blank upper teardrop, use [color fg=f74]+[/color] .[/li][li]For a blank lower teardrop, use [color fg=f74]=[/color] .[/li][/center][br][br]Blank teardrops:[br][grid cols=2][vbox][color fg=f74]+[/color][size font='tearful' size=350]+ [/size][/vbox][vbox][color fg=f74]=[/color][size font='tearful' size=350]= [/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Rounded Chars",
		"Rounded Edges",
		"Tears"
	]
},
{
	"name":"Technique",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Technique - by Aenigma Fonts/Technique.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=6][vbox][font font='technique' size=350]\u00c0[/font][/vbox][vbox][font font='technique' size=350]\u00c1[/font][/vbox][vbox][font font='technique' size=350]\u00c2[/font][/vbox][vbox][font font='technique' size=350]\u00c3[/font][/vbox][vbox][font font='technique' size=350]\u00c4[/font][/vbox][vbox][font font='technique' size=350]\u00c5[/font][/vbox][vbox][font font='technique' size=350]\u00c7[/font][/vbox][vbox][font font='technique' size=350]\u00c8[/font][/vbox][vbox][font font='technique' size=350]\u00c9[/font][/vbox][vbox][font font='technique' size=350]\u00ca[/font][/vbox][vbox][font font='technique' size=350]\u00cb[/font][/vbox][vbox][font font='technique' size=350]\u00cc[/font][/vbox][vbox][font font='technique' size=350]\u00cd[/font][/vbox][vbox][font font='technique' size=350]\u00ce[/font][/vbox][vbox][font font='technique' size=350]\u00cf[/font][/vbox][vbox][font font='technique' size=350]\u00d0[/font][/vbox][vbox][font font='technique' size=350]\u00d1[/font][/vbox][vbox][font font='technique' size=350]\u00d2[/font][/vbox][vbox][font font='technique' size=350]\u00d3[/font][/vbox][vbox][font font='technique' size=350]\u00d4[/font][/vbox][vbox][font font='technique' size=350]\u00d5[/font][/vbox][vbox][font font='technique' size=350]\u00d6[/font][/vbox][vbox][font font='technique' size=350]\u00d7[/font][/vbox][vbox][font font='technique' size=350]\u00d8[/font][/vbox][vbox][font font='technique' size=350]\u00d9[/font][/vbox][vbox][font font='technique' size=350]\u00da[/font][/vbox][vbox][font font='technique' size=350]\u00db[/font][/vbox][vbox][font font='technique' size=350]\u00dc[/font][/vbox][vbox][font font='technique' size=350]\u00dd[/font][/vbox][vbox][font font='technique' size=350]\u00de[/font][/vbox][vbox][font font='technique' size=350]\u00df[/font][/vbox][vbox][font font='technique' size=350]\u00e0[/font][/vbox][vbox][font font='technique' size=350]\u00e1[/font][/vbox][vbox][font font='technique' size=350]\u00e2[/font][/vbox][vbox][font font='technique' size=350]\u00e3[/font][/vbox][vbox][font font='technique' size=350]\u00e4[/font][/vbox][vbox][font font='technique' size=350]\u00e5[/font][/vbox][vbox][font font='technique' size=350]\u00e7[/font][/vbox][vbox][font font='technique' size=350]\u00e8[/font][/vbox][vbox][font font='technique' size=350]\u00e9[/font][/vbox][vbox][font font='technique' size=350]\u00ea[/font][/vbox][vbox][font font='technique' size=350]\u00eb[/font][/vbox][vbox][font font='technique' size=350]\u00ec[/font][/vbox][vbox][font font='technique' size=350]\u00ed[/font][/vbox][vbox][font font='technique' size=350]\u00ee[/font][/vbox][vbox][font font='technique' size=350]\u00ef[/font][/vbox][vbox][font font='technique' size=350]\u00f0[/font][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Ornamental",
		"Rounded Chars",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Technique Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Technique - by Aenigma Fonts/Technique Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=6][vbox][font font='technique outline' size=350]\u00c0[/font][/vbox][vbox][font font='technique outline' size=350]\u00c1[/font][/vbox][vbox][font font='technique outline' size=350]\u00c2[/font][/vbox][vbox][font font='technique outline' size=350]\u00c3[/font][/vbox][vbox][font font='technique outline' size=350]\u00c4[/font][/vbox][vbox][font font='technique outline' size=350]\u00c5[/font][/vbox][vbox][font font='technique outline' size=350]\u00c7[/font][/vbox][vbox][font font='technique outline' size=350]\u00c8[/font][/vbox][vbox][font font='technique outline' size=350]\u00c9[/font][/vbox][vbox][font font='technique outline' size=350]\u00ca[/font][/vbox][vbox][font font='technique outline' size=350]\u00cb[/font][/vbox][vbox][font font='technique outline' size=350]\u00cc[/font][/vbox][vbox][font font='technique outline' size=350]\u00cd[/font][/vbox][vbox][font font='technique outline' size=350]\u00ce[/font][/vbox][vbox][font font='technique outline' size=350]\u00cf[/font][/vbox][vbox][font font='technique outline' size=350]\u00d0[/font][/vbox][vbox][font font='technique outline' size=350]\u00d1[/font][/vbox][vbox][font font='technique outline' size=350]\u00d2[/font][/vbox][vbox][font font='technique outline' size=350]\u00d3[/font][/vbox][vbox][font font='technique outline' size=350]\u00d4[/font][/vbox][vbox][font font='technique outline' size=350]\u00d5[/font][/vbox][vbox][font font='technique outline' size=350]\u00d6[/font][/vbox][vbox][font font='technique outline' size=350]\u00d7[/font][/vbox][vbox][font font='technique outline' size=350]\u00d8[/font][/vbox][vbox][font font='technique outline' size=350]\u00d9[/font][/vbox][vbox][font font='technique outline' size=350]\u00da[/font][/vbox][vbox][font font='technique outline' size=350]\u00db[/font][/vbox][vbox][font font='technique outline' size=350]\u00dc[/font][/vbox][vbox][font font='technique outline' size=350]\u00dd[/font][/vbox][vbox][font font='technique outline' size=350]\u00de[/font][/vbox][vbox][font font='technique outline' size=350]\u00df[/font][/vbox][vbox][font font='technique outline' size=350]\u00e0[/font][/vbox][vbox][font font='technique outline' size=350]\u00e1[/font][/vbox][vbox][font font='technique outline' size=350]\u00e2[/font][/vbox][vbox][font font='technique outline' size=350]\u00e3[/font][/vbox][vbox][font font='technique outline' size=350]\u00e4[/font][/vbox][vbox][font font='technique outline' size=350]\u00e5[/font][/vbox][vbox][font font='technique outline' size=350]\u00e7[/font][/vbox][vbox][font font='technique outline' size=350]\u00e8[/font][/vbox][vbox][font font='technique outline' size=350]\u00e9[/font][/vbox][vbox][font font='technique outline' size=350]\u00ea[/font][/vbox][vbox][font font='technique outline' size=350]\u00eb[/font][/vbox][vbox][font font='technique outline' size=350]\u00ec[/font][/vbox][vbox][font font='technique outline' size=350]\u00ed[/font][/vbox][vbox][font font='technique outline' size=350]\u00ee[/font][/vbox][vbox][font font='technique outline' size=350]\u00ef[/font][/vbox][vbox][font font='technique outline' size=350]\u00f0[/font][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Techno Overload",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Techno Overload - by Aenigma Fonts/Techno Overload.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=6][vbox][font font='techno overload' size=350]\u00d0[/font][/vbox][vbox][font font='techno overload' size=350]\u00d1[/font][/vbox][vbox][font font='techno overload' size=350]\u00d2[/font][/vbox][vbox][font font='techno overload' size=350]\u00d3[/font][/vbox][vbox][font font='techno overload' size=350]\u00d4[/font][/vbox][vbox][font font='techno overload' size=350]\u00d5[/font][/vbox][vbox][font font='techno overload' size=350]\u00d6[/font][/vbox][vbox][font font='techno overload' size=350]\u00d7[/font][/vbox][vbox][font font='techno overload' size=350]\u00d8[/font][/vbox][vbox][font font='techno overload' size=350]\u00d9[/font][/vbox][vbox][font font='techno overload' size=350]\u00da[/font][/vbox][vbox][font font='techno overload' size=350]\u00db[/font][/vbox][vbox][font font='techno overload' size=350]\u00dc[/font][/vbox][vbox][font font='techno overload' size=350]\u00dd[/font][/vbox][vbox][font font='techno overload' size=350]\u00de[/font][/vbox][vbox][font font='techno overload' size=350]\u00df[/font][/vbox][vbox][font font='techno overload' size=350]\u00e0[/font][/vbox][vbox][font font='techno overload' size=350]\u00e1[/font][/vbox][vbox][font font='techno overload' size=350]\u00e2[/font][/vbox][vbox][font font='techno overload' size=350]\u00e3[/font][/vbox][vbox][font font='techno overload' size=350]\u00e4[/font][/vbox][vbox][font font='techno overload' size=350]\u00e5[/font][/vbox][vbox][font font='techno overload' size=350]\u00e7[/font][/vbox][vbox][font font='techno overload' size=350]\u00e8[/font][/vbox][vbox][font font='techno overload' size=350]\u00e9[/font][/vbox][vbox][font font='techno overload' size=350]\u00ea[/font][/vbox][vbox][font font='techno overload' size=350]\u00eb[/font][/vbox][vbox][font font='techno overload' size=350]\u00ec[/font][/vbox][vbox][font font='techno overload' size=350]\u00ed[/font][/vbox][vbox][font font='techno overload' size=350]\u00ee[/font][/vbox][vbox][font font='techno overload' size=350]\u00ef[/font][/vbox][vbox][font font='techno overload' size=350]\u00f0[/font][/vbox][vbox][font font='techno overload' size=350]\u00f1[/font][/vbox][vbox][font font='techno overload' size=350]\u00f2[/font][/vbox][vbox][font font='techno overload' size=350]\u00f3[/font][/vbox][vbox][font font='techno overload' size=350]\u00f4[/font][/vbox][vbox][font font='techno overload' size=350]\u00f5[/font][/vbox][vbox][font font='techno overload' size=350]\u00f6[/font][/vbox][vbox][font font='techno overload' size=350]\u00f7[/font][/vbox][vbox][font font='techno overload' size=350]\u00f8[/font][/vbox][vbox][font font='techno overload' size=350]\u00f9[/font][/vbox][vbox][font font='techno overload' size=350]\u00fa[/font][/vbox][vbox][font font='techno overload' size=350]\u00fb[/font][/vbox][vbox][font font='techno overload' size=350]\u00fc[/font][/vbox][vbox][font font='techno overload' size=350]\u00fd[/font][/vbox][vbox][font font='techno overload' size=350]\u00fe[/font][/vbox][vbox][font font='techno overload' size=350]\u00ff[/font][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Narrow Chars",
		"Ornamental",
		"Rounded Chars",
		"Rounded Edges"
	]
},
{
	"name":"Telephasic",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Telephasic - by Aenigma Fonts/Telephasic.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Plain",
		"Rounded Chars",
		"Wide Chars"
	]
},
{
	"name":"Terry Script",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Terry Script.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Broken Letters",
		"Handwriting",
		"No Lowercase",
		"Partial Symbol Set",
		"Slanted",
		"Uneven Chars"
	]
},
{
	"name":"Terylene Top",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Terylene Top.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"3D",
		"Decorated",
		"Diamond",
		"Hard To Read",
		"Ornamental",
		"Partial Symbol Set",
		"Playful"
	]
},
{
	"name":"Tetricide",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Tetricide - by Aenigma Fonts/Tetricide.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Pixelated",
		"Retro"
	]
},
{
	"name":"That Secret Feeling",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/That Secret Feeling.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Hard To Read",
		"Negative Space",
		"Ornamental",
		"Partial Symbol Set",
		"Playful",
		"Shadow",
		"Striped"
	]
},
{
	"name":"Thiamine",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Thiamine.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"No Uppercase",
		"Ornamental",
		"Partial Symbol Set",
		"Uneven Chars"
	]
},
{
	"name":"Thwart",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Thwart - by Aenigma Fonts/Thwart.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Decay",
		"Rounded Edges"
	]
},
{
	"name":"Tinsnips",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Tinsnips.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Decorated",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Stencil",
		"Uneven Chars"
	]
},
{
	"name":"Tobin Tax",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Tobin Tax.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Broken Letters",
		"Decorated",
		"Hard To Read",
		"Leading Left Hook",
		"Ornamental",
		"Partial Symbol Set",
		"Rounded Chars"
	]
},
{
	"name":"Tommy Gun",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Tommy Gun.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Distorted",
		"Partial Symbol Set",
		"Playful",
		"Rounded Edges",
		"Uneven Chars"
	]
},
{
	"name":"Tonik",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Tonik - by Aenigma Fonts/Tonik.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Broken Letters",
		"Ornamental",
		"Striped",
		"Wide Chars"
	]
},
{
	"name":"Top Bond",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Top Bond.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Distressed",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"Tork",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Tork.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Tork Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Tork Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Tork Bold Italic.otf",
			"style":"italic",
			"weight":"bold"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Curvy Letters",
		"Leading Left Hook",
		"Plain"
	]
},
{
	"name":"TRAGIC",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/TRAGIC - by Aenigma Fonts/TRAGIC.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Trapper John",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Trapper John.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"No Lowercase",
		"Ornamental"
	]
},
{
	"name":"Triac 71",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Triac 71.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Narrow Chars",
		"Ornamental",
		"Plain"
	]
},
{
	"name":"Triangle",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Triangle.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Partial Symbol Set",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"Troll Bait",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Troll Bait.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Decorated",
		"Gothic",
		"Negative Space",
		"No Uppercase",
		"Outline",
		"Partial Symbol Set",
		"Uneven Chars"
	]
},
{
	"name":"TRS Million",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/TRS Million.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Composite Font",
		"Dotted",
		"No Lowercase",
		"Ornamental",
		"Retro"
	]
},
{
	"name":"TRS Million - Twinkle",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/TRS Million - Twinkle.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Symbols Only",
		"Composite Font"
	]
},
{
	"name":"Turmoil",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Turmoil - by Aenigma Fonts/Turmoil.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distorted",
		"Partial Symbol Set",
		"Rounded Edges",
		"Slanted",
		"Uneven Chars"
	]
},
{
	"name":"Typesource Extol Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Typesource Extol - by Aenigma Fonts/Typesource Extol Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Outline",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Typesource Extol Solid",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Typesource Extol - by Aenigma Fonts/Typesource Extol Solid.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Ubiquity",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Ubiquity - by Aenigma Fonts/Ubiquity.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Ornamental",
		"Outline"
	]
},
{
	"name":"Ubuntu",
	"authors":[
		"Dalton Maag"
	],
	"variants":[
		{
			"path":"Ubuntu - by Dalton Maag/Ubuntu Light.ttf",
			"style":"normal",
			"weight":"300"
		},
		{
			"path":"Ubuntu - by Dalton Maag/Ubuntu Light Italic.ttf",
			"style":"italic",
			"weight":"300"
		},
		{
			"path":"Ubuntu - by Dalton Maag/Ubuntu.ttf",
			"style":"normal",
			"weight":"400"
		},
		{
			"path":"Ubuntu - by Dalton Maag/Ubuntu Italic.ttf",
			"style":"italic",
			"weight":"400"
		},
		{
			"path":"Ubuntu - by Dalton Maag/Ubuntu Medium.ttf",
			"style":"normal",
			"weight":"500"
		},
		{
			"path":"Ubuntu - by Dalton Maag/Ubuntu Medium Italic.ttf",
			"style":"italic",
			"weight":"500"
		},
		{
			"path":"Ubuntu - by Dalton Maag/Ubuntu Bold.ttf",
			"style":"normal",
			"weight":"600"
		},
		{
			"path":"Ubuntu - by Dalton Maag/Ubuntu Bold Italic.ttf",
			"style":"italic",
			"weight":"600"
		}
	],
	"license":"Ubuntu Font Licence",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"Ubuntu Condensed",
	"authors":[
		"Dalton Maag"
	],
	"variants":[
		{
			"path":"Ubuntu Condensed - by Dalton Maag/Ubuntu Condensed.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Ubuntu Font Licence",
	"tags":[
		"Sans-Serif",
		"Formal",
		"Narrow Chars",
		"Plain"
	]
},
{
	"name":"Umbrage",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Umbrage.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decay",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Unanimous",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Unanimous - by Aenigma Fonts/Unanimous.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Negative Space",
		"Outline",
		"Plain",
		"Rounded Chars"
	]
},
{
	"name":"Unanimous Inverted",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Unanimous - by Aenigma Fonts/Unanimous Inverted.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Plain",
		"Rounded Chars"
	]
},
{
	"name":"Underscore",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Underscore - by Aenigma Fonts/Underscore.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Use an underscore [color fg=f74]_[/color] to continue the underline between words.[br][br]Extra characters:[br][grid cols=6][vbox][size font='underscore' size=350]\u00a1[/size][/vbox][vbox][size font='underscore' size=350]\u00a2[/size][/vbox][vbox][size font='underscore' size=350]\u00a3[/size][/vbox][vbox][size font='underscore' size=350]\u00a5[/size][/vbox][vbox][size font='underscore' size=350]\u0160[/size][/vbox][vbox][size font='underscore' size=350]\u00a7[/size][/vbox][vbox][size font='underscore' size=350]\u0161[/size][/vbox][vbox][size font='underscore' size=350]\u00a9[/size][/vbox][vbox][size font='underscore' size=350]\u00aa[/size][/vbox][vbox][size font='underscore' size=350]\u00ab[/size][/vbox][vbox][size font='underscore' size=350]\u00ac[/size][/vbox][vbox][size font='underscore' size=350]\u00ae[/size][/vbox][vbox][size font='underscore' size=350]\u00b0[/size][/vbox][vbox][size font='underscore' size=350]\u00b1[/size][/vbox][vbox][size font='underscore' size=350]\u00b2[/size][/vbox][vbox][size font='underscore' size=350]\u00b3[/size][/vbox][vbox][size font='underscore' size=350]\u00ba[/size][/vbox][vbox][size font='underscore' size=350]\u00bb[/size][/vbox][vbox][size font='underscore' size=350]\u0152[/size][/vbox][vbox][size font='underscore' size=350]\u0153[/size][/vbox][vbox][size font='underscore' size=350]\u0178[/size][/vbox][vbox][size font='underscore' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Decorated",
		"Ornamental"
	]
},
{
	"name":"Underscore 2",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Underscore - by Aenigma Fonts/Underscore 2.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Use an underscore [color fg=f74]_[/color] to continue the underline between words.[br][br]Extra characters:[br][grid cols=6][vbox][size font='underscore 2' size=350]\u00a1[/size][/vbox][vbox][size font='underscore 2' size=350]\u00a2[/size][/vbox][vbox][size font='underscore 2' size=350]\u00a3[/size][/vbox][vbox][size font='underscore 2' size=350]\u00a5[/size][/vbox][vbox][size font='underscore 2' size=350]\u0160[/size][/vbox][vbox][size font='underscore 2' size=350]\u00a7[/size][/vbox][vbox][size font='underscore 2' size=350]\u0161[/size][/vbox][vbox][size font='underscore 2' size=350]\u00a9[/size][/vbox][vbox][size font='underscore 2' size=350]\u00aa[/size][/vbox][vbox][size font='underscore 2' size=350]\u00ab[/size][/vbox][vbox][size font='underscore 2' size=350]\u00ac[/size][/vbox][vbox][size font='underscore 2' size=350]\u00ae[/size][/vbox][vbox][size font='underscore 2' size=350]\u00b0[/size][/vbox][vbox][size font='underscore 2' size=350]\u00b1[/size][/vbox][vbox][size font='underscore 2' size=350]\u00b2[/size][/vbox][vbox][size font='underscore 2' size=350]\u00b3[/size][/vbox][vbox][size font='underscore 2' size=350]\u00ba[/size][/vbox][vbox][size font='underscore 2' size=350]\u00bb[/size][/vbox][vbox][size font='underscore 2' size=350]\u0152[/size][/vbox][vbox][size font='underscore 2' size=350]\u0153[/size][/vbox][vbox][size font='underscore 2' size=350]\u0178[/size][/vbox][vbox][size font='underscore 2' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Decorated",
		"Ornamental"
	]
},
{
	"name":"Underwhelmed",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Underwhelmed - by Aenigma Fonts/Underwhelmed.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Partial Symbol Set",
		"Rounded Chars",
		"Thick Stroke"
	]
},
{
	"name":"Underwhelmed Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Underwhelmed - by Aenigma Fonts/Underwhelmed Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Negative Space",
		"Outline",
		"Partial Symbol Set",
		"Rounded Chars",
		"Thick Stroke"
	]
},
{
	"name":"Underwood Champion",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Underwood Champion.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Distorted",
		"Monospace",
		"Ornamental",
		"Partial Symbol Set",
		"Typewriter"
	]
},
{
	"name":"Unexplored Galaxies",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Unexplored Galaxies - by Aenigma Fonts/Unexplored Galaxies.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Alien",
		"Rounded Edges"
	]
},
{
	"name":"Unexplored Galaxies Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Unexplored Galaxies - by Aenigma Fonts/Unexplored Galaxies Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Alien",
		"Negative Space",
		"Outline",
		"Rounded Edges"
	]
},
{
	"name":"Unexplored Galaxies Wide",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Unexplored Galaxies - by Aenigma Fonts/Unexplored Galaxies Wide.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Alien",
		"Rounded Edges",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Unexplored Galaxies Wide Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Unexplored Galaxies - by Aenigma Fonts/Unexplored Galaxies Wide Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Alien",
		"Negative Space",
		"Outline",
		"Rounded Edges",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Union City Blue",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Union City Blue.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"No Lowercase",
		"Ornamental",
		"Rounded Chars"
	]
},
{
	"name":"UNITED",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/UNITED - by Aenigma Fonts/UNITED.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"[color fg=aaa]In memory of the innocent victims who lost their lives on[/color][br][b][color fg=f00]September[/color] [color fg=fff]11th,[/color] [color fg=13f]2001.[/color][/b]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Texture",
		"Thick Stroke",
		"U.S.A."
	]
},
{
	"name":"Univox",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Univox.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Hard To Read",
		"Ornamental",
		"Wide Chars"
	]
},
{
	"name":"Unlearned",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Unlearned - by Aenigma Fonts/Unlearned.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Outline",
		"Pixelated",
		"Retro",
		"Thick Stroke"
	]
},
{
	"name":"Unlearned 2",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Unlearned - by Aenigma Fonts/Unlearned 2.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Outline",
		"Retro",
		"Thick Stroke"
	]
},
{
	"name":"Unresponsive",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Unresponsive - by Aenigma Fonts/Unresponsive.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Distressed",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Upheaval",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Upheaval - by Aenigma Fonts/Upheaval.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"No Lowercase",
		"Pixelated",
		"Retro",
		"Thick Stroke"
	]
},
{
	"name":"Upraise",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Upraise - by Aenigma Fonts/Upraise.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=4][vbox][size font='upraise' size=350]\u00c8[/size][/vbox][vbox][size font='upraise' size=350]\u00c9[/size][/vbox][vbox][size font='upraise' size=350]\u00ca[/size][/vbox][vbox][size font='upraise' size=350]\u00cb[/size][/vbox][vbox][size font='upraise' size=350]\u00cc[/size][/vbox][vbox][size font='upraise' size=350]\u00cd[/size][/vbox][vbox][size font='upraise' size=350]\u00ce[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Hard To Read",
		"Ornamental"
	]
},
{
	"name":"Ur Ur Ma",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Ur Ur Ma.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"3D",
		"Calligraphy",
		"Narrow Chars",
		"No Uppercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Urkelian",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Urkelian.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Narrow Chars",
		"Ornamental"
	]
},
{
	"name":"Vacant Capz",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Vacant Capz - by Aenigma Fonts/Vacant Capz.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Partial Symbol Set",
		"Playful"
	]
},
{
	"name":"Vahika",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Vahika.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Vahika Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Vahika Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Vahika Bold Italic.otf",
			"style":"italic",
			"weight":"bold"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Formal",
		"Plain"
	]
},
{
	"name":"Vanished",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Vanished - by Aenigma Fonts/Vanished.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distressed",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Vantage",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Vantage - by Aenigma Fonts/Vantage.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=3][vbox][size font='vantage' size=350]\u0153[/size][/vbox][vbox][size font='vantage' size=350]\u0178[/size][/vbox][vbox][size font='vantage' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Calligraphy",
		"Slanted"
	]
},
{
	"name":"Variance",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Variance - by Aenigma Fonts/Variance.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Partial Symbol Set"
	]
},
{
	"name":"Vectroid",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Vectroid.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Hard To Read",
		"Ornamental",
		"Playful",
		"Thick Stroke"
	]
},
{
	"name":"Vertigo",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Vertigo - by Aenigma Fonts/Vertigo.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=5][vbox][size font='vertigo' size=350]\u00c8[/size][/vbox][vbox][size font='vertigo' size=350]\u00c9[/size][/vbox][vbox][size font='vertigo' size=350]\u00ca[/size][/vbox][vbox][size font='vertigo' size=350]\u00cb[/size][/vbox][vbox][size font='vertigo' size=350]\u00cc[/size][/vbox][vbox][size font='vertigo' size=350]\u00cd[/size][/vbox][vbox][size font='vertigo' size=350]\u00ce[/size][/vbox][vbox][size font='vertigo' size=350]\u00cf[/size][/vbox][vbox][size font='vertigo' size=350]\u00d0[/size][/vbox][vbox][size font='vertigo' size=350]\u00d1[/size][/vbox][vbox][size font='vertigo' size=350]\u00d2[/size][/vbox][vbox][size font='vertigo' size=350]\u00d3[/size][/vbox][vbox][size font='vertigo' size=350]\u00d4[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Hard To Read",
		"Negative Space",
		"Outline",
		"Sideways",
		"Thick Stroke"
	]
},
{
	"name":"Vertigo 2",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Vertigo - by Aenigma Fonts/Vertigo 2.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=5][vbox][size font='vertigo 2' size=350]\u00c8[/size][/vbox][vbox][size font='vertigo 2' size=350]\u00c9[/size][/vbox][vbox][size font='vertigo 2' size=350]\u00ca[/size][/vbox][vbox][size font='vertigo 2' size=350]\u00cb[/size][/vbox][vbox][size font='vertigo 2' size=350]\u00cc[/size][/vbox][vbox][size font='vertigo 2' size=350]\u00cd[/size][/vbox][vbox][size font='vertigo 2' size=350]\u00ce[/size][/vbox][vbox][size font='vertigo 2' size=350]\u00cf[/size][/vbox][vbox][size font='vertigo 2' size=350]\u00d0[/size][/vbox][vbox][size font='vertigo 2' size=350]\u00d1[/size][/vbox][vbox][size font='vertigo 2' size=350]\u00d2[/size][/vbox][vbox][size font='vertigo 2' size=350]\u00d3[/size][/vbox][vbox][size font='vertigo 2' size=350]\u00d4[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Hard To Read",
		"Sideways",
		"Thick Stroke"
	]
},
{
	"name":"Vertigo Upright",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Vertigo - by Aenigma Fonts/Vertigo Upright.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=5][vbox][size font='vertigo upright' size=350]\u00c8[/size][/vbox][vbox][size font='vertigo upright' size=350]\u00c9[/size][/vbox][vbox][size font='vertigo upright' size=350]\u00ca[/size][/vbox][vbox][size font='vertigo upright' size=350]\u00cb[/size][/vbox][vbox][size font='vertigo upright' size=350]\u00cc[/size][/vbox][vbox][size font='vertigo upright' size=350]\u00cd[/size][/vbox][vbox][size font='vertigo upright' size=350]\u00ce[/size][/vbox][vbox][size font='vertigo upright' size=350]\u00cf[/size][/vbox][vbox][size font='vertigo upright' size=350]\u00d0[/size][/vbox][vbox][size font='vertigo upright' size=350]\u00d1[/size][/vbox][vbox][size font='vertigo upright' size=350]\u00d2[/size][/vbox][vbox][size font='vertigo upright' size=350]\u00d3[/size][/vbox][vbox][size font='vertigo upright' size=350]\u00d4[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Negative Space",
		"Outline",
		"Thick Stroke"
	]
},
{
	"name":"Vertigo Upright 2",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Vertigo - by Aenigma Fonts/Vertigo Upright 2.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=5][vbox][size font='vertigo upright 2' size=350]\u00c8[/size][/vbox][vbox][size font='vertigo upright 2' size=350]\u00c9[/size][/vbox][vbox][size font='vertigo upright 2' size=350]\u00ca[/size][/vbox][vbox][size font='vertigo upright 2' size=350]\u00cb[/size][/vbox][vbox][size font='vertigo upright 2' size=350]\u00cc[/size][/vbox][vbox][size font='vertigo upright 2' size=350]\u00cd[/size][/vbox][vbox][size font='vertigo upright 2' size=350]\u00ce[/size][/vbox][vbox][size font='vertigo upright 2' size=350]\u00cf[/size][/vbox][vbox][size font='vertigo upright 2' size=350]\u00d0[/size][/vbox][vbox][size font='vertigo upright 2' size=350]\u00d1[/size][/vbox][vbox][size font='vertigo upright 2' size=350]\u00d2[/size][/vbox][vbox][size font='vertigo upright 2' size=350]\u00d3[/size][/vbox][vbox][size font='vertigo upright 2' size=350]\u00d4[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Thick Stroke"
	]
},
{
	"name":"Vibrocentric",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Vibrocentric.otf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Vibrocentric Italic.otf",
			"style":"italic",
			"weight":"normal"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Vibrocentric Bold.otf",
			"style":"normal",
			"weight":"bold"
		},
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Vibrocentric Bold Italic.otf",
			"style":"italic",
			"weight":"bold"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Block Shaped",
		"Formal",
		"Plain",
		"Wide Chars"
	]
},
{
	"name":"Vigilance",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Vigilance - by Aenigma Fonts/Vigilance.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=6][vbox][size font='vigilance' size=350]\u00ac[/size][/vbox][vbox][size font='vigilance' size=350]\u00ae[/size][/vbox][vbox][size font='vigilance' size=350]\u00af[/size][/vbox][vbox][size font='vigilance' size=350]\u00b0[/size][/vbox][vbox][size font='vigilance' size=350]\u00b1[/size][/vbox][vbox][size font='vigilance' size=350]\u00b2[/size][/vbox][vbox][size font='vigilance' size=350]\u00b3[/size][/vbox][vbox][size font='vigilance' size=350]\u00b5[/size][/vbox][vbox][size font='vigilance' size=350]\u00b6[/size][/vbox][vbox][size font='vigilance' size=350]\u00b7[/size][/vbox][vbox][size font='vigilance' size=350]\u00b9[/size][/vbox][vbox][size font='vigilance' size=350]\u00ba[/size][/vbox][vbox][size font='vigilance' size=350]\u00bb[/size][/vbox][vbox][size font='vigilance' size=350]\u0152[/size][/vbox][vbox][size font='vigilance' size=350]\u0153[/size][/vbox][vbox][size font='vigilance' size=350]\u0178[/size][/vbox][vbox][size font='vigilance' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped"
	]
},
{
	"name":"Vindictive",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Vindictive - by Aenigma Fonts/Vindictive.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Distressed",
		"Playful",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"virgo.01",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/virgo.01.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Broken Letters",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Rounded Chars",
		"Thick Stroke"
	]
},
{
	"name":"Visitor 1",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Visitor - by Aenigma Fonts/Visitor 1.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"No Lowercase",
		"Pixelated",
		"Retro"
	]
},
{
	"name":"Visitor 2",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Visitor - by Aenigma Fonts/Visitor 2.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"No Lowercase",
		"Pixelated",
		"Retro"
	]
},
{
	"name":"Vive la Rivoluzione",
	"authors":[
		"A J Paglia"
	],
	"variants":[
		{
			"path":"_A J Paglia Fonts/Free Fonts/Vive la Rivoluzione.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"No Lowercase",
		"Partial Symbol Set",
		"Plain",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Volatile 1",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Volatile - by Aenigma Fonts/Volatile 1.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Holiday",
		"Negative Space",
		"Ornamental",
		"Striped",
		"Thick Stroke"
	]
},
{
	"name":"Volatile 2",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Volatile - by Aenigma Fonts/Volatile 2.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Ornamental",
		"Striped",
		"Thick Stroke"
	]
},
{
	"name":"Wager",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Wager - by Aenigma Fonts/Wager.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Narrow Chars",
		"Thick Stroke"
	]
},
{
	"name":"Wager Lost",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Wager - by Aenigma Fonts/Wager Lost.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Narrow Chars",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Wager Won",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Wager - by Aenigma Fonts/Wager Won.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Waker",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Waker.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Curvy Letters",
		"Decorated",
		"Ornamental",
		"Partial Symbol Set",
		"Playful",
		"Swirl",
		"Uneven Chars"
	]
},
{
	"name":"Walshes",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Walshes.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Angular",
		"Halloween",
		"Partial Symbol Set"
	]
},
{
	"name":"Waver",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Waver - by Aenigma Fonts/Waver.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distorted",
		"Negative Space",
		"No Symbols",
		"Ornamental",
		"Striped",
		"Thick Stroke",
		"U.S.A."
	]
},
{
	"name":"Wayward",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Wayward - by Aenigma Fonts/Wayward.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Narrow Chars"
	]
},
{
	"name":"Wayward Shadow",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Wayward - by Aenigma Fonts/Wayward Shadow.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Narrow Chars",
		"Negative Space",
		"Offset",
		"Outline"
	]
},
{
	"name":"Weathered",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Weathered - by Aenigma Fonts/Weathered.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decay",
		"Negative Space",
		"Ornamental",
		"Outline",
		"Thick Stroke"
	]
},
{
	"name":"Weathered Solid",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Weathered - by Aenigma Fonts/Weathered Solid.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"Weaver",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Weaver - by Aenigma Fonts/Weaver.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distorted",
		"Hard To Read",
		"Ornamental"
	]
},
{
	"name":"Web Symbols",
	"authors":[
		"Just Be Nice Studio"
	],
	"variants":[
		{
			"path":"Web Symbols - by Just Be Nice Studio/Web Symbols.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Symbols Only"
	]
},
{
	"name":"WebHostingHub Glyphs",
	"authors":[
		"Web Hosting Hub"
	],
	"variants":[
		{
			"path":"WebHostingHub Glyphs - by Web Hosting Hub/WebHostingHub Glyphs.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"SIL Open Font License",
	"tags":[
		"Symbols Only",
		"Faces"
	]
},
{
	"name":"Webster World",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Webster World.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Decorated",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Outline",
		"Partial Symbol Set",
		"Shadow"
	]
},
{
	"name":"Wee Bairn",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Wee Bairn.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Playful",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Welfare Brat",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Welfare Brat.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Hard To Read",
		"Monospace",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Wet Pet",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Wet Pet.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Decay",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Whatever",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Whatever - by Aenigma Fonts/Whatever.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=6][vbox][size font='whatever' size=350]\u00a1[/size][/vbox][vbox][size font='whatever' size=350]\u00a2[/size][/vbox][vbox][size font='whatever' size=350]\u00a3[/size][/vbox][vbox][size font='whatever' size=350]\u00a5[/size][/vbox][vbox][size font='whatever' size=350]\u0160[/size][/vbox][vbox][size font='whatever' size=350]\u00a7[/size][/vbox][vbox][size font='whatever' size=350]\u0161[/size][/vbox][vbox][size font='whatever' size=350]\u00a9[/size][/vbox][vbox][size font='whatever' size=350]\u00aa[/size][/vbox][vbox][size font='whatever' size=350]\u00ab[/size][/vbox][vbox][size font='whatever' size=350]\u00ac[/size][/vbox][vbox][size font='whatever' size=350]\u00ae[/size][/vbox][vbox][size font='whatever' size=350]\u00af[/size][/vbox][vbox][size font='whatever' size=350]\u00b0[/size][/vbox][vbox][size font='whatever' size=350]\u00b1[/size][/vbox][vbox][size font='whatever' size=350]\u00b2[/size][/vbox][vbox][size font='whatever' size=350]\u00b3[/size][/vbox][vbox][size font='whatever' size=350]\u00b5[/size][/vbox][vbox][size font='whatever' size=350]\u00b6[/size][/vbox][vbox][size font='whatever' size=350]\u00b7[/size][/vbox][vbox][size font='whatever' size=350]\u00b9[/size][/vbox][vbox][size font='whatever' size=350]\u00ba[/size][/vbox][vbox][size font='whatever' size=350]\u00bb[/size][/vbox][vbox][size font='whatever' size=350]\u0152[/size][/vbox][vbox][size font='whatever' size=350]\u0153[/size][/vbox][vbox][size font='whatever' size=350]\u0178[/size][/vbox][vbox][size font='whatever' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"No Lowercase",
		"Ornamental",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Where Is The Rest",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Where Is The Rest.ttf",
			"style":"normal",
			"weight":"normal"
		},
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Where Is The Rest Italic.ttf",
			"style":"italic",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Ornamental",
		"Partial Symbol Set",
		"Striped",
		"Thick Stroke"
	]
},
{
	"name":"Whippersnapper",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Whippersnapper - by Aenigma Fonts/Whippersnapper.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Plain",
		"Rounded Chars",
		"Rounded Edges"
	]
},
{
	"name":"White Lake",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/White Lake.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Curvy Letters",
		"Hard To Read",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Whitehall",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Whitehall.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Handwriting",
		"Partial Symbol Set",
		"Plain"
	]
},
{
	"name":"Whiterock",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Whiterock.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Curvy Letters",
		"Plain",
		"Playful",
		"Thick Stroke",
		"Uneven Chars"
	]
},
{
	"name":"Wicked Grit",
	"authors":[
		"A J Paglia"
	],
	"variants":[
		{
			"path":"_A J Paglia Fonts/Free Fonts/Wicked Grit.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set",
		"Texture",
		"Thick Stroke"
	]
},
{
	"name":"Wicked Scary Movie",
	"authors":[
		"A J Paglia"
	],
	"variants":[
		{
			"path":"_A J Paglia Fonts/Free Fonts/Wicked Scary Movie.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distressed",
		"Halloween",
		"Partial Symbol Set",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"Wiggly Squiggly",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Wiggly Squiggly - by Aenigma Fonts/Wiggly Squiggly.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Distorted",
		"Narrow Chars",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Wild Sewerage",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Wild Sewerage.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Decay",
		"Decorated",
		"Distorted",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Wincing",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Wincing - by Aenigma Fonts/Wincing.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Decorated",
		"Heart",
		"Negative Space",
		"Ornamental"
	]
},
{
	"name":"Windpower",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Windpower.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Leading Left Hook",
		"No Lowercase",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"Wintermute",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Wintermute.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Broken Letters",
		"No Uppercase",
		"Ornamental"
	]
},
{
	"name":"Withstand",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Withstand - by Aenigma Fonts/Withstand.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"3D",
		"Rounded Edges",
		"Slanted",
		"Thick Stroke"
	]
},
{
	"name":"Wobbly",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Wobbly - by Aenigma Fonts/Wobbly.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distorted",
		"No Symbols",
		"Thick Stroke"
	]
},
{
	"name":"Worthless",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Worthless.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Distorted",
		"Halloween",
		"Narrow Chars"
	]
},
{
	"name":"Wyvern Wings",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Wyvern Wings - by Aenigma Fonts/Wyvern Wings.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=4][vbox][size font='wyvern wings' size=350]\u00b9[/size][/vbox][vbox][size font='wyvern wings' size=350]\u00ba[/size][/vbox][vbox][size font='wyvern wings' size=350]\u00bb[/size][/vbox][vbox][size font='wyvern wings' size=350]\u0152[/size][/vbox][vbox][size font='wyvern wings' size=350]\u0153[/size][/vbox][vbox][size font='wyvern wings' size=350]\u0178[/size][/vbox][vbox][size font='wyvern wings' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Halloween",
		"Hard To Read",
		"Narrow Chars",
		"Ornamental"
	]
},
{
	"name":"Wyvern Wings Wyde",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Wyvern Wings - by Aenigma Fonts/Wyvern Wings Wyde.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=4][vbox][size font='wyvern wings wyde' size=350]\u00b9[/size][/vbox][vbox][size font='wyvern wings wyde' size=350]\u00ba[/size][/vbox][vbox][size font='wyvern wings wyde' size=350]\u00bb[/size][/vbox][vbox][size font='wyvern wings wyde' size=350]\u0152[/size][/vbox][vbox][size font='wyvern wings wyde' size=350]\u0153[/size][/vbox][vbox][size font='wyvern wings wyde' size=350]\u0178[/size][/vbox][vbox][size font='wyvern wings wyde' size=350]\u00bf[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Halloween",
		"Hard To Read",
		"Ornamental"
	]
},
{
	"name":"Xenophone",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Xenophone.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decay",
		"Decorated",
		"No Lowercase",
		"No Symbols",
		"Ornamental"
	]
},
{
	"name":"Xenowort",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Xenowort.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Decorated",
		"Hard To Read",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Xerox Malfunction",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Xerox Malfunction - by Aenigma Fonts/Xerox Malfunction.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=2][vbox][b fg=f42]-[/b][size font='xerox malfunction' size=350]-[/size][/vbox][vbox][b fg=f42]=[/b][size font='xerox malfunction' size=350]=[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Ornamental",
		"Partial Symbol Set",
		"Smudged",
		"Thick Stroke"
	]
},
{
	"name":"Xhume",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Xhume - by Aenigma Fonts/Xhume.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Partial Symbol Set",
		"Rounded Edges",
		"Thick Stroke"
	]
},
{
	"name":"Xipital",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Xipital - by Aenigma Fonts/Xipital.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Rounded Edges",
		"Typewriter",
		"Wide Chars"
	]
},
{
	"name":"Xmas Lights",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Xmas Lights - by Aenigma Fonts/Xmas Lights.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"[font font='xmas lights' size=500]\u00cf\u00caXM\u00caAS\u00cd\u00caLIG\u00caHT\u00caS\u00ce[/font][br][br][size size=80]The text above was generated by: [icode]\u00cf\u00caXM\u00caAS\u00cd\u00caLIG\u00caHT\u00caS\u00ce[/icode][/size][br][br]To use, start with an opening plug tip character:[br][grid cols=1][vbox][color fg=f74]\u00cf[/color][font size=350 font='xmas lights']\u00cf[/font][/vbox][/grid][br][br]Next, type your message in alphanumeric characters and symbols:[br][grid cols=1][vbox][color fg=f74]test?[/color][font font='xmas lights' size=350]test?[/font][/vbox][/grid][br][br]To add 'Blink' lines above a character, type a [color fg=f74]\u00ca[/color] before the character:[br][grid cols=1][vbox][color fg=f74]\u00cate\u00cast\u00ca?[/color][font font='xmas lights' size=350]\u00cate\u00cast\u00ca?[/font][/vbox][/grid][br][br]If needed, there are two blank light characters:[br][grid cols=2][vbox][color fg=f74]\u00c8[/color][size font='xmas lights' size=350]\u00c8[/size][/vbox][vbox][color fg=f74]\u00c9[/color][size font='xmas lights' size=350]\u00c9[/size][/vbox][/grid][br][br]Normal spaces are blank and will break the wire at the bottom of the lights.[br]The following characters can be used for spaces with a continuous wire:[br][grid cols=3][vbox][color fg=f74]\u00cb[/color][size font='xmas lights' size=350]\u00cb[/size][/vbox][vbox][color fg=f74]\u00cc[/color][size font='xmas lights' size=350]\u00cc[/size][/vbox][vbox][color fg=f74]\u00cd[/color][size font='xmas lights' size=350]\u00cd[/size][/vbox][/grid][br][br]Finally, finish with a closing plug tip character:[br][grid cols=1][vbox][color fg=f74]\u00ce[/color][font size=350 font='xmas lights']\u00ce[/font][/vbox][/grid][br][br][br][br]Here are all the extra characters together, for reference:[br][grid cols=3][vbox][color fg=f74]\t\u00c8\t[/color][size font='xmas lights' size=350]\u00c8[/size][/vbox][vbox][color fg=f74]\u00c9[/color][size font='xmas lights' size=350]\u00c9[/size][/vbox][vbox][color fg=f74]\u00ca[/color][size font='xmas lights' size=350]\u00ca[/size][/vbox][vbox][color fg=f74]\u00cb[/color][size font='xmas lights' size=350]\u00cb[/size][/vbox][vbox][color fg=f74]\u00cc[/color][size font='xmas lights' size=350]\u00cc[/size][/vbox][vbox][color fg=f74]\u00cd[/color][size font='xmas lights' size=350]\u00cd[/size][/vbox][vbox][color fg=f74]\u00cf[/color][size font='xmas lights' size=350]\u00cf[/size][/vbox][vbox][color fg=f74]\u00ce[/color][size font='xmas lights' size=350]\u00ce[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Holiday",
		"Monospace",
		"No Lowercase",
		"Ornamental"
	]
},
{
	"name":"Xolto",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Xolto.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Block Shaped",
		"Hard To Read",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Xtraflexidisc",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Xtraflexidisc.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Handwriting",
		"Narrow Chars",
		"Partial Symbol Set",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"Xtrusion",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Xtrusion - by Aenigma Fonts/Xtrusion.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"3D",
		"Decorated",
		"Negative Space",
		"Ornamental",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Y-Band Tuner",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Y-Band Tuner.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Block Shaped",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Y2K Bug",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Y2Kbug.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Broken Letters",
		"Hard To Read",
		"No Lowercase",
		"Ornamental",
		"Playful"
	]
},
{
	"name":"Yadou",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Yadou.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Negative Space",
		"Offset",
		"Outline",
		"Partial Symbol Set",
		"Thick Stroke",
		"Wide Chars"
	]
},
{
	"name":"Yawnovision",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Yawnovision.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Gothic",
		"Halloween",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Yearend",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Yearend - by Aenigma Fonts/Yearend.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=6][vbox][size font='yearend' size=350]\u00c8[/size][/vbox][vbox][size font='yearend' size=350]\u00c9[/size][/vbox][vbox][size font='yearend' size=350]\u00ca[/size][/vbox][vbox][size font='yearend' size=350]\u00cb[/size][/vbox][vbox][size font='yearend' size=350]\u00cc[/size][/vbox][vbox][size font='yearend' size=350]\u00cd[/size][/vbox][vbox][size font='yearend' size=350]\u00ce[/size][/vbox][vbox][size font='yearend' size=350]\u00cf[/size][/vbox][vbox][size font='yearend' size=350]\u00d0[/size][/vbox][vbox][size font='yearend' size=350]\u00d1[/size][/vbox][vbox][size font='yearend' size=350]\u00d2[/size][/vbox][vbox][size font='yearend' size=350]\u00d3[/size][/vbox][vbox][size font='yearend' size=350]\u00d4[/size][/vbox][vbox][size font='yearend' size=350]\u00d5[/size][/vbox][vbox][size font='yearend' size=350]\u00d6[/size][/vbox][vbox][size font='yearend' size=350]\u00d7[/size][/vbox][vbox][size font='yearend' size=350]\u00d8[/size][/vbox][vbox][size font='yearend' size=350]\u00d9[/size][/vbox][vbox][size font='yearend' size=350]\u00da[/size][/vbox][vbox][size font='yearend' size=350]\u00db[/size][/vbox][vbox][size font='yearend' size=350]\u00dc[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Ornamental"
	]
},
{
	"name":"Yellow Pills",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Yellow Pills.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Distressed",
		"Narrow Chars",
		"No Lowercase",
		"Ornamental",
		"Uneven Chars"
	]
},
{
	"name":"Yesterday",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Yesterday - by Aenigma Fonts/Yesterday.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Plain",
		"Thick Stroke"
	]
},
{
	"name":"Yielding",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Yielding - by Aenigma Fonts/Yielding.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Narrow Chars",
		"Thick Stroke"
	]
},
{
	"name":"Yonder",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Yonder - by Aenigma Fonts/Yonder.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Partial Symbol Set",
		"Playful",
		"Rounded Chars"
	]
},
{
	"name":"Yonder Recoil",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Yonder Recoil.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Broken Letters",
		"Hard To Read",
		"Multi-Stroke",
		"No Lowercase",
		"Ornamental"
	]
},
{
	"name":"Yoshi's Story Game Text",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Yoshi's Story Game Text - by Aenigma Fonts/Yoshi's Story Game Text.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Distorted",
		"Logo",
		"Partial Symbol Set",
		"Playful",
		"Thick Stroke"
	]
},
{
	"name":"Your Complex",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Your Complex - by Aenigma Fonts'/Your Complex.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Narrow Chars",
		"Plain"
	]
},
{
	"name":"Your Complex I",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Your Complex - by Aenigma Fonts'/Your Complex I.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Bevel",
		"Broken Letters",
		"Narrow Chars",
		"Ornamental"
	]
},
{
	"name":"Your Complex O",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Your Complex - by Aenigma Fonts'/Your Complex O.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Bevel",
		"Narrow Chars",
		"Negative Space",
		"Ornamental"
	]
},
{
	"name":"Yukarimobile",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Yukarimobile.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Serif",
		"Angular",
		"Anime",
		"Block Shaped",
		"Broken Letters",
		"No Uppercase",
		"Partial Symbol Set",
		"Thick Stroke"
	]
},
{
	"name":"Yytrium",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Yytrium.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Composite Font",
		"Hard To Read",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Outline",
		"Partial Symbol Set",
		"Shadow"
	]
},
{
	"name":"Yytrium - Back",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Yytrium - Back.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Composite Font",
		"Hard To Read",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Yytrium - Front",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Yytrium - Front.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Composite Font",
		"Hard To Read",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Zacken",
	"authors":[
		"Dieter Schumacher"
	],
	"variants":[
		{
			"path":"_Dieter Schumacher Fonts/Free Fonts/Zacken.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decorated",
		"Distorted",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
},
{
	"name":"Zelda DX",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Zelda DX - by Aenigma Fonts/Zelda DX.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Logo",
		"Pixelated",
		"Retro",
		"Slanted"
	]
},
{
	"name":"Zenith",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Zenith - by Aenigma Fonts/Zenith.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Partial Symbol Set",
		"Playful",
		"Rounded Edges",
		"Uneven Chars"
	]
},
{
	"name":"Zephyrean",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Zephyrean - by Aenigma Fonts/Zephyrean.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Thick Stroke"
	]
},
{
	"name":"Zephyrean Gust",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Zephyrean - by Aenigma Fonts/Zephyrean Gust.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Thick Stroke"
	]
},
{
	"name":"Zero & Zero Is",
	"authors":[
		"Vic Fieger"
	],
	"variants":[
		{
			"path":"_Vic Fieger Fonts/Freeware Fonts/Zero & Zero Is.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Decay",
		"Decorated",
		"No Lowercase",
		"Ornamental",
		"Smudged",
		"Thick Stroke"
	]
},
{
	"name":"Zero Velocity",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Zero Velocity - by Aenigma Fonts/Zero Velocity.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Ornamental",
		"Outline",
		"Partial Symbol Set",
		"Shadow"
	]
},
{
	"name":"Zeroes 1",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Zeroes 1.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Plain"
	]
},
{
	"name":"Zeroes 2",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Zeroes 2.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Plain"
	]
},
{
	"name":"Zeroes 3",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Zeroes 3.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Sans-Serif",
		"Block Shaped",
		"Plain"
	]
},
{
	"name":"Zirconia",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Zirconia - by Aenigma Fonts/Zirconia.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=7][vbox][size font='zirconia' size=350]\u00c8[/size][/vbox][vbox][size font='zirconia' size=350]\u00c9[/size][/vbox][vbox][size font='zirconia' size=350]\u00ca[/size][/vbox][vbox][size font='zirconia' size=350]\u00cb[/size][/vbox][vbox][size font='zirconia' size=350]\u00cc[/size][/vbox][vbox][size font='zirconia' size=350]\u00cd[/size][/vbox][vbox][size font='zirconia' size=350]\u00ce[/size][/vbox][vbox][size font='zirconia' size=350]\u00cf[/size][/vbox][vbox][size font='zirconia' size=350]\u00d0[/size][/vbox][vbox][size font='zirconia' size=350]\u00d1[/size][/vbox][vbox][size font='zirconia' size=350]\u00d2[/size][/vbox][vbox][size font='zirconia' size=350]\u00d3[/size][/vbox][vbox][size font='zirconia' size=350]\u00d4[/size][/vbox][vbox][size font='zirconia' size=350]\u00d5[/size][/vbox][vbox][size font='zirconia' size=350]\u00d6[/size][/vbox][vbox][size font='zirconia' size=350]\u00d7[/size][/vbox][vbox][size font='zirconia' size=350]\u00d8[/size][/vbox][vbox][size font='zirconia' size=350]\u00d9[/size][/vbox][vbox][size font='zirconia' size=350]\u00da[/size][/vbox][vbox][size font='zirconia' size=350]\u00db[/size][/vbox][vbox][size font='zirconia' size=350]\u00dc[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Decay",
		"Ornamental"
	]
},
{
	"name":"Zirconia Cubic",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Zirconia - by Aenigma Fonts/Zirconia Cubic.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=7][vbox][size font='zirconia cubic' size=350]\u00c8[/size][/vbox][vbox][size font='zirconia cubic' size=350]\u00c9[/size][/vbox][vbox][size font='zirconia cubic' size=350]\u00ca[/size][/vbox][vbox][size font='zirconia cubic' size=350]\u00cb[/size][/vbox][vbox][size font='zirconia cubic' size=350]\u00cc[/size][/vbox][vbox][size font='zirconia cubic' size=350]\u00cd[/size][/vbox][vbox][size font='zirconia cubic' size=350]\u00ce[/size][/vbox][vbox][size font='zirconia cubic' size=350]\u00cf[/size][/vbox][vbox][size font='zirconia cubic' size=350]\u00d0[/size][/vbox][vbox][size font='zirconia cubic' size=350]\u00d1[/size][/vbox][vbox][size font='zirconia cubic' size=350]\u00d2[/size][/vbox][vbox][size font='zirconia cubic' size=350]\u00d3[/size][/vbox][vbox][size font='zirconia cubic' size=350]\u00d4[/size][/vbox][vbox][size font='zirconia cubic' size=350]\u00d5[/size][/vbox][vbox][size font='zirconia cubic' size=350]\u00d6[/size][/vbox][vbox][size font='zirconia cubic' size=350]\u00d7[/size][/vbox][vbox][size font='zirconia cubic' size=350]\u00d8[/size][/vbox][vbox][size font='zirconia cubic' size=350]\u00d9[/size][/vbox][vbox][size font='zirconia cubic' size=350]\u00da[/size][/vbox][vbox][size font='zirconia cubic' size=350]\u00db[/size][/vbox][vbox][size font='zirconia cubic' size=350]\u00dc[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Angular",
		"Block Shaped",
		"Decay",
		"Narrow Chars",
		"Ornamental"
	]
},
{
	"name":"Zodillin",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Zodillin.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Narrow Chars",
		"No Lowercase",
		"Playful",
		"Thick Stroke"
	]
},
{
	"name":"Zoetrope",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Zoetrope - by Aenigma Fonts/Zoetrope.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"instructions":[
		"Extra characters:[br][grid cols=7][vbox][size font='zoetrope' size=350]\u00ae[/size][/vbox][vbox][size font='zoetrope' size=350]\u00af[/size][/vbox][vbox][size font='zoetrope' size=350]\u00b0[/size][/vbox][vbox][size font='zoetrope' size=350]\u00b1[/size][/vbox][vbox][size font='zoetrope' size=350]\u00b2[/size][/vbox][vbox][size font='zoetrope' size=350]\u00b3[/size][/vbox][vbox][size font='zoetrope' size=350]\u00b5[/size][/vbox][vbox][size font='zoetrope' size=350]\u00b6[/size][/vbox][vbox][size font='zoetrope' size=350]\u00b7[/size][/vbox][vbox][size font='zoetrope' size=350]\u00b9[/size][/vbox][vbox][size font='zoetrope' size=350]\u00ba[/size][/vbox][vbox][size font='zoetrope' size=350]\u00bb[/size][/vbox][vbox][size font='zoetrope' size=350]\u00c6[/size][/vbox][vbox][size font='zoetrope' size=350]\u00e6[/size][/vbox][vbox][size font='zoetrope' size=350]\u00bf[/size][/vbox][vbox][size font='zoetrope' size=350]\u00c0[/size][/vbox][vbox][size font='zoetrope' size=350]\u00c1[/size][/vbox][vbox][size font='zoetrope' size=350]\u00c2[/size][/vbox][vbox][size font='zoetrope' size=350]\u00c3[/size][/vbox][vbox][size font='zoetrope' size=350]\u00c4[/size][/vbox][vbox][size font='zoetrope' size=350]\u00c5[/size][/vbox][/grid]"
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Dotted",
		"Ornamental",
		"Rounded Edges"
	]
},
{
	"name":"Zoidal",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Zoidal - by Aenigma Fonts/Zoidal.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"3D",
		"Decorated",
		"No Lowercase",
		"No Symbols",
		"Ornamental",
		"Slanted"
	]
},
{
	"name":"Zupiter",
	"authors":[
		"Typodermic Fonts"
	],
	"variants":[
		{
			"path":"_Typodermic Public Domain Fonts/opentype fonts/Zupiter.otf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Public Domain",
	"tags":[
		"Serif",
		"Leading Left Hook",
		"Plain",
		"Playful",
		"Uneven Chars"
	]
},
{
	"name":"Zurklez Outline",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Zurklez - by Aenigma Fonts/Zurklez Outline.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Hard To Read",
		"Negative Space",
		"No Lowercase",
		"Ornamental",
		"Outline",
		"Partial Symbol Set"
	]
},
{
	"name":"Zurklez Solid",
	"authors":[
		"Aenigma Fonts"
	],
	"variants":[
		{
			"path":"_Aenigma Fonts/Zurklez - by Aenigma Fonts/Zurklez Solid.ttf",
			"style":"normal",
			"weight":"normal"
		}
	],
	"license":"Freeware",
	"tags":[
		"Sans-Serif",
		"Hard To Read",
		"No Lowercase",
		"Ornamental",
		"Partial Symbol Set"
	]
}

// ========================================================================
//						DO NOT MODIFY BELOW THIS POINT
//						DO NOT MODIFY BELOW THIS POINT
// ========================================================================

/* PYTHON STOP READ POINT */			// DO NOT MODIFY THIS LINE

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
	paths : [],			// This is array of paths to the custom fonts (A single font can have many files)
	tags : [],			// This array contains all the unique tags found in the entire fonts list, with no duplicates
	authors : [],		// This array contains all the unique artists found in the entire fonts list, with no duplicates
	fontNames : [],		// This array contains all the unique font names found in the entire fonts list, with no duplicates
	fontData : [],		// This is an array of objects, sorted by font name, each object corresponding to a single font's attributes
	errors : []			// This array contains an entry for every font that fails to parse
}


// Defaults
fontsLibDefaultFont = ''
fontsLibDefaultFontSize = 48

fontsLibDisplayTime = 3.5

fontsLibRotateFontTimer = null

fontsLibCurrentFont = ''
fontsLibCurrentFontSize = 0
fontsLibFilters = {}

fontsLibUsePageHash = false
fontsLibPageData = {}	// To be used in place of page hash if hash is disabled

fontsLibSampleText = {
	uppercaseLetters	:	"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	lowercaseLetters	:	"abcdefghijklmnopqrstuvwxyz",
	punctuation			:	"0123456789+=’'()[]{}<>:,‒–—―…!.«»-‐?\"’“”;/⁄␠·&@*\•^¤¢$€£¥₩₪†‡°¡¿¬#№%‰‱¶′§~¨_|¦⁂☞∴‽※",
	pangrams			:	[	"The quick brown fox jumps over the lazy dog.",
								"A wizard's job is to vex chumps quickly in fog.",
								"Amazingly few discotheques provide jukeboxes.",
							]
}



fontsLibStyle = document.createElement('style')
fontsLibStyle.appendChild(document.createTextNode(`
.fontsLibFontSelectionItem:hover {
	background-color: #942;
	text-shadow: 0.05rem 0.05rem #333, -0.05rem 0.05rem #333, 0.05rem -0.05rem #333, -0.05rem -0.05rem #333, 0.05rem 0rem #333, -0.05rem 0rem #333, 0rem 0.05rem #333, 0rem -0.05rem #333;
	filter: brightness(115%);
}

.fontsLibFontSelectionItem:checked {
	color: #000;
	background-image: linear-gradient(90deg, #F60 0%, #F90 40%, #FC7 100%);
	text-shadow: 0.05rem 0.05rem #FFF, -0.05rem 0.05rem #FFF, 0.05rem -0.05rem #FFF, -0.05rem -0.05rem #FFF, 0.05rem 0rem #FFF, -0.05rem 0rem #FFF, 0rem 0.05rem #FFF, 0rem -0.05rem #FFF;
}

.fontsLibFontSelectionItem {
	font-family: 'nabFonts monospace';
	font-weight: bold;
	font-size: 1em;
	cursor: pointer;
	white-space: nowrap;
	text-shadow: 0.05rem 0.05rem #333, -0.05rem 0.05rem #333, 0.05rem -0.05rem #333, -0.05rem -0.05rem #333, 0.05rem 0rem #333, -0.05rem 0rem #333, 0rem 0.05rem #333, 0rem -0.05rem #333;
}

.fontsLibFocusHighlight:focus {
    box-shadow: 0px 0px 0.3em #FF4, inset 0px 0px 0.3em #FF4;
}

.fontsLibPlaybackDelay {
	width: 5em;
}

#fontsLibFontCount {
	padding-left: 0.25em;
	background-image: linear-gradient(90deg, #676767 0%, #333 100%);
	text-shadow: 0.05rem 0.05rem #333, -0.05rem 0.05rem #333, 0.05rem -0.05rem #333, -0.05rem -0.05rem #333, 0.05rem 0rem #333, -0.05rem 0rem #333, 0rem 0.05rem #333, 0rem -0.05rem #333;
}

.fontsLibSlidecontainer {
	display: grid;
}

.fontsLibContainer {
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;

	flex-direction: row;
    display: flex;

	color: #EEE;
	font-family: 'nabfonts monospace';
	font-size: 1.25em;
	font-weight: bold;
}

#fontsLibFontWeightText {
	font-size: 0.725em;
}

.fontsLibNavigationContainer {
	display: flex;
	flex-direction: column;
	user-select: none;
	background-color: #122A12;
	background-image: linear-gradient(90deg, #FFFFFF19 0%, #FFF0 100%);
}

#fontsLibNavigationPane {
	display: flex;
	flex-direction: column;
	user-select: none;
	border-left: 0.05em solid #000;
	border-right: 0.05em solid #000;
}

.fontsLibCharacterSampleContainers {
	text-align: center;
	display: flex;
	flex-wrap: wrap;
	flex: 0 0 5em;
	align-items: stretch;
	padding-bottom: 0.75em;
}

.fontsLibCharacterSamples {
	min-width: 1em;
	user-select: text;
}

.fontsLibCharacterBoxes:hover {
	background-color: #101317;
}

.fontsLibCharacterBoxes {
	background-color: #070707;
	text-align: inherit;
	border: 0.2rem solid #444;
	padding: 0.5rem;
}

.fontsLibSampleCharacter {
	margin: 0.5em;
	user-select: text;
}

.fontsLibCharacterHeader {
	font-size: 35%;
	color: #777;
	font-family: 'nabfonts monospace';
	font-weight: bold;
	text-align: left;
	user-select: none;
}

.fontsLibFontTitleText:hover {
	color: #FFD;
	text-shadow: 0em 0em 0.5em #F96F;
}

.fontsLibFontTitleText {
	text-shadow: 0em 0em 0.5em #F96A;
}

#fontsLibFontTitle:hover {
	background-image: radial-gradient(#ffffff12 0%, #fff0 75%);
}

#fontsLibFontTitle {
	text-align: center;
	font-size: 2.25em;
	font-family: 'nabfonts monospace';
	user-select: text;
	background-image: radial-gradient(#ffffff0f 0%, #fff0 75%);
}

#fontsLibFontAuthor {
	text-align: center;
	font-size: 1.25em;
	font-family: 'nabfonts monospace';
}

#fontsLibFontLicense {
	text-align: center;
	font-size: 1em;
	font-family: 'nabfonts monospace';
}

#fontsLibFontTags {
	text-align: center;
	font-size: 0.8em;
	font-family: 'nabfonts monospace';
}

.fontsLibFontPathsLabel {
	text-align: center;
	font-size: 0.8em;
	font-family: 'nabfonts monospace';
}

#fontsLibFontPaths {
	text-align: center;
	font-size: 0.8em;
	font-family: 'nabfonts monospace';
	max-height: 4.8em;
	overflow-y: scroll;
	background-color: #0004;
	border: 0.1em inset #3336;
}

.fontsLibFontAuthor {
	color: #4CC;
}

.fontsLibFontLicense {
	color: #F23;
}

.fontsLibFontTags {
	color: #CC4;
}

.fontsLibFontPaths:hover {
	filter: none;
}

.fontsLibFontPaths {
	filter: saturation(50%);
	text-decoration: none;
	padding: 0em 1em 0em 1em;
}

.fontsLibClickable:hover {
	color: #F62;
	text-shadow: 0px 0px 0.5em #FFFF;
}

.fontsLibClickable {
	cursor: pointer;
}

#fontsLibFontSize {
	width: 100%;
}

#fontsLibFontWeight {
	width: 100%;
}

#fontsLibCSSValue {
	user-select: all;
	white-space: break-spaces;
	text-align: left;
	font-size: 0.6em;
}

#fontsLibSampleTextArea:focus {
	box-shadow: 0px 0px 0.5rem #44f, inset 0px 0px 0.25rem #44f;
}

#fontsLibSampleTextArea {
	color: #FFF;
	word-wrap: break-word;
	white-space: pre-wrap;
	margin: 0px;
}

#fontsLibSampleTextText {
	width: calc(100% - 2em);
	min-width: calc(100% - 2em);
	max-width: calc(100% - 2em);
}

#fontsLibNameFilter {
	width: calc(100% - 2em);
}

#fontsLibAllCharacters {
	word-wrap: break-word;
}

#fontsLibFontSettings {
	padding-bottom: 0;
	flex-shrink: 0;
	overflow-y: auto;
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	user-select: none;
	text-align: left;
	max-width: 18.5rem;
	background-image: linear-gradient(90deg, #FFFFFF09 0%, #FFF0 20%, #0000 70%, #0004 100%);
}

#fontsLibFontInfoArea {
	background-color: #0235;
	background-image: linear-gradient(0deg, #FFF0 0%, #FFF1 100%);
	min-width: 0;
	padding: 0.5% 0.5em;
	user-select: none;
	border-bottom: 0.1em solid #5559;
}

#fontsLibFontDisplayArea {
	display: flex;
	flex-direction: column;
	background-color: #0009;
	min-width: 0;
	user-select: none;
}

#fontsLibFontSampleArea {
	background-color: #0009;
	background-image: linear-gradient(90deg, #FFF2 0em, #FFF0 2rem, #FFF0 calc(100% - 3rem), #FFF2 calc(100% - 1.5rem));
	min-width: 0;
	padding: 1%;
	flex: 1 1;
	overflow-y: scroll;
	user-select: none;
}

.fontsLibFullWidth {
	display: block;
}

.fontsLibHidden { 
	display: none;
}

.fontsLibauthorsDropdown {
	width: 15rem;
}

.fontsLiblicensesDropdown {
	width: 15rem;
}

.fontsLibTag {
	display: flex;
	align-items: center;
	gap: 0.2em;
}

#fontsLibFilteredTagsContainer {
	font-size: 0.75em;
	padding-left: 0.75rem;

	display: flex;
	flex-direction: column;
	gap: .35em;
	padding-top: .35em;
	padding-bottom: .35em;
}

#fontsLibUnusedTagsContainer {
	font-size: 0.75em;
	flex: 1 1;
	overflow-y: scroll;
	padding-left: 0.75rem;

	display: flex;
	flex-direction: column;
	gap: .4em;
	padding-top: .35em;
	padding-bottom: .35em;
}

.fontsLibNavigation {
	display: flex;
	padding: 0.15rem 0rem 0.35rem;
}

.fontsLibPlaybackTimer {
	font-size: 0.9em;
	display: flex;
	gap: 0.5em;
	padding: 0.75rem 0.75rem 0rem 0.75rem;
}

.fontsLibFontSelectionSample {
	color: #BBB;
	padding-left: 1em;
}

#fontsLibFontSelection {
	flex: 1 1;
	border: 0.15rem inset #333;
	width: 15.9rem;
	height: 90%;
	overflow-y: scroll;
	overflow-x: hidden;
	color: #FFF;
	font-size: 0.8em;
	user-select: none;
}

.fontsLibFontSelectionColor {
	display: flex;
	flex-direction: column;
	flex: 1 1;
	background-color: #201915;
	background-image: linear-gradient(90deg, #FFFFFF19 0%, #FFF0 100%);
}

.fontsLibFiltersHeader {
	text-align: center;
	font-size: 1.25em;
}

.fontsLibTagHeader {
	color: #F52;
}

.fontsLibTagSubGroup {
	color: #B90;
}

.fontsLibTag {
}

.fontsLibIncludedTagHeader {
	font-weight: bold;
	color: #0F0;
}

.fontsLibExcludedTagHeader {
	font-weight: bold;
	color: #F00;
}

.fontsLibIncludedTag:hover {
	color: #9F9;
	text-shadow: 0px 0px 0.2em #DDD6;
}

.fontsLibIncludedTag {
	cursor: pointer;
	color: #0F0;
	font-family: "WebHostingHub Glyphs";
	font-weight: normal;
	padding-left: 0.1em;
	padding-right: 0.1em;
}

.fontsLibExcludedTag:hover {
	color: #F88;
	text-shadow: 0px 0px 0.2em #DDD6;
}

.fontsLibExcludedTag {
	cursor: pointer;
	color: #F00;
	font-family: "WebHostingHub Glyphs";
	font-weight: normal;
	padding-left: 0.1em;
	padding-right: 0.1em;
}

.fontsLibUnusedTag {
	cursor: pointer;
	color: #555;
}

.fontsLibRemoveTag {
	color: #960;
	font-family: "WebHostingHub Glyphs";
}

.fontsLibClickableTag:hover {
	cursor : Pointer;
	color : #FC7;
	text-shadow: 0px 0px 0.5em #FFFF;
}

.fontsLibTagCount {
	color: #FA0;
}

.fontsLibTextInputContainer {
	display: inline-block;
}

.fontsLibClearButton::before {
	content: "";
}

.fontsLibClearButton:hover {
	color: #F88;
	text-shadow: 0px 0px 0.1em #DDD6;
}

.fontsLibClearButton {
	padding-left: 0.5em;
	display: inline-block;
	color: #F33;
	font-family: "WebHostingHub Glyphs";
	font-weight: normal;
}

.fontsLibButton:hover {
	background-color: #AAA;
	color: #F90;
	text-shadow: 0.05em 0.05em 0.05em #000;
}

.fontsLibButton:active * {
	transform: translate(0.1em, 0.1em);
}

.fontsLibButton:active {
	background-color: #E33;
	color: #F90;
	text-shadow: 0.05em 0.05em 0.05em #000;
}

.fontsLibButton {
	color: #EEE;
	border: 0.1em outset #555;
	border-radius: 0.5em;
	background-color: #333;
	cursor: pointer;
	text-align: center;
	font-size: 2em;
	font-weight: normal;
	font-style: normal;
	padding: 0.1em 0.1em 0.1em 0.1em;
	margin: 0.2em;
	display: inline-block;
	text-shadow: 0.05em 0.05em 0.05em #000;
}

.fontsLibActiveButton {
	color: #F40;
	background-color: #666;
	border-style: inset;
	text-shadow: 0.05em 0.05em 0.05em #000;
	box-shadow: 0em 0em 0.25em 0.1em #FA0A;
}

.fontsLibFormatButtons {
	display: flex;
	align-items: center;
	justify-content: center;
}

.fontsLibFormatButtonsContainer {
	flex: 1 1;
	display: flex;
	align-items: center;
	justify-content: center;
}

.fontsLibBoldButton {
	font-weight: bold;
	font-size: 1.25em;
	line-height: 1.5em;
	width: 1.5em;
	font-family: "webhostinghub glyphs";
	padding: 0.1em
}

.fontsLibItalicButton {
	font-style: italic;
	text-align: left;
	font-size: 1.25em;
	line-height: 1.5em;
	width: 1.5em;
	font-family: "webhostinghub glyphs";
	padding: 0.1em
}

.fontsLibNavButtonContainer {
	flex: 1 1;
	display: flex;
	align-items: center;
	justify-content: center;
}

.fontsLibNavButton {
	display: flex;
	align-items: center;
	justify-content: center;
	font-style: normal;
	text-align: left;
	font-family: "webhostinghub glyphs";
	font-size: 1.3em;
	line-height: 1.15em;
	width: 1em;
	padding: 0.25em;
}

.fontsLibAllCharactersOutput {
	word-break: break-word;
}

.fontsLibPrevButton {
}

.fontsLibPlayButton {
}

.fontsLibStopButton {
}

.fontsLibNextButton {
}
`))
document.head.appendChild(fontsLibStyle)



function fontsLibGetHashData() {
	if(fontsLibUsePageHash) {
		return getHashData()
	} else {
		return Object.assign(fontsLibPageData)	// Make sure to return a COPY of this object, not the data itself
	}
}

function fontsLibSetHashData(input) {
	if(fontsLibUsePageHash) {
		setHashData(input)
	} else {
		fontsLibPageData = Object.assign(fontsLibPageData, input)
		fontsLibFilters = {}	// For some reason, without this, the page fails to re-render because the filter values are the same
		fontsLibUpdatePage()
	}
}

function fontsLibDrawFontSamples() {
	fontsLibParseSample(fontsLibSampleText.uppercaseLetters, uppercaseLetters)
	fontsLibParseSample(fontsLibSampleText.lowercaseLetters, lowercaseLetters)
	fontsLibParseSample(fontsLibSampleText.punctuation, punctuation)

	let pangramContainer = document.createElement('div')
	for(let i = 0; i < fontsLibSampleText.pangrams.length; i++) {
		let newPangram = document.createElement('div')
		newPangram.id = 'pangram' + (i + 1)
		newPangram.className = 'fontsLibCharacterSampleContainers fontsLibFullWidth'
		fontsLibDrawCharacters(fontsLibSampleText.pangrams[i], newPangram, false)
		pangramContainer.appendChild(newPangram)
	}
	pangrams.appendChild(pangramContainer)

	fontsLibDrawAllCharacters()
}

function fontsLibParseSample(inputString, element) {
	for(let i = 0; i < inputString.length; i++) {
		fontsLibDrawCharacters(inputString[i], element)
	}
}

function fontsLibDrawAllCharacters(index = 0) {
	let maxChars = 1114112
	let increment = 1114112	// Each iteration of this function will render this many, wait, then call itself
		// Increment is likely no longer needed because these are hidden on page load anyway, so everything has time to catch up

	increment += index

	let output = ''
	for(index; index < maxChars && index < increment; index++) {
		output += String.fromCodePoint(index)
	}

	allCharactersOutput.innerHTML += output

	if(index < maxChars) setTimeout(()=>{ fontsLibDrawAllCharacters(index) }, 1000)
}

function fontsLibDrawCharacters(characters, element, sampleChars = true) {
	let newCharacters = document.createElement('div')
	newCharacters.className = 'fontsLibCharacterBoxes'

	if(sampleChars) {
		newCharacters.className += ' fontsLibCharacterSamples'
		let newCharHeader = document.createElement('span')
		newCharHeader.className = 'fontsLibCharacterHeader'
		newCharHeader.appendChild(document.createTextNode(characters.toString()))
		newCharHeader.appendChild(document.createElement('br'))
		newCharacters.appendChild(newCharHeader)
	}

	let newText = document.createElement('span')
	newText.appendChild(document.createTextNode(characters.toString()))
	newText.className = 'fontsLibSampleCharacter'
	newCharacters.appendChild(newText)
	element.appendChild(newCharacters)
}

function fontsLibChangeAllSampleFonts(inputFont, updateHash = true) {
	fontsLibStop()

	let tempFont = inputFont

	if(typeof(inputFont) !== 'string') {
		console.log('fontsLibChangeAllSampleFonts Error: Invalid input type: \'' + inputFont + '\' (' + typeof(inputFont) + ')!')
		return false
	} else {
		tempFont = getFontData(inputFont)
	}

	if(tempFont == false) {
		console.log('fontsLibChangeAllSampleFonts Error: Invalid font name: \'' + inputFont + '\'!')
		return false
	}

	fontsLibCurrentFont = tempFont.name

	if(updateHash) fontsLibSetHashData({ fontName : fontsLibCurrentFont })

	for(let i = 0; i < fontsLibFontSelection.children.length; i++) {
		let temp = 'font ' + fontsLibCurrentFont
		if(fontsLibFontSelection.children[i].id.toLowerCase() == temp.toLowerCase()) {
			fontsLibFontSelection.children[i].selected = true

// Trying to get the font selection to scroll a bit when changed...

//			fontsLibFontSelection.scrollTop += 5 * (authorsDropdown.clientHeight)	// Attempt 1

/*
// Attempt 2
			fontsLibFontSelection.children[clamp(0, fontsLibFontSelection.children.length - 1, i + 5)].scrollIntoView()
			fontsLibFontSelection.children[clamp(0, fontsLibFontSelection.children.length - 1, i - 5)].scrollIntoView()
//			fontsLibFontSelection.children[i].scrollIntoView()
*/
			break
		}
	}

	clearElement(fontsLibInstructions)
	document.getElementById('fontsLibInstructions').style.display = 'block'	// If the user pressed the show/hide button, MAKE SURE the instructions are shown anyway when the font is changed
	// This next part determines if the entire instructions block should be shown at all
	if(tempFont.hasOwnProperty('instructions')) {
		let tagBlacklist = superTextConvertWhitelistToBlacklist([ 'weight', 'b', 'i', 'u', 's', 'hbox', 'vbox', 'grid', 'color', 'font', 'img', 'br', 'hr', 'url', 'left', 'center', 'right', 'justify', 'ol', 'ul', 'li', 'sup', 'sub', 'size', 'quote', 'code', 'iquote', 'icode', 'nomarkup' ])
		removeClassName(fontsLibInstructionsContainer, 'fontsLibHidden')
		let instructions = { elementType : 'div', className : 'fontsLibCharacterBoxes', style : { fontWeight : 'normal' }, children : [] }
		for(let i = 0; i < tempFont.instructions.length; i++) {
			instructions.children.push(superTextMarkup(tempFont.instructions[i], tagBlacklist, 'nabfonts sans-serif', 1.5, false)[0])
		}
		fontsLibInstructions.appendChild(createElement(instructions))
	} else {
		addClassName(fontsLibInstructionsContainer, 'fontsLibHidden')
	}

	let checkTitle = document.getElementById('nabFontsPageTitleElement')
	if(checkTitle !== null) checkTitle.innerText = 'NabFontsLib - ' + fontsLibCurrentFont

	changeFont(fontsLibSampleTextArea, fontsLibCurrentFont, 'Adobe Blank')
	changeFont(pangrams, fontsLibCurrentFont, 'Adobe Blank')
	changeFont(uppercaseLetters, fontsLibCurrentFont, 'Adobe Blank')
	changeFont(lowercaseLetters, fontsLibCurrentFont, 'Adobe Blank')
	changeFont(punctuation, fontsLibCurrentFont, 'Adobe Blank')

	changeFont(fontsLibAllCharacters, fontsLibCurrentFont, 'Adobe Blank')

	clearElement(fontsLibFontTitle)
	clearElement(fontsLibFontAuthor)
	clearElement(fontsLibFontLicense)
	clearElement(fontsLibFontTags)
	if(typeof(fontsLibFontPaths) !== undefined) {
		clearElement(fontsLibFontPaths)
	}

	fontsLibFontTitle.appendChild(createElement({ elementType: 'span', className : 'fontsLibFontTitleText', text: tempFont.name }))

	fontsLibFontAuthor.appendChild(createElement({ elementType: 'span', text: 'By: ' }))

	let currentAuthors = []
	let currentLicenses = []
	let currentFilters = fontsLibGetHashData()
	if(currentFilters.hasOwnProperty('filters')) currentFilters = currentFilters.filters
	if(currentFilters.hasOwnProperty('include')) currentFilters = currentFilters.include
	if(currentFilters.hasOwnProperty('authors')) currentAuthors = currentFilters.authors
	if(currentFilters.hasOwnProperty('licenses')) currentLicenses = currentFilters.licenses

	for(let i = 0; i < tempFont.authors.length; i++) {
		let newElement = { elementType : 'div', style : { display : 'inline-block' }, children : [
			{ elementType: 'span', className : 'fontsLibFontAuthor fontsLibClickable', onclick : ()=>{ fontsLibChangeFilters({ unused : currentAuthors, include : { authors : [ tempFont.authors[i] ] } }, 'authors') }, text: tempFont.authors[i] }
		]}
		if(i + 1 < tempFont.authors.length) {
			newElement.children.push({ elementType: 'span', style : { paddingRight : '0.6em' }, text: ',' })
		}
		fontsLibFontAuthor.appendChild(createElement(newElement))
	}

	fontsLibFontLicense.appendChild(createElement({ elementType: 'span', text: 'License: ' }))
	fontsLibFontLicense.appendChild(createElement({ elementType: 'span', className : 'fontsLibFontLicense fontsLibClickable', onclick : ()=>{ fontsLibChangeFilters({ include : { unused : currentLicenses, licenses : [ tempFont.license ] } }, 'licenses') }, text: ((!tempFont.hasOwnProperty('license') || tempFont.license == '') ? 'Unknown' : tempFont.license) }))

	fontsLibFontTags.appendChild(createElement({ elementType: 'span', text: 'Tags: ' }))
	for(let i = 0; i < tempFont.tags.length; i++) {
		let newElement = { elementType : 'div', style : { display : 'inline-block' }, children : [
			{ elementType: 'span', className : 'fontsLibFontTags fontsLibClickable', onclick : ()=>{ fontsLibChangeFilters({ include : { tags : [ tempFont.tags[i] ] } }, 'tags') }, text: tempFont.tags[i] }
		]}
		if(i + 1 < tempFont.tags.length) {
			newElement.children.push({ elementType: 'span', style : { paddingRight : '0.6em' }, text: ',' })
		}
		fontsLibFontTags.appendChild(createElement(newElement))
	}

	fontPathColors = [ '#4F4', '#4FF', '#44F', '#F4F', '#F44', '#FF4' ]
	let count = 0
	for(let i = 0; i < tempFont.paths.length; i++) {
		match = false
		for(let h = i - 1; h >= 0; h--) {
			if(tempFont.paths[i] == tempFont.paths[h]) match = true
		}
		if(match == true) continue
		fontsLibFontPaths.appendChild(createElement({ elementType: 'a', href : tempFont.paths[i], download : 'true', className : 'fontsLibFontPaths fontsLibClickable', style : { color : fontPathColors[count % fontPathColors.length] }, text: tempFont.paths[i] }))
		if(i < tempFont.paths.length - 1) fontsLibFontPaths.appendChild(createElement({ elementType: 'br' }))
		count++
	}
}

function fontsLibSetElementWeight(element, weight) {
	element.style.fontWeight = weight
}

function fontsLibItalicFont(inputElement, italicFont = true) {
	if(italicFont) {
		italicFont = 'italic'
	} else {
		italicFont = 'normal'
	}
	inputElement.style.fontStyle = italicFont
}

function fontsLibSetButtonState(button, activeState = true) {
	if(activeState) {
		addClassName(button, 'fontsLibActiveButton')
	} else {
		removeClassName(button, 'fontsLibActiveButton')
	}
}

function fontsLibParseWeight(weight) {
	try {
		weight = parseInt(clamp(weight, nabFontsFontWeights.min, nabFontsFontWeights.max) / 100) * 100
	} catch(e) {
		printWarning('fontsLib: fontsLibParseWeight: Error while parsing weight value!', e)
		weight = 400
	}

	clearElement(fontsLibFontWeightText)
	fontsLibFontWeightText.appendChild(createElement({ elementType : 'span', text : weight.toString() + ' (' + nabFontsFontWeights[clamp((parseInt(weight / 100) * 100), nabFontsFontWeights.min, nabFontsFontWeights.max)] + ')' }))

	return weight
}

function fontsLibChangeElementWeights(weight) {
	weight = fontsLibParseWeight(weight)

	fontsLibSetElementWeight(fontsLibSampleTextArea, weight)
	fontsLibSetElementWeight(pangrams, weight)
	fontsLibSetElementWeight(uppercaseLetters, weight)
	fontsLibSetElementWeight(lowercaseLetters, weight)
	fontsLibSetElementWeight(punctuation, weight)
	fontsLibSetElementWeight(fontsLibAllCharacters, weight)
}

function fontsLibSetItalic(italicActive) {
	fontsLibSetButtonState(fontsLibItalicButton, italicActive)

	fontsLibItalicFont(fontsLibSampleTextArea, italicActive)
	fontsLibItalicFont(pangrams, italicActive)
	fontsLibItalicFont(uppercaseLetters, italicActive)
	fontsLibItalicFont(lowercaseLetters, italicActive)
	fontsLibItalicFont(punctuation, italicActive)
	fontsLibItalicFont(fontsLibAllCharacters, italicActive)
}

function fontsLibSetWeight(weight) {
	fontsLibSetHashData({ 'weight' : fontsLibParseWeight(weight) })
}

function fontsLibToggleItalic() {
	let temp = fontsLibGetHashData()
	if(temp.hasOwnProperty('italic') && temp.italic == true) {
		fontsLibSetHashData({ 'italic' : false })
		return
	}
	fontsLibSetHashData({ 'italic' : true })
}

function fontsLibChangeAllSampleFontSizes(inputFontSize, updateHash = true) {
	fontsLibCurrentFontSize = parseInt(inputFontSize)
	if(isNaN(fontsLibCurrentFontSize)) fontsLibCurrentFontSize = fontsLibDefaultFontSize
	fontsLibFontSize.value = fontsLibCurrentFontSize
	fontsLibCurrentFontSize = fontsLibFontSize.value	//This will force fontsLibCurrentFontSize to adhere to the step value of the slider

	if(updateHash) fontsLibSetHashData({ fontSize : parseInt(fontsLibCurrentFontSize) })

	fontsLibSampleTextArea.style.fontSize = fontsLibCurrentFontSize.toString() + 'pt'
	pangrams.style.fontSize = fontsLibCurrentFontSize.toString() + 'pt'
	uppercaseLetters.style.fontSize = fontsLibCurrentFontSize.toString() + 'pt'
	lowercaseLetters.style.fontSize = fontsLibCurrentFontSize.toString() + 'pt'
	punctuation.style.fontSize = fontsLibCurrentFontSize.toString() + 'pt'
	fontsLibAllCharacters.style.fontSize = fontsLibCurrentFontSize.toString() + 'pt'

	clearElement(fontsLibFontSizeText)
	fontsLibFontSizeText.appendChild(createElement({ elementType: 'span', text: fontsLibCurrentFontSize + ' pt' }))
	fontsLibFontSize.title = fontsLibCurrentFontSize + ' points'
}

function fontsLibStop() {
	clearTimeout(fontsLibRotateFontTimer)
	removeClassName(fontsLibPlayButton, 'fontsLibActiveButton')
}

function fontsLibPlay() {
	clearTimeout(fontsLibRotateFontTimer)
	fontsLibRotateFontTimer = setTimeout(()=>{ if(document.getElementById('fontsLibPlayButton') === null) return; fontsLibNext(); fontsLibPlay(); }, clamp(parseFloat(fontsLibPlaybackDelay.value), 1, 15) * 1000)
	addClassName(fontsLibPlayButton, 'fontsLibActiveButton')
}

function fontsLibNext(count = 1) {
	fontsLibStop()

	let tempIndex = getSelectIndex(fontsLibFontSelection, null)
	if(tempIndex === null) {
		tempIndex = 0
	} else {
		if(fontsLibFontSelection.children.length == 0) {
			tempIndex = 0
		} else {
			tempIndex = (tempIndex + count) % fontsLibFontSelection.children.length
		}
	}

	setSelectIndex(fontsLibFontSelection, tempIndex)

	fontsLibCurrentFont = fontsLibFontSelection.value
	fontsLibChangeAllSampleFonts(fontsLibCurrentFont)
}

function fontsLibPrev(count = 1) {
	fontsLibStop()

	let tempIndex = getSelectIndex(fontsLibFontSelection, null)
	
	if(tempIndex === null) {
		tempIndex = 0
	} else {
		if(fontsLibFontSelection.children.length == 0) {
			tempIndex = 0
		} else {
			tempIndex = (tempIndex - count) % fontsLibFontSelection.children.length
			if(tempIndex < 0) tempIndex += fontsLibFontSelection.children.length
		}
	}

	setSelectIndex(fontsLibFontSelection, tempIndex)

	fontsLibCurrentFont = fontsLibFontSelection.value
	fontsLibChangeAllSampleFonts(fontsLibCurrentFont)
}

function fontsLibChangeSampleText(inputText, updateHash = true) {
	let loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	let newSampleText = loremIpsum

	inputText = inputText.trim()

	if(inputText != '') {
		newSampleText = inputText
		if(updateHash) fontsLibSetHashData({ sampleText: newSampleText })
	} else {
		if(updateHash) fontsLibSetHashData({ sampleText: '' })
	}

	clearElement(fontsLibSampleTextArea)
	fontsLibSampleTextArea.appendChild(createElement({ elementType: 'div', className: 'fontsLibCharacterBoxes', children: [{ elementType: 'span', className: 'fontsLibSampleCharacter', children : superTextMarkup(newSampleText, null, null, null) } ] }))
}

function fontsLibRenderFontSelectionList(fontList) {
	clearElement(fontsLibFontSelection)

	clearElement(document.getElementById('fontsLibFontCount'))
	document.getElementById('fontsLibFontCount').appendChild(createElement({ elementType : 'span', text : 'Fonts (' + fontList.length.toString() + '):' }))

	clearElement(document.getElementById('fontsLibMasterTagCount'))
	document.getElementById('fontsLibMasterTagCount').appendChild(createElement({ elementType : 'span', text : 'Tags (' + customFonts.tags.length.toString() + '):' }))

	let test = ''
	let temp = fontsLibCurrentFont.toLowerCase()
	for(let i = 0; i < fontList.length; i++) {
		test = fontList[i].name.toLowerCase()

		let newOption = { elementType: 'option', id: 'font ' + fontList[i].name, value: fontList[i].name, className: 'fontsLibFontSelectionItem', onclick : ()=>{ fontsLibSetHashData({ playbackState : 'stop' }); fontsLibChangeAllSampleFonts(fontList[i].name) }, title : fontList[i].name, children: [
			{ elementType: 'span', style: { fontFamily: 'nabFonts monospace' }, text: fontList[i].name },
		] }

		if(test == temp) {
			newOption.selected = true
		}
		fontsLibFontSelection.appendChild(createElement(newOption))
	}
}

function fontsLibUpdatePage() {
	let hashData = fontsLibGetHashData()

	if(hashData.hasOwnProperty('fontName')) {
		if(fontsLibCurrentFont.toLowerCase() != hashData.fontName.toLowerCase()) {
			fontsLibCurrentFont = hashData.fontName
			fontsLibChangeAllSampleFonts(fontsLibCurrentFont, false)
		}
	} else {
		fontsLibChangeAllSampleFonts(fontsLibDefaultFont, false)
	}

	if(hashData.hasOwnProperty('fontSize')) {
		if(fontsLibCurrentFontSize != hashData.fontSize) {
			fontsLibCurrentFontSize = hashData.fontSize
			fontsLibChangeAllSampleFontSizes(fontsLibCurrentFontSize, false)
		}
	} else {
		fontsLibChangeAllSampleFontSizes(fontsLibDefaultFontSize, false)
	}

	if(document.activeElement == fontsLibSampleTextText) {
		// Text area has focus! Don't change anything
	} else {
		if(hashData.hasOwnProperty('sampleText')) {
			// Text area does not have focus! Use the hash
			fontsLibSampleTextText.value = hashData.sampleText
			fontsLibChangeSampleText(fontsLibSampleTextText.value, false)
		} else {
			fontsLibChangeSampleText('', false)
		}
	}

	if(hashData.hasOwnProperty('weight')) {
		fontsLibChangeElementWeights(hashData.weight, false)
		fontsLibFontWeight.value = hashData.weight
	} else {
		fontsLibChangeElementWeights(400, false)
	}

	if(hashData.hasOwnProperty('italic') && hashData.italic == true) {
		fontsLibSetItalic(true)
	} else {
		fontsLibSetItalic(false)
	}

	if(hashData.hasOwnProperty('filters')) {
		if(!inputsAreIdentical(fontsLibFilters, hashData.filters)) {
			// Filters have changed!
			fontsLibFilters = Object.assign(hashData.filters)


			// Clean filters up before running, so we don't get glitches with the tags when invalid tags are searched for
			if(fontsLibFilters.hasOwnProperty('include') && fontsLibFilters.include.hasOwnProperty('tags')) {
				let match = false
				for(let i = 0; i < fontsLibFilters.include.tags.length; i++) {
					match = false
					for(let j = 0; j < customFonts.tags.length; j++) {
						if(customFonts.tags[j].name.toLowerCase() == fontsLibFilters.include.tags[i].toLowerCase()) {
							match = true
							break
						}
					}
					if(match === false) {
						// Tag does not exist! Delete it.
						fontsLibFilters.include.tags.splice(i, 1)
					}
				}
			}
			if(fontsLibFilters.hasOwnProperty('exclude') && fontsLibFilters.exclude.hasOwnProperty('tags')) {
				let match = false
				for(let i = 0; i < fontsLibFilters.exclude.tags.length; i++) {
					match = false
					for(let j = 0; j < customFonts.tags.length; j++) {
						if(customFonts.tags[j].name.toLowerCase() == fontsLibFilters.exclude.tags[i].toLowerCase()) {
							match = true
							break
						}
					}
					if(match === false) {
						// Tag does not exist! Delete it.
						fontsLibFilters.exclude.tags.splice(i, 1)
					}
				}
			}


			let filteredList =	{	
									tags : [],
									authors : [],
									names : [],
									styles : [],
									weights : [],
									fontData : {}
								}
			let metadataList =	{
									tags : [],
									authors : [],
									names : [],
									styles : [],
									weights : [],
								}

			filteredList.fontData = getFilteredFontList(fontsLibFilters)

			for(let i = 0; i < filteredList.fontData.length; i++) {
				fontsLibAddDataToObject(filteredList.fontData[i], metadataList, 'authors')
				fontsLibAddDataToObject(filteredList.fontData[i], metadataList, 'styles')
				fontsLibAddDataToObject(filteredList.fontData[i], metadataList, 'weights')
				fontsLibAddDataToObject(filteredList.fontData[i], metadataList, 'tags')
				fontsLibAddDataToObject(filteredList.fontData[i], metadataList, 'licenses')
			}
			fontsLibRenderAsTags(fontsLibFilteredTagsContainer, 'tags')
			fontsLibRenderFontSelectionList(getFilteredFontList(fontsLibFilters))
		}
	} else {
		fontsLibFilters = {}
		fontsLibRenderAsTags(fontsLibFilteredTagsContainer, 'tags')
		fontsLibRenderFontSelectionList(getFilteredFontList(fontsLibFilters))
	}

	// This needs to ALWAYS be updated
	if(fontsLibFilters.include && fontsLibFilters.include.authors && fontsLibFilters.include.authors.length > 0) {
		setSelectValue(authorsDropdown, fontsLibFilters.include.authors[0], false)
	} else {
		setSelectValue(authorsDropdown, '', false)
	}

	// This needs to ALWAYS be updated
	if(fontsLibFilters.include && fontsLibFilters.include.licenses && fontsLibFilters.include.licenses.length > 0) {
		setSelectValue(licensesDropdown, fontsLibFilters.include.licenses[0], false)
	} else {
		setSelectValue(licensesDropdown, '', false)
	}

	if(document.activeElement == fontsLibNameFilter) {
		// Text area has focus! Don't change anything
	} else {
		if(fontsLibFilters.include && fontsLibFilters.include.name) {
			fontsLibNameFilter.value = fontsLibFilters.include.name
		} else {
			fontsLibNameFilter.value = ''
		}
	}

	clearElement(fontsLibCSSValue)
	fontsLibCSSValue.appendChild(createElement({ elementType: 'div', className: 'fontsLibCharacterBoxes', children: [{ elementType: 'span', text: fontsLibGetCSSValue(fontsLibCurrentFont) } ] }))
}

function fontsLibChangeDropdown(inputDropdown, metadata) {
	let newValue = getSelectValue(inputDropdown, '')

	let newFilters =	{
							include	:	{
								[metadata]	:	[]
							},
							unused	:	{
								[metadata]	:	[]
							}
						}

	// match is used here to save the trouble of unnecessarily converting the names to lowercase once a match is found.
	// There can only ever be one match in a dropdown
	let match = false
	for(let i = 0; i < customFonts[metadata].length; i++) {
		if(!match && newValue != '' && customFonts[metadata][i].name.toLowerCase() == newValue.toLowerCase()) {
			newFilters.include[metadata].push(customFonts[metadata][i].name)
			match = true
		} else {
			newFilters.unused[metadata].push(customFonts[metadata][i].name)
		}
	}

	fontsLibChangeFilters(newFilters, metadata)
}

function fontsLibChangeFilters(inputFilters, property, updateHash = true) {
	/*	inputFilters MUST be in the following format:
			{
				include	:	{
					name	:	nameSearchTerm,
					authors	:	[ 'author', 'names', 'array' ],
					styles	:	[ 'styles', 'array' ],
					weights	:	[ 'weights', 'array' ],
					tags	:	[ 'tags', 'array' ],
					licenses:	[ 'licenses', 'array' ]
				},
				exclude	:	{
					name	:	nameSearchTerm,
					authors	:	[ 'author', 'names', 'array' ],
					styles	:	[ 'styles', 'array' ],
					weights	:	[ 'weights', 'array' ],
					tags	:	[ 'tags', 'array' ],
					licenses:	[ 'licenses', 'array' ]
				},
				unused	:	{
					name	:	nameSearchTerm,
					authors	:	[ 'author', 'names', 'array' ],
					styles	:	[ 'styles', 'array' ],
					weights	:	[ 'weights', 'array' ],
					tags	:	[ 'tags', 'array' ],
					licenses:	[ 'licenses', 'array' ]
				}
			}
	*/

	let tempFilters = {}
	let temp = fontsLibGetHashData()
	if(temp.hasOwnProperty('filters')) {
		tempFilters = temp.filters
	}

	if(!tempFilters.hasOwnProperty('include')) tempFilters.include = {}
	if(!tempFilters.hasOwnProperty('exclude')) tempFilters.exclude = {}

	// Remove any 'unused' items from the filter
	if(inputFilters.hasOwnProperty('unused') && inputFilters.unused.hasOwnProperty(property)) {
		for(let i = 0; i < inputFilters.unused[property].length; i++) {
			inputFilters.unused[property][i] = inputFilters.unused[property][i].toLowerCase()
		}

		if(tempFilters.hasOwnProperty('include') && tempFilters.include.hasOwnProperty(property)) {
			for(let i = 0; i < inputFilters.unused[property].length; i++) {
				removeItemFromArray(tempFilters.include[property], inputFilters.unused[property][i], false)
			}
		}

		if(tempFilters.hasOwnProperty('exclude') && tempFilters.exclude.hasOwnProperty(property)) {
			for(let i = 0; i < inputFilters.unused[property].length; i++) {
				removeItemFromArray(tempFilters.exclude[property], inputFilters.unused[property][i], false)
			}
		}
	}

	if(	inputFilters.hasOwnProperty('include') &&
		inputFilters.include.hasOwnProperty(property)) {

		if(	tempFilters.hasOwnProperty('include') &&
			tempFilters.include.hasOwnProperty(property) &&
			Array.isArray(tempFilters.include[property])) {
			tempFilters.include[property] = joinArraysNoDuplicates(tempFilters.include[property], inputFilters.include[property])
		} else {
			tempFilters.include[property] = inputFilters.include[property]
		}
	}

	if(	inputFilters.hasOwnProperty('exclude') &&
		inputFilters.exclude.hasOwnProperty(property)) {

		if(	tempFilters.hasOwnProperty('exclude') &&
			tempFilters.exclude.hasOwnProperty(property) &&
			Array.isArray(tempFilters.exclude[property])) {
			tempFilters.exclude[property] = joinArraysNoDuplicates(tempFilters.exclude[property], inputFilters.exclude[property])
		} else {
			tempFilters.exclude[property] = inputFilters.exclude[property]
		}
	}

	if(tempFilters.hasOwnProperty('include') && tempFilters.include.hasOwnProperty(property) && tempFilters.include[property].length == 0) delete tempFilters.include[property]
	if(tempFilters.hasOwnProperty('exclude') && tempFilters.exclude.hasOwnProperty(property) && tempFilters.exclude[property].length == 0) delete tempFilters.exclude[property]

	if(updateHash) fontsLibSetHashData({ filters : tempFilters })
}

function fontsLibRenderAsDropdown(outputElement, metadata) {
	let selectOutput = { elementType : 'select', className : 'fontsLib' + metadata + 'Dropdown fontsLibFocusHighlight', id : metadata + 'Dropdown', children : [] }

	let allOption = ({ elementType: 'option', value : '', text : '-----  All ' + metadata + ' (' + customFonts[metadata].length + ' ' + metadata + ')  -----' })

	let metadata2 = metadata
	if(metadata.toLowerCase() == 'licenses') metadata2 = 'license'	// A bit hacky, but this isn't plural in some uses

	let match = false
	for(let i = 0; i < customFonts[metadata].length; i++) {
		let newOption = { elementType: 'option', value : customFonts[metadata][i].name, text : customFonts[metadata][i].name + ' (' + customFonts[metadata][i].count + ' ' + pluralize([ 'font', 'fonts' ], customFonts[metadata][i].count) + ')' }
		if(!match && fontsLibFilters.include && fontsLibFilters.include[metadata] && fontsLibFilters.include[metadata].length > 0) {
			if(customFonts[metadata][i].name.toLowerCase() == fontsLibFilters.include[metadata][0].toLowerCase()) {
				newOption.selected = 'selected'
				match = true
			}
		}
		selectOutput.children.push(newOption)
	}

	if(!match) {
		allOption.selected = 'selected'
	}

	selectOutput.children.unshift(allOption)

	clearElement(outputElement)
	outputElement.appendChild(createElement(selectOutput))

	// This MUST come after createElement, because the element must be defined before the action can be created
	document.getElementById([metadata] + 'Dropdown').onchange = ()=>{ fontsLibChangeDropdown(metadata + 'Dropdown', metadata) }
}

function fontsLibRenderAsTags(outputElement, metadata) {
	let metadataOutput = 	{
								includeData	: [],
								excludeData	: [],
								unusedData	: []
							}

	let match = false
	for(let i = 0; i < customFonts[metadata].length; i++) {
		match = false
		if(fontsLibFilters.hasOwnProperty('include') && fontsLibFilters.include.hasOwnProperty(metadata)) {
			for(let j = 0; j < fontsLibFilters.include[metadata].length; j++) {
				if(fontsLibFilters.include[metadata][j] == customFonts[metadata][i].name.toLowerCase()) {
					// This tag is filtered as an include
					metadataOutput.includeData.push(customFonts[metadata][i])
					match = true
					break
				}
			}
		}

		if(match) continue

		if(fontsLibFilters.hasOwnProperty('exclude') && fontsLibFilters.exclude.hasOwnProperty(metadata)) {
			for(let j = 0; j < fontsLibFilters.exclude[metadata].length; j++) {
				if(fontsLibFilters.exclude[metadata][j] == customFonts[metadata][i].name.toLowerCase()) {
					// This tag is filtered as an exclude
					metadataOutput.excludeData.push(customFonts[metadata][i])
					match = true
					break
				}
			}
		}

		if(match) continue

		metadataOutput.unusedData.push(customFonts[metadata][i])
	}

	clearElement(outputElement)

	if(metadataOutput.includeData.length > 0) {
		outputElement.appendChild(createElement({ elementType: 'div', className: 'fontsLibTagSubGroup fontsLibIncludedTagHeader', text : 'Included:' }))
		for(let i = 0; i < metadataOutput.includeData.length; i++) {
			if(metadataOutput.includeData[i].count < 1) continue
			outputElement.appendChild(createElement({ elementType : 'div', title : metadataOutput.includeData[i].name, children : [
				{ elementType : 'span', className : 'fontsLibTag', children : [
					{ elementType : 'span', className : 'fontsLibExcludedTag fontsLibRemoveTag', onclick : ()=>{ fontsLibChangeFilters({ unused : { [metadata] : [ metadataOutput.includeData[i].name ] } }, metadata) }, text : '  ' },
					{ elementType : 'span', text : metadataOutput.includeData[i].name },
					{ elementType : 'span', className : 'fontsLibTagCount', text : ' (' + metadataOutput.includeData[i].count + ')' }
				] }
			] }))
		}
		outputElement.appendChild(createElement({ elementType: 'br' }))
	}

	if(metadataOutput.excludeData.length > 0) {
		outputElement.appendChild(createElement({ elementType: 'div', className: 'fontsLibTagSubGroup fontsLibExcludedTagHeader', text : 'Excluded:' }))
		for(let i = 0; i < metadataOutput.excludeData.length; i++) {
			if(metadataOutput.excludeData[i].count < 1) continue
			outputElement.appendChild(createElement({ elementType : 'div', title : metadataOutput.excludeData[i].name, children : [
				{ elementType : 'span', className : 'fontsLibTag', children : [
					{ elementType : 'span', className : 'fontsLibIncludedTag fontsLibRemoveTag', onclick : ()=>{ fontsLibChangeFilters({ unused : { [metadata] : [ metadataOutput.excludeData[i].name ] } }, metadata) }, text : '  ' },
					{ elementType : 'span', text : metadataOutput.excludeData[i].name },
					{ elementType : 'span', className : 'fontsLibTagCount', text : ' (' + metadataOutput.excludeData[i].count + ')' }
				] }
			] }))
		}
		outputElement.appendChild(createElement({ elementType: 'br' }))
	}

	// For scrolling purposes, the unused tags need to be in their own container
	clearElement(fontsLibUnusedTagsContainer)
	let tempElement = { elementType : 'div', children : [] }
	for(let i = 0; i < metadataOutput.unusedData.length; i++) {
		if(metadataOutput.unusedData[i].count < 1) continue
		fontsLibUnusedTagsContainer.appendChild(createElement({ elementType : 'div', title : metadataOutput.unusedData[i].name, children : [
			{ elementType : 'span', className : 'fontsLibTag', children : [
				{ elementType : 'span', className : 'fontsLibExcludedTag', onclick : ()=>{ fontsLibChangeFilters({ exclude : { [metadata] : [ metadataOutput.unusedData[i].name ] } }, metadata) }, text : '  ' },
				{ elementType : 'span', className : 'fontsLibIncludedTag', onclick : ()=>{ fontsLibChangeFilters({ include : { [metadata] : [ metadataOutput.unusedData[i].name ] } }, metadata) }, text : '  ' },
				{ elementType : 'span', className : 'fontsLibClickableTag', text : metadataOutput.unusedData[i].name, onclick : ()=>{ fontsLibChangeFilters({ include : { [metadata] : [ metadataOutput.unusedData[i].name ] } }, metadata) } },
				{ elementType : 'span', className : 'fontsLibTagCount', text : ' (' + metadataOutput.unusedData[i].count + ')' }
			] }
		] }))
	}
//	fontsLibUnusedTagsContainer.appendChild(createElement(tempElement))
}

function fontsLibChangeNameFilter(newText, updateHash = true) {
	if(newText != '') {
		fontsLibNameFilter.value = newText
	} else {
		if(fontsLibFilters.include && fontsLibFilters.include.name) delete fontsLibFilters.include.name
	}
	fontsLibChangeFilters({ include : { name : newText } }, 'name', updateHash)
}

function fontsLibClearNameFilter() {
	fontsLibChangeNameFilter('')
	fontsLibNameFilter.value = ''
	fontsLibNameFilter.focus()
}

function fontsLibClearSampleText() {
	fontsLibChangeSampleText('')
	fontsLibSampleTextText.value = ''
	fontsLibSampleTextText.focus()
}

function fontsLibRenderPage(renderElement, fontsLibShowDownloadAndCSS = true, sampleText = null) {
	let tempHashData = fontsLibGetHashData()

	if(tempHashData.hasOwnProperty('displayTime')) fontsLibDisplayTime = tempHashData.displayTime

	renderElement.appendChild(createElement({ elementType : 'div', className : 'fontsLibContainer', children : [
		{ elementType : 'div', id : 'fontsLibFontSettings', children : [
			{ elementType : 'div', style : { padding : '0.75rem', flex : '0 0'}, children : [
				{ elementType : 'span', text : 'Sample Text:' },
				{ elementType : 'br' },
				{ elementType : 'div', className : 'fontsLibTextInputContainer', style : { display : 'flex', alignItems : 'center', justifyContent : 'center' }, children : [
					{ elementType : 'textarea', rows : 3, cols : 17, className : 'fontsLibFocusHighlight', id : 'fontsLibSampleTextText' },
					{ elementType : 'div', className : 'fontsLibClearButton', onclick : ()=>{ fontsLibClearSampleText() } },
				] },
				{ elementType : 'br' },
				{ elementType : 'span', text : 'Size: ' },
				{ elementType : 'span', id : 'fontsLibFontSizeText' },
				{ elementType : 'div', className : 'fontsLibSlidecontainer', children : [
					{ elementType : 'input', type : 'range', min : '8', max : '400', value : '4', step : '4', className : 'fontsLibFocusHighlight', id : 'fontsLibFontSize', oninput : ()=>{ fontsLibChangeAllSampleFontSizes(document.getElementById('fontsLibFontSize').value, false) }, onchange : ()=>{ document.getElementById('fontsLibFontSize').blur(); fontsLibChangeAllSampleFontSizes(document.getElementById('fontsLibFontSize').value) } },
				] },
				{ elementType : 'br' },
				{ elementType : 'span', text : 'Weight: ' },
				{ elementType : 'span', id : 'fontsLibFontWeightText' },
				{ elementType : 'div', className : 'fontsLibSlidecontainer', children : [
					{ elementType : 'div', style : { padding : '0em 0.25em 0em 0.5em', gridArea : '1/1', display : 'flex', flexDirection : 'row', alignItems : 'center', justifyContent : 'center' }, children : [
						{ elementType : 'div', style : { flex : '1 1', height : '100%', borderRight : '0.1em solid #FF05', borderLeft : '0.2em solid #FF05', }, },
						{ elementType : 'div', style : { flex : '1 1', height : '100%', borderRight : '0.1em solid #FF05', borderLeft : '0.1em solid #FF05', }, },
						{ elementType : 'div', style : { flex : '1 1', height : '100%', borderRight : '0.1em solid #FF05', borderLeft : '0.1em solid #FF05', }, },
						{ elementType : 'div', style : { flex : '1 1', height : '100%', borderRight : '0.1em solid #FF05', borderLeft : '0.1em solid #FF05', }, },
						{ elementType : 'div', style : { flex : '1 1', height : '100%', borderRight : '0.1em solid #FF05', borderLeft : '0.1em solid #FF05', }, },
						{ elementType : 'div', style : { flex : '1 1', height : '100%', borderRight : '0.1em solid #FF05', borderLeft : '0.1em solid #FF05', }, },
						{ elementType : 'div', style : { flex : '1 1', height : '100%', borderRight : '0.1em solid #FF05', borderLeft : '0.1em solid #FF05', }, },
						{ elementType : 'div', style : { flex : '1 1', height : '100%', borderRight : '0.2em solid #FF05', borderLeft : '0.1em solid #FF05', }, },
					] },
					{ elementType : 'input', type : 'range', min : nabFontsFontWeights.min, max : nabFontsFontWeights.max, value : nabFontsFontWeights['default'], step : '100', style : { gridArea : '1/1' }, className : 'fontsLibFocusHighlight', id : 'fontsLibFontWeight', oninput : ()=>{ fontsLibChangeElementWeights(document.getElementById('fontsLibFontWeight').value, false) }, onchange : ()=>{ document.getElementById('fontsLibFontWeight').blur(); fontsLibSetWeight(document.getElementById('fontsLibFontWeight').value) } },
				] },
				{ elementType : 'div', className : 'fontsLibFormatButtons', children : [
					{ elementType : 'div', className : 'fontsLibFormatButtonsContainer', children : [
						{ elementType : 'div', id : 'fontsLibItalicButton', title : 'Italic', className : 'fontsLibButton fontsLibItalicButton', onclick : ()=>{ fontsLibToggleItalic() }, text : '' }
					]},
				] },
				{ elementType : 'hr', width : '85%' },
				{ elementType : 'div', children : [
					{ elementType : 'div', className : 'fontsLibFiltersHeader', text : 'Filters' },
					{ elementType : 'span', className : 'fontsLibTagHeader', text : 'Name:' },
					{ elementType : 'br' },
					{ elementType : 'div', className : 'fontsLibTextInputContainer', style : { display : 'flex', alignItems : 'center', justifyContent : 'center' }, children : [
						{ elementType : 'input', type : 'text', size : '20', className : 'fontsLibFocusHighlight', id : 'fontsLibNameFilter' },
						{ elementType : 'div', className : 'fontsLibClearButton', onclick : ()=>{ fontsLibClearNameFilter() } },
					] },
					{ elementType : 'br' },
					{ elementType : 'span', className : 'fontsLibTagHeader', text : 'Authors:' },
					{ elementType : 'div', id : 'authorsContainer' },
					{ elementType : 'br' },
					{ elementType : 'span', className : 'fontsLibTagHeader', text : 'License:' },
					{ elementType : 'div', id : 'licenseContainer' },
				] },
			]},
			{ elementType : 'span', id : 'fontsLibMasterTagCount', className : 'fontsLibTagHeader', style : { paddingLeft : '0.75rem', paddingBottom : '0.35rem' }, children : [
				{ elementType : 'span', text : 'Tags (' + customFonts.tags.length.toString() + '):' }
			]},
			{ elementType : 'div', style : { flex : '1 1', display : 'flex', flexDirection : 'column', minHeight : '10em', overflow : 'auto', textAlign : 'left' }, children : [
				{ elementType : 'div', id : 'fontsLibFilteredTagsContainer' },
				{ elementType : 'div', id : 'fontsLibUnusedTagsContainer' },
			] },
		]},
		{ elementType : 'div', id : 'fontsLibNavigationPane', children : [
			{ elementType : 'div', className : 'fontsLibNavigationContainer', children : [
				{ elementType : 'div', className : 'fontsLibPlaybackTimer', children : [
					{ elementType : 'span', style : { flex : '1 1' }, text : 'Display Time:' },
					{ elementType : 'input', id : 'fontsLibPlaybackDelay', type : 'number', min : '1', max : '15', value : fontsLibDisplayTime, className : 'fontsLibPlaybackDelay fontsLibFocusHighlight', style : { textAlign : 'center' }, onchange : ()=>{ fontsLibSetHashData({ displayTime : document.getElementById('playbackDelay').value }); let tempPlaybackHashData = fontsLibGetHashData(); if(!tempPlaybackHashData.hasOwnProperty('playbackState') || tempPlaybackHashData.playbackState == 'play'){ fontsLibStop(); fontsLibPlay(); } } },
				]},
				{ elementType : 'div', className : 'fontsLibNavigation', children : [
					{ elementType : 'div', className : 'fontsLibNavButtonContainer', children : [
						{ elementType : 'div', id : 'fontsLibPrevButton', title : 'Previous Font', className : 'fontsLibButton fontsLibNavButton fontsLibPrevButton', onclick : ()=>{ fontsLibPrev() }, text : '' },
					]},
					{ elementType : 'div', className : 'fontsLibNavButtonContainer', children : [
						{ elementType : 'div', id : 'fontsLibPlayButton', title : 'Play', className : 'fontsLibButton fontsLibNavButton fontsLibPlayButton', onclick : ()=>{ fontsLibSetHashData({ playbackState : 'play' }); fontsLibPlay(); }, text : '' },
					]},
					{ elementType : 'div', className : 'fontsLibNavButtonContainer', children : [
						{ elementType : 'div', id : 'fontsLibStopButton', title : 'Stop', className : 'fontsLibButton fontsLibNavButton fontsLibStopButton', onclick : ()=>{ fontsLibSetHashData({ playbackState : 'stop' }); fontsLibStop() }, text : '' },
					]},
					{ elementType : 'div', className : 'fontsLibNavButtonContainer', children : [
						{ elementType : 'div', id : 'fontsLibNextButton', title : 'Next Font', className : 'fontsLibButton fontsLibNavButton fontsLibNextButton', onclick : ()=>{ fontsLibNext() }, text : '' },
					]},
				]},
			]},
			{ elementType : 'div', className : 'fontsLibFontSelectionColor', children : [
				{ elementType : 'span', id : 'fontsLibFontCount', className : 'fontsLibTagHeader' },
				{ elementType : 'select', id : 'fontsLibFontSelection',  size : '2', className : 'fontsLibFontSelectionColor fontsLibFocusHighlight',
					onchange : ()=>{ fontsLibCurrentFont = fontsLibFontSelection.value; fontsLibChangeAllSampleFonts(fontsLibCurrentFont); },
					onfocus : ()=>{ document.getElementById('fontsLibFontSelection').blur() },
				},
			]},
		]},
		{ elementType : 'div', id : 'fontsLibFontDisplayArea', children : [
			{ elementType : 'div', id : 'fontsLibFontInfoArea', children : [
				{ elementType : 'div', id : 'fontsLibFontTitle' },
				{ elementType : 'div', id : 'fontsLibFontAuthor' },
				{ elementType : 'div', id : 'fontsLibFontLicense' },
				{ elementType : 'div', id : 'fontsLibFontTags' },
				{ elementType : 'br' },
				{ elementType: 'div', className : 'fontsLibFontPathsLabel', text: 'File Paths (Click to download):' },
				{ elementType : 'div', id : 'fontsLibFontPaths' },
			]},
			{ elementType : 'div', id : 'fontsLibFontSampleArea', children : [
				{ elementType : 'div', id : 'fontsLibCSSStyles', children : [
					{ elementType : 'br' },
					{ elementType : 'div', style : { marginBottom : '1em' }, children : [
						{ elementType : 'span', onclick: ()=>{ let temp = document.getElementById('fontsLibCSSValue'); if(temp.style.display != 'none') { temp.style.display = 'none' } else { temp.style.display = 'block' } }, children : [
							{ elementType : 'span', className : 'fontsLibClickable', text : 'CSS Style Definition:  ' },
							{ elementType : 'button', className : 'fontsLibButton', style : { margin : '0px', fontFamily : '\'nabfonts monospace\', monospace', fontWeight : 'bold', fontSize : '0.75em', borderRadius : '0.35em', padding : '0.1em 0.5em 0.1em 0.5em', userSelect : 'none', cursor : 'pointer' }, text : 'Show/Hide' },
						] },
						{ elementType : 'pre', id : 'fontsLibCSSValue', style : { marginTop : '0.15em', display : 'none' }, className : 'fontsLibCharacterSampleContainers fontsLibFullWidth' },
					] },
				]},
				{ elementType : 'div', id : 'fontsLibInstructionsContainer', style : { marginBottom : '1em', userSelect: 'none' }, children : [
					{ elementType : 'span', style : { marginBottom : '1em' }, onclick: ()=>{ let temp = document.getElementById('fontsLibInstructions'); if(temp.style.display != 'none') { temp.style.display = 'none' } else { temp.style.display = 'block' } }, children : [
						{ elementType : 'span', className : 'fontsLibClickable', text : 'Instructions:  ' },
						{ elementType : 'button', className : 'fontsLibButton', style : { margin : '0px', fontFamily : '\'nabfonts monospace\', monospace', fontWeight : 'bold', fontSize : '0.75em', borderRadius : '0.35em', padding : '0.1em 0.5em 0.1em 0.5em', userSelect : 'none', cursor : 'pointer' }, text : 'Show/Hide' },
					] },
					{ elementType : 'br' },
					{ elementType : 'pre', id : 'fontsLibInstructions', style : { userSelect : 'text', marginTop : '0.15em' }, className : 'fontsLibCharacterSampleContainers fontsLibFullWidth fontsLibFocusHighlight' },
				] },
				{ elementType : 'div', children : [
					{ elementType : 'span', text : 'Sample Text:' },
					{ elementType : 'pre', id : 'fontsLibSampleTextArea', className : 'fontsLibCharacterSampleContainers fontsLibFullWidth fontsLibFocusHighlight' },
				] },
				{ elementType : 'div', children : [
					{ elementType : 'span', text : 'English Pangrams:' },
					{ elementType : 'div', id : 'pangrams', className : 'fontsLibFullWidth' },
				] },
				{ elementType : 'div', children : [
					{ elementType : 'span', text : 'Uppercase Letters:' },
					{ elementType : 'div', id : 'uppercaseLetters', className : 'fontsLibCharacterSampleContainers' },
				] },
				{ elementType : 'div', children : [
					{ elementType : 'span', text : 'Lowercase Letters:' },
					{ elementType : 'div', id : 'lowercaseLetters', className : 'fontsLibCharacterSampleContainers' },
				] },
				{ elementType : 'div', children : [
					{ elementType : 'span', text : 'Numbers, Punctuation & Symbols:' },
					{ elementType : 'div', id : 'punctuation', className : 'fontsLibCharacterSampleContainers' },
				] },
				{ elementType : 'div', children : [
					{ elementType : 'span', text : 'All unicode characters:' },
					{ elementType : 'div', id : 'fontsLibAllCharacters', className : 'fontsLibCharacterSampleContainers fontsLibFullWidth', children : [
						{ elementType : 'div', className : 'fontsLibCharacterBoxes', children : [
							{ elementType : 'div', className : 'fontsLibButton', style : { padding : '0.25em 1em 0.25em 1em', fontFamily : 'nabfonts sans-serif', fontSize : '1.5rem' }, onclick : ()=>{ if(hideAllCharacters.className.includes('fontsLibHidden')) { removeClassName(hideAllCharacters, 'fontsLibHidden') } else { addClassName(hideAllCharacters, 'fontsLibHidden') } }, children : [
								{ elementType : 'div', text : 'Click to show/hide all 1,114,112 Unicode characters.' },
								{ elementType : 'div', text : 'WARNING: WILL CAUSE LAG AND MAY CRASH YOUR BROWSER!' },
							] },
							{ elementType : 'div', id : 'hideAllCharacters', className : 'fontsLibHidden fontsLibFullWidth', children : [
								{ elementType : 'div', id : 'allCharactersOutput', className : 'fontsLibSampleCharacter fontsLibAllCharactersOutput' }
							] },
						] },
					] },
				] },
			] },
		]},
	]}))

	if(fontsLibShowDownloadAndCSS === false) {
		addClassName(document.getElementById('fontsLibFontPaths'), 'fontsLibHidden')
		addClassName(document.getElementById('fontsLibCSSStyles'), 'fontsLibHidden')
	}

	fontsLibDrawFontSamples()

	fontsLibRenderAsDropdown(authorsContainer, 'authors')
	fontsLibRenderAsDropdown(licenseContainer, 'licenses')

	// This is declared up above, but it has to be set here, after the font data is parsed
	fontsLibDefaultFont = customFonts.fontData[0].name

	if(sampleText !== null) {
		tempHashData.sampleText = sampleText
		fontsLibChangeSampleText(sampleText)
	}

	fontsLibUpdatePage()

	fontsLibSampleTextText.oninput = ()=>{ fontsLibChangeSampleText(fontsLibSampleTextText.value, false) }
	fontsLibSampleTextText.onchange = ()=>{ fontsLibChangeSampleText(fontsLibSampleTextText.value) }

	fontsLibNameFilter.oninput = ()=>{ fontsLibChangeNameFilter(fontsLibNameFilter.value, false) }
	fontsLibNameFilter.onchange = ()=>{ fontsLibChangeNameFilter(fontsLibNameFilter.value) }

	if(Object.keys(tempHashData).length == 0 || (tempHashData.hasOwnProperty('playbackState') && tempHashData.playbackState == 'play')) {
		fontsLibChangeAllSampleFonts(getRandomItemsFromArray(customFonts.fontNames)[0])
		fontsLibPlay()
	} else if(fontsLibUsePageHash != true) {
		fontsLibChangeAllSampleFonts(fontsLibFontSelection.value)
	}
}

function fontsLibPickRandomFont() {
	output = []
	for(let i = 0; i < fontsLibFontSelection.children.length; i++) {
		output.push(fontsLibFontSelection.children[i].value)
	}
	return getRandomItemsFromArray(output)[0]
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

	if(inputFontName == 'nabfonts serif') inputFontName = serifFont.toLowerCase()
	if(inputFontName == 'nabfonts sans-serif') inputFontName = sansSerifFont.toLowerCase()
	if(inputFontName == 'nabfonts cursive') inputFontName = cursiveFont.toLowerCase()
	if(inputFontName == 'nabfonts fantasy') inputFontName = fantasyFont.toLowerCase()
	if(inputFontName == 'nabfonts monospace') inputFontName = monospaceFont.toLowerCase()

	for(let i = 0; i < customFonts.fontData.length; i++) {
		if(customFonts.fontData[i].name.toLowerCase() == inputFontName) return i
	}

	printWarning('nabFonts.js: getFontIndex: Could not find font \'' + inputFontName +  '\'!')
	return false

/*
	// This method used to work until font alphabetization was changed...

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
		printWarning('nabFonts.js: getFontIndex: Could not find font \'' + inputFontName +  '\'!')
		return false
	}
	return mid
*/
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
							paths : [],
						}

	fontsLibParseFontDataIntoNewObject(newFontObject, customFonts.fontData[fontIndex])

	newFontObject.authors.sort(fontsLibSortTags)	// This line HAS to use the tag sort! Authors don't have a .name property
	newFontObject.styles.sort()
	newFontObject.weights.sort()
	newFontObject.tags.sort(fontsLibSortTags)

	return newFontObject
}

function fontsLibSortTags(a, b) {
	a = a.toLowerCase()
	b = b.toLowerCase()

	if (a == 'sans-serif') return -1
	if (a == 'serif') return -1
	if (a == 'symbols only') return -1

	if (b == 'sans-serif') return 1
	if (b == 'serif') return 1
	if (b == 'symbols only') return 1

	if (a < b) return -1
	if (a > b) return 1
	return 0
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
		if(array2[i] == '') continue
		match = false
		for(let j = 0; !match && j < array1.length; j++) {
			if(array2[i].toLowerCase() == array1[j].toLowerCase()) {
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

	if(incomingFontData.hasOwnProperty('instructions') && Array.isArray(incomingFontData.instructions) && incomingFontData.instructions.length > 0) {
		outputObject.instructions = []
		if(!Array.isArray(incomingFontData.instructions)) {
			incomingFontData.instructions = [ incomingFontData.instructions ]
		}
		for(let i = 0; i < incomingFontData.instructions.length; i++) {
			outputObject.instructions.push(incomingFontData.instructions[i])
		}
	}

	if(incomingFontData.hasOwnProperty('variants') && incomingFontData.variants.length > 0) {
		for(let i = 0; i < incomingFontData.variants.length; i++) {
			outputObject.styles = fontsLibMergeIntoArray(outputObject.styles, incomingFontData.variants[i].style)
			outputObject.weights = fontsLibMergeIntoArray(outputObject.weights, incomingFontData.variants[i].weight)
			if(incomingFontData.variants[i].path.indexOf('#') >= 0) {
				console.log('nabFontsLib: Error parsing font \'' + incomingFontData.name + '\': Hash symbols are illegal in file names!')
			}
			outputObject.paths.push(customFontPath + '/' + incomingFontData.variants[i].path)
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
								paths : [],
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

function sortFontsByName(a, b) {
	let x = a.name.trim().split(' ')
	let y = b.name.trim().split(' ')

	let temp = ''

	let i = 0
	for(; i < x.length && i < y.length; i++) {
		// Check both for roman numerals
		temp = convertRomanNumeralsToInt(x[i])
		if(temp !== false) x[i] = temp

		temp = convertRomanNumeralsToInt(y[i])
		if(temp !== false) y[i] = temp

		if(!isNaN(x[i]) && !isNaN(y[i])) {
			// If both are numbers, check to see which one is larger
			x[i] = parseFloat(x[i])
			y[i] = parseFloat(y[i])
			if(x[i] > y[i]) return 1
			if(x[i] < y[i]) return -1
		}

		// One might be a number and the other not. Check that
		if(typeof(x[i]) == 'number') return 1
		if(typeof(y[i]) == 'number') return -1

		// Both are strings. Compare accordingly
		x[i] = x[i].toLowerCase()
		y[i] = y[i].toLowerCase()
		let stringX = x[i]
		let stringY = y[i]

		// Detect semi condensed and semi expanded
		if(stringX == 'semi' && x.length > i + 1) {
			temp = x[i + 1].toLowerCase()
			if(temp == 'condensed' || temp == 'expanded') {
				stringX = stringX + ' ' + temp
			}
		}
		if(stringY == 'semi' && y.length > i + 1) {
			temp = y[i + 1].toLowerCase()
			if(temp == 'condensed' || temp == 'expanded') {
				stringY = stringY + ' ' + temp
			}
		}

		let widths = [ 'condensed', 'semi condensed', 'semi expanded', 'expanded' ]
		if(widths.includes(stringX) && !widths.includes(stringY)) return -1
		if(!widths.includes(stringX) && widths.includes(stringY)) return 1

		if(stringX == 'condensed' && stringY != 'condensed') return -1
		if(stringX == 'semi condensed' && stringY != 'semi condensed') {
			if(stringY != 'condensed') {
				return -1
			} else {
				return 1
			}
		}
		if(stringY == 'condensed') return 1
		if(stringY == 'semi condensed') return 1

		if(stringY == 'semi expanded' && stringX != 'semi expanded') {
			if(stringY != 'expanded') {
				return 1
			} else {
				return -1
			}
		}
		if(stringY == 'expanded' && stringX != 'expanded') return -1
		if(stringX == 'semi expanded') return 1
		if(stringX == 'expanded') return 1

		if(stringX == stringY) continue

		if(stringX < stringY) return -1
		if(stringX > stringY) return 1
	}

	// Detect a regular font vs condensed, semi condensed, semi expanded and expanded
	let stringX = x.slice(i).join(' ').toLowerCase()
	let stringY = y.slice(i).join(' ').toLowerCase()

	if(stringX == '') {
		switch (stringY) {
			case 'condensed':
			case 'semi condensed':
				return -1
				break
			case 'semi expanded':
			case 'expanded':
				return 1
				break
		}
	}
	if(stringY == '') {
		switch (stringX) {
			case 'condensed':
			case 'semi condensed':
				return -1
				break
			case 'semi expanded':
			case 'expanded':
				return 1
				break
		}
	}

	if(x.length > y.length) return 1
	if(x.length < y.length) return -1

	return 0
}

function sortFontDataByName(a, b) {
	let x = a.name.toLowerCase().trim()
	let y = b.name.toLowerCase().trim()
	if (x < y) return -1
	if (x > y) return 1
	return 0
}

function fontsLibAddTag(tagArray, newTag) {
	// This function adds a tag to a font, with no duplicates
	let temp = newTag.toLowerCase()
	let index = 0
	for(let i = 0; i < tagArray.length; i++) {
		if(tagArray[i].toLowerCase() == temp) return
	}

	tagArray.push(newTag)
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

	customFontData.sort(sortFontsByName)

	for(let i = 0; i < customFontData.length; i++) {
		// BEFORE sorting tags, make sure there's an instructions tag on the ones that need it!
		if(customFontData[i].hasOwnProperty('instructions')) {
			customFontData[i].tags.push('Has Instructions')
		}

		if(customFontData[i].name != '' && customFontData[i].path != '') {
			customFontData[i].tags.sort(fontsLibSortTags)
			customFontData[i].authors.sort(fontsLibSortTags)	// This line HAS to use the tag sort! Authors don't have a .name property

			let weights = []

			for(let j = 0; j < customFontData[i].variants.length; j++) {

				fontsLibAddTag(customFontData[i].tags, 'File Format: ' + fontsLibGetFileExtension(customFontData[i].variants[j].path.toUpperCase()))

				if(!customFontData[i].variants[j].hasOwnProperty('style')) {
					customFontData[i].variants[j].style = 'normal'
				} else {
					if(customFontData[i].variants[j].style.toLowerCase() == 'italic') fontsLibAddTag(customFontData[i].tags, 'Variant: Italic')
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

				fontsLibAddTag(weights, customFontData[i].variants[j].weight.toLowerCase())	// Abuse fontsLibAddTag on the weights array to get no duplicates
			}

			if(weights.length > 1) fontsLibAddTag(customFontData[i].tags, 'Weight: Multiple')
/*
// This got reeeeeally annoying, made too many tags
			for(let k = 0; k < weights.length; k++) {
				if(weights[k] != 'normal') {
					// Excluding normal weight, tag for it
					if(isNaN(weights[k])) {
						for(weightKey in nabFontsFontWeights) {
							if(nabFontsFontWeights[weightKey].toLowerCase() == weights[k]) {
								weights[k] = weightKey
								break
							}
						}
					}
					fontsLibAddTag(customFontData[i].tags, 'Weight: ' + weights[k].toString() + ' (' + nabFontsFontWeights[weights[k]] + ')')
				}
			}
*/
			customFontData[i].tags.sort(fontsLibSortTags)	// Sort the tags before finalizing!

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

	customFonts.authors.sort(sortFontDataByName)
	customFonts.tags.sort(sortFontDataByName)
	customFonts.licenses.sort(sortFontDataByName)


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

	if(document.getElementsByTagName('title').length == 0) {
		// No title element! We are probably running standalone. Make a title.
		let new_element = document.createElement('title')
		new_element.id = 'nabFontsPageTitleElement'
		document.head.appendChild(new_element)
		document.getElementById('nabFontsPageTitleElement').innerText = 'NabFontsLib'
	}

}

function createDefaultFont(fontName, defaultFamily) {
	if(fontName == '') return

	let fontObject = {}
	Object.assign(fontObject, getAllFontData(fontName))
	fontObject.name = 'nabfonts ' + defaultFamily

	createFontCSS([ fontObject ])
}

function fontsLibGetFileExtension(inputPath) {
	inputPath = inputPath.split('.').pop()
	inputPath = inputPath.split('?').shift()
	inputPath = inputPath.split('#').shift()
	return inputPath
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
			let fontFormat = fontsLibGetFileExtension(inputFonts[i].variants[j].path).toLowerCase()
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

if(!(typeof(nabLibPresent) === 'undefined') && nabLibPresent === true) {
	console.log('nabFontsLib: Parsing fonts, using path: "' + customFontPath + '"')
	fontsLibParseCustomFonts()	// DO NOT wait for the page to load, or we create a race condition!!
} else {
	console.log('nabLib.js not found! nabLib.js is required to use nabFonts.js, and nabLib.js MUST be loaded first.')
}
