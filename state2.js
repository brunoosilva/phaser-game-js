demo.state2 = function(){};

demo.state2.prototype = {
    preload: function(){},
    create: function(){
        console.log('state2');
        game.stage.backgroundColor = '#ff0000';
        
        addChangeStateEventList();
    },
    update: function(){}
};