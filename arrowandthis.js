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