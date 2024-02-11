class Fighter{
    
    constructor(health){
        this.health = health
        
    }

    attackHealth(attack){
        this.health-= attack
    }
    healHealth(heal){
        this.health+= heal
    }

}

export {Fighter}

// const f = new Fighter(600)
// f.health = 50000;

// f.setHealth(50000);

