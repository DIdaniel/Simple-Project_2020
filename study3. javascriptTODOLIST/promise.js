//About Promise

'use strict';

function setLog(log) {
  let logBody = document.getElementById('log-box-body')
  let logDiv = document.createElement('div');
  logDiv.append(log);
  logBody.append(logDiv);
}

function funcPr1() {
  let pr = new Promise(function(resolve, reject) {
    // promise 정의 부분
    setTimeout(function(){
      resolve ('값1')
      reject (`에러메세지에용~`);
    }, 3000)
  });
  return pr;
}

function funcPr2() {
  let pr = new Promise(function(resolve, reject) {
    // promise 정의 부분
    setTimeout(function(){
      resolve(`값2`);
      reject (`에러메세지에용~`);
    }, 1000)
  });
  return pr;
}

function funcPr3() {
  let pr = new Promise(function(resolve, reject) {
    // promise 정의 부분
    setTimeout(function(){
      resolve(`값3`);
      reject (`에러메세지에용~`);
    }, 500)
  });
  return pr;
}

// funcPr1()
//   .then(function(value) {
//   // promise 수행 부분
//   setLog(value);
  
//   return funcPr2()
// })
//   .then(function(value) {
//     // Promise 수행 부분
//     setLog(value);

//     return funcPr3();
//   })
//   .then(function(value) {
//     setLog(value);
//   })
//   .catch(function() {
//     setLog(error);
//   });


let a, b;

$.ajax('a.txt').done(function(data) {
  a = data;
});

$.ajax('b.txt').done(function(data) {
  b = data;
});

setLog( a + b );

function fileA() {
  let pr = new Promise(function(resolve, reject) {

  });
}