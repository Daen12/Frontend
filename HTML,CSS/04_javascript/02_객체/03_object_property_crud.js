let student = {
  name: '김싸피',
  age: 20,
  hobby: ['공부', '숙면'],
  'favorite singer': '아이유',
}

// 프로퍼티 읽기
console.log(student.name)
console.log(student['age'])
console.log(student.hobby)
console.log(student['favorite singer'])

// 프로퍼티 생성
let member = {}
member['id'] = 'ssafy'
member.name = '싸피'

// 프로퍼티 수정
member = { id: 'shy', email: 'ssafy@a.com' }
member['id'] = 'ssafy'
member.email = 'ssafy@ssafy.com'

// 프로퍼티 제거
delete member.id
console.log(member)
