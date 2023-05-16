let seatNumber = prompt("Введіть номер місця, який вказаний в білеті");

const getKupeNumber = function(seatNumber){
    if(seatNumber > 0 && seatNumber < 36){
    return Math.round(++seatNumber/4);
}
    else if(seatNumber > 36 && seatNumber < 54){
    return Math.round((54 - seatNumber)/2);
    } 
};


const getSeatNumber = seatNumber => (seatNumber % 2 == 0 && seatNumber > 0 && seatNumber < 36) ? "верхнім" : "нижнім";
const getSideSeatNumber = seatNumber => (seatNumber % 2 == 0 && seatNumber > 35 && seatNumber < 54) ? "бічним верхнім" : "бічним нижнім";


if (seatNumber > 0 && seatNumber < 36){
    alert (` Ваше місце номер ${seatNumber} є ${getSeatNumber(seatNumber)} в ${getKupeNumber(seatNumber)} купе`);
} else if (seatNumber > 36 && seatNumber < 54){
    alert (` Ваше місце номер ${seatNumber} є ${getSideSeatNumber(seatNumber)} в ${getKupeNumber(seatNumber)} купе`);
} else{
   alert("Ви вказали місце невірно");
};
