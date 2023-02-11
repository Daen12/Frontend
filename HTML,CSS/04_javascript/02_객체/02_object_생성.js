let member1 = { id: 'shy', email: 'ssafy@a.com' }

function Member(id, email) {
  this.id = id
  this.email = email
  this.sayHello = function () {
    console.log(`Hi my id is ${this.id}`)
  }
}

let member2 = new Member('shy', 'ssafy@a.com')
let member3 = new Member('lee', 'lee@ssafy.com')

member2.sayHello()
member3.sayHello()

console.log(member1)
console.log(member2)

var person = {
  name: 'Lee',
  sayHello: function () {
    console.log(`Hello My name is ${this.name}`)
  },
}

console.log(person)
console.log(typeof person)
person.sayHello()
