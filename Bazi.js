var p1 = document.querySelector(".p1");
var p2 = document.querySelector(".p2");
var p3 = document.querySelector(".p3");
var p0 = document.querySelector(".p0");
var countc = 0;
var countp = 0;
function shart() {
  if (countc == 3) {
    p1.textContent = "pc : ";
    p2.textContent = "client :";
    p3.textContent = "result : ";
    p0.textContent = " pc 0:0 client";
    countc = 0;
    countp = 0;
    alert("بردی،ایول");
  }
  if (countp == 3) {
    p1.textContent = "pc : ";
    p2.textContent = "client :";
    p3.textContent = "result : ";
    p0.textContent = " pc 0:0 client";
    countc = 0;
    countp = 0;
    alert("باختی،ایشالا دفعه بعدی");
  }
}
function gh() {
  p2.textContent = "client:" + "قیچی";

  var a = Math.floor(Math.random() * 3);
  if (a == 0) {
    p1.innerText = "pc:" + "قیچی";
    p3.textContent = "result:" + "مساوی";
  }
  if (a == 1) {
    p3.textContent = "result:" + "بردی";
    p1.innerText = "pc:" + "کاغذ";
    countc += 1;
    p0.textContent = `pc ${countp}:${countc} client`;
  }
  if (a == 2) {
    p3.textContent = "result:" + "باختی";
    p1.innerText = "pc:" + "سنگ";
    countp += 1;
    p0.textContent = `pc ${countp}:${countc} client`;
  }
  shart();
}
function k() {
  p2.textContent = "client:" + "کاغذ";

  var b = Math.floor(Math.random() * 3);
  if (b == 0) {
    p3.textContent = "result:" + "باختی";
    p1.innerText = "pc:" + "قیچی";
    countp += 1;
    p0.textContent = `pc ${countp}:${countc} client`;
  }
  if (b == 1) {
    p3.textContent = "result:" + "مساوی";
    p1.innerText = "pc:" + "کاغذ";
  }
  if (b == 2) {
    p3.textContent = "result:" + "بردی";
    p1.innerText = "pc:" + "سنگ";
    countc += 1;
    p0.textContent = `pc ${countp}:${countc} client`;
  }
  shart();
}
function s() {
  p2.textContent = "client:" + "سنگ";

  var c = Math.floor(Math.random() * 3);
  if (c == 0) {
    p3.textContent = "result:" + "باختی";
    p1.innerText = "pc:" + "قیچی";
    countp += 1;
    p0.innerHTML = `pc ${countp}:${countc} client`;
  }
  if (c == 1) {
    p3.textContent = "result:" + "بردی";
    p1.innerText = "pc:" + "کاغذ";
    countc += 1;
    p0.textContent = `pc ${countp}:${countc} client`;
  }
  if (c == 2) {
    p3.textContent = "result:" + "مساوی";
    p1.innerText = "pc:" + "سنگ";
  }
  shart();
}
