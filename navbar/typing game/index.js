window.addEventListener('load', init);

// Globals

// Available Levels
const levels = {
  easy: 10,
  medium: 5,
  hard: 3
};

// To change level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highscoreDisplay = document.querySelector('#highScore');

const words = [
  'Hat',
  'River',
  'Lucky',
  'Baby',
  'Girl',
  'Dog',
  'Apple',
  'mum',
  'banana',
  'Ball',
  'Bid',
  'hero',
  'Boat',
  'Big',
  'Bell',
  'Bag',
  'Bus',
  'Chicken',
  'Chips',
  'Hen',
  'Dish',
  'Dove',
  'Monkey',
  'King',
  'Zebra',
  'Cat',
  'Draw',
  'Door',
  'Frog'
];

// Initialize Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  
  // highScore based on score value for Session Storage
  if (typeof sessionStorage['highScore'] === 'undefined' || score > sessionStorage['highScore']) {
    sessionStorage['highScore'] = score;
  } else {
    sessionStorage['highScore'] = sessionStorage['highScore'];
  }

  // Prevent display of High Score: -1
  if (sessionStorage['highScore'] >= 0) {
  highscoreDisplay.innerHTML = sessionStorage['highScore'];
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}