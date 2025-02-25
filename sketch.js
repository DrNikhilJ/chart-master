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

    // Question
    let question = createP(patterns[currentPatternIndex].question);
    question.parent(container);
    question.style('font-size', '20px');
    question.style('margin-bottom', '20px');

    // Image (with placeholder until loaded)
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

    // Navigation Buttons (hidden initially)
    let navDiv = createDiv('');
    navDiv.id('nav-buttons');
    navDiv.parent(container);
    navDiv.style('display', 'none');
    navDiv.style('margin-top', '20px');

    let backBtn = createButton('Previous Pattern');
    backBtn.id('back-button');
    backBtn.parent(navDiv);
    backBtn.mousePressed(previousPattern);
    backBtn.style('margin-right', '10px');

    let nextBtn = createButton('Next Pattern');
    nextBtn.id('next-button');
    nextBtn.parent(navDiv);
    nextBtn.mousePressed(nextPattern);
}

function selectAnswer(answer) {
    if (selectedAnswer) return;
    console.log("Answer selected: " + answer);
    selectedAnswer = answer;
    let isCorrect = answer === patterns[currentPatternIndex].correct;

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
}

function nextPattern() {
    console.log("Moving to next pattern...");
    currentPatternIndex = (currentPatternIndex + 1) % patterns.length;
    selectedAnswer = null;
    img = loadImage(patterns[currentPatternIndex].image, () => {
        console.log("Next image loaded: " + patterns[currentPatternIndex].image);
        createGameUI();
    }, () => {
        console.error("Next image failed: " + patterns[currentPatternIndex].image);
        createGameUI();
    });
}

function previousPattern() {
    console.log("Moving to previous pattern...");
    currentPatternIndex = (currentPatternIndex - 1 + patterns.length) % patterns.length;
    selectedAnswer = null;
    img = loadImage(patterns[currentPatternIndex].image, () => {
        console.log("Previous image loaded: " + patterns[currentPatternIndex].image);
        createGameUI();
    }, () => {
        console.error("Previous image failed: " + patterns[currentPatternIndex].image);
        createGameUI();
    });
}