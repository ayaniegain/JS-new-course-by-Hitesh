let hero= ["thor","irconman"]

let myhero={
    name:"spiderman",
    power:function(){
            // console.log('can hang')
    }
}

Object.prototype.ayan=function(){
    // console.log('this is ayan ')
}

// hero.ayan()
// console.log(hero.prototype)



let A='hello    '
let B='hi    '

String.prototype.trimvalue=function(){

  console.log(this.trim().length)
}
A.trimvalue()
B.trimvalue()
