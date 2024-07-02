console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('Promise 1');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise 2');
      }, 0);
    });
  })
  .then((result) => {
    console.log(result);
  });

console.log('End');
