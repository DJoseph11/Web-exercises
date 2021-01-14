
    
    // .then(data => console(data))


    const myPromise = fetch("https://api.github.com/users");
    const githubPromise = fetch("https://api.github.com/repositories");
    const bitbucketPromise = fetch("https://api.bitbucket.org/2.0/repositories");
    // .then: accepts a callback that will run when the promise is resolved.
    // myPromise.then(response => console.log(response));

    // // .catch: accepts a callback that will run when the promise is rejected.
    // myPromise.catch(error => console.log(error));


    Promise.all([githubPromise, bitbucketPromise, myPromise])
    .then(data => {
console.log(data);
    })
    .catch(error => {
        console.log(error);
    })