// --- DOM SETUP ---
// Create buttons and result display elements
const choices = ['rock', 'paper', 'scissors'];
const container = document.createElement('div');
container.id = 'game-container';

const resultDiv = document.createElement('div');
resultDiv.id = 'result';
container.appendChild(resultDiv);

const scoreDiv = document.createElement('div');
scoreDiv.id = 'score';
container.appendChild(scoreDiv);

choices.forEach((choice) => {
	const btn = document.createElement('button');
	btn.textContent = choice.charAt(0).toUpperCase() + choice.slice(1);
	btn.addEventListener('click', () => playRound(choice, getComputerChoice()));
	container.appendChild(btn);
});

document.body.appendChild(container);

// --- GAME LOGIC ---

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

// Randomly returns 'rock', 'paper', or 'scissors'
function getComputerChoice() {
	const randomNum = Math.floor(Math.random() * 3);
	if (randomNum === 0) return 'rock';
	if (randomNum === 1) return 'paper';
	return 'scissors';
}

// Play a single round and update the DOM
function playRound(humanChoice, computerChoice) {
	if (gameOver) return; // Stop if game is over

	let roundResult = '';
	if (humanChoice === computerChoice) {
		roundResult = `It's a tie! Both chose ${humanChoice}.`;
	} else if (
		(humanChoice === 'rock' && computerChoice === 'scissors') ||
		(humanChoice === 'paper' && computerChoice === 'rock') ||
		(humanChoice === 'scissors' && computerChoice === 'paper')
	) {
		humanScore++;
		roundResult = `You win! ${capitalize(humanChoice)} beats ${computerChoice}.`;
	} else {
		computerScore++;
		roundResult = `You lose! ${capitalize(computerChoice)} beats ${humanChoice}.`;
	}

	updateDisplay(roundResult);

	// Check for winner
	if (humanScore === 5 || computerScore === 5) {
		gameOver = true;
		if (humanScore > computerScore) {
			updateDisplay('Congratulations! You won the game!', true);
		} else {
			updateDisplay('Sorry, you lost the game.', true);
		}
	}
}

// Helper to update the result and score display
function updateDisplay(message, isFinal = false) {
	resultDiv.textContent = message;
	scoreDiv.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
	if (isFinal) {
		// Optionally, disable buttons or show a reset button here
		const buttons = container.querySelectorAll('button');
		buttons.forEach((btn) => (btn.disabled = true));
	}
}

// Helper to capitalize first letter
function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

/*
  --- EXPLANATION OF TOPICS ---
  - DOM manipulation: Creating and updating HTML elements with JavaScript.
  - Event listeners: Reacting to user clicks.
  - Refactoring: Changing code structure to fit new requirements.
  - Game state: Using variables to track scores and game over.
*/
