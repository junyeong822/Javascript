// genaral function [일반 함수]
function smaller(a, b) {
  return a > b ? b : a;
}

// arrow function [화살표 함수]
const smaller1 = (a, b) => {
  return a > b ? b : a;
};

// 어떠한 단어가 들어오면 뒤에 "!" 붙여서 돌려주는 함수
const exclaimation = (word) => {
  return word + "!";
};
// 어떠한 숫자가 들어오면 반 나눠서 돌려주는 함수
const ban = (num) => {
  return num / 2;
};
// 어떠한 숫자가 들어오면 합치고 두배해서 돌려주는 함수
const addDouble = (x, y) => {
  return (x + y) * 2;
};

// 어떠한 배열과 과일을 넣었을 때 배열에 과일을 추가해주는 함수
const my = ["토마토", "키위"];
const you = ["사과", "배"];
const cart = (arr, fruit) => {
  arr.push(fruit);
};

// 어떠한 배열과 과일을 영어로 넣었을 때 과일에 알파벳이 a || p가 들어가면 배열에 추가가 안되고 그게 아니면 추가되는 함수 만들기
const noap = (arr, fruit) => {
  if (!fruit.includes("a") && !fruit.includes("p")) {
    arr.push(fruit);
  }
};

// 비밀번호를 입력 했을 때 ! || #이 들어가면 비밀번호 충족 아니면 비밀번호 재설정
const pwCheck = (password) => {
  if (password.includes("!") || password.includes("#")) {
    return "비밀번호 충족";
  } else {
    return "비밀번호 재설정";
  }
};

"abc".length; // 3

// 비밀번호를 입력 했을 때 ! || #이 안들어가면 특수문자 필수!
// 비밀번호의 길이가 6~20사이가 아니라면 비밀번호 길이를 재수정!
// 비밀번호의 시작이 IT || it로 시작안하면 반드시 IT || it로 시작!
// 다 통과되면 비밀번호 통과
const pwCheck1 = (password) => {
  if (!password.includes("!") && !password.includes("#")) {
    return "특수문자 필수!";
  } else if (password.length < 6 || 20 < password.length) {
    return "비밀번호 길이를 재수정!";
  } else if (!(password.startsWith("IT") || password.startsWith("it"))) {
    return "반드시 IT or it로 시작!";
  } else {
    return "비밀번호 통과!";
  }
};
