///general promise👀

let promiseOne= new Promise((resolve,reject)=>{
    let Error= false
    if(!Error){
            resolve("resolved promise")
    }else{
        reject("rejected promise")
    }
})
// .then((res)=>{
//     console.log(`${res}`)
// })
// .catch((rej)=>{
//     console.log(`${rej}`)

// })

//alternative if not use then and catch in promise👀

async function promisealt() {
    try {    
        let res=await promiseOne   
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}
promisealt()



////////syncronous code API 👀

 function whatValueFromPromise() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')    
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))
}
whatValueFromPromise()

//////////async all👀

async function whatValueFromPromise() {
    try {    
        let res=await fetch('https://jsonplaceholder.typicode.com/todos/1')    
        let data=await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
whatValueFromPromise()

