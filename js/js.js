$(document).ready(function(){
	

	//=======sidebar tag switch ========//
	$(".news").click(function(){
		$(this).addClass("active");
		$(".recruit").removeClass("active");
	});
	$(".recruit").click(function(){
		$(this).addClass("active");
		$(".news").removeClass("active");
	});
	
	$("#service-intro").hover(function(){
		
		$("header").css("height","110px");
		setTimeout(function(){
			$(".service-intro-hidden-box").show();
		},500)
		
	},function(){
		
		$("header").css("height","60px");
		$(".service-intro-hidden-box").hide();
		
	
	});


	$(".menu ul li").hover(function(){
		$(".direct-bar").show();
		$(this).addClass("nav-active");
		var left = $(this).offset().left;
		$(".direct-bar").css("left",left);
	},function(){
		$(this).removeClass("nav-active");
	});

	$(".content-nav li").hover(function(){
		$(this).children("img").css({"top":"-50px","opacity":"0"});
		$(this).children("img").next().css({"top":"0","opacity":"1"});
	},function(){
		$(this).children("img").css({"top":"0","opacity":"1"});
		$(this).children("img").next().css({"top":"50px","opacity":"0"});
	});


	$(".wz").hover(function(){
	
		$(this).css("opacity","1");
	},function(){
		$(this).css("opacity","0");
	});


});