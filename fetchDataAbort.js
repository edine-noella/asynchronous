//an asynch await function that fetches data and abort when it takes longer than 10milliseconds

// async function fetchDataAbort(){

//     try{
    
//         var start = Date.now();
        
//         const abortController = new AbortController();
//         const signal = abortController.signal;
//         setTimeout(() => abortController.abort(), 10);
  
//         const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         const response = await data.json();
       
//     console.log(response)

//     }catch(error){
//         throw new Error('error occured!')
//     }
// }

// Write a function that takes a URL and fetches data from that URL but aborts when the request takes more than 10ms

async function fetchDataAbort(){
    try{

        const controller = new AbortController();
        const signal = controller.signal;

        // setTimeout(() => controller.abort(), 1000);

        const data = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            signal: AbortSignal.timeout(10)
        });
        const response = await data.json();
        console.log(response);

    }catch(error){
        throw new Error(error.message);
    }

}

console.log(fetchDataAbort())