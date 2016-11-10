readme.md

Optimization is anything to help the file get to your computer faster.

Part 1: Instead of targetting all the list items and querying everything in the DOM, we targetted the id foo, checking for li inside, and then hiding the text. This helps the page load much faster.

Part 2: 
	1. Instead of the large background image, we are using CSS to change the background color. This saves about half a second of time because the browser does not need to load a large image. 

	2. I also removed the image and its secondary style/ body tags because they became extraneous, which is also an optimization because there is less that the page must load.

	3. I moved the JavaScript to the bottom of the page which has the text load first, optimizing the page.

	4. Moving CSS to a different document can improve speed of loading. This makes it faster after the first time, because it can be cached. That being said, the first time the page loads, it will be the same speed. I also made sure to use as compact a form of CSS as possible, minimizing whitespace to increase speed (although I am aware that it is not great practice for readability). I did not comment my CSS code because that also will make it run faster because it is smalle rin size.

	5. I deleted the list items from the body so that the page will load faster. The browser no longer needs to render an obnoxiously long list. Instead, I created an append function to a blank string. This appended the previous list item tags to the string in a for loop. By looping instead of hard coding, I am using better coding practices, saving time, saving memory, and increasing the readability of my markup.  Appending a list item directly to the div was redundant and slow. It is faster and better to concatinate a string and add the big string to the div.

	6. Using an abreviated hexadecimal name color teal, instead of the full hex code #add8e6, is an optimization. It can be the most efficient method to specifying colors within a site to ensure it is at its minimum size possible.

	7. I removed the bar class from the unordered list because it was redundant. The div the unordered list was in also contained the bar class, which by. Then I made bar an id because it is only referenced once. Ids are accessed faster than classes and are more efficient.



Creativity:
I used a Google Font for the text. I hope you enjoy the videos, I thought that adding links to Youtube videos was a creative addition to this project. :)

People I worked with:
Jason Kim
John Fantell
Adeel Minhas

Works cited:
http://spritedatabase.net/tutorial_sheet.php
http://www.monitis.com/blog/30-tips-to-optimize-htmlcssimages-for-smooth-web-experience/
http://snipplr.com/view/13680/how-to-rickroll-your-company/