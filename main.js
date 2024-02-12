import {Cactus}  from "./module/cactus.js";
import { Fighter } from "./module/fighter.js";
import {Nettle}  from "./module/nettle.js";

const c = new Cactus(500);
console.log(c)
c.attackHealth(10)
console.log(c)
c.needle(10)


c.attackHealth(c.needle())
console.log(c)