function domIterate(current, depth){
	//Set the depth if it wasn't set already.
	if(!depth){
		depth = 0;
	}

	if (current.nodeType== 1) { // Element node == 1.
		current.addEventListener('click', function(e) {
			alert(current.tagName)
		});

		console.log(current.tagName)
		if(current.tagName == "DIV") {
			current.addEventListener("mouseover", function(e){
				current.style.background="gray";
				current.style.padding="0px 0px 0px 10px";
			});
			current.addEventListener("mouseout", function(e){
				current.style.background="white";
				current.style.padding="0px 0px 0px 0px";
			});
		}

		// Start building the text of this node, pre traversal
		var text = '';

		for (var i= 0; i< depth; i++){
			// add a '-'
			text+= '-'	
		}

		//Add a new line
		text+= current.tagName+"\n";

		for(var n = 0; n < current.childNodes.length; n++){
			// get the text of the child node
			var childText= domIterate(current.childNodes[n], depth+1);
			// if the child node can be represented by text, add it to this one
			if (childText != null && childText != ''){
				text += childText;
			}	
		}
		return text;
	}
	
	else{
		return null;
	}
}
	
///////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
	var clone = document.getElementsByTagName('p')[0].cloneNode(true);
	document.body.appendChild(clone);
	document.getElementById("info").innerHTML = domIterate(document.documentElement);
}, false);


///////////////////////////////////////////////////////////////////////////////////////////////////