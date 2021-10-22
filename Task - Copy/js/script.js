1.// function Profit(CostPrice,SellPrice,Inventory){
//    this.costprice=CostPrice,
//    this.sellprice=SellPrice,
//    this.inventory=Inventory,
   

//    this.ShowProfit = function () {

//     return  `Total profit => ${(this.sellprice-this.costprice)*this.inventory}`
     
//    }

// }

// let NewProfit = new Profit(32.67,45,1200);

// console.log(NewProfit.ShowProfit());



2.//   function Ranges(Min,Max,Number) {
//   this.min=Min,
//   this.max=Max,
//   this.number=Number

//   this.IsInRange = function() {
        
//      if(this.min<=this.number && this.number < this.max){
//        return `IsInRange (${this.number}, {min: ${this.min}, max: ${this.max} } ) => true` 
//      }
//      else{
//        return `IsInRange (${this.number}, {min: ${this.min}, max: ${this.max} } ) => false` 
//      }
//   }
// }

// let NewRange = new Ranges(5,8,10);

// console.log(NewRange.IsInRange());


3.// class Circle {

//   pi = 3.14;
   
//   constructor(Radius){
//     this.radius=Radius

//     this.CalcArea = function () {

//       return `Area of circle => ${this.pi*this.radius*this.radius}`
      
//     }

//     this.CalcLength = function () {
      
//       return `Length of circle => ${2*this.pi*this.radius}` 
      
//     }

//   }

   
// }

// let NewCircle = new Circle(5);

// console.log(NewCircle.CalcArea());
// console.log(NewCircle.CalcLength());




4.// class City{
//   constructor(Name,Population,Continent){
//     this.name=Name,
//     this.population=Population,
//     this.continent=Continent

//     this.ShowCityFacts = function () {

//        return `${this.name} has a population of ${this.population} and is situated in ${this.continent}`
      
//     }
//   }
// }

// let NewCity = new City("Paris",2140526,"Europe");

// console.log(NewCity.ShowCityFacts());


  
