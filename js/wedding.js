var DateTime = luxon.DateTime;
var untilDate = DateTime.fromISO('2024-04-20T13:00');




$(document).ready(function(){

    if (location.hash == '#rsvp') {
		$('#rsvp').empty();
		$('#rsvp').prepend("<p class='thanks'>We've received your RSVP. Thank you!<br>We look forward to seeing you!</p>");
	}

	var time = untilDate.diff(DateTime.now(), ['days', 'hours', 'minutes', 'seconds', 'milliseconds']).toObject();
	if (time.seconds > -1) { // if time is not negative
	
		if (time.days > 0) { $('.title-intro-bottom').append('<span id="days-left"></span>'); } // if there is at least 1 day
		if (time.days == 1) { $('#days-left').text(time.days + ' Day'); } else { $('#days-left').text(time.days + ' Days'); }
		$('.title-intro-bottom').append('<span id="time-left"></span>');
		
		if (time.hours < 10) { time.hours = '0' + time.hours; }
		if (time.minutes < 10) { time.minutes = '0' + time.minutes; }
		if (time.seconds < 10) { time.seconds = '0' + time.seconds; }
		$('#time-left').text(time.hours + ':' + time.minutes + ':' + time.seconds);
		setInterval(countdown, 1000);
	}

});


var countdown = function(){
	var time = untilDate.diff(DateTime.now(), ['days', 'hours', 'minutes', 'seconds', 'milliseconds']).toObject();
	
	if (time.seconds > -1) {
		if (time.hours < 10) { time.hours = '0' + time.hours; }
		if (time.minutes < 10) { time.minutes = '0' + time.minutes; }
		if (time.seconds < 10) { time.seconds = '0' + time.seconds; }
		$('#time-left').text(time.hours + ':' + time.minutes + ':' + time.seconds);
	}
}