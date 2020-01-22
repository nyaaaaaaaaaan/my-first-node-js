'use strict';
// 0 番には node コマンドのファイルのパスが入り1 番には、実行しているプログラムのファイルのパスが入る
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum = sum + i;
}
console.log(sum);
