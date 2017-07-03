const g = function f(stop){ /* 関数を定義してそれをgに記憶(代入) */
  if(stop) {
    console.log('f停止');
    return;
  }
  else {
    console.log('fは停止していない');
    f(true); /* fの中でfを再度読んでいる */
  }
}; /* ここまで関数の定義 */
g(false); /*上の関数を呼び出し。関数のstopにfalseが代入されて実行される */
console.log("----");
g(true);
