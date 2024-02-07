import x from "./default_export_var.mjs"
import res from "./default_export_expr.mjs"
import sum from "./default_export_fun.mjs"
import Car from "./default_export_class.mjs"
import {v, w} from "./named_export_var.mjs"
import {mult, div} from "./named_export_fun.mjs"
import {Flower, Love} from "./named_export_class.mjs"

console.log(x);
console.log(res);
console.log(sum(10, 20));

const CarDetails = new Car("Audi");
console.log(CarDetails);

console.log(v," ", w)
console.log(div(10, 20));
console.log(mult(20, 10));
console.log(new Flower("Rose"));
console.log(new Love());