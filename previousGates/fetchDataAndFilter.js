// Use the async/await syntax to fetch vehicle manufacturers’ data from the given API endpoint. After fetching,
//  filter the results and log to the console only manufacturers whose Country is equal to "UNITED STATES (USA)"

async function getManufacturer(){
    try{
        const data = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json');
        const response = await data.json();
        
        const usManufacturers = response.Results.filter( manufacturer => manufacturer.Country === 'UNITED STATES (USA)');
        console.log (usManufacturers);

    }catch(error){
        throw new Error(error.message);
    }
}

console.log(getManufacturer());