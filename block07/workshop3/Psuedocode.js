// Pseudocode  Break down for understanding and approach aka What am I looking for both the knowns and the unknowns
// 1)What am I looking to create? 
//Answer:I have to create 3 mathematical calculations to generate 3 codes to make a combination 
//2) What sources am I using ? 
//Answer :JS console on HTML website or html VS code using <script></script>
// 3)What type of variables are needing to be used ? 
//Answer it will be string variables 
//4)What is the combination on the lock ? 
//Answer: 10-40-39 
//How to approach the mathematic calculations ?
//Answer: With  3 different arithmetic operators (addition, multiplication, and subtraction)
//How do I solve the problem? 
// 1)I have to create a message using let to be equal to the value of  "You have received this message because you have been chosen to open an important vault. Here is the secret combination"
// Which  arithmetic operators am I using for the string variables? 
// i have the combination of 10-40-39 and Im using addition, multiplication, and subfraction 
// is there a common denominator for the string variables??? possibly 5 ???
//addition 5+5= 10
// multiplication 8 *5 =40 
//subtraction   44- 5 =39 
// i need to console log the num to = the equivalent value of the vault 



const userMessage = "You have received this message because you have been chosen to open an important vault. Here is the secret combination;"

// let num * num= 40
//let num - num= 39 
let code1 = 5+5; //let num  +num = 10;
//console.log(5+5)// value= 10 

let code2 = (8 *5 ); //let num * num =40;
//console.log(8 *5)// value= 40

let code3 = 44- 5;  //let num -num =39;
//console.log(44-5)// value = 39

// Now I need a create code to show the  full message "" to prompt it after the combination has been selected 
// I can use a function to call and make a return message then prompt the alert  
// result of the message  and showing the message on the console 


alert (userMessage + "/n" + code1 + " " + code2 + " " + code3)