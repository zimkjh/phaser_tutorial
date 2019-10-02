class Controller extends Phaser.Scene{
	constructor(){
		super('Controller');
	}

	preload(){
		this.load.image("background_1", "/games/"+game_title+"/images/background1.png");
		this.load.image("background_2", "/games/"+game_title+"/images/background2.png");
		this.load.image("background_3", "/games/"+game_title+"/images/background3.png");
		this.load.image("background_4", "/games/"+game_title+"/images/background4.png");
		this.load.image("background_5", "/games/"+game_title+"/images/background5.png");
		this.load.image("ground", "/games/"+game_title+"/images/ground.png");
		this.load.image("title", "/games/"+game_title+"/images/title.png");

		this.load.spritesheet('icon', "/games/"+game_title+'/images/icon.png', { frameWidth: 152, frameHeight: 152});
		this.load.spritesheet('icon2', "/games/"+game_title+'/images/icon.png', { frameWidth: 304, frameHeight: 152});

		this.load.image("block", "/games/"+game_title+"/images/tile_long.png");
		this.load.image("btn_go_out", "/games/"+game_title+"/images/btn_go_out.png");
		this.load.image("btn_home", "/games/"+game_title+"/images/btn_home.png");
		this.load.image("btn_start", "/games/"+game_title+"/images/btn_start.png");
		this.load.image("card_character", "/games/"+game_title+"/images/card_character.png");
		this.load.image("btn_character", "/games/"+game_title+"/images/btn_character.png");
		this.load.image("square", "/games/"+game_title+"/images/square.png");
		this.load.image("btn_extralife", "/games/"+game_title+"/images/btn_extralife.png");
		this.load.image("start_block2", "/games/"+game_title+"/images/startBlock2.png");
		this.load.image("start_block3", "/games/"+game_title+"/images/startBlock3.png");
		this.load.atlas('sheet', "/games/"+game_title+"/images/startBlock2.png", "static/assets/images/startBlock2.json");
		this.load.atlas('sheet3', "/games/"+game_title+"/images/startBlock3.png", "static/assets/images/startBlock3.json");

		this.load.json("start_block_shape", "/games/"+game_title+"/images/startBlockShape.json");
		this.load.json("start_block_shape3", "/games/"+game_title+"/images/startBlockShape3.json");


	}

	create(){
		this.scene.start("Menu");
	}
}

let game_character = 'char00';
class Menu extends Phaser.Scene {
	constructor (){
		super ('Menu');
	}
	create(){
		const color_filter = 0x888888;
    	this.add.image(config.width/2, config.height/2, 'background_1').setScale(0.5).setTint(color_filter);
			this.add.image(config.width/2, config.height * 0.3, 'title');
    	// this.add.text(120, 200, 'Block Stacking', {fontSize: '40px', fill:'#ffffff', boundsAlignW:"center"});

		let btn_go_out = this.add.image(60, 60, 'icon', 5).setScale(0.6);
		let btn_start = this.add.image(config.width/2, config.height * 0.6, 'icon2', 4);
		let btn_mute = this.add.image(config.width * 0.2, config.height * 0.9, 'icon', 1).setScale(0.7);
		let btn_sound = this.add.image(config.width * 0.2, config.height * 0.9, 'icon', 0).setScale(0.7);
		let btn_character = this.add.image(config.width/2, config.height * 0.9, 'icon', 3).setScale(0.7);
		let btn_trophy = this.add.image(config.width * 0.8, config.height * 0.9, 'icon', 2).setScale(0.7);

    this.text_highest_score = this.add.text(config.width/2 - 120, config.height * 0.6 + 100, "내 최고 점수: " + "0" + " 점", { fontSize: '25px', fill: '#ffffff', fontStyle: 'bold'});
    this.add.image(config.width/2 - 90, config.height * 0.6 + 150, 'icon', 10).setScale(0.5);//.setSize(10, 10);
    this.add.image(config.width/2 + 20, config.height * 0.6 + 150, 'icon', 11).setScale(0.5);
    this.text_coin_1 = this.add.text(config.width/2 - 60, config.height * 0.6 + 140, 0, { fontSize: '25px', fill: '#ffffff', fontStyle: 'bold'});
    this.text_coin_2 = this.add.text(config.width/2 + 50, config.height * 0.6 + 140, 0, { fontSize: '25px', fill: '#ffffff', fontStyle: 'bold'});

  	btn_start.setInteractive();
		btn_character.setInteractive();
		btn_mute.setInteractive();
		btn_sound.setInteractive();

  	btn_start.on('pointerup', function(){
  		game.scene.stop("Menu");
			game.scene.start("PlayGame");
  	});
		btn_character.on('pointerup', function(){
			game.scene.pause("Menu");
			game.scene.start("CharacterOption");
			game.scene.bringToTop("CharacterOption");
		});
		btn_mute.on('pointerup', function(){
			btn_mute.setVisible(false);
			btn_sound.setVisible(true);
		});
		btn_sound.on('pointerup', function(){
			btn_sound.setVisible(false);
			btn_mute.setVisible(true);
		});
	}
}
let life_left;

let block;
let nowWidth;
let blockMoving = true;
let baseLeft;
let baseRight;
let nowLeft;
let nowRight;
let nowY;
let cam;
var scoreText;
let coin1Text, coin2Text;
var score = 0;
let bg_1;
let bg_2;
let bg_3;
let startPos;
let startVelocity;
let block_change = false;
let crossWidth;
let coin1Score = 0;
let coin2Score = 0;
let dropBlockCreated = false;
let dropPosX, dropPosY, dropWidthX;
let polygonLeft = true;
let polygonLeftPrev = true;
let data1;
let blockShape;
let blockShape2 = false;
let blockShape3 = false;
let dropBlock;
let leftOrRight;
let gameOverMoves = 5;
let gameOverMoveText;

let velocity = 300;
let blockCreatePos = "end";
let colorNum = 0;
let nowColorNum;
let parallelAngle = 40;

const gameLevelDesign = [
	// #1
	[["default"], [300],["end"]],
	[["default"], [350],["end"]],
	[["default"], [400],["end"]],
	[["default"], [450],["end"]],
	[["default"], [500],["end"]],

	// #2
	[["parallel"], [500],["end"]],
]

const colors = ["0xfc3f47", "0xf7c549","0x418c95","0x1a2433","0xaf64fe"]


class PlayGame extends Phaser.Scene {
	constructor(){
		super({
			key: "PlayGame",

			physics : {
				arcade:{
					debug : false,
					gravity : {y:0}
				},
				matter :{
					debug : true,
					gravity : {y:1}
				}
			}
		});

	}
	create(){
		this.game_level = 0;

		blockMoving = true;
		score = 0;
		block_change = false;
		coin1Score = 0;
		coin2Score = 0;
		dropBlockCreated = false;
	  blockShape2 = false;
		blockShape3 = false;
		gameOverMoves = 5;
		life_left = 1;
		velocity = 300;
		blockCreatePos = "end";
		colorNum = 0;

		cam = this.cameras.main;
		this.add.image(config.width/2, config.height/2, 'background_1').setScale(0.5);
		this.add.image(config.width/2, -config.height/2, 'background_2').setScale(0.5);
		this.add.image(config.width/2, -config.height/2*3, 'background_3').setScale(0.5);
		this.add.image(config.width/2, -config.height/2*5, 'background_4').setScale(0.5);
		bg_1 = this.add.image(config.width/2, -config.height/2*7, 'background_5').setScale(0.5);
		bg_2 = this.add.image(config.width/2, -config.height/2*9, 'background_5').setScale(0.5);
		bg_3 = this.add.image(config.width/2, -config.height/2*11, 'background_5').setScale(0.5);
		// start block
		this.add.image(config.width/2, config.height-80, 'ground').setScale(0.5);

		// game block
		nowY = config.height-205;
  	block = this.add.rectangle(220, nowY, 420, 70, colors[0]);
		this.physics.add.existing(block);
		block.body.velocity.x = velocity;
		baseLeft = config.width/2 - 210;
		baseRight = config.width/2 + 210;
		nowWidth = 420;

		// 화면 표시 정보
		this.add.sprite(30, 30, 'icon', 10).setScale(0.7).setScrollFactor(0);
		coin1Text = this.add.text(30 + 25, 20, ' 0', { fontSize: '30px', fill: '#ffffff'}).setScrollFactor(0);
		this.add.sprite(180, 30, 'icon', 11).setScale(0.7).setScrollFactor(0);
		coin2Text = this.add.text(180 + 25, 20, ' 0', { fontSize: '30px', fill: '#ffffff'}).setScrollFactor(0);
		scoreText = this.add.text(config.width - 30, 20, ' 0', { fontSize: '30px', fill: '#ffffff'}).setScrollFactor(0).setOrigin(1,0);

		gameOverMoveText = this.add.text(150, 100, '남은 Move 수 : 5', { fontSize: '30px', fill: '#ffffff', fontStyle: 'bold'}).setScrollFactor(0);


	}
	update(){
		// block 모양 결정
		console.log(blockShape, velocity, blockCreatePos);


		if(score < 5){
			this.game_level = 0;
		}else if(score < 10){
			this.game_level = 1;
		}else if(score < 15){
			this.game_level = 2;
		}else if(score < 20){
			this.game_level = 3;
		}else if(score < 25){
			this.game_level = 4;
		}else if(score < 30){
			this.game_level = 5;
		}

		if(gameLevelDesign[this.game_level][0][0] === "default"){
			blockShape = 1;
		}else if(gameLevelDesign[this.game_level][0][0] === "parallel"){
			blockShape = 2;
		}else if(gameLevelDesign[this.game_level][0][0] === "ladder"){
			blockShape = 3;
		}
		velocity = gameLevelDesign[this.game_level][1][0];
		blockCreatePos = gameLevelDesign[this.game_level][2][0];



		if(dropBlockCreated === true){
			nowColorNum = (colorNum + 4) % 5;
			dropBlockCreated = false;
			if(blockShape === 1 ){
				dropBlock = this.add.rectangle(dropPosX, dropPosY, dropWidthX, 70, colors[nowColorNum]);
			}else if(blockShape2 === false){
				blockShape2 = true;
				dropBlock = this.add.rectangle(dropPosX, dropPosY, dropWidthX, 70, colors[nowColorNum]);
			}else if(blockShape === 2){
				if(polygonLeftPrev === true){
					data1 = [parallelAngle, 0, dropWidthX+parallelAngle, 0, dropWidthX, 70, 0, 70];
				}else{
					data1 = [0, 0, dropWidthX, 0, dropWidthX+parallelAngle, 70, parallelAngle, 70];
				}
				dropBlock = this.add.polygon(dropPosX, dropPosY, data1, colors[nowColorNum]);
			}else{ //shape3
				if(leftOrRight === true){
					data1 = [10, 0, dropWidthX+10, 0, dropWidthX, 70, 0, 70];
				}else{
					data1 = [0, 0, dropWidthX, 0, dropWidthX+10, 70, 10, 70];
				}
				dropBlock = this.add.polygon(dropPosX, dropPosY, data1, colors[nowColorNum]);
			}
			this.physics.add.existing(dropBlock);
			dropBlock.body.setGravityY(200);
			this.tweens.add({
	        targets: dropBlock,
	        alpha: 0,
					duration: 1000,
	        repeat: 0,
					ease:"Linear",
					onComplete: function () {
						dropBlock.destroy();
					},
	    });
		}
		if(block_change === true){ // block 너무 작을 때
			nowColorNum = (colorNum + 4)% 5;
			block_change = false;
			block.destroy();
			let newBase = this.add.rectangle((baseLeft+baseRight)/2, nowY+70, 50, 70, colors[nowColorNum]);
			if(blockShape === 1){
				block = this.add.rectangle((baseLeft+baseRight)/2, nowY, 50, 70, colors[colorNum]);
			}else if(blockShape === 2){
				if(polygonLeft === true){
					data1 = [parallelAngle, 0, parallelAngle+50, 0, 50, 70, 0, 70];
					block = this.add.polygon((baseLeft+baseRight)/2 - parallelAngle/2, nowY, data1, colors[colorNum]);
				}else{
					data1 = [0, 0, 50, 0, parallelAngle+50, 70, parallelAngle, 70];
					block = this.add.polygon((baseLeft+baseRight)/2 + parallelAngle/2, nowY, data1, colors[colorNum]);
				}
			}else{
				data1 = [10, 0, 30, 0, 50, 70, 0, 70];
				block = this.add.polygon((baseLeft+baseRight)/2,  nowY, data1, colors[colorNum]);
			}
			this.physics.add.existing(block);

			if(Phaser.Math.Between(0, 1) === 0){
				if(blockCreatePos === "end"){
					startPos = nowWidth/2;
				}else{
					starPos = Phaser.Math.Between(nowWidth/2, config.width-nowWidth/2);
				}
				startVelocity = velocity;
			}else{
				if(blockCreatePos === "end"){
					startPos = config.width - nowWidth/2;
				}else{
					starPos = Phaser.Math.Between(nowWidth/2, config.width-nowWidth/2);
				}
				startVelocity = -velocity;
			}
			block.body.velocity.x = startVelocity;
			nowWidth = 50;
		}

		if(block.body.x >= config.width - nowWidth){
			gameOverMoves = gameOverMoves - 1;
			gameOverMoveText.setText("남은 Move 수 : "+gameOverMoves);
			block.body.velocity.x = -velocity;
		}
		if(block.body.x <= 0){
			gameOverMoves = gameOverMoves - 1;
			gameOverMoveText.setText("남은 Move 수 : "+gameOverMoves);
			block.body.velocity.x = velocity;
		}
		if(gameOverMoves <= 0 ){
			colorNum = (colorNum + 1)% 5;
			game.scene.start("GameOver");
			game.scene.pause("PlayGame");
			game.scene.bringToTop("GameOver");
		}
		this.input.on('pointerdown', function(pointer){
			if(blockMoving === true){
				polygonLeftPrev = polygonLeft;
				score = score + 1;
				block.body.velocity.x = 0;
				if(blockShape === 1 || blockShape === 3){
					nowLeft = block.x-(nowWidth/2);
					nowRight = block.x +(nowWidth/2);
				}else if(blockShape === 2){
					if(polygonLeft === true){
						nowLeft = block.x - (nowWidth/2)- parallelAngle/2;
						nowRight = block.x + (nowWidth/2) - parallelAngle/2;
					}else{
						nowLeft = block.x - (nowWidth/2) + parallelAngle/2;
						nowRight = block.x + (nowWidth/2) + parallelAngle/2;
					}
				}
				// block 왼쪽에서 멈춤
				if(nowRight < baseLeft || nowLeft > baseRight){
					crossWidth =0;
					nowY = nowY + 70;
					game.scene.start("GameOver");
					game.scene.pause("PlayGame");
					game.scene.bringToTop("GameOver");
				}else if(nowLeft < baseLeft-2){
					////////////// LEFT /////////////////////
					leftOrRight = true;
					dropBlockCreated = true;
					dropPosX = (nowLeft + baseLeft)/2;
					dropPosY = nowY;
					dropWidthX = baseLeft-nowLeft;

					crossWidth = nowRight-baseLeft;
					baseRight = nowRight;
					if(blockShape === 2){
						if(polygonLeft === true){
							baseLeft = baseLeft + parallelAngle;
							baseRight = baseRight + parallelAngle;
						}else{
							baseLeft = baseLeft - parallelAngle;
							baseRight = baseRight - parallelAngle;
						}
					}else if(blockShape === 3){
						baseLeft = baseLeft + 10;
						baseRight = baseRight - 10;
					}
					nowWidth = baseRight- baseLeft;

					if(blockShape === 1){
						block.destroy();
						block = this.scene.add.rectangle((baseLeft+baseRight)/2, nowY, nowWidth, 70, colors[colorNum]);
					}else if(blockShape === 2){
						block.destroy();
						if(polygonLeft === true){
							data1 = [parallelAngle, 0, nowWidth+parallelAngle, 0, nowWidth, 70, 0, 70];
							block = this.scene.add.polygon((baseLeft+baseRight)/2 - parallelAngle/2, nowY, data1, colors[colorNum]);
						}else{
							data1 = [0, 0, nowWidth, 0, nowWidth+parallelAngle, 70, parallelAngle, 70];
							block = this.scene.add.polygon((baseLeft+baseRight)/2 + parallelAngle/2, nowY, data1, colors[colorNum]);
						}
					}else{ // startBlockShape3
						block.destroy();
						data1 = [10, 0, nowWidth+10, 0, nowWidth+20, 70, 0, 70];
						block = this.scene.add.polygon((baseLeft+baseRight)/2,  nowY, data1, colors[colorNum]);
					}
					this.scene.physics.add.existing(block);
					block.body.moves = false;
				}else if(nowRight > baseRight+2){
					////////////// RIGHT /////////////////////

					leftOrRight = false;
					dropBlockCreated = true;
					dropPosX = (nowRight+baseRight)/2;
					dropPosY = nowY;
					dropWidthX = nowRight - baseRight;

					crossWidth = baseRight - nowLeft;
					baseLeft = nowLeft;

					if(blockShape === 2){
						if(polygonLeft === true){
							baseLeft = baseLeft + parallelAngle;
							baseRight = baseRight + parallelAngle;
						}else{
							baseLeft = baseLeft - parallelAngle;
							baseRight = baseRight - parallelAngle;
						}
					}else if(blockShape === 3){
						baseLeft = baseLeft + 10;
						baseRight = baseRight - 10;
					}
					nowWidth = baseRight-baseLeft;

					if(blockShape === 1){
						block.destroy();
						block = this.scene.add.rectangle((baseLeft+baseRight)/2, nowY, nowWidth, 70, colors[colorNum]);
					}else if(blockShape === 2){
						block.destroy();
						if(polygonLeft === true){
							data1 = [parallelAngle, 0, nowWidth+parallelAngle, 0, nowWidth, 70, 0, 70]
							block = this.scene.add.polygon((baseLeft+baseRight)/2 - parallelAngle/2, nowY, data1, colors[colorNum]);
						}else{
							data1 = [0, 0, nowWidth, 0, nowWidth+parallelAngle, 70, parallelAngle, 70]
							block = this.scene.add.polygon((baseLeft+baseRight)/2 + parallelAngle/2, nowY, data1, colors[colorNum]);
						}
					}else{//blockshape === 3
						block.destroy();
						data1 = [10, 0, nowWidth+10, 0, nowWidth+20, 70, 0, 70];
						block = this.scene.add.polygon((baseLeft+baseRight)/2,  nowY, data1, colors[colorNum]);
					}
					this.scene.physics.add.existing(block);
					block.body.moves = false;
				}else{
					crossWidth = nowWidth;
					baseLeft = nowLeft;
					baseRight = nowRight;

					if(blockShape === 2){
						if(polygonLeft === true){
							baseLeft = baseLeft + parallelAngle;
							baseRight = baseRight + parallelAngle;
						}else{
							baseLeft = baseLeft - parallelAngle;
							baseRight = baseRight - parallelAngle;
						}
						nowWidth = baseRight-baseLeft;
					}else if(blockShape === 3){
						baseLeft = baseLeft + 10;
						baseRight = baseRight - 10;
						nowWidth = baseRight- baseLeft;
					}
					score = score + 1;
					coin1Score = coin1Score + 1;
					coin1Text.setText(coin1Score);
				}
				if(crossWidth/nowWidth > 0.9){
					coin2Score = coin2Score + 1;
					coin2Text.setText(coin2Score);
				}
				nowWidth = baseRight-baseLeft;
				if(nowWidth < 1){
					nowY = nowY + 70;
					game.scene.start("GameOver");
					game.scene.pause("PlayGame");
					game.scene.bringToTop("GameOver");
				}
				nowY = nowY - 70;
				blockMoving = false;
				colorNum = (colorNum + 1)% 5;
				scoreText.setText(score);

				if(baseLeft <= 50){
					console.log("TOO LEFT!!!");
					polygonLeft = true;
				}else if(baseRight >= config.width-50){
					console.log("TOO RIGHT!!");
					polygonLeft = false;
				}else{
					if(Phaser.Math.Between(0,1)===0){
						polygonLeft = false;
					}else{
						polygonLeft = true;
					}
				}
			}
			// background position change
			if(bg_3.y < bg_1.y){ // bg_3 is most higher
				if(cam.scrollY < bg_3.y){
					bg_1.setY(bg_1.y-3*config.height);
				}
			}else if(bg_1.y < bg_2.y){
				if(cam.scrollY < bg_1.y){
					bg_2.setY(bg_2.y-3*config.height);
				}
			}else if(bg_2.y < bg_3.y){
				if(cam.scrollY < bg_2.y){
					bg_3.setY(bg_3.y-3*config.height);
				}
			}
		});

		if(blockMoving=== false){ //block 생성하는 곳

			gameOverMoves = 5;
			gameOverMoveText.setText("남은 Move 수 : "+gameOverMoves);
			blockMoving = true;

			if(Phaser.Math.Between(0, 1) === 0){
				if(blockCreatePos === "end"){
					startPos = nowWidth/2;
				}else{
					starPos = Phaser.Math.Between(nowWidth/2, config.width-nowWidth/2);
				}
				startVelocity = velocity;
			}else{
				if(blockCreatePos === "end"){
					startPos = config.width - nowWidth/2;
				}else{
					starPos = Phaser.Math.Between(nowWidth/2, config.width-nowWidth/2);
				}
				startVelocity = -velocity;
			}

			// level design. 잘하는 사람들 방지
			if(score === 25){
				if(nowWidth <= 20){
					nowWidth = nowWidth;
				}else if(nowWidth <= 50){
					nowWidth = 20;
				}else if(nowWidth <= 100){
					nowWidth = 50;
				}else if(nowWidth <= 150){
					nowWidth = 100;
				}else{
					nowWidth = 150;
				}
			}

			if(blockShape === 1){
				block = this.add.rectangle(startPos, nowY, nowWidth, 70, colors[colorNum]);
			}else if(blockShape === 2){
				if(polygonLeft === true){
					data1 = [parallelAngle, 0, nowWidth+parallelAngle, 0, nowWidth, 70, 0, 70]
					block = this.add.polygon(startPos, nowY, data1, colors[colorNum]);
				}else{
					data1 = [0, 0, nowWidth, 0, nowWidth+parallelAngle, 70, parallelAngle, 70]
					block = this.add.polygon(startPos, nowY, data1, colors[colorNum]);
				}
			}else{// blocklevel3
				data1 = [10, 0, nowWidth-10, 0, nowWidth, 70, 0, 70]
				block = this.add.polygon(startPos, nowY, data1, colors[colorNum]);
			}
			this.physics.add.existing(block);
			block.body.velocity.x = startVelocity;
			// camera scroll up
			if(score > 5){
				cam.scrollY = cam.scrollY-70;
			}
		}


	}

}

class GameOver extends Phaser.Scene {
	constructor(){
		super('GameOver');
	}
	create(){
		this.cameras.main.setBackgroundColor('rgba(0, 0, 0, 0.5)');
		let btn_go_home = this.add.image(config.width * 0.5, config.height * 0.9, 'icon', 4).setScale(0.7);
		btn_go_home.setInteractive();
		btn_go_home.on('pointerup', function(){
			game.scene.start("Menu");
			game.scene.bringToTop("Menu");
			game.scene.stop("GameOver");
			game.scene.stop("PlayGame");
		});
		if(life_left >= 1){
			life_left = life_left -1;
			let btn_life_plus = this.add.image(config.width/2, config.height/2, 'icon', 6);
			btn_life_plus.setInteractive();
			btn_life_plus.on("pointerup", function(){

			blockMoving = true;
			gameOverMoves = 5;
			colorNum = (colorNum + 4)% 5;
			gameOverMoveText.setText("남은 Move 수 : "+gameOverMoves);


			if(Phaser.Math.Between(0, 1) === 0){
				startPos = nowWidth/2;
				startVelocity = velocity;
			}else{
				startPos = config.width - nowWidth/2;
				startVelocity = -velocity;
			}

			block.body.velocity.x = startVelocity;

			if(nowWidth < 50){
				if(baseLeft < nowWidth/2 - 25){
					baseRight = baseLeft + 50;
				}
				else if(baseRight > nowWidth/2 + 25){
					baseLeft = baseRight - 50;
				}
				block_change = true;
			}
			game.scene.resume("PlayGame");
			game.scene.stop("GameOver");
			game.scene.bringToTop("PlayGame");
			})
		}
	}
}

class Result extends Phaser.Scene {
	constructor(){
		super('Result');
	}
}

class CharacterOption extends Phaser.Scene {
	constructor(){
		super('CharacterOption');
	}
	create(){
		let background_rect = this.add.rectangle(config.width/2, config.height/2, config.width, config.height, 0x000000, 0.3);
		let card_character  = this.add.sprite(config.width/2, config.height/2, 'card_character').setScale(0.9);

		background_rect.setInteractive();
		background_rect.on('pointerup', function() {
			game.scene.resume('Menu');
			game.scene.stop('CharacterOption');
		});

		this.color_filter = 0x333333;

		this.char00 = this.add.image(config.width / 2 - 100, config.height / 2 - 100 , 'block').setTint(this.color_filter);
		this.char01 = this.add.image(config.width / 2 + 100, config.height / 2 - 100 , 'start_block2').setTint(this.color_filter);
		this.char02 = this.add.image(config.width / 2 - 100, config.height / 2 + 100 , 'start_block3').setTint(this.color_filter);
		this.char03 = this.add.image(config.width / 2 + 100, config.height / 2 + 100 , 'start_block2').setTint(this.color_filter);
		this.char00.scaleX = 0.8;
		this.char01.scaleX = 0.4;
		this.char02.scaleX = 0.4;
		this.char03.scaleX = 0.4;



		this.char00.setInteractive();
		this.char01.setInteractive();
		this.char02.setInteractive();
		this.char03.setInteractive();

		this.char00.on("pointerup", function(){
			game_character = "char00";
		});
		this.char01.on("pointerup", function(){
			game_character = "char01";
		});
		this.char02.on("pointerup", function(){
			game_character = "char02";
		});
		this.char03.on("pointerup", function(){
			game_character = "char03";
		});
	}
	update(){
		switch (game_character) { // 지금 선택된 개릭터 필터제거
			case "char01":
				this.char00.setTint(this.color_filter);
				this.char01.clearTint();
				this.char02.setTint(this.color_filter);
				this.char03.setTint(this.color_filter);
				break;
			case "char02":
				this.char00.setTint(this.color_filter);
				this.char01.setTint(this.color_filter);
				this.char02.clearTint();
				this.char03.setTint(this.color_filter);
				break;
			case "char03":
				this.char00.setTint(this.color_filter);
				this.char01.setTint(this.color_filter);
				this.char02.setTint(this.color_filter);
				this.char03.clearTint();
				break;
			default: //"char00"
				this.char00.clearTint();
				this.char01.setTint(this.color_filter);
				this.char02.setTint(this.color_filter);
				this.char03.setTint(this.color_filter);
		}
	}
}


let config = {
	type: Phaser.AUTO, //WEBGL
	width: 540,
	height: 960,
	scale: {
		// mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
		// mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		parent: 'load_game_div',// div의 id값
		width: 540,
		height: 960
	},
	// backgroundColor: 0x0c88c7,
	audio: {
		disableWebAudio: true
	},
	physics: {
		default : 'arcade',
		debug : false
	},
	scene: [Controller, Menu, PlayGame, GameOver, Result, CharacterOption]

};

let game = new Phaser.Game(config);
