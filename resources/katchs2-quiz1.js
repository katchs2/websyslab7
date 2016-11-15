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
	
				output += "<div class='folder'><tr>" 
					+ "<td><a href='" + loc + "'>" 
					+	folderName + "</a> </td>"
					+ "<td><span class= 'bg-primary'>" + description + "</span></td>"
				+ "</div> </tr>";
			});
			$("#content").html(output);
		}
	});
});
