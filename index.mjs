import x from "./default_export_var.mjs"
import res from "./default_export_expr.mjs"
import sum from "./default_export_fun.mjs"
import Car from "./default_export_class.mjs"


console.log(x);
console.log(res);
console.log(sum(10, 20));

const CarDetails = new Car("Audi");
console.log(CarDetails);