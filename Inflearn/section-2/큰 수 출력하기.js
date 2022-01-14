// 문제
// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작 성하세요.(첫 번째 수는 무조건 출력한다)


// ▣ 입력설명
// 첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.
// ▣ 출력설명
// 자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.

// ---- 풀이 
function solution(arr) {
  let result = []
  result.push(arr[0])
  for(let i=1; i<arr.length; i++) {
    if(arr[i] > arr[i-1]) result.push(arr[i])
  }
  return result
}