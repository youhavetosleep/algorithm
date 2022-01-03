// 문제
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// ----풀이
function solution(arr) {
  let answer = 0 ;
  let result = 0
  for(let i = 0 ; i < arr.length ; i++) {
      answer += arr[i]
  }
  result =  answer / arr.length
  return result;
}