
$(document).ready(function(){
	
		$(".p1").on("click",function(){
			$("#videoP").hide();
			$("#video2").hide();
			$("#video3").hide();
			$("#video1").show();
		});
		$(".p2").on("click",function(){
			$("#videoP").hide();
			$("#video1").hide();
			$("#video3").hide();
			$("#video2").show();
		})
		$(".p3").on("click",function(){
			$("#videoP").hide();
			$("#video1").hide();
			$("#video2").hide();
			$("#video3").show();
		})

});







