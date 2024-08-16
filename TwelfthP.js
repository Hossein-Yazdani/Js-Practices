var userName = prompt("لطفا نام خود را وارد کنید");
var userPassword = prompt("لطفا رمز عبور خود را وارد کنید");

    while(userName.length < 3 || userPassword.length < 8){
      
        alert(
          "یوزنیم باید بیشتر از 3 کاراکتر باشد و رمز عبور باید بیشتر از 8 کاراکتر باشد لطفا مجدد امتحان کنید"
        );
        userName = prompt("لطفا نام خود را وارد کنید");
        userPassword = prompt("لطفا رمز عبور خود را وارد کنید");

        
    }
    alert("ثبت نام با موفقیت انجام شد");
