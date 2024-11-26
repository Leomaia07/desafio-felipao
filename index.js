let nomeHeroi = "leo";
let xpHeroi = 100000;

switch (true) {
    case xpHeroi < 1000:
        console.log(nomeHeroi + " é de nível Ferro.");
        break;
    case xpHeroi <= 2000:
        console.log(nomeHeroi + " é de nível Bronze.");
        break;
    case xpHeroi <= 5000:
        console.log(nomeHeroi + " é de nível Prata.");
        break;
    case xpHeroi <= 7000:
        console.log(nomeHeroi + " é de nível Ouro.");
        break;
    case xpHeroi <= 8000:
        console.log(nomeHeroi + " é de nível Platina.");
        break;
    case xpHeroi <= 9000:
        console.log(nomeHeroi + " é de nível Ascendente.");
        break;
    case xpHeroi <= 10000:
        console.log(nomeHeroi + " é de nível Imortal.");
        break;
    default:
        console.log(nomeHeroi + " é de nível Radiante.");
}