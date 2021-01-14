
   
   















    // .then(data => console(data))


    const myPromise = fetch("https://api.github.com/users");
    const githubPromise = fetch("https://api.github.com/repositories");
    const bitbucketPromise = fetch("https://api.bitbucket.org/2.0/repositories");
    // .then: accepts a callback that will run when the promise is resolved.
    // myPromise.then(response => console.log(response));

    // // .catch: accepts a callback that will run when the promise is rejected.
    // myPromise.catch(error => console.log(error));


    // Promise.all([githubPromise, bitbucketPromise, myPromise])
    // .then(data => {
    //     console.log(data);
    // })
    // .catch(error => {
    //     console.log(error);
    // })

    Promise.resolve('jake_one').then((one) => {
        // .resolve() immediately return a resolved promise with the
        // value. 
        console.log(one);
        return 'two_bird';
    }).then((tw) => {
        console.log(tw);
        return 'three_head';
    }).then((three) => {
        console.log(three);
        return "bald dad"
    }).then((dad) => {
        console.log(dad)
    });
    
    // the passed value jake_one would get attach to (one) then then
    // the callback function would return a value that can also be treated
    // as a promise. and then you can another promise to that in then
    // above example (tw) is assigned the return value of jake_one which
    // was two_bird then so on and so forth

myPromise.then(res => {
    res.json().then((users) => {
        users.forEach(user => {
            // console.table(user.login);
        });
    } );
});


const getHubUserName = () => {
    return fetch("https://api.github.com/users").then(res => res.json());
}

getHubUserName().then(users => {
    users.forEach(user => {
        console.log(user.login);
    });
}).catch(error => {
    console.error(error)
})

const secondPromise = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve();
        } else {
            reject();
        }
})

console.log(SecondPromise())