// 문제
//모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다.
//모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

// ----- 풀이
function solution(sizes) {
  let long = 0;
  let short = 0;
  // ele[0] : 가로, ele[1] : 세로
  for (let ele of sizes) {
    // 가로가 더 긴 경우
    if (ele[0] > ele[1]) {
      if (long < ele[0]) {
        long = ele[0];
      }
      if (short < ele[1]) {
        short = ele[1];
      }
    } else {
      // 세로가 가로보다 긴 경우
      if (long < ele[1]) {
        long = ele[1];
      }
      if (short < ele[0]) {
        short = ele[0];
      }
    }
  }
  return long * short;
}
