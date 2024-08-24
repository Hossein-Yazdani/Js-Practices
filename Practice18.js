var userNumCount 
userNumCount = +prompt("چند عدد مدنظر دارید برای وارد کردن؟");
while (isNaN(userNumCount)) {
    alert("فقط استفاده از ارقام مجاز میباشد لطفا از اول امتحان کنید!");
    userNumCount = +prompt("چند عدد مدنظر دارید برای وارد کردن؟");
}
var userNum;
var userNumArray = [];
while (userNumCount > 0) {
    userNum = +prompt("لطفا عدد " + userNumCount + " را وارد کنید");
    if(isNaN(userNum)){
       while(isNaN(userNum)){
        alert("فقط استفاده از ارقام مجاز میباشد لطفا از اول امتحان کنید!");
        userNum = +prompt("لطفا عدد " + userNumCount + " را وارد کنید");
       } 
    }
  userNumCount--;
  userNumArray.push(userNum);
}
var sum = null
userNumArray.forEach(function (userNumSum) {
    sum += userNumSum

})
console.log("sum : " + sum + "\n" + "avg : "+ sum / userNumArray.length);
