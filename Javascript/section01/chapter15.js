// 1. 객체 생성
let obj1 = new Object();
let obj2 = {};

// 2. 객체 프로퍼티 (객체 속성)
let person = {
    name: "이도연",
    age: 20,
    hobby: "게임",
    extra: {},
    10: 20,
    "like turtle": true
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
let age = person["age2"];

let property = "hobby";
let hobby = person[property];

// 3.2 새로운 프로퍼티르 추가하는 방법
person.job = "student";
person["favoriteFood"] = "water";

// 3.3 프로퍼티를 수정하는 법
person.job = "ssafy person";
person["faviruteFood"] = "불닭볶음면";

// 3.4 프로퍼티를 삭제하는 법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result2); 