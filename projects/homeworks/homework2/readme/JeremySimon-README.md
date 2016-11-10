Jeremy Simon - 661482693 - Homework 2

1) What are the advantages to writing a jQuery plugin over regular JavaScript that uses jQuery?
  There are many advantages to writing a jQuery plugin. You can ensure that one instance of the game is running, and not multiple (a problem we originally had was we wrote the plugin in such a way that within the instance of the game, you can start the game. By making it so clicking Start begins an instance of a game is much cleaner and ensures there aren't multiple instances of the game running). On top of this, organization is an important part of code, and having a plugin keeps functional code out of the main jQuery call where it isn't necessary.

2) Explain how your jQuery plugin adheres to best practices in JavaScript and jQuery development.
  Our jQuery plugin expects preset HTML div's and various tags with certain ids and classes, and so to adhere to best practices for development we would create a documentation to go alongside our JQuery plugin so other people who want to build our game but on a different webpage, can do it simply by going through the documentation and ensuring their HTML has what our plugin expects so the plugin can read/write to the page at the correct areas (according to the documentation).

3) Does anything prevent you from POSTing high scores to a server on a different domain? If so, what? If not, how would we go about it (written explanation/pseudocode is fine here)?
  The only thing that prevents us from being able to post scores would be the information we'd need to access that domain (domain name, database, password, etc.). With that information, we can post the information without worry since our webpage only contains numerical data. We would simply need to check that nobody is going through the values on the slider and the final score and trying to put unexpected information (simply ensuring it's a number). All we would do is have the plugin output information, and afterward in the JQuery we could call an AJAX function to call a PHP script for sending the data through a mysqli or PDO object.


Sources:
http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/
http://stackoverflow.com/questions/8522673/make-a-number-a-percentage
http://api.jquery.com/val/
http://www.w3schools.com/jsref/jsref_abs.asp