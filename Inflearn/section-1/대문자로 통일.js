// 문제
// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력 하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 대문자로 통일된 문자열이 출력된다.

// ---- 풀이
function solution(n) {
  return n.split("").map((el) => el.toUpperCase()).join("");

  // 아스키코드 버전
  // let answer = "";
  // for (let x of n) {
  // 아스키코드 소문자 -> 대문자 ----- 마이너스 32
  //   let num = x.charCodeAt();
  //   if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
  //   else answer += x;
  // }
  // return answer;
}
