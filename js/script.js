`use strict`

document.addEventListener("DOMContentLoaded", function(){
/**
 * RECUPERATION DES VARIABLES DU DOM
 */
    let input = document.querySelector("#list");
    let btnActive = document.querySelector("active");
    let ul = document.querySelector("ul")
    let btnComplete = document.querySelector("complete");
    let btnAll = document.querySelector("all");
    let btnClearAll = document.querySelector("clearAll");
    let tabTask = [];

    /**
     * LES FONCTIONS
     */

    function creatTask (){
        let li = document.createElement("li");
        ul.appendChild(li);
        let liTable = input.value;
        tabTask.push(liTable);
        let tableList = tabTask[tabTask.length - 1];
        li.innerHTML = "<span class='circle'></span>"
        li.innerHTML += tableList;
        li.innerHTML += "<span>x</span>";
        

        

    }   

    input.addEventListener("keydown", (e)=>{
        console.log(e.key)
        if (e.key === "Enter") {
            creatTask();
            input.value = "";
        }
    })

    function addTask () {
        
        
    }
});