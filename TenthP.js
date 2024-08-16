var userNum = +prompt("لطفا عددی را وارد کنید");
function isEven() {
  while (isNaN(userNum)) {
    alert("شما مجاز به وارد کردن رتشه یا علامت نیستید لطفا مجدد تلاش کنید!");
    userNum = +prompt("لطفا عددی را وارد کنید");
  }
  if (userNum % 2 === 0) {
    console.log(userNum + " : " + "عدد زوج است");
  } else {
    console.log(userNum + " : " + "عدد فرد میباشد");
  }
}
isEven();
