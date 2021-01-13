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

let l = users.filter( lang => lang.languages.length >= 3)

console.log(l)

let e = users.map( lang => lang.email);

console.log(e)