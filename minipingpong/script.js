console.log("Start the games!")
//class="active"
var main = document.querySelector('main')
var round1 = document.querySelector('#round1')
var round2 = document.querySelector('#round2')
var round3 = document.querySelector('#round3')
var buttonText = "Start"
var buttonTextClose = "x"

// console.log(round1)

//init add all hover and click events
function init(){
    round1.addEventListener("mouseover",hover)
    round1.addEventListener("mouseout",removeAllHovers)
    round1.querySelector("button").addEventListener("click",startRound)
    round2.addEventListener("mouseover",hover)
    round2.addEventListener("mouseout",removeAllHovers)
    round2.querySelector("button").addEventListener("click",startRound)
    round3.addEventListener("mouseover",hover)
    round3.addEventListener("mouseout",removeAllHovers)
    round3.querySelector("button").addEventListener("click",startRound)
}
//remove all hover classes and add current
function hover(){
    removeAllHovers()
    main.classList.add(this.id+"-hover")
}
function removeAllHovers(){
    main.classList.remove("round1-hover")
    main.classList.remove("round2-hover")
    main.classList.remove("round3-hover")
}
//start round, add active class
function startRound(){
    main.classList.add(this.parentElement.id+"-active") //add active round class
    removeAllHovers() //remove  hover classes
    removeEvents()  //remove hover events
    this.classList.add("close") //change button appearance, add class close to button
    this.innerHTML = buttonTextClose //change button label
    this.parentElement.querySelector(".start").classList.remove("hide") //show content in active section
    this.addEventListener("click",resetRound) //new button click event
}
//remove active class, call init
function resetRound(){
    main.classList.remove(this.parentElement.id+"-active")
    this.classList.remove("close")
    this.innerHTML = buttonText
    this.parentElement.querySelector(".start").classList.add("hide")
    this.removeEventListener("click",resetRound) //remove button click event
    init() //call init function to start over
}
//
function removeEvents(){
    round1.removeEventListener("mouseover",hover)
    round1.removeEventListener("mouseout",removeAllHovers) 
    round2.removeEventListener("mouseover",hover)
    round2.removeEventListener("mouseout",removeAllHovers)
    round3.removeEventListener("mouseover",hover)
    round3.removeEventListener("mouseout",removeAllHovers)
    // round1.replaceWith(round1.cloneNode(true))
    // round2.replaceWith(round2.cloneNode(true))
    // round3.replaceWith(round3.cloneNode(true))
}

init()