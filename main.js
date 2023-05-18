
var raceNumber = Math.floor(Math.random() * 1000);
var registeredEarly = true;
var age = 28;

if (registeredEarly && age > 18) {
    raceNumber +=1000;
}    
if (!registeredEarly && age > 18){
    raceNumber +=1000;
} 
if (registeredEarly && age > 18){
    console.log(`Your race will begin at 9:30AM and your race number is ${raceNumber}`)
} else if (!registeredEarly && age > 18) {
    console.log(`Your race will begin at 11:00AM and your race number is ${raceNumber}`)
} else if (age < 18) {
    console.log(`Your race will start at 12:30PM and your race number is ${raceNumber}`)
}
