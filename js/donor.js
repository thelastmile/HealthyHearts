
$(document).ready(function(){


		$("#submit").click(function(){

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

});

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