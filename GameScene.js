class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        this.load.image('background', 'assets/Fundo.png');
        this.load.image('chao', 'assets/Chao.png');
        this.load.spritesheet('player', 'assets/player.png', {
            frameWidth: 25,
            frameHeight: 35
        });
        this.load.image('plataforma', 'assets/Plataforma.png');
        this.load.image('inimigo', 'assets/inimigo.png');
        this.load.image('chave', 'assets/chave.png');
        this.load.image('faca', 'assets/faca.png');
    }

    coletarFaca(player, faca) {
        faca.disableBody(true, true);
        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);
    }

    create() {
        this.score = 0;

        const fundo = this.add.image(0, 0, 'background').setOrigin(0, 0);
        fundo.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

        // Chão
        const chao = this.physics.add.staticImage(400, 580, 'chao');
        chao.setScale(2).refreshBody();

        // Plataformas
        this.plataformas = this.physics.add.staticGroup();
        this.plataformas.create(120, 450, 'plataforma').setScale(2).refreshBody();
        this.plataformas.create(360, 320, 'plataforma').setScale(2).refreshBody();
        this.plataformas.create(600, 230, 'plataforma').setScale(2).refreshBody();

        // Inimigos
        this.inimigos = this.physics.add.group();

        this.inimigos.create(500, 510, 'inimigo');
        this.inimigos.create(600, 190, 'inimigo');
        this.inimigos.create(120, 410, 'inimigo');
        this.inimigos.create(380, 280, 'inimigo');

        this.inimigos.children.iterate((inimigo) => {
            inimigo.setCollideWorldBounds(true);
            inimigo.body.setAllowGravity(false);
        });

        // Personagem
        this.player = this.physics.add.sprite(370, 500, 'player').setScale(1.5).refreshBody();
        this.player.setCollideWorldBounds(true);

        // Facas
        this.facas = this.physics.add.staticGroup();

        this.facas.create(50, 410, 'faca');
        this.facas.create(290, 280, 'faca');
        this.facas.create(750, 510, 'faca');
        this.facas.create(530, 190, 'faca');

        // Coleta das facas
        this.physics.add.overlap(this.player, this.facas, this.coletarFaca, null, this);

        this.chave = this.physics.add.sprite(680, 180, 'chave');
        this.chave.setScale(3);
        this.chave.setCollideWorldBounds(true);
        this.chave.body.setAllowGravity(false);
        this.physics.add.collider(this.chave, this.plataformas);
        this.physics.add.overlap(this.player, this.chave, this.pegarChave, null, this);

        // Colisões gerais
        this.physics.add.collider(this.player, chao);
        this.physics.add.collider(this.player, this.plataformas);
        this.physics.add.collider(this.inimigos, this.plataformas);
        this.physics.add.collider(this.inimigos, chao);

        // Encostar nos inimigos reinicia o jogo
        this.physics.add.overlap(this.player, this.inimigos, this.reiniciarJogo, null, this);

        // Controles
        this.cursors = this.input.keyboard.createCursorKeys();

        // Animações
        this.anims.create({
            key: 'esquerda',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'parado',
            frames: [{ key: 'player', frame: 8 }],
            frameRate: 20
        });

        // Texto de pontuação
        this.scoreText = this.add.text(16, 16, 'Score: 0', {
            fontSize: '32px',
            fill: '#fff'
        });
    }

    pegarChave(player, chave) {
        chave.disableBody(true, true);
        if (this.score >= 40) {
            this.scene.start('MenuScene');
        } else {
            this.scene.restart();
        }
    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
            this.player.anims.play('esquerda', true);
            this.player.setFlipX(false);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
            this.player.anims.play('esquerda', true);
            this.player.setFlipX(true);
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play('parado');
        }

        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-360);
        }
    }

    reiniciarJogo() {
        this.scene.restart();
    }
}
