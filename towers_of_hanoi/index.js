const HanoiGame = require('./solution/game');
const HanoiView = require('./src/hanoi_view')

$(() => {
  const rootEl = $('.toh');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
  console.log("working");
});
