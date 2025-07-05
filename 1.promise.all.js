const promise1=new Promise((resolve,reject)=>{
    resolve(123);
});

const promise2=new Promise((resolve,reject)=>{
    resolve('I am called');
});

const promise3=new Promise((resolve,reject)=>{
     reject("I am rejected")
});


// Promise.all([promise1,promise2,promise3]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

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