What are the advantages to writing a jQuery plugin over regular JavaScript that uses jQuery?
-Turning the game into a function that is simply called in from the main structure. Rather than using JavaScript which is more linear.
-The game becomes its own instance for cleanliness.

Explain how your jQuery plugin adheres to best practices in JavaScript and jQuery development.
-We can adhere to best practices by including documentation regarding required HTML5 elements necessary for the game plugin to be able to run.

Does anything prevent you from POSTing high scores to a server on a different domain? If so, what? If not, how would we go about it (written explanation/pseudocode is fine here)?
-As long as we have access to another domain everything is doable. We would also have to take into account user input. If the user inputs their score we would have to do a check, but since there is no such field, it is not necessary.

Now that you're used Web Storage, what other information would you store there in other Web-based applications? Is there any information you wouldn't store?
-If we were to have web storage, we would be able to store scores based on the player and the colors matched as well as high scores.
-It makes sense to have storage because the data allows us to make more use of site movement data, user trends, as well as possible studies for usability.
