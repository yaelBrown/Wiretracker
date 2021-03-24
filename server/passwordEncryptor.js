// Application is designed to encrypt a password and manually added to the db.json file

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(11);
var hash = bcrypt.hashSync("B4c0/\/", salt);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Type a password: ', pw => {
    console.log(bcrypt.hashSync(pw, salt))
})