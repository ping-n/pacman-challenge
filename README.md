# Pacman game with Node.js

This application is designed to allow users to be able to move pacman on a 5 x 5 grid.

## Installation

- Please ensure Node.js is installed on your computer.
  - You can install [Node](https://nodejs.org/en/) here.

- Open `terminal`
- `cd` to the directory
- Run `yarn install`
- Once done run `node index.js`

## Running test

- Be on the root of application
- Run `yarn test` inside the terminal
- Will start running a number of unit test in Jest
- Written Unit Tests are located in the lib folder

## Game Instruction

- Start the application through `node index.js`
- This will prompt for user input, the only valid first is PLACE otherwise it will return an error.
- The user will be able to issue other commands such as MOVE, LEFT, RIGHT and REPORT.

- Commands
  - PLACE: The first command which place the Pacman on the grid with valid X, Y and Facing coordinate.
  - MOVE: Move pacman one step forward in the current facing direction within the grid. (Pacman will not move if it is already at the outside edge of the grid)
  - LEFT and RIGHT will rotate Pacman 90 degrees in the specified direction without changing the position of Pacman.
  - REPORT will announce the current coordinate X,Y and F of Pacman.
  
- Pacman that is not on the grid will ignore the MOVE, LEFT, RIGHT and REPORT commands.

- Exit the application with `Ctrl + D` or `Ctrl + C`


## Development

The development process for this application begin with writing up the pseudocode and working out how to solve the problem with best possible solution within 24hrs.

I chose to use object oriented programming by breaking up the Pacman into a class and the main game as a export function. This make the application more modular. Being modular allow me to come back and refactor the code base in the future.

I also wrote unit tests with Jest to ensure that application is functioning as it is intended.

## Techstack

- Javascript (node.js)
- Jest (unit testing)

## Future

- More user friendly error message for invalid movements
- Refactor movement into a separate class
- Adding a grid class to allow user to define their own grid for the Pacman instead of the default 5x5 grid