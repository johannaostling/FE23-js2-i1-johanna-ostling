class Fighter{
    
    constructor(health){
        this.health = health
        
    }

    attackHealth(damage){
        this.health-= damage
        return
    }
    healHealth(heal){
        this.health+= heal
        return
    }

}

export {Fighter}

// const f = new Fighter(600)
// f.health = 50000;

// f.setHealth(50000);

