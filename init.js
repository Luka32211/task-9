
window.onload = function () {
    const initPerson = personGenerator.getPerson();
    output(initPerson);
};

document.getElementById('btn-clear').addEventListener("click", () => {
    output();
});

document.getElementById('btn-gener').addEventListener("click", () => {
    const initPerson = personGenerator.getPerson();
    output(initPerson);
});

function output(person = { firstName: '', surname: '', gender: '', patronymic: '', profession: '', birthYear: '' }) {
    document.getElementById('firstNameOutput').innerText = person.firstName;
    document.getElementById('surnameOutput').innerText = person.surname;
    document.getElementById('genderOutput').innerText = person.gender;
    document.getElementById('patronymicOutput').innerText = person.patronymic;
    document.getElementById('professionOutput').innerText = person.profession;
    document.getElementById('birthYearOutput').innerText = person.birthYear;
}
