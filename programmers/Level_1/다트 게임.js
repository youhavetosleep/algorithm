// 문제
// https://programmers.co.kr/learn/courses/30/lessons/17682


// ---- 풀이
function solution(dartResult) {
  let arr = [];
  let temp = 0;
  let sum = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] === 1 && dartResult[i + 1] === 0) {
        temp = 10;
        i++;
      } else {
        temp = dartResult[i];
      }
    } else if (dartResult[i] === "S") {
      arr.push(temp);
    } else if (dartResult[i] === "D") {
      arr.push(Math.pow(temp, 2));
    } else if (dartResult[i] === "T") {
      arr.push(Math.pow(temp, 3));
    } else if (dartResult[i] === "*") {
      arr[arr.length - 1] *= 2;
      arr[arr.length - 2] *= 2;
    } else if (dartResult[i] === "#") {
      arr[arr.length - 1] *= -1;
    }
  }
  for (let k = 0; k < arr.length; k++) {
    sum += Number(arr[k]);
  }
  return sum;
}
