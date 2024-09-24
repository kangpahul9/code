{a = 5;
b = 4;
c=5;
d="5";
console.log("a==b",a==b)
console.log("a!=b",a!=b)
console.log("a>c",a>c)
console.log("a>b",a>b)
console.log("a<b",a<b)
console.log("a>=b",a>=b)
console.log("a<=b",a<=b)
console.log("a==c",a==c)
console.log("a==d",a==d)
console.log("a===c",a===c)
console.log("a===d",a===d)
console.log("a!==c",a!==c)
console.log("a!==d",a!==d)
}
// logical operators
 a =6;
 b =4;
let cond1 = a>b;
let cond2 = a===6;
console.log(" a>b && a===6 = ",cond1&&cond2)

console.log(" a===b || a===6 = ",a===b||cond2)
console.log("!(6===5)",!(a===5)) 

// conditional operators
age=19;
if(age>=18){
    console.log("You can vote")
}
if(age<18){
    console.log("You cannot  vote")
}

number=10;
if(number%2===0)
{
    console.log(number,' is an even number')
}
else{
    console.log(number,' is an odd number')
}

// syntax = rules 


let mode ="dark";let colour;
if(mode==="dark")
{
    colour="Black";
}
else if(mode==="blue"){
    colour="Blue";
}
else if(mode==="Pink")
{
    colour="Pink";

}
else{
    colour="White";
}
console.log(colour) 
if(mode==="dark") console.log(mode)

let result = age >= 18 ? "Adult" : "not adult";
console.log(result)
ge = 16
ge >= 18 ? console.log("Adult") : console.log("not adult"); //simpler or compact if-else

//switch

const exp = "Papayas";
switch(exp){
    case 'Mangoes':
        console.log("Mangoes are $10.99 each");
        break;
    case 'Papayas':
    case 'Mangoes':
        console.log("Mangoes and Papayas are $5.99 per kg");
        break;
    default:
        console.log("Sorry we are out of ",exp)
}
// const foo = 0;
// switch (foo) {
//   case -1:
//     console.log("negative 1");
//     break;
//   case 0: // Value of foo matches this criteria; execution starts from here
//     console.log(0);
//   // Forgotten break! Execution falls through
//   case 1: // no break statement in 'case 0:' so this case will run as well
//     console.log(1);
//     break; // Break encountered; will not continue into 'case 2:'
//   case 2:
//     console.log(2);
//     break;
//   default:
//     console.log("default");
// }
// // Logs 0 and 1

// /*Take an input*/
// // alert("Hello")  //one time pop up
// let numb = prompt("Enter a Number :")
// if(numb%5 ===0){
//     console.log(numb, " is a multiple of 5")
// }else{
//     console.log(numb, " is not a multiple of 5")
// }


// /*Give grades */
// grade = prompt("Enter your marks :");
// if(grade>=90 && grade <= 100  )
//     {
//         console.log("At ",grade," marks you got grade 'A'")
//     }
// else if(grade>=70 && grade <90)
//     {
//         console.log("At ",grade," marks you got grade 'B'")
//     }
// else if(grade>=60 && grade < 70)
//     {
//         console.log("At ",grade," marks you got grade 'C'");
//     }
// else if(grade>=50 && grade <60)
// {
//     console.log("At ",grade," marks you got grade 'D'")
// }
// else{
//     console.log("At ",grade," marks you got grade 'F'")

// }




// loops
// for(let i = 1; i<= 5; i ++ ){
//     console.log("PAHUL PREET SINGH")//5 executions 
// }
// let sum=0;
// for(let count = 0; count <= 10; count++){
//     sum+=count;
// }
// console.log(sum)
let size=0;
str="UNI ADELAIDE"
for(let i of str) {
    console.log("i= ", i)  
    size++; 
}
console.log("string size ", size)

const student = {
    fullname:"Rahul Kumar",
    age :20,
    cgpa : 8.2,
    isPass:true
};
for(let key in student){
    console.log("key = ",key, "value = ",student[key] )
}

n=0;
while(n<=100)
{
    if(n%2===0){
    console.log(n);}
    n++;
}

let gameno = 24
for(i=0;i<3;i++){
    guess=prompt("Guess the number: ");
    if(guess==gameno){
        console.log("You guessed the correct number, ", gameno)
        break;
    }
    else if(i===2 && guess!=gameno)
    {
        console.log("Hard Luck, the correct number was ",gameno)
    }
    else{
        console.log("You're wrong. Please try Again")
    }
}