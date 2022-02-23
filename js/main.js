/* 
 TO DO
 add minimum and maximum bet button
*/

const arrPics = ['url(./images/cat0.png)','url(./images/cat1.png)', 'url(./images/cat2.png)', 'url(./images/cat3.png)', 'url(./images/cat4.png)']

// Create slot machine object
let slotMachine = {}
    slotMachine.bet = 10
    slotMachine.money = 100
    slotMachine.slots = []
    // Returns random between 0-4 for array
    slotMachine.randomSelection = () => { return Math.floor(Math.random()*5) }

    // Sets the slots
    slotMachine.setSlots = () => { 
        let slot1 = slotMachine.randomSelection()
        let slot2 = slotMachine.randomSelection()
        let slot3 = slotMachine.randomSelection()
        slotMachine.slots = [slot1, slot2, slot3]

        // Sets slot images to blank for a moment
        document.querySelector('#left').style.backgroundImage = 'none'
        document.querySelector('#center').style.backgroundImage = 'none'
        document.querySelector('#right').style.backgroundImage = 'none'

        // Sets slot images
        setTimeout(function(){ document.querySelector('#left').style.backgroundImage = arrPics[slot1] }, 200)
        setTimeout(function(){ document.querySelector('#center').style.backgroundImage = arrPics[slot2] }, 400)
        setTimeout(function(){ document.querySelector('#right').style.backgroundImage = arrPics[slot3] }, 600)
        // document.querySelector('#left').classList.toggle('hit')
        // setTimeout(function(){ document.querySelector('#left').classList.add('.hit')}, 200)

        
    }

    // Raise the bet by 10
    slotMachine.raiseBet = function(){
        if (slotMachine.money > slotMachine.bet){
            slotMachine.bet += 10
            document.querySelector('#bet').innerText = slotMachine.bet
        }
    }

    // Lower the bet by 10
    slotMachine.lowerBet = function(){
        if (slotMachine.bet > 10){
            slotMachine.bet -= 10
            document.querySelector('#bet').innerText = slotMachine.bet
        }
    }

    // Set bet to minimum (10)
    slotMachine.minimum = function(){
        slotMachine.bet = 10
        document.querySelector('#bet').innerText = slotMachine.bet
    }
     // Set bet to maximum (max money)
     slotMachine.maximum = function(){
        slotMachine.bet = slotMachine.money
        document.querySelector('#bet').innerText = slotMachine.bet
    }

    // Remove bet money, add win money if win
    slotMachine.changeMoney = function(){
        let win = 0
        slotMachine.money -= slotMachine.bet
        if (slotMachine.slots[0] === slotMachine.slots[1] && slotMachine.slots[1] === slotMachine.slots[2]){
            win = slotMachine.bet * 8
            slotMachine.money += win
            document.querySelector('#win').innerText = win
            document.querySelector('#money').innerText = slotMachine.money
            
        }
        else if (slotMachine.slots[0] === slotMachine.slots[1] || slotMachine.slots[1] === slotMachine.slots[2]){
            win = slotMachine.bet * 3
            slotMachine.money += win
            document.querySelector('#win').innerText = win
            document.querySelector('#money').innerText = slotMachine.money
        }
        else {
            document.querySelector('#money').innerText = slotMachine.money
            document.querySelector('#win').innerText = win
        }
        if (slotMachine.money == 0){
            document.querySelector('footer').innerText = 'Game over man. Go home.'
        }
    }   

    // Spin time! Run functions if user has enough money
    slotMachine.spin = function(){
        if (slotMachine.money >= slotMachine.bet){
            slotMachine.setSlots()
            slotMachine.changeMoney()
        }
    }

// When spin, randomise slots, set slot img src to random array selection, deduct bet, add winnings to money, 
document.querySelector('#bet').innerText = slotMachine.bet
document.querySelector('#money').innerText = slotMachine.money
document.querySelector('#spin').addEventListener('click', slotMachine.spin)
document.querySelector('#raise').addEventListener('click', slotMachine.raiseBet)
document.querySelector('#lower').addEventListener('click', slotMachine.lowerBet)
document.querySelector('#minimum').addEventListener('click', slotMachine.minimum)
document.querySelector('#maximum').addEventListener('click', slotMachine.maximum)
