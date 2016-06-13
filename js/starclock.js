$(document).ready(function(){
	// Variable definitions for all the planets.
	var $sun ={
		planet: 		$('#sun')
	}
	var $secondury = {
			planet: 	$('#secondury'),
			orbit: 		$('#secondury-orbit')
	};
	var $minnus = {
			planet: 	$('#minnus'),
			orbit: 		$('#minnus-orbit')
	};
	var $hourth = {
			planet: 	$('#hourth'),
			orbit: 		$('#hourth-orbit')
	};
	/* 
	 * Applies the transformation specified in 'transformationValue' to the
	 * object specified in 'trasnformationObject' regardless of browser.
	 */
	function transform(transformationObject, transformationValue){
		transformationObject.css('-webkit-transform',transformationValue);
		transformationObject.css('-moz-transform',transformationValue);
		transformationObject.css('-ms-transform',transformationValue);
		transformationObject.css('-o-transform',transformationValue);
		transformationObject.css('-transform',transformationValue);
	}
	// Make the cursor become a hand over the footer.
	$('#footer').css('cursor','pointer');
	// Get current date and time at startup.
	var datetime = new Date();
	// Initially position all planets based on current date and time.
	transform($secondury.orbit,'rotate('+(datetime.getMilliseconds()*0.006+datetime.getSeconds()*6)+'deg)');
	transform($minnus.orbit,'rotate('+(datetime.getMilliseconds()*0.0001+datetime.getSeconds()*0.1+datetime.getMinutes()*6)+'deg)');
	transform($hourth.orbit,'rotate('+(datetime.getSeconds()*0.004+datetime.getMinutes()*0.25+datetime.getHours()*15)+'deg)');
	/* 
	 * Reposition the seconds planet based on the current date and time including milliseconds.
	 * This is done in order to achieve a smooth transition effect that looks like the planet's
	 * movement is continuous. Update time is 40 milliseconds as the framerate the human eye
	 * can perceive is about 24fps ~= 41 milliseconds. The total amount of positions that will be
	 * shown in one full cycle are 1440.
	 */
	setInterval(function(){	
    	datetime = new Date();
    	var val = (datetime.getMilliseconds()*0.006+datetime.getSeconds()*6);
    	transform($secondury.orbit,'rotate('+val+'deg)');
	},40);
	/*
	 * Based on the same logic applied to the seconds planet, reposition the minutes planet every
	 * 2 seconds to achieve a smooth transition. For the calculation minutes, seconds and milliseconds
	 * are used to make the transition smoother. The total amount of shown positions for the
	 * planet are 1800 to compensate for the larger orbit.
	 */
	setInterval(function(){
		datetime = new Date();
		var val = (datetime.getMilliseconds()*0.0001+datetime.getSeconds()*0.1+datetime.getMinutes()*6);
    	transform($minnus.orbit,'rotate('+val+'deg)');	
	},2400);
	/*
	 * Based on the above logic, the hours planet will reposition every half a minute (30 seconds),
	 * taking into account hours, minutes and seconds to make the transition smoother. In a 
	 * full cycle 2880 positions are shown to compensate for the larger orbit of the planet.
	 */
	setInterval(function(){
		datetime = new Date();
		var val = (datetime.getSeconds()*0.004+datetime.getMinutes()*0.25+datetime.getHours()*15);
    	transform($hourth.orbit,'rotate('+val+'deg)');
	},30000);
	// Open new tab/window with the project's github on footer click.
	$('#footer').click(function(){
		window.open('https://github.com/chalarangelo/starclock-js', '_blank');
	});
	// Highlight footer on hover.
	$('#footer').hover(
		function(){
			$(this).css({'color':'lightgreen','font-style':'normal'});
			$('.fa-github').removeClass('fa-github').addClass('fa-arrow-circle-down');
		},
		function(){
			$(this).css({'color':'white','font-style':'italic'});
			$('.fa-arrow-circle-down').removeClass('fa-arrow-circle-down').addClass('fa-github');
		}
	);
});