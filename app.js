const kupeNumber = function(seatNumber){
    if(seatNumber > 0 && seatNumber < 37){
    return Math.round(++seatNumber/4);
}
    else if(seatNumber > 36 && seatNumber < 54){
    return Math.round((54 - seatNumber)/2);
    }
}


let seatNumber = prompt("Введіть номер місця, який вказаний в білеті");
if (seatNumber % 2 != 0 && seatNumber > 0 && seatNumber < 36){
    alert (` Ваше місце номер ${seatNumber} є нижнім в ${kupeNumber(seatNumber)} купе`);
}
else if (seatNumber % 2 == 0 && seatNumber > 0 && seatNumber < 36 ){
    alert (` Ваше місце номер ${seatNumber} є верхнім в ${kupeNumber(seatNumber)} купе`);
}
else if (seatNumber % 2 != 0 && seatNumber > 36 && seatNumber < 54 ){
    alert (` Ваше місце номер ${seatNumber} є нижнім боковим в ${kupeNumber(seatNumber)} купе`);
}
else if (seatNumber % 2 == 0 && seatNumber > 36 && seatNumber < 54 ){
    alert (` Ваше місце номер ${seatNumber} є верхнім боковим в ${kupeNumber(seatNumber)} купе`);
}
else{
    alert ("Номер місця вказаний не вірно");
}

