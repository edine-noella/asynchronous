// console.log('Start');

// setTimeout(() => {
// console.log('Timeout 1');
// }, 0);

// Promise.resolve()
// .then(() => {
// console.log('Promise 1');
// })
// .then(() => {
// console.log('Promise 2');
// });

// setTimeout(() => {
// console.log('Timeout 2');
// }, 0);

// console.log('End');

const promise = new Promise((resolve, reject) => {
    console.log('Promise created');
    resolve('First resolve');
  });
  
  promise
    .then((result) => {
      console.log(result);
      return 'Second resolve';
    })
    .then((result) => {
      console.log(result);
      throw new Error('Error in chain');
    })
    .catch((error) => {
      console.error('Caught:', error.message);
    })
    .then(() => {
      console.log('After catch');
    });