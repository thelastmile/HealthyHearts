
$(document).ready(function(){


		$("#submitInvolved").click(function(){

				$getInvolvedName = $("#name").val();
				$getInvolvedEmail = $("#email").val();
				$getInvolvedCity = $("#city").val();
				$getInvolvedState = $("#state").val();
				$getInvolvedMessage = $("#message").val();

				var now = new Date();
				var getInvolvedDate = now.toDateString(); 

				getInvolvedRegistry($getInvolvedName, $getInvolvedEmail, $getInvolvedCity, $getInvolvedState, $getInvolvedMessage, getInvolvedDate);

		});	

		$("#submitDonate").click(function(){

				$donorName = $("#name").val();
				$donorEmail = $("#email").val();
				$donorOrg = $("#organization").val();
				$donorAmount = $("#amount").val();
				$donorMessage = $("#message").val();

				var now = new Date();
				var registDate = now.toDateString(); 

				var donateAmount = $donorAmount.split("").reverse();
				donateAmount.splice(3,0,",").reverse().join("");


				registry($donorName, $donorEmail, $donorOrg, $donorAmount, $donorMessage, registDate);

		});

		$( "#video1" ).click(function() {
		  $( ".cv1" )
		    .animate({
		      width: "90%"
		    }, {
		      queue: false,
		      duration: 3000
		    })
		    .animate({ fontSize: "24px" }, 1500 )
		    .animate({ borderRightWidth: "15px" }, 1500 );
		});
			

});

function getInvolvedRegistry(name, email, city, state, message, date){

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

		$("#donorTable").append("<tr><th>" +name+ "</th><td>" +email+ "</td><td>" +city+ "</td><td>" +state+ "</td><td>" +registerDate+ "</td><td>" +message+ "</td></tr>");
	}
};
getInvolvedList();

function registry(name, email, org, amount, message, date){

	var object = {};

	object.donorName = name;
	object.email = email;
	object.organization = org;
	object.amount = amount;
	object.message = message;
	object.registerDate = date;

	if(!localStorage.getItem("donorRegistry"))
	{
		var newArray = [];
		newArray.push(object);
		localStorage.setItem("donorRegistry", JSON.stringify(newArray));
	}
	else
	{
		var s = JSON.parse(localStorage.getItem("donorRegistry"));
		s.unshift(object);
		localStorage.setItem("donorRegistry", JSON.stringify(s));
	}

	window.location.reload();

};

function listOfDonor(){
	
	var donorList = JSON.parse(localStorage.getItem("donorRegistry"));

	for(var i = 0; i < donorList.length; i++)
	{
		var name = donorList[i].donorName;
		var organization = donorList[i].organization;
		var email = donorList[i].email;
		var amount = donorList[i].amount;
		var registerDate = donorList[i].registerDate;

		$("#donorTable").append("<tr><th>" +name+ "</th><td>" +organization+ "</td><td>" +email+ "</td><td>" +registerDate+ "</td><td class='money'>$" +amount+ "</tr>");
	}
};
listOfDonor();


