const list = document.querySelector('ul');
const listItems = list.children;
const inputBox = document.getElementById('inputTask');
const itemForm = document.getElementById('addItem');

function addTask() {
    if(inputBox.value != "") {
        let newTask = document.createElement('li');
        newTask.innerText = inputBox.value;
        list.appendChild(newTask);
        inputBox.value = "";
    } else {
        window.alert("Please enter a value into the text box.");
        inputBox.focus();
    }
}

list.addEventListener('click', function(e){
    var listItem = e.target;
    listItem.style.cssText += "text-decoration: line-through;";
    setTimeout(function(){
        listItem.remove();
    }, 1000);
});

itemForm.addEventListener('submit', function(e) {
    e.preventDefault();
    return false;
});