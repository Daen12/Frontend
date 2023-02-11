/**
 * 자바스크립트 문자열 - 1
 *
 * - ""로 감싼다.
 * - ''로 감싼다.
 * - ``(backtick)으로 감싼다.
 */

let msg = '자바스크립트 문자열'
msg = '자바스크립트 문자열'
msg = `자바스크립트 문자열`

let name = '홍길동'
msg = `나의 이름은 ${name}입니다.`
console.log(msg)

let msg2 = `저의
                이름은
                홍길동입니다.`
console.log(msg2)

console.log("I'm Sam")
console.log('저의 \n 이름은 ooo입니다.')
console.log('\u{1F60B}')

'이승재'.length
'이승재'[1]
'이승재'.charAt(1)
'이승재'[100]
'이승재'.charAt(100)

/**
 * 자바스크립트 문자열 -2
 *
 *  - 문자열과 숫자 타입의 + 연산 결과는 문자열
 *  - 문자열과 숫자 타입의 + 말고 다른 연산 결과는 숫자
 */
// 하나라도 문자열이면 문자열로 +!!!!!!
console.log(2 + 2 + '1')
console.log('2' + 2 + 1)
console.log(1 + '20')
console.log('1' + '20')
console.log('100' - 8)
console.log('100' * 8)

console.log(Number('123n'))
console.log(Number(' 0123  '))
console.log(Number(false))
console.log(Number(undefined))
console.log(Number(null))
console.log(String())
