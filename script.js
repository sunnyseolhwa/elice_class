console.log('hello javascript');

//변수 선언과 함수 작성
// var let const 

var age = 25;
let year = 2023;
const point = 2;
const today = '광복절';
const pass = true;
const sale = '7.5';

// 데이터 타입 : 문자, 숫자 / int, float 
// Number = 1,2,3,4,5 숫자 
// String = 'hello world' 문자열 
// Boolean = true, false 
// Null, Undefinde, Object

//강 타입이 무엇입니까?

// typescript ==> 타입을 강제. / compile type 
// 인터 프린터 언어 (자바스크립트?)

console.log(typeof(year));
console.log(typeof(today));
console.log(typeof(pass));

console.log(year + '_' + today); // 문자열이 된다.
console.log(point + sale); // 250 + '7.5' 문자열로 인식 된다.  

let stringresult = Number(point) * String(year);
let result = Number(point) * Number(sale);
// 타입을 강제해주는 것 

console.log(result);
console.log(stringresult);