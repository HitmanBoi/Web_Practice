let getData = (dataId) => {
    return new Promise((resolve,reject) => {
    setTimeout( () => {
        if(dataId > 7){
            reject("404");
        }else{
        console.log(`data : ${dataId}`);
        resolve("200");
    }},2000);
})
}


(async () => {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
})();



// let p1 = getData(9)

// let p2 = p1.catch(() => {
//     console.log('Gya .. Bye.. Tata ... Khatam');
//})

// let showErr = (err) => {
//     console.log(err);
// }

// getData(1)
// .then(()=> getData(2))
// .then(()=> getData(8))
// .then(() =>getData(3))
// .catch((err)=> showErr(err));
        

//let promis = getData(4);














//Call back hell
// getData(1, () => {
//     console.log('getting data')
//     getData(2, () => {
//         console.log('getting data')
//         getData(3);
//     })
// })

