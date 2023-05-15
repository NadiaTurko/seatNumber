let kupeNumber = function(seatNumber){
    if (seatNumber > 0  && seatNumber < 5 || seatNumber == 52 || seatNumber == 53  ){
       return 1;
   }
    else if (seatNumber > 3  && seatNumber < 8 || seatNumber == 50 || seatNumber == 51 ){
       return 2; 
    }
    else if (seatNumber > 7  && seatNumber < 12  || seatNumber == 48 || seatNumber == 49){
       return 3;
    }
    else if (seatNumber > 11  && seatNumber < 16 || seatNumber == 46 || seatNumber == 47){
       return 4; 
    }
    else if (seatNumber > 15  && seatNumber < 20 || seatNumber == 44 || seatNumber == 45){
       return 5;
    }
    else if (seatNumber > 19  && seatNumber < 24 || seatNumber == 42 || seatNumber == 43 ){
       return 6;
    }
    else if (seatNumber > 23  && seatNumber < 28 || seatNumber == 40 || seatNumber == 41 ){
       return 7;
    }
    else if (seatNumber > 27  && seatNumber < 32 || seatNumber == 38 || seatNumber == 39 ){
       return 8;
    }
    else if (seatNumber > 31  && seatNumber < 37 || seatNumber == 36 || seatNumber == 37){
       return 9;
    }
    else{
       return ("Місце вказано невірно!!!")
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
    alert (` Ваше місце номер ${seatNumber} є нижнім в ${kupeNumber(seatNumber)} купе`);
}
else if (seatNumber % 2 == 0 && seatNumber > 36 && seatNumber < 54 ){
    alert (` Ваше місце номер ${seatNumber} є верхнім в ${kupeNumber(seatNumber)} купе`);
}
else{
    alert ("Номер місця вказаний не вірно");
}

