const searchInp = document.querySelector("#input-box")
const listPar = document.querySelector("#list-container")


function addTask(){
    if(searchInp === ''){
        alert("write something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = searchInp.value;
        listPar.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    searchInp.value = '';
    saveData()
}
listPar.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData(){
    localStorage.setItem("data", listPar.innerHTML);
}

function showTask(){
    listPar.innerHTML = localStorage.getItem("data");
}
showTask();

