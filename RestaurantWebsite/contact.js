function validateItems() {
    var name = document.forms["contactForm"]["name"].value;
	var email = document.forms["contactForm"]["email"].value;
	var phone = document.forms["contactForm"]["phone"].value;
	var reason = document.forms["contactForm"]["contact"].value;
	var info = document.forms["contactForm"]["info"].value;
	var questionnaire = document.forms["contactForm"]["questionnaire"].value;
	var day = document.querySelectorAll("input[type=checkbox]:checked")

	//note that addition info is not required, so this will not check if it is filled out.
    if (name == "") {
        alert("You must enter a name.");
        document.forms["contactForm"]["name"]
           .parentElement.className = "form-group has-error";
        document.forms["contactForm"]["name"].focus();
        return false;
    }
	if (email == "") {
        alert("You must enter an email address.");
        document.forms["contactForm"]["email"]
           .parentElement.className = "form-group has-error";
        document.forms["contactForm"]["email"].focus();
        return false;
    }
	if (phone == "") {
        alert("You must enter a phone number.");
        document.forms["contactForm"]["phone"]
           .parentElement.className = "form-group has-error";
        document.forms["contactForm"]["phone"].focus();
        return false;
    }
	if (reason == "") {
        alert("You must enter your reason for inquiry.");
        document.forms["contactForm"]["reason"]
           .parentElement.className = "form-group has-error";
        document.forms["contactForm"]["reason"].focus();
        return false;
    }
	if (questionnaire == "") {
        alert("You must fill out the questionnaire.");
        document.forms["contactForm"]["questionnaire"]
           .parentElement.className = "form-group has-error";
        document.forms["contactForm"]["questionnaire"].focus();
        return false;
    }
	
	if (day.length==0) {
        alert("You must enter a day/s you are available.");
        return false;
    }
	
	alert("Information is valid. Thank you!");
   return false;
}