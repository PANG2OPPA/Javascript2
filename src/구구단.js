let n1;
let n2;

for(n1 = 2; n1 <= 9; n1++) {
    document.write("<table>");
    document.write("<tr><th>" + n1 + "단</th></tr>");
    for(let n2 = 1; n2 <=9; n2++) {
        document.write("<tr><td>" + n1 + "x" + n2 + "=" + (n1*n2) + "</td></tr>");
    }
    document.write("</table>");
}