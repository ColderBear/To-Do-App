
const inputBox = document.getElementById('input-box');
const listContainer  = document.getElementById('list-container');

function addTask () {
    if(inputBox.value === ''){
        alert("Please add a task !!!");
        /* if the input box is empty display the above text */
    }
    else{
        let li = document.createElement("li");/*creating a list */
        li.innerHTML = inputBox.value;/* adding the text from the input field into the new list */
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        
        let edit = document.createElement("BUTTON");/*create edit button */
        edit.id = "edit";
        edit.innerHTML = 'edit';
        li.appendChild(edit);
    }
    inputBox.value = ''; /*clear the input filed after adding the task */
    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if (e.target.tagName ==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.innerText === 'edit'){
        e.target.parentElement.removeAttribute("readonly");
        e.target.parentElement.focus();
    }
}, false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML) /* safe data in the browser */
}

// function showList(){
//     listContainer.innerHTML = localStorage.getItem("data");
// }
// showList();

