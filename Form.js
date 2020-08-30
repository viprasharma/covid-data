class Form {

  constructor() {
    this.input = createInput("Patient Name");
    this.button = createButton('submit');
    this.greeting = createElement('h2');
    this.show = createButton('show list')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Covid patient information");
    title.position(130, 0);

    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      //text box
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
    });
    this.show.mousePressed(()=>{
      //text box
      Player.getPlayerInfo();
      game.play();
    });
  }
}
