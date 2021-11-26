let notaPorcen = 78;

if(notaPorcen>=90 && notaPorcen<=100){
    console.log('A');
} else if(notaPorcen>=80 && notaPorcen<90){
    console.log('B');
} else if(notaPorcen>=70 && notaPorcen<80){
    console.log('C');
} else if(notaPorcen>=60 && notaPorcen<70){
    console.log('D');
} else if(notaPorcen>=50 && notaPorcen<60){
    console.log('E');
} else if(notaPorcen<50 && notaPorcen>=0){
    console.log('F');
} else {
    console.log('Nota inválida')
}