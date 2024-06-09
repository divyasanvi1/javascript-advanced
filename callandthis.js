function setUserName(username)
{
    this.username=username
    console.log("called");
}
function createUser(username,email,password)
{
    setUserName.call(this,username)
    this.email=email
    this.password=password
}
// without using call the function is called but exection context gets deleted
//once the function is called but by using call it holds the refrence and by passing this 
//it means please assign value to the this given insted of your own this because that will get deleted
//once execution will be lost.
// when exection context will be lost all variables declared inside the function will get lost

//using call(this, username), you're instructing JavaScript to execute setUserName in the context of the current object (this)
//Even if the function being called does not explicitly use this, you still need to provide some value as the first argument to .call() because it's a required parameter.
// If the function does not use this, you can pass null or undefined as the thisArg.
const user=new createUser("chai","chai@mail.com","abc");
console.log(user)



// example
const person = {
    name: 'Alice',
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};

const dog = {
    name: 'Max'
};

// Borrow the greet method from person and call it with dog as the context
person.greet.call(dog); // Output: Hello, Max
