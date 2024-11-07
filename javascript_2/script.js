let age = prompt("Yaşı daxil edin: ");
age = parseInt(age);

switch(true) {
    
    case age >= 0 && age <3:
        alert("Körpə!")
        break;
    case age >= 3 && age < 13:
        alert("Uşaq!")
        break;
    case age >= 13 && age < 18:
        alert("Yeniyetmə!")
    break;
    case age >= 18 && age < 35:
        alert("Gənc!")
        break;
    case age >= 35 && age < 55:
        alert("Orta yaşlı!")
        break;
    case age >= 55 && age < 90:
        alert("Yaşlı!")
        break;
    case age >= 90 :
        alert("Mərmər!")
        break;
    default:
        alert("Yaş formatı düzgün daxil edilməyib !")
  }