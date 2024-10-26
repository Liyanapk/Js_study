//------promise in js-----

const promise=new Promise((resolve, reject) => {
    setTimeout(()=>resolve("done")
    ),1000
    
});

promise.then(result=>console.log(result)
);