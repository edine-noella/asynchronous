// Example data to send in the POST request
const postData = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };
  
  // Fetch options
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // Add other headers as needed
    },
    body: JSON.stringify(postData) // Convert JavaScript object to JSON string
  };
  
  // Make the POST request
  fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON response
    })
    .then(data => {
      console.log('Post created:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });





  