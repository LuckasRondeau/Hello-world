alert ("Eres el visitante N° 1.000.000 , gracias ");

function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours+":"+mins+":"+secs;
  }
  setInterval(printTime, 1000);

