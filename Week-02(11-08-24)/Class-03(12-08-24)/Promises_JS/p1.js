class Rectangle{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    area(){
        const area=this.width*this.height;
        return area;
    }
    color(){
        console.log(`Painting the Rectangle with the ccolor${this.color}`);
    }
}

const rect=new Rectangle(2,4,"red");
let area=rect.area();
console.log(area);
console.log(rect.color);