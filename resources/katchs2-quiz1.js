// function loadXMLDoc() {
			  // var xmlhttp;
			  // if (window.XMLHttpRequest) {
			    // xmlhttp = new XMLHttpRequest();
			  // }
			  // xmlhttp.onreadystatechange = function() {
			    // if (this.readyState == 4 && this.status == 200) {
			      // document.getElementById("p").innerHTML =
			      // this.responseText;
			    // }
			  // };
			  // xmlhttp.open("GET", "katchs2-quiz1.xml", true);
			  // xmlhttp.send();
			// }


// document.addEventListener('DOMContentLoaded', function() {
	// var clone = document.getElementsByTagName('div')[0].cloneNode(true);
	// document.body.appendChild(clone);
	// document.getElementById("site").innerHTML = loadXMLDoc(document.documentElement);
// }, false);

$(document).ready(function() {
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
	
				output += "<div class='folder'>" 
					+ "<a href='" + loc + "'>" + folderName + "</a>"
					+ "<div>" + description + "</div>"
				+ "</div>";
			});
			$("#content").html(output);
		}
	});
});
