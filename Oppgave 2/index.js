document.getElementById('skriv').addEventListener('click', function() {
let myinput = parseInt(document.getElementById("høy").value);
let myinput2 = parseInt(document.getElementById("bre").value);
let result1 = myinput * myinput2;
let result2 = (myinput + myinput2) * 2

for (var i = 1; i <= myinput; i++) {
    for (var a = 1; a <= myinput2; a++) {
        if (i == 1 || i == myinput) 
            document.write("*");
            else if (a == 1 || a == myinput2) 
                document.write("*");
            else {
                document.write("&nbsp;");
                document.write("&nbsp;");
            }
    }
    document.write("<br>");
        
}
})