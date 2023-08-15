let age = 25;

console.log(age === 25);
console.log(age == '25'); // 값만 맞으면 true
console.log(age === '25'); // 타입과 값 하나만 맞으면 false

let score = 100;

// if(score === 100){
//     console.log('축하합니다. A 입니다.')
// } 

// else if(score === 80){
//     console.log('아쉽네요 B 입니다.')
// } 

// else{
//     console.log('분발하세요')
// }



// switch 서버에서 데이터 값을 분류할 때 자주 사용함
// 0: 바지, 1: 티셔츠, 2: 치마, 3: 청바지
// 숫자를 메기는 이유 Number < String ==>byte
// 검색이 훨씬 용이하다.
// 속도도 빠르게 올릴 수 있다.
let category = 1;

function Category(category){
    switch(category){
        case 0:
            console.log('바지 전체입니다.')
            break;
        case 1:
            console.log('S/M/L')
            break;
        case 2:
            console.log('M/L/XL')
            break;
    }
}
console.log(Category(category));