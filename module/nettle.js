import { Fighter } from "./fighter.js"

class Nettle extends Fighter{
    constructor(health){
        super(health);
    }

    poison(){
        Math.floor(Math.random() * 50 + 10);
        return
    }
    
    flood(){
        Math.floor(Math.random() * 100);
        return
    }
    
    heavyRain(){
        Math.floor(Math.random() * 100)
        return
    }
}

export {Nettle}