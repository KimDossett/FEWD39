console.log("connected");

//structure

// var button = document.querySelector("button");
// var input = document.querySelector("#new-todo-item-input");
// var addList = document.querySelector("#todo-list");

// //events

// button.addEventListener("click", addListItem());

// //event functions

// 	// // create a  function called addListItem here
//   function addListItem (){
//  //  // prompt for the to do item, make it a variable so that we can save the input
//  //  // var response= prompt ("What do you need to do today?");
//  //  // create a list item
//   var listItem = document.createElement("li");
//  //  // decorate the list li with the value from your prompt
//   listItem.textContent = input.value;
//  //  // add the response to the list by grabbing the parent and then append the new child to the parent
//   var parent = document.querySelector("#todo-list");
//   parent.appendChild(listItem);
//   };

















var form = document.querySelector("#new-todo-item-form");
var input = document.querySelector("#new-todo-item-input");
var list = document.querySelector("#todo-list");

function createItem(todo) {
  var listItem = document.createElement("li");
  listItem.textContent = todo;
  list.appendChild(listItem);
}

// another way to write function above
// function createItem(todo) {
//   var newListItem = "<li>" + todo + "</li>";
//   list.innerHTML += newListItem;
// }

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

// $form.on("submit", formSubmitted);

// function formSubmitted(event){
//   event.preventDefault();
//   var newListItem = "<li>" + $input.val() + "</li>";
//   $list.append(newListItem);
//   $form[0].reset();
// }

