var demo = {}, centerX = 50, centerY = 810, mario, treeBG, speed = 5;

demo.state0 = function(){};

demo.state0.prototype = {
    preload: function(){
        game.load.image('mario', 'assets/sprites/mario.png');
        game.load.image('tree', 'assets/background/bg1.png');
    },
    create: function(){
        console.log('state0');
        
        game.stage.backgroundColor = '#ddd';
        addChangeStateEventList();
        
        game.world.setBounds(0, 0, 2539, 1000);
        
//        game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        treeBG = game.add.sprite(0, 0, 'tree');
        
        mario = game.add.sprite(centerX, centerY, 'mario');
        mario.anchor.setTo(0.5, 0.5);
        mario.scale.setTo(0.7, 0.7);
        
        game.camera.follow(mario);
        
        
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            mario.x += speed;
        }
        
        if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            mario.x -= speed;
        }
        
//        if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
//            mario.y += speed;
//        }
//        
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            var int = setInterval(function(){
                if(mario.y < 750){
                    clearInterval(int);
                    
                    var int2 = setInterval(function(){
                       if(mario.y > centerY){
                           clearInterval(int2);
                       }
                        
                    mario.y += .10;        
                    });
                } else {
                    mario.y -= .10;    
                }
            });
            
        }
    }
};

function changeState(event, stateName){
    game.state.start('state' + stateName);
}

function addKeyCallback(key, fn, state){
    game.input.keyboard.addKey(key)
        .onDown.add(fn, null, null, state);
}

function addChangeStateEventList(){
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
}