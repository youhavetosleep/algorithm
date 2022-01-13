// 문제
// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(3<=N<=30)
// 두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다. 각 문자열의 길이는 서로 다릅니다.
// ▣ 출력설명
// 첫 줄에 가장 긴 문자열을 출력한다.

// ---- 풀이
function solution(str) {
  let long = str.map((el) => (el = el.length)).sort((a, b) => b - a).shift();
  return str.filter((el) => el.length === long);

  // ---- reference
  // let answer,
  //   max = Number.MIN_SAFE_INTEGER;
  // for (let x of s) {
  //   if (x.length > max) {
  //     max = x.length;
  //     answer = x;
  //   }
  // }
  // return answer;
}
