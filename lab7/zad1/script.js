 document.getElementById("calcBtn").addEventListener("click", function () {

    const output = document.getElementById("wynik");

    try {
        let val1 = document.getElementById("num1").value.replace(",", ".");
        let val2 = document.getElementById("num2").value.replace(",", ".");

        if (val1 === "" || val2 === "") {
            throw "Pola nie mogą być puste!";
        }

        let a = parseFloat(val1);
        let b = parseFloat(val2);

        if (isNaN(a) || isNaN(b)) {
            throw "Wpisz poprawne liczby!";
        }

        if (b === 0) {
            throw "Nie można dzielić przez zero!";
        }

        let wynik = a / b;

        output.style.color = "green";
        output.innerText = "Wynik: " + wynik;

    } catch (err) {

        output.style.color = "red";
        output.innerText = err;
    }

});