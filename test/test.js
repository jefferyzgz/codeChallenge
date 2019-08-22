var cards = require("../cards.js");
var assert  = require("assert");


// test initCards()
it("should return [1,2,3,4,5,6,7,8,9,10]", function()
{
    let orderedCards = cards.initCards(1, 10);
    assert.deepStrictEqual(orderedCards, [1,2,3,4,5,6,7,8,9,10]);
});

// test initCards()
it("should return []", function()
{
    let orderedCards = cards.initCards(11, 10);
    assert.strictEqual(orderedCards.length, [].length);
});

// test shuffledCards()
it("should return array other than the ordered one", function()
{
    let orderedCards = cards.initCards(1, 10);
    let shuffledCards = cards.shuffle();
    assert.notStrictEqual(shuffledCards, [1,2,3,4,5,6,7,8,9,10]);
    assert.equal(shuffledCards.length, [1,2,3,4,5,6,7,8,9,10].length)
});

// test dealOneCard()
it("should return a random card", function()
{
    let orderedCards = cards.initCards(6, 10);
    let shuffledCards = cards.shuffle();
    let lastCardInDeck = shuffledCards[shuffledCards.length - 1]
    let dealedCard = cards.dealOneCard();
    assert.equal(dealedCard, lastCardInDeck);
});
