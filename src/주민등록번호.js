// let num = prompt("주민번호 입력");
// let sum = num.substring(0,2);
// let sum1 = num.substring(7,8);

// if(sum >= 0 && sum <= 23){
//     var year = "20" + sum;
// } else {
//     var year = "19" + sum;
// }

// if(sum1 == 1 || sum1 == 3){
//     var gender = "M";
// } else if(sum1 == 2 || sum1 == 4){
//     var gender = "F";
// }

// document.write(2023-Number(year));
// document.write(gender);

// Number 객체 : 숫자와 관련된 작업을 할 때 사용하는 메소드
// Number.parseFloat() 메소드

console.log(Number.parseFloat("12"));         // 12
console.log(Number.parseFloat("12.34"));      // 12.34
console.log(Number.parseFloat("12문자열"));   // 12
console.log(Number.parseFloat("12 34 56"));  // 12
console.log(Number.parseFloat("문자열 56")); // NaN

console.log(Number.parseInt("12"));         // 12
console.log(Number.parseInt("12.34"));      // 12
console.log(Number.parseInt("12문자열"));   // 12
console.log(Number.parseInt("12 34 56"));  // 12
console.log(Number.parseInt("문자열 56")); // NaN

