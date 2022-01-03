// ---- 풀이
function solution(board, moves) {
  let result = [];
  let choicesCount = 0;
  let point = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0 && choicesCount === i) {
        choicesCount++;
        if (result[result.length - 1] === board[j][moves[i] - 1]) {
          result.pop();
          point += 2;
        } else result.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
      }
    }
  }

  return point;
}
