const symbolSets = {
  XO: ['X', 'O'],
  DOGCAT: ['🐕', '🐈'],
  SUNMOON: ['☀️', '🌙']
};

let currentSymbols = symbolSets.XO;
let board = Array(9).fill('');
let currentPlayer = 0; // 0 or 1
let gameActive = false;
let timer = null;
let timeLeft = 20;
let undoAvailable = [true, true];
let history = [];
let stats = [
  { win: 0, lose: 0, total: 0 },
  { win: 0, lose: 0, total: 0 }
];


document.addEventListener('DOMContentLoaded', () => {
  const cells = document.querySelectorAll('.cell');
  const statusDiv = document.getElementById('status');
  const resetBtn = document.getElementById('reset');
  const undoBtn = document.getElementById('undo');
  const symbolSelect = document.getElementById('symbolSet');
  const startGameBtn = document.getElementById('startGame');
  const statsSection = document.getElementById('stats');
  const statsContent = document.getElementById('statsContent');

  function renderBoard() {
    board.forEach((val, i) => {
      cells[i].textContent = val;
      cells[i].disabled = !!val || !gameActive;
    });
  }

  function renderStatus() {
    if (!gameActive) {
      statusDiv.textContent = '請點擊「開始遊戲」';
      return;
    }
    statusDiv.textContent = `目前玩家：${currentSymbols[currentPlayer]}（剩餘 ${timeLeft} 秒）`;
    undoBtn.disabled = !undoAvailable[currentPlayer] || !gameActive;
  }

  function startTurnTimer() {
    clearInterval(timer);
    timeLeft = 20;
    renderStatus();
    timer = setInterval(() => {
      timeLeft--;
      renderStatus();
      if (timeLeft <= 0) {
        clearInterval(timer);
        endGame((currentPlayer + 1) % 2, 'timeout');
      }
    }, 1000);
  }

  function startGame() {
    currentSymbols = symbolSets[symbolSelect.value];
    board = Array(9).fill('');
    currentPlayer = 0;
    gameActive = true;
    undoAvailable = [true, true];
    history = [];
    renderBoard();
    renderStatus();
    statsSection.style.display = 'none';
    undoBtn.disabled = false;
    startTurnTimer();
  }

  function endGame(winner, reason = 'win') {
    gameActive = false;
    clearInterval(timer);
    cells.forEach(cell => cell.disabled = true);
    undoBtn.disabled = true;
    stats[winner].win++;
    stats[(winner + 1) % 2].lose++;
    stats[0].total++;
    stats[1].total++;
    let winIcon = '👑', loseIcon = '😢';
    statusDiv.innerHTML = reason === 'timeout'
      ? `玩家 ${currentSymbols[currentPlayer]} 超時，${currentSymbols[winner]} ${winIcon} 勝，${currentSymbols[(winner + 1) % 2]} ${loseIcon} 敗`
      : `${currentSymbols[winner]} ${winIcon} 勝，${currentSymbols[(winner + 1) % 2]} ${loseIcon} 敗`;
    showStats();
  }

  function showStats() {
    statsSection.style.display = '';
    statsContent.innerHTML = `
      <div>
        <strong>${currentSymbols[0]}</strong>：${stats[0].win} 勝 / ${stats[0].total} 局，勝率 ${(stats[0].total ? (stats[0].win / stats[0].total * 100).toFixed(1) : '0')}%
      </div>
      <div>
        <strong>${currentSymbols[1]}</strong>：${stats[1].win} 勝 / ${stats[1].total} 局，勝率 ${(stats[1].total ? (stats[1].win / stats[1].total * 100).toFixed(1) : '0')}%
      </div>
    `;
  }

  function checkWin() {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (let line of lines) {
      const [a,b,c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return board.every(cell => cell) ? 'draw' : null;
  }

  cells.forEach((cell, idx) => {
    cell.addEventListener('click', () => {
      if (!gameActive || board[idx]) return;
      history.push([...board]);
      board[idx] = currentSymbols[currentPlayer];
      renderBoard();
      let result = checkWin();
      if (result) {
        if (result === 'draw') {
          statusDiv.textContent = '平手！';
          stats[0].total++;
          stats[1].total++;
          showStats();
          gameActive = false;
          clearInterval(timer);
          undoBtn.disabled = true;
        } else {
          let winner = board[idx] === currentSymbols[0] ? 0 : 1;
          endGame(winner);
        }
        return;
      }
      undoAvailable[currentPlayer] = true; // 新回合可悔棋
      currentPlayer = (currentPlayer + 1) % 2;
      startTurnTimer();
    });
  });

  resetBtn.addEventListener('click', startGame);

  undoBtn.addEventListener('click', () => {
    if (!gameActive || !undoAvailable[currentPlayer] || history.length === 0) return;
    board = history.pop();
    renderBoard();
    undoAvailable[currentPlayer] = false;
    renderStatus();
  });

  symbolSelect.addEventListener('change', () => {
    // 僅切換符號，不重置統計
    currentSymbols = symbolSets[symbolSelect.value];
    renderStatus();
    showStats();
  });

  startGameBtn.addEventListener('click', startGame);

  // 初始狀態
  renderBoard();
  renderStatus();
});
