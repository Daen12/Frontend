let member1 = { id: "hong", email: "hong@a.com" };
let member2 = member1;
member2.id = "yang";

console.log(member1.id);
console.log(member2.id);
