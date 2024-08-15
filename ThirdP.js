var userNum1 = +prompt("لطفا عدد اول را وارد کنید");
while (isNaN(userNum1)) {
  alert("فقط استفاده از ارقام مجاز میباشد لطفا دوباره امتحان کنید!");
  var userNum1 = +prompt("لطفا عدد اول را دوباره وارد کنید");
}
var userNum2 = +prompt("لطفا عدد دوم را وارد کنید");
while (isNaN(userNum2)) {
  alert("فقط استفاده از ارقام مجاز میباشد لطفا دوباره امتحان کنید!");
  var userNum2 = +prompt("لطفا عدد دوم را دوباره وارد کنید");
}
var userNum3 = +prompt("لطفا عدد سوم را وارد کنید");
while (isNaN(userNum3)) {
  alert("فقط استفاده از ارقام مجاز میباشد لطفا دوباره امتحان کنید!");
  var userNum3 = +prompt("لطفا عدد سوم را دوباره وارد کنید");
}
var sum = userNum1 + userNum2 + userNum3
var avg = sum/ 3;
console.log(("result sum : " + sum)+"\n\n"+("result avg : " + avg));