

function fetchMultipleAPIs(apiUrls){

    return new Promise ((resolve,reject) => {

        const data = apiUrls.map( (url) => fetch(url).then( results => results.json()));
        const results = Promise.all(data);
        resolve(results);


    })

}




const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'
  ];
  
  fetchMultipleAPIs(apiUrls)
    .then(results => {
      console.log('Combined Results:', results);
    })
    .catch(error => {
      console.log('Error:', error.message);
    });

