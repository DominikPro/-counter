let czasnaPrzewiniecie = 28; //W mili sekundach szybkość przewijania
let wielkosc = 66; // Do jakiek liczby ma przewijać
let number = 0; // liczba startowa
let interwal;

let spanNumber = document.getElementById("number");
interwal = setInterval(changeNmber, czasnaPrzewiniecie);

function changeNmber() {
  if (number < wielkosc) {
    number++;
  }
  spanNumber.innerHTML = number;
}
changeNmber();