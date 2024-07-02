// Implement a timeout(5 milliseconds) for an asynchronous fetch request. If the request takes longer than a specified time, it should be aborted. 

// https://jsonplaceholder.typicode.com/users

async function fetchData (){

    try{

        const controller = new AbortController();
        const signal = controller.signal;

        const data = await fetch("https://jsonplaceholder.typicode.com/users",
            {signal: AbortSignal.timeout(5)}
        )

        const response = await data.json();

        console.log(response);

    }catch(error){
        throw new Error(error.message);
    }
}

fetchData();