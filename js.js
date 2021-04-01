r = 4;
b = 5;

c = (r + b);
document.write(c + "<br>");

function test() {
    x = document.getElementById('n1').value;
    l = x.length
    if (l >= 5) {
        console.log('true')
        document.getElementById('n1').style.backgroundColor = 'green'

    } else {
        console.log('false')
        document.getElementById("n1").style.backgroundColor = 'blue'
    }
}

function testp() {
    x = (document.getElementById('n2').value)
    y = Number(document.getElementById('n3').value)
    if (x == null || x == "") {
        alert("cant be blank")
    } else if (y == null || y == "") { alert("psswrd cant be blank ") }
    if (x == "ramees" && y == "12345"
        X) {
        alert("login sucsess")
    } else { alert("sorry somthing went wrong") }
}


function swt() {
    mark = Number(document.getElementById('t1').value)
    switch (true) {
        case marke < 90:
            console.log('A+')
            break;
        case marke < 80:
            console.log('b+')
            break;
        case marke < 70:
            console.log('c+')
            break;
    }
}

function mlt() {
    n = Number(document.getElementById('n01').value)
    a = Number(document.getElementById('n02').value)
    var i = 0,
        b = 0;
    for (i = 0; i <= n; i++) {
        b = i * a;
        console.log('i'
            x 'a' = 'b')
    }
}