selecting for things in a document object:

	document.querySelector("");

create new elements on a document object:

	document.createElement("");

On the element object, we can set the textContent
example: name of hte Element object is "listItem"
	
	listItem.textContent = "set it to something";

example: name of the Element object is "image"
set the attribute src="https:...."

	image.setAttribute("src", "http:....");

Set the attribute of listItem to class="green"

	listItem.className = "green";
	listItem.setAttribute("class", "green");
	
to append a child to a parent element
	First select the parent element
		var ul = document.querySelector("ul");
	Then append the child to the parent
		ul.appendChild(listItem);
