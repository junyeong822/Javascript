// 1. 세로
const makeBox = (x) => {
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = x;
  document.body.appendChild(div);
};

["red", "blue", "black", "skyblue"].forEach((x) => {
  makeBox(x);
});

// 2. 가로
// 1. container 만들고 flex 줘야함
const container = document.createElement("div");
container.style.display = "flex";

const makeBox1 = (x) => {
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = x;
  return div;
};

// 2. box 5개 만들고 컨테이너에 넣기
["pink", "orange", "blue", "green", "yellow"].forEach((x) => {
  container.appendChild(makeBox1(x));
});

// 3. container를 body에
document.body.appendChild(container);
