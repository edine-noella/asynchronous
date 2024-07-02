function myFetch(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject(new Error(`Request failed with status ${xhr.status}`));
        }
      };
      xhr.onerror = function() {
        reject(new Error('Request failed'));
      };
      xhr.send();
    });
  }
  
  // Usage example:
  myFetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => {
      console.log('Data:', data);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });