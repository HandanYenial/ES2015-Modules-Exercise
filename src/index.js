//This file should import the fruits and both array helpers. It should then:
import React from "react"
import foods from "./foods"
import { choice, remove } from "./helpers"

//Randomly draw a fruit from the array
//Log the message “I’d like one RANDOMFRUIT, please.”
//Log the message “Here you go: RANDOMFRUIT”
//Log the message “Delicious! May I have another?”
//Remove the fruit from the array of fruits
//Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”

let fruit = choice(foods);

console.log(`I'd like one ${fruit}, please`);

console.log(`Here you go: ${fruit}`);

console.log(`Delicious! May I have another?`);

let remaining = remove(fruit,foods);

console.log(`I'm sorry, we are all out. We have ${remaining.length} left.`);
