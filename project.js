// Step 2: Function to get computer's choice
function getComputerChoice() {
	// Math.random() returns a number between 0 (inclusive) and 1 (exclusive)
	// Multiply by 3 to get a number between 0 and 2.999..., then use Math.floor to get 0, 1, or 2
	const randomNum = Math.floor(Math.random() * 3);
	if (randomNum === 0) {
		return 'rock';
	} else if (randomNum === 1) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

// Step 3: Function to get human's choice
function getHumanChoice() {
	// prompt() asks the user for input (works in browser, not in Node.js)
	// We use .toLowerCase() to make the input case-insensitive
	const choice = prompt('Enter rock, paper, or scissors:').toLowerCase();
	return choice;
}

// Step 4: Score variables (global scope)
let humanScore = 0;
let computerScore = 0;

// Step 5: Function to play a single round
function playRound(humanChoice, computerChoice) {
	// Make humanChoice case-insensitive
	const human = humanChoice.toLowerCase();
	const computer = computerChoice.toLowerCase();

	// Check for a tie
	if (human === computer) {
		console.log(`It's a tie! Both chose ${human}.`);
		return;
	}

	// Check all win/lose conditions
	if (
		(human === 'rock' && computer === 'scissors') ||
		(human === 'paper' && computer === 'rock') ||
		(human === 'scissors' && computer === 'paper')
	) {
		humanScore++;
		console.log(
			`You win! ${human.charAt(0).toUpperCase() + human.slice(1)} beats ${computer}.`
		);
	} else {
		computerScore++;
		console.log(
			`You lose! ${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${human}.`
		);
	}
}

// Step 6: Function to play the whole game (5 rounds)
function playGame() {
	// Reset scores at the start of the game
	humanScore = 0;
	computerScore = 0;

	// Play 5 rounds
	for (let round = 1; round <= 5; round++) {
		console.log(`--- Round ${round} ---`);
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();
		playRound(humanSelection, computerSelection);
		console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
	}

	// Announce the final winner
	console.log('--- Game Over ---');
	if (humanScore > computerScore) {
		console.log('Congratulations! You won the game!');
	} else if (computerScore > humanScore) {
		console.log('Sorry, you lost the game.');
	} else {
		console.log("It's a tie game!");
	}
}

// Start the game
playGame();

/*
  --- EXPLANATION OF TOPICS ---
  - Functions: Blocks of code that perform a task. We use them to organize our logic.
  - Variables: Store data (like scores or choices).
  - Math.random(): Generates random numbers.
  - prompt(): Gets user input (browser only).
  - if/else: Used to make decisions in code.
  - for loop: Repeats code multiple times (for 5 rounds).
  - String methods: .toLowerCase() makes input case-insensitive.
  - console.log(): Prints messages to the console for feedback.
*/
