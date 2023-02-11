var a = "global a";

function f() {
  //undefined.
  //function scope
  console.log(a);

  var a = "function a";

  //function a
  console.log(a);
}

f();
