// Number, String, Boolean, Array []
// 변수에 들어가면 데이터 타입 따지기

// Object

// key - value[KV]
// key - 중복안됨, 문자거나 숫자만 가능
// value - 중복됨, 아무 데이터타입 가능
const insideout = {
  title: "인사이드아웃",
  limit_age: 12,
  company: "PIXAR",
  running_time: 90,
  genre: ["kids", "drama", "fantasy"],
};

// object 데이터 조회
insideout, title; // 인사이드아웃
insideout.genre[1]; // drama

insideout["title"]; // 인사이드아웃
insideout["genre"][1]; // drama

// object 데이터 추가
insideout.director = "켈시 맨";

// object 데이터 삭제
delete insideout.limit_age;

// coffee
// 커피이름 : ""
// 커피가격 : ""
// 커피 카페인 유무 :
// 커피원두종류 :
//커피 성분 :

const coffee = {
  name: "카페라떼",
  price: 2700,
  Caffeine: true,
  beans: "아라비카",
  ingredients: {
    once_kcal: "80kcal",
    na: "5mg",
  },
};

coffee.ingredients, na; // 5mg
