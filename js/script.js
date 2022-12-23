{
const playGame= function(playerInput){
    const getMoveName= function(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        } else if(argMoveId == 2) {
      return 'papier';
        } else if(argMoveId == 3){
        return 'nożyce';
        }else { 
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
        }
    }
    function DisplayResult(argComputerMove,argPlayerMove){
        if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Misia wygrywasz');
        }else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Misia wygrywasz');
        }else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Misia wygrywasz');
        }else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            printMessage('Naprawdę? przegrywasz z komputerem ');
        }else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Naprawdę? przegrywasz z komputerem ');
        }else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Naprawdę? przegrywasz z komputerem ');
        }else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
            printMessage('Remis poćwicz i wróć');
        }else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
            printMessage('Remis poćwicz i wróć');
        }else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
            printMessage('Remis poćwicz i wróć');
        }
    }
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);

    printMessage('Komputer wybrał: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    const playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);
    DisplayResult(computerMove, playerMove)
}
document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
  });
}