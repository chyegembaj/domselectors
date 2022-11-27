var button = document.getElementById("enter");
var input = document.getElementById("userId");
var ul = document.querySelector("ul");
var li = document.querySelector("li");

function inputLength() {
	return input.value.length;
}

function createListElement(){
	var li  = document.createElement("li");
	var button = document.createElement("button");
	button.innerHTML = "Delete"
		li.appendChild(document.createTextNode(input.value));
		
		ul.appendChild(li);
		li.appendChild(button);
		
		input.value = "";
		button.addEventListener("click", removeUlElement);

}

function removeUlElement(event) {
	event.target.parentNode.remove();
	// body...
}

function addListAfterClick(){
	if (inputLength() > 0){
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13){
		createListElement();
	}

}

function toggleUlElement(event) {
	event.target.classList.toggle("done");
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress",addListAfterKeypress);

ul.addEventListener("click", toggleUlElement);



 



