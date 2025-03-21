// console.log('file connected');

// normal function
function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

// normal function to async function convert
async function loadUserAsync(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data);
}


// arrow function
const loadUserArrow = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data);
}


// use catch option in normal function or arrow function
const loadUserCatch = async () => {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json();
        console.log(data);
    }catch{

    }
}