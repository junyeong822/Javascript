// 1. 유저에게 태어난 년도를 입력하고 2005년 이하이면 -> 성인 아니면 미성년자
const year = Number(prompt("태어난 년도"));
const isAdult = 2025 - year >= 20 ? "성인" : "미성년자";
console.log(`${isAdult}입니다.`);
// 2. 자이로드롭을 탈려고 하는데 키를 물어보고 140이상이면 탑승할 수 있습니다. 아니면 탑승이 불가능합니다.
const height = Number(prompt("키 입력"));
const canRide = height >= 140 ? "탑승 가능" : "탑승 불가능";
console.log(canRide);
// 3. 성별을 물어보고, 나이도 물어봐서 남성이고 20살 이상이면 징집대상입니다. 아니면 징집대상이 아닙니다.
const gender = prompt("성별 입력");
const age = Number(prompt("나이 입력"));
const army = gender == "남성" && age >= 20 ? "징집대상" : "징집대상 아님";
console.log(`귀하는 ${army} 입니다.`);
// 4. 다이소에서 물품 총 구매액수 물어보고 5만원 이상이면 10% 할인된 금액을 주고 아니면 그냥 금액 주는 프로그램
const total = Number(prompt("총 구매 금액"));
const cost = total >= 50000 ? total * 0.9 : total;
console.log(`다이소 총 구매 금액 : ${cost} 입니다.`);
// 5. 나이를 물어보고 20살 이상이면 성인 19~14살이면 청소년 13살 이하면 어린이
const age1 = Number(prompt("나이 입력"));
const result = age1 >= 20 ? "성인" : age1 > 13 ? "청소년" : "어린이";
