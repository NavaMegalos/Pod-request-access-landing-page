document.getElementById('submit').addEventListener('click', function(e){ 
    e.preventDefault();
    let validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.getElementById('email').value;
    console.log(email.trim().length)
    console.log(validEmailRegex.test(email))
    if( email.trim().length <= 0 || !validEmailRegex.test(email) ) {
        document.getElementById('error-message').style.display = "inherit";
    }
    else {
        document.getElementById('error-message').style.display = "none";
        alert('Podcast Succesfully Posted!')
    }


});