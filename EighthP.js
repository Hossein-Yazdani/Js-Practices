var userGender = prompt("لطفا جنسیت خود را وارد نمایید!");
var userAge = +prompt("لطفا سن خود را هم وارد نمایید!");
if (
  userGender == "female" ||
  userGender == "Female" ||
  userGender == "FEMALE" ||
  userGender == "زن"
) {
  alert("متاسفانه به کاربران زن اجازه ورود داده نمیشود!");
} else if (isNaN(userAge)) {
  while (isNaN(userAge)) {
    alert("مقدار وارد شده صحیح نمیباشد لطفا مجدد تلاش کنید!");
    userAge = +prompt("لطفا سن خود را هم وارد نمایید!");
    if (userAge < 18) {
      alert("شما دارای حداقل سن مجازه برای ورود نیستید!");
    }else{
        alert("شما مجاز به ورود هستید خوش آمدید!!")
    }
  }
} else if (userAge < 18) {
  alert("شما دارای حداقل سن مجازه برای ورود نیستید!");
} else if (
  userGender !== "male" ||
  userGender !== "Male" ||
  userGender !== "MALE" ||
  userGender !== "مرد"
) {
  alert(" مقدار وارد شده برای جنسیت صحیح نمیباشد! مجدد تلاش کنید");
  userGender = prompt("لطفا جنسیت خود را وارد نمایید!");
  alert("شما مجاز به ورود هستید خوش آمدید!!")
}else{
    alert("شما مجاز به ورود هستید خوش آمدید!!")
}

