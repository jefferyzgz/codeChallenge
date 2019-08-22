
let orderedCards = []
let shuffledCards = []
//Array of players
let players = []
let playerOne = {
    id: 1,
    cardsInHand: []
}

//Initialize the cards
function initCards(start, end) {
    //empty the orderedCards array
    orderedCards = []
    while(start <= end) {
        orderedCards.push(start)
        start++
    }
    return orderedCards
}

//Shuffle the cards
function shuffle() {
    var randomCard
    //Empty the shuffledCards array
    shuffledCards = []
    while(orderedCards.length > 0) {
        //Fetch a random card
        randomCardNum = Math.floor(Math.random() * orderedCards.length)
        randomCard = orderedCards[randomCardNum]
        
        //Push the random card in the new deck
        shuffledCards.push(randomCard)
        
        //Remove the random card from the old deck
        orderedCards.splice(randomCardNum, 1)
    }
    //console.log(shuffledCards)
    return shuffledCards
}

//Deal one card to one player
function dealOneCard() {
    if(shuffledCards.length === 0) 
        return Error('No card in deck!')
    //fetch the last card in the deck
    var dealedCard = shuffledCards.pop();

    //give the card to a player
    playerOne.cardsInHand.push(dealedCard)
    //console.log(shuffledCards)
    return dealedCard
}

//Deal all cards to players in order
function dealAllCards() {
    //
}

//initialize players
function invitePlayers() {
    //
}

module.exports = {
    initCards, dealOneCard, shuffle
}