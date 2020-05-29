function CBR_XML_Daily_Ru(rates) {
  function trend(current, previous) {
    if (current > previous) return ' ▲';
    if (current < previous) return ' ▼';
    return '';
  }
  
  var HKDrate = rates.Valute.HKD.Value.toFixed(4);
  HKDrate = HKDrate / 10; //Показываем курс к одному HKD, а не десяти
  var HKD = document.getElementById('HKD');
  HKD.innerHTML = HKD.innerHTML.replace('00,0000', HKDrate);
  HKD.innerHTML += trend(rates.Valute.HKD.Value, rates.Valute.HKD.Previous);
}

