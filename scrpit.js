const inputbox = document.getElementById("input");
const listContainer= document.getElementById("list-container"); 

function addTask(){
    if(inputbox.value === ''){
        alert("you must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.append(li);// this li will be display in list-container.
        let sapn = document.createElement("span");
        sapn.innerHTML = "\u00d7";//this above to line is used to add cross icon this "\u00d7" is the code of cross icon.
        li.appendChild(sapn);
    }
    inputbox.value = "";// to show after adding element box will be empty.
    saveData();// when ever we enter data it will save the data in a browser.
}

listContainer.addEventListener("click", function(element){
    //if we click target elemet li then it checked the box
    if(element.target.tagName === "LI"){
        element.target.classList.toggle("checked");
        saveData();
    }
    //if we click the span element it will remove the element.
    else if(element.target.tagName === "SPAN"){
        element.target.parentElement.remove();
        saveData();
    }
}, false);

//to store our task 
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();