

//////////////////////////////////////////////
//	log the user name onto the page
//

var listOfAuth = [{"userName": "lastmile","password": "code7370","userPic":"images/chris.png"}];

// var listOfAuth = [{"userName": "lastmile","password": "code7370","userPic":"t.png"},
// 									{"userName": "charlie","password": "thao","userPic":"DUP02175.JPG"}	
// 								 ];		

for(var i = 0; i < listOfAuth.length; i++)
{
	var author = listOfAuth[i];
	
}				

//////////////////////////////////////////////////////////////////////////////////////////
//	This function validate the user who is going to blog
$(document).ready(function(e){

	$("#loginSubmit").click(function(){
			$userName = $("#inputName").val();
			$passWord = $("#inputPassword1").val();

			// var userName = "lastmile";
			// var passWord = "code7370";

			for(var i = 0; i < listOfAuth.length; i++)
			{
				var author = listOfAuth[i];
				console.log(author.userName +" "+ author.password);
	
				if(author.userName === $userName && author.password === $passWord)
				{
					// $(".adjust").animate({opacity:0.25,
					// 											top:"+=350",
					// 											});
					$(".adjust").animate({top:"+=350"});

					$(".blogDiv").show();

					 mainUser($userName, $passWord);

					$("div.userName").append("<p class='greeting'>Welcome " +$userName+ "</p>");	
				}
				else	
				{
					alert("Incorrect user-name and/or pass-word");
							
					break;
				}				
			}	
		});

});

/*Storing the user name and pass-word in local storage*/
function mainUser(name, pw){

		var object={};

		object.name = name;
		object.password = pw;
		
		if(!localStorage.getItem('user'))
		{
				var newArray=[];
				newArray.push(object);
				localStorage.setItem('user',JSON.stringify(newArray));
		}
		else
		{
			var s = JSON.parse(localStorage.getItem('user'));
			$(".blogDiv").show();
			localStorage.setItem('user',JSON.stringify(s));
		}

 };

var uploadPic = function(topic, blog, date) {
	var url = $('input:file').val();	//url = "C:\fakepath\logo.png"
	var urlArray = url.split("\\");
	urlPath = "images/" + urlArray[2];
	path = urlPath;

	blogStorage(topic, blog, date, path);

}


//////////////////////////////////////////////////////////////////
//	This function create the element to be append onto the page
//
var path;
function blogPost(){
	$topic = $("#subject").val();
	$newText = $("#blogEntry").val();
	var now = new Date();

	uploadPic($topic, $newText, now);

};


///////////////////////////////////////////////////////////
//	This function store the blog into local storage
//

function blogStorage(topic,text,date,path){

		var object={};

		object.subject=topic;
		object.post=text;
		object.date=date;
		object.path=path;
		
		if(!localStorage.getItem('blog'))
		{
				var newArray=[];
				newArray.push(object);
				localStorage.setItem('blog',JSON.stringify(newArray));
		}
		else
		{
			var s = JSON.parse(localStorage.getItem('blog'));
			s.unshift(object);
			localStorage.setItem('blog',JSON.stringify(s));

		}

		var objLength=JSON.parse(localStorage.getItem('blog'));
		if(objLength>1)
		{
			for (var i = 0; i < objLength.length; i++)
		  {				
				var c=JSON.parse(localStorage.getItem('blog')[i]);
				console.log(c + '\n\n');
			}
		}

		window.location.reload();

 };


//////////////////////////////////////////////////////////////////////
//	This function display the content in local storage back onto the    
//  page when the user reload the page.
//

function showBlogEntries(){
		
	 		console.log("show blog entries!");

	 		var entries = JSON.parse(localStorage.getItem('blog'));
	 		var userName = JSON.parse(localStorage.getItem('user'));

	 		for(var i=0; i < entries.length; i++)
	 		{
			 		var ul= document.getElementById('blogPost');

					var li = document.createElement('li');
					li.className = 'hello';
					var topic = entries[i].subject;
					var dateText = entries[i].date;
					var newText = entries[i].post;
					var addPic = entries[i].path;

					if(addPic === "images/undefined")
					{
						$("#blogPost").append("<li class='hello'> <img src='" +author.userPic+ "' id='authorPic'><span><h4 id='authorName'> " +author.userName+ "</h4></span><h4 id='topic'>Subject:  " +topic+ "</h4><h4 id='datePosted'>Posted:  " +dateText+ "</h4><button class='viewBlog'>View Blog</button><div class='showClick'>"+ "\n<p class='md-font black'>" +newText+ "</p></li>");							
					}
					else
					{
						$("#blogPost").append("<li class='hello '> <img src='" +author.userPic+ "' id='authorPic'><span><h4 id='authorName'> " +author.userName+ "</h4></span><h4 id='topic'>Subject:  " +topic+ "</h4><h4 id='datePosted'>Posted:  " +dateText+ "</h4><button class='viewBlog'>View Blog</button><div class='showClick'><img src='" +addPic+ "'id='uploadPic'/>"+ "\n<p class='md-font black'>" +newText+ "</p></li>");	
					}
	 		}
 }
showBlogEntries();

$(document).ready(function(){
	$btn = $(".viewBlog");
	$btn.on('click',function(e){
		var t=$(this).next("div");
		t.show();
		console.log(t);
		// $(".showClick").show();
		// console.log($(this).text());
	});
});


