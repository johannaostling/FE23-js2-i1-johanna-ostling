import {Fighter} from "./fighter.js"

class Cactus extends Fighter{
    constructor(health){
        super(health);
    }
    needle(){
        Math.floor(Math.random() * 50 + 10);
        return
    }
    heatstroke(){
        Math.floor(Math.random() * 100);
        return
    }
    succulentPowers(){
        Math.floor(Math.random() * 100)
        return
    }

}

export {Cactus}