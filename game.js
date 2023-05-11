/**
 * Rules of games
 * If Dealer hand is 17 or higher dealer stands
 * iF dealer hand is 16 or lower dealer hits
 * if dealer hand is 21+ BUST
 * 
 */
let playerCount = 0;
let dealerCount = 0;

let dealerAceCount = 0;
let playerAceCount = 0;

class game {
    constructor (player, dealer) {
        this.player = player;
        this.dealer = dealer;
    }
    checkWin() {
        let player = this.player[0]
        let dealer = this.player[1]
        if (player.value > dealer.value) {
            return "You win!"
        } else if (dealer.value > player.value) {
            return "You Lose!"
        } else if (player.value === dealer.value) {
            return "Push~"
        }
        return null;
    }
    getValue() {
        let data = this.card.split("");
        let value = data[0];

        if (isNaN(value)) {
            if (value == "A") {
                return 11;
            }
            return 10;
        }
        return parseInt(value);
    }   
}

console.log(game.getValue)
