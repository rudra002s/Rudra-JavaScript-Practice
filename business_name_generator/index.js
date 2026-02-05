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
if(adjRandom<0.66){
    adjective="amazing"
}
else{
    adjective="fire"
}
