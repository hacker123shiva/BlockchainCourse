//Write a JavaScript program to get the volume of a Cylinder, Sphere and Cone with four decimal places using objects and classes.
class Cylinder{
    constructor(height,radius){
        this.height=height;
        this.radius=radius;
         this.pi=3.14;
    }
getVolume(){  
    return this.pi*this.radius*this.radius*this.height;
}

}

 let obj =new Cylinder(10,7);
 console.log(obj.getVolume());

 class Sphere{
    constructor(radius){
        this.radius=radius;
        
    }

    getVolume(){
        let r=this.radius;
        const pi=3.14;
        return 4/3*pi*(r*r*r);
    }
 }

 let obj1=new Sphere(7);
 let result=obj1.getVolume();
 console.log(result);

 class Cone{
constructor(height,radius){
    this.height=height;
    this.radius=radius;
}

getSphere(){const pi=3.14;
    let r=this.radius;
    let h=this.height;
    return pi*(r*r)*h/3;
}

 }

 let obj2=new Cone(7,13);
 console.log(obj2.getSphere());