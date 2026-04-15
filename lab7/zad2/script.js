document.getElementById("btn").addEventListener("click", function () {

    let user = document.getElementById("user").value;
    let email = document.getElementById("email").value;
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;
    let birth = document.getElementById("birth").value;
    let gender = document.getElementById("gender").value;
    let rules = document.getElementById("rules").checked;
    let ver = document.querySelector('input[name="ver"]:checked');

    let msg = document.getElementById("msg");
    let errors = [];

    if (!user || !email || !pass1 || !pass2 || !birth || !gender || !rules || !ver) {
        errors.push("Wypełnij wszystkie pola");
    }

    if (pass1.length < 8) {
        errors.push("Hasło min 8 znaków");
    }

    if (pass1 !== pass2) {
        errors.push("Hasła są różne");
    }

    if (errors.length > 0) {
        msg.innerHTML = "<div class='error'>" + errors.join("<br>") + "</div>";
    }
    
    else {
        msg.innerHTML =
            "<div class='success'>Rejestracja udana!<br>" +
            "Login: " + user + "<br>" +
            "Email: " + email + "<br>" +
            "Płeć: " + gender + "<br>" +
            "Wersja: " + ver.value +
            "</div>";
    }
    document.getElementById("bn").addEventListener('click',function() {

    } )
    

});