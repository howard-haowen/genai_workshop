const statusEl = document.getElementById('status');
const boardEl = document.getElementById('board');
const resetBtn = document.getElementById('reset');

// 符號組合對應表
const symbolSets = {
  XO: ['X', 'O'],
  DOGCAT: ['🐕', '🐈'],
  SUNMOON: ['☀️', '🌙'],
  BACTERIAUNIVERSE: ['🦠', '🌌'],
  NONBIOBIO: ['🪨', '🧬'],
  CELLVASCULAR: ['🧫', '🌿'],
};

let currentSymbols = symbolSets.XO;
let board = Array(9).fill('');
let currentPlayer = 0;
let gameActive = false;
let timer = null;
let undoUsed = [false, false];
let history = [];
let stats = { total: 0, win: [0, 0] };

// 讀取統計數據
function loadStats() {
  const s = localStorage.getItem('ttt_stats');
  if (s) stats = JSON.parse(s);
}
function saveStats() {
  localStorage.setItem('ttt_stats', JSON.stringify(stats));
}

// 顯示統計數據
function showStats(winner) {
  document.getElementById('stats').style.display = '';
  const total = stats.total;
  const winA = stats.win[0];
  const winB = stats.win[1];
  const rateA = total ? ((winA / total) * 100).toFixed(1) : 0;
  const rateB = total ? ((winB / total) * 100).toFixed(1) : 0;
  document.getElementById('statsContent').innerHTML =
    `<p>玩家1(${currentSymbols[0]}) 勝率：${rateA}% (${winA}/${total})</p>
     <p>玩家2(${currentSymbols[1]}) 勝率：${rateB}% (${winB}/${total})</p>
     <p>總遊戲數：${total}</p>
     <p>本局勝者：${winner !== null ? currentSymbols[winner] : '平手'}</p>`;
}

// 倒數計時
function startTimer() {
  clearTimer();
  let remain = 5;
  updateStatus();
  timer = setInterval(() => {
    remain--;
    updateStatus(remain);
    if (remain <= 0) {
      clearTimer();
      gameActive = false;
      const loser = currentPlayer;
      const winner = 1 - currentPlayer;
      stats.total++;
      stats.win[winner]++;
      saveStats();
      updateStatus(0, `玩家${currentSymbols[loser]}超時，${currentSymbols[winner]}獲勝！`);
      showStats(winner);
      document.getElementById('undo').disabled = true;
      disableBoard();
    }
  }, 1000);
}
function clearTimer() {
  if (timer) clearInterval(timer);
  timer = null;
}

// 更新狀態顯示
function updateStatus(remain, msg) {
  const status = document.getElementById('status');
  if (msg) {
    status.textContent = msg;
    return;
  }
  if (gameActive) {
    status.textContent = `目前玩家：${currentSymbols[currentPlayer]}${remain !== undefined ? `（剩餘${remain}秒）` : ''}`;
  } else {
    status.textContent = '遊戲未開始';
  }
}

// 開始遊戲
document.getElementById('startGame').onclick = () => {
  const sel = document.getElementById('symbolSet').value;
  currentSymbols = symbolSets[sel];
  resetGame();
};

// 重設遊戲
function resetGame() {
  board = Array(9).fill('');
  currentPlayer = 0;
  gameActive = true;
  undoUsed = [false, false];
  history = [];
  document.querySelectorAll('.cell').forEach(cell => {
    cell.textContent = '';
    cell.disabled = false;
  });
  document.getElementById('undo').disabled = false;
  document.getElementById('stats').style.display = 'none';
  updateStatus();
  clearTimer();
  startTimer();
}

// 點擊格子
document.querySelectorAll('.cell').forEach(cell => {
  cell.onclick = () => {
    if (!gameActive) return;
    const idx = +cell.dataset.index;
    if (board[idx]) return;
    board[idx] = currentSymbols[currentPlayer];
    cell.textContent = currentSymbols[currentPlayer];
    history.push({ idx, player: currentPlayer });
    if (checkWin(currentSymbols[currentPlayer])) {
      gameActive = false;
      stats.total++;
      stats.win[currentPlayer]++;
      saveStats();
      updateStatus(undefined, `玩家${currentSymbols[currentPlayer]}獲勝！`);
      showStats(currentPlayer);
      clearTimer();
      document.getElementById('undo').disabled = true;
      disableBoard();
      return;
    }
    if (board.every(v => v)) {
      gameActive = false;
      stats.total++;
      saveStats();
      updateStatus(undefined, '平手！');
      showStats(null);
      clearTimer();
      document.getElementById('undo').disabled = true;
      disableBoard();
      return;
    }
    currentPlayer = 1 - currentPlayer;
    document.getElementById('undo').disabled = undoUsed[currentPlayer];
    startTimer();
  };
});

// 悔棋功能
document.getElementById('undo').onclick = () => {
  if (!gameActive || undoUsed[currentPlayer] || history.length === 0) return;
  const last = history[history.length - 1];
  if (last.player !== currentPlayer) return;
  board[last.idx] = '';
  document.querySelector(`.cell[data-index="${last.idx}"]`).textContent = '';
  history.pop();
  undoUsed[currentPlayer] = true;
  document.getElementById('undo').disabled = true;
  updateStatus();
};

// 禁用棋盤
function disableBoard() {
  document.querySelectorAll('.cell').forEach(cell => cell.disabled = true);
}

// 檢查勝利
function checkWin(symbol) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  return lines.some(line => line.every(i => board[i] === symbol));
}

// 重新開始
resetBtn.addEventListener('click', resetGame);

// 初始化
window.onload = () => {
  loadStats();
  resetGame();
};
