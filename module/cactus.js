import {Fighter} from "./fighter.js"

class Cactus extends Fighter{
    constructor(health){
        super(health);
    }
    needle(){
        Math.floor(Math.random() * 50 + 10);
    }
    heatstroke(){
        Math.floor(Math.random() * 100);
    }
    succulentPowers(){
        Math.floor(Math.random() * 100)
    }

}

export {Cactus}