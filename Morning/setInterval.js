//Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds

async function printNumberOnInterval(){
    let count = 0;
    let intevalId = setInterval(()=>{
         console.log(count);
         count++;
        }, 2000);

    setTimeout(()=>{
       clearInterval(intevalId)
    },5000)

}


printNumberOnInterval();