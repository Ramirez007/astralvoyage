function mlt() {
    n = Number(document.getElementById('n02').value)
    a = Number(document.getElementById('n01').value)
    var i = 0,
        b = 0;
    for (i = 0; i <= n; i++) {
        b = i * a;
        document.write("<br>")
        document.write(i + "x" + a + "=" + b)
    }
}