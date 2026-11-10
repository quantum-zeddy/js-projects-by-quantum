let calEl = document.getElementById("cal-el")
let yeaEl = document.getElementById("yea-el")
let moEl = document.getElementById("mo-el")
let saEl = document.getElementById("sa-el")

function file() {
	let count = calEl.value
	coun = yeaEl.textContent + count
	yeaEl.textContent = coun
	console.log(coun)
	count = calEl.value
	cob = count * 12
	con = moEl.textContent + cob
	moEl.textContent =  con
	console.log(con)
	count = calEl.value
	da = count * 365
	days = saEl.textContent + da 
	saEl.textContent = days
	console.log(days)

}   
file()
