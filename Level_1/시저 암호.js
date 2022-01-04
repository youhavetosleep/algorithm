// 문제
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// ----- 풀이
function solution(s, n) {
  // split으로 배열로 만든 뒤 
  // map을 통해 배열을 순회한다. 
  // 순회하며 요소들의 값을 아스키코드로 바꾼다. 
  // 대소문자 구분 없이 모두 대문자로 바꾼다. 
  // 해당 아스키 값에 n 값을 더해 z의 아스키 코드값인 90을 넘는지 판단한 뒤 
  // 넘지 않는다면 value값에 n을 더하고 
  // 넘는다면 처음으로 돌아간다. 
  // 이후 join을 통해 모두 합쳐준다. 
  return s
    .split("")
    .map((ele) => {
      if (ele === " ") {
        return ele;
      }
      const value = ele.charCodeAt();
      return ele.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(value + n - 26)
        : String.fromCharCode(value + n);
    })
    .join("");
}
