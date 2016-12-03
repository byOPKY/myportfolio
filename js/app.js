$(document).ready(function(){

	$("#datos").slideDown(3000).slideUp(3000);
	setTimeout(function(){
		$("#about").slideDown(4000);
		$("#hability").slideDown(6000);
		$("#galary").slideDown(6000);
		$("#works").slideDown(7000);
		$("#contact").slideDown(8000);
		$("#footer").slideDown(9000);
	},6000);


	$(window).scroll(function(){
	  var windowWidth = $(this).width();
	  var windowHeight = $(this).height();
	  var windowScrollTop = $(this).scrollTop();

	  	
	  	if(windowWidth>849){
		    if(windowScrollTop>500){
		       secondAnimation();
		    }
		    if(windowScrollTop>80){
		       thirdAnimation()
		    }
		    if(windowScrollTop>1050){
		       fourthAnimation()
		    }
		    if(windowScrollTop>1450){
		       firstAnimation()
		    }
		}
		if(windowWidth<=849){
			 if(windowScrollTop>50){
		       thirdAnimation()
		    }
		    if(windowScrollTop>550){
		       secondAnimation();
		    }
		    if(windowScrollTop>1350){
		       fourthAnimation();
		    }
		    if(windowScrollTop>3350){
		       firstAnimation();
		    }
		}
	    if(windowWidth<=549){
		    if(windowScrollTop>100){
	       		thirdAnimation();
	    	}
	    	if(windowScrollTop>2050){
		       secondAnimation();
		    }
	    	if(windowScrollTop>2950) {
		    	fourthAnimation();
		    }
		    if(windowScrollTop>2200){
		       firstAnimation();
		    }
		}
	});
});


var firstAnimation = function(){			
    $("#works .card:eq(0)").delay(1000).animate({opacity:1},"slow");
    $("#works .card:eq(1)").delay(2000).animate({opacity:1},"slow");
    $("#works .card:eq(2)").delay(3000).animate({opacity:1},"slow");
    $("#works .card:eq(3)").delay(4000).animate({opacity:1},"slow");
    $("#works .card:eq(4)").delay(5000).animate({opacity:1},"slow");
    $("#works .card:eq(5)").delay(6000).animate({opacity:1},"slow");
    $("#works .card:eq(6)").delay(7000).animate({opacity:1},"slow");
    $("#works .card:eq(7)").delay(8000).animate({opacity:1},"slow");
    $("#works .card:eq(8)").delay(9000).animate({opacity:1},"slow");
	}
	
var secondAnimation = function(){
	$("#hability .circle:eq(0)").delay(1000).animate({opacity:1, left:0},"slow");
	$("#hability .circle:eq(1)").delay(2000).animate({opacity:1, left:0},"slow");
	$("#hability .circle:eq(2)").delay(3000).animate({opacity:1, left:0},"slow");
	$("#hability .circle:eq(3)").delay(4000).animate({opacity:1, left:0},"slow");
	$("#hability .circle:eq(4)").delay(5000).animate({opacity:1, left:0},"slow");
	$("#hability .circle:eq(5)").delay(6000).animate({opacity:1, left:0},"slow");
	$("#hability span:eq(0)").delay(1000).animate({opacity:1, left:0},"slow");
	$("#hability span:eq(1)").delay(2000).animate({opacity:1, left:0},"slow");
	$("#hability span:eq(2)").delay(3000).animate({opacity:1, left:0},"slow");
	$("#hability span:eq(3)").delay(4000).animate({opacity:1, left:0},"slow");
	$("#hability span:eq(4)").delay(5000).animate({opacity:1, left:0},"slow");
	$("#hability span:eq(5)").delay(6000).animate({opacity:1, left:0},"slow");
	}

var thirdAnimation = function(){
	$("#about .circle:eq(0)").delay(1000).animate({opacity:1, left:0},"slow");
	$("#about .circle:eq(1)").delay(2000).animate({opacity:1, left:0},"slow");
	$("#about .circle:eq(2)").delay(3000).animate({opacity:1, left:0},"slow");
	$("#about span:eq(0)").delay(1000).animate({opacity:1, left:0},"slow");
	$("#about span:eq(1)").delay(2000).animate({opacity:1, left:0},"slow");
	$("#about span:eq(2)").delay(3000).animate({opacity:1, left:0},"slow");
	}

var fourthAnimation = function(){
	$("#galary img:eq(0)").delay(500).animate({opacity:1},"slow");
	$("#galary img:eq(1)").delay(1000).animate({opacity:1},"slow");
	$("#galary img:eq(2)").delay(1500).animate({opacity:1},"slow");
	$("#galary img:eq(3)").delay(2000).animate({opacity:1},"slow");
	$("#galary img:eq(4)").delay(500).animate({opacity:1},"slow");
	$("#galary img:eq(5)").delay(3000).animate({opacity:1},"slow");
	$("#galary img:eq(6)").delay(1500).animate({opacity:1},"slow");
	$("#galary img:eq(7)").delay(4000).animate({opacity:1},"slow");
	$("#galary img:eq(9)").delay(4500).animate({opacity:1},"slow");
	$("#galary img:eq(10)").delay(2000).animate({opacity:1},"slow");
	$("#galary img:eq(11)").delay(1500).animate({opacity:1},"slow");
	$("#galary img:eq(12)").delay(4000).animate({opacity:1},"slow");
}

