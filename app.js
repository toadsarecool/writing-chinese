// Track currently selected deck and character
let selectedDeckIndex = 2; // Set default deck to radicals
let currentCharacterIndex = 0;
let pinyinVisible = false;

// Update character display based on selected deck
function updateCharacterDisplay() {
    const selectedDeck = decks[selectedDeckIndex];
    if (!selectedDeck || !selectedDeck.characters || selectedDeck.characters.length === 0) return;

    const character = selectedDeck.characters[currentCharacterIndex];
    const totalCharacters = selectedDeck.characters.length;

    // Update character
    const characterDisplay = document.getElementById('character-display');
    if (characterDisplay) {
        characterDisplay.textContent = character.char;
    }

    // Update pinyin
    const pinyinDisplay = document.getElementById('pinyin-display');
    if (pinyinDisplay) {
        pinyinDisplay.textContent = character.pinyin;
    }

    // Update meaning
    const meaningDisplay = document.getElementById('meaning-display');
    if (meaningDisplay) {
        meaningDisplay.textContent = character.meaning;
    }

    // Update progress
    const progressDisplay = document.getElementById('progress-display');
    if (progressDisplay) {
        progressDisplay.textContent = `${currentCharacterIndex + 1}/${totalCharacters}`;
    }

    // Clear canvas when character changes
    if (typeof window.clearCanvas === 'function') {
        window.clearCanvas();
    }
}

// Load decks and populate the menu
function loadDecks() {
    const decksListContainer = document.getElementById('decks-list');
    if (!decksListContainer) return;

    decksListContainer.innerHTML = '';

    decks.forEach((deck, index) => {
        const deckItem = document.createElement('div');
        deckItem.className = 'mb-1 h-6';
        deckItem.style.cursor = 'pointer';

        const deckText = `${index + 1}. ${deck.name}`;
        const indicator = index === selectedDeckIndex ? ' <-' : '';

        deckItem.textContent = deckText + indicator;

        // Add click handler to select deck
        deckItem.addEventListener('click', () => {
            selectedDeckIndex = index;
            currentCharacterIndex = 0; // Reset to first character when switching decks
            loadDecks(); // Re-render to update indicators
            updateCharacterDisplay(); // Update character display
        });

        decksListContainer.appendChild(deckItem);
    });
}

// Navigate to next character
function nextCharacter() {
    const selectedDeck = decks[selectedDeckIndex];
    if (!selectedDeck || !selectedDeck.characters) return;

    const totalCharacters = selectedDeck.characters.length;
    if (currentCharacterIndex < totalCharacters - 1) {
        currentCharacterIndex++;
        updateCharacterDisplay();
    }
}

// Navigate to previous character
function previousCharacter() {
    if (currentCharacterIndex > 0) {
        currentCharacterIndex--;
        updateCharacterDisplay();
    }
}

// Toggle pinyin visibility
function togglePinyin() {
    const pinyinContainer = document.getElementById('pinyin-container');
    const meaningContainer = document.getElementById('meaning-container');
    const showHideButton = document.getElementById('show-hide-button');

    if (!pinyinContainer || !showHideButton || !meaningContainer) return;

    pinyinVisible = !pinyinVisible;

    if (pinyinVisible) {
        pinyinContainer.style.display = 'block';
        meaningContainer.style.display = 'block';
        showHideButton.textContent = 'hide';
    } else {
        pinyinContainer.style.display = 'none';
        meaningContainer.style.display = 'none';
        showHideButton.textContent = 'show';
    }
}

// Initialize canvas for drawing
function initCanvas() {
    const canvas = document.getElementById('writing-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();

    // Set canvas size to match display size
    canvas.width = 192;
    canvas.height = 192;

    // Draw grid lines
    function drawGrid() {
        ctx.strokeStyle = '#E1030F';
        ctx.lineWidth = 2;

        // Horizontal line (middle)
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        ctx.lineTo(canvas.width, canvas.height / 2);
        ctx.stroke();

        // Vertical line (middle)
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height);
        ctx.stroke();
    }

    drawGrid();

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let currentPressure = 0.5; // Default pressure (0.0 to 1.0)
    let lastTime = 0;
    let lastSpeed = 0;

    // Get coordinates and pressure relative to canvas
    function getCoordinates(e) {
        const rect = canvas.getBoundingClientRect();
        let pressure = 0.5; // Default pressure

        if (e.touches && e.touches[0]) {
            // Touch events - use force/pressure if available
            const touch = e.touches[0];
            pressure = touch.force || touch.pressure || 0.5;
            // Normalize pressure (iOS uses 0-1, some Android uses different ranges)
            if (pressure > 1) pressure = pressure / 10; // Normalize if needed
            if (pressure < 0.1) pressure = 0.1; // Minimum pressure
            if (pressure > 1) pressure = 1; // Maximum pressure

            return {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top,
                pressure: pressure
            };
        } else {
            // Mouse events - simulate pressure based on speed
            const now = Date.now();
            const timeDelta = now - lastTime;

            if (timeDelta > 0 && lastX !== 0 && lastY !== 0) {
                const distance = Math.sqrt(
                    Math.pow(e.clientX - rect.left - lastX, 2) +
                    Math.pow(e.clientY - rect.top - lastY, 2)
                );
                const speed = distance / timeDelta;

                // Map speed to pressure (slower = higher pressure)
                // Clamp speed and invert for pressure
                const normalizedSpeed = Math.min(speed / 2, 1); // Normalize speed
                pressure = Math.max(0.3, 1 - normalizedSpeed * 0.5); // Invert and clamp
            } else {
                pressure = currentPressure; // Use last known pressure
            }

            lastTime = now;

            return {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
                pressure: pressure
            };
        }
    }

    // Start drawing
    function startDrawing(e) {
        e.preventDefault();
        isDrawing = true;
        const coords = getCoordinates(e);
        lastX = coords.x;
        lastY = coords.y;
        currentPressure = coords.pressure;
        lastTime = Date.now();
    }

    // Draw
    function draw(e) {
        if (!isDrawing) return;
        e.preventDefault();

        const coords = getCoordinates(e);
        currentPressure = coords.pressure;

        // Map pressure to line width (2px to 8px)
        const minWidth = 2;
        const maxWidth = 8;
        const lineWidth = minWidth + (currentPressure * (maxWidth - minWidth));

        // Map pressure to opacity (0.7 to 1.0)
        const opacity = 0.7 + (currentPressure * 0.3);

        // Brush-like stroke settings
        ctx.strokeStyle = '#E1030F';
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Use global composite operation for smoother blending
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = opacity;

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();

        // Reset alpha after drawing
        ctx.globalAlpha = 1.0;

        lastX = coords.x;
        lastY = coords.y;
    }

    // Stop drawing
    function stopDrawing() {
        isDrawing = false;
    }

    // Mouse events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    // Touch events
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);
    canvas.addEventListener('touchcancel', stopDrawing);

    // Clear canvas function (can be called when switching characters)
    window.clearCanvas = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid();
    };
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadDecks();
    updateCharacterDisplay();

    // Add event listeners for navigation buttons
    const nextButton = document.getElementById('next-button');
    const backButton = document.getElementById('back-button');

    if (nextButton) {
        nextButton.addEventListener('click', nextCharacter);
    }

    if (backButton) {
        backButton.addEventListener('click', previousCharacter);
    }

    // Add event listener for show/hide button
    const showHideButton = document.getElementById('show-hide-button');
    if (showHideButton) {
        showHideButton.addEventListener('click', togglePinyin);
    }

    // Add event listener for refresh button
    const refreshButton = document.getElementById('refresh-button');
    if (refreshButton) {
        refreshButton.addEventListener('click', () => {
            if (typeof window.clearCanvas === 'function') {
                window.clearCanvas();
            }
        });
    }

    // Initialize canvas
    initCanvas();
});

