const div = document.createElement("div");
div.innerText = "배고픔";

// 1. 스타일 직접 주거나 [지양]
// div.style.color = "red";
// document.body.appendChild(div);

// 2. 클래스 이름을 직접 주기
div.className = "box";
document.body.appendChild(div);
