document.getElementById('login').addEventListener('click', function(){
    let email = document.getElementById("userEmail");
    let password = document.getElementById("userPassword");
    const emailValue = email.value;
    const passwordValue =  password.value;

    if(emailValue=="rakib@gmail.com" && passwordValue=="secret"){
        window.location.href = "banking.html";
    }else{
        console.log('error');
    }
})

