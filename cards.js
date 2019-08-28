
const cards = {
    cards: [],
    initCards() {
        this.cards = [
            {
                shape: 'red',
                caption: 'Joker'
            }, {
                shape: 'black',
                caption: 'Joker'
            }
            ]
        shapes = ['heart', 'diamond', 'spade', 'star']
        for(i = 1; i <= 13; i++) {
            shapes.forEach(element => {
                let cap
                switch(i) {
                    case 1:
                        cap = 'A'
                        break   
                    case 11:
                        cap = 'J'
                        break
                    case 12:
                        cap = 'Q'
                        break
                    case 13:
                        cap = 'K'
                        break
                    default:
                        cap = i.toString()
                }

                const card = {
                    shape: element,
                    caption: cap
                }
                this.cards.push(card)
            });
        }
        return this.cards
    },
    shuffle() {
        const shuffledCards = []
        let randomCard
        while (this.cards.length > 0) {
            //Fetch a random card
            randomCardNum = Math.floor(Math.random() * this.cards.length)
            randomCard = this.cards[randomCardNum]
            
            //Push the random card in the new deck
            shuffledCards.push(randomCard)
            
            //Remove the random card from the old deck
            this.cards.splice(randomCardNum, 1)
        }
        this.cards = shuffledCards
        return this.cards
    },
    showCards() {
        console.log(this.cards)
    },
    dealOneCard() {
        const dealedCard = this.cards.pop()
        //console.log(dealedCard)
        return dealedCard
    }

}

cards.initCards()
cards.showCards()
cards.shuffle()
cards.showCards()
cards.dealOneCard()
cards.showCards()

module.exports = {
    cards
}
