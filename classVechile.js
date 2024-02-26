
class Vehicle {
    constructor(emoji,speed){
        this.emoji = emoji;
        this.speed = speed;
    }
    addToPage(){
        const path = document.createElement("MARQUEE");
        path.innerText =this.emoji;
        path.scrollAmount = this.speed;
        document.body.appendChild(path);
    }
}
const bicycle = new Vehicle("🚲", 1);
bicycle.addToPage();
const motorcycle = new Vehicle("🏍️",3);
motorcycle.addToPage();
const motorScooter = new Vehicle("🛵",2);
motorScooter.addToPage();
const car = new Vehicle("🚗",4);
car.addToPage();
const bus = new Vehicle("🚐",5);
bus.addToPage();
const truck = new Vehicle("🚛",6);
truck.addToPage();
const racingCar = new Vehicle("🏎️", 6);
racingCar.addToPage();
const helicopter = new Vehicle("🚁", 6);
helicopter.addToPage();
