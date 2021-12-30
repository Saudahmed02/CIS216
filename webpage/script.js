var registeredAccounts = [
    {
        username: "John",
        password: "12pass" 
    },

    {
        username: "saud",
        password: "games"
    },

    {
        username: "sam",
        password: "coding"
    }
];


//Event Handler
function getInfo(){

    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;

    for (i  = 0; i < registeredAccounts.length; i++)
    {
        if(username == registeredAccounts[i].username && password == registeredAccounts[i].password)
        {
            console.log(username + "is successfully logged in!");
        }
        else
        {
            console.log("No Username found!");
        }
    }
}