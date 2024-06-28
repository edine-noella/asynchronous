
//a function that fetches data from api 
//the function retriest a number of times if the request fails


async function fetchData(url, retries) {
    try {
        let response = await fetch(url);

        if (response.ok) {
            console.log(await response.json());
        }
        
    } catch (error) {
        if (retries > 0) {
            retries--;
            fetchData(url, retries);            
        } 
        console.log(error);
    }
   console.log(retries)   
}



   fetchData('https://jsonplaceholder.typicode.com/posts', 3)