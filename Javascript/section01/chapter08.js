// 1. null 병합 연산자
// -> 존재하는 값ㅇ르 추려내느 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var3 ?? var2;

let userName;
let userNickName = "Winderlood";

let displayName = userName ?? userNickName;

// 2. typeof 연산자
// -> 값의 ㅏ입을 문자열로 반환하는 기능을 하는연산자

let var7 = 1;
var7 = "hello";
var7 = true;

let t1 = typeof var7;
console.log(t1);

// 3. 삼항 연산자
// -> 항을 3개 사용하느 연산자
// -> 조건식을 이요해서 참, 거짓일 때의 값으 ㄹ다르게 반환
let var8 = 10;

// 요구사항 : 변수 res에 var8 값이 짜굿 -> "짝", 흡수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);