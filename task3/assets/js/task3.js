let input = document.querySelectorAll("input");
let p = document.querySelector(".email p")
let p2 = document.querySelector(".password p")

for (let item of input) {
    item.addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            document.querySelector("button").click();
        }
    })
}
document.querySelector("button").addEventListener("click", function (e) {
    if (!!!e.target.closest(".input").firstElementChild.children[1].value) {
        p.style.visibility = "visible"
    }
    else {
        p.style.visibility = "hidden";
    }
    if (!!!e.target.previousElementSibling.previousElementSibling.value) {
        p2.style.visibility = "visible"
    }
    else {
        p2.style.visibility = "hidden";
    }
    if (p.style.visibility == "hidden" && p2.style.visibility == "hidden") {
        alert("Successfully signed up")
    }
})

let input1 = document.querySelector(".email input")
let input2 = document.querySelector(".password input")
input1.addEventListener("blur", function () {
    if (!!!this.value) {
        p.style.visibility = "visible"
    }
    else {
        p.style.visibility = "hidden";
    }
})
input2.addEventListener("blur", function () {
    if (!!!this.value) {
        p2.style.visibility = "visible"
    }
    else {
        p2.style.visibility = "hidden";
    }
})