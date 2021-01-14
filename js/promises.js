
    
    // .then(data => console(data))


    const myPromise = fetch("https://api.github.com/users");
    myPromise.then(response => console.log(response));
    myPromise.catch(error => console.log(error));
    