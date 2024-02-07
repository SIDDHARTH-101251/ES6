import x from "./default_export_var.mjs"
import res from "./default_export_expr.mjs"
import {sum, sub} from "./default_export_fun.mjs"



console.log(x);
console.log(res);
console.log(sum(10, 20));
console.log(sub(20, 10));