let patterns = [
    // Beginner Patterns
    { image: "assets/images/double_top.jpg", question: "What pattern is shown?", options: ["Double Top", "Triple Bottom", "Head and Shoulders", "Symmetrical Triangle"], correct: "Double Top", explanation: "A Double Top is a bearish reversal pattern with two peaks at roughly the same price level, indicating potential downward movement after breaking the neckline." },
    { image: "assets/images/double_bottom.jpg", question: "What pattern is shown?", options: ["Double Bottom", "Cup and Handle", "Flag", "Triple Top"], correct: "Double Bottom", explanation: "A Double Bottom is a bullish reversal pattern with two troughs at similar levels, suggesting an upward move after breaking resistance." },
    { image: "assets/images/head_and_shoulders.jpg", question: "What pattern is shown?", options: ["Double Bottom", "Head and Shoulders", "Pennant", "Rising Wedge"], correct: "Head and Shoulders", explanation: "A Head and Shoulders pattern is a bearish reversal pattern with a higher peak (head) flanked by two lower peaks (shoulders), signaling a trend reversal." },
    { image: "assets/images/inverse_head_and_shoulders.jpg", question: "What pattern is shown?", options: ["Inverse Heads and Shoulders", "Triple Top", "Rectangle", "Wedge"], correct: "Inverse Heads and Shoulders", explanation: "An Inverse Head and Shoulders is a bullish reversal pattern with a deeper trough (head) between two shallower troughs (shoulders), indicating an upward trend after breakout." },
    { image: "assets/images/triple_top.jpg", question: "What pattern is shown?", options: ["Triple Top", "Double Bottom", "Flag", "Triangle"], correct: "Triple Top", explanation: "A Triple Top is a bearish reversal pattern with three peaks at similar levels, suggesting a downturn after breaking support." },
    { image: "assets/images/triple_bottom.jpg", question: "What pattern is shown?", options: ["Triple Bottom", "Head and Shoulders", "Pennant", "Double Top"], correct: "Triple Bottom", explanation: "A Triple Bottom is a bullish reversal pattern with three troughs at similar levels, indicating an upward move after resistance breaks." },
    { image: "assets/images/rectangle.jpg", question: "What pattern is shown?", options: ["Rectangle", "Wedge", "Flag", "Cup and Handle"], correct: "Rectangle", explanation: "A Rectangle is a continuation pattern with horizontal support and resistance lines, suggesting the trend continues after breakout." },
    { image: "assets/images/ascending_triangle.jpg", question: "What pattern is shown?", options: ["Ascending Triangle", "Double Top", "Pennant", "Falling Wedge"], correct: "Ascending Triangle", explanation: "An Ascending Triangle is a bullish pattern with a flat resistance line and rising support, indicating an upward breakout." },
    { image: "assets/images/descending_triangle.jpg", question: "What pattern is shown?", options: ["Descending Triangle", "Triple Bottom", "Symmetrical Triangle", "Rising Wedge"], correct: "Descending Triangle", explanation: "A Descending Triangle is a bearish pattern with a flat support line and declining resistance, suggesting a downward breakout." },
    { image: "assets/images/symmetrical_triangle.jpg", question: "What pattern is shown?", options: ["Symmetrical Triangle", "Double Top", "Flag", "Head and Shoulders"], correct: "Symmetrical Triangle", explanation: "A Symmetrical Triangle is a neutral pattern with converging trendlines, signaling a breakout in the direction of the prior trend." },
    // Intermediate Patterns
    { image: "assets/images/flag.jpg", question: "What pattern is shown?", options: ["Flag", "Wedge", "Rectangle", "Elliott Wave"], correct: "Flag", explanation: "A Flag is a continuation pattern resembling a small parallelogram against the trend, often following a sharp price move, indicating the trend will resume." },
    { image: "assets/images/pennant.jpg", question: "What pattern is shown?", options: ["Pennant", "Double Bottom", "Rising Wedge", "Triple Top"], correct: "Pennant", explanation: "A Pennant is a continuation pattern with converging trendlines after a strong move, resembling a small triangle, suggesting trend continuation." },
    { image: "assets/images/rising_wedge.jpg", question: "What pattern is shown?", options: ["Rising Wedge", "Descending Triangle", "Cup and Handle", "Head and Shoulders"], correct: "Rising Wedge", explanation: "A Rising Wedge is a bearish pattern with upward-sloping converging trendlines, typically leading to a downward breakout." },
    { image: "assets/images/falling_wedge.jpg", question: "What pattern is shown?", options: ["Falling Wedge", "Symmetrical Triangle", "Flag", "Triple Bottom"], correct: "Falling Wedge", explanation: "A Falling Wedge is a bullish pattern with downward-sloping converging trendlines, indicating an upward breakout." },
    { image: "assets/images/cup_and_handle.jpg", question: "What pattern is shown?", options: ["Cup and Handle", "Double Top", "Rectangle", "Pennant"], correct: "Cup and Handle", explanation: "A Cup and Handle is a bullish continuation pattern with a rounded bottom (cup) followed by a small consolidation (handle), signaling an upward move." },
    { image: "assets/images/rounding_bottom.jpg", question: "What pattern is shown?", options: ["Rounding Bottom", "Triple Top", "Wedge", "Flag"], correct: "Rounding Bottom", explanation: "A Rounding Bottom is a bullish reversal pattern with a gradual U-shaped curve, indicating a shift from downtrend to uptrend." },
    { image: "assets/images/rounding_top.jpg", question: "What pattern is shown?", options: ["Rounding Top", "Double Bottom", "Pennant", "Rectangle"], correct: "Rounding Top", explanation: "A Rounding Top is a bearish reversal pattern with a gradual inverted U-shape, signaling a shift from uptrend to downtrend." },
    { image: "assets/images/broadening_wedge.jpg", question: "What pattern is shown?", options: ["Broadening Wedge", "Symmetrical Triangle", "Flag", "Cup and Handle"], correct: "Broadening Wedge", explanation: "A Broadening Wedge is a reversal or continuation pattern with diverging trendlines, often indicating increased volatility and a potential trend change." },
    { image: "assets/images/channel_up.jpg", question: "What pattern is shown?", options: ["Channel Up", "Descending Triangle", "Wedge", "Triple Top"], correct: "Channel Up", explanation: "A Channel Up is a bullish continuation pattern with parallel upward-sloping trendlines, suggesting the uptrend persists." },
    { image: "assets/images/channel_down.jpg", question: "What pattern is shown?", options: ["Channel Down", "Ascending Triangle", "Flag", "Double Bottom"], correct: "Channel Down", explanation: "A Channel Down is a bearish continuation pattern with parallel downward-sloping trendlines, indicating the downtrend continues." },
    // Advanced Patterns
    { image: "assets/images/elliott_wave.jpg", question: "What pattern is shown?", options: ["Elliott Wave", "Gartley", "Bat", "Triple Bottom"], correct: "Elliott Wave", explanation: "An Elliott Wave is a complex pattern based on repetitive wave cycles (5 impulse waves and 3 corrective waves), used to predict market trends." },
    { image: "assets/images/gartley.jpg", question: "What pattern is shown?", options: ["Butterfly", "Gartley", "Crab", "Flag"], correct: "Gartley", explanation: "The Gartley pattern is a harmonic pattern with specific Fibonacci retracement levels (e.g., 61.8% of XA), indicating potential reversal zones." },
    { image: "assets/images/bat.jpg", question: "What pattern is shown?", options: ["Bat", "Cypher", "Wedge", "Rectangle"], correct: "Bat", explanation: "The Bat pattern is a harmonic pattern with a deeper retracement (88.6% of XA leg), signaling a precise reversal point." },
    { image: "assets/images/butterfly.jpg", question: "What pattern is shown?", options: ["Butterfly", "Gartley", "Pennant", "Triple Top"], correct: "Butterfly", explanation: "The Butterfly pattern is a harmonic pattern with an extended retracement (127% or 161.8% of XA), indicating a strong reversal." },
    { image: "assets/images/crab.jpg", question: "What pattern is shown?", options: ["Crab", "Bat", "Flag", "Channel Up"], correct: "Crab", explanation: "The Crab pattern is a harmonic pattern with an extreme retracement (161.8% of XA), pinpointing high-probability reversal zones." },
    { image: "assets/images/cypher.jpg", question: "What pattern is shown?", options: ["Cypher", "Butterfly", "Rectangle", "Wedge"], correct: "Cypher", explanation: "The Cypher pattern is a harmonic pattern with a unique structure (78.6% retracement of XC), signaling potential reversals." },
    { image: "assets/images/abcd.jpg", question: "What pattern is shown?", options: ["AB=CD", "Elliott Wave", "Flag", "Triple Bottom"], correct: "AB=CD", explanation: "The AB=CD pattern is a harmonic pattern where the length of AB equals CD, often aligning with Fibonacci levels, indicating a reversal or continuation." },
    { image: "assets/images/shark.jpg", question: "What pattern is shown?", options: ["Shark", "Gartley", "Pennant", "Channel Down"], correct: "Shark", explanation: "The Shark pattern is a harmonic pattern with a 113%-161.8% extension of XA, suggesting a reversal after a sharp move." },
    { image: "assets/images/three_drives.jpg", question: "What pattern is shown?", options: ["Three Drives", "Bat", "Wedge", "Rectangle"], correct: "Three Drives", explanation: "The Three Drives pattern is a reversal pattern with three consecutive peaks or troughs at Fibonacci levels (127% or 161.8%), signaling exhaustion." },
    { image: "assets/images/wolfe_wave.jpg", question: "What pattern is shown?", options: ["Wolfe Wave", "Crab", "Flag", "Triple Top"], correct: "Wolfe Wave", explanation: "A Wolfe Wave is a complex pattern with five waves forming a wedge, predicting a strong move in the opposite direction upon breakout." }
];

let currentPatternIndex = 0;
let selectedAnswer = null;
let img;
let score = 0;
let totalAttempts = 0;
const maxQuestions = 30; // New constant to limit the game to 30 questions
let questionsCompleted = 0; // New variable to track completed questions

function setup() {
    console.log("Setup running...");
    noCanvas();
    img = loadImage(patterns[currentPatternIndex].image, () => {
        console.log("Initial image loaded: " + patterns[currentPatternIndex].image);
    }, () => {
        console.error("Initial image failed: " + patterns[currentPatternIndex].image);
    });
    createGameUI();
}

function createGameUI() {
    console.log("Creating game UI for pattern: " + patterns[currentPatternIndex].question);
    let container = select('#game-container');
    if (!container) {
        console.error("Error: #game-container not found!");
        return;
    }
    container.html(''); // Clear previous content

    // Score Display
    let scoreDisplay = createP(`Score: ${score} / ${totalAttempts} (${Math.round((score / (totalAttempts || 1)) * 100)}%)`);
    scoreDisplay.parent(container);
    scoreDisplay.style('font-size', '18px');
    scoreDisplay.style('margin-bottom', '10px');

    // Question Counter
    let questionCounter = createP(`Question ${questionsCompleted + 1} of ${maxQuestions}`);
    questionCounter.parent(container);
    questionCounter.style('font-size', '16px');
    questionCounter.style('margin-bottom', '10px');

    // Question
    let question = createP(patterns[currentPatternIndex].question);
    question.parent(container);
    question.style('font-size', '20px');
    question.style('margin-bottom', '20px');

    // Image
    let imgElement = createImg(patterns[currentPatternIndex].image, 'Chart Pattern');
    imgElement.parent(container);
    imgElement.attribute('onerror', 'this.src="assets/images/placeholder.jpg"');
    imgElement.style('max-width', '100%');

    // Options
    let optionsDiv = createDiv('');
    optionsDiv.parent(container);
    patterns[currentPatternIndex].options.forEach(option => {
        let btn = createButton(option);
        btn.parent(optionsDiv);
        btn.mousePressed(() => selectAnswer(option));
    });

    // Feedback and Explanation (hidden initially)
    let feedback = createP('');
    feedback.id('feedback');
    feedback.parent(container);
    feedback.style('font-weight', 'bold');
    feedback.style('margin-top', '10px');
    feedback.style('display', 'none');

    let explanation = createP('');
    explanation.id('explanation');
    explanation.parent(container);
    explanation.style('display', 'none');

    // Navigation and Action Buttons
    let navDiv = createDiv('');
    navDiv.id('nav-buttons');
    navDiv.parent(container);
    navDiv.style('display', 'none');
    navDiv.style('margin-top', '20px');

    // Next Button (shown until game ends)
    if (questionsCompleted < maxQuestions) {
        let nextBtn = createButton('Next Pattern');
        nextBtn.id('next-button');
        nextBtn.parent(navDiv);
        nextBtn.mousePressed(nextPattern);
        nextBtn.style('margin-right', '10px');
    }

    // Play Again Button (shown only when game ends)
    if (questionsCompleted === maxQuestions) {
        let playAgainBtn = createButton('Play Again');
        playAgainBtn.id('play-again-button');
        playAgainBtn.parent(navDiv);
        playAgainBtn.mousePressed(playAgain);
        playAgainBtn.style('margin-right', '10px');
    }

    // Share Button (always available after answer selection)
    let shareBtn = createButton('Share with Friends');
    shareBtn.id('share-button');
    shareBtn.parent(navDiv);
    shareBtn.mousePressed(shareScore);
}

function selectAnswer(answer) {
    if (selectedAnswer) return;
    console.log("Answer selected: " + answer);
    selectedAnswer = answer;
    totalAttempts++;
    let isCorrect = answer === patterns[currentPatternIndex].correct;
    if (isCorrect) score++;

    // Feedback
    let feedback = select('#feedback');
    feedback.html(isCorrect ? "Correct!" : "Incorrect!");
    feedback.style('display', 'block');
    feedback.style('color', isCorrect ? '#00cc99' : '#ff3366');

    // Explanation
    let explanation = select('#explanation');
    explanation.html(patterns[currentPatternIndex].explanation);
    explanation.style('display', 'block');
    explanation.style('color', '#ccc');

    // Show Navigation Buttons
    let navDiv = select('#nav-buttons');
    navDiv.style('display', 'flex');

    // Automatically move to next pattern after 6 seconds, if not at game end
    if (questionsCompleted < maxQuestions) {
        setTimeout(() => {
            nextPattern();
        }, 6000); // 6000 milliseconds = 6 seconds
    }
}

function nextPattern() {
    console.log("Moving to next pattern...");
    questionsCompleted++; // Increment completed questions
    if (questionsCompleted < maxQuestions) {
        currentPatternIndex = (currentPatternIndex + 1) % patterns.length;
        selectedAnswer = null;
        img = loadImage(patterns[currentPatternIndex].image, () => {
            console.log("Next image loaded: " + patterns[currentPatternIndex].image);
            createGameUI();
        }, () => {
            console.error("Next image failed: " + patterns[currentPatternIndex].image);
            createGameUI();
        });
    } else {
        console.log("Game ended after 30 questions.");
        createGameUI(); // Update UI to show final state with Play Again button
    }
}

function playAgain() {
    console.log("Resetting game...");
    currentPatternIndex = 0;
    score = 0;
    totalAttempts = 0;
    questionsCompleted = 0; // Reset completed questions
    selectedAnswer = null;
    img = loadImage(patterns[currentPatternIndex].image, () => {
        console.log("Game reset, image loaded: " + patterns[currentPatternIndex].image);
        createGameUI();
    }, () => {
        console.error("Reset image failed: " + patterns[currentPatternIndex].image);
        createGameUI();
    });
}

function generateShareText(score, totalAttempts, percentage) {
    return `🎯 I scored ${score}/${totalAttempts} (${percentage}%) in Chart Masters! Think you can beat my score? Take the challenge! #StockMarketCrorepati #FinancialLiteracy`;
}

function shareScore() {
    // Calculate correct percentage based on actual attempts
    const percentage = Math.round((score / totalAttempts) * 100);
    const shareText = generateShareText(score, totalAttempts, percentage);
    const url = window.location.href;
    
    // Create share area if it doesn't exist
    let shareArea = select('#share-area');
    if (!shareArea) {
        shareArea = createDiv('');
        shareArea.id('share-area');
        shareArea.parent(select('#game-container'));
        shareArea.style('margin-top', '15px');
    } else {
        shareArea.html(''); // Clear previous content
    }
    
    // Create share buttons
    let whatsAppBtn = createButton('Share on WhatsApp');
    whatsAppBtn.parent(shareArea);
    whatsAppBtn.class('share-button');
    whatsAppBtn.mousePressed(() => shareToWhatsApp(shareText, url));
    
    let twitterBtn = createButton('Share on Twitter');
    twitterBtn.parent(shareArea);
    twitterBtn.class('share-button');
    twitterBtn.mousePressed(() => shareToTwitter(shareText, url));
    
    let facebookBtn = createButton('Share on Facebook');
    facebookBtn.parent(shareArea);
    facebookBtn.class('share-button');
    facebookBtn.mousePressed(() => shareToFacebook(url));
    
    // Add confirmation message area
    let confirmMsg = createP('');
    confirmMsg.id('share-confirmation');
    confirmMsg.parent(shareArea);
}

function shareToWhatsApp(shareText, url) {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + url)}`;
    window.open(whatsappUrl, '_blank');
    updateShareConfirmation('Shared to WhatsApp!');
}

function shareToTwitter(shareText, url) {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
    updateShareConfirmation('Shared to Twitter!');
}

function shareToFacebook(url) {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank');
    updateShareConfirmation('Shared to Facebook!');
}

function updateShareConfirmation(message) {
    let confirmation = select('#share-confirmation');
    if (confirmation) {
        confirmation.html(message);
        confirmation.style('color', '#00cc99');
        confirmation.style('margin-top', '10px');
        confirmation.style('font-weight', 'bold');
        
        // Clear message after 3 seconds
        setTimeout(() => {
            confirmation.html('');
        }, 3000);
    }
}