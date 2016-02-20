// grab the form 
// and the input element 
// and the button


// listen for click of button
// (button.addEventListener('click', add stuff to the list));

// append it to the parent
// (adding stuff to the list)
// identify parent (ul)
// attach child (li)
// create more children (li)
// place input.value inside the newly created child element
// now append the new child+input.value onto the parent

var form = document.querySelector("#new-todo-item-form");
var input = document.querySelector("#new-todo-item-input");
var list = document.querySelector("#todo-list");

function createItem(todo) {
  var listItem = document.createElement("li");
  listItem.textContent = todo;
  list.appendChild(listItem);
}


function formSubmitted(event) {
  event.preventDefault();
  createItem(input.value);
  form.reset();
}

form.addEventListener("submit", formSubmitted);

// jQuery
// var $form = $("#new-todo-item-form");
// var $input = $("#new-todo-item-input");
// var $list = $("#todo-list");
//
// $form.on("submit", formSubmitted);
//
// function formSubmitted(event){
//   event.preventDefault();
//   var newListItem = "<li>" + $input.val() + "</li>";
//   $list.append(newListItem);
//   $form[0].reset();
// }
