// 문제
// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 번째 줄에 20이하의 자연수 N이 입력된다..
// ▣ 출력설명
// 첫 번째 줄에 1부터 N까지의 합을 출력한다.

// ---- 풀이
function solution(n) {
  let arr = []
  for(let i = 1; i <= n; i++) {
    arr.push(i)
  }
  return arr.reduce((a, b) => a + b)
}