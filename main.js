import { Cactus } from "./module/cactus.js";
import { Fighter } from "./module/fighter.js";
import { Nettle } from "./module/nettle.js";
import { chooseAttackC } from "./module/attackcactus.js";
import { chooseAttackN } from "./module/attacknettle.js";



//Start game function and hide fighterSelection form when user've choose fighter 

document.addEventListener("DOMContentLoaded", function () {
    const fighterSelectionForm = document.getElementById("fighterSelection");

    const cactusBtn = document.getElementById('cactusBtn');
    const nettleBtn = document.getElementById('nettleBtn');

    cactusBtn.addEventListener('click', function () {
        console.log(fighterSelectionForm)
        fighterSelectionForm.classList.add('hide');
        startGame('cactus');
        chooseAttackC()

    });

    nettleBtn.addEventListener('click', function () {
        fighterSelectionForm.classList.add('hide');
        startGame('nettle');
        chooseAttackN();
    })

    function startGame(selectedPlant) {
        console.log("You choose the " + selectedPlant + " and the game begins!");
        document.createElement
    }

});

//Display gameArea
document.addEventListener(function (startGame){
    const displayGameArea = document.getElementById('gameArea');
    displayGameArea.innerHTML = '';

});











const c = new Cactus(500);
console.log(c)
c.attackHealth(10)


console.log(c)
c.needle(10)


c.attackHealth(c.needle())
console.log(c)