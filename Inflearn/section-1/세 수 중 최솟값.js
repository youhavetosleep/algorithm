// 문제
// 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.(정렬을 사용하면 안됩니다)

// 입력설명
//첫 번째 줄에 100이하의 세 자연수가 입력된다.

// 출력설명
//첫 번째 줄에 가장 작은 수를 출력한다.

// ---- 풀이
function solution(a, b, c) {
  let result = 0;
  if (a > b) {
    result = b;
  } else if (b > c) {
    result = c;
  } else if (result > a) {
    result = a;
  }
  return result;
}
