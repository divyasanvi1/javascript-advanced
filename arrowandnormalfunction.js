// normal function
const person={
    names:"john",
    greet: function one()
    {
        const innerFunction=function ()
        {
            console.log(`${this.names},  hello`);// here this refers to global object in non strict mode and undefined in strict mode 
        };
        innerFunction();
    }
}

person.greet() // output -undefined hello

// the above normal function gives undefined output beacuse the normal functions have its own this context ,when inner function is called inside
//greet without an explicit context (meaning it is not called as a method of an object or using methods like .call() .apply()  )
// this inside inner function refers to global object in non strict mode and undefined in strict mode  

// normal function but it returns ans as it called with explicit context
const person1={
    names:"john",
    greet: function one()
    {
        const innerFunction=function ()
        {
            console.log(`${this.names},  hello`);// here this refers to object person1
        };
        innerFunction.call(this);// explicit call 
        // passing the context of current object 
        // this refers to person1
    }
}

person1.greet()// output- john, hello

// arrow function 
// to make this inside innerfunction refers to person2 object we can use arrow function
// which inherit this from surronding lexical context(the greet method)

const person2={
    names:"john",
    greet: function ()
    {
         const innerFunction= ()=>{
            console.log(`${this.names},  hello`);// here this refers to object person2
        };
        innerFunction(); 
    }
}
person2.greet() //output- john, hello
// arrow function do not have their own this context so they inherit from
// surronding lexical scope (the greet method)


// you can verify the fact that normal function has their own this context as by console log (this) inside
// the normal function prints some values and (also this refers to global object in non strict mode and undefined in strict mode )
// and when we console log (this) inside the arrow function it prints {} empty object hence it inherit this from surronding lexical scope


const person3={
    names:"john",
    greet: function ()
    { 
       const func= function one ()
        {
            const innerFunction= ()=>{
                console.log(`${this.names},  hello`);// here this refers to object person2
            };
            innerFunction(); 
        }
       func(); //func.call(this); by using explicit call it will print the desired output
    }
}
person3.greet()// output -undefined because surronding lexical scope of inner function is func which is normal function
// when we made func arrow function it works beacuse this context will denote person 3