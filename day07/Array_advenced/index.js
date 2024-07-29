const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.push(6)

// map : 요소들을 바꾸기!
// 모두 토마토
const tomato = arr.map(() => {
  return "🍅";
});
console.log(tomato);

const ten = arr.map(() => {
  return 10;
});

const oneTwo = arr.map((x) => {
  return x % 2 == 1 ? 1 : 2;
});

const ice = arr.map((x) => {
  return x == 3 ? "🍨" : x;
});

const StringArr = arr.map((x) => {
  return String(x);
});

// filter : 요소들을 필터링~
const oddArr = arr.filter((x) => {
  return x % 2 == 1;
});
console.log(`oddArr : ${oddArr}`);

// 1. 3의 배수만 살리기
// 2. 6이상만 살리기
const threeArr = arr.filter((x) => {
  return x % 3 == 0;
});

const sixOverArr = arr.filter((x) => {
  return x >= 6;
});

const fruits = [
  "peach",
  "apple",
  "mango",
  "strawberry",
  "abocado",
  "grape",
  "kiwi",
  "watermelon",
  "melon",
];
// 1. melon이 들어간 과일만 살리기
const onlyMelon = fruits.filter((x) => {
  return x.includes("melon");
});
// 2. 글자 길이가 6글자 이상만 살리기
const SixLengthFruits = fruits.filter((x) => {
  return x.length >= 6;
});
// 3. 모든 과일을 대문자로 바꾸기
const upperFruits = fruits.filter((x) => {
  return x.toUpperCase();
});
