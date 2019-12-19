window.onload= function () {
/*var fs = require('fs');
var filename = './db.json',
var credentials = fs.readFileSync(filename,'utf8');*/
var credentials = [
  {
    "id": 1,
    "username": "admin1",
    "password": "admin1"
  },
  {
    "id": 2,
    "username": "admin2",
    "password": "admin2"
  }
];

var unsuccess = document.getElementById('unsuccess');
var loginBtn = document.getElementById('loginBtn');
var clearBtn = document.getElementById('clearBtn');
var inputUser = document.getElementById('username');
var inputPassword = document.getElementById('password');


function loginSuccess(){
	window.location.replace('loginSuccess.html');
}
function clearInput(){
	inputUser.value = '';
	inputPassword.value = '';
}


loginBtn.addEventListener('click', function(){
	var result = credentials.find(function(item){
		return item.username === inputUser.value && item.password === inputPassword.value;
	});
	if(result) loginSuccess();
	else unsuccess.innerHTML = 'Username or Password is invalid! <br>';
});

clearBtn.addEventListener('click', clearInput);

}


