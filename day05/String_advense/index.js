console.log("americano".toUpperCase());
console.log("amricano".repeat(3).toUpperCase());
console.log("AMERICANO".toLocaleLowerCase().repeat(10));

// 단어 입력받고 대문자화 시키고 숫자 입력받고 그만큼 반복
const word = (prompt("단어 입력"));
const num = Number(prompt("숫자 입력"));
const result = word.toLocaleUpperCase().repeat(num);
console.log(result);

// 이모지 = 시작 + .
console.log("abcdef".replace("a", "😃"));