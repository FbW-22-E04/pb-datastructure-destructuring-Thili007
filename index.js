// Exercise 01

var fruit, vegetable, food;

[fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];

console.log(fruit, vegetable, ...food);

// Exercise 02

const halloweenCostume = {
  fran: "witch",
  tim: "Elephant",
  john: "wolf",
  elina: "cat",
};

const { fran, tim, john, elina } = halloweenCostume;

console.log(fran, tim, john, elina);

// Exercise 03

const band = {
  name: "Jothipala",
  hit: "Obe hada",
  nationality: "Sri Lanka",
  genre: "classic",
};

const bandData = ({ name, hit, nationality, genre }) =>
  console.log(
    `${name} is a ${nationality}. The musician sings ${genre} and their greatest hit is ${hit}`
  );

bandData(band);
