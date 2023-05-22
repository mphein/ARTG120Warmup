class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload()
    {
        //load background music
        this.load.audio('gameBackground', './assets/rainBackground.mp3');

        this.load.audio('rainCollision', './assets/rainCollect.wav');
        this.load.audio('slugCollision', './assets/hitHurt.wav');

        //load menu image
        this.load.image('menuArt', './assets/menuArt.png');

    }

    create() 
    {
        // menu art
        const menuConfig = 
        {
            key: 'menuArt',
            x: game.config.width/2,
            y: game.config.height/2
        };

        // see: https://github.com/photonstorm/phaser3-examples/blob/master/public/src/game%20objects/sprites/create%20from%20config.js
        this.make.sprite(menuConfig);

        this.sound.play('gameBackground', {volume: .5, loop: true});

        let menuKeyConfig = 
        {
            fontFamily: 'Courier',
            fontSize: '20px',
            backgroundColor: '#CC000000',
            color: '#FFD700',
            align: 'center',
            padding:
            {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        // show menu title text
        this.add.text(game.config.width/2, 20, 'I am Kroot', menuKeyConfig).setOrigin(0.5);

        // show menu key text
        this.add.text(game.config.width/2, game.config.height - 50, 'Press ← and → for movement \nF to start', menuKeyConfig).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyU = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);

    }

    update()
    {
        if(!passLevel1)
        {
            if(Phaser.Input.Keyboard.JustDown(keyF))
            {
                this.scene.start('playScene1');
            }
        }
        if(Phaser.Input.Keyboard.JustDown(keyU))
        {
            this.scene.start('upgradesScene');
        }

        let menuKeyConfig = 
        {
            fontFamily: 'Courier',
            fontSize: '20px',
            backgroundColor: '#000000',
            color: '#FFD700',
            align: 'center',
            padding:
            {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        if(passLevel1)
        {
            this.add.text(game.config.width - 60, game.config.height - 30, levelText, menuKeyConfig).setOrigin(0.5);

            if(Phaser.Input.Keyboard.JustDown(keyLEFT))
            {
                switch(levelText)
                {
                    case 'Level 1':
                        levelText = 'Level 2';
                        break;

                    default:
                        levelText = 'Level 1';
                        break;
                }
            }
            if(Phaser.Input.Keyboard.JustDown(keyRIGHT))
            {
                switch(levelText)
                {
                    case 'Level 1':
                        levelText = 'Level 2';
                        break;

                    default:
                        levelText = 'Level 1';
                        break;
                }
            }

            if(Phaser.Input.Keyboard.JustDown(keyF))
            {
                switch(levelText)
                {
                    case 'Level 1':
                        this.scene.start('playScene1');
                        break;

                    default:
                        this.scene.start('playScene2');
                        break;
                }
            }
        }


    }
}