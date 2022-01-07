// 문제
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
// 단어의 길이가 짝수라면 가운데 두 글자를 반환하면 됩니다.

// ---- 풀이
function solution(s) {
  let length = s.length;

  const start = Math.ceil(length / 2) - 1;
  const end = length % 2 ? 1 : 2;

  return s.slice(start, start + end);
}
