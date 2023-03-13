"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// number 1
// Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [nGoal, scoredPlayer] of game.scored.entries()) {
    console.log(`Goal ${nGoal+1}: ${scoredPlayer}`);
}

// number 2
// Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
let oddsTotal = 0;
for (const odd of Object.values(game.odds)) {
    oddsTotal += odd;
}
console.log(`The avg of odds is ${oddsTotal / Object.values(game.odds).length}`);

// number 3
// Print the 3 odds to the console,but in a nice formatted way, like this
for (const [key, value] of Object.entries(game.odds)) {
    const result = (game[key] ? `victory ${game[key]}: ${value}` : `draw: ${value}`);
    console.log(`Odd of ${result}`);
}

// number 4
// Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value.
const scorers = {
    [game.scored[1]]: 1,
    [game.scored[3]]: 1,
    [game.scored[0]]: 2,
};