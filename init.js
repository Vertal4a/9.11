


window.onload = startGenerator();
   //кнопка генерации
function startGenerator() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName; 
    document.getElementById('proffesionOutput').innerText = initPerson.proffesion;
    document.getElementById('birthYearOutput').innerText = initPerson.yearOfBirth;
    document.getElementById('monthOutput').innerText = initPerson.monthOfBirth;
    document.getElementById('dateOutput').innerText = initPerson.dateOfBirth;

}

// кнопка обнуления
function cleanFields() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText  = "пустота";
    document.getElementById('surnameOutput').innerText = "тишь";
    document.getElementById('genderOutput').innerText = "ничего";
    document.getElementById('middleNameOutput').innerText = "штиль"; 
    document.getElementById('proffesionOutput').innerText = "вакуум";
    document.getElementById('birthYearOutput').innerText = "пустыня";
    document.getElementById('monthOutput').innerText = "неизвестность";
    document.getElementById('dateOutput').innerText = '';

}

document.getElementById('button1').addEventListener('click', function (event) {
   
 startGenerator();
    event.preventDefault();
})

document.getElementById('button2').addEventListener('click', function () {
    cleanFields();
})





