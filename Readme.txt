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



//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////



This library contains only fonts that are free to use in a commercial capacity. All licenses have been included with the fonts to make things simple.
If a text file with a license is not available, I have included a link to the author's web page stating the license.



To open the interface and browse the fonts on your computer, open the file: "OPEN ME TO USE.html" in your web browser.



To integrate this library into a web page, add both nabLib.js and nabFonts.js to your page header. (nabLib.js MUST be included BEFORE nabFonts.js)
If you are changing the path of the fonts, you will need to change the variable:
	"customFontPath"

nabFonts.js will parse the fonts immediately upon it's inclusion on the web page, so MAKE SURE you change "customFontPath" in JavaScript BEFORE nabFonts.js is added.
In this configuration, when the web page is loaded, nabFonts.js will automatically declare every font in the page header every time your web page is loaded.

Finally, to use a font, all you have to do is use the CSS font-family property to reference it by name:
	"font-family: <font name here>"
If the font name has one or more spaces in it, make sure you put it in quotes.



If anything is misbehaving, check the JavaScript console, it should give some useful debug info.



For more in-depth instructions on how to use advanced features, open nabFonts.js in a text editor. There are complete instructions near the top of the file.
