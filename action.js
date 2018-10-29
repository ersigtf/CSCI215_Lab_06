function checkEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);

}

function checkAge() {
    var regEx = new RegExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$');
    var age = document.getElementById("age").value;
    var i;
    var incorrectValue = false;
    for (i=0; i < age.length; i++){
        if (age.charAt(i)== '.'){
            incorrectValue = true;
        }
    }
    if((i>3) || incorrectValue) {
       document.getElementById("age").style.backgroundColor = "red";
    } else {
        document.getElementById("age").style.backgroundColor = "rgba(255,255,255,.5)";
    }
}

function checkName() {
    var nameString = document.getElementById("name").value;
    for (var i = 0; i < nameString.length; i++){
        if (nameString.charAt(i) == '<'){
            document.getElementById("name").style.backgroundColor = "red";
        }
        else {
            document.getElementById("name").style.backgroundColor = "rgba(255,255,255,.5)";
        }
    }
}

function validate() {
    var email = document.getElementById("email").value;
    var goodEmail = checkEmail(email);

    if (goodEmail){
        myAjaxFunction();
    }
    else {
        window.alert("The information could not be processed. Please review and correct any mistakes.")
    }
}

function myAjaxFunction() {
    window.alert("The AJAX has been created.")
    document.getElementById("name").reset();
    document.getElementById("age").reset();
    document.getElementById("email").reset();

}