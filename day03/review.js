// 유저에게 점심메뉴 먹은거 물어보고 콘솔로 ~점심을 먹었다
const lunch = prompt("점심메뉴");
console.log(`${lunch}점심을 먹었다니 맛있었겠군요`);

// 유저에게 밑변 그리고 높이를 물어보고 콘솔로 정삼각형의 넓이~입니다
const base = Number(prompt("밑변"));
const height = Number(prompt("높이"));
console.log(`정삼각형의 넓이는 ${base * height * 0.5}입니다.`);

// 유저에게 원화를 물어보고 엔화로 바꿔주는 프로그램 ex) 10000 -> 1129 나오기!
const won = Number(prompt("원화 입력"));
const rate = 0.113;
console.log(`엔화 : ${won * rate}`);
