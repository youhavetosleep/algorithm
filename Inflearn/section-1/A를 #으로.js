// 문제
// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 번째 줄에 문자열이 입력된다.
// ▣ 출력설명
// 첫 번째 줄에 바뀐 단어를 출력한다.

// ---- 풀이
function solution(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "A") {
      result += "#";
    } else {
      result += str[i];
    }
  }
  return result;
}
