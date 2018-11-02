// player health
new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack() {
            let maxDam = 10;
            let minDam = 3;
            let damage = Math.max(Math.floor(Math.random() * maxDam) + 1, minDam);
            this.monsterHealth -= damage;
             maxDam = 12;
             minDam = 5;
             damage = Math.max(Math.floor(Math.random() * maxDam) + 1, minDam);
            this.playerHealth -= damage;
        },
        heal() {

        },
        giveUp() {
            this.gameIsRunning = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        specialAttack() {

        }
    }

})