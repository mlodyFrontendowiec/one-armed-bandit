class Checkwin {
  winGame() {
    this.win = true;
    this.winGamesPlace.innerText = this.winGames += 1;
    this.money += this.bet * 3;
    this.valuePlace.innerText = parseInt(this.money);
    this.infoPopup.innerText = `Wygrałeś ${this.bet * 3}$`;
  }
  checkWin() {
    if (
      this.colors[0] == "blue" &&
      this.colors[1] == "blue" &&
      this.colors[2] == "blue"
    )
      this.winGame();
    else if (
      this.colors[0] == "green" &&
      this.colors[1] == "green" &&
      this.colors[2] == "green"
    )
      this.winGame();
    else if (
      this.colors[0] == "red" &&
      this.colors[1] == "red" &&
      this.colors[2] == "red"
    )
      this.winGame();
    else if (
      this.colors[0] == "red" &&
      this.colors[1] == "green" &&
      this.colors[2] == "blue"
    )
      this.winGame();
    else if (
      this.colors[0] == "blue" &&
      this.colors[1] == "red" &&
      this.colors[2] == "green"
    )
      this.winGame();
    else if (
      this.colors[0] == "green" &&
      this.colors[1] == "blue" &&
      this.colors[2] == "red"
    )
      this.winGame();
    else if (
      this.colors[0] == "red" &&
      this.colors[1] == "green" &&
      this.colors[2] == "blue"
    )
      this.winGame();
    else if (
      this.colors[0] == "blue" &&
      this.colors[1] == "red" &&
      this.colors[2] == "green"
    )
      this.winGame();
    else if (
      this.colors[0] == "green" &&
      this.colors[1] == "blue" &&
      this.colors[2] == "red"
    )
      this.winGame();
    else if (
      this.colors[0] == "green" &&
      this.colors[1] == "red" &&
      this.colors[2] == "blue"
    )
      this.winGame();
    else if (
      this.colors[0] == "red" &&
      this.colors[1] == "blue" &&
      this.colors[2] == "green"
    )
      this.winGame();
    else if (
      this.colors[0] == "blue" &&
      this.colors[1] == "green" &&
      this.colors[2] == "red"
    )
      this.winGame();
    else {
      this.loseGamesPlace.innerText = this.loseGames += 1;
      this.win = false;
      this.valuePlace.innerText = parseInt((this.money -= this.bet));
      this.infoPopup.innerText = `Przegrałeś ${this.bet}$`;
    }
  }
}
