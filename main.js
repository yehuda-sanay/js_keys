// var teacher={}

// var firstName=prompt();

// teacher[firstName]
// console.log(teacher);

// var Director={}
// for(var i=0; i<4;i++){
// var value=prompt("value");
// var kye=prompt("kye");
// Director[kye]=value;
// }

// var user={}

// for(var i=0; i<4;i++){
//     var kye=prompt("kye");
//     var value=prompt("value");
//     user[kye]=value;
//     document.write("<div>" +user[kye]+"<div>" );
// }
// var carsarray=[];
// for(var i=0; i<4;i++){
// var car={}
//     car.company=prompt("company");
//     car.color=prompt("color");
//     car.smk=prompt("smk");
//     // car.yearbook=prompt("yearbook");
//     carsarray.push(car);

// document.write("<div>"+car.company+" "+car.color+" "+car.smk+" "+car.yearbook+"<div>");
// }
// console.log(carsarray);
// function cats(){
// for(var i=0;i<3;i++){
// var cat={}
// cat.name=prompt("name");
// cat.yearofBirth=+prompt("yearofBirth");
// cat.tape=prompt("tape");
// cat.Weight=prompt("Weight");
// document.write("<h1>"+cat.name+"<h1>"+cat.tape+"<h1>"+cat.yearofBirth+"<h1>"+cat.Weight+"<h1>")
// }
// }
// cats();

//שאלה 18
// function dognames(){
// var raond=+prompt();
// for(var i=0;i<raond;i++){
// var dog={}
// dog.name=prompt("name");
// dog.age=+prompt("age");
// dog.tape=prompt("tape");
// dog.ownername=prompt("ownername");

// document.write("<p>"+dog.name+"<p>"+dog.age+"<p>"+dog.tape+"<p>"+dog.ownername+"<p>");
// }
// }
// dognames()

//שאלה 19
// function insectInfo(){
// var yourinsect=+prompt();
// for(var i=0;i<yourinsect;i++){
// var insect={}

// insect.name=prompt("name");
// insect.Scientificname=prompt("Scientific name");
// insect.legsnumber=+prompt("legsnumber");
// insect.wings=prompt("wings");

// document.write("<h3>"+insect.name+"<h3>"+insect.Scientificname+"<h3>"+insect.legsnumber+"<h3>"+insect.wings+"<h3>");
// }
// }
// insectInfo()

//שאלה 20
// function kidsAtScolle(){
// var kids=+prompt("number of kids");
// for(var i=0;i<kids;i++){
// var kid={}
// kid.name=prompt("name");
// kid.age=+prompt("gae");
// kid.atscholle=confirm("at scholle");
// if(kid.age>4){
//     document.write("<p>"+kid.name+"<p>"+kid.age+"<p>"+kid.atscholle+"<p>");
// }
// }
// }
// kidsAtScolle()

//שאלה 21
// function computers(num){
// for(var i=0;i<num;i++){
// var computer={}
// computer.Society=prompt("society");
// computer.model=prompt("model");
// computer.Weight=+prompt("weight");
// computer.Stock=confirm("stock");
// if(computer.Stock){
//     if(computer.Weight>2){
//         document.write("<p>"+computer.Society+"<p>"+computer.model+"<p>"+computer.Weight+"<p>"+computer.Stock+"<p>")
//     }
// }
// }
// }
// computers()

//שאלה 22
// function teacherinfo(num){
// for(var i=0;i<num;i++){
// var teacher={}
// teacher.name=prompt("name");
// teacher.Hourlypayment=+prompt("Hourly payment");
// teacher.email=prompt("email");
// teacher.YearofBirth=+prompt("Year of Birth");
// if(teacher.Hourlypayment>100||teacher.YearofBirth<1990){
//     document.write("<span>"+teacher.name+"<span>"+teacher.Hourlypayment+"<span>"+teacher.email+"<span>"+teacher.YearofBirth+"<span>");
// }
// }
// }
// teacherinfo()

//שאלה 23
// function pieceOfFurnitures(){
//     for(var i=0;i<3;i++){
//         var furniture={}
//         furniture.name=prompt("furniture name");
//         furniture.type=prompt("furniures Type");
//         var y=[];
//         var shopes=+prompt("many shopse");
//         var j=0;
//         while(j<shopes){
//             x=prompt("shop name");
//             y.push(x);
//             j++
//         }
// furniture.Shop=y
// furniture.price=+prompt("price");
// document.write(furniture.name+"<br>"+furniture.Shop);
// }
// }
// pieceOfFurnitures()

//שאלה 23



// function Apartments(){
// for(var i=0;i<3;i++){
// var Apartment={}
// Apartment.Address=prompt("address");
// Apartment.rent=+prompt("rent");
// Apartment.price=+prompt("price");
// var y=[];
// var j=0;
// var many=+prompt("many interested");
// while(j<many){
//     var x=prompt("interested name");
//     y.push(x);
//     j++
// }
// Apartment.interested=y;
// Apartment.Mediation=confirm();
// if(!Apartment.Mediation){

// document.write(Apartment.Address+"<br>"+Apartment.interested);}
// }
// }
// Apartments()

//שאלה 24 

// function sumeCountry(){
// var Country={}
// for(var i=0;i<num;i++){
// Country.name=prompt("name");
// Country.numofResidents=+prompt("Residents");
// var many=+prompt("many citys");
// var y=0;
// var x=[];
// while(y<many){
//     var j=prompt("city name");
//     x.push(j);
//     y++
// }
// Country.citys=x;
// Country.habad=confirm();
// if(Country.habad){
// document.write(Country.name+"<br>"+Country.citys);
// }
// }
// }
// sumeCountry()

















// var manger={
//     firstName: "yehuda",
//     lestName: "sanay",
//     age:31,
//     salary:31000
// }

// console.log(manger.age);

// var Employee={
//     firstName:"aviv",
//     YearofBirth:1991,
//     email:"aviv1@gmail.com",
//     adress:{
//         city:"petah tikva",
//         street:"hamginim",
//         number:12
//     }
// }
// var frut={
//     Name:"apple",
//     coller:"red",
//     tape:"princ"
// }

// console.log(frut.coller);
// console.log(frut.Name);
// console.log(frut.tape);

// var cllas={
//     number:3,
//     studentQuantity:5,
//     studentNames:["yehuda","yossi","naty","avi","lior"],

// }
// for(var i=0;i<cllas.studentNames.length;i++){
// console.log(cllas.studentNames[i]);
// }

// var Kindergarten={
//     Teacher:"may",
//     numberofkids:10,
//     kidsnames:["shay","hai","danni","dana","mimi","yafit","tal","yossef","lior","danit"],

// }

// for(var i=0; i<Kindergarten["kidsnames"].length;i++){
//     console.log(Kindergarten["kidsnames"][i]);
// }

// var information= prompt();
// console.log(Kindergarten[information]);