import {Cactus}  from "./module/cactus.js";
import { Fighter } from "./module/fighter.js";
import {Nettle}  from "./module/nettle.js";

const c = new Cactus(10);
console.log(c)
// c.attackHealth(10)

c.needle(10)
console.log(c)

const c2 = new Cactus(8000);
console.log(c2)