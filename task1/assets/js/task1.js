// let sidebar = document.querySelector(".sidebar")
// let closeIcon = document.querySelector(".sidebar .close")
// let openIcon =document.querySelector(".sidebar .open")

// openIcon.addEventListener("click",function(){
//     sidebar.classList.remove("hide");
//     openIcon.style.display = "none";
//     closeIcon.style.display = "block"
// })
// closeIcon.addEventListener("click",function(){
//     sidebar.classList.add("hide");
//     closeIcon.style.display = "none";
//     openIcon.style.display = "block"
// })


// let button = document.querySelector("button");

// console.log(button.parentNode.parentNode);
// console.log(button.previousElementSibling.innerHTML);
// console.log(button.nextElementSibling);

// let elems = button.parentNode.children;

// for (const item of elems) {
//     if (item.innerText == "Hello") {
//         item.style.color = "red"
//     }
// }

// console.log(button.closest(".heads"));

// let elem1 = document.querySelector(".gultac")

// console.log(elem.parentNode.parentNode.parentNode.parentNode.lastElementChild.innerText);
// console.log(elem1.closest(".head").lastElementChild.innerHTML);

// let elem2 = document.querySelector(".anar")

// console.log(elem2.closest(".head").previousElementSibling.firstElementChild.firstElementChild.firstElementChild.innerText);

// let elem3 = document.querySelector(".novreste")

// console.log(elem3.closest(".container").previousElementSibling.children[1].innerHTML)

let elemInput = document.querySelector("input")

// function inputEvent(){
//     console.log("input event")
// }
// elemInput.addEventListener("keyup", inputEvent)

// document.getElementById("test").addEventListener("change",function(e){
//     if(e.target.value == "1"){
//         elemInput.value = "Html"
//     }
// })

elemInput.addEventListener("keyup",function(e){
    if(e.keyCode === 13){
        document.querySelector("button").click();
    }
})

document.querySelector("button").addEventListener("click", function(e){
    alert(e.target.previousElementSibling.value)
})