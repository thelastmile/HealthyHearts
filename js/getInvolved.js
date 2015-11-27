
$(document).ready(function(){


		$("#submit").click(function(){

				$getInvolvedFirstName = $("#firstName").val();
				$getInvolvedLastName = $("#lastName").val();
				$getInvolvedEmail = $("#email").val();
				$getInvolvedCity = $("#city").val();
				$getInvolvedState = $("#state").val();
				$getInvolvedMessage = $("#message").val();

				var fullName = $getInvolvedLastName +', '+ $getInvolvedFirstName;

				thankYouMessage(fullName);

				var now = new Date();
				var getInvolvedDate = now.toDateString(); 

				registry(fullName, $getInvolvedEmail, $getInvolvedCity, $getInvolvedState, $getInvolvedMessage, getInvolvedDate);

		});		

});

function registry(name, email, city, state, message, date){

	var object = {};

	object.donorName = name;
	object.email = email;
	object.city = city;
	object.state = state;
	object.message = message;
	object.registerDate = date;

	if(!localStorage.getItem("involvedRegistry"))
	{
		var newArray = [];
		newArray.push(object);
		localStorage.setItem("involvedRegistry", JSON.stringify(newArray));
	}
	else
	{
		var s = JSON.parse(localStorage.getItem("involvedRegistry"));
		s.unshift(object);
		localStorage.setItem("involvedRegistry", JSON.stringify(s));
	}

	window.location.reload();

};

function getInvolvedList(){
	
	var involvedList = JSON.parse(localStorage.getItem("involvedRegistry"));

	for(var i = 0; i < involvedList.length; i++)
	{
		var name = involvedList[i].donorName;
		var email = involvedList[i].email;
		var city = involvedList[i].city;
		var state = involvedList[i].state;
		var registerDate = involvedList[i].registerDate;
		var message = involvedList[i].message;

		$("#getInvolveTable").append("<tr><th>" +name+ "</th><td>" +email+ "</td><td>" +city+ "</td><td>" +state+ "</td><td>" +registerDate+ "</td><td>" +message+ "</td></tr>");
	}
};
getInvolvedList();

function thankYouMessage(name){
	// $("#thanksMessage").append("<p>Thank you, <h3>" +name+ "</h3> for your donation and support</p>");
		alert("Thank you " +name+ " for registering with Healthy Heart Institute.\n\n Any programs you wish to participate or be apart of, be sure to stated in the 'registry form' message field. You will be notify through the contact information you provided.\n");

};

$("#viewRegistry").click(function(){
	$("#table").show();
	$("#hideViewRegistry").show();
	$("#viewRegistry").hide();
});

$("#hideViewRegistry").click(function(){
	$("#table").hide();
	$("#hideViewRegistry").hide();
	$("#viewRegistry").show();
})
