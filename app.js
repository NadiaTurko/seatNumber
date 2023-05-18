const seatNumber = prompt("Введіть номер місця, який вказаний в білеті");
const mainPart = seatNumber > 0 && seatNumber < 37;
const sidePart = seatNumber > 36 && seatNumber < 55;
const getSeatNumber = (seatNumber) =>
  seatNumber % 2 === 0 ? "верхнім" : "нижнім";
const getSideSeatNumber = (seatNumber) =>
  seatNumber % 2 === 0 ? "бічним верхнім" : "бічним нижнім";

const getKupeNumber = function (seatNumber) {
  if (mainPart) {
    return Math.round(++seatNumber / 4);
  } else if (sidePart) {
    return Math.round((55 - seatNumber) / 2);
  }
};
const messageSeatNumber = function (seatNumber) {
  if (mainPart) {
    return alert(
      `Ваше місце номер ${seatNumber} є ${getSeatNumber(
        seatNumber
      )} в ${getKupeNumber(seatNumber)} купе`
    );
  } else if (sidePart) {
    return alert(
      `Ваше місце номер ${seatNumber} є ${getSideSeatNumber(
        seatNumber
      )} в ${getKupeNumber(seatNumber)} купе`
    );
  } else {
    return alert("Ви вказали місце невірно");
  }
};
const resultSeatNumber = messageSeatNumber(seatNumber);
