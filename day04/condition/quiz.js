// 1. 각도를 물어보고 0~90 예각 90 직각 90~180 둔각 180 평각
const Angle = Number(prompt("각도 입력"));
if (0 <= Angle && Angle < 90) {
  alert("예각");
} else if (Angle == 90) {
  alert("직각");
} else if (90 < Angle && Angle < 180) {
  alert("둔각");
} else if (Angle == 180) {
  alert("평각");
} else {
  alert("입력 오류!");
}
// 2. 영어 시험 점수를 입력하고 90점 이상이면 A 80점 이상이면 B 70점 이상이면 C 60점 이상 D 그 외는 나락
const score = Number(prompt("시험 점수 입력"));
if (score >= 90) {
  alert("A");
} else if (score >= 80) {
  alert("B");
} else if (score >= 70) {
  alert("C");
} else if (score >= 60) {
  alert("D");
} else {
  alert("나락");
}
// 3. [Object문제] mbti를 물어봐서 어떤 성향인지 알려주는 프로그램 ex) 4번 물어봄 e /i n/s f/t j/p entj - 외향적이고 직관적이고 이성적이고 계획적이군요!
const ei = prompt("e인가요 i인가요?");
const ns = prompt("n인가요 s인가요?");
const ft = prompt("f인가요 t인가요?");
const jp = prompt("j인가요 p인가요?");

const mbti = {
  e: "외향적",
  i: "내향적",
  n: "직관적",
  s: "감각적",
  f: "감성적",
  t: "이성적",
  j: "계획적",
  p: "즉흥적",
};

console.log(
  `당신의 mbti는 ${mbti[ei]}이고 ${mbti[ns]}이고 ${mbti[ft]}이고 ${mbti[jp]}이시군요!`
);
