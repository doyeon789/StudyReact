// 1. Date 객체를 생성하는 방법
let date1 = new Date();
let date2 = new Date(2007, 8, 9, 23, 59, 59);

// 2. 타임 스탬프
// 특정 시간이 "2007.08.07.00사 00뷴 00초"로 부터 몇 ms가 지났는지 의미하는 숫자값
let ts1 = date1.getTime();
let date4 = new Date(ts1);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth();
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();


// 4. 시간 수정
date1.setFullYear(2026);
date1.setMonth(3);
date1.setDate(10);
date1.setHours(11);
date1.setMinutes(48);
date1.setSeconds(12);

// 5. 시간을 여러 포맷으로 출력하기.
console.log(date1.toDateString());
console.log(date1.toLocaleString());