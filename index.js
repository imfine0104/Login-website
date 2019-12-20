window.onload= function () {
var credentials;
var creUrl = 'http://localhost:3000/credentials';
axios.get(creUrl).then(function(res){
	if(res.data){
		credentials = res.data;
	}else credentials = [];
});
var unsuccess = document.getElementById('unsuccess');
var loginBtn = document.getElementById('loginBtn');
var createBtn = document.getElementById('createBtn');
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
	else {
		clearInput();
		unsuccess.innerHTML = 'Username or Password is invalid! <br>';
		}
	});
createBtn.addEventListener('click', function(){
	window.location.assign('createAccount.html');
});
}


