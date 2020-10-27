class Drop {
    constructor(x, y) {
      var options={
        isStatic:false,
        density:0.8,
        restitution:1,
        friction:0.1
      }
      this.body=Bodies.circle(x,y,3,options);
      World.add(world,this.body);
      
    }
    update(){
        if(this.body.position.y>620){
          Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
      }
      display(){
    
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("blue");
        
        ellipse(pos.x,pos.y,3,3)
      }
    }
