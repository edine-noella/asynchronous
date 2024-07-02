
function setAlarm( name, delay){

    return new Promise((resolve,reject) => {
        if(delay <2 ){
           reject ("delay is not sufficient");
        }

        setTimeout(()=>{
           resolve(`Wake Up ${name}`);
        })

    }, delay * 1000)

    
}


setAlarm('Edine', 1).then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.log(err);
})