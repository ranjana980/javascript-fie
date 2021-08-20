// Promise constructor
let promise = new Promise(function(resolve, reject) {
    const x = "apple";
    const y = "aple";
    if (x === y) {
       resolve();
    } else {
       reject();
    }
});// Consuming the Promise
promise
  .then(function () {
     console.log('Successful');
  })
  .catch(function () {
     console.log('Some error has occured');
  });