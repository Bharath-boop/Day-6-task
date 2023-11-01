class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    get PG(){
        console.log()
    }
}
const movie1= new Movie ("leo","7screen","PG7");
const movie2=new Movie("ayan","studioGreen")
const movie3=new Movie( "Casino Royale","Eon Productions","PG­13");
console.log(movie1);
console.log(movie2);
console.log(movie3);
//-----------------------------------------------------------------------
class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color
    }
    get radius(){
        return this.r;
    }
    set radius(r){
        this.r=r;
    }
    get color(){
        return this.c;
    }
    set color(c){
        this.c=c;
    }
    get toString(){
        return `"cricle[radius=${this.r},color=${this.c}]"`
    }
    get area(){
        return Math.PI*this.r*this.r
    }
    get cricumference(){
        return 2*Math.PI*this.r
    }

}
const obj1=new Circle(1.0,"red");
console.log(obj1.radius);
obj1.radius=3.5;
console.log(obj1.radius);
console.log(obj1.color);
obj1.color="blue";
console.log(obj1.color);
console.log(obj1.toString);
console.log(obj1.area.toFixed(3));
console.log(obj1.cricumference.toFixed(3));
//--------------------------------------------------------------------------
class Person{
    constructor (name,age,gender,salary,address){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.salary=salary;
        this.address=address;
    }    
}
const person=new Person("Bharath",23,"male",35000,"Anna street");
const person1=new Person("kumar",20,"male",40000,"MGR street");
const person2=new Person("kavitha",23,"female",50000,"Arasan street");
console.log(person);
console.log(person1);
console.log(person2);
//--------------------------------------------------------------------------
class Ubar{
    constructor(km){
        this._km=km;
    }
    get km(){
        return this._km*50;
    }
    set km(km){
        this._km=km
    }
}
const obj=new Ubar(5)
console.log(obj.km)
obj.km=3;
console.log(obj.km)
//----------------------------------------------------------------------------