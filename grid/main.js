let boxes;
boxes = document.getElementsByClassName("box");
console.log(boxes);
let arr = [
  0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0,
];
let i;
for (i = 0; i < 25; i++) {
  if (arr[i] == 0) {
    boxes[i].style.backgroundColor = " rgb(120, 55, 5)";
  } else {
    boxes[i].style.backgroundColor = " rgb(29, 151, 207)";
  }
}
