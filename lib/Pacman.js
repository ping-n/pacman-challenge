// Create Pacman class
// Create game logic such as Place, Move, Facing

/* Commands
Place
Move (Move one step forward)
Left (Change facing direction 90deg to left)
Right (Change facing direction 90deg to right)
Report (Report current X, Y coordinate and current facing)
*/

// Pacman Class
class Pacman {
  constructor() {
    this.x = null;
    this.y = null;
    this.facing = null;
    this.direction = ["NORTH", "EAST", "SOUTH", "WEST"];
  }

  // Check if placement is within the 5x5 grid
  validPlacement(x, y, f) {
    return (
      x >= 0 &&
      x <= 4 &&
      y >= 0 &&
      y <= 4 &&
      this.direction.includes(f.toUpperCase())
    );
  }

  // Placing the pacman on the grid
  place(x, y, f) {
    if (this.validPlacement(x, y, f)) {
      this.x = x;
      this.y = y;
      this.facing = f.toUpperCase();
    }
  }

  // Check if pacman is already placed on the grid
  isPlaced() {
    return this.x !== null && this.y !== null && this.facing !== null;
  }

  // Move pacman coordinate on the grid
  move() {
    if (this.isPlaced) {
      if (this.facing === "NORTH" && this.y < 5) {
        this.y++;
      }

      if (this.facing === "EAST" && this.x < 5) {
        this.x++;
      }

      if (this.facing === "WEST" && this.x > 0) {
        this.x--;
      }

      if (this.facing === "SOUTH" && this.y > 0) {
        this.y--;
      }
    }
  }

  // Rotate pacman facing 90deg left
  rotateLeft() {
    if (this.isPlaced) {
      switch (this.facing) {
        case "NORTH":
          this.facing = this.direction[3];
          break;
        case "EAST":
          this.facing = this.direction[0];
          break;
        case "SOUTH":
          this.facing = this.direction[1];
          break;
        case "WEST":
          this.facing = this.direction[2];
          break;
      }
    }
  }

  // Rotate pacman facing 90deg right
  rotateRight() {
    if (this.isPlaced) {
      switch (this.facing) {
        case "NORTH":
          this.facing = this.direction[1];
          break;
        case "EAST":
          this.facing = this.direction[2];
          break;
        case "SOUTH":
          this.facing = this.direction[3];
          break;
        case "WEST":
          this.facing = this.direction[0];
          break;
      }
    }
  }

  // Report current coordinate to the terminal
  report() {
    if (this.isPlaced()) return `${this.x},${this.y},${this.facing}`;
  }
}

const p = new Pacman();

module.exports = Pacman;
