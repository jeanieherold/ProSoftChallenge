/* 
Prosoft Calendar Challenge
author: Jeanie Herold
date: 2/11/2018
Challenge:
Create a calendar from user input according to the guidelines provided in document.
I wont finish this in 2.5 hours but I want to create the calendar - just to do it. 
*/

//Create a calendar object when submit is clicked
$('.btn-submit').click(function() {
	$('.calTemplate').show();
	var make = new Calendar('test', 10, 'US');
	make.showCalendar();
	$('#results').html(calendarTemplate);
	return false;
});

//Calendar object

var Calendar = function(startdate, numdays, countrycode) {
	this.startdate = startdate;
	this.numdays = numdays;
	this.countrycode = countrycode;
}

Calendar.prototype.showCalendar = function() {
	console.log('show calendar');
	calendarTemplate(10);
};

function calendarTemplate(numdays) {
	var template = "";
	var calendarHTML = "";

	return calendarHTML;

}
