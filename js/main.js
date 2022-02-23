const arrPics = ['url(../SlotMachine/images/cat0.png)','url(../SlotMachine/images/cat1.png)', 'url(../SlotMachine/images/cat2.png)', 'url(../SlotMachine/images/cat3.png)', 'url(../SlotMachine/images/cat4.png)']

// Create slot machine object
let slotMachine = {}
    slotMachine.bet = 10
    slotMachine.money = 100

    // Returns random between 0-4 for array
    slotMachine.randomSelection = () => { return Math.floor(Math.random()*5) }

    // Sets the slots
    slotMachine.setSlots = () => { 
        document.querySelector('#left').style.backgroundImage = arrPics[slotMachine.randomSelection()]
        document.querySelector('#center').style.backgroundImage = arrPics[slotMachine.randomSelection()]
        document.querySelector('#right').style.backgroundImage = arrPics[slotMachine.randomSelection()]
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

    // Remove bet money, add win money if win
    // slotMachine.changeMoney = function(){
    //     slotMachine.money -= slotMachine.bet
    //     let matches = 
    // }   

    // Spin time! Run functions
    slotMachine.spin = function(){
        slotMachine.setSlots()

    }

// When spin, randomise slots, set slot img src to random array selection, deduct bet, add winnings to money, 
document.querySelector('#spin').addEventListener('click', slotMachine.spin)
document.querySelector('#raise').addEventListener('click', slotMachine.raiseBet)
document.querySelector('#lower').addEventListener('click', slotMachine.lowerBet)
document.querySelector('#bet').innerText = slotMachine.bet







