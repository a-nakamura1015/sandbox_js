let f;
{
  f = function() {
    let o = { note: '安全', note2: '大丈夫'};
    console.log("無名関数の中: " + o.note);
    return o;
  }
}
let oRef = f();
console.log(oRef);
oRef.note = "まったく安全ではない";
oRef = f();
console.log(oRef);
