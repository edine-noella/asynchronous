
//an async function createAlarm 
//the function takes delay time in seconds and the person's name as arguments
//if the delay is less than 2 seconds, the promise should reject with an error message "Delay is not sufficient"

function createAlarm(delay, name) {
    return new Promise((resolve, reject) => {
        if (delay < 2) {
            reject("Delay is not sufficient");
        }
        setTimeout(() => {
            resolve(`Wake up ${name}`);
        }, delay*1000 );
    });
}



createAlarm(1, 'John').then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});


