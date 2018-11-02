// player health
new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.turns = [];
            this.monsterHealth = 100;
        },
        attack() {
            const plyaerDamage = this.calculateDamage(3, 10)
            this.monsterHealth -= plyaerDamage
            this.turns.unshift({isPlayer: true, text: 'player hits monster for' + plyaerDamage + ' damage'})
            if (this.checkWin()) return;
            this.monsterAttack();
            this.checkWin();

        },
        heal() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;

            } else {
                this.playerHealth = 100;
            }
            this.monsterAttack();
        },
        giveUp() {
            this.gameIsRunning = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        specialAttack() {
            const plyaerDamage = this.calculateDamage(10, 20)
            this.monsterHealth -= plyaerDamage
            this.turns.unshift({isPlayer: true, text: 'player  hits hard the monster for' + plyaerDamage + ' damage'})
            if (this.checkWin()) return;
            this.monsterAttack();
            this.checkWin();
        },
        calculateDamage(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin() {
            if (this.monsterHealth <= 0) {
                if (confirm('you won the game ,start new ?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('you won the game ,start new ?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;

            }
            return false;

        },
        monsterAttack() {
            const monsterDamage = this.calculateDamage(5, 12);
            this.playerHealth -= monsterDamage;
            this.turns.unshift({isPlayer: false, text: 'monster hits player for' + monsterDamage + ' damage'})

        }
    }

})