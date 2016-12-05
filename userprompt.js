// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require("inquirer");
var password = "password";
inquirer.prompt([
{
	type: "input",
    message: "What is your name?",
    name: "name"
},
{
	type: "password",
    message: "Set your password",
    name: "password"
},
{
	type: "list",
    message: "Which Pokemon do you choose?",
    choices: ["Bulbasaur", "Squirtle", "Charmander"],
    name: "pokemon"
},
{
	type: "checkbox",
	message: "Are you male of female?",
	choices: ["male", "female"],
	name: "gender"
},
{
	type: "confirm",
    message: "Are you sure:",
    name: "confirm",
    default: true
}

	]).then(function(user) {


  // If we log that user as a JSON, we can see how it looks.
  console.log(JSON.stringify(user, null, 2));
  if(password === user.password){
  	// If the user confirms, we displays the user's name and pokemon from the answers.
  if (user.confirm) {

    console.log("==============================================");
    console.log("");
    console.log("Welcome " + user.name);
    console.log("Your " + user.pokemon + " is ready for battle!");
    console.log("");
    console.log("==============================================");

  // If the user does not confirm, then a message is provided and the program quits.
  }

  else {

    console.log("");
    console.log("");
    console.log("That's okay " + user.name + ", come again when you are more sure.");
    console.log("");
    console.log("");

  }
} else{
	console.log("Wrong password. Who you is??");
}
  

});