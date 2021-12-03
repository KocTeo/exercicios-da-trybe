document.getElementsByTagName('header')[0].style.backgroundColor = 'rgb(76,164,109)';

for(i=0; i<document.getElementsByClassName('emergency-tasks').length; i+=1){
    document.getElementsByClassName('emergency-tasks')[i].style.backgroundColor = 'pink';
}

for(i=0; i<document.querySelectorAll('.emergency-tasks div h3').length; i+=1){
    document.querySelectorAll('.emergency-tasks div h3')[i].style.backgroundColor = 'rgb(145, 4, 145)';
}

for(i=0; i<document.getElementsByClassName('emergency-tasks').length; i+=1){
    document.getElementsByClassName('no-emergency-tasks')[i].style.backgroundColor = 'yellow';
}

for(i=0; i<document.querySelectorAll('.no-emergency-tasks div h3').length; i+=1){
    document.querySelectorAll('.no-emergency-tasks div h3')[i].style.backgroundColor = 'black';
}

document.getElementById('footer-container').style.backgroundColor = 'rgb(8, 77 ,110)';