class User{
    constructor(username,email){
            this.username=username
            this.email=email
    }
  static  getUser(){
        return `my user is ${this.username}`
    }
}
allUser= new User("Rahul","rahul@123")
// console.log(allUser.getUser())

class User2 extends User{
    constructor(username2,email){
        super(username2)
            this.username2=username2
            this.email=email
    }
    getUser2(){
        return `my user is ${this.username2}`
    }
}
allUser2= new User2("puja","puja@123")
console.log(allUser2.getUser())