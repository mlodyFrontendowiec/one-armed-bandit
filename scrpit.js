class Game {
    constructor(money){
        this.money = money; 
        this.options = ['red','green', 'blue'];
        this.colors = []; 
        this.games = 0;   
        this.winGames = 0;
        this.loseGames = 0  
        this.win = false;      
    }
    initialFunction(){
        this.input = document.querySelector('input'); 
        this.button = document.querySelector('button'); 
        this.displays = document.querySelectorAll('.display');
        this.gamesPlace = document.querySelector('.games');
        this.valuePlace = document.querySelector('.money');
        this.loseGamesPlace = document.querySelector('.lose');
        this.winGamesPlace = document.querySelector('.win');
        this.infoPopup = document.querySelector('.popup')
        this.valuePlace.innerText += parseInt(this.money) ;                                
        this.handleClick(); 
    }
    randomizing() {
        return parseInt(Math.floor((Math.random() * 3))) ;
    }
    setColors(){
        this.colors=[this.options[this.randomizing()],this.options[this.randomizing()],this.options[this.randomizing()]];
        this.displays.forEach((display,index)=>{                    
             display.style.backgroundColor = this.colors[index];
        })
        
    }    
    handleClick(){
        this.button.addEventListener('click',(e)=>{
            e.preventDefault();                    
            this.betting();
        })
    }        
    betting(){
        this.bet =  parseInt(document.querySelector('input').value);

        if(this.bet > this.money){
            alert('Zła wartość');
            
        }else if(this.money <=0){
            alert('brak środków');
            
        }else if(this.bet <=0){
            alert('zła stawka');
            
        }
        else{                   
            this.setColors();
            this.checkWin();
            this.games+=1;
            this.gamesPlace.innerText = this.games;                    
        }
    }
    winGame(){
        this.win = true;
        this.winGamesPlace.innerText = this.winGames+=1;
        this.money += this.bet*3  ;
        this.valuePlace.innerText = this.money;
        this.infoPopup.innerText = `Wygrałeś ${this.bet*3}$`        
    }
    checkWin(){
        if(this.colors[0] == 'blue' && this.colors[1] == 'blue' && this.colors[2] == 'blue') this.winGame();
        else if(this.colors[0] == 'green' && this.colors[1] == 'green' && this.colors[2] == 'green' ) this.winGame();
        else if(this.colors[0] == 'red' && this.colors[1] == 'red' && this.colors[2] == 'red' ) this.winGame();
        else if(this.colors[0] == 'red' && this.colors[1] == 'green' && this.colors[2] == 'blue' ) this.winGame();
        else if(this.colors[0] == 'blue' && this.colors[1] == 'red' && this.colors[2] == 'green' ) this.winGame();
        else if(this.colors[0] == 'green' && this.colors[1] == 'blue' && this.colors[2] == 'red' ) this.winGame();
        else if(this.colors[0] == 'red' && this.colors[1] == 'green' && this.colors[2] == 'blue' ) this.winGame();
        else if(this.colors[0] == 'blue' && this.colors[1] == 'red' && this.colors[2] == 'green' ) this.winGame();
        else if(this.colors[0] == 'green' && this.colors[1] == 'blue' && this.colors[2] == 'red' ) this.winGame();
        else if(this.colors[0] == 'green' && this.colors[1] == 'red' && this.colors[2] == 'blue' ) this.winGame();
        else if(this.colors[0] == 'red' && this.colors[1] == 'blue' && this.colors[2] == 'green' ) this.winGame();
        else if(this.colors[0] == 'blue' && this.colors[1] == 'green' && this.colors[2] == 'red' ) this.winGame();
        else{
        this.loseGamesPlace.innerText = this.loseGames+=1;
        this.win =false;
        this.valuePlace.innerText = this.money -= this.bet;
        this.infoPopup.innerText = `Przegrałeś ${this.bet}$`
        }
    }
}
new Game(100).initialFunction();