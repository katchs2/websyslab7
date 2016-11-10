Samm Katcher

1) What are the advantages to writing a jQuery plugin over regular JavaScript that uses jQuery?
A plugin is the function that is created (= the game), in our case the first onclick function. 
Regular JavaScript is more linear. We are turning our game into a function that is called from within the main jQuery. This makes sure that there aren't multiple instances of the same game at the same time, each time a user opens the game. It's a function built off the main function when it is clicked, it creates a new instance of the game. It wouldn't make sense if you create the game from within the game. The starting click calls for a new instance of the game.

2) Explain how your jQuery plugin adheres to best practices in JavaScript and jQuery development.
Our plugin is well spaced.
To make our plugin adhere to best practices, we would need to include documentation on what we expect the HTML file to have so that our plugin can correctly read and write to the HTML with specific tags, ids,etc.
As the creators, we know exactly what we need for the HTML to have, but if we were to give this plugin to someone else to use with different HTML, they would need to know exactly how our plugin interacts with HTML.

3) Does anything prevent you from POSTing high scores to a server on a different domain? If so, what? If not, how would we go about it (written explanation/pseudocode is fine here)?
The only thing that stops us is the accessibility to another domain. As long as we have access to the other domain, we could post high scores to this domain. We calculate the score on our end, but we would need to check user input scores if they were put in, but since this is not the case, it is not an issue.

4) Now that you're used Web Storage, what other information would you store there in other Web-based applications? Is there any information you wouldn't store?
While we did not complete the extra credit, if we had we would have stored the scores for each person using the plugin, as well as how they scored on each color, and the overall high scores (and low scores!). It makes sense to store data because it can allow us to use it for later analysis. In other web based applications, it would make sense to store a running tally of activity, including common site navigation orders (homepage--> about us --> contact us, etc.). We would not store any personal information about the player (name, email address, IP address, Social Security etc) because it could be an issue of security and it would not be relevant to the game.

Works cited:
Stack Overflow
W3C
JSFiddle.net
	http://jsfiddle.net/trepmal/wvjjz/


We all contributed equally to this project, it was a really cohesive, evenly distributed project.