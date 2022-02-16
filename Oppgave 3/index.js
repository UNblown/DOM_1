var password = "2ita123";
var oppurtunity = 4;
document.getElementById('enter').addEventListener('click', function() {
    while (oppurtunity > 0) {
        var pass = document.getElementById("passord").value;
        oppurtunity--;
        if (pass == password) {
            document.getElementById("welcome").innerHTML = ("Velkommen :)");
            document.getElementById("enter").style.visibility = "hidden";
        }
        if (oppurtunity >= 0) {
            document.getElementById("tries").innerHTML = ("Du har " + oppurtunity + " igjen.");
            break;
        }
    }

    if (oppurtunity == 0) {
        document.getElementById("result").innerHTML = ("DU KAN IKKE INNGÅ UTEN TILLATESE");

    }
});