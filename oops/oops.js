function User(name, address, isoggedIn) {
    this.name=name
    this.address=address
    this.isoggedIn=isoggedIn
    this.activity=function(){
        console.log("can walk")
    }
}
let person1= new User("ayan","barasat",true)

console.log(person1.activity())