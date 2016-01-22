var response=prompt("What is your best marathon time");


if (response > 4 && response <= 5) {
	alert("Your time is average");
} else if (response > 2 && response <=4) {
	alert("Your time was excellent");
} else if (response > 5) {
	alert("Speed up!");
} else {
	alert("please enter a correct time");
}




// var x=5
// if (x>3) {
// 	alert("true");
// } else if (x<3) {
// 	alert("false")
// } else {
// 	alert ("value equal")
// };

// // If their time was between 4 to 5 hours, alert the user that their time was average.
// if the time was between 2 to 4 hours, alert the user that their time was excellent.
// // If the time was greater than 5 hours, alert the user that they need to speed up!