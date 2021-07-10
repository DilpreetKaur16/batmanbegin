class Drop{
    constructor(x,y){
        var options={
            restitution:0.2,
            friction:0.1
        }
        this.rain = Bodies.circle(x,y,6,options)
        World.add(world, this.rain)
    }
    updateY(){
        if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain , {x:random(0,600), y:random(0,600)})
        }
    }
    display(){
        fill("blue")
        ellipse(this.rain.position.x, this.rain.position.y, 6,6)
    }
}