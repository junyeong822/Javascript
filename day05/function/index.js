// function [함수]
// 100 -> 200
// 200 -> 300
// 300 -> 400
// 400 -> 500
// x -> x + 100

function name(x) {
  return x;
}

function add100(x) {
  return x + 100;
}

function minus100(x) {
  return x - 100;
}

function wonyoungthinking(x) {
  return x + "럭키비키잖아";
}

// x,y의 제곱
function test(x,y) {
  return (x+y) ** 2;
}

// 홀수, 짝수 구분
function test1(x) {
  if (x % 2 == 1) {
    return "홀수";
  } else {
    return "짝수";
  }
}

// 두 숫자를 넣어서 큰숫자 돌려주기
function test2(x,y) {
  return x > y ? x : y;
}

// x,y의 값이 같으면 같아요! 아니면 달라요!
function test3(x,y) {
  return x == y ? "같아요!" : "달라요!";
}

test3(100,200);
test3(200,300);
test3(500,400);

prompt("너가 쓰고 싶은말 쓰셈");
alert("비상비상비상");

const a = add100(3000); // 3100
const b = minus100(1000); // 900
const c = wonyoungthinking("수업을 하고 있는데 마침 휴강이라서");

