//use

async function performFastAsync(url, delay) {

    return new Promise((resolve, reject) => {

        const controller = new AbortController();
        const signal = controller.signal;

        const timeoutId = setTimeout(() => {
            controller.abort();
            resolve([]);
        }, delay);

        fetch(url, { signal })
            .then(response => response.json())
            .then(data => {
                clearTimeout(timeoutId);
                resolve(data);
            })
            .catch(error => {
                if (error.name === 'AbortError') {
                    console.log('Request aborted');
                    // resolve([]);
                } else {
                    reject(error);
                }
            });
    });
}

// performFastAsync('https://jsonplaceholder.typicode.com/todos/1', 9000)
// .then((data) => {
// 	console.log(data)
// })  

performFastAsync('https://jsonplaceholder.typicode.com/todos/1', 10)
// .then((data) => {
// 	console.log(data)
// })

