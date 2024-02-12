import { Fighter } from "./fighter.js"

class Nettle extends Fighter{
    constructor(health){
        super(health);
    }

    poison(){
        Math.floor(Math.random() * 50 + 10);
    }
    
    flood(){
        Math.floor(Math.random() * 100);
    }
    
    rain(){
        Math.floor(Math.random() * 100)
    }
}

export {Nettle}