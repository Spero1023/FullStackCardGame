let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let suits = ['♠', '♥', '♦', '♣'];

// for (let i = 0; i < rankNum.length; i++) {
//   for (let j = 0; j < suitShape.length; j++) {
//     // console.log(rankNum[i] + suitShape[j]);
//     deck.push(rankNum[i] + suitShape[j]);
//   }
// }

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.deck = [];
  }
  createDeck(suits, values) {
    for (let suit of suits) {
      for (let value of values) {
        this.deck.push(new Card(suit, value));
      }
    }
    return this.deck;
  }
  shuffle() {
    let counter = this.deck.length,
      temp,
      i;

    while (counter) {
      i = Math.floor(Math.random() * counter--);
      temp = this.deck[counter];
      this.deck[counter] = this.deck[i];
      this.deck[i] = temp;
    }
    return this.deck;
  }
  draw() {
    return this.deck.pop();
  }
  deal() {
    let players = [];
    while (players.length <= 1) {
      let hand = [];
      while (hand.length < 5) {
        hand.push(this.draw(deck));
      }
      players.push(hand);
    }
    return players;
  }
}

let deck = new Deck();
deck.createDeck(suits, values);
deck.shuffle();
console.log(deck.draw());
console.log(deck.deal());

class Hand {
  constructor(currentCards) {
    this.currentCards = currentCards;
  }
}
// const shuffleDeck = deck => {
//   console.log('shuffling', deck);

//   for (let i = deck.length - 1; i > 0; i--) {
//     deck[i].playedByPlayer = false;
//     let j = Math.floor(Math.random() * (i + 1));
//     let temp = deck[i];
//     deck[i] = deck[j];
//     deck[j] = temp;
//   }
//   console.log(deck, 'shuffled');
//   shuffleFX.play();
//};
