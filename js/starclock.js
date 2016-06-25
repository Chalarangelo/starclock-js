$(document).ready(function(){
	// Variable definitions for all the planets.
	var $sun ={
		planet: 		$('#sun'),
		innertext: 		$('#sun-text .inner-text')
	}
	var $secondury = {
			planet: 	$('#secondury'),
			orbit: 		$('#secondury-orbit'),
			text: 		$('#secondury-text')
	};
	var $minnus = {
			planet: 	$('#minnus'),
			orbit: 		$('#minnus-orbit'),
			text: 		$('#minnus-text')
	};
	var $hourth = {
			planet: 	$('#hourth'),
			orbit: 		$('#hourth-orbit'),
			text: 		$('#hourth-text')
	};
	var $wekars = {
			planet: 	$('#wekars'),
			orbit: 		$('#wekars-orbit'),
			text: 		$('#wekars-text')
	};
	var $monter = {
			planet: 	$('#monter'),
			orbit: 		$('#monter-orbit'),
			text: 		$('#monter-text')
	};
	var $yeurn = {
			planet: 	$('#yeurn'),
			orbit: 		$('#yeurn-orbit'),
			text: 		$('#yeurn-text')
	};
	var $decadus = {
			planet: 	$('#decadus'),
			orbit: 		$('#decadus-orbit'),
			text: 		$('#decadus-text')
	};
	var $centune = {
			planet: 	$('#centune'),
			orbit: 		$('#centune-orbit'),
			text: 		$('#centune-text')
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
	// Pads a number to exactly two digits.
	function pad(n){ return(n<10)?("0"+n):n; }
	// Determine if the specified year is a leap year.
	function isLeapYear(y){return((y%4==0 && y%100!=0)||y%400==0);}
	// Determine the length of the specified month, also taking into account the specified year.
	function monthLength(m,y){return((m==1)?((isLeapYear(y)?29:28)):((m==3||m==5||m==8||m==10)?30:31));}
	// Get current date and time at startup.
	var datetime = new Date();
	// Initially position all planets based on current date and time.
	transform($secondury.orbit,'rotate('+(datetime.getMilliseconds()*0.006+datetime.getSeconds()*6)+'deg)');
	transform($secondury.text,'rotate(-'+(datetime.getMilliseconds()*0.006+datetime.getSeconds()*6)+'deg)');
	transform($minnus.orbit,'rotate('+(datetime.getMilliseconds()*0.0001+datetime.getSeconds()*0.1+datetime.getMinutes()*6)+'deg)');
	transform($minnus.text,'rotate(-'+(datetime.getMilliseconds()*0.0001+datetime.getSeconds()*0.1+datetime.getMinutes()*6)+'deg)');
	transform($hourth.orbit,'rotate('+(datetime.getSeconds()*0.004+datetime.getMinutes()*0.25+datetime.getHours()*15)+'deg)');
	transform($hourth.text,'rotate(-'+(datetime.getSeconds()*0.004+datetime.getMinutes()*0.25+datetime.getHours()*15)+'deg)');
	transform($wekars.orbit,'rotate('+(datetime.getMinutes()*0.035+datetime.getHours()*2.125+datetime.getDay()*51)+'deg)');
	transform($wekars.text,'rotate(-'+(datetime.getMinutes()*0.035+datetime.getHours()*2.125+datetime.getDay()*51)+'deg)');
	var monthDegrees = Math.floor(360/monthLength(datetime.getMonth(),datetime.getFullYear())*100)/100;
	var hoursDegrees = Math.floor(monthDegrees/24*100)/100;
	var minutesDegrees = Math.floor(hoursDegrees/60*100)/100;	
    transform($monter.orbit,'rotate('+(datetime.getMinutes()*minutesDegrees+datetime.getHours()*hoursDegrees+(datetime.getDate()-1)*monthDegrees)+'deg)');
	transform($monter.text,'rotate(-'+(datetime.getMinutes()*minutesDegrees+datetime.getHours()*hoursDegrees+(datetime.getDate()-1)*monthDegrees)+'deg)');
	var yearDegrees = Math.floor(30/monthLength(datetime.getMonth(),datetime.getFullYear())*100)/100;
	transform($yeurn.orbit,'rotate('+(datetime.getHours()*0.04+(datetime.getDate()-1)*yearDegrees+datetime.getMonth()*30)+'deg)');
	transform($yeurn.text,'rotate(-'+(datetime.getHours()*0.04+(datetime.getDate()-1)*yearDegrees+datetime.getMonth()*30)+'deg)');
	transform($decadus.orbit,'rotate('+((datetime.getDate()-1)*0.1+datetime.getMonth()*3+datetime.getFullYear()%10*36)+'deg)');
	transform($decadus.text,'rotate(-'+((datetime.getDate()-1)*0.1+datetime.getMonth()*3+datetime.getFullYear()%10*36)+'deg)');
	transform($centune.orbit,'rotate('+(datetime.getMonth()*0.03+datetime.getFullYear()%100*3.6)+'deg)');
	transform($centune.text,'rotate(-'+(datetime.getMonth()*0.03+datetime.getFullYear()%100*3.6)+'deg)');
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
    	transform($secondury.text,'rotate(-'+val+'deg)');
    	// Also update the clock at the top of the screen.
    	var dayName;
    	switch(datetime.getDay()){
            case 0: 	dayName = "Sun";		break;
            case 1: 	dayName = "Mon";		break;
            case 2: 	dayName = "Tue";		break;
            case 3: 	dayName = "Wed";		break;
            case 4: 	dayName = "Thu";		break;
            case 5: 	dayName = "Fri";		break;
            case 6: 	dayName = "Sat";		break;
        }
        var monthName;
        switch(datetime.getMonth()){
            case 0: 	monthName = "Jan";		break;
            case 1: 	monthName = "Feb";		break;
            case 2: 	monthName = "Mar";		break;
            case 3: 	monthName = "Apr";		break;
            case 4: 	monthName = "May";		break;
            case 5: 	monthName = "Jun";		break;
            case 6: 	monthName = "Jul";		break;
            case 7: 	monthName = "Aug";		break;
            case 8: 	monthName = "Sep";		break;
            case 9: 	monthName = "Oct";		break;
            case 10: 	monthName = "Nov";		break;
            case 11: 	monthName = "Dec";		break;
        }
    	$sun.innertext.text(   pad(datetime.getHours()) 		+ ":"  
    						+ pad(datetime.getMinutes()) 	+ ":" 
                			+ pad(datetime.getSeconds()) 	+ " | "
                			+ dayName						+ ", "
                			+ monthName						+ " "
                			+ pad(datetime.getDate())		+ ", "
                			+ datetime.getFullYear()
                	  	   );
    	// Also update text for all planets.  	
    	$secondury.text.text(pad(datetime.getSeconds()));
    	$minnus.text.text(pad(datetime.getMinutes()));
    	$hourth.text.text(pad(datetime.getHours()));
    	$wekars.text.text(dayName);
    	$monter.text.text(pad(datetime.getDate()));
    	$yeurn.text.text(monthName);
    	$decadus.text.text(datetime.getFullYear().toString().substr(2,2));
    	$centune.text.text(datetime.getFullYear().toString().substr(0,2));

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
    	transform($minnus.text,'rotate(-'+val+'deg)');	
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
    	transform($hourth.text,'rotate(-'+val+'deg)');
	},30000);
	/*
	 * Based on the above logic, the days of the week planet will reposition every one minute 
	 * (60 seconds), taking into account days, hours and minutesto make the transition smoother. 
	 * In a full cycle 10080 positions are shown to compensate for the large orbit of the planet.
	 */
	setInterval(function(){
		datetime = new Date();
		var val = (datetime.getMinutes()*0.035+datetime.getHours()*2.125+datetime.getDay()*51);
    	transform($wekars.orbit,'rotate('+val+'deg)');
    	transform($wekars.text,'rotate(-'+val+'deg)');
	},60000);
	/*
	 * The months planet is one of the trickier parts in terms of logic, as months' durations in
	 * days range between 28 and 31 days. Thus after figuring out the month's length, the proper
	 * amount of degrees is calculated so that it can be later on used in the transitioning logic.
	 * The transition takes into account minutes, hours and the current date. Update time is
	 * 2 minutes (120 seconds) as the process is a bit on the heavier side in terms of math, so 
	 * that if any lag appears, it is not too often. In a full cycle, about 21600 positions are
	 * shown to compensate for the planet's and orbit's size. Note that there might be a delay
	 * of up to 2 minutes in date changes.
	 */
	setInterval(function(){
		datetime = new Date();
		monthDegrees = Math.floor(360/monthLength(datetime.getMonth,datetime.getFullYear)*100)/100;
		hoursDegrees = Math.floor(monthDegrees/24*100)/100;
		minutesDegrees = Math.floor(hoursDegrees/60*100)/100;	
		var val = (datetime.getMinutes()*minutesDegrees+datetime.getHours()*hoursDegrees+(datetime.getDate()-1)*monthDegrees);
    	transform($monter.orbit,'rotate('+val+'deg)');
    	transform($monter.text,'rotate(-'+val+'deg)');
	},120000);
	/*
	 * The years planet follows the above logic, assigning a set amount of degrees per month,
	 * but determining the degrees assigned to each day within the month based on the month's
	 * length. Hours are not calculated dynamically as their degree multiplier will vary
	 * between 0.044 and 0.040, meaning for all intents and purposes, they can be 0.04 degrees
	 * each. Hours, month days and months taken into account, a total of 262800 positions are
	 * shown to compensate for the larger orbit and the update time is 5 minutes (300 seconds).
	 */
	setInterval(function(){
		datetime = new Date();
		yearDegrees = Math.floor(30/monthLength(datetime.getMonth,datetime.getFullYear)*100)/100;
		var val = (datetime.getHours()*0.04+(datetime.getDate()-1)*yearDegrees+datetime.getMonth()*30);
    	transform($yeurn.orbit,'rotate('+val+'deg)');
    	transform($yeurn.text,'rotate(-'+val+'deg)');
	},300000);
	/*
	 * Using the usual logic, the decades planet utilises the date, months and years mod 10
	 * to determine its position and have a smooth transition effect, updating once every
	 * 10 minutes (600 seconds) for a total of 525600 positions in a full cycle.
	 */
	setInterval(function(){
		datetime = new Date();
		var val = ((datetime.getDate()-1)*0.1+datetime.getMonth()*3+datetime.getFullYear()%10*36);
    	transform($decadus.orbit,'rotate('+val+'deg)');
    	transform($decadus.text,'rotate(-'+val+'deg)');
	},600000);
	/*
	 * Based on the same logic, the centuries planet will reposition every 15 minutes
	 * (900 seconds) to achieve a smooth transition effect, taking into account the
	 * month and year. A total of 3456000 positions will be shown in a full cycle.
	 */
	setInterval(function(){
		datetime = new Date();
		var val = (datetime.getMonth()*0.03+datetime.getFullYear()%100*3.6);
    	transform($centune.orbit,'rotate('+val+'deg)');
    	transform($centune.text,'rotate(-'+val+'deg)');
	},900000);
	// Open new tab/window with the project's github on footer click.
	$('#footer').click(function(){
		window.open('https://github.com/chalarangelo/starclock-js', '_blank');
	});
	// Highlight footer on hover.
	$('#footer').hover(
		function(){
			$('.fa-github').removeClass('fa-github').addClass('fa-arrow-circle-down');
		},
		function(){
			$('.fa-arrow-circle-down').removeClass('fa-arrow-circle-down').addClass('fa-github');
		});
	/*
	 * When the show-hide icon is clicked, the text that displays on top of the
	 * planets will toggle on/off, hidding or appearing as it should.
	 */
	$('.fa-toggle-off, .fa-toggle-on').click(function(){
		$(this).toggleClass('fa-toggle-off').toggleClass('fa-toggle-on');
		$secondury.text.toggleClass('hidden');
		$minnus.text.toggleClass('hidden');
		$hourth.text.toggleClass('hidden');
		$wekars.text.toggleClass('hidden');
		$monter.text.toggleClass('hidden');
		$yeurn.text.toggleClass('hidden');
		$decadus.text.toggleClass('hidden');
		$centune.text.toggleClass('hidden');
	});	
});