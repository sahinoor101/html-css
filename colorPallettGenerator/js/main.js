const columns = document.getElementsByClassName("column");
function regen() {
  let c1, c2, c3;
  for (let i = 0; i < 5; i++) {
    c1 = Math.floor(Math.random() * 255);
    c2 = Math.floor(Math.random() * 255);
    c3 = Math.floor(Math.random() * 255);
    console.log(c1 + "," + c2 + "," + c3);
    columns[i].style.backgroundColor = `rgb(${c1} , ${c2} ,${c3} )`;
    columns[i].textContent=`rgb(${c1} , ${c2} ,${c3} )`;
  }
}
