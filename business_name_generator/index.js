// create a business name generator by combining list of adjectives and shop name and another word

// list of adjectives:
// crazy
// amazing
// fire

// shop name:
// engine 
// food 
// garments 

// another word:
// bros 
// limited 
// hub 

let adjRandom=Math.random()
let adjective;

if(adjRandom<0.33){
    adjective="crazy"
}
 else if(adjRandom<0.66){
    adjective="amazing"
}
else{
    adjective="fire"
}
console.log(adjective)

let shopRandom=Math.random()
let shop_name;

if(shopRandom<0.33){
    shop_name="engine"
}
 else if(shopRandom<0.66){
    shop_name="food"
}
else{
    shop_name="garments"
}
console.log(shop_name)

