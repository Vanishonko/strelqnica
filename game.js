// 1. Suzdavame promenlivi
let myX = 0,
    myY = 550;
let vragX = 0, 
    vragY = 300,
    vragSize = 50,
    deltaX = 2,
    hp = 100;

let lazerTemperatura = 100,
    lazerX = myX + 15,
    strelqne = false;

function update() {
    lazerX = myX + 15;
    vragX = vragX + deltaX;
    if(vragX > 750 || vragX < 0){
        deltaX = deltaX * -1;
    }

    if((isKeyPressed[39] || isKeyPressed[68]) && myX < 760){
        myX = myX + 5;
    }
    if((isKeyPressed[37] || isKeyPressed[65]) && myX > 0){
        myX = myX - 5;
    }
    if(isKeyPressed[32] && lazerTemperatura > 0){
        lazerTemperatura = lazerTemperatura - 1;
        strelqne = true;
    }
    if(!isKeyPressed[32] && lazerTemperatura < 100){
        lazerTemperatura = lazerTemperatura + 1;
        strelqne = false;
    }
    if(lazerTemperatura == 0){
        strelqne = false;
    }
    if(areColliding(lazerX, 0, 10, 550, vragX, vragY, vragSize, vragSize) && strelqne == true){
        console.log("uceli me")
        if(hp > 0){
            hp = hp - 1;
        }
    }

    if(hp == 0){
        hp = 100;
        deltaX = deltaX + 0.8;
        if(vragSize > 10)
        vragSize = vragSize - 3;
    }
}

function draw() {
    // 3. Tuk naprogramirai kakvo da se risuwa

    context.fillStyle = "red";
    context.fillRect(myX, myY, 40, 40);

    //grey bar
    context.fillStyle = "grey";
    context.fillRect(vragX - 12, vragY - 29, 80, 18)
    //health
    context.fillStyle = "green";
    context.fillRect(vragX - 10, vragY - 27, hp/100*76, 14)
    //vrag
    context.fillRect(vragX, vragY, vragSize, vragSize)
    if(strelqne == true){
        context.fillStyle = getRandomColor();
        context.fillRect(lazerX, 0, 10, 550);
    }

    context.fillStyle = "grey";
    context.fillRect(13, 13, 104, 19)
    context.fillStyle = getRandomColor();
    context.fillRect(15, 15, lazerTemperatura, 15)
}

function keyup(key) {
}

function mouseup() {
    // Pri klik - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
