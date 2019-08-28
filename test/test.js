const cards = require("../cards.js");
const assert  = require("assert");


// test initCards()
it("should return ordered cards", function()
{
    const orderedCards = cards.cards.initCards();
    assert.deepStrictEqual(orderedCards, [ { shape: 'red', caption: 'Joker' },
    { shape: 'black', caption: 'Joker' },
    { shape: 'heart', caption: 'A' },
    { shape: 'diamond', caption: 'A' },
    { shape: 'spade', caption: 'A' },
    { shape: 'star', caption: 'A' },
    { shape: 'heart', caption: '2' },
    { shape: 'diamond', caption: '2' },
    { shape: 'spade', caption: '2' },
    { shape: 'star', caption: '2' },
    { shape: 'heart', caption: '3' },
    { shape: 'diamond', caption: '3' },
    { shape: 'spade', caption: '3' },
    { shape: 'star', caption: '3' },
    { shape: 'heart', caption: '4' },
    { shape: 'diamond', caption: '4' },
    { shape: 'spade', caption: '4' },
    { shape: 'star', caption: '4' },
    { shape: 'heart', caption: '5' },
    { shape: 'diamond', caption: '5' },
    { shape: 'spade', caption: '5' },
    { shape: 'star', caption: '5' },
    { shape: 'heart', caption: '6' },
    { shape: 'diamond', caption: '6' },
    { shape: 'spade', caption: '6' },
    { shape: 'star', caption: '6' },
    { shape: 'heart', caption: '7' },
    { shape: 'diamond', caption: '7' },
    { shape: 'spade', caption: '7' },
    { shape: 'star', caption: '7' },
    { shape: 'heart', caption: '8' },
    { shape: 'diamond', caption: '8' },
    { shape: 'spade', caption: '8' },
    { shape: 'star', caption: '8' },
    { shape: 'heart', caption: '9' },
    { shape: 'diamond', caption: '9' },
    { shape: 'spade', caption: '9' },
    { shape: 'star', caption: '9' },
    { shape: 'heart', caption: '10' },
    { shape: 'diamond', caption: '10' },
    { shape: 'spade', caption: '10' },
    { shape: 'star', caption: '10' },
    { shape: 'heart', caption: 'J' },
    { shape: 'diamond', caption: 'J' },
    { shape: 'spade', caption: 'J' },
    { shape: 'star', caption: 'J' },
    { shape: 'heart', caption: 'Q' },
    { shape: 'diamond', caption: 'Q' },
    { shape: 'spade', caption: 'Q' },
    { shape: 'star', caption: 'Q' },
    { shape: 'heart', caption: 'K' },
    { shape: 'diamond', caption: 'K' },
    { shape: 'spade', caption: 'K' },
    { shape: 'star', caption: 'K' } ]);
});

// test shuffledCards()
it("should return array other than the ordered one", function()
{
    cards.cards.initCards();
    const shuffledCards = cards.cards.shuffle();
    assert.notStrictEqual(shuffledCards, [ { shape: 'red', caption: 'Joker' },
    { shape: 'black', caption: 'Joker' },
    { shape: 'heart', caption: 'A' },
    { shape: 'diamond', caption: 'A' },
    { shape: 'spade', caption: 'A' },
    { shape: 'star', caption: 'A' },
    { shape: 'heart', caption: '2' },
    { shape: 'diamond', caption: '2' },
    { shape: 'spade', caption: '2' },
    { shape: 'star', caption: '2' },
    { shape: 'heart', caption: '3' },
    { shape: 'diamond', caption: '3' },
    { shape: 'spade', caption: '3' },
    { shape: 'star', caption: '3' },
    { shape: 'heart', caption: '4' },
    { shape: 'diamond', caption: '4' },
    { shape: 'spade', caption: '4' },
    { shape: 'star', caption: '4' },
    { shape: 'heart', caption: '5' },
    { shape: 'diamond', caption: '5' },
    { shape: 'spade', caption: '5' },
    { shape: 'star', caption: '5' },
    { shape: 'heart', caption: '6' },
    { shape: 'diamond', caption: '6' },
    { shape: 'spade', caption: '6' },
    { shape: 'star', caption: '6' },
    { shape: 'heart', caption: '7' },
    { shape: 'diamond', caption: '7' },
    { shape: 'spade', caption: '7' },
    { shape: 'star', caption: '7' },
    { shape: 'heart', caption: '8' },
    { shape: 'diamond', caption: '8' },
    { shape: 'spade', caption: '8' },
    { shape: 'star', caption: '8' },
    { shape: 'heart', caption: '9' },
    { shape: 'diamond', caption: '9' },
    { shape: 'spade', caption: '9' },
    { shape: 'star', caption: '9' },
    { shape: 'heart', caption: '10' },
    { shape: 'diamond', caption: '10' },
    { shape: 'spade', caption: '10' },
    { shape: 'star', caption: '10' },
    { shape: 'heart', caption: 'J' },
    { shape: 'diamond', caption: 'J' },
    { shape: 'spade', caption: 'J' },
    { shape: 'star', caption: 'J' },
    { shape: 'heart', caption: 'Q' },
    { shape: 'diamond', caption: 'Q' },
    { shape: 'spade', caption: 'Q' },
    { shape: 'star', caption: 'Q' },
    { shape: 'heart', caption: 'K' },
    { shape: 'diamond', caption: 'K' },
    { shape: 'spade', caption: 'K' },
    { shape: 'star', caption: 'K' } ]);
    assert.equal(shuffledCards.length, 54)
});

// test dealOneCard()
it("should return a random card", function()
{
    cards.cards.initCards();
    const shuffledCards = cards.cards.shuffle();
    const lastCardInDeck = shuffledCards[shuffledCards.length - 1]
    const dealedCard = cards.cards.dealOneCard();
    assert.equal(dealedCard, lastCardInDeck);
});
