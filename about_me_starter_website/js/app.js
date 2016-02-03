$(window).resize(function() {
	resizeBanner();
});

resizeBanner();

function resizeBanner() {
	$(".banner").height($(window).height());
}

var person = prompt("Please enter your name"); 
document.querySelector("h1").innerHTML = "<h1> Welcome " + person;

