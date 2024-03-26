// let sum = 0
// let hasBlackjack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEL = document.getElementById("card-el")
// //or we can also get element using
// //let sumEl = document.querySelector(".sum-el")
// let cards = []

// let player = {
//     name: "Andey",
//     chips: 150

// } 

// let playerEl = document.getElementById("player-el")


// function getrandomCard() {
//     let randomNumber = Math.floor(Math.random() * 10)
//     randomNumber += 1
//     return randomNumber
    
// }

// function startgame(){
   
//         cards[0] = getrandomCard()
//         cards[1] = getrandomCard()
//         sum = cards[0] +cards[1]
//         rendergame()
// }


// function newCard(){
//     if(!hasBlackjack && isAlive){
//         let card = getrandomCard()
//         sum += card
//         cards.push(card)
//         rendergame()
//     }
//     else{
//         messageEl.textContent = "YOU CANNOT DRAW A NEW CARD, refresh and start a New Game"
//     }

// }




// function rendergame(){
    
//     if (sum <=20){
//         message = "do you want to draw a new card"
//         isAlive = true
//     }
//     else if(sum === 21){
//         message = "blackjack!!!"
//         hasBlackjack = true
        
       
//     }
//     else{
//         message = "you have lost in this round"
//         isAlive = false
        
//     }
//     console.log(message)
    
//     messageEl.textContent = message
//     console.log(messageEl.textContent)
//     //renderring all the cards
//     cardsEL.textContent = "Cards: "
    
//     for( i = 0; i < cards.length; i++){
//         cardsEL.textContent += cards[i] + " "

//     }

//     //sum of all the cards
//     sumEl.textContent = "Sum: " + sum
   
        
// }

let hands = ["rock", "paper", "scissors"]

let messageEl = document.getElementById("message-el")
let player1El = document.getElementById("player1-el")
let player2El = document.getElementById("player2-el")

let player1pointsEl = document.getElementById("player1points-el")
let player2pointsEl = document.getElementById("player2points-el")
let player1points = 0
let player2points = 0

function randomAssign(){
    let randomNumber = Math.floor(Math.random()*3)
    
    return hands[randomNumber]
}


let player1= ""
let player2 = ""

function Play(){
    player1 = randomAssign()
    player1El.textContent = "PLAYER1 :" +player1
    console.log(player1El)
    player2 = randomAssign()
    player2El.textContent = "PLAYER2 :" +player2
    console.log(player2El)


    if(player1 === player2){
        messageEl.textContent ="players have same value"
        player1points +=0
        player2points += 0
        player1pointsEl.textContent = "PLAYER 1 POINTS : " + player1points
        player2pointsEl.textContent = "PLAYER 2 POINTS : " + player2points
        console.log(messageEl.textContent)
    }
    else if(player1 === hands[1] && player2 ===hands[0]){
        messageEl.textContent ="player1 gets one point"
        player1points += 1
        player2points += 0
        player1pointsEl.textContent = "PLAYER 1 POINTS : " + player1points
        player2pointsEl.textContent = "PLAYER 2 POINTS : " + player2points
        console.log(messageEl.textContent)
    }
    else if(player1 === hands[0] && player2 === hands[2]){
        messageEl.textContent ="player1 gets one point"
        player1points += 1
        player2points += 0
        player1pointsEl.textContent = "PLAYER 1 POINTS : " + player1points
        player2pointsEl.textContent = "PLAYER 2 POINTS : " + player2points
        console.log(messageEl.textContent)
    }
    else if(player1 === hands[2] && player2 === hands[1]){
        messageEl.textContent ="player1 gets one point"
        player1points += 1
        player2points += 0
        player1pointsEl.textContent = "PLAYER 1 POINTS : " + player1points
        player2pointsEl.textContent = "PLAYER 2 POINTS : " + player2points
        console.log(messageEl.textContent)
    }
    else if(player2 === hands[1] && player1 ===hands[0]){
        messageEl.textContent ="player2 gets one point"
        player1points += 0
        player2points += 1
        player1pointsEl.textContent = "PLAYER 1 POINTS : " + player1points
        player2pointsEl.textContent = "PLAYER 2 POINTS : " + player2points
        console.log(messageEl.textContent)
    }
    else if(player2 === hands[0] && player1 === hands[2]){
        messageEl.textContent ="player2 gets one point"
        player1points += 0
        player2points += 1
        player1pointsEl.textContent = "PLAYER 1 POINTS : " + player1points
        player2pointsEl.textContent = "PLAYER 2 POINTS : " + player2points
        console.log(messageEl.textContent)
    }
    else if(player2 === hands[2] && player1 === hands[1]){
        messageEl.textContent ="player2 gets one point"
        player1points += 0
        player2points += 1
        player1pointsEl.textContent = "PLAYER 1 POINTS : " + player1points
        player2pointsEl.textContent = "PLAYER 2 POINTS : " + player2points
        console.log(messageEl.textContent)
    }
    

}

function Game(){
    Play()
}





