console.log('시작');
let a;
setTimeout(function() {
  a = 1;
  console.log('setTimeout에서 출력', a)
}, 3000);
console.log('메인흐름 : ', a);