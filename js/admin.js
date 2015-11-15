

//////////////////////////////////////////////
//	log the user name onto the page
//

// var listOfAuth = [{"userName": "lastmile","password": "code7370","userPic":"t.png"}];

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

			var userName = "lastmile";
			var passWord = "code7370";

			for(var i = 0; i < listOfAuth.length; i++)
			{
				var author = listOfAuth[i];
				console.log(author.userName +" "+ author.password);
	
				if(author.userName === $userName && author.password === $passWord)
				{
					$(".homeBackground").remove();
					$(".linkAdmin").show();


					 mainUser($userName, $passWord);

					$("div.userName").append("<h3 class='greeting'>Welcome " +$userName+ "</h3>");	
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
		window.location.reload();
 };

var uploadPic = function(blog, date) {
	var url = $('input:file').val();	//url = "C:\fakepath\logo.png"
	var urlArray = url.split("\\");
	urlPath = "images/" + urlArray[2];
	path = urlPath;

	blogStorage(blog, date, path);

}


//////////////////////////////////////////////////////////////////
//	This function create the element to be append onto the page
//
var path;
function blogPost(){
	$newText = $("#blogEntry").val();
	var now = new Date();

	uploadPic($newText, now);

};


///////////////////////////////////////////////////////////
//	This function store the blog into local storage
//

function blogStorage(text,date,path){

		var object={};

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
					var dateText = entries[i].date;
					var newText = entries[i].post;
					var addPic = entries[i].path;

					if(addPic === undefined)
					{
						$("#blogPost").append("<li class='hello'> <img src='" +author.userPic+ "' id='authorPic'><span><h4 id='authorName'> " +author.userName+ "</h4></span><h4 id='datePosted'>Posted:  " +dateText+ "</h4>"+ "\n" +newText+ "</li>");							
					}
					else
					{
						$("#blogPost").append("<li class='hello'> <img src='" +author.userPic+ "' id='authorPic'><span><h4 id='authorName'> " +author.userName+ "</h4></span><h4 id='datePosted'>Posted:  " +dateText+ "</h4>"+ "\n" +newText+ "<br/><img src='" +addPic+ "'id='uploadPic'/></li>");	
					}
	 		}
	 		console.log(path);
 }
showBlogEntries();

$("uploadPic").click(function(){
	this.css
})



