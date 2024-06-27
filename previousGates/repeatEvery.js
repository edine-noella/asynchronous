//Implement a function called repeatEvery() that takes another function and a time interval (in milliseconds) as arguments.
// This function should execute the given function repeatedly at the specified time interval until manually stopped.

function repeatEvery(func, time){
    // setInterval repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. 
    // This method returns an interval ID which uniquely identifies the interval,
    //  so you can remove it later by calling clearInterval()

    setInterval(func , time);
    // return interval;
}

let add = () => console.log('hello');


// console.log(repeatEvery(() => console.log('hello'), 1000)); 
console.log(repeatEvery(add, 1000));
