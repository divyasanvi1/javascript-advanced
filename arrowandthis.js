const user={
    username: "divya",
    price:999,
    welcomeMessage: function(){
       // console.log(this);
        console.log(`${this.username},welcome to my channel`)
    }
}
user.welcomeMessage()