document.getElementById('skriv').addEventListener('click', function() {
let myinput = parseInt(document.getElementById("høy").value);
let myinput2 = parseInt(document.getElementById("bre").value);
let result1 = myinput * myinput2;
let result2 = (myinput + myinput2) * 2

document.getElementById("result").innerText = "Arealet = "+ result1 + ", og Omkretsen er " + result2;
})

