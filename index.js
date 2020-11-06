// App entry point

const readline = require("readline");
const Pacman = require("./lib/Pacman");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Unit Testing
// Refactor Code

// Bonus
// Create gui with Vue or React etc.

// Main Game Class

// Start the game
// Accept user input for initial place command for X, Y and F coordinate.
// Ask user for next command which can be Place, Move, Left, Right and Report.
// Should print current coordinate after each command.

function main() {
  let p = new Pacman();

  rl.setPrompt("Enter your command: ");
  rl.prompt();

  rl.on("line", (line) => {
    let [command, coordinates] = line.toUpperCase().trim().split(" ");

    switch (command) {
      case "PLACE":
        if (coordinates) {
          let [x, y, f] = coordinates.split(",");
          p.place(x, y, f);
        }
        break;
      case "MOVE":
        p.move();
        break;
      case "LEFT":
        p.rotateLeft();
        break;
      case "RIGHT":
        p.rotateRight();
        break;
      case "REPORT":
        let result = p.report();
        if (result) {
          console.log(`OUTPUT: ${result}`);
        }
        break;
      default:
        console.log("Please enter a valid command.");
    }
    rl.prompt();
  }).on("close", () => {
    console.log("Thank you for playing!");
    process.exit(0);
  });
}

main();

module.exports = main;
