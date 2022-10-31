$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("We have received your mail, We will get back to you soon!");/*What your website show after it successful message*/
			$("#form").trigger("reset");
		});
		return false;
	});
	
});