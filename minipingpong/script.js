console.log("Start the games!")

var main = document.querySelector('main')
var round1 = document.querySelector('#round1')
var round2 = document.querySelector('#round2')
var round3 = document.querySelector('#round3')
var current = ""

//init add all hover events
function init() {
    round1.addEventListener("mouseover",hover)
    round1.addEventListener("mouseout",removeAllHovers)
    round2.addEventListener("mouseover",hover)
    round2.addEventListener("mouseout",removeAllHovers)
    round3.addEventListener("mouseover",hover)
    round3.addEventListener("mouseout",removeAllHovers)

    if(window.location.hash) {
        startRound()
    }
}
//remove all hover classes and add current
function hover() {
    removeAllHovers()
    main.classList.add(this.id+"-hover")
}
function removeAllHovers() {
    main.classList.remove("round1-hover")
    main.classList.remove("round2-hover")
    main.classList.remove("round3-hover")
}
//start round, add active class
function startRound() {
    removeAllHovers() //remove hover classes
    removeEvents()  //remove all events
    current = window.location.hash.split('#')[1]
    main.classList.add(current+"-active") //add active class to main
    main.querySelector("section#"+current).querySelector("a[href$='"+current+"']").classList.add("hide") //hide start link
    main.querySelector("section#"+current).querySelector(".rules").classList.remove("hide") //show rules in active section

    document.addEventListener("click",outsideClick)
}
//remove active class, call init
function resetRound() {
    main.classList.remove(current+"-active") //remove active class to main
    main.querySelector("section#"+current).querySelector("a[href$='"+current+"']").classList.remove("hide") //show start link
    main.querySelector("section#"+current).querySelector(".rules").classList.add("hide") //hide rules in active section

    document.removeEventListener("click",outsideClick)
    init() //call init function to start over
}
function outsideClick(){
    var round = main.querySelector("section#"+current)
    if (!round.contains(event.target)) {
        window.location = "#"
    }
}
// remove all events
function removeEvents() {
    round1.removeEventListener("mouseover",hover)
    round1.removeEventListener("mouseout",removeAllHovers) 
    round2.removeEventListener("mouseover",hover)
    round2.removeEventListener("mouseout",removeAllHovers)
    round3.removeEventListener("mouseover",hover)
    round3.removeEventListener("mouseout",removeAllHovers)
}

//hash: check window location to navigate to active round
window.addEventListener("hashchange", function() {
    // console.log("hashchange: ",window.location.hash)
    if(window.location.hash) {
        startRound()
    }else {
        resetRound()
    }
})

//Start script 
init()


/* Learnings:

replace element with cone removes all listeners...
    round1.replaceWith(round1.cloneNode(true))
    round2.replaceWith(round2.cloneNode(true))
    round3.replaceWith(round3.cloneNode(true))


*/