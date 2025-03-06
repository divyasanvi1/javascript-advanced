// A function that takes a function as an argument


function add(a,b,cb)
{
    let result=a+b;
    cb(result)
    return ()=>{console.log(result)} // function returned
}

add(4,5,function res(val)
{
    console.log(val);
})
let resultfunc=add(4,5,()=>{})
//A closure is created when a function "remembers" the variables 
// from its parent function even after the parent function has finished execution.
// ()=>{console.log(result)} result rem 9 even after add finishes executing
resultfunc()

// call back function is used when there is atask which takes time
// but there is a problem here knows as callback hell
// when there is asynchronous operation in sequence
//  so promises arises with much cleaner code

// there are two type of callbacks synchronous and asyncronous
