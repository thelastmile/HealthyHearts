
function blogStorage(name, pw){

		var object={};

		object.name = name;
		object.password = pw;
		
		if(!localStorage.getItem('blog'))
		{
				var newArray=[];
				newArray.push(object);
				localStorage.setItem('blog',JSON.stringify(newArray));
		}
		else
		{
			var s = JSON.parse(localStorage.getItem('blog'));
			s.push(object);
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
		// reload();

 };