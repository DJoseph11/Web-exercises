const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// let l = users.filter( lang => lang.languages.length > 3);

// // console.log(l);
// language is greater than 3 
// a loop for users to find each indexes user with the property language

// let lang = users.forEach( a => {
//     if(a.languages.length >= 3) {
//         console.log(a)
//     }
    
// })

// the lang replaced the users const in the callback function
let l = users.filter( lang => lang.languages.length >= 3);

console.log(l);

// the same below for the same solution
let e = users.map( lang => lang.email);

console.log(e);

//  total is the accumulation to store the what is being processed from the users objects
// which was replaced by the years as the second argument which gives the option of passing the
// years.(users.properties)
let y = users.reduce((total, years) => {
    return (total + years.yearsOfExperience) ;
},0) / users.length;

console.log(y);

// let long = users.reduce((currentLongest, user) =>  user.email.length > currentLongest.email.length ? user : currentLongest, user[0])
// console.log(long)

let n = users.reduce((listName, user) => {
    let b = [];
    if(listName.indexOf(user) === -1) {
        b.push(user);
    }
    return b
})

console.log(n)
