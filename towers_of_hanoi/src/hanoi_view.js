class HanoiView{
    constructor(game, $obj){
        this.game = game;
        this.$obj = $obj;
        this.setUpBoard();
        this.render();
    }

    setUpBoard(){
        for(let i = 0; i<3; i++){
            let $column = $("<ul>");
            for(let j = 0; j<3; j++){
                let $li = $("<li>").data({pos:[i,j]});
                $column.append($li);
            }
            this.$obj.append($column);
        }
    }

    render(){
        const $lis = $('li');
        for(let c=0; c<3; c++){
            for(let r=0; r<3; r++){
                for(let i=0; i<$lis.length; i++){
                    if ($($lis[i]).data('pos').join(",") === [c,r].join(",")){
                        let newId = this.game.towers[c][r] || "mpty";
                        newId = "e" + newId;
                        $($lis[i]).attr('class',newId);
                    }
                }
            }
        }
    }

    bindEvents() {
        
    }

}

module.exports=HanoiView;