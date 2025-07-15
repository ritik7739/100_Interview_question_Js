const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(123);
    },2000);
});

const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('I am called');
    },3000);
});

const promise3=new Promise((resolve,reject)=>{
     setTimeout(()=>{
        reject("I am rejected");
    },4000);
});


//promise.all()
// It will return an array of results in the same order as the promises were passed
// If any promise is rejected, it will reject the entire Promise.all
// It will not wait for all promises to resolve if one is rejected
// It will return a promise that resolves when all of the promises in the iterable have resolved or

Promise.all([promise1,promise2,promise3]).then((res)=>{
    console.log("Promise.all()",res);
}).catch((err)=>{
    console.log("Promise.all()",err);
});

Promise.allSettled([promise1,promise2,promise3]).then((res)=>{
    console.log("Promise.allsettled",res)
}).catch((err)=>{
    console.log("Promise.allsettled",err)
});


//Pormise.race()

Promise.race([promise1,promise2,promise3]).then((res)=>
    console.log("Promise.race",res)
).catch((err)=>{
    console.log("Promise.allsettled",err)
});

//pollyfills for Promise.all()

function myPromise(newPromiseArray){
    const promiseResult=[];
    let promiseCompleted=0;
      return new Promise((resolve,reject)=>{
      newPromiseArray.forEach((ele,index) => {
        ele.then((val)=>{
        promiseResult[index]=val;
        promiseCompleted++;

        if(promiseCompleted === newPromiseArray.length()){
            resolve(result)
        }
       })
    });
});


}