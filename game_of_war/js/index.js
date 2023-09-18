
let deck_id, cards_html
let comp_score = 0
let my_score = 0
let isNewDeck = false


if(!isNewDeck) {
    document.getElementById("draw-card").disabled = true;
}


async function getNewDeck() {
    try {
        let resp = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        let data = await resp.json()
        
        isNewDeck = true;
        document.getElementById("remaining_cards").textContent = `Remainig Cards: ${data.remaining}`
        deck_id = data.deck_id
        document.getElementById("draw-card").disabled = false;
    }
    catch (err) {
        throw new Error("Someting went wrong");
    }
}


function twoNewCards() {
    
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deck_id}/draw/?count=2`, {
        method : "GET"
    })
    .then(resp => resp.json())
    .then(data => {
        let cards = data.cards
        document.getElementById("remaining_cards").textContent = `Remainig Cards: ${data.remaining}`
        
        cards_html = cards.map( (card, index) => {
            return document.getElementById("cards").children[index].innerHTML= `<img src=${card.images.png} width=500 height=500 class="card">`
        })
        
        if(data.remaining == 0) {
            document.getElementById("draw-card").disabled = true;
            let winner_text = comp_score > my_score ? "Computer won the Game!" : comp_score == my_score ? "It's a Tie Game!" : "You won the Game!"
            document.getElementById("winner--text").textContent = winner_text
        } else {
            let winner_text = determineCardWinner(cards)
            document.getElementById("winner--text").textContent = winner_text
        }
    })
    .catch((error) => {
        throw new Error(error) // Handle any errors that occurred during the fetch
    });
}


function determineCardWinner(cards){
    let card_score = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"];
    let win_text = ""

    let highscore = cards.reduce( (acc, curr) => card_score.indexOf(acc.value) >  card_score.indexOf(curr.value) ? "c1" : card_score.indexOf(acc.value) ==  card_score.indexOf(curr.value) ? "tie" : "c2")
    
    
    if(highscore === "c1") {
        comp_score += 1;
        document.getElementById("computer_score").textContent = comp_score
        return "Computer wins!"
    } else if(highscore === "c2") {
        my_score += 1;
        document.getElementById("my_score").textContent = my_score
        return "You win!"
    } else {
        return "Its a War!"
    }
  
}
