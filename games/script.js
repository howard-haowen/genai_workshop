const statusEl = document.getElementById('status');
const boardEl = document.getElementById('board');
const resetBtn = document.getElementById('reset');

let board;         // 9 格陣列，值為 'X' | 'O' | null
let current;       // 目前玩家 'X' | 'O'
let gameOver;      // 布林

const LINES = [
  [0,1,2],[3,4,5],[6,7,8], // 橫
  [0,3,6],[1,4,7],[2,5,8], // 直
  [0,4,8],[2,4,6]          // 斜
];

init();

resetBtn.addEventListener('click', init);
boardEl.addEventListener('click', onCellClick);

function init() {
  board = Array(9).fill(null);
  current = 'X';
  gameOver = false;
  for (const cell of boardEl.querySelectorAll('.cell')) {
    cell.textContent = '';
    cell.dataset.mark = '';
    cell.disabled = false;
    cell.classList.remove('win');
  }
  setStatus(`目前玩家：${current}`);
}

function onCellClick(e) {
  const btn = e.target.closest('.cell');
  if (!btn || gameOver) return;

  const i = Number(btn.dataset.index);
  if (board[i]) return; // 已下過

  board[i] = current;
  btn.textContent = current;
  btn.dataset.mark = current;

  const result = evaluate();
  if (result.winner) {
    gameOver = true;
    highlight(result.line);
    disableAll();
    setStatus(`玩家 ${result.winner} 獲勝！`);
    return;
  }
  if (result.draw) {
    gameOver = true;
    disableAll();
    setStatus('平手！');
    return;
  }

  current = current === 'X' ? 'O' : 'X';
  setStatus(`目前玩家：${current}`);
}

function evaluate() {
  for (const line of LINES) {
    const [a,b,c] = line;
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return { winner: board[a], line, draw: false };
    }
  }
  if (board.every(Boolean)) return { winner: null, line: null, draw: true };
  return { winner: null, line: null, draw: false };
}

function highlight(line) {
  if (!line) return;
  for (const idx of line) {
    const cell = boardEl.querySelector(`.cell[data-index="${idx}"]`);
    cell.classList.add('win');
  }
}

function disableAll() {
  for (const cell of boardEl.querySelectorAll('.cell')) {
    cell.disabled = true;
  }
}

function setStatus(msg) {
  statusEl.textContent = msg;
}
