const Pacman = require("./Pacman");

// Pacman Class
describe("Pacman instance", () => {
  let p = new Pacman();
  const direction = ["NORTH", "EAST", "SOUTH", "WEST"];

  it("should initialize with", () => {
    expect(p.x).toBe(null);
    expect(p.y).toBe(null);
    expect(p.facing).toBe(null);
    expect(p.direction).toEqual(expect.arrayContaining(direction));
  });
});

// Placement
describe("Pacman placement", () => {
  it("should be valid with correct coordinates", () => {
    let p = new Pacman();
    p.place(0, 3, "north");
    expect(p.x).toBe(0);
    expect(p.y).toBe(3);
    expect(p.facing).toBe("NORTH");
  });

  it("should be invalid with incorrect coordinates outside grid", () => {
    let p = new Pacman();
    p.place(5, -5, "north");
    expect(p.report()).toBe(undefined);
  });

  it("should not be placed beyond grid width", () => {
    let p = new Pacman();
    p.place(6, 0, "north");
    expect(p.report()).toBe(undefined);
  });

  it("should not be placed beyond grid height", () => {
    let p = new Pacman();
    p.place(0, 6, "north");
    expect(p.report()).toBe(undefined);
  });

  it("should not be placed outside grid with negative coordinates", () => {
    let p = new Pacman();
    p.place(-4, -4, "north");
    expect(p.report()).toBe(undefined);
  });
});

// Pacman movement
describe("Pacman movement", () => {
  it("should be able to move forward one step", () => {
    let p = new Pacman();
    p.place(0, 0, "north");
    p.move(p.isPlaced());
    expect(p.report(p.isPlaced())).toBe("0,1,NORTH");
  });

  it("should be able to move forward multiple steps", () => {
    let p = new Pacman();
    p.place(0, 0, "north");
    p.move(p.isPlaced());
    p.move(p.isPlaced());
    p.move(p.isPlaced());
    expect(p.report(p.isPlaced())).toBe("0,3,NORTH");
  });

  it("should be able to move backward one step", () => {
    let p = new Pacman();
    p.place(3, 3, "south");
    p.move(p.isPlaced());
    expect(p.report(p.isPlaced())).toBe("3,2,SOUTH");
  });

  it("should be able to move east one step", () => {
    let p = new Pacman();
    p.place(3, 3, "EAST");
    p.move(p.isPlaced());
    expect(p.report(p.isPlaced())).toBe("4,3,EAST");
  });

  it("should be able to move west one step", () => {
    let p = new Pacman();
    p.place(3, 3, "west");
    p.move(p.isPlaced());
    expect(p.report(p.isPlaced())).toBe("2,3,WEST");
  });

  // Testing if pacman stay within the grid
  it("should not be able to move north outside grid", () => {
    let p = new Pacman();
    p.place(0, 4, "north");
    p.move(p.isPlaced());
    p.move(p.isPlaced());
    expect(p.report(p.isPlaced())).toBe("0,4,NORTH");
  });

  it("should not be able to move east outside grid", () => {
    let p = new Pacman();
    p.place(4, 4, "east");
    p.move(p.isPlaced());
    p.move(p.isPlaced());
    expect(p.report(p.isPlaced())).toBe("4,4,EAST");
  });

  it("should not be able to move south outside grid", () => {
    let p = new Pacman();
    p.place(0, 1, "south");
    p.move(p.isPlaced());
    p.move(p.isPlaced());
    expect(p.report(p.isPlaced())).toBe("0,0,SOUTH");
  });

  it("should not be able to move west outside grid", () => {
    let p = new Pacman();
    p.place(1, 1, "west");
    p.move(p.isPlaced());
    p.move(p.isPlaced());
    expect(p.report(p.isPlaced())).toBe("0,1,WEST");
  });
});

// Pacman rotation
describe("Pacman facing", () => {
  // rotateLeft
  it("should be rotate left", () => {
    let p = new Pacman();
    p.place(1, 1, "north");
    p.rotateLeft(p.isPlaced());
    expect(p.report(p.isPlaced())).toBe("1,1,WEST");
  });

  it("should be rotate left multiple times", () => {
    let p = new Pacman();

    p.place(1, 1, "north");
    p.rotateLeft(p.isPlaced()); // south
    p.rotateLeft(p.isPlaced()); // west
    p.rotateLeft(p.isPlaced()); // east
    expect(p.report(p.isPlaced())).toBe("1,1,EAST");
  });

  // rotateRight
  it("should be rotate right", () => {
    let p = new Pacman();

    p.place(1, 1, "north");
    p.rotateRight(p.isPlaced());
    expect(p.report(p.isPlaced())).toBe("1,1,EAST");
  });

  it("should be rotate right multiple times", () => {
    let p = new Pacman();

    p.place(1, 1, "north");
    p.rotateRight(p.isPlaced()); // east
    p.rotateRight(p.isPlaced()); // south
    p.rotateRight(p.isPlaced()); // west
    expect(p.report(p.isPlaced())).toBe("1,1,WEST");
  });
});

// Pacman report
describe("Pacman report command", () => {
  it("should be able to report current coordinates", () => {
    let p = new Pacman();

    p.place(4, 3, "south");
    expect(p.report(p.isPlaced())).toBe("4,3,SOUTH");
  });

  it("should be able to report current coordinates after multiple commands", () => {
    let p = new Pacman();

    p.place(4, 3, "south");
    p.move(p.isPlaced()); //4,2
    p.rotateLeft(p.isPlaced()); // east
    p.move(p.isPlaced()); //4,2
    p.rotateRight(p.isPlaced()); //south
    p.rotateRight(p.isPlaced()); //west
    p.move(p.isPlaced()); // 3,2
    expect(p.report(p.isPlaced())).toBe("3,2,WEST");
  });
});
