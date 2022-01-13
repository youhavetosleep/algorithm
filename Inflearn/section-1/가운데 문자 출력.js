// 문제
// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 가운데 문자를 출력합니다.

// ---- 풀이
function solution(n) {
  let answer = [];
  let arr = n.split("");
  if (arr.length % 2 === 0) {
    answer.push(arr[Math.floor(arr.length / 2) - 1]);
    answer.push(arr[Math.floor(arr.length / 2)]);
  } else {
    answer.push(arr[Math.floor(arr.length / 2)]);
  }
  return answer;

  // ---- reference
  // let answer;
  // let mid = Math.floor(n.length / 2);
  // if (n.length % 2 === 1) answer = n.substring(mid, mid + 1);
  // else answer = n.substring(mid - 1, mid);
  // return answer
}
