function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfMonth(){
  let listaDias = document.querySelector('#days')

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let dia = dezDaysList[i];
    let diaItem = document.createElement('li');

    if (dia === 24 || dia === 31){
      diaItem.className = 'day holiday';
      diaItem.innerHTML = dia;
      listaDias.appendChild(diaItem)
    } else if (dia === 4 || dia === 11 || dia === 18){
      diaItem.className = 'day friday';
      diaItem.innerHTML = dia;
      listaDias.appendChild(diaItem)
    } else if (dia === 25){
      diaItem.className = 'day holiday friday';
      diaItem.innerHTML = dia;
      listaDias.appendChild(diaItem)
    } else {
      diaItem.innerHTML = dia;
      diaItem.className = 'day';
      listaDias.appendChild(diaItem)
    }
  }  
}
createDaysOfMonth();

function createHolidayBtn(stringFeriado) {
  let selectDivHoliday = document.querySelector('.buttons-container');
  let createButtonHoliday = document.createElement('button');
  createButtonHoliday.id = 'btn-holiday';

  createButtonHoliday.innerHTML = stringFeriado;
  

  selectDivHoliday.appendChild(createButtonHoliday);
}
  createHolidayBtn('Feriados');

function clickFeriados() {
  let selectHolidayButton = document.querySelector('#btn-holiday');
  let selectHoliday = document.querySelectorAll('.holiday');

  selectHolidayButton.addEventListener('click', function() {
    for (let i = 0; i < selectHoliday.length; i += 1){
      if (selectHoliday[i].style.backgroundColor === 'white'){
        selectHoliday[i].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        selectHoliday[i].style.backgroundColor = 'white';
      }
    }
  })
}
clickFeriados();

function createFridayBtn(stringSexta) {
  let selectDivFriday = document.querySelector('.buttons-container');
  let createButtonFriday = document.createElement('button');
  createButtonFriday.id = 'btn-friday';

  createButtonFriday.innerHTML = stringSexta;

  selectDivFriday.appendChild(createButtonFriday);
}
  createHolidayBtn('Sexta-feira');


function clickSexta (arraySexta) {
  let selectBtnFriday = document.querySelector('#btn-friday');
  let selectFriday = document.getElementsByClassName('friday');

  selectBtnFriday.addEventListener('click', function (){
    for (let i = 0; i < selectFriday.length; i += 1){
      if (selectFriday[i].innerHTML !== 'SEXTOU!'){
        selectFriday[i].innerHTML = 'SEXTOU!';
      } else {
        selectFriday[i].innerHTML = arraySexta[i];
      }
    }
  })
};