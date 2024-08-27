var allMembers = [
  { id: 1, name: "hossein", lastname: "yazdani", age: 20 },
  { id: 2, name: "ali", lastname: "alizade", age: 22 },
  { id: 3, name: "kiyan", lastname: "kiyani", age: 14 },
  { id: 4, name: "reza", lastname: "rezai", age: 17 },
  { id: 5, name: "alireza", lastname: "mohammadi", age: 30 },
];
var allMemberAges = allMembers.every(function (userAges) {

  return userAges.age > 18;
});
if(allMemberAges===true){
    alert("ok")
}else{
    alert("fuck")
}


