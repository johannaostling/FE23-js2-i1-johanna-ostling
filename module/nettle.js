import { Fighter } from "./fighter.js"

class Nettle extends Fighter{
    constructor(health){
        super(health);
    }

    poison(){
        return Math.floor(Math.random() * 50 + 10);
        
    }
    
    flood(){
        return Math.floor(Math.random() * 100);
       
    }
    
    heavyRain(){
        return Math.floor(Math.random() * 200 - 50)
        
    }
}

export {Nettle}