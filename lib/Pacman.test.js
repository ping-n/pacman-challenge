const Pacman = require("./Pacman");

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
});

test("Pacman cannot be placed beyond grid width", () => {
  let p = new Pacman();
  p.place(6, 0, "north");
  expect(p.report()).toBe(undefined);
});
