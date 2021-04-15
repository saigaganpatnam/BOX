class Ground{

    constructor(){
var options={
    isStatic:true
}
        this.body = Bodies.rectangle(200,390,450,20,options);
        World.add(world,this.body);
    }
display(){
    var pos= this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,450,20);

}
}



    
    