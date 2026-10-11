class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    preload() {
        this.load.image('menuBg', 'assets/Fundo.png');         // Fundo do menu
        this.load.image('btnPlay', 'assets/btn_jogar.png');    // Botão de jogar
    }

    create() {
        const bg = this.add.image(0, 0, 'menuBg').setOrigin(0, 0);
        bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

        const playButton = this.add.image(
            this.sys.game.config.width / 2,
            this.sys.game.config.height / 2,
            'btnPlay'
        ).setInteractive();

        playButton.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
    }
}
