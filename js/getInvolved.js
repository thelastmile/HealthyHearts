
$(document).ready(function(){

		$("#submit").click(function(){

				$getInvolvedFirstName = $("#firstName").val();
				$getInvolvedLastName = $("#lastName").val();
				$getInvolvedEmail = $("#email").val();
				$getInvolvedCity = $("#city").val();
				$getInvolvedState = $("#state").val();
				$getInvolvedMessage = $("#message").val();

				$("#registionForm").hide();

				var fullName = $getInvolvedLastName +', '+ $getInvolvedFirstName;

				var name = $getInvolvedFirstName +' '+ $getInvolvedLastName;

				var now = new Date();
				var getInvolvedDate = now.toDateString(); 

				registry(fullName, $getInvolvedEmail, $getInvolvedCity, $getInvolvedState, $getInvolvedMessage, getInvolvedDate);
			
				thankYouMessage(name);
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
	// window.location.reload();
};

function getInvolvedList(){
	console.log("you're in the local storage");
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

		$("#registeredName").html(name);

		$("#registrationForm").hide();
		$("#thanksMessage").show();

		$("#viewRegistry").click(function(){
				$("#registryTable").show();
				$("#viewRegistry").hide();
				$("#hideViewRegistry").show();				
		});

		$("#hideViewRegistry").click(function(){
			$("#registryTable").hide();
			$("#hideViewRegistry").hide();
			$("#viewRegistry").show();
		});	

};

$("#close").on("click",function(){
		window.location.reload();
});

