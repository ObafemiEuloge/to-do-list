`use strict`

document.addEventListener("DOMContentLoaded", () => {
    let input = document.getElementById("list");


    class List {
        // constructor (element){
        //     this.element = element;

        // }

        enterElement() {
            document.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    let element = document.createElement("li");
                    element.classList.add("element");
                    document.querySelector("main > ul").appendChild(element);
                    element.innerHTML = '<button class="checkbox">&#10004;</button>';
                    element.innerHTML += `<p class ="valeur">${input.value}</p>`;
                    element.innerHTML += '<span class="removeElement">&#10006</span>';
                    input.value = "";
                    input.innerHTML = input.value;
                    // tabList.push(element);                

                    let span = document.querySelectorAll(".element span.removeElement");
                        console.log(span.parentElement);
                        for (let i = 0; i < span.length; i++) {
                            span[i].addEventListener("click", function() {
                                let removes = this.parentElement;
                                // console.log(removes);
                                removes.remove();
                            });
                        }
                        let checkbox = document.querySelectorAll("button.checkbox");
                        for (let j = 0; j < checkbox.length; j++) {
                            checkbox[j].addEventListener("click", function() {
                                let done = document.querySelectorAll(".element p");
                                // console.log(done);
                                done[j].style.textDecoration = "line-through";
                            });
                        }

                        let all = document.querySelector("#all");
                        let active = document.querySelector("#active");
                        let completed = document.querySelector("#completed");
                        let clearAll = document.querySelector("#clearAll");


                        function clearAlls() {
                            element.remove();
                        }

                        function completeds() {
                            if(done[j].style.textDecoration !== "line-through"){
                                element.style.display = "none";
                            }
                        }
                        function actives() {
                            if(done[j].style.textDecoration === "line-through"){
                                element.style.display = "none";
                            }
                        }

                        function alls() {
                            element;
                        }

                        all.addEventListener("click", alls)
                        clearAll.addEventListener("click", clearAlls)
                        completed.addEventListener("click", completeds)
                        active.addEventListener("click", actives)
                        
                }
                







            });




        }
    }

    let element = new List();
    element.enterElement();
    // element.doneElement();



});
