import { Cactus } from "./module/cactus.js";
import { Nettle } from "./module/nettle.js";
import { chooseAttackC } from "./module/attackcactus.js";
import { chooseAttackN } from "./module/attacknettle.js";
import { computerchoosesAsC } from "./module/computerchoosesasC.js";


//Start game function and hide fighterSelection form when user've choose fighter 

document.addEventListener("DOMContentLoaded", function () {
    const fighterSelectionForm = document.getElementById("fighterSelection");

    const cactusBtn = document.getElementById('cactusBtn');
    const nettleBtn = document.getElementById('nettleBtn');

    cactusBtn.addEventListener('click', function () {
        fighterSelectionForm.classList.add('hide');
        startGame('cactus');
        chooseAttackC();

    });

    nettleBtn.addEventListener('click', function () {
        fighterSelectionForm.classList.add('hide');
        startGame('nettle');
        chooseAttackN();
        computerchoosesAsC()
    })

    function startGame(selectedPlant) {
        console.log("You choose the " + selectedPlant + " and the game begins!");
        const displayGameArea = document.getElementById('gameArea');
        displayGameArea.classList.remove('hide');
    }

});




















const c = new Cactus(500);
const n = new Nettle(501);
console.log(c)
console.log(n)

c.attackHealth(10)
console.log(c)



n.attackHealth(c.needle())
console.log(n)