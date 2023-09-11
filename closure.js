// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 1
const createCounter = function(){
    let i = 0;

    return function(){
        i++
        return i
    }
}


const counter = createCounter();
// console.log(counter()); // Output: 1
// console.log(counter());


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 2
const privateVariable = function(num){
    let numVal = num
        const get = function(){
            return numVal
        }
        const set = function(value){
            numVal = value
            return numVal
        }

        return {
            get,
            set
        }
    
}


// const secretValue = privateVariable(42); 
// console.log(secretValue.get()); // Output: 42 
// secretValue.set(1005); 
// console.log(secretValue.get());



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 3.1


// const createCachingFunction = function(){
//     let cache  = [];
//     console.log(cache)
//     return function(num){

//         let multi = num * 2;

//             if(cache.length === 0){
//                 cache.push(num)
//                 return `${multi} (calculated)`
//             }else{
//                 for(let i = 0; i< cache.length; i++){
//                     if(!(cache.includes(num))){
//                         cache.push(num)
//                         return `${multi} (calculated)`
//                     }else{
//                         cache.push(num)
//                         return `${multi} (cached)`
//                     }
            
    
//                 }
//             }
         
//     }
     
// }


// 3.2
const createCachingFunction = function(){
    let obj = {}
    return function(num){
        let multi = num * 2
        if(obj.length === 0){
            obj[num] = num
            return `${multi} (calculated)`
        }else{
            if(num in obj){
                return `${multi} (cached)`
            }else{
                
                obj[num] = num
                return `${multi} (calculated)`
            }
            
        }

    }
}


const cachedCalculation = createCachingFunction(); 
// console.log(cachedCalculation(5)); // Output: 10 (calculated)
// console.log(cachedCalculation(6));
// console.log(cachedCalculation(5));