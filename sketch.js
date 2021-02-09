var array[rain drops,man]
friction:0.1
function preload(){
    
}

function setup(){
var max drops=100;
    
}

function draw(){
for(var i=0; i<maxDrops; i++){
drops.push(new createDrop(random(0,400),random(0,400)))
}
if(this.rain.position.y > height){
Matter.body.set Position(this.rain{x:rndom(0,400),y:random(0,400)})
}
rand=Math.round(random(1,4));
if(frameCount%80===0){
thunderCreateFrame=framecount;
thunder=createSprite(random(10,370),random(10,30),10,10)
switch rand{
case1:thunder.addImage(thunder1);
break;
case1:thunder.addImage(thunder2);
break;
default.break
}
thunder.scale=random(0.3,0.6);
}
}   

