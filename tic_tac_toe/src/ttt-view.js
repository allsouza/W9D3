class View {
  constructor(game, $el) {
    this.game = game;
    this.$obj = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('li').on('click', e => {
      const $li = $(e.target);
      let pos = $li.attr('id').split(',');
      pos = [parseInt(pos[0]), parseInt(pos[1])];
      try {
        this.game.playMove(pos);
      }
      catch (err) {
        alert(err.msg);
      }
      this.makeMove($li);
    });
  };

  makeMove($square) {
    const mark = this.game.currentPlayer;
    $square.text(mark);
    $square.removeClass("empty").addClass(mark); 
    if (this.game.isOver()) {
      if (this.game.winner()) {
      $("body").append(`<h1>Congrats to ${mark}</h1>`);
      $(`.${mark}`).removeClass(`${mark}`).addClass("winner");
      if (mark === "x") {
        $(".o").removeClass("o").addClass("loser");
        } else {
        $(".x").removeClass("x").addClass("loser");
      }
      $(".empty").removeClass("empty").addClass("loser");
    } else {
        $("li").removeClass("x, o").addClass("loser");
      $("body").append(`<h1>You are both losers!</h1>`);
      }
    }
  }

  setupBoard() {
    const $grid = $('<ul>');
    $grid.append($(`<li class="empty" id=0,0>`));
    $grid.append($(`<li class="empty" id=1,0>`));
    $grid.append($(`<li class="empty" id=2,0>`));
    $grid.append($(`<li class="empty" id=0,1>`));
    $grid.append($(`<li class="empty" id=1,1>`));
    $grid.append($(`<li class="empty" id=2,1>`));
    $grid.append($(`<li class="empty" id=0,2>`));
    $grid.append($(`<li class="empty" id=1,2>`));
    $grid.append($(`<li class="empty" id=2,2>`));
    this.$obj.append($grid);

    // //Inside a for loop
    // let $li = $('<li>').data({postion: [i,j]})
    // $grid.append($li);
    // //
  }
}

module.exports = View;
