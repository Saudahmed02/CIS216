///Creating an array
var registeredAccounts =
[
    {
        username: "john",
        password: "12pass"
    },

    {
        username: "smith",
        password: "coder"
    },

    {
        username: "sam",
        password: "coding"
    }
];



//Login Information
function getInfo(){

    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;


    //Checking the function if the user and password are correct
    for (var i = 0; i < registeredAccounts.length; i++)
    {
        if((user == registeredAccounts[i].username) && (pass == registeredAccounts[i].password))
        {
            console.log(user + " successfully logged in!");
            return;
        }
    }

    console.log("Incorrect username or password");


};



//Function that registers student accounts
function registerUser()
{
    var registerUser = document.getElementById('newUsername').value;
    var registerPassword = document.getElementById('newPassword').value;

    var newUser = {
        username: registerUser,
        password: registerPassword
    }

    for(i = 0; i < registeredAccounts.length; i++)
    {
        if(registerUser == registeredAccounts[i].username)
        {
            alert("That Username already exits, please choose another");
            return;

        }else if (registerPassword.length < 8){
            alert("that password is too short, include 8 or more characters");
            return;
        }
    }

    registeredAccounts.push(newUser);
    console.log(registeredAccounts);
}