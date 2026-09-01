let cards = [];
let currentCardIndex = 0;

// DOM Elements
const flashCard = document.querySelector('.flash-card');
const cardFront = document.querySelector('.card-front .content');
const cardFrontEmoji = document.querySelector('.card-front .emoji') || document.querySelector('.emoji');
const cardBack = document.querySelector('.card-back .romanization');
const cardBackDefinition = document.querySelector('.card-back .definition');
const prevButton = document.getElementById('prevCard');
const nextButton = document.getElementById('nextCard');
const cardCount = document.getElementById('cardCount');
const importFileInput = document.getElementById('importFile');
const importBtn = document.getElementById('importBtn');
const exportBtn = document.getElementById('exportBtn');

// Load initial data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        cards = data.cards;
        updateCard();
    })
    .catch(error => console.error('Error loading cards:', error));

// Update card content
function updateCard() {
    cardFront.textContent = cards[currentCardIndex].front;
    cardBack.textContent = cards[currentCardIndex].back.romanization;
    cardBackDefinition.textContent = cards[currentCardIndex].back.definition;
    cardCount.textContent = `${currentCardIndex + 1} / ${cards.length}`;

    // emoji 對照表
    const emojiMap = {
        '狗仔': '🐶',
        '貓仔': '😺',
        '鳥仔': '🐦',
        '魚仔': '🐟',
        '豬仔': '🐷'
    };
    const word = cards[currentCardIndex].front;
    cardFrontEmoji.textContent = emojiMap[word] || '';

    // Update navigation buttons
    prevButton.disabled = currentCardIndex === 0;
    nextButton.disabled = currentCardIndex === cards.length - 1;
}

// Event Listeners
flashCard.addEventListener('click', () => {
    flashCard.classList.toggle('flipped');
});

prevButton.addEventListener('click', () => {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        flashCard.classList.remove('flipped');
        updateCard();
    }
});

nextButton.addEventListener('click', () => {
    if (currentCardIndex < cards.length - 1) {
        currentCardIndex++;
        flashCard.classList.remove('flipped');
        updateCard();
    }
});

// Import functionality
importBtn.addEventListener('click', () => {
    importFileInput.click();
});

importFileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (data.cards && Array.isArray(data.cards)) {
                    cards = data.cards;
                    currentCardIndex = 0;
                    updateCard();
                    alert('單詞匯入成功！');
                } else {
                    alert('檔案格式不正確！');
                }
            } catch (error) {
                alert('無法讀取檔案！');
            }
        };
        reader.readAsText(file);
    }
});

// Export functionality
exportBtn.addEventListener('click', () => {
    const data = JSON.stringify({ cards }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'flash-cards.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});