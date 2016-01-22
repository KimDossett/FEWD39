// Homework Part 1

for (var i=0; i<21; i++) {
	if (i%2 === 0) {
		console.log (i + " " + "is even");
	} else {
		console.log (i + " " + "is odd");
	}
}



// Homework Part 2

var a = prompt ("Enter a number");
var b = prompt ("Enter another number");

var arguement = function max (a,b) {
	if (a>b) {
		alert(a + " " + "is the larger number");
	}
	else {
		alert(b + " " + "is the larger number");
	}
}

arguement(a,b);

// Homework Part 2/2

var a = prompt ("Enter a number");
var b = prompt ("Enter another number");
var c = prompt ("Enter one more number");

var arguement = function max (a,b,c) {
	if (a>b && a>c) {
		alert(a + " " + "is the first number you entered and is the larger number");
	}
	else if (b>a && b>c) {
		alert(b + " " + "is the second number you entered and is the larger number");
	}
	else if (c>a && c>b) {
		alert(c + " " + "is the third number you entered and is the largest number")
	}
}
arguement(a,b,c);


