let count = 0 
let countEl = document.getElementById("zero-el")
let counted = document.getElementById("ero-el")
function increment() {
    count = count + 1
    countEl.innerText = count
    console.log(count)
}
increment()
function saved() {
    let countstr = count + "-"
    counted.innerText += countstr
    countEl.innerText = count
    count = 0
}
saved()