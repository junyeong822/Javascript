// 유저에게 주말에 먹었던 음식을 입력받고 콘솔로그로 먹었던 음식을 나열하기
// 토요일 점심 음식 : 파스타 토요일 저녁 : 김치찌개 일요일 점심 : 떡볶이 일요일 저녁 : 치킨

const food = []
food.push(prompt("토요일 점심"));
food.push(prompt("토요일 저녁"));
food.push(prompt("일요일 점심"));
food.push(prompt("일요일 저녁"));
console.log(`주말에 먹은 음식들 ${food}`);

const lunch1 = prompt("토요일 점심 : ");
const dinner1 = prompt("토요일 저녁 : ");
const lunch2 = prompt("일요일 점심 : ");
const dinner2 = prompt("일요일 저녁 : ");
console.log(`토요일 점심 ${lunch1}, 토요일 저녁 ${dinner1}, 일요일 점심 ${lunch2}, 일요일 저녁 ${dinner2} 입니다.`);