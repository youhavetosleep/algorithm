// 문제
// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요.
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

// ▣ 입력설명
// 첫 줄에 문자열이 입력됩니다.
// ▣ 출력설명
// 첫 줄에 중복문자가 제거된 문자열을 출력합니다.

function solution(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    //console.log(s[i], i, s.indexOf(s[i]))
    if (str.indexOf(str[i]) === i) result += str[i];
  }
  return result;
}
