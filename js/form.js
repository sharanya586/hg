class Form{
constructor(){}
display(){
    var title = createElement('h2');
    title.html("car racing game");
    title.position(130,0);

    var input =createInput("Name")
    var button = createButton('play');
    var greeting = createElement('h3');

    input.position(230,160);
    button.position(350,200);

    button.mousePressed(function(){
        input.hide();
        button.hide();

        var name = input.value();
        playerCount +=1;
        player.update(name)
        player.updateCount(playerCount);
        greeting.html("Hello" + name)
        greeting.position(130,160)
    })
}
}