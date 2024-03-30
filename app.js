// let ism = prompt("Ismingizni kiriting");
// console.log("Assalomu alaykum", "" + ism, "","xush kelibsiz");

// class Product {
//   constructor(sarlavha, rang, narx) {
//     this.title = sarlavha;
//     this.color = rang;
//     this.price = narx;
//   }
// }
// let item = new Product("Iphone14", "purple", "850$");
// console.log(item);

// --------------UY ISHI-------------

// 1. JavaScript-da Car classi yarating va uning konstruktori orqali brand va year xususiyatlarini o'z ichiga olsin. Keyin ushbu classdan bir nechta avtomobil obyektlarini yarating.

// class CarProduct {
//   constructor(brand, year) {
//     (this.nomi = brand), (this.yil = year);
//   }
// }
// let car = new CarProduct("Malibu", 2024);
// let car2 = new CarProduct("Onix", 2024);
// let car3 = new CarProduct("Monza", 2024);
// console.log(car);
// console.log(car2);
// console.log(car3);

// 2. Car classini kengaytirib, ElectricCar classini yarating. ElectricCar classi Car classining barcha xususiyatlariga ega bo'lishi kerak va qo'shimcha ravishda batteryLife xususiyatini ham o'z ichiga olishi kerak.

// class CarProduct {
//   constructor(brand, year) {
//     (this.nomi = brand), (this.yil = year);
//   }
// }

// class ElectricCar extends CarProduct {
//   constructor(brand, year, batterLife) {
//     super(brand, year);
//     this.batareya = batterLife;
//   }
// }

// let car = new CarProduct("Malibu", 2024);
// let car2 = new CarProduct("Onix", 2024);
// let car3 = new CarProduct("Monza", 2024);

// let ElectricCar1 = new ElectricCar("BYD CHAZOR", 2024, 500);
// let ElectricCar2 = new ElectricCar("Tesla", 2018, 300);

// console.log(car);
// console.log(car2);
// console.log(car3);
// console.log(ElectricCar1);
// console.log(ElectricCar2);

// 3. Metodlar: Car classiga displayInfo deb nomlangan metod qo'shing, bu metod avtomobilning markasi va ishlab chiqarilgan yilini konsolga chiqaradi. Keyin ushbu metodni ElectricCar classidagi obyekt uchun ham sinab ko'ring

// class CarProduct {
//   constructor(brand, year) {
//     (this.nomi = brand), (this.yil = year);
//   }

//   displayInfo() {
//     console.log(`Marka: ${this.nomi}, Ishlab chiqarilgan yil: ${this.yil}`);
//   }
// }

// class ElectricCar extends CarProduct {
//   constructor(brand, year, batterLife) {
//     super(brand, year);
//     this.batareya = batterLife;
//   }
// }

// let car = new CarProduct("Malibu", 2024);
// let car2 = new CarProduct("Onix", 2024);
// let car3 = new CarProduct("Monza", 2024);

// let ElectricCar1 = new ElectricCar("BYD CHAZOR", 2024, 500);
// let ElectricCar2 = new ElectricCar("Tesla", 2018, 300);

// console.log(car);
// console.log(car2);
// console.log(car3);
// console.log(ElectricCar1);
// console.log(ElectricCar2);

// car.displayInfo();
// car2.displayInfo();
// car3.displayInfo();
// ElectricCar1.displayInfo();
// ElectricCar2.displayInfo();

// 4Darsta korilgan usullar bilan(4 ta usulni ko'dik) html dagi taglarni textini o'zgartiring.

// document.getElementById("matn").innerHTML = "Yangi Matn";

// document.getElementById("matn").innerText = "yangi matn";

// document.getElementById("matn").textContent = "Yangi matn";

// document.getElementById("example").setAttribute("value", "yangi matn");
