var creUrl = 'http://localhost:3000/credentials';
var createBtn = document.getElementById('createBtn');
var inputUser = document.getElementById('username');
var pass1 = document.getElementById('password1');
var pass2 = document.getElementById('password2');
var unsuccess = document.getElementById('unsuccess');
var content = document.getElementById('content');

function newAccount(user,pass){
	axios.post(creUrl,{
	username: user,
    password: pass
	});
}
function clearInput(){
	inputUser.value = '';
	pass1.value = '';
	pass2.value = '';
}
function backLogin(){
			window.location.replace('index.html');
}
createBtn.addEventListener('click',function(){
	if(pass1.value === '' || pass2.value === '' || inputUser.value === ''){
		unsuccess.innerHTML = 'Username or Password is invalid! <br>';
		clearInput();
	}
	else if(pass1.value === pass2.value ){
		newAccount(inputUser.value, pass2.value);
		content.innerHTML = 
		'<h1 style="text-align: center; color: red;"> Created Successful! </h1>';
	}
	else {
		unsuccess.innerHTML = 'Username or Password is invalid! <br>';
		clearInput();
	} 
});

