import { Cactus } from "./module/cactus.js";
import { Nettle } from "./module/nettle.js";
import { chooseAttackC } from "./module/attackcactus.js";
import { chooseAttackN } from "./module/attacknettle.js";
import { computerchoosesAsC } from "./module/computerchoosesasC.js";

const btn1= document.getElementById('btn1')
const btn2= document.getElementById('btn2')
const btn3= document.getElementById('btn3')

// let player, computer;


//Start game function and hide fighterSelection form when user've choose fighter 

document.addEventListener("DOMContentLoaded", function () {
    const fighterSelectionForm = document.getElementById("fighterSelection");

    const cactusBtn = document.getElementById('cactusBtn');
    const nettleBtn = document.getElementById('nettleBtn');

    cactusBtn.addEventListener('click', function () {
        fighterSelectionForm.classList.add('hide');

        // player = new Cactus(500);
        // computer = new Nettle(300);

        startGame('cactus');
        chooseAttackC();
        // const player = "c."
        // const comp = "n."
    });

    nettleBtn.addEventListener('click', function () {
        fighterSelectionForm.classList.add('hide');
        startGame('nettle');
        chooseAttackN();
        computerchoosesAsC()
        const player = "n."
        const comp = "c."
    })

    function startGame(selectedPlant) {
        console.log("You choose the " + selectedPlant + " and the game begins!");
        const displayGameArea = document.getElementById('gameArea');
        displayGameArea.classList.remove('hide');

        const displayChoise = document.getElementById('youInfo');
        displayChoise.append('You are now the ' + selectedPlant + '. ' + 'Choose a power and attack!');



    document.addEventListener('click', function(player, comp){

    })

    }

});



const c = new Cactus(500);
const n = new Nettle(501);
console.log(c)
console.log(n)
1
c.attackHealth(10)
console.log(c)



n.attackHealth(c.needle())
console.log(n)