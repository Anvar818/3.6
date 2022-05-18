
alert("Assalomu aleykum hurmatli mijoz");
firstName = prompt("Ismingizni kiriting:");
alert("'All Tripp!' sayohat agentligimizga Xush kelibsiz " + firstName);
alert("Sayohat uchun borib-kelish chipta narxi: 500$");
alert("Mehmonxona to’lovi: $250");
alert("Muzey uchun harajatlar : 120 €");
alert("minimal mablag' : 8.317.500");
var biletUsd = 500;
var hotelUsd = 250;
var museumEuro = 120;
var usdToUzs = 9433.34;
var euroToUzs = 10354.03;
var totalCost = usdToUzs * (biletUsd + hotelUsd) + museumEuro * euroToUzs
var yourMoney = Number(prompt("Mablag'ingizni kiriting"-0));
var elMain = document.querySelector('.myanswer');
if(totalCost < yourMoney && yourMoney <= 10000000){
    elMain.textContent = "Mablag'ingiz yetadi, sizga oq yo'l tilaymiz"
}else if(yourMoney > 10000000) {
    elMain.textContent  = "Mablag'ingiz yetadi, sizga oq yo'l tilaymiz"
}else {
    elMain.textContent  = "Hurmatli mijoz sizning mablag'ingiz sayohat uchun yetarli emas, ozgina sabr qiling";
}

console.log(totalCost);
