import {Cactus}  from "./module/cactus.js";
import { Fighter } from "./module/fighter.js";
import {Nettle}  from "./module/nettle.js";

const c = new Cactus(500);
console.log(c)
c.attackHealth(10)

//Start game function and hide fighterSelection form when user've choose fighter 

document.addEventListener("DOMContentLoaded", function(){
    const fighterSelectionForm = document.getElementById("fighterSelection");

    const cactusBtn = document.getElementById('cactusBtn');
    const nettleBtn = document.getElementById('nettleBtn');
    
    cactusBtn.addEventListener('click', function(){
        fighterSelectionForm.classList.add('hide');
        startGame('cactus');
    });
    
    nettleBtn.addEventListener('click', function(){
        fighterSelectionForm.classList.add('hide');
        startGame('nettle');
    })
    
    function startGame(selectedPlant){
        console.log ("You choose the " + selectedPlant + " and the game begin!");
    }
    
    });


const c = new Cactus(10);
console.log(c)
c.needle(10)


c.attackHealth(c.needle())
console.log(c)