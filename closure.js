// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 8


function add(a , b , c ) { 
    return a + b + c; 
} 

const curry = function(foo){
    return function(...a){
        let sum1;
        if(a.length === 3){
            return foo(...a)
        }else{
            sum1 = [...a]
        }
       return function(...b){

        if(sum1.length === 2){
            return sum1[0] + sum1[1] + b[0]
        }
        
            return function(...c){
                return foo(a[0],b[0],c[0])
            }
       }
    } 
}
const curriedAdd = curry(add); 
// console.log(curriedAdd(1)(2)(3));
// console.log(curriedAdd(1,2)(3));
// console.log(curriedAdd(1,2,3));