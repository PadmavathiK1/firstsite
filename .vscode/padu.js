
const p=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("success")
    }, 2000);});
    p.then(console.log)

const p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
       
            reject("failure")
        
    }, 2000);
});
p1.then(console.log).catch(console.log)