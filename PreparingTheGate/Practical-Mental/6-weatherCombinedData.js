
async function fetchData(country){

    try{
       const countryData = await fetch(`https://restcountries.com/v3.1/name/${country}`);
       const countryDataJson = await countryData.json();

       const capital = countryDataJson[0].capital[0];
       const lat = countryDataJson[0].latlng[0];
       const lon = countryDataJson[0].latlng[1];
        
       const weatherData = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
       const weatherDataJson = await weatherData.json();
       
       const temperature = weatherDataJson.current_weather.temperature;

    //    console.log(`
    //       {
    //        country; ${country},
    //        capital: ${capital},
    //        temperature: ${temperature}
    //       }
    //     `);
           
    return {
        country: country,
        capital: capital,
        temperature: temperature
    };

    }catch(error){
        throw new Error(error.message);
    }
}


//if you want to use the return statement in the fetchData function, you need to use the then method to get the data
// or you can just console the result in the function and call the function in the usual way

fetchData('France').then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error.message);
});
