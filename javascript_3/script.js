let saat = prompt("Saatı daxil edin (24 saatlıq saat formatına əsasən, qoşa nöqteni ixtisar edib  daxil edin :  12:00 -> 1200 , 13:45 -> 1345):  ");
saat = parseInt(saat);


switch (true) {
    case ((saat >= 0 && saat < 500) || (saat >= 1500 && saat < 2400 )) && (saat % 100 < 60):
        alert("Axşamınız xeyir!");
        break;
    case (saat >= 500 && saat <1200) && (saat % 100 < 60):
        alert("Sabahınız  xeyir!");
        break;
    case (saat >= 1200 && saat < 1500) && (saat % 100 < 60):
        alert("Günortanız xeyir!");
        break;

    
    default:
        alert("Saat düzgün daxil edilməyib!");
       
}
