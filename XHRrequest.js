const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
//true means that the request should be asynchronous
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      console.log('Response:', xhr.responseText); // Handle the response data
    } else {
      console.error('Request failed:', xhr.status); // Handle error cases
    }
  }
};
xhr.send();