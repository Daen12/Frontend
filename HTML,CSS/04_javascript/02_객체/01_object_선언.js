let obj = {};
let obj2 = new Object();
function Member() {}
let member = new Member();

Object.prototype.a = function () {
  console.log("prototype a");
};

obj.a();
obj2.a();
member.a();

Member.prototype.b = function () {
  console.log("prototype b");
};

// obj.b();
// obj2.b();
member.b();
