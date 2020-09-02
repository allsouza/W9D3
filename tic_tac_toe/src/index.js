const View = require("./ttt-view.js")
const Game = require("../solution/game.js")

  $(() => {
    const game = new Game();
    const $obj = $(".ttt");
    const view = new View(game, $obj);

  });
