import {Fighter} from "./fighter.js"

class Cactus extends Fighter{
    constructor(health){
        super(health);
    }
    needle(){
        return  Math.floor(Math.random() * 50 + 10);
    }
    heatstroke(){
        return Math.floor(Math.random() * 100);
        
    }
    succulentPowers(){
        return Math.floor(Math.random() * 100)
        
    }

}

export {Cactus}