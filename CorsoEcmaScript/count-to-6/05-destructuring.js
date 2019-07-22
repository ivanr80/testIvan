let userArray = process.argv.slice(2);

let userObj = {};

 // userArray equals here e.g. [1, "jdoe", "jdoe@example.com", "John", "Doe"]
[, userObj.username, userObj.email] = userArray;


console.log(userObj); 

// {username: "jdoe", email: "john@doe.com"}