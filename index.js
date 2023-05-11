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
  constructor(cards = []) {
    this.cards = cards
  }
  addCard(card) {
    this.cards.push(card)
  }
  playCard(card) {
    const index = this.cards.indexOf(card)
    if (index >= -1) {
      this.cards.splice(index, 1)
      return card
    }
    return null;
  }
  toStr() {
    return this.cards.join(",")
  }
  render() {
    const cardList = document.createElement("ul");
    cardList.classList.add("hand");
    for(const card of this.cards) {
      const cardItem = card.render();
      cardList.append(cardItem);
    }
    return cardList;
  }
}
