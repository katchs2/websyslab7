$(document).ready(function() {
	$( function() {
	    // run the currently selected effect
	    function runEffect() {
	      // get effect type
	      var selectedEffect = 'highlight'
	      // Run the effect
	      $("#effect").toggle(selectedEffect, 500 );
	    };
	 
	    // Set effect from select menu value
	    $( ".toggler" ).on("click", function() {
	      runEffect();
	    });
  	});

	$.ajax({
		url: "resources/katchs2-quiz1.xml",
		type: "GET",
		dataType: "xml",
		success: function(data) {
			doc = $(data);
			output = "";
			$.each(doc.find("folder"), function(i, folder) {
				var folderName = $(folder).find("folderName").text();
				var description = $(folder).find("description").text();
				var loc = $(folder).find("relativeLocation").find("include").attr("file");
	
				output += "<div class='folder'><tr>" 
					+ "<td><a href='" + loc + "'>" 
					+	folderName + "</a> </td>"
					+ "<td><div id= 'effect' class= 'bg-primary toggler'>" + description + "</div></td>"
				+ "</div> </tr>";
			});
			$("#content").html(output);
		}
	});
});
