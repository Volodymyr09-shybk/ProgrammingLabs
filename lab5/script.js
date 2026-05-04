//Zad1
function funkcjaTestowa() {
    console.log("Witaj JS!");
}
funkcjaTestowa();


//Zad2
function parzyste(a, b) {
    let wynik = [];
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            wynik.push(i);
        }
    }
    console.log("Parzyste:", wynik);
}
parzyste(1, 20);


//Zad3
function fibonacci(n) {
    let tab = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) tab.push(0);
        else if (i === 1) tab.push(1);
        else tab.push(tab[i - 1] + tab[i - 2]);
    }
    console.log("Fibonacci:", tab);
}
fibonacci(10);


//Zad4
function silnia(n) {
    if (n === 0) return 1;
    return n * silnia(n - 1);
}
console.log("Silnia:", silnia(5));


//Zad5
function liczPi(n) {
    let suma = 0;
    for (let i = 0; i < n; i++) {
        let znak = (i % 2 === 0) ? 1 : -1;
        suma += znak * (1 / (2 * i + 1));
    }
    console.log("PI:", 4 * suma);
}
liczPi(1000);


//Zad6
function choinka(n) {
    console.log("Choinka:");
    for (let i = 1; i <= n; i++) {
        let spacje = " ".repeat(n - i);
        let gwiazdki = "*".repeat(2 * i - 1);
        console.log(spacje + gwiazdki);
    }
}
choinka(5);


//Zad7
function naHex(liczba) {
    let hex = "";
    let znaki = "0123456789ABCDEF";

    while (liczba > 0) {
        let reszta = liczba % 16;
        hex = znaki[reszta] + hex;
        liczba = Math.floor(liczba / 16);
    }

    console.log("HEX:", hex);
}
naHex(255);