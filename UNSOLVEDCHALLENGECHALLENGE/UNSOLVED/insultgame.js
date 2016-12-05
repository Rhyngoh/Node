// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your propmt. 

// ===========================================================================================================
var userHealth = 100;
var enemyHealth = 20;
var inquirer = require("inquirer");
var kickCounter = 0;
var insultArray = ["Run along and slurp a bowl of cocksmilk, you son of a bitch.", "My version of a flawless Sunday night is seeing an ape wreck your taint.", "Look pissfalcon, I'm going to lay it out for you. You either douche the sand out of your vagina, or I will literally shove a pineapple up your ass.", "I'd rather masturbate with a shotgun to dead children than see you naked.", 
"I'd rather masturbate with a riding crop to a spelling bee than hang out with you.", "I fervently hope a journalist fists you in the back of a volkswagen, you christian horse fucker.", "I will pummel you square in your wretched hog funnel, you felch swilling whore.", "Thy wife's a hobby-horse, thou obnoxious shard-borne apple-john.", 
"I'm not saying you're a slut, but if your flange had a password, it would be qwerty.", "You are unsightly, filthy, mentally deficient, you smell and your existence depresses me.", "When compared to you, getting a blowjob from a crocodile sounds pretty good.", "If the tales are true, you lack the ability to go to the bathroom by yourself. It's most likely because you have diabetes.", 
"When compared to you, launching myself off a cliff isn't so bad.", "The way I understand it, there is just no way I would come within ten feet of your stinking cooter cleavage.", "In comparison with you, cancer isn't so bad.", "Eat a satchel of bloody dicks.", "Some of us are having an immensely challenging time thinking about a more terrible fate than living with you.", 
"I will kick you right in your festering stench trench, you rotting fucker.", "You're the first twat I've ever wished to do away with.", "For the love of god why do you smell like you live in a ditch, did you move in with tubgirl?", "I don't dislike you because you're mentally deficient or because you're repelling, I dislike you because you drink Bud Light.", 
"Every time I see a cheerleader take a humungous stinking poop in a microwave, it reminds me of you.", "I would assassinate you, but then the title of 'Most humpbacked shitfalcon alive' would pass on to someone else.", "For the love of God simply stop being a trashy lipstick whore for at least a couple weeks.", "You will never stop being a piece of shit.", "I pray that you get polio.", 
"OK shitdragon, this is where we're at. You either cut that shit out, or I'm going to piss inside you.", "Want to hear something that would make me terribly elated? You being brutally fucked by an angry mob.", "Hurl thyself from the highest tower, thou unwashed hell-bound execrable wretch."];
var yourInsults = ["Yo momma is so fat, I took a picture of her last Christmas and it's still printing.", "Yo momma is so fat when she got on the scale it said, 'I need your weight not your phone number.'", "Yo momma is so fat that when she went to the beach a whale swam up and sang, 'We are family, even though you're fatter than me.'", 
"Yo mamma is so ugly when she tried to join an ugly contest they said, 'Sorry, no professionals.'", "Yo momma's so fat and old when God said, 'Let there be light,' he asked your mother to move out of the way.", "Yo momma's so fat, that when she fell, no one was laughing but the ground was cracking up.", "Yo momma is so fat when she sat on WalMart, she lowered the prices.", 
"Your momma is so ugly she made One Direction go another direction.", "Yo momma is so stupid when an intruder broke into her house, she ran downstairs, dialed 9-1-1 on the microwave, and couldn't find the 'CALL' button.", "Yo momma's so stupid, she put two quarters in her ears and thought she was listening to 50 Cent.", "Yo momma is so fat that Dora can't even explore her!"];
function startGame(){
	inquirer.prompt([
{
	type: "list",
    message: "Try to stay alive! Guess a number between [1-5] (arrow keys)",
    choices: ["1", "2", "3", "4", "5"],
    name: "guessAnswer"
}
]).then(function(user) {
var randomDamage = Math.floor(Math.random() * 5 + 1);
var randomNumber = Math.floor(Math.random() * 5 + 1);
var randomInsult = Math.floor(Math.random() * insultArray.length);
var counterInsult = Math.floor(Math.random() * yourInsults.length);
 // console.log(JSON.stringify(user, null, 2));
if(parseInt(user.guessAnswer) === randomNumber){
	kickCounter = 0;
	enemyHealth -= randomDamage;
	console.log("English man rolled " + randomNumber);
	console.log("You guessed correct! You spout indecencies at the English man.");
	console.log("You have " + userHealth + " health left. The English man has " + enemyHealth + " health left.");
	if(enemyHealth <= 0){
		console.log("//=================GAME OVER=====================//");
		console.log("The English man begins crying like a little baby and runs off to his mommy.");
		console.log("You've bested the English man in a duel of insults.");
		console.log("Congratulations chap! You have the dirtiest mouth.");
		console.log("//==================YOU WIN======================//");
		return false;
	}
	console.log("//===============================================//");
	console.log("");
	console.log(yourInsults[counterInsult]);
	console.log("");
	console.log("//===============================================//");
	startGame();
} else{
	kickCounter++;
	userHealth -= randomNumber;
	console.log("English man rolled " + randomNumber);
	console.log("You guessed wrong. Prepare yourself for the foul onslaught the English man has in store!");
	console.log("You have " + userHealth + " health left. The English man has " + enemyHealth + " health left.");
	if(userHealth <= 0){
		console.log("//=================GAME OVER=====================//");
		console.log("The English man shouts, 'ENOUGH WITH THE MOTHER JOKES YOU IMPUDENT SWINE, LEARN TO INSULT LIKE A TRUE GENTLEMAN!'");
		console.log("You've been insulted so hard that you begin to contemplate your existence and reason to live.");
		console.log("");
		console.log("//==================YOU LOSE======================//");
		
		return false;
	}
	if(kickCounter === 2){
		console.log("//===============================================//");
		console.log("");
		console.log("I find you so obnoxious that I find it hard to believe anybody wants to be near you.");
		console.log("");
		console.log("//===============================================//");
		
	}
	if(kickCounter === 3){
		console.log("//===============================================//");
		console.log("");
		console.log("Why aren't you fighting back you dirty wench?");
		console.log("");
		console.log("//===============================================//");
		
	}
	if(kickCounter > 3){
		console.log("//========TAKE YOUR INSULT LIKE A MAN============//");
		console.log("");
		console.log(insultArray[randomInsult]);
		console.log("");
		console.log("//===============================================//");
	}
	startGame();
}
debugger;
});
}
startGame();