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

	***   THIS FILE MUST BE THE VERY LAST ONE INCLUDED IN THE PAGE HEADER, OR THINGS MAY CONFLICT!   ***
	***   THIS FILE MUST BE THE VERY LAST ONE INCLUDED IN THE PAGE HEADER, OR THINGS MAY CONFLICT!   ***

	***   THIS FILE MUST BE THE VERY LAST ONE INCLUDED IN THE PAGE HEADER, OR THINGS MAY CONFLICT!   ***
	***   THIS FILE MUST BE THE VERY LAST ONE INCLUDED IN THE PAGE HEADER, OR THINGS MAY CONFLICT!   ***


	ALL FONTS FOUND IN FUNCTION:
		getCustomFonts()
	BELOW WILL BE AUTOMATICALLY PARSED WHEN THE WEB PAGE LOADS. IF YOU ADD NEW FONTS, YOU MUST SPECIFY THEM THERE!

		PARSED FONTS WILL BE STORED IN THE FOLLOWING OBJECT:
			customFonts = {
				paths : [],			// This is array of paths to the custom fonts (A single font can have many files)
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
} else {
	console.log('nabFontsLib: \'customFontPath\' has already been declared. Skipping.')
}

// If they have not already been set, let's set the default fonts here
// USE AN EMPTY STRING FOR NONE
if(typeof(serifFont) === 'undefined')			serifFont		=	'Crimson'
if(typeof(sansSerifFont) === 'undefined')		sansSerifFont	=	'Canada 1500'
if(typeof(cursiveFont) === 'undefined') 		cursiveFont		=	'Alex Brush'
if(typeof(fantasyFont) === 'undefined') 		fantasyFont		=	'Holy Union'
if(typeof(monospaceFont) === 'undefined') 		monospaceFont	=	'Cutive Mono'



function getCustomFonts() {
	return [	//	IF YOU ADD ANY ADDITIONAL FONTS, YOU MUST DEFINE THEM AS OBJECTS IN THIS ARRAY.
// DO NOT MODIFY THIS LINE			/* PYTHON START READ POINT */
		{
			name		:	"Acknowledge",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Acknowledge - by Aenigma Fonts/Acknowledge.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Block Shaped", "Pixelated", "Plain", "Retro" ]
		},
		{
			name		:	"Head-Ding Maker",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Head-Ding Maker - By Aenigma Fonts/Head-Ding Maker.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			instructions	:	[ "[font font='nabfonts sans-serif'][b size=125]To use:[/b][br][br]Choose a head shape by typing one of the following characters:[br][grid font='nabfonts monospace' cols=10][br][vbox][color fg=aa6]0[font font='head-ding maker' size=250]0 [/font][/color][/vbox][br][vbox][color fg=aa6]1[font font='head-ding maker' size=250]1~[/font][/color][/vbox][br][vbox][color fg=aa6]2[font font='head-ding maker' size=250]2 [/font][/color][/vbox][br][vbox][color fg=aa6]3[font font='head-ding maker' size=250]3 [/font][/color][/vbox][br][vbox][color fg=aa6]4[font font='head-ding maker' size=250]4 [/font][/color][/vbox][br][vbox][color fg=aa6]5[font font='head-ding maker' size=250]5 [/font][/color][/vbox][br][vbox][color fg=aa6]6[font font='head-ding maker' size=250]6 [/font][/color][/vbox][br][vbox][color fg=aa6]7[font font='head-ding maker' size=250]7 [/font][/color][/vbox][br][vbox][color fg=aa6]8[font font='head-ding maker' size=250]8 [/font][/color][/vbox][br][vbox][color fg=aa6]9[font font='head-ding maker' size=250]9 [/font][/color][/vbox][br][/grid][br][br]Next, choose eyes and a mouth from the following chart:[br][grid font='nabfonts monospace' cols=9 font='nabfonts monospace'][br][vbox][c][color fg=c33][b]A[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]A[/color][color fg=3cc]a [/font][size size=10][br][br][/size][b]a[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]B[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]B[/color][color fg=3cc]b [/font][size size=10][br][br][/size][b]b[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]C[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]C[/color][color fg=3cc]c [/font][size size=10][br][br][/size][b]c[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]D[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]D[/color][color fg=3cc]d [/font][size size=10][br][br][/size][b]d[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]E[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]E[/color][color fg=3cc]e [/font][size size=10][br][br][/size][b]e[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]F[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]F[/color][color fg=3cc]f [/font][size size=10][br][br][/size][b]f[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]G[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]G[/color][color fg=3cc]g [/font][size size=10][br][br][/size][b]g[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]H[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]H[/color][color fg=3cc]h [/font][size size=10][br][br][/size][b]h[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]I[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]I[/color][color fg=3cc]i [/font][size size=10][br][br][/size][b]i[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]J[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]J[/color][color fg=3cc]j [/font][size size=10][br][br][/size][b]j[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]K[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]K[/color][color fg=3cc]k [/font][size size=10][br][br][/size][b]k[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]L[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]L[/color][color fg=3cc]l [/font][size size=10][br][br][/size][b]l[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]M[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]M[/color][color fg=3cc]m [/font][size size=10][br][br][/size][b]m[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]N[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]N[/color][color fg=3cc]n [/font][size size=10][br][br][/size][b]n[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]O[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]O[/color][color fg=3cc]o [/font][size size=10][br][br][/size][b]o[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]P[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]P[/color][color fg=3cc]p [/font][size size=10][br][br][/size][b]p[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]Q[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]Q[/color][color fg=3cc]q [/font][size size=10][br][br][/size][b]q[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]R[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]R[/color][color fg=3cc]r [/font][size size=10][br][br][/size][b]r[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]S[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]S[/color][color fg=3cc]s [/font][size size=10][br][br][/size][b]s[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]T[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]T[/color][color fg=3cc]t [/font][size size=10][br][br][/size][b]t[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]U[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]U[/color][color fg=3cc]u [/font][size size=10][br][br][/size][b]u[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]V[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]V[/color][color fg=3cc]v [/font][size size=10][br][br][/size][b]v[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]W[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]W[/color][color fg=3cc]w [/font][size size=10][br][br][/size][b]w[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]X[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]X[/color][color fg=3cc]x [/font][size size=10][br][br][/size][b]x[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]Y[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]Y[/color][color fg=3cc]y [/font][size size=10][br][br][/size][b]y[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]Z[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]Z[/color][color fg=3cc]z [/font][size size=10][br][br][/size][b]z[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]_[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]_[/color][color fg=3cc]- [/font][size size=10][br][br][/size][b]-[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]+[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]+[/color][color fg=3cc]= [/font][size size=10][br][br][/size][b]=[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]|[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]|[/color][color fg=3cc]\\ [/font][size size=10][br][br][/size][b]\\[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]{[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]{[/color][color fg=3cc][ [/font][size size=10][br][br][/size][b][[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]}[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]}[/color][color fg=3cc]] [/font][size size=10][br][br][/size][b]][/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]:[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]:[/color][color fg=3cc]; [/font][size size=10][br][br][/size][b];[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]\"[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]\"[/color][color fg=3cc]' [/font][size size=10][br][br][/size][b]'[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]<[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]<[/color][color fg=3cc], [/font][size size=10][br][br][/size][b],[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]>[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]>[/color][color fg=3cc]. [/font][size size=10][br][br][/size][b].[/b][/color][/c][/vbox][br][vbox][c][color fg=c33][b]?[/b][br][font font='head-ding maker' size=250][color fg=aa6]0[/color]?[/color][color fg=3cc]/ [/font][size size=10][br][br][/size][b]/[/b][/color][/c][/vbox][br][/grid][br][br]After this, type a space to move on to the next character.[br]If you used face shape [b fg=aa6]1[/b], use a ~ to get the correct size space.[br][br]Since everything is drawn in-place, you can stack multiple face shapes, eyes and mouths if you like.[br][/font]" ],
			license		:	"Freeware",
			tags		:	[ "Symbol", "Faces" ]
		},
		{
			name		:	"Half Eighties",
			authors		:	[ "Jayvee Enaguas" ],
			variants	:	[
				{
					path		:	"Half Eighties - by Jayvee Enaguas/Half Eighties.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"SIL Open Font License",
			tags		:	[ "Sans-Serif", "Retro", "Pixelated", "Block Shaped", "Monospace" ]
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
			license		:	"ShareAlike License",
			tags		:	[ "Sans-Serif", "Calligraphy", "Thick Chars", "Elegant", "Partial Symbol Set", "Irregular Chars" ]
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
			license		:	"SIL Open Font License",
			tags		:	[ "Sans-Serif", "Broken Letters", "Rounded Chars" ]
		},
		{
			name		:	"Automatica",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Automatica - by Aenigma Fonts/Automatica.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Rounded Chars", "Rounded Edges", "Thick Chars", "Wide Chars" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Playful", "No Symbols", "Ornamental", "Broken Letters", "Irregular Chars" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Playful", "Outline", "Broken Letters", "Ornamental", "Thick Chars", "No Symbols" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Playful", "Striped", "Decay", "Broken Letters", "Ornamental", "No Symbols" ]
		},
		{
			name		:	"Blockbusta",
			authors		:	[ "Fenotype" ],
			variants	:	[
				{
					path		:	"_Fenotype Fonts/Blockbusta.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Negative Space", "Offset", "Angular", "Logo", "Blockbuster", "Ornamental", "No Lowercase", "Outline", "Partial Symbol Set" ]
		},
		{
			name		:	"Projects",
			authors		:	[ "Fenotype" ],
			variants	:	[
				{
					path		:	"_Fenotype Fonts/Projects.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Decay", "Negative Space", "Outline", "Block Shaped", "Ornamental", "Thick Chars", "No Uppercase", "Partial Symbol Set", "Slanted" ]
		},
		{
			name		:	"Lastu # 2",
			authors		:	[ "Fenotype" ],
			variants	:	[
				{
					path		:	"_Fenotype Fonts/Lastu 2.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "No Uppercase", "Partial Symbol Set", "Ornamental", "Hard To Read", "Negative Space" ]
		},
		{
			name		:	"Simpletype",
			authors		:	[ "Fenotype" ],
			variants	:	[
				{
					path		:	"_Fenotype Fonts/Simpletype.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Negative Space", "3D", "Offset", "Ornamental", "Partial Symbol Set", "Angular" ]
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
			license		:	"SIL Open Font License",
			tags		:	[ "Serif", "Script", "Handwriting", "Thick Chars", "Broken Letters", "Elegant" ]
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
			license		:	"SIL Open Font License",
			tags		:	[ "Serif", "Script", "Elegant", "Handwriting", "Slanted" ]
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
			license		:	"SIL Open Font License",
			tags		:	[ "Serif", "Script", "Thick Chars", "Broken Letters", "Curvy Letters", "Slanted", "Leading Left Hook", "Calligraphy" ]
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
			license		:	"SIL Open Font License",
			tags		:	[ "Serif", "Script", "Broken Letters", "Curvy Letters", "Leading Left Hook", "Calligraphy" ]
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
			license		:	"SIL Open Font License",
			tags		:	[ "Serif", "Script", "Handwriting", "Elegant", "Calligraphy"  ]
		},
		{
			name		:	"Blox",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Blox - by Aenigma Fonts/Blox.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Decorated", "Blocks", "3D", "No Lowercase", "Ornamental", "No Symbols"  ]
		},
		{
			name		:	"Candy Stripe",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Candy Stripe - by Aenigma Fonts/Candy Stripe.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Partial Symbol Set", "Holiday", "Striped", "Ornamental" ]
		},
		{
			name		:	"Circulate",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Circulate - by Aenigma Fonts/Circulate.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Negative Space", "Irregular Chars", "Decorated" ]
		},
		{
			name		:	"Classic Trash 1",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Classic Trash - by Aenigma Fonts/Classic Trash 1.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "Plain", "Playful" ]
		},
		{
			name		:	"Classic Trash 2",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Classic Trash - by Aenigma Fonts/Classic Trash 2.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "Plain", "Playful" ]
		},
		{
			name		:	"Crackdown R",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Crackdown - by Aenigma Fonts/Crackdown R.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Plain", "Rounded Edges" ]
		},
		{
			name		:	"Crackdown R2",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Crackdown - by Aenigma Fonts/Crackdown R2.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Plain", "Rounded Edges" ]
		},
		{
			name		:	"Crackdown Outline 1",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Crackdown - by Aenigma Fonts/Crackdown Outline 1.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Plain", "Thick Chars", "Negative Space", "Outline", "Rounded Edges" ]
		},
		{
			name		:	"Crackdown Outline 2",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Crackdown - by Aenigma Fonts/Crackdown Outline 2.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Plain", "Thick Chars", "Negative Space", "Outline", "Rounded Edges" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Angular", "Block Shaped", "Pixelated", "Partial Symbol Set" ]
		},
		{
			name		:	"Cutive",
			authors		:	[ "Vernon Adams" ],
			variants	:	[
				{
					path		:	"Cutive - by Vernon Adams/Cutive.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"SIL Open Font License",
			tags		:	[ "Serif", "Formal", "Plain" ]
		},
		{
			name		:	"Cutive Mono",
			authors		:	[ "Vernon Adams" ],
			variants	:	[
				{
					path		:	"Cutive - by Vernon Adams/Cutive Mono.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"SIL Open Font License",
			tags		:	[ "Serif", "Plain", "Formal", "Typewriter" ]
		},
		{
			name		:	"Dynamic",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Dynamic - by Aenigma Fonts/Dynamic.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Thick Chars", "Broken Letters", "Rounded Chars" ]
		},
		{
			name		:	"Edit Undo",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Edit Undo - by Aenigma Fonts/Edit Undo.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Pixelated", "Retro", "Thick Chars", "No Lowercase" ]
		},
		{
			name		:	"Edit Undo Line",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Edit Undo - by Aenigma Fonts/Edit Undo Line.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Pixelated", "Retro", "Thick Chars", "No Lowercase", "Striped" ]
		},
		{
			name		:	"Edit Undo Dot",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Edit Undo - by Aenigma Fonts/Edit Undo Dot.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Pixelated", "Retro", "Thick Chars", "No Lowercase", "Dotted" ]
		},
		{
			name		:	"Graze",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Graze - by Aenigma Fonts/Graze.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Angular", "Monospace", "Sideways", "Block Shaped", "Decorated", "Ornamental", "Hard To Read", "Thick Chars" ]
		},
		{
			name		:	"Grudge 2",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Grudge - by Aenigma Fonts/Grudge 2.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Negative Space", "Ornamental", "Decorated", "No Lowercase" ]
		},
		{
			name		:	"Anasthesia",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Anasthesia.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Anasthesia Italic.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Partial Symbol Set", "Ornamental" ]
		},
		{
			name		:	"Gawain",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Gawain.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "No Symbols", "Ornamental", "No Lowercase", "Outline", "Thick Chars" ]
		},
		{
			name		:	"Grave Digger",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Grave Digger.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "Partial Symbol Set", "Leading Left Hook", "Gothic", "Ornamental", "Broken Letters" ]
		},
		{
			name		:	"HOUSEPIPES",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/HOUSEPIPES.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/HOUSEPIPES Italic.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Partial Symbol Set", "No Lowercase", "Pixelated", "Retro" ]
		},
		{
			name		:	"King Arthur Special",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/King Arthur Special.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Partial Symbol Set", "Playful", "Irregular Chars", "Broken Letters" ]
		},
		{
			name		:	"Movieboard",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Movieboard.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Ornamental", "Decorated", "No Lowercase", "No Symbols", "Negative Space" ]
		},
		{
			name		:	"Nails",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Nails.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Ornamental", "Partial Symbol Set", "No Lowercase", "Broken Letters", "Nails" ]
		},
		{
			name		:	"Oneworldonefuture",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Oneworldonefuture.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Oneworldonefuture Extra Bold.ttf",
					style		:	"normal",
					weight		:	"bold",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Narrow Chars", "No Lowercase", "Partial Symbol Set", "Block Shaped" ]
		},
		{
			name		:	"Palms",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Palms.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "No Lowercase", "Partial Symbol Set", "Leaves", "Ornamental" ]
		},
		{
			name		:	"Perlenkette",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Perlenkette.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Ornamental", "Partial Symbol Set", "No Lowercase", "Dotted" ]
		},
		{
			name		:	"Rave",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Rave.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Block Shaped", "Wide Chars", "Partial Symbol Set", "Ornamental" ]
		},
		{
			name		:	"Remakeoffabulous",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Remakeoffabulous.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "No Uppercase", "Partial Symbol Set", "Thick Chars" ]
		},
		{
			name		:	"Remakeoffabulous2",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Remakeoffabulous2.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "No Uppercase", "Partial Symbol Set", "Narrow Chars" ]
		},
		{
			name		:	"Remakeoffabulous3",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Remakeoffabulous3.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "No Uppercase", "Partial Symbol Set", "Wide Chars", "Thick Chars" ]
		},
		{
			name		:	"Shredded For You",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Shredded For You.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "No Lowercase", "Ornamental", "Partial Symbol Set", "Thick Chars", "Broken Letters" ]
		},
		{
			name		:	"Square Unique",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Square Unique.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Square Unique Extra Bold.ttf",
					style		:	"normal",
					weight		:	"bold",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Block Shaped", "Partial Symbol Set", "Wide Chars", "Angular" ]
		},
		{
			name		:	"Square Unique Thin",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Square Unique Thin.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Square Unique.ttf",
					style		:	"normal",
					weight		:	"bold",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Block Shaped", "Partial Symbol Set", "Wide Chars", "Angular" ]
		},
		{
			name		:	"Starbats",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Starbats.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Ornamental", "Decorated", "Negative Space", "No Lowercase", "No Symbols", "Monospace" ]
		},
		{
			name		:	"Storm",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Storm.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Ornamental", "Slanted", "Thick Chars", "Decay", "Distorted", "Partial Symbol Set", "No Lowercase" ]
		},
		{
			name		:	"STRIPES & STARS",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/STRIPES & STARS.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Ornamental", "Broken Letters", "Striped", "Dotted", "No Lowercase", "Partial Symbol Set" ]
		},
		{
			name		:	"Triangle",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Triangle.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Playful", "Irregular Chars", "Partial Symbol Set" ]
		},
		{
			name		:	"Zacken",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Zacken.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "No Lowercase", "Partial Symbol Set", "Negative Space", "Decorated", "Distorted", "Ornamental" ]
		},
		{
			name		:	"37 Kilobyte",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/37 Kilobyte.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Ornamental", "Broken Letters", "No Lowercase", "Partial Symbol Set", "Thick Chars", "Rounded Chars" ]
		},
		{
			name		:	"A To Z",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/A To Z.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "No Lowercase", "No Symbols", "Distorted", "Pixelated", "Retro", "Ornamental" ]
		},
		{
			name		:	"309",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/309.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/309 Italic.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "Partial Symbol Set", "No Lowercase", "Thick Chars", "Ornamental", "Rounded Edges" ]
		},
		{
			name		:	"BALL",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/BALL.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Partial Symbol Set", "Dotted", "Irregular Chars", "Ornamental" ]
		},
		{
			name		:	"BIGARIAL",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/BIGARIAL.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Negative Space", "Ornamental", "Thick Chars", "Partial Symbol Set", "No Lowercase" ]
		},
		{
			name		:	"BIGARIALLEFT",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/BIGARIALLEFT.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Negative Space", "Ornamental", "Sideways", "Hard To Read", "Thick Chars", "Partial Symbol Set", "No Lowercase" ]
		},
		{
			name		:	"Bizzare",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Bizzare.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Bizzare Bold.ttf",
					style		:	"normal",
					weight		:	"bold",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Irregular Chars", "Angular", "No Lowercase", "Ornamental", "No Symbols", "Broken Letters", "Hard To Read" ]
		},
		{
			name		:	"Brial",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Brial.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Broken Letters", "Ornamental", "Thick Chars" ]
		},
		{
			name		:	"Bulgari",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Bulgari.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "Broken Letters", "Ornamental", "Slanted", "Partial Symbol Set", "Rounded Chars" ]
		},
		{
			name		:	"Certified",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Certified.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Certified Italic.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Partial Symbol Set", "Plain" ]
		},
		{
			name		:	"Coffee Beans",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Coffee Beans.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "No Symbols", "No Lowercase", "Ornamental", "Dotted" ]
		},
		{
			name		:	"Competent",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Competent.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Partial Symbol Set", "Broken Letters", "Plain" ]
		},
		{
			name		:	"Danceclub",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Danceclub.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Thick Chars", "Partial Symbol Set", "Ornamental", "No Lowercase" ]
		},
		{
			name		:	"Dar Skin",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Dar Skin.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Texture", "Thick Chars", "Ornamental", "No Lowercase", "Partial Symbol Set" ]
		},
		{
			name		:	"Datacut",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Datacut.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Datacut Italic.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Partial Symbol Set", "Ornamental", "Thick Chars" ]
		},
		{
			name		:	"DomoAregato",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/DomoAregato.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/DomoAregato Italic.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Broken Letters", "Playful", "Partial Symbol Set", "Irregular Chars", "Ornamental", "Curvy Letters" ]
		},
		{
			name		:	"Dornen",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Dornen.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "No Symbols", "No Lowercase", "Angular", "Ornamental", "Thick Chars" ]
		},
		{
			name		:	"Energy Dimension",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Energy Dimension.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "3D", "Partial Symbol Set", "Offset", "No Lowercase", "Ornamental", "Outline" ]
		},
		{
			name		:	"Eniltuo",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Eniltuo.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Negative Space", "Outline", "Slanted", "Partial Symbol Set", "Ornamental", "Broken Letters" ]
		},
		{
			name		:	"FM College Team In&Out",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/FM College Team In&Out.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Angular", "Partial Symbol Set", "Block Shaped", "Outline", "Ornamental" ]
		},
		{
			name		:	"FM University",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/FM University.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Thick Chars", "Partial Symbol Set", "No Lowercase", "Block Shaped", "Outline", "Ornamental" ]
		},
		{
			name		:	"FM College Team",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/FM College Team.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Angular", "Partial Symbol Set", "Block Shaped" ]
		},
		{
			name		:	"FM College Team Outline",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/FM College Team Outline.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Angular", "Partial Symbol Set", "Block Shaped", "Negative Space", "Outline", "Ornamental" ]
		},
		{
			name		:	"Fat Marker",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Fat Marker.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Fat Marker Italic.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Playful", "Irregular Chars", "Marker", "Handwriting", "Partial Symbol Set" ]
		},
		{
			name		:	"Fontmaker Slash",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Fontmaker Slash.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Partial Symbol Set", "Thin Chars", "No Lowercase", "Angular", "Ornamental" ]
		},
		{
			name		:	"Fontovision",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Fontovision.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "Leading Left Hook", "No Uppercase", "Partial Symbol Set", "Ornamental", "Thick Chars", "Slanted" ]
		},
		{
			name		:	"Fontovision II",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Fontovision II.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "Leading Left Hook", "3D", "No Uppercase", "Partial Symbol Set", "Ornamental", "Thick Chars", "Slanted" ]
		},
		{
			name		:	"Fontovision III",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Fontovision III.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "Leading Left Hook", "3D", "No Uppercase", "Partial Symbol Set", "Ornamental", "Thick Chars", "Slanted" ]
		},
		{
			name		:	"Fontovision IV",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Fontovision IV.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "Leading Left Hook", "Outline", "Negative Space", "No Uppercase", "Partial Symbol Set", "Ornamental", "Thick Chars", "Slanted" ]
		},
		{
			name		:	"Hammerhead",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Hammerhead.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Hammerhead Italic.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Angular", "Composite Font", "No Lowercase", "Logo", "Partial Symbol Set", "Broken Letters", "Thick Chars" ]
		},
		{
			name		:	"Hammerhead Thin",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Hammerhead Thin.ttf",
					style		:	"normal",
					weight		:	"200",
				},
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Hammerhead Thin Italic.ttf",
					style		:	"italic",
					weight		:	"200",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Angular", "No Lowercase", "Logo", "Partial Symbol Set", "Broken Letters" ]
		},
		{
			name		:	"Hammerhead Outline",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Hammerhead Outline.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Hammerhead Outline Italic.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Angular", "Composite Font", "No Lowercase", "Logo", "Partial Symbol Set", "Broken Letters", "Negative Space", "Outline", "Thick Chars" ]
		},
		{
			name		:	"Hearts",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Hearts - by Aenigma Fonts/Hearts.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			instructions	:	[ "After typing in your text, type an underscore  [b fg=f44 size=150]_[/b]  to close up the last heart." ],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Decorated", "Heart", "Monospace", "Ornamental", "No Lowercase", "Partial Symbol Set", "Negative Space", "Outline" ]
		},
		{
			name		:	"It Lives In The Swamp",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/It Lives In The Swamp - by Aenigma Fonts/It Lives In The Swamp.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Ornamental", "Handwriting", "Dripping", "Logo" ]
		},
		{
			name		:	"Kaliber Solid",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Kaliber - by Aenigma Fonts/Kaliber Solid.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Angular", "Partial Symbol Set", "Block Shaped", "Slanted", "Thick Chars" ]
		},
		{
			name		:	"Kaliber Round",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Kaliber - by Aenigma Fonts/Kaliber Round.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Rounded Chars", "Partial Symbol Set", "Block Shaped", "Slanted", "Thick Chars" ]
		},
		{
			name		:	"Kaliber Xtreme",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Kaliber - by Aenigma Fonts/Kaliber Xtreme.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Alien", "Playful", "Partial Symbol Set", "Slanted", "Thick Chars" ]
		},
		{
			name		:	"Loki Cola",
			authors		:	[ "Utopia Fonts" ],
			variants	:	[
				{
					path		:	"Loki Cola - by Utopia Fonts/Loki Cola.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "Logo", "Script", "Slanted", "Elegant", "Partial Symbol Set", "Coca-Cola", "Leading Left Hook", "Ornamental" ]
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
			license		:	"SIL Open Font License",
			tags		:	[ "Serif", "Elegant", "Handwriting", "Script", "Slanted" ]
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
			license		:	"SIL Open Font License",
			tags		:	[ "Serif", "Handwriting", "Script", "Slanted" ]
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
			license		:	"SIL Open Font License",
			tags		:	[ "Sans-Serif", "Handwriting", "Calligraphy", "Elegant", "Script", "Slanted" ]
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
			license		:	"SIL Open Font License",
			tags		:	[ "Sans-Serif", "Handwriting", "Script", "Slanted" ]
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
			license		:	"SIL Open Font License",
			tags		:	[ "Sans-Serif", "Handwriting", "Script", "Elegant", "Slanted" ]
		},
		{
			name		:	"Dancing Script",
			authors		:	[ "Impallari Type" ],
			variants	:	[
				{
					path		:	"Dancing Script - by Impallari Type/DancingScript-Regular.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"Dancing Script - by Impallari Type/DancingScript-Medium.ttf",
					style		:	"normal",
					weight		:	"500",
				},
				{
					path		:	"Dancing Script - by Impallari Type/DancingScript-SemiBold.ttf",
					style		:	"normal",
					weight		:	"600",
				},
				{
					path		:	"Dancing Script - by Impallari Type/DancingScript-Bold.ttf",
					style		:	"normal",
					weight		:	"700",
				},
			],
			license		:	"SIL Open Font License",
			tags		:	[ "Sans-Serif", "Handwriting", "Script", "Elegant", "Slanted" ]
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
			license		:	"SIL Open Font License",
			tags		:	[ "Serif", "Handwriting", "Elegant", "Script", "Curvy Letters" ]
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
			license		:	"SIL Open Font License",
			tags		:	[ "Sans-Serif", "Formal", "Script", "Plain", "Elegant", "Slanted" ]
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
			license		:	"SIL Open Font License",
			tags		:	[ "Sans-Serif", "Handwriting", "Calligraphy", "Script", "Slanted" ]
		},
		{
			name		:	"Mage 1999",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Mage 1999.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Thick Chars", "Pixelated", "Broken Letters", "Ornamental", "Retro", "Partial Symbol Set" ]
		},
		{
			name		:	"Mishmash",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Mishmash - by Aenigma Fonts/Mishmash.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Rounded Chars", "Plain", "Block Shaped", "Ornamental" ]
		},
		{
			name		:	"Mishmash Fuse",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Mishmash - by Aenigma Fonts/Mishmash Fuse.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Rounded Chars", "Plain", "Block Shaped", "Ornamental", "Negative Space", "Offset" ]
		},
		{
			name		:	"Libre Baskerville",
			authors		:	[ "Impallari Type" ],
			variants	:	[
				{
					path		:	"Libre Baskerville - by Impallari Type/Libre Baskerville.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"Libre Baskerville - by Impallari Type/Libre Baskerville Italic.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
				{
					path		:	"Libre Baskerville - by Impallari Type/Libre Baskerville Bold.ttf",
					style		:	"normal",
					weight		:	"bold",
				},
			],
			license		:	"SIL Open Font License",
			tags		:	[ "Serif", "Plain", "Formal" ]
		},
		{
			name		:	"Mishmash ALT1",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Mishmash - by Aenigma Fonts/Mishmash ALT1.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Angular", "Playful", "Ornamental", "No Lowercase", "Block Shaped" ]
		},
		{
			name		:	"Mishmash ALT2",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Mishmash - by Aenigma Fonts/Mishmash ALT2.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Angular", "Playful", "Ornamental", "No Lowercase", "Block Shaped" ]
		},
		{
			name		:	"Mishmash 4x4o",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Mishmash - by Aenigma Fonts/Mishmash 4x4o.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Angular", "Playful", "Broken Letters", "Ornamental", "Decorated", "Negative Space", "No Lowercase", "Block Shaped" ]
		},
		{
			name		:	"Mishmash 4x4i",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Mishmash - by Aenigma Fonts/Mishmash 4x4i.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Angular", "Playful", "Broken Letters", "Ornamental", "No Lowercase", "Block Shaped" ]
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
			license		:	"SIL Open Font License",
			tags		:	[ "Sans-Serif", "Plain", "Wide Chars", "Block Shaped" ]
		},
		{
			name		:	"Perfect Dark",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Perfect Dark - by Aenigma Fonts/Perfect Dark.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "Retro", "Thick Chars", "Angular", "Broken Letters", "Logo", "Partial Symbol Set", "No Lowercase", "Ornamental" ]
		},
		{
			name		:	"Persuasion",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Persuasion - by Aenigma Fonts/Persuasion.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Playful", "Thick Chars" ]
		},
		{
			name		:	"Plasma Drip",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Plasma Drip - by Aenigma Fonts/Plasma Drip.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Dripping", "Thick Chars", "Ornamental", "Halloween" ]
		},
		{
			name		:	"Plasma Drip Empty",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Plasma Drip - by Aenigma Fonts/Plasma Drip Empty.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Dripping", "Thick Chars", "Ornamental", "Halloween", "Negative Space", "Outline" ]
		},
		{
			name		:	"Pseudo",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Pseudo - by Aenigma Fonts/Pseudo.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Striped", "Thick Chars", "Partial Symbol Set", "Hard To Read", "Block Shaped", "Ornamental" ]
		},
		{
			name		:	"Registry",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Registry - by Aenigma Fonts/Registry.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Script", "Handwriting", "Slanted", "Broken Letters", "Thick Chars" ]
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
			license		:	"SIL Open Font License",
			tags		:	[ "Sans-Serif", "Thick Chars", "Plain" ]
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
			license		:	"ShareAlike License",
			tags		:	[ "Sans-Serif", "Angular", "Broken Letters", "No Lowercase", "Ornamental", "Thick Chars", "Partial Symbol Set" ]
		},
		{
			name		:	"Roses Are FF0000",
			authors		:	[ "A J Paglia" ],
			variants	:	[
				{
					path		:	"_A J Paglia Fonts/Roses Are FF0000.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Pixelated", "Retro" ]
		},
		{
			name		:	"Iron Sans",
			authors		:	[ "A J Paglia" ],
			variants	:	[
				{
					path		:	"_A J Paglia Fonts/Iron Sans.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "No Lowercase", "Angular", "Negative Space", "Partial Symbol Set", "Ornamental" ]
		},
		{
			name		:	"Wicked Grit",
			authors		:	[ "A J Paglia" ],
			variants	:	[
				{
					path		:	"_A J Paglia Fonts/Wicked Grit.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Texture", "No Lowercase", "Partial Symbol Set", "Negative Space", "Thick Chars", "Ornamental" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Broken Letters", "Ornamental", "Hard To Read", "Angular" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Logo", "Thick Chars", "Partial Symbol Set", "No Lowercase", "Leading Left Hook", "Star Wars", "Ornamental" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Broken Letters", "Logo", "Thick Chars", "Partial Symbol Set", "No Lowercase", "Star Wars", "Ornamental", "Negative Space", "Outline" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Logo", "Thick Chars", "Partial Symbol Set", "No Lowercase", "Leading Left Hook", "Star Wars", "Ornamental" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Logo", "Thick Chars", "Partial Symbol Set", "No Lowercase", "Leading Left Hook", "Star Wars", "Ornamental" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Logo", "Thick Chars", "Partial Symbol Set", "No Lowercase", "Leading Left Hook", "Star Wars", "Ornamental" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Broken Letters", "Logo", "Thick Chars", "Partial Symbol Set", "No Lowercase", "Star Wars", "Ornamental", "Outline" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Logo", "Thick Chars", "Partial Symbol Set", "No Lowercase", "Leading Left Hook", "Star Wars", "Ornamental", "Broken Letters" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Logo", "Negative Space", "Narrow Chars", "Offset", "Star Trek", "No Lowercase", "Outline" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Logo", "Negative Space", "Narrow Chars", "Offset", "Star Trek", "No Lowercase", "Slanted", "Outline" ]
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
			license		:	"Freeware",
			tags		:	[ "Serif", "Gothic", "Elegant" ]
		},
		{
			name		:	"Combermere",
			authors		:	[ "J Hudson" ],
			variants	:	[
				{
					path		:	"Combermere - by J Hudson/Combermere.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"SIL Open Font License",
			tags		:	[ "Serif", "Gothic", "Elegant", "Calligraphy" ]
		},
		{
			name		:	"QTLinoscroll",
			authors		:	[ "John Colletti" ],
			variants	:	[
				{
					path		:	"QTLinoscroll - by John Colletti/QTLinoscroll.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"SIL Open Font License",
			tags		:	[ "Serif", "Gothic", "Elegant" ]
		},
		{
			name		:	"QTLondonScroll",
			authors		:	[ "John Colletti" ],
			variants	:	[
				{
					path		:	"QTLondonScroll - by John Colletti/QTLondonScroll.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"SIL Open Font License",
			tags		:	[ "Serif", "Gothic", "Elegant" ]
		},
		{
			name		:	"CAT Engravers",
			authors		:	[ "Peter Wiegel" ],
			variants	:	[
				{
					path		:	"CAT Engravers - by Peter Wiegel/CAT Engravers.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"SIL Open Font License",
			tags		:	[ "Serif", "Gothic", "Elegant" ]
		},
		{
			name		:	"Jena Gotisch",
			authors		:	[ "Peter Wiegel" ],
			variants	:	[
				{
					path		:	"Jena Gotisch - by Peter Wiegel/Jena Gotisch.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"SIL Open Font License",
			tags		:	[ "Serif", "Gothic", "Elegant", "Ornamental", "Hard To Read" ]
		},
		{
			name		:	"Syndrome",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Syndrome - by Aenigma Fonts/Syndrome.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Thick Chars", "Broken Letters", "Ornamental" ]
		},
		{
			name		:	"Synthetic",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Synthetic - by Aenigma Fonts/Synthetic.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Broken Letters", "Ornamental", "Hard To Read", "Narrow Chars" ]
		},
		{
			name		:	"Technique",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Technique - by Aenigma Fonts/Technique.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Thick Chars", "Block Shaped", "Broken Letters", "Rounded Chars", "Rounded Edges", "Ornamental" ]
		},
		{
			name		:	"Technique Outline",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Technique - by Aenigma Fonts/Technique Outline.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Thick Chars", "Block Shaped", "Broken Letters", "Rounded Edges", "Ornamental", "Outline", "Negative Space" ]
		},
		{
			name		:	"Techno Overload",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Techno Overload - by Aenigma Fonts/Techno Overload.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Narrow Chars", "Broken Letters", "Rounded Chars", "Rounded Edges", "Ornamental" ]
		},
		{
			name		:	"Tetricide",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Tetricide - by Aenigma Fonts/Tetricide.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Retro", "Pixelated", "No Lowercase", "Partial Symbol Set", "Ornamental" ]
		},
		{
			name		:	"Tonik",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Tonik - by Aenigma Fonts/Tonik.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Ornamental", "Broken Letters", "Wide Chars", "Block Shaped", "Striped" ]
		},
		{
			name		:	"Underwhelmed",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Underwhelmed - by Aenigma Fonts/Underwhelmed.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Thick Chars", "Block Shaped", "Partial Symbol Set", "Rounded Chars" ]
		},
		{
			name		:	"Underwhelmed Outline",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Underwhelmed - by Aenigma Fonts/Underwhelmed Outline.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Thick Chars", "Block Shaped", "Partial Symbol Set", "Rounded Chars", "Negative Space", "Outline" ]
		},
		{
			name		:	"Unlearned",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Unlearned - by Aenigma Fonts/Unlearned.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Pixelated", "Negative Space", "Thick Chars", "Retro", "Outline" ]
		},
		{
			name		:	"Unlearned 2",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Unlearned - by Aenigma Fonts/Unlearned 2.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Negative Space", "Thick Chars", "Retro", "Outline" ]
		},
		{
			name		:	"Weathered",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Weathered - by Aenigma Fonts/Weathered.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Thick Chars", "Negative Space", "Outline", "Decay", "Ornamental" ]
		},
		{
			name		:	"Weathered Solid",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Weathered - by Aenigma Fonts/Weathered Solid.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Thick Chars", "Plain" ]
		},
		{
			name		:	"Where Is The Rest",
			authors		:	[ "Dieter Schumacher" ],
			variants	:	[
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Where Is The Rest.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Dieter Schumacher Fonts/Free Fonts/Where Is The Rest Italic.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Striped", "Thick Chars", "Partial Symbol Set", "Ornamental" ]
		},
		{
			name		:	"Xerox Malfunction",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Xerox Malfunction - by Aenigma Fonts/Xerox Malfunction.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Thick Chars", "Decorated", "Smudged", "Ornamental", "Partial Symbol Set" ]
		},
		{
			name		:	"Xmas Lights",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Xmas Lights - by Aenigma Fonts/Xmas Lights.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Decorated", "Monospace", "Holiday", "Ornamental", "No Lowercase" ]
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
			license		:	"SIL Open Font License",
			tags		:	[ "Sans-Serif", "Playful", "Plain" ]
		},
		{
			name		:	"Entypo",
			authors		:	[ "Daniel Bruce" ],
			variants	:	[
				{
					path		:	"Entypo - by Daniel Bruce/Entypo.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"ShareAlike License",
			tags		:	[ "Symbol" ]
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
			license		:	"Freeware",
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
			license		:	"SIL Open Font License",
			tags		:	[ "Symbol" ]
		},
		{
			name		:	"StateFace",
			authors		:	[ "ProPublica" ],
			variants	:	[
				{
					path		:	"Stateface - by ProPublica/StateFace-Regular.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"MIT License",
			instructions	:	[ "Here are the characters for each state by name:[br][font font='nabfonts monospace'][br][grid cols=3][br][vbox][font font=stateface size=250 fg=b22]B[/font][b font='nabfonts monospace' size=125 fg=0ff]B[/b][font size=75]Alabama[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]A[/font][b font='nabfonts monospace' size=125 fg=0ff]A[/b][font size=75]Alaska[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]D[/font][b font='nabfonts monospace' size=125 fg=0ff]D[/b][font size=75]Arizona[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]C[/font][b font='nabfonts monospace' size=125 fg=0ff]C[/b][font size=75]Arkansas[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]E[/font][b font='nabfonts monospace' size=125 fg=0ff]E[/b][font size=75]California[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]F[/font][b font='nabfonts monospace' size=125 fg=0ff]F[/b][font size=75]Colorado[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]G[/font][b font='nabfonts monospace' size=125 fg=0ff]G[/b][font size=75]Connecticut[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]H[/font][b font='nabfonts monospace' size=125 fg=0ff]H[/b][font size=75]Delaware[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]I[/font][b font='nabfonts monospace' size=125 fg=0ff]I[/b][font size=75]Florida[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]J[/font][b font='nabfonts monospace' size=125 fg=0ff]J[/b][font size=75]Georgia[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]K[/font][b font='nabfonts monospace' size=125 fg=0ff]K[/b][font size=75]Hawaii[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]M[/font][b font='nabfonts monospace' size=125 fg=0ff]M[/b][font size=75]Idaho[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]N[/font][b font='nabfonts monospace' size=125 fg=0ff]N[/b][font size=75]Illinois[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]O[/font][b font='nabfonts monospace' size=125 fg=0ff]O[/b][font size=75]Indiana[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]L[/font][b font='nabfonts monospace' size=125 fg=0ff]L[/b][font size=75]Iowa[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]P[/font][b font='nabfonts monospace' size=125 fg=0ff]P[/b][font size=75]Kansas[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]Q[/font][b font='nabfonts monospace' size=125 fg=0ff]Q[/b][font size=75]Kentucky[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]R[/font][b font='nabfonts monospace' size=125 fg=0ff]R[/b][font size=75]Louisiana[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]U[/font][b font='nabfonts monospace' size=125 fg=0ff]U[/b][font size=75]Maine[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]T[/font][b font='nabfonts monospace' size=125 fg=0ff]T[/b][font size=75]Maryland[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]S[/font][b font='nabfonts monospace' size=125 fg=0ff]S[/b][font size=75]Massachusetts[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]V[/font][b font='nabfonts monospace' size=125 fg=0ff]V[/b][font size=75]Michigan[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]W[/font][b font='nabfonts monospace' size=125 fg=0ff]W[/b][font size=75]Minnesota[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]Y[/font][b font='nabfonts monospace' size=125 fg=0ff]Y[/b][font size=75]Mississippi[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]X[/font][b font='nabfonts monospace' size=125 fg=0ff]X[/b][font size=75]Missouri[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]Z[/font][b font='nabfonts monospace' size=125 fg=0ff]Z[/b][font size=75]Montana[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]c[/font][b font='nabfonts monospace' size=125 fg=0ff]c[/b][font size=75]Nebraska[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]g[/font][b font='nabfonts monospace' size=125 fg=0ff]g[/b][font size=75]Nevada[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]d[/font][b font='nabfonts monospace' size=125 fg=0ff]d[/b][font size=75]New Hampshire[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]e[/font][b font='nabfonts monospace' size=125 fg=0ff]e[/b][font size=75]New Jersey[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]f[/font][b font='nabfonts monospace' size=125 fg=0ff]f[/b][font size=75]New Mexico[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]h[/font][b font='nabfonts monospace' size=125 fg=0ff]h[/b][font size=75]New York[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]a[/font][b font='nabfonts monospace' size=125 fg=0ff]a[/b][font size=75]North Carolina[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]b[/font][b font='nabfonts monospace' size=125 fg=0ff]b[/b][font size=75]North Dakota[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]i[/font][b font='nabfonts monospace' size=125 fg=0ff]i[/b][font size=75]Ohio[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]j[/font][b font='nabfonts monospace' size=125 fg=0ff]j[/b][font size=75]Oklahoma[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]k[/font][b font='nabfonts monospace' size=125 fg=0ff]k[/b][font size=75]Oregon[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]l[/font][b font='nabfonts monospace' size=125 fg=0ff]l[/b][font size=75]Pennsylvania[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]m[/font][b font='nabfonts monospace' size=125 fg=0ff]m[/b][font size=75]Rhode Island[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]n[/font][b font='nabfonts monospace' size=125 fg=0ff]n[/b][font size=75]South Carolina[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]o[/font][b font='nabfonts monospace' size=125 fg=0ff]o[/b][font size=75]South Dakota[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]p[/font][b font='nabfonts monospace' size=125 fg=0ff]p[/b][font size=75]Tennessee[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]q[/font][b font='nabfonts monospace' size=125 fg=0ff]q[/b][font size=75]Texas[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]r[/font][b font='nabfonts monospace' size=125 fg=0ff]r[/b][font size=75]Utah[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]t[/font][b font='nabfonts monospace' size=125 fg=0ff]t[/b][font size=75]Vermont[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]s[/font][b font='nabfonts monospace' size=125 fg=0ff]s[/b][font size=75]Virginia[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]u[/font][b font='nabfonts monospace' size=125 fg=0ff]u[/b][font size=75]Washington[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]y[/font][b font='nabfonts monospace' size=125 fg=0ff]y[/b][font size=75]Washington D.C.[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]v[/font][b font='nabfonts monospace' size=125 fg=0ff]v[/b][font size=75]Wisconsin[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]w[/font][b font='nabfonts monospace' size=125 fg=0ff]w[/b][font size=75]West Virginia[/font][/vbox][br][vbox][font font=stateface size=250 fg=b22]x[/font][b font='nabfonts monospace' size=125 fg=0ff]x[/b][font size=75]Wyoming[/font][/vbox][br][b] [/b][br][vbox][font font=stateface size=250 fg=b22]z[/font][b font='nabfonts monospace' size=125 fg=0ff]z[/b][font size=75]U.S. Map[/font][/vbox][br][/grid][br][/font]" ],
			tags		:	[ "Symbol", "States" ]
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
			license		:	"Freeware",
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
			license		:	"Freeware",
			tags		:	[ "Symbol", "Monospace", "Negative Space" ]
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
			license		:	"Freeware",
			tags		:	[ "Symbol", "Monospace", "Negative Space" ]
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
			license		:	"Freeware",
			tags		:	[ "Symbol", "Monospace", "Negative Space" ]
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
			license		:	"SIL Open Font License",
			tags		:	[ "Symbol" ]
		},
		{
			name		:	"Material Design Icons",
			authors		:	[ "Google" ],
			variants	:	[
				{
					path		:	"Material Design Icons - by Google/MaterialIconsRound-Regular.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Apache License",
			tags		:	[ "Symbol", "Monospace" ]
		},
		{
			name		:	"Roboto Slab",
			authors		:	[ "Christian Robertson" ],
			variants	:	[
				{
					path		:	"Roboto Slab - by Christian Robertson/Roboto Slab Thin.ttf",
					style		:	"normal",
					weight		:	"100",
				},
				{
					path		:	"Roboto Slab - by Christian Robertson/Roboto Slab Light.ttf",
					style		:	"normal",
					weight		:	"200",
				},
				{
					path		:	"Roboto Slab - by Christian Robertson/Roboto Slab.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"Roboto Slab - by Christian Robertson/Roboto Slab Bold.ttf",
					style		:	"normal",
					weight		:	"bold",
				},
			],
			license		:	"Apache License",
			tags		:	[ "Serif", "Formal", "Plain" ]
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
			license		:	"SIL Open Font License",
			tags		:	[ "Symbol", "Faces" ]
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
			license		:	"SIL Open Font License",
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
			license		:	"SIL Open Font License",
			tags		:	[ "Symbol" ]
		},
		{
			name		:	"Skull Capz",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Skull Capz - by Aenigma Fonts/Skull Capz.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			instructions	:	[ "[c][font font='Skull Capz' fg=aaa size=400][color fg=f40]S[/color]a[color fg=f90]K[/color]f[color fg=fc0]U[/color]j[color fg=f90]L[/color]m[color fg=f40]L[/color]r [color fg=f00]C[/color]u[color fg=f30]A[/color]v[color fg=f60]P[/color]x[color fg=f90]Z[/color]z[/font][br][size size=80]The fancy text above was generated by: [iquote]SaKfUjLmLr CuAvPxZz[/iquote][/size][br][b size=125]To use:[/b][br][/c][br][ul][br][li]Type in a capital letter or a number that you want to appear inside the skull[/li][br][li]Next, type in a lower case letter to create a skull.[/li][br][/ul][br][br][c][br]The skulls correspond to the following letters:[br][grid cols=4 fg=fff2][br][font font='nabfonts monospace' size=150][br][vbox fg=fff5][font font='Skull Capz' fg=eee size=250] a [/font][b fg=7cf]a[/b][/vbox][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]b[/font][b fg=7cf]b[/b][/vbox][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]c[/font][b fg=7cf]c[/b][/vbox][br][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]d[/font][b fg=7cf]d[/b][/vbox][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]e[/font][b fg=7cf]e[/b][/vbox][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]f[/font][b fg=7cf]f[/b][/vbox][br][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]g[/font][b fg=7cf]g[/b][/vbox][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]h[/font][b fg=7cf]h[/b][/vbox][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]i[/font][b fg=7cf]i[/b][/vbox][br][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]j[/font][b fg=7cf]j[/b][/vbox][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]k[/font][b fg=7cf]k[/b][/vbox][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]l[/font][b fg=7cf]l[/b][/vbox][br][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]m[/font][b fg=7cf]m[/b][/vbox][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]n[/font][b fg=7cf]n[/b][/vbox][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]o[/font][b fg=7cf]o[/b][/vbox][br][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]p[/font][b fg=7cf]p[/b][/vbox][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]q[/font][b fg=7cf]q[/b][/vbox][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]r[/font][b fg=7cf]r[/b][/vbox][br][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]s[/font][b fg=7cf]s[/b][/vbox][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]t[/font][b fg=7cf]t[/b][/vbox][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]u[/font][b fg=7cf]u[/b][/vbox][br][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]v[/font][b fg=7cf]v[/b][/vbox][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]w[/font][b fg=7cf]w[/b][/vbox][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]x[/font][b fg=7cf]x[/b][/vbox][br][font] [/font][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]y[/font][b fg=7cf]y[/b][/vbox][vbox fg=fff5][font font='Skull Capz' fg=eee size=250]z[/font][b fg=7cf]z[/b][/font][/vbox][br][/grid][/c]" ],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Halloween", "Ornamental", "No Lowercase", "No Symbols" ]
		},
		{
			name		:	"Zero Velocity",
			authors		:	[ "Aenigma Fonts" ],
			variants	:	[
				{
					path		:	"_Aenigma Fonts/Zero Velocity - by Aenigma Fonts/Zero Velocity.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Outline", "Shadow", "Ornamental", "Block Shaped", "Partial Symbol Set" ]
		},
		{
			name		:	"OpenDyslexic Alta",
			authors		:	[ "Abelardo Gonzalez" ],
			variants	:	[
				{
					path		:	"OpenDyslexic Alta - by Abelardo Gonzalez/OpenDyslexic Alta.otf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"OpenDyslexic Alta - by Abelardo Gonzalez/OpenDyslexic Alta Italic.otf",
					style		:	"italic",
					weight		:	"normal",
				},
				{
					path		:	"OpenDyslexic Alta - by Abelardo Gonzalez/OpenDyslexic Alta Bold.otf",
					style		:	"normal",
					weight		:	"bold",
				},
				{
					path		:	"OpenDyslexic Alta - by Abelardo Gonzalez/OpenDyslexic Alta Bold Italic.otf",
					style		:	"italic",
					weight		:	"bold",
				},
			],
			license		:	"Bitstream License",
			tags		:	[ "Sans-Serif", "Plain", "Playful" ]
		},
		{
			name		:	"OpenDyslexic",
			authors		:	[ "Abelardo Gonzalez" ],
			variants	:	[
				{
					path		:	"OpenDyslexic - by Abelardo Gonzalez/OpenDyslexic Regular.otf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"OpenDyslexic - by Abelardo Gonzalez/OpenDyslexic Italic.otf",
					style		:	"italic",
					weight		:	"normal",
				},
				{
					path		:	"OpenDyslexic - by Abelardo Gonzalez/OpenDyslexic Bold.otf",
					style		:	"normal",
					weight		:	"bold",
				},
				{
					path		:	"OpenDyslexic - by Abelardo Gonzalez/OpenDyslexic Bold Italic.otf",
					style		:	"italic",
					weight		:	"bold",
				},
			],
			license		:	"SIL Open Font License",
			tags		:	[ "Sans-Serif", "Plain", "Playful", "Irregular Chars" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Slanted", "Thick Chars", "Leading Left Hook", "Ornamental" ]
		},
		{
			name		:	"Libre Barcode 39",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"Libre Barcode - by Lasse Fister/Libre Barcode 39.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"SIL Open Font License",
			tags		:	[ "Symbol", "Bar Code" ]
		},
		{
			name		:	"Libre Barcode 39 Extended Text",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"Libre Barcode - by Lasse Fister/Libre Barcode 39 Extended Text.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"SIL Open Font License",
			tags		:	[ "Symbol", "Bar Code" ]
		},
		{
			name		:	"Libre Barcode 128",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"Libre Barcode - by Lasse Fister/Libre Barcode 128.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"SIL Open Font License",
			tags		:	[ "Symbol", "Bar Code" ]
		},
		{
			name		:	"Libre Barcode 128 Text",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"Libre Barcode - by Lasse Fister/Libre Barcode 128 Text.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"SIL Open Font License",
			tags		:	[ "Symbol", "Bar Code" ]
		},
		{
			name		:	"Libre Barcode EAN13 Text",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"Libre Barcode - by Lasse Fister/Libre Barcode EAN13 Text.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"SIL Open Font License",
			tags		:	[ "Symbol", "Bar Code" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Negative Space", "Thick Chars", "Outline", "Ornamental", "No Lowercase" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Ornamental", "No Lowercase", "Broken Letters", "Hard To Read", "Playful" ]
		},
		{
			name		:	"Bailey's Car",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Bailey's Car.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Negative Space", "Fire", "Ornamental", "Outline", "Partial Symbol Set" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Slanted", "Distorted", "No Lowercase", "Ornamental" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Decorated", "Decay", "Ornamental" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Playful", "Irregular Chars" ]
		},
		{
			name		:	"Cinzel",
			authors		:	[ "ndiscovered" ],
			variants	:	[
				{
					path		:	"Cinzel - by ndiscovered/Cinzel.otf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"Cinzel - by ndiscovered/Cinzel Bold.otf",
					style		:	"normal",
					weight		:	"bold",
				},
				{
					path		:	"Cinzel - by ndiscovered/Cinzel Black.otf",
					style		:	"normal",
					weight		:	"900",
				},
			],
			license		:	"SIL Open Font License",
			tags		:	[ "Serif", "No Lowercase", "Formal", "Plain" ]
		},
		{
			name		:	"Cinzel Decorative",
			authors		:	[ "ndiscovered" ],
			variants	:	[
				{
					path		:	"Cinzel - by ndiscovered/Cinzel Decorative.otf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"Cinzel - by ndiscovered/Cinzel Decorative Bold.otf",
					style		:	"normal",
					weight		:	"bold",
				},
				{
					path		:	"Cinzel - by ndiscovered/Cinzel Decorative Black.otf",
					style		:	"normal",
					weight		:	"900",
				},
			],
			license		:	"SIL Open Font License",
			tags		:	[ "Serif", "No Lowercase", "Formal", "Ornamental", "Elegant", "Broken Letters", "Leading Left Hook" ]
		},
		{
			name		:	"Farro",
			authors		:	[ "Grayscale Limited" ],
			variants	:	[
				{
					path		:	"Farro - by Grayscale Limited/Farro Light.otf",
					style		:	"normal",
					weight		:	"200",
				},
				{
					path		:	"Farro - by Grayscale Limited/Farro.otf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"Farro - by Grayscale Limited/Farro Bold.otf",
					style		:	"normal",
					weight		:	"bold",
				},
				{
					path		:	"Farro - by Grayscale Limited/Farro Medium.otf",
					style		:	"normal",
					weight		:	"500",
				},
			],
			license		:	"SIL Open Font License",
			tags		:	[ "Sans-Serif", "Plain", "Formal" ]
		},
		{
			name		:	"Crimson",
			authors		:	[ "Sebastian Kosch" ],
			variants	:	[
				{
					path		:	"Crimson - by Sebastian Kosch/Crimson.otf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"Crimson - by Sebastian Kosch/Crimson Italic.otf",
					style		:	"italic",
					weight		:	"normal",
				},
				{
					path		:	"Crimson - by Sebastian Kosch/Crimson Bold.otf",
					style		:	"normal",
					weight		:	"bold",
				},
				{
					path		:	"Crimson - by Sebastian Kosch/Crimson Bold Italic.otf",
					style		:	"italic",
					weight		:	"bold",
				},
				{
					path		:	"Crimson - by Sebastian Kosch/Crimson Demi Bold.otf",
					style		:	"normal",
					weight		:	"600",
				},
				{
					path		:	"Crimson - by Sebastian Kosch/Crimson Demi Bold Italic.otf",
					style		:	"italic",
					weight		:	"600",
				},
			],
			license		:	"SIL Open Font License",
			tags		:	[ "Serif", "Plain", "Formal" ]
		},
		{
			name		:	"Open Sans",
			authors		:	[ "Steve Matteson" ],
			variants	:	[
				{
					path		:	"Open Sans - by Steve Matteson/Open Sans Variable Font width, weight.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"Open Sans - by Steve Matteson/Open Sans Italic Variable Font width, weight.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
			],
			license		:	"SIL Open Font License",
			tags		:	[ "Sans-Serif", "Plain", "Formal" ]
		},
		{
			name		:	"Biting My Nails - Outline",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Biting My Nails - Outline.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Negative Space", "Angular", "Block Shaped", "Outline", "No Lowercase" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Angular", "Block Shaped", "No Lowercase" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Striped", "Ornamental", "Partial Symbol Set" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Decorated", "Narrow Chars", "Circuit", "Ornamental", "Partial Symbol Set" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Negative Space", "Narrow Chars", "Outline", "Partial Symbol Set", "Plain" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Angular", "Thin Chars", "Wide Chars", "Broken Letters", "Hard To Read" ]
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
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Colourbars Bold.otf",
					style		:	"normal",
					weight		:	"bold",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Plain", "Playful", "Curvy Letters" ]
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
			license		:	"Public Domain",
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Script", "Slanted", "Swirl", "Leading Left Hook", "Thick Chars" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Negative Space", "Outline", "Broken Letters", "No Uppercase" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Narrow Chars", "Thin Chars", "Halloween", "Handwriting", "Distressed" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Playful", "Handwriting", "Curvy Letters" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Narrow Chars", "Script", "Thick Chars", "Leading Left Hook" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Ornamental", "Hard To Read", "Partial Symbol Set", "No Lowercase" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Slanted", "Angular", "Narrow Chars", "Block Shaped", "Partial Symbol Set" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Negative Space", "Logo", "Shadow", "Partial Symbol Set", "Outline", "No Lowercase" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Wide Chars", "Leading Left Hook", "No Lowercase", "Ornamental" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "3D", "Angular", "Partial Symbol Set", "Ornamental" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Slanted", "Broken Letters", "Distressed", "Partial Symbol Set" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Ornamental", "Broken Letters", "Rounded Chars" ]
		},
		{
			name		:	"Giant Tigers - Back",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Giant Tigers - Back.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Narrow Chars", "Plain", "Composite Font", "No Lowercase", "Partial Symbol Set" ]
		},
		{
			name		:	"Giant Tigers - Front",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Giant Tigers - Front.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Narrow Chars", "Striped", "Broken Letters", "Composite Font", "No Lowercase", "Partial Symbol Set", "Ornamental" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Narrow Chars", "Striped", "Negative Space", "Composite Font", "No Lowercase", "Partial Symbol Set", "Ornamental" ]
		},
		{
			name		:	"Got No Heart - Solid",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Got No Heart - Solid.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Partial Symbol Set", "Composite Font", "Heart", "No Lowercase", "Hard To Read" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Partial Symbol Set", "No Lowercase", "Hard To Read", "Negative Space", "Composite Font", "Heart", "Outline" ]
		},
		{
			name		:	"Graffiti Treat - Back",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Graffiti Treat - Back.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Angular", "Composite Font", "Thick Chars", "Hard To Read", "Ornamental", "Partial Symbol Set", "Graffiti", "No Lowercase" ]
		},
		{
			name		:	"Graffiti Treat - Front",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Graffiti Treat - Front.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Angular", "Composite Font", "Hard To Read", "Ornamental", "Partial Symbol Set", "Graffiti", "No Lowercase" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Angular", "Negative Space", "Composite Font", "Outline", "Hard To Read", "Ornamental", "Partial Symbol Set", "Graffiti", "No Lowercase" ]
		},
		{
			name		:	"Groovy Ghosties - Back",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Groovy Ghosties - Back.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Halloween", "Negative Space", "Composite Font", "Hard To Read", "Ornamental", "Partial Symbol Set", "No Lowercase" ]
		},
		{
			name		:	"Groovy Ghosties - Front",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Groovy Ghosties - Front.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Halloween", "Composite Font", "Hard To Read", "Ornamental", "Partial Symbol Set", "No Lowercase", "Decorated" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Halloween", "Negative Space", "Composite Font", "Outline", "Hard To Read", "Ornamental", "Partial Symbol Set", "No Lowercase", "Decorated" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Ornamental", "Partial Symbol Set", "Distorted" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Narrow Chars", "Irregular Chars", "Partial Symbol Set" ]
		},
		{
			name		:	"Hawkeye - Back",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Hawkeye - Back.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Thick Chars", "No Lowercase", "Shadow", "Composite Font", "Graffiti", "Hard To Read" ]
		},
		{
			name		:	"Hawkeye - Front",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Hawkeye - Front.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Thick Chars", "No Lowercase", "Composite Font", "Graffiti", "Hard To Read" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Thick Chars", "Outline", "No Lowercase", "Negative Space", "Shadow", "Composite Font", "Graffiti", "Hard To Read" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Irregular Chars", "Decorated", "Ornamental", "Hard To Read", "Partial Symbol Set" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Cigarettes", "Negative Space", "Ornamental", "No Lowercase", "Irregular Chars", "Playful" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Thin Chars", "Narrow Chars", "Script", "Handwriting", "Slanted", "Partial Symbol Set" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Partial Symbol Set", "Thick Chars", "Slanted", "Ornamental" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Playful", "Irregular Chars", "3D", "Partial Symbol Set", "Angular" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Thin Chars", "Script", "Handwriting", "Curvy Letters", "Irregular Chars" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "No Lowercase", "Decay", "Ornamental", "Puzzle" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Playful", "Script", "Partial Symbol Set", "Irregular Chars", "No Uppercase" ]
		},
		{
			name		:	"Lesser Concern - Shadow",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Lesser Concern - Shadow.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Partial Symbol Set", "Curvy Letters", "Plain", "Negative Space", "Shadow" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Partial Symbol Set", "Curvy Letters", "Plain" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Decay", "Narrow Chars", "Partial Symbol Set" ]
		},
		{
			name		:	"Letter Set - A",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Letter Set - A.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Decorated", "Negative Space", "No Lowercase", "Partial Symbol Set", "Irregular Chars", "Snow", "Ornamental" ]
		},
		{
			name		:	"Letter Set - B",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Letter Set - B.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "3D", "Negative Space", "No Lowercase", "Partial Symbol Set", "Irregular Chars", "Outline", "Ornamental" ]
		},
		{
			name		:	"Letter Set - C",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Letter Set - C.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Decorated", "Snow", "Ornamental", "No Lowercase", "Partial Symbol Set", "Irregular Chars" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "No Uppercase", "Slanted", "Wide Chars", "Broken Letters", "Partial Symbol Set", "Hard To Read", "Ornamental" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Decorated", "Slot Machine", "No Lowercase", "Ornamental", "Hard To Read", "Partial Symbol Set" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Narrow Chars", "Irregular Chars", "Partial Symbol Set", "Rounded Chars", "Angular" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Sequins", "Ornamental", "Rounded Chars", "No Lowercase" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Decorated", "Alien", "Rounded Chars", "Partial Symbol Set", "Broken Letters", "No Lowercase" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Plain", "Handwriting", "Typewriter", "Irregular Chars", "Playful" ]
		},
		{
			name		:	"Misirlou - Day",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Misirlou - Day.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Partial Symbol Set", "No Uppercase", "Hard To Read", "Negative Space", "Offset", "Ornamental" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Partial Symbol Set", "No Uppercase", "Hard To Read", "Ornamental" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Narrow Chars", "Broken Letters", "Partial Symbol Set", "Formal" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Decay", "Negative Space", "Broken Letters", "Partial Symbol Set", "Outline", "Ornamental" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Thick Chars", "Decay", "Ornamental", "Partial Symbol Set" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Narrow Chars", "Playful", "Thick Chars", "Distressed", "Partial Symbol Set" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Negative Space", "Thick Chars", "3D", "Offset", "No Lowercase", "Partial Symbol Set", "Hard To Read", "Ornamental", "Slanted" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Partial Symbol Set", "No Lowercase", "Broken Letters", "Block Shaped", "Thick Chars", "Rounded Chars" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Negative Space", "Ornamental", "Partial Symbol Set", "Block Shaped", "3D", "Rounded Chars", "Wide Chars", "Slanted" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Wide Chars", "Broken Letters", "No Lowercase", "Partial Symbol Set", "Ornamental" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Playful", "Thick Chars", "Irregular Chars", "Partial Symbol Set" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Distorted", "Halloween", "Playful" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Wide Chars", "No Uppercase", "Broken Letters", "Thick Chars" ]
		},
		{
			name		:	"Oil Crisis - A",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Oil Crisis - A.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Symbol", "Cars" ]
		},
		{
			name		:	"Oil Crisis - B",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Oil Crisis - B.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Narrow Chars", "Angular", "Broken Letters", "Slanted", "Partial Symbol Set" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Thick Chars", "Leading Left Hook", "Partial Symbol Set", "Hard To Read", "No Lowercase", "Ornamental", "Slanted" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Negative Space", "Paintbrushes", "No Lowercase", "Partial Symbol Set", "Ornamental" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Striped", "Thick Chars", "Broken Letters", "Ornamental", "Partial Symbol Set" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Decay", "Western", "Ornamental", "Partial Symbol Set", "No Lowercase", "Halloween" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thin Chars", "Narrow Chars", "Plain", "Partial Symbol Set", "No Lowercase" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Decorated", "Playful", "Irregular Chars", "Partial Symbol Set", "No Uppercase", "Hard To Read" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Decorated", "Halloween", "Gothic", "No Lowercase", "Partial Symbol Set" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Decorated", "Playful", "Jack-in-the-box", "Partial Symbol Set", "No Lowercase", "Irregular Chars", "3D", "Negative Space", "Hard To Read" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Plain", "Formal" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Halloween", "Distressed", "Broken Letters", "Ornamental", "Hard To Read" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "No Lowercase", "Hard To Read", "Partial Symbol Set", "Ornamental" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Narrow Chars", "Angular", "Irregular Chars", "No Lowercase", "Leading Left Hook", "Distressed" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Plain", "Curvy Letters", "Leading Left Hook", "Irregular Chars" ]
		},
		{
			name		:	"Riot Act 2 - Back",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Riot Act 2 - Back.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Halloween", "Composite Font", "Ornamental", "No Lowercase", "Partial Symbol Set", "Distressed", "Monsters" ]
		},
		{
			name		:	"Riot Act 2 - Front",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Riot Act 2 - Front.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Halloween", "Composite Font", "Ornamental", "No Lowercase", "Partial Symbol Set", "Distressed", "Monsters" ]
		},
		{
			name		:	"Riot Act 2 - Glop",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Riot Act 2 - Glop.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Symbol", "Composite Font", "Monsters" ]
		},
		{
			name		:	"Riot Act 2 - Outline",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Riot Act 2 - Outline.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Halloween", "Negative Space", "Outline", "Composite Font", "Ornamental", "No Lowercase", "Partial Symbol Set", "Distressed", "Monsters" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Calligraphy", "Handwriting", "Wide Chars", "Elegant" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Slanted", "Leading Left Hook", "Partial Symbol Set", "Broken Letters", "Thick Chars" ]
		},
		{
			name		:	"Sandoval - Speed",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Sandoval - Speed.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Broken Letters", "Slanted", "Striped", "Hard To Read", "Ornamental", "Thick Chars", "Wide Chars", "Partial Symbol Set" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Broken Letters", "Slanted", "Striped", "Hard To Read", "Ornamental", "Thick Chars", "Partial Symbol Set" ]
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
			license		:	"Public Domain",
			tags		:	[ "Symbol", "Faces", "Animals", "Playful", "Negative Space", "Outline" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Dotted", "Retro", "Partial Symbol Set", "Ornamental" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Distressed", "No Lowercase", "Angular", "Partial Symbol Set", "Ornamental" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Distressed", "Ornamental", "Broken Letters", "Irregular Chars", "Partial Symbol Set" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Curvy Letters", "Thick Chars", "Partial Symbol Set", "Elegant" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Ornamental", "Partial Symbol Set", "No Uppercase", "Distressed" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Playful", "Irregular Chars", "No Lowercase", "Ornamental", "Thick Chars", "Hard To Read" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Curvy Letters", "Ornamental", "No Lowercase", "Partial Symbol Set", "Irregular Chars", "Playful" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Thin Chars", "Broken Letters", "Partial Symbol Set" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Stitch", "Negative Space", "Outline", "Broken Letters", "Ornamental", "Thick Chars" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Wide Chars", "Irregular Chars", "Hard To Read", "Angular", "Partial Symbol Set", "Ornamental" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Lightning", "Thick Chars", "Leading Left Hook", "No Lowercase", "Partial Symbol Set", "Ornamental", "Angular" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Thin Chars", "Ornamental", "Irregular Chars", "Partial Symbol Set", "Hard To Read", "Distressed", "Halloween" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Diamond", "Decorated", "Playful", "3D", "Partial Symbol Set", "Hard To Read", "Ornamental" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Negative Space", "Striped", "Playful", "Shadow", "Hard To Read", "Partial Symbol Set", "Ornamental" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Narrow Chars", "Irregular Chars", "Partial Symbol Set", "Ornamental", "No Uppercase" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Decorated", "Ornamental", "Rounded Chars", "Partial Symbol Set", "Hard To Read", "Leading Left Hook", "Broken Letters" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Distorted", "Playful", "Rounded Edges", "Partial Symbol Set", "Irregular Chars" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Distressed", "Ornamental", "Partial Symbol Set", "Playful", "Irregular Chars", "No Lowercase", "Curvy Letters" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Curvy Letters", "Plain", "Leading Left Hook" ]
		},
		{
			name		:	"Canada 1500",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Canada 1500.otf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Canada 1500 Italic.otf",
					style		:	"italic",
					weight		:	"normal",
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Plain", "Formal" ]
		},
		{
			name		:	"Canada 1500 Light",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Canada 1500 Light.otf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Canada 1500 Light Italic.otf",
					style		:	"italic",
					weight		:	"normal",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Canada 1500.otf",
					style		:	"normal",
					weight		:	"bold",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Canada 1500 Italic.otf",
					style		:	"italic",
					weight		:	"bold",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Plain", "Formal" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Decorated", "Gothic", "Negative Space", "Outline", "Partial Symbol Set", "No Uppercase", "Irregular Chars" ]
		},
		{
			name		:	"TRS Million",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/TRS Million.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Dotted", "Retro", "Composite Font", "Ornamental", "Broken Letters", "No Lowercase" ]
		},
		{
			name		:	"TRS Million - Twinkle",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/TRS Million - Twinkle.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Symbol", "Composite Font" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Calligraphy", "Narrow Chars", "3D", "Ornamental", "No Uppercase", "Partial Symbol Set" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Decorated", "Playful", "Curvy Letters", "Partial Symbol Set", "Swirl", "Ornamental", "Irregular Chars" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Halloween", "Angular", "Partial Symbol Set" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Negative Space", "Outline", "Decorated", "Shadow", "Partial Symbol Set", "No Lowercase", "Ornamental" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Decorated", "Negative Space", "Monospace", "No Lowercase", "Hard To Read", "Partial Symbol Set", "Ornamental" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Partial Symbol Set", "Decay", "No Lowercase", "Ornamental" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Ornamental", "Hard To Read", "Partial Symbol Set", "No Lowercase", "Curvy Letters" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Decay", "Decorated", "Distorted", "Ornamental", "Partial Symbol Set", "No Lowercase" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Narrow Chars", "Distorted", "Halloween" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Ornamental", "Partial Symbol Set", "No Lowercase", "Hard To Read", "Decorated" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Block Shaped", "Ornamtenal", "Partial Symbol Set", "Hard To Read" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Narrow Chars", "Irregular Chars", "Playful", "Handwriting", "Partial Symbol Set" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Partial Symbol Set", "No Lowercase", "Ornamental", "Block Shaped" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Negative Space", "Thick Chars", "Outline", "Offset", "Wide Chars", "Partial Symbol Set" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Gothic", "Ornamental", "Partial Symbol Set", "No Lowercase", "Halloween" ]
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
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Ornamental", "Irregular Chars", "No Lowercase", "Distressed", "Narrow Chars" ]
		},
		{
			name		:	"Yytrium - Back",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Yytrium - Back.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Ornamental", "No Lowercase", "Composite Font", "Partial Symbol Set", "Hard To Read" ]
		},
		{
			name		:	"Yytrium - Front",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Yytrium - Front.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Ornamental", "No Lowercase", "Composite Font", "Partial Symbol Set", "Hard To Read" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Ornamental", "No Lowercase", "Negative Space", "Outline", "Shadow", "Composite Font", "Partial Symbol Set", "Hard To Read" ]
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
			license		:	"Public Domain",
			tags		:	[ "Serif", "Thick Chars", "Playful", "No Lowercase", "Narrow Chars" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Thick Chars", "Plain", "Partial Symbol Set" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Negative Space", "Pixelated", "Offset", "Retro", "No Lowercase", "Partial Symbol Set", "Shadow" ]
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
			license		:	"Freeware",
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
			license		:	"Freeware",
			tags		:	[ "Serif", "Thick Chars", "Angular", "Anime", "No Uppercase", "Partial Symbol Set", "Block Shaped", "Broken Letters" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Rounded Edges", "No Uppercase", "Partial Symbol Set", "Plain" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Decay", "No Lowercase", "Partial Symbol Set", "Thick Chars" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Irregular Chars", "Angular", "Sideways", "No Lowercase", "Partial Symbol Set", "Hard To Read" ]
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
			license		:	"Freeware",
			tags		:	[ "Serif", "Decay", "Stencil", "Broken Letters", "No Lowercase", "Partial Symbol Set", "Thick Chars" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Narrow Chars", "Stencil", "Broken Letters", "Partial Symbol Set", "No Lowercase" ]
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
			license		:	"Freeware",
			tags		:	[ "Serif", "Monospace", "Typewriter", "Smudged", "Partial Symbol Set", "Decay" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Handwriting", "Script", "Partial Symbol Set", "Slanted" ]
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
			license		:	"Freeware",
			tags		:	[ "Serif", "Smudged", "Decorated", "Partial Symbol Set", "Irregular Chars", "Ornamental" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Marker", "Handwriting", "Distressed", "Partial Symbol Set", "Decay", "No Lowercase", "Ornamental" ]
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
			license		:	"Freeware",
			tags		:	[ "Serif", "Thick Chars", "Soviet", "Partial Symbol Set", "No Lowercase" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Irregular Chars", "Partial Symbol Set", "No Lowercase", "Plain" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Handwriting", "Partial Symbol Set", "Marker" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "No Lowercase", "Striped", "Broken Letters", "Partial Symbol Set", "Ornamental" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Angular", "Partial Symbol Set", "Broken Letters", "No Lowercase", "Ornamental" ]
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
			license		:	"Freeware",
			tags		:	[ "Serif", "Handwriting", "Script", "Partial Symbol Set", "Curvy Letters", "Irregular Chars" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Thick Chars", "Partial Symbol Set", "No Lowercase", "Plain" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Dotted", "Monospace", "Partial Symbol Set", "Ornamental" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Stencil", "Angular", "Broken Letters", "Thick Chars", "No Lowercase", "Partial Symbol Set" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Stencil", "Angular", "Broken Letters", "Thick Chars", "No Lowercase", "Partial Symbol Set", "Decay" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Broken Letters", "Thick Chars", "Stencil", "Distorted", "No Lowercase", "Partial Symbol Set", "Ornamental" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Soviet", "Angular", "Hard To Read", "No Lowercase", "Partial Symbol Set", "Block Shaped", "Ornamental" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Stencil", "Thick Chars", "Broken Letters", "No Lowercase", "Partial Symbol Set" ]
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
			license		:	"Freeware",
			tags		:	[ "Symbol", "Flags", "Monospace" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Handwriting", "Irregular Chars", "Script",  "Partial Symbol Set", "Marker" ]
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
			license		:	"Freeware",
			tags		:	[ "Serif", "Thick Chars", "Curvy Letters", "Anime", "Broken Letters", "Ornamental", "Partial Symbol Set", "No Lowercase" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Anime", "Broken Letters", "Thick Chars", "Stencil", "No Uppercase", "Partial Symbol Set", "Slanted" ]
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
			license		:	"Freeware",
			tags		:	[ "Serif", "Anime", "Thick Chars", "Partial Symbol Set", "No Lowercase", "Broken Letters" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Playful", "Decay", "Irregular Chars", "Decorated", "Thick Chars", "Partial Symbol Set", "Ornamental" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Script", "Handwriting", "Slanted", "Partial Symbol Set", "Elegant", "Broken Letters" ]
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
			license		:	"Freeware",
			tags		:	[ "Serif", "Thick Chars", "Broken Letters", "No Uppercase", "Partial Symbol Set" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Narrow Chars", "Partial Symbol Set", "No Lowercase", "Plain", "Irregular Chars" ]
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
			license		:	"Freeware",
			tags		:	[ "Serif", "Handwriting", "No Lowercase", "Slanted", "Partial Symbol Set", "Broken Letters", "Irregular Chars" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Decay", "Thick Chars", "Partial Symbol Set", "Ornamental", "No Lowercase" ]
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
			license		:	"Freeware",
			tags		:	[ "Serif", "Typewriter", "Monospace", "Distorted", "Partial Symbol Set", "Ornamental" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Thick Chars", "Rounded Chars", "Broken Letters", "Ornamental", "Block Shaped", "No Lowercase", "Partial Symbol Set" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Handwriting", "Partial Symbol Set", "Plain" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Decay", "Decorated", "No Lowercase", "Ornamental", "No Symbols" ]
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
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Smudged", "Thick Chars", "Decorated", "Decay", "No Lowercase", "Ornamental" ]
		},
		{
			name		:	"BoereTudor",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/BoereTudor.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "Gothic", "Elegant" ]
		},
		{
			name		:	"Cayetano",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Cayetano.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Apostrophic Labs/Cayetano Italic.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
				{
					path		:	"_Apostrophic Labs/Cayetano Bold.ttf",
					style		:	"normal",
					weight		:	"bold",
				},
				{
					path		:	"_Apostrophic Labs/Cayetano Bold Italic.ttf",
					style		:	"italic",
					weight		:	"bold",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Retro", "Pixelated" ]
		},
		{
			name		:	"Cayetano Round",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Cayetano Round.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Apostrophic Labs/Cayetano Round Italic.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
				{
					path		:	"_Apostrophic Labs/Cayetano Round Bold.ttf",
					style		:	"normal",
					weight		:	"bold",
				},
				{
					path		:	"_Apostrophic Labs/Cayetano Round Bold Italic.ttf",
					style		:	"italic",
					weight		:	"bold",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Retro", "Pixelated", "Rounded Edges" ]
		},
		{
			name		:	"Control Freak",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Control Freak.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Angular", "Broken Letters", "Block Shaped", "Plain" ]
		},
		{
			name		:	"Control Freak Upset",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Control Freak Upset.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Angular", "Broken Letters", "Block Shaped", "Plain" ]
		},
		{
			name		:	"Control Freak Offset",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Control Freak Offset.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Angular", "Broken Letters", "Block Shaped", "Plain", "Negative Space", "Outline", "Shadow" ]
		},
		{
			name		:	"Desyrel",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Desyrel.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Handwriting", "Curvy Letters", "Irregular Chars", "Script", "Marker", "Rounded Edges" ]
		},
		{
			name		:	"Duralith",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Duralith.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "Leading Left Hook", "Ornamental", "Playful" ]
		},
		{
			name		:	"Endor Alt",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Endor Alt.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "Halloween", "Gothic", "Elegant" ]
		},
		{
			name		:	"Endor",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Endor.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "Halloween", "Gothic", "Elegant" ]
		},
		{
			name		:	"Erectlorite",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Erectlorite.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Decorated", "Thick Chars", "Negative Space", "3D", "Outline", "Ornamental" ]
		},
		{
			name		:	"Erectlorite Light",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Erectlorite Light.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Decorated", "Thick Chars", "Negative Space", "3D", "Outline", "Ornamental", "Hard To Read" ]
		},
		{
			name		:	"Erectlorite Reft",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Erectlorite Reft.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Decorated", "Thick Chars", "Negative Space", "3D", "Outline", "Ornamental", "Hard To Read" ]
		},
		{
			name		:	"Eskargot",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Eskargot.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Swirl", "Playful", "Broken Letters" ]
		},
		{
			name		:	"Fluoxetine",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Fluoxetine.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "Typewriter", "Decorated", "Decay", "Partial Symbol Set", "Smudged", "Distorted", "Ornamental" ]
		},
		{
			name		:	"Halcion",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Halcion.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Apostrophic Labs/Halcion Italic.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Striped", "Distorted", "Ornamental", "Broken Letters", "Partial Symbol Set", "No Lowercase" ]
		},
		{
			name		:	"Impossible - 0 Minus 30",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Impossible - 0 Minus 30.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Striped", "Broken Letters", "Plain", "3D", "Ornamental" ]
		},
		{
			name		:	"Impossible - 0 Plus 30",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Impossible - 0 Plus 30.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Striped", "Broken Letters", "Plain", "3D", "Ornamental" ]
		},
		{
			name		:	"Impossible - 0",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Impossible - 0.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Striped", "Broken Letters", "Plain" ]
		},
		{
			name		:	"Impossible - 050",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Impossible - 050.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Striped", "Broken Letters", "Plain", "Slanted", "Ornamental" ]
		},
		{
			name		:	"Impossible - 500",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Impossible - 500.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Striped", "Broken Letters", "Plain", "Slanted", "Ornamental" ]
		},
		{
			name		:	"Impossible - 1000",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Impossible - 1000.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Striped", "Broken Letters", "Plain", "Slanted", "Thick Chars", "Wide Chars", "Ornamental" ]
		},
		{
			name		:	"Impossible - SelfDestruct",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Impossible - SelfDestruct.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Striped", "Broken Letters", "Plain", "Irregular Chars", "Distressed", "Playful", "Ornamental" ]
		},
		{
			name		:	"LaBrit",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/LaBrit.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "Elegant", "Gothic", "Broken Letters" ]
		},
		{
			name		:	"Labtop Graphed",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Labtop Graphed.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Striped", "Decorated", "Decay", "Narrow Chars", "Thin Chars", "Ornamental" ]
		},
		{
			name		:	"Powderfinger",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Powderfinger.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "Fingerprint", "Decorated", "Typewriter", "Negative Space", "Decay", "Ornamental", "No Symbols", "No Lowercase" ]
		},
		{
			name		:	"Powderfinger Smudged",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Powderfinger Smudged.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "Fingerprint", "Decorated", "Typewriter", "Negative Space", "Decay", "Ornamental", "No Symbols", "No Lowercase" ]
		},
		{
			name		:	"Powderfinger Ghost",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Powderfinger Ghost.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "Fingerprint", "Decorated", "Typewriter", "Negative Space", "Decay", "Ornamental", "No Symbols", "Outline", "No Lowercase" ]
		},
		{
			name		:	"Powderfinger Pad",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Powderfinger Pad.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Symbol", "Fingerprint" ]
		},
		{
			name		:	"Powderfinger Type",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Powderfinger Type.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "Typewriter", "Decay", "Smudged", "Monospace" ]
		},
		{
			name		:	"Reprobate",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/Reprobate.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Serif", "Marker", "Handwriting", "Irregular Chars" ]
		},
		{
			name		:	"TRACEROUTE",
			authors		:	[ "Apostrophic Labs" ],
			variants	:	[
				{
					path		:	"_Apostrophic Labs/TRACEROUTE.ttf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Apostrophic Labs/TRACEROUTE Italic.ttf",
					style		:	"italic",
					weight		:	"normal",
				},
			],
			license		:	"Freeware",
			tags		:	[ "Sans-Serif", "Angular", "Block Shaped", "Partial Symbol Set" ]
		},
		{
			name		:	"6809 Chargen",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/6809 Chargen.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Rounded Edges", "Thick Chars", "Dotted", "Broken Letters", "Ornamental" ]
		},
		{
			name		:	"Adriator",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Adriator.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Broken Letters", "No Lowercase", "Thick Chars", "Ornamental" ]
		},
		{
			name		:	"Asterisp Alpha",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Asterisp Alpha.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Symbol" ]
		},
		{
			name		:	"Asterisp Beta",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Asterisp Beta.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Symbol" ]
		},
		{
			name		:	"Asterisp Delta",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Asterisp Delta.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Symbol" ]
		},
		{
			name		:	"Asterisp Epsilon",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Asterisp Epsilon.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Symbol" ]
		},
		{
			name		:	"Asterisp Eta",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Asterisp Eta.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Symbol" ]
		},
		{
			name		:	"Asterisp Gamma",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Asterisp Gamma.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Symbol" ]
		},
		{
			name		:	"Asterisp Iota",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Asterisp Iota.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Symbol" ]
		},
		{
			name		:	"Asterisp Theta",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Asterisp Theta.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Symbol" ]
		},
		{
			name		:	"Asterisp Zeta",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Asterisp Zeta.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Symbol" ]
		},
		{
			name		:	"Baltar",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Baltar.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Plain" ]
		},
		{
			name		:	"Beat My Guest",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Beat My Guest.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Decorated", "Negative Space", "Handwriting", "Ornamental", "Irregular Chars" ]
		},
		{
			name		:	"Betsy Flanagan",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Betsy Flanagan.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Keyboard", "Decorated", "Monospace", "Ornamental" ]
		},
		{
			name		:	"Betsy Flanagan 2",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Betsy Flanagan 2.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Symbol", "Decorated", "Keyboard", "Ornamental" ]
		},
		{
			name		:	"Bomr",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Bomr.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Playful", "Ornamental", "Angular", "No Lowercase", "Leading Left Hook" ]
		},
		{
			name		:	"Braeside - Lumberboy",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Braeside - Lumberboy.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Stencil", "Broken Letters", "No Lowercase", "Partial Symbol Set", "Thick Chars" ]
		},
		{
			name		:	"Braeside - Outline",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Braeside - Outline.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Negative Space", "Outline", "Stencil", "Broken Letters", "No Lowercase", "Partial Symbol Set", "Thick Chars" ]
		},
		{
			name		:	"Butterbelly",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Butterbelly.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Irregular Chars", "Partial Symbol Set", "Plain" ]
		},
		{
			name		:	"Buxotic",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Buxotic.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "No Lowercase", "Cosmic", "Ornamental", "Partial Symbol Set", "Thick Chars", "Hard To Read" ]
		},
		{
			name		:	"Charles In Charge",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Charles In Charge.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Angular", "Block Shaped" ]
		},
		{
			name		:	"Color Basic",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Color Basic.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Negative Space", "Retro", "Pixelated", "Decorated", "No Lowercase", "Monospace" ]
		},
		{
			name		:	"Contour Generator",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Contour Generator.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Logo", "RCA", "Angular", "Thick Chars", "Broken Letters", "No Lowercase" ]
		},
		{
			name		:	"Crack Man",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Crack Man.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Negative Space", "Shadow", "Thick Chars", "Angular", "Composite Font", "No Lowercase" ]
		},
		{
			name		:	"Crack Man - Back",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Crack Man - Back.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Shadow", "Thick Chars", "Angular", "Composite Font", "No Lowercase" ]
		},
		{
			name		:	"Crack Man - Front",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Crack Man - Front.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Angular", "Composite Font", "No Lowercase" ]
		},
		{
			name		:	"Cranberry Gin",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Cranberry Gin.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Angular", "Partial Symbol Set", "Block Shaped" ]
		},
		{
			name		:	"Cretino",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Cretino.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Elegant", "Gothic", "Ornamental", "Partial Symbol Set", "Distressed" ]
		},
		{
			name		:	"Cuomotype",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Cuomotype.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Decay", "Angular", "Block Shaped" ]
		},
		{
			name		:	"Cyclopentane",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Cyclopentane.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Thick Chars", "Angular", "Hard To Read", "No Lowercase", "Ornamental" ]
		},
		{
			name		:	"Lilliput Steps",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Lilliput Steps.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Pixelated", "Retro", "Monospace", "Partial Symbol Set", "Block Shaped" ]
		},
		{
			name		:	"Dazzle Ships",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Dazzle Ships.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Decorated", "Thick Chars", "Angular", "Ornamental", "Broken Letters" ]
		},
		{
			name		:	"Delta Hey Max Nine",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Delta Hey Max Nine.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Curvy Letters", "Playful", "Vintage", "Swirl", "Partial Symbol Set" ]
		},
		{
			name		:	"Dendritic Voltage",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Dendritic Voltage.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Irregular Chars", "Broken Letters", "Ornamental", "No Lowercase" ]
		},
		{
			name		:	"Dream Orphans",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Dream Orphans.otf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Dream Orphans Bold.otf",
					style		:	"normal",
					weight		:	"bold",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Dream Orphans Italic.otf",
					style		:	"italic",
					weight		:	"normal",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Dream Orphans Bold Italic.otf",
					style		:	"italic",
					weight		:	"bold",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Plain", "Narrow Chars", "Formal" ]
		},
		{
			name		:	"Eden Mills",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Eden Mills.otf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Eden Mills Bold.otf",
					style		:	"normal",
					weight		:	"bold",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Eden Mills Italic.otf",
					style		:	"italic",
					weight		:	"normal",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Eden Mills Bold Italic.otf",
					style		:	"italic",
					weight		:	"bold",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Angular", "Leading Left Hook", "Block Shaped" ]
		},
		{
			name		:	"Edgewater",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Edgewater.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Decay", "Broken Letters", "Partial Symbol Set", "No Lowercase", "Block Shaped" ]
		},
		{
			name		:	"Edmunds",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Edmunds.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Vintage", "Western" ]
		},
		{
			name		:	"Edmunds - Distressed",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Edmunds - Distressed.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Vintage", "Western", "Decay" ]
		},
		{
			name		:	"Ennobled Pet",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Ennobled Pet.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Animals", "Negative Space", "Decorated", "Playful", "No Lowercase", "Ornamental", "Irregular Chars" ]
		},
		{
			name		:	"Fadgod",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Fadgod.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Irregular Chars", "Thin Chars", "Angular", "Broken Letters", "Ornamental", "Hard To Read" ]
		},
		{
			name		:	"Failed Attempt",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Failed Attempt.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Dotted", "Slanted", "Retro", "Block Shaped", "Ornamental" ]
		},
		{
			name		:	"Fragile Bombers",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Fragile Bombers.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Plain", "Block Shaped" ]
		},
		{
			name		:	"Fragile Bombers - Attack",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Fragile Bombers - Attack.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Plain", "Block Shaped", "Decay" ]
		},
		{
			name		:	"Fragile Bombers - Down",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Fragile Bombers - Down.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Plain", "Block Shaped", "Distorted" ]
		},
		{
			name		:	"Ghostmeat",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Ghostmeat.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Composite Font", "Graffiti", "Thick Chars", "Negative Space", "Outline", "Partial Symbol Set", "No Lowercase", "Ornamental" ]
		},
		{
			name		:	"Ghostmeat - Front",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Ghostmeat - Front.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Composite Font", "Graffiti", "Partial Symbol Set", "No Lowercase", "Ornamental" ]
		},
		{
			name		:	"Ghostmeat - Back",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Ghostmeat - Back.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Composite Font", "Graffiti", "Thick Chars", "Partial Symbol Set", "No Lowercase", "Ornamental" ]
		},
		{
			name		:	"Glazkrak",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Glazkrak.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Decorated", "Broken Letters", "Decay", "Glass", "Partial Symbol Set", "Ornamental", "No Lowercase" ]
		},
		{
			name		:	"Golden Girdle",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Golden Girdle.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Irregular Chars", "Thick Chars", "No Lowercase", "Logo", "Ornamental", "Hard To Read", "Block Shaped" ]
		},
		{
			name		:	"Heart Sweet Heart",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Heart Sweet Heart.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Heart", "No Lowercase", "Partial Symbol Set", "Dotted" ]
		},
		{
			name		:	"Highway To Heck",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Highway To Heck.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Decay", "Formal", "Thick Chars" ]
		},
		{
			name		:	"Home Sweet Home - Outline",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Home Sweet Home - Outline.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Stitch", "Partial Symbol Set", "Dotted", "Negative Space", "No Lowercase", "Ornamental" ]
		},
		{
			name		:	"Home Sweet Home",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Home Sweet Home.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Stitch", "Dotted", "Outline", "Partial Symbol Set", "No Lowercase", "Ornamental" ]
		},
		{
			name		:	"Hooked Up 101",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Hooked Up 101.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Slanted", "Angular", "3D", "Partial Symbol Set", "Plain" ]
		},
		{
			name		:	"Horsepower",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Horsepower.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Block Shaped", "Partial Symbol Set", "Angular", "Narrow Chars" ]
		},
		{
			name		:	"Induction",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Induction.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Wide Chars", "Block Shaped", "No Lowercase", "Angular", "Ornamental" ]
		},
		{
			name		:	"Injekuta",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Injekuta Light.otf",
					style		:	"normal",
					weight		:	"300",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Injekuta.otf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Injekuta Bold.otf",
					style		:	"normal",
					weight		:	"700",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Injekuta Black.otf",
					style		:	"normal",
					weight		:	"900",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Ornamental", "Block Shaped", "No Lowercase" ]
		},
		{
			name		:	"Instant Tunes",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Instant Tunes.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Fangs", "Curvy Letters", "No Lowercase", "Ornamental", "Leading Left Hook" ]
		},
		{
			name		:	"Interplanetary Crap",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Interplanetary Crap.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Stencil", "Broken Letters", "Decay" ]
		},
		{
			name		:	"Iomanoid",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Iomanoid.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Negative Space", "Greek", "Angular", "Composite Font", "Ornamental", "Partial Symbol Set", "No Lowercase" ]
		},
		{
			name		:	"Iomanoid - Back",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Iomanoid - Back.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Greek", "Angular", "Composite Font", "Ornamental", "Partial Symbol Set", "No Lowercase" ]
		},
		{
			name		:	"Iomanoid - Front",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Iomanoid - Front.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Greek", "Angular", "Composite Font", "Ornamental", "Partial Symbol Set", "No Lowercase" ]
		},
		{
			name		:	"Iomanoid - Shine",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Iomanoid - Shine.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Greek", "Angular", "Composite Font", "Ornamental", "Partial Symbol Set", "No Lowercase", "Hard To Read" ]
		},
		{
			name		:	"Karma - Future",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Karma - Future.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Pixelated", "Negative Space", "Retro", "VCR", "Ornamental", "Outline", "Shadow" ]
		},
		{
			name		:	"Karma - Suture",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Karma - Suture.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Pixelated", "Retro", "VCR" ]
		},
		{
			name		:	"Kicking Limos",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Kicking Limos.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Slanted", "Curvy Letters", "No Lowercase", "Partial Symbol Set", "Ornamental", "Hard To Read" ]
		},
		{
			name		:	"King Richard",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/King Richard.otf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/King Richard Italic.otf",
					style		:	"italic",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Plain", "Leading Left Hook", "Formal" ]
		},
		{
			name		:	"Kwokwi - Back",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Kwokwi - Back.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Curvy Letters", "Negative Space", "Hard To Read", "Composite Font", "Shadow", "Playful" ]
		},
		{
			name		:	"Kwokwi - Front",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Kwokwi - Front.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Curvy Letters", "Composite Font", "Plain", "Playful" ]
		},
		{
			name		:	"Kwokwi",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Kwokwi.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Curvy Letters", "Composite Font", "Shadow", "Playful", "Ornamental" ]
		},
		{
			name		:	"Kwokwi - Stripes",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Kwokwi - Stripes.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Curvy Letters", "Composite Font", "Playful", "Decay", "Striped" ]
		},
		{
			name		:	"Living by Numbers",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Living by Numbers.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Angular", "Playful", "Slanted", "Partial Symbol Set", "Irregular Chars" ]
		},
		{
			name		:	"Lockergnome",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Lockergnome.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Thick Chars", "Playful", "Irregular Chars" ]
		},
		{
			name		:	"Lunasol",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Lunasol.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Broken Letters", "Composite Font", "Block Shaped", "No Lowercase", "Partial Symbol Set", "Angular", "Ornamental" ]
		},
		{
			name		:	"Lunasol - Sequence",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Lunasol - Sequence.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Broken Letters", "Composite Font", "Block Shaped", "No Lowercase", "Partial Symbol Set", "Angular", "Ornamental" ]
		},
		{
			name		:	"Lunasol - Aurora",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Lunasol - Aurora.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Broken Letters", "Composite Font", "Block Shaped", "No Lowercase", "Partial Symbol Set", "Angular", "Outline", "Negative Space", "Ornamental" ]
		},
		{
			name		:	"Lunasol - Eclipse",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Lunasol - Eclipse.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Composite Font", "Block Shaped", "No Lowercase", "Partial Symbol Set", "Angular", "Ornamental" ]
		},
		{
			name		:	"Mango",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Mango.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Playful", "Curvy Letters", "Thick Chars", "Composite Font", "Negative Space", "Irregular Chars", "Outline", "Partial Symbol Set" ]
		},
		{
			name		:	"Mango - Fill",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Mango - Fill.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Playful", "Curvy Letters", "Thick Chars", "Composite Font", "Irregular Chars", "Partial Symbol Set" ]
		},
		{
			name		:	"Mango - Scribble",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Mango - Scribble.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Playful", "Curvy Letters", "Thick Chars", "Composite Font", "Decay", "Irregular Chars", "Partial Symbol Set", "Distorted",  ]
		},
		{
			name		:	"Marquee Moon",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Marquee Moon.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Narrow Chars", "Broken Letters", "No Lowercase", "Ornamental" ]
		},
		{
			name		:	"Massive Retaliation",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Massive Retaliation.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Rounded Chars", "No Lowercase", "Partial Symbol Set" ]
		},
		{
			name		:	"Mister Firley",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Mister Firley.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Narrow Chars", "Irregular Chars", "Partial Symbol Set" ]
		},
		{
			name		:	"Model Worker",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Model Worker.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Decay", "Distressed", "Halloween", "Ornamental", "No Lowercase", "Partial Symbol Set" ]
		},
		{
			name		:	"Moja",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Moja.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Decorated", "Frame", "Texture", "Ornamental", "No Lowercase", "Partial Symbol Set", "Negative Space" ]
		},
		{
			name		:	"Moja A",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Moja A.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Symbol", "Frame", "Composite Font" ]
		},
		{
			name		:	"Moja B",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Moja B.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Symbol", "Frame", "Composite Font" ]
		},
		{
			name		:	"Moja C",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Moja C.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Symbol", "Frame", "Composite Font" ]
		},
		{
			name		:	"Moja D",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Moja D.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Decorated", "Frame", "Texture", "Ornamental", "No Lowercase", "Partial Symbol Set", "Negative Space", "Hard To Read" ]
		},
		{
			name		:	"Moja E",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Moja E.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "No Lowercase", "Partial Symbol Set", "Plain", "Formal" ]
		},
		{
			name		:	"Naftalene",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Naftalene.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Angular", "Narrow Chars", "Ornamental", "Irregular Chars", "Partial Symbol Set" ]
		},
		{
			name		:	"Numberpile",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Numberpile.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Symbol", "Monospace", "Negative Space", "Composite Font" ]
		},
		{
			name		:	"Numberpile - Reversed",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Numberpile - Reversed.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Symbol", "Outline", "Composite Font" ]
		},
		{
			name		:	"Octoville",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Octoville.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Angular", "Narrow Chars", "Plain" ]
		},
		{
			name		:	"Overload",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Overload.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Rounded Edges", "Thick Chars", "Plain" ]
		},
		{
			name		:	"Overload - Burn",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Overload - Burn.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Rounded Edges", "Thick Chars", "Negative Space", "Plain", "Outline" ]
		},
		{
			name		:	"Plasmatic",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Plasmatic.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Angular", "Rounded Edges" ]
		},
		{
			name		:	"Plastic Bag",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Plastic Bag.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Angular", "Thick Chars", "Hard To Read", "No Lowercase", "Partial Symbol Set", "Ornamental" ]
		},
		{
			name		:	"President Gas",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/President Gas.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Broken Letters", "Stencil", "Narrow Chars", "Thick Chars", "Angular" ]
		},
		{
			name		:	"Pyrite",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Pyrite.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Narrow Chars", "Angular", "Greek", "Irregular Chars", "No Lowercase" ]
		},
		{
			name		:	"Quadrangle",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Quadrangle.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Angular", "Plain" ]
		},
		{
			name		:	"Radios in Motion",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Radios in Motion.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Morse Code", "Decorated", "Partial Symbol Set" ]
		},
		{
			name		:	"Radios in Motion - Hard",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Radios in Motion - Hard.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Symbol", "Morse Code" ]
		},
		{
			name		:	"Razor Keen",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Razor Keen.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Distressed", "Halloween", "Partial Symbol Set", "Irregular Chars", "Slanted" ]
		},
		{
			name		:	"Renju",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Renju.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Decay", "Western", "Irregular Chars", "Ornamental", "Vintage" ]
		},
		{
			name		:	"Rustproof Body",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Rustproof Body.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Wide Chars", "Block Shaped", "Partial Symbol Set", "Broken Letters", "Ornamental" ]
		},
		{
			name		:	"Screengem",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Screengem.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Playful", "Plain", "No Lowercase", "Irregular Chars", "Partial Symbol Set" ]
		},
		{
			name		:	"Skraype",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Skraype.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Broken Letters", "Stencil", "Thick Chars", "Decay", "Playful", "Ornamental" ]
		},
		{
			name		:	"Sloe Gin Rickey",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Sloe Gin Rickey.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Slanted", "Leading Left Hook", "Ornamental" ]
		},
		{
			name		:	"So Run Down",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/So Run Down.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Distressed", "Hard To Read", "Partial Symbol Set", "Decay", "Irregular Chars", "No Lowercase", "Ornamental" ]
		},
		{
			name		:	"Squealer",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Squealer.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Angular", "Greek", "Thick Chars", "Partial Symbol Set" ]
		},
		{
			name		:	"Squealer - Embossed",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Squealer - Embossed.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Angular", "Greek", "Thick Chars", "Negative Space", "Partial Symbol Set", "Ornamental" ]
		},
		{
			name		:	"Stupefaction",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Stupefaction.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Angular", "Ornamental", "Hard To Read", "Partial Symbol Set", "No Lowercase" ]
		},
		{
			name		:	"Subpear",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Subpear.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Plain", "Narrow Chars" ]
		},
		{
			name		:	"Sudbury Basin",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Sudbury Basin.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Angular", "No Lowercase", "Partial Symbol Set", "Block Shaped" ]
		},
		{
			name		:	"Sudbury Basin - 3D",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Sudbury Basin - 3D.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Angular", "No Lowercase", "Partial Symbol Set", "Block Shaped", "Offset", "Negative Space", "Outline" ]
		},
		{
			name		:	"Superglue",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Superglue.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Rounded Edges", "Block Shaped", "No Lowercase", "Ornamental", "Wide Chars" ]
		},
		{
			name		:	"Tinsnips",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Tinsnips.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Decorated", "Negative Space", "Broken Letters", "Irregular Chars", "No Lowercase", "Partial Symbol Set", "Ornamental", "Stencil" ]
		},
		{
			name		:	"Trapper John",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Trapper John.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Angular", "Block Shaped", "Ornamental", "No Lowercase" ]
		},
		{
			name		:	"Triac 71",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Triac 71.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Narrow Chars", "Ornamental", "Plain" ]
		},
		{
			name		:	"Union City Blue",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Union City Blue.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "No Lowercase", "Ornamental", "Rounded Chars" ]
		},
		{
			name		:	"Univox",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Univox.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Wide Chars", "Block Shaped", "Hard To Read", "Ornamental" ]
		},
		{
			name		:	"Urkelian",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Urkelian.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Narrow Chars", "Ornamental", "Angular" ]
		},
		{
			name		:	"Vahika",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Vahika.otf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Vahika Italic.otf",
					style		:	"italic",
					weight		:	"normal",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Vahika Bold.otf",
					style		:	"normal",
					weight		:	"bold",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Vahika Bold Italic.otf",
					style		:	"italic",
					weight		:	"bold",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Plain", "Formal" ]
		},
		{
			name		:	"Vectroid",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Vectroid.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Playful", "Broken Letters", "Thick Chars", "Ornamental", "Hard To Read" ]
		},
		{
			name		:	"Vibrocentric",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Vibrocentric.otf",
					style		:	"normal",
					weight		:	"normal",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Vibrocentric Italic.otf",
					style		:	"italic",
					weight		:	"normal",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Vibrocentric Bold.otf",
					style		:	"normal",
					weight		:	"bold",
				},
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Vibrocentric Bold Italic.otf",
					style		:	"italic",
					weight		:	"bold",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Plain", "Block Shaped", "Wide Chars", "Formal" ]
		},
		{
			name		:	"Wee Bairn",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Wee Bairn.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Thick Chars", "Playful", "Plain", "Irregular Chars" ]
		},
		{
			name		:	"Whiterock",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Whiterock.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Curvy Letters", "Irregular Chars", "Thick Chars", "Playful", "Plain" ]
		},
		{
			name		:	"Windpower",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Windpower.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Slanted", "Leading Left Hook", "No Lowercase", "Thick Chars" ]
		},
		{
			name		:	"Wintermute",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Wintermute.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Broken Letters", "Angular", "No Uppercase", "Ornamental" ]
		},
		{
			name		:	"Yonder Recoil",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Yonder Recoil.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Broken Letters", "Block Shaped", "Hard To Read", "Ornamental", "No Lowercase" ]
		},
		{
			name		:	"Zupiter",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Zupiter.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Serif", "Playful", "Plain", "Irregular Chars", "Leading Left Hook" ]
		},
		{
			name		:	"Zeroes 1",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Zeroes 1.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Plain", "Block Shaped" ]
		},
		{
			name		:	"Zeroes 2",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Zeroes 2.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Plain", "Block Shaped" ]
		},
		{
			name		:	"Zeroes 3",
			authors		:	[ "Typodermic Fonts" ],
			variants	:	[
				{
					path		:	"_Typodermic Public Domain Fonts/opentype fonts/Zeroes 3.otf",
					style		:	"normal",
					weight		:	"normal",
				},
			],
			license		:	"Public Domain",
			tags		:	[ "Sans-Serif", "Plain", "Block Shaped" ]
		},




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
.focusHighlight:focus {
    box-shadow: 0px 0px 0.3em #FF4, inset 0px 0px 0.3em #FF4;
}

.playbackDelay {
	width: 5em;
}

#fontsLibFontCount {
	padding-left: 0.25em;
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
	font-size: 14pt;
	font-weight: bold;
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
	background-color: #FFFFFF10;
}

.fontsLibCharacterBoxes {
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

#fontsLibFontTitle {
	text-align: center;
	font-size: 36pt;
	font-family: 'nabfonts monospace';
}

#fontsLibFontAuthor {
	text-align: center;
	font-size: 18pt;
	font-family: 'nabfonts monospace';
}

#fontsLibFontLicense {
	text-align: center;
	font-size: 14pt;
	font-family: 'nabfonts monospace';
}

#fontsLibFontTags {
	text-align: center;
	font-size: 14pt;
	font-family: 'nabfonts monospace';
}

#fontsLibFontPaths {
	text-align: center;
	font-size: 11pt;
	font-family: 'nabfonts monospace';
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

#fontsLibCSSValue {
	user-select: all;
	white-space: break-spaces;
	text-align: left;
	font-size: 7pt;
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
/*
	width: 100%;
*/
}

#fontsLibNameFilter {
/*
	width: 100%;
*/
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
}

#fontsLibFontDisplayArea {
	background-color: #0009;
	padding: 1%;
	overflow-y: scroll;
	overflow-x: hidden;
	min-width: 0;
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
	font-size: 10pt;
	padding-left: 0.75rem;

	display: flex;
	flex-direction: column;
	gap: .35em;
	padding-top: .35em;
	padding-bottom: .35em;
}

#fontsLibUnusedTagsContainer {
	font-size: 11pt;
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
	background-color: #122A12;
}

.fontsLibPlaybackTimer {
	font-size: 0.9em;
	display: flex;
	gap: 0.5em;
	padding-left: 0.25em;
	padding-right: 0.25em;
}

.fontsLibFontSelectionItem:hover {
	background-color: #942;
}

.fontsLibFontSelectionItem {
	font-family: 'nabFonts monospace';
	font-weight: bold;
	font-size: 12pt;
	cursor: pointer;
	white-space: nowrap;
}

.fontsLibFontSelectionSample {
	color: #BBB;
	padding-left: 1em;
}

#fontsLibFontSelection {
	flex: 1 1;
	border: 0.15rem inset #333;
	width: 15rem;
	height: 90%;
	overflow-y: scroll;
	overflow-x: hidden;
	color: #FFF;
	font-size: 14pt;
	user-select: none;
}

.fontsLibFontSelectionColor {
	display: flex;
	flex-direction: column;
	flex: 1 1;
	background-color: #321;
}

.fontsLibFiltersHeader {
	text-align: center;
	font-size: 16pt;
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
	font-size: 18pt;
	font-weight: normal;
	font-style: normal;
	padding: 0.1em 0.1em 0.1em 0.1em;
	margin: 0.2em;
	display: inline-block;
	text-shadow: 0.05em 0.05em 0.05em #000;
}

.fontsLibActiveButton {
	color: #000;
	background-color: #BBB;
	border-style: inset;
	text-shadow: 0.05em 0.05em 0.05em #EEE;
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
	font-size: 14pt;
	line-height: 18pt;
	width: 18pt;
	font-family: "webhostinghub glyphs";
	padding: 0.1em
}

.fontsLibItalicButton {
	font-style: italic;
	text-align: left;
	font-size: 14pt;
	line-height: 18pt;
	width: 18pt;
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
	font-size: 15pt;
	line-height: 15pt;
	width: 15pt;
	padding: 0.3em;
}

.allCharactersOutput {
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
			break
		}
	}

	clearElement(fontsLibInstructions)
	document.getElementById('fontsLibInstructions').style.display = 'block'	// If the user pressed the show/hide button, MAKE SURE the instructions are shown anyway when the font is changed
	// This next part determines if the entire instructions block should be shown at all
	if(tempFont.hasOwnProperty('instructions')) {
		let tagBlacklist = superTextConvertWhitelistToBlacklist([ 'b', 'i', 'u', 's', 'hbox', 'vbox', 'grid', 'color', 'font', 'img', 'br', 'hr', 'url', 'l', 'c', 'r', 'j', 'ol', 'ul', 'li', 'sup', 'sub', 'size', 'quote', 'code', 'iquote', 'icode', 'nomarkup' ])
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

	fontsLibFontTitle.appendChild(createElement({ elementType: 'span', text: tempFont.name }))

	fontsLibFontAuthor.appendChild(createElement({ elementType: 'span', text: 'By: ' }))

	let currentAuthors = []
	let currentLicenses = []
	let currentFilters = fontsLibGetHashData()
	if(currentFilters.hasOwnProperty('filters')) currentFilters = currentFilters.filters
	if(currentFilters.hasOwnProperty('include')) currentFilters = currentFilters.include
	if(currentFilters.hasOwnProperty('authors')) currentAuthors = currentFilters.authors
	if(currentFilters.hasOwnProperty('licenses')) currentLicenses = currentFilters.licenses

	for(let i = 0; i < tempFont.authors.length; i++) {
		fontsLibFontAuthor.appendChild(createElement({ elementType: 'span', className : 'fontsLibFontAuthor fontsLibClickable', onclick : ()=>{ fontsLibChangeFilters({ unused : currentAuthors, include : { authors : [ tempFont.authors[i] ] } }, 'authors') }, text: tempFont.authors[i] }))
		if(i + 1 < tempFont.authors.length) {
			fontsLibFontAuthor.appendChild(createElement({ elementType: 'span', text: ', ' }))
		}
	}

	fontsLibFontLicense.appendChild(createElement({ elementType: 'span', text: 'License: ' }))
	fontsLibFontLicense.appendChild(createElement({ elementType: 'span', className : 'fontsLibFontLicense fontsLibClickable', onclick : ()=>{ fontsLibChangeFilters({ include : { unused : currentLicenses, licenses : [ tempFont.license ] } }, 'licenses') }, text: ((!tempFont.hasOwnProperty('license') || tempFont.license == '') ? 'Unknown' : tempFont.license) }))

	fontsLibFontTags.appendChild(createElement({ elementType: 'span', text: 'Tags: ' }))
	for(let i = 0; i < tempFont.tags.length; i++) {
		fontsLibFontTags.appendChild(createElement({ elementType: 'span', className : 'fontsLibFontTags fontsLibClickable', onclick : ()=>{ fontsLibChangeFilters({ include : { tags : [ tempFont.tags[i] ] } }, 'tags') }, text: tempFont.tags[i] }))
		if(i + 1 < tempFont.tags.length) {
			fontsLibFontTags.appendChild(createElement({ elementType: 'span', text: ', ' }))
		}
	}

	fontsLibFontPaths.appendChild(createElement({ elementType: 'span', text: 'File Paths (Click to download):' }))
	fontPathColors = [ '#4F4', '#4FF', '#44F', '#F4F', '#F44', '#FF4' ]
	let count = 0
	for(let i = 0; i < tempFont.paths.length; i++) {
		fontsLibFontPaths.appendChild(createElement({ elementType: 'br' }))
		fontsLibFontPaths.appendChild(createElement({ elementType: 'a', href : tempFont.paths[i], download : 'true', className : 'fontsLibFontPaths fontsLibClickable', style : { color : fontPathColors[count % fontPathColors.length] }, text: tempFont.paths[i] }))
		count++
	}
}

function fontsLibBoldFont(inputElement, boldFont = true) {
	if(boldFont) {
		boldFont = 'bold'
	} else {
		boldFont = 'normal'
	}
	inputElement.style.fontWeight = boldFont
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

function fontsLibSetBold(boldActive) {
	fontsLibSetButtonState(fontsLibBoldButton, boldActive)

	fontsLibBoldFont(fontsLibSampleTextArea, boldActive)
	fontsLibBoldFont(pangrams, boldActive)
	fontsLibBoldFont(uppercaseLetters, boldActive)
	fontsLibBoldFont(lowercaseLetters, boldActive)
	fontsLibBoldFont(punctuation, boldActive)
	fontsLibBoldFont(fontsLibAllCharacters, boldActive)
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

function fontsLibToggleBold() {
	let temp = fontsLibGetHashData()
	if(temp.hasOwnProperty('bold') && temp.bold == true) {
		fontsLibSetHashData({ 'bold' : false })
		return
	}
	fontsLibSetHashData({ 'bold' : true })
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
	fontsLibRotateFontTimer = setTimeout(()=>{ if(document.getElementById('fontsLibPlayButton') === null) return; fontsLibNext(); fontsLibPlay(); }, clamp(parseFloat(playbackDelay.value), 1, 15) * 1000)
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

	if(hashData.hasOwnProperty('bold') && hashData.bold == true) {
		fontsLibSetBold(true)
	} else {
		fontsLibSetBold(false)
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
	let selectOutput = { elementType : 'select', className : 'fontsLib' + metadata + 'Dropdown focusHighlight', id : metadata + 'Dropdown', children : [] }

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

function fontsLibRenderPage(renderElement, fontsLibShowDownloadAndCSS = true) {
	let tempHashData = fontsLibGetHashData()
	if(tempHashData.hasOwnProperty('displayTime')) fontsLibDisplayTime = tempHashData.displayTime

	renderElement.appendChild(createElement({ elementType : 'div', className : 'fontsLibContainer', children : [
		{ elementType : 'div', id : 'fontsLibFontSettings', children : [
			{ elementType : 'div', style : { padding : '0.75rem', flex : '0 0'}, children : [
				{ elementType : 'span', text : 'Sample Text:' },
				{ elementType : 'br' },
				{ elementType : 'div', className : 'fontsLibTextInputContainer', style : { display : 'flex', alignItems : 'center', justifyContent : 'center' }, children : [
					{ elementType : 'input', type : 'text', size : '20', className : 'focusHighlight', id : 'fontsLibSampleTextText' },
					{ elementType : 'div', className : 'fontsLibClearButton', onclick : ()=>{ fontsLibClearSampleText() } },
				] },
				{ elementType : 'br' },
				{ elementType : 'span', text : 'Size: ' },
				{ elementType : 'span', id : 'fontsLibFontSizeText' },
				{ elementType : 'div', className : 'slidecontainer', children : [
					{ elementType : 'input', type : 'range', min : '8', max : '300', value : '4', step : '4', className : 'focusHighlight', id : 'fontsLibFontSize', onchange : ()=>{ fontsLibChangeAllSampleFontSizes(document.getElementById('fontsLibFontSize').value) } },
				] },
				{ elementType : 'div', className : 'fontsLibFormatButtons', children : [
					{ elementType : 'div', className : 'fontsLibFormatButtonsContainer' },
					{ elementType : 'div', className : 'fontsLibFormatButtonsContainer', children : [
						{ elementType : 'div', id : 'fontsLibBoldButton', title : 'Bold', className : 'fontsLibButton fontsLibBoldButton', onclick : ()=>{ fontsLibToggleBold() }, text : '' }
					]},
					{ elementType : 'div', className : 'fontsLibFormatButtonsContainer', children : [
						{ elementType : 'div', id : 'fontsLibItalicButton', title : 'Italic', className : 'fontsLibButton fontsLibItalicButton', onclick : ()=>{ fontsLibToggleItalic() }, text : '' }
					]},
					{ elementType : 'div', className : 'fontsLibFormatButtonsContainer' },
				] },
				{ elementType : 'hr', width : '85%' },
				{ elementType : 'div', children : [
					{ elementType : 'div', className : 'fontsLibFiltersHeader', text : 'Filters' },
					{ elementType : 'span', className : 'fontsLibTagHeader', text : 'Name:' },
					{ elementType : 'br' },
					{ elementType : 'div', className : 'fontsLibTextInputContainer', style : { display : 'flex', alignItems : 'center', justifyContent : 'center' }, children : [
						{ elementType : 'input', type : 'text', size : '20', className : 'focusHighlight', id : 'fontsLibNameFilter' },
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
			{ elementType : 'div', className : 'fontsLibNavigation fontsLibPlaybackTimer', children : [
				{ elementType : 'span', style : { flex : '1 1' }, text : 'Display Time:' },
				{ elementType : 'input', id : 'playbackDelay', type : 'number', min : '1', max : '15', value : fontsLibDisplayTime, className : 'playbackDelay focusHighlight', style : { textAlign : 'center' }, onchange : ()=>{ fontsLibSetHashData({ displayTime : document.getElementById('playbackDelay').value }); let tempPlaybackHashData = fontsLibGetHashData(); if(!tempPlaybackHashData.hasOwnProperty('playbackState') || tempPlaybackHashData.playbackState == 'play'){ fontsLibStop(); fontsLibPlay(); } } },
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
			{ elementType : 'div', className : 'fontsLibFontSelectionColor', children : [
				{ elementType : 'span', id : 'fontsLibFontCount', className : 'fontsLibTagHeader' },
				{ elementType : 'select', id : 'fontsLibFontSelection', size : '15', className : 'fontsLibFontSelectionColor focusHighlight' }
			]},
		]},
		{ elementType : 'div', id : 'fontsLibFontDisplayArea', children : [
			{ elementType : 'div', id : 'fontsLibFontTitle' },
			{ elementType : 'div', id : 'fontsLibFontAuthor' },
			{ elementType : 'div', id : 'fontsLibFontLicense' },
			{ elementType : 'div', id : 'fontsLibFontTags' },
			{ elementType : 'br' },
			{ elementType : 'div', id : 'fontsLibFontPaths' },
			{ elementType : 'div', id : 'fontsLibCSSStyles', children : [
				{ elementType : 'br' },
				{ elementType : 'div', style : { marginBottom : '1em' }, children : [
					{ elementType : 'span', onclick: ()=>{ let temp = document.getElementById('fontsLibCSSValue'); if(temp.style.display != 'none') { temp.style.display = 'none' } else { temp.style.display = 'block' } }, children : [
						{ elementType : 'span', className : 'fontsLibClickable', text : 'CSS Style Definition:  ' },
						{ elementType : 'button', className : 'fontsLibButton', style : { margin : '0px', fontFamily : '\'nabfonts monospace\', monospace', fontWeight : 'bold', fontSize : '0.75em', borderRadius : '0.35em', padding : '0.1em 0.5em 0.1em 0.5em', userSelect : 'none', cursor : 'pointer' }, text : 'Show/Hide' },
					] },
					{ elementType : 'pre', id : 'fontsLibCSSValue', style : { display : 'none' }, className : 'fontsLibCharacterSampleContainers fontsLibFullWidth' },
				] },
			]},
			{ elementType : 'div', id : 'fontsLibInstructionsContainer', style : { marginBottom : '1em', userSelect: 'none' }, children : [
				{ elementType : 'span', style : { marginBottom : '1em' }, onclick: ()=>{ let temp = document.getElementById('fontsLibInstructions'); if(temp.style.display != 'none') { temp.style.display = 'none' } else { temp.style.display = 'block' } }, children : [
					{ elementType : 'span', className : 'fontsLibClickable', text : 'Instructions:  ' },
					{ elementType : 'button', className : 'fontsLibButton', style : { margin : '0px', fontFamily : '\'nabfonts monospace\', monospace', fontWeight : 'bold', fontSize : '0.75em', borderRadius : '0.35em', padding : '0.1em 0.5em 0.1em 0.5em', userSelect : 'none', cursor : 'pointer' }, text : 'Show/Hide' },
				] },
				{ elementType : 'br' },
				{ elementType : 'pre', id : 'fontsLibInstructions', style : { userSelect : 'text' }, className : 'fontsLibCharacterSampleContainers fontsLibFullWidth focusHighlight' },
			] },
			{ elementType : 'div', children : [
				{ elementType : 'span', text : 'Sample Text:' },
				{ elementType : 'pre', id : 'fontsLibSampleTextArea', className : 'fontsLibCharacterSampleContainers fontsLibFullWidth focusHighlight' },
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
						{ elementType : 'div', className : 'fontsLibButton', style : { padding : '0.25em 1em 0.25em 1em', fontFamily : 'nabfonts sans-serif'}, onclick : ()=>{ if(hideAllCharacters.className.includes('fontsLibHidden')) { removeClassName(hideAllCharacters, 'fontsLibHidden') } else { addClassName(hideAllCharacters, 'fontsLibHidden') } }, children : [
							{ elementType : 'span', text : 'Click to show/hide all 1,114,112 Unicode characters.' },
							{ elementType : 'br' },
							{ elementType : 'span', text : 'WARNING: WILL CAUSE LAG AND MAY CRASH YOUR BROWSER!' },
						] },
						{ elementType : 'div', id : 'hideAllCharacters', className : 'fontsLibHidden fontsLibFullWidth', children : [
							{ elementType : 'div', id : 'allCharactersOutput', className : 'fontsLibSampleCharacter allCharactersOutput' }
						] },
					] }
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
							paths : [],
						}

	fontsLibParseFontDataIntoNewObject(newFontObject, customFonts.fontData[fontIndex])

	newFontObject.authors.sort()
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
	if (a == 'symbol') return -1

	if (b == 'sans-serif') return 1
	if (b == 'serif') return 1
	if (b == 'symbol') return 1

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
		// BEFORE sorting tags, make sure there's an instructions tag on the ones that need it!
		if(customFontData[i].hasOwnProperty('instructions')) {
			customFontData[i].tags.push('Has Instructions')
		}
		if(customFontData[i].name != '' && customFontData[i].path != '') {
			customFontData[i].tags.sort(fontsLibSortTags)
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
