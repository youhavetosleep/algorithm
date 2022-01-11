// 문제
// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 번째 줄에 7개의 수가 주어진다.
// ▣ 출력설명
// 첫 번째 줄에 가장 작은 값을 출력한다.

// ---- 풀이

function solution(arr) {
  // 1. 내장 함수
  return Math.min(...arr);

  // 2. for문
  // min은 가장 큰 수를 임의로 저장해놓는 메소드
  // let answer,
  //   min = Number.MAX_SAFE_INTEGER;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] < min) min = arr[i];
  // }
  // answer = min;
  // return answer;
}
