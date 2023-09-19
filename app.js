const usersChoice = document.createElement('h1');
const computersChoice = document.createElement('h1');
const resultDisplay = document.createElement('h1');
//encontrando el section del HTML de id="root"
const gameGrid = document.getElementById('root');
gameGrid.append(usersChoice);
gameGrid.append(computersChoice);
gameGrid.append(resultDisplay)

const choices = ['Piedra', 'Papel', 'Tijera'];
let userChoice;
let computerChoice;

const generateComputerPlay = () =>{
    const randomChoice = choices[Math.floor(Math.random()*choices.length)];
    computerChoice = randomChoice;
    computersChoice.innerHTML = `La jugada de la computadora es: ${computerChoice}`;
}

const generateResult = () =>{
    switch(userChoice+computerChoice){
        case 'PiedraTijera':
        case 'PapelPiedra':
        case 'TijeraPapel':
            resultDisplay.innerHTML = 'GANASTE'
            break;
        case 'TijeraPiedra':
        case 'PiedraPapel':
        case 'PapelTijera':
            resultDisplay.innerHTML = 'PERDISTE'
            break;
        default:
            resultDisplay.innerHTML = 'EMPATE'
        break;
    }
}

const handleCLick = e =>{
    userChoice = e.target.id;
    usersChoice.innerHTML = 'Su jugada es: ' + userChoice;
    generateComputerPlay();
    generateResult();
}

for (let index = 0; index < choices.length; index++){
    const button = document.createElement('button');
    button.id = choices[index];
    button.innerHTML = choices[index]
    //Cuando se haga click, se llama a la funcion handleCLick
    button.addEventListener('click', handleCLick);
    gameGrid.appendChild(button);
}