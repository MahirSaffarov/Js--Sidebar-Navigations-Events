let sidebar = document.querySelector(".sidebar")
let xsign = document.querySelector(".x-sign")
let barsign = document.querySelector(".bar-sign")

barsign.addEventListener("click" , function(){
    sidebar.classList.remove("hide")
    barsign.style.display= "none"
    xsign.style.display= "block"
    sidebar.style.backgroundColor = "black"
})
xsign.addEventListener("click" , function(){
    sidebar.classList.add("hide")
    barsign.style.display= "block"
    xsign.style.display= "none"
    sidebar.style.backgroundColor = "white"
    barsign.style.color = "black"
})