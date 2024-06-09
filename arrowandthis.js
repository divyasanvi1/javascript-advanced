const user={
    username: "divya",
    price:999,
    welcomeMessage: function(){
        console.log(this);// "this" refered to the object the method is called on 
        console.log(`${this.username},welcome to my channel`)
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

// "this" refered to the object the method is called on 
//example-user
// if we access username without this it will give refrence error if username is not defined in 
//any accessible scope i.e local scope or global scope

console.log(this);// current context is empty object because we are in node environment if we will be in browser then it 
//will be window object

// function one()
// {
//     let username="divya"
//     console.log(this.username);// output :undefined -this shows this doesnot work for functions
// }
// one()

// const chai = function()
// {
//     let username="hitesh"
//     console.log(this.username);// output :undefined 
// }
// chai()

//diffrence between normal function and arrow function
//1. syntax
//2. binding of this-
    // normal function has its own this context
    // arrow function doesnot have its own this context it inherits this from surronding scope
//3.argument object 
    // normal function has access to argument object which contains all the arguments passed to the function
    // arrow function  does not have its own argument object insted it inherits argument object from its parent scope

    //argument object is array like but not array ,it lacks array methods , if you need to perform array operations
    // it is often better to convert arguments to array using Array.from(arguments) or using spread operator (...)
    // The arguments object is a special object available inside all JavaScript functions. It provides access to all the arguments passed to the function,
    // regardless of whether the function is defined with named parameters.
    // example normal function-
     function sum()
     {
        let total=0;
        for(let i=0; i<arguments.length; i++)
            {
                total+=arguments[i];
            }
            return total;
     }
     console.log(sum(1,2,3,4,5));// output-15

     // example arrow function -
     const sumArrow=()=>{
        let total=0;
        for(let i=0; i<arguments.length; i++)
            {
                total+=arguments[i];
            }
            return total; 
     }
     console.log(sumArrow(1,2,3,4,5));// refrence error

     // arrow function inherit argument object from parent scope
     function parent (){
        const arrow =()=>{
            for(let i=0; i<arguments.length; i++)
                {
                    console.log(arguments[i]);
                } 
        }
        arrow("apple","banana","orange")
     }
     parent ("pear","grapes")// output -pear,grapes

    //4. constructor or new keyword
        // normal function -can be used as constructor 
        // arrow function - cannot be used as constructor as this context is not there
       // example-
       class per {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    }
       const user=new per("john",30)//so first object will be created then function or say constructor  will be called that is why using this is not wrong here
    
    // example-
    // const pers=(name,age)=>{
    //   this.name=name;
    //   this.age=age;
    // }
    // const user=new per("john",30) this  context is not  here