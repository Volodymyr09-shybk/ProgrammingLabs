const form =
    document.getElementById("formularz");

form.addEventListener(
    "submit",
    (e) =>
    {
        e.preventDefault();

        const data =
            new FormData(form);

        const object =
        {
            name:
                data.get("name_input"),

            surname:
                data.get("surname_input"),

            age:
                data.get("age_input")
        };

        console.log(object);
        console.log(object.name);
        console.log(object.surname);
        console.log(object.age);

        console.log(
            JSON.stringify(object)
        );
    }
);

//zadanie 2 i 3 
class ComplexNumber
{
    constructor(re, im)
    {
        this.real = re;
        this.imaginary = im;
    }

    wypisz()
    {
        let znak;
        let im =this.imaginary;
        if(this.imaginary < 0) {znak = " - ";im = -im;}
        else{znak = " + ";}
        return this.real + znak + im +"i";
    }
    module() {return Math.sqrt(this.real ** 2 +this.imaginary ** 2);

    }
}

function generujTablice(n)
{
    let tablica = [];
    for(let i = 0; i < n; i++)
    {
        let re =Math.floor(Math.random() * 21 ) - 10;
        let im =Math.floor(Math.random() * 21) - 10;
        tablica.push(new ComplexNumber( re,im));
    }

    return tablica;
}
 
const liczby =generujTablice(5);

console.log("Wylosowane:");

//Zadanie 4
liczby.forEach(x =>console.log(x.wypisz()));
 
const dodatnie =liczby.filter( x =>x.real > 0 &&x.imaginary > 0);
console.log("Dodatnie:");
 
dodatnie.forEach(x =>console.log(x.wypisz()));

//Zadanie 5
const zamienione =liczby.map(x =>new ComplexNumber(x.imaginary,x.real));

console.log("Zamienione:");

zamienione.forEach(x =>console.log(x.wypisz()));

//Zadanie 6 
const sumaModulow =liczby.reduce((a, b) =>a + b.module(),0);

console.log("Suma modułów:",sumaModulow);

//Zadanie 7
const minModul =liczby.reduce((a, b) =>a.module() < b.module()? a : b);

console.log("Najmniejszy moduł:",minModul.module());

//Zadanie 8s
const maxliczb = liczby.reduce((a, b) =>a.module() > b.module()? a : b);

console.log("Największa liczba:",maxliczb.wypisz());