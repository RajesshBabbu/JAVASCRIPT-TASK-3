
// Logical Operators

//1.Use && to check whether 10 > 5 and 20 > 15 are true.
console.log(10>5 && 20>15);

//2.Use && to check whether 10 > 15 and 20 > 10 are true.
console.log(10>15 && 20>10);

//3.Use || to check whether 10 > 20 or 15 > 10 is true.
console.log(10>20 || 15>10);

//4.Use || to check whether 5 > 10 or 20 < 15 is true.
console.log(5>10 || 20>15);

//5.Use ! to reverse the result of 10 > 5.
console.log(!(10>5));

//6.Use ! to reverse the result of 10 < 5.
console.log((!(10<5)));

//7.Create two conditions using && and || and print the final result.
console.log(10>5 && 20<4 || 5>3);

//8.Create three conditions using &&, ||, and ! together.
console.log(!(10>5 && 20<4 || 5>3));


// Ternary Operators

//9.Create an age variable. If age is 18 or above, print "Eligible"; otherwise print "Not Eligible".
var age=18
age>=18?document.writeln("Eligible"+"<br>"):document.writeln("Not Eligible");

//10.Create a marks variable. If marks are 35 or above, print "Pass"; otherwise print "Fail".
var marks=36
marks>=35?document.writeln("Pass"+"<br>"):document.writeln("Fail");

//11.Create a number variable. Check whether it is greater than 10 using a ternary operator.
let a=10;
a>10?console.log("Greater Than 10"):console.log("Not Greater Than 10");

//12.Create a number variable. Check whether it is even or odd using a ternary operator.
let number=62;
number%2==0?console.log("Even"):console.log("Odd");

//13.Create a salary variable. If salary is greater than 30000, print "Good Salary"; otherwise print "Low Salary".
var sal=38000;
sal>30000?document.writeln("Good Salary"+"<br>"):document.writeln("Low Salary");


// Concatination And Template Strings

//14.Create three variables containing your first name, last name, and city. Join them using +.
var Fname="Kathi ",Lname="Rajesh Babu",city="Ongole";
document.writeln(Fname+Lname+city+"<br>");

//15.Create name and age variables and print them together using concatenation.
let Name="K.Rajesh Babu",Age=28;
document.writeln(Name+Age+"<br>");

//16.Create three variables: product, price, and brand. Print them as one sentence using +.
var product="Laptop",price=65000,brand="Acer Aspire 5";
document.writeln("My New "+product+"Price is: "+price+" And It Is a" +brand +" Brand"+"<br>");

//17.Create variables for your name, qualification, and company. Display them using a template string.
let name="K.Rajesh Babu",qualification="MCA",company="Stackly";
document.writeln(`My name is: ${name}, My qualification is: ${qualification} And I'm Working in a company called ${company}`);

//18.Create name, age, and city variables. Display them using a template string in one sentence.
var NAME="K.Rajesh Babu",AGE=28,CITY="Ongole";
document.writeln(`My Name Is: ${NAME},My Age Is: ${AGE} And I'm Living In A City Called ${CITY} <br>`);


// Type-Casting - Implicit

//19.Add a string and a number. Print the result and its typeof.
var variable="bea",num=10;
document.writeln(variable+num+" And it's type is: "+typeof(variable+num)+"<br>");

//20.Add a number and a number. Print the result and its typeof.
document.writeln(10+20+" And it's type is: "+typeof(10+10)+"<br>");

//21.Add a number and true. Print the result and its typeof.
document.writeln(10+true+" And it's type is: "+typeof(10+true)+"<br>");

//22.Add a number and null. Print the result and its typeof.
document.writeln(10+null+" And it's type is: "+typeof(10+null)+"<br>");

//23.Add a string and true. Print the result and its typeof.
document.writeln("Raa"+true+" And it's type is: "+typeof("Raa"+true)+"<br>");

//24.Add a string and an array. Print the result and its typeof.
document.writeln("String"+[1,2]+" And it's type is: "+typeof("String"+[1,2])+"<br>");

//25.Add a number and an object. Print the result and its typeof.
obj=
{
    name:"K.Rajesh Babu",
    age:28
}
document.writeln(10+obj.name+" And it's type is: "+typeof(10+obj.name)+"<br>");

//26.Create three different expressions using different data types and check their resulting data types.
document.writeln("Ben"+10+" And it's type is: "+typeof("Ben"+10)+"<br>");
document.writeln(10+false+" And it's type is: "+typeof(10+false)+"<br>");
document.writeln(9+"Teen"+true+" And it's type is: "+typeof(9+"Teen"+true)+"<br>");


// Type-Casting - Explicit

//27.Convert "100" into a number using Number() and print the result.
document.writeln(Number("100")+"<br>");

//28.Convert "25" into a number and check its data type using typeof.
document.writeln(typeof(Number("25"))+"<br>");

//29.Convert true into a number using Number().
document.writeln(Number(true)+"<br>");

//30.Convert false into a number using Number().
document.writeln(Number(false)+"<br>");

//31.Convert an empty string into a number using Number().
document.writeln(Number(" ")+"<br>");

//32.Convert null into a number using Number().
document.writeln(Number(null)+"<br>");

//33.Convert undefined into a number using Number().
var ud;
document.writeln(Number(ud)+"<br>");

//34.Convert "Hello" into a boolean using Boolean().
document.writeln(Boolean("Hello")+"<br>");

//35.Convert an empty string into a boolean using Boolean().
document.writeln(Boolean(" ")+"<br>");

//36.Convert 0, 1, and -1 into boolean values using Boolean().
document.writeln(Boolean(0));
document.writeln(Boolean(1));
document.writeln(Boolean(-1)+"<br>");

//37.Convert an array into a boolean using Boolean().
document.writeln(Boolean([1,2])+"<br>");

//38.Convert an object into a boolean using Boolean().
obj1=
{
    fruit:"Watermelon",
    flower:"Rose"
}
document.writeln(Boolean(obj1)+"<br>");


// Conditional Statements

//39.Create an age variable. Using if, print "Eligible" if the age is 18 or above.
let AgE=18;
if(AgE>=18)
    document.writeln("Eligible"+"<br>");

//40.Create an age variable. Using if...else, print whether the person is eligible to vote.
var voteage=17;
if(voteage>=18)
    document.writeln("Eligible To Vote");
else
    document.writeln("Not Eligible To Vote"+"<br>");

//41.Create a marks variable and use if...else to print "Pass" or "Fail".
let Marks=65;
if(Marks>=35)
    document.writeln("Pass"+"<br>");
else
    document.writeln("Fail");

// 42.Create a time variable and use else if to display:
// 1–6 → "Early Morning"
// 7–12 → "Morning"
// 13–17 → "Afternoon"
// 18–19 → "Evening"
// 20–24 → "Night"
// Anything else → "Invalid Time"
var time=12.49;
if(time>=1 && time<=6)
    document.writeln("Early Morning");
else if(time>=7 && time<=12)
    document.writeln("Morning");
else if(time>=13 && time<=17)
    document.writeln("Afternoon"+"<br>");
else if(time>=18 && time<=19)
    document.writeln("Evening");
else if(time>=20 && time<=24)
    document.writeln("Night");
else
    document.writeln("Invalid Time"+"<br>");


//43. Create a temperature variable and use if...else if...else to print:
// Above 35 → "Hot"
// 20–35 → "Normal"
// Below 20 → "Cold"
let temperature=34;
if(temperature>35)
    document.writeln("Hot");
else if(temperature>=20 && temperature<=35)
    document.writeln("Normal"+"<br>");
else
    document.writeln("Cold");


// 44.Create a nested if program that checks:
// Age ≥ 18
// Height ≥ 170
// Weight ≥ 60
// Print "Eligible" only when all three conditions are satisfied.
var Yourage=28,Height=177,Weight=80;
if(Yourage>=18)
    if(Height>=170)
        if(Weight>=60)
            document.writeln("Your Are Eligible"+"<br>");


// Switch Statements

//45.Create a trafficLight variable with values "red", "yellow", or "green". Use switch to print the appropriate action.
let trafficLight="red";
switch(trafficLight)
{
    case "red":document.writeln("Stop"+"<br>");
    break;
    case "yellow":document.writeln("Start Your Engine");
    break;
    case "green":document.writeln("Move");
    break;
    default:document.writeln("Invalid Light");
}

//46.Create a day variable with values "Monday" to "Sunday". Use switch to print the day.
var value=2;
switch(value)
{
    case 1:document.writeln("Monday");
    break;
    case 2:document.writeln("Tuesday"+"<br>");
    break;
    case 3:document.writeln("Wednesday");
    break;
    case 4:document.writeln("Thrusday");
    break;
    case 5:document.writeln("Friday");
    break;
    case 6:document.writeln("Saturday");
    break;
    case 7:document.writeln("Sunday");
    break;
    default:document.writeln("Invalid Value");
}

// 47.Create a choice variable with values 1, 2, or 3. Use switch to print:
// 1 → "Start"
// 2 → "Settings"
// 3 → "Exit"
let values=3;
switch(values)
{
    case 1:document.writeln("Start");
    break;
    case 2:document.writeln("Settings");
    break;
    case 3:document.writeln("Exit"+"<br>");
    break;
    default:document.writeln("Invalid value");
}


// Loops

//48.Use a for loop to print numbers from 1 to 10.
for(var b=1;b<=10;b++)
    document.writeln(b+" ");
document.writeln("<br>");

//49.Use a while loop to print numbers from 10 to 1.
let c=10;
while(c>=1)
{
    document.writeln(c+" ");
    c--;
}
document.writeln("<br>");

// 50.Create an array of fruits and use:
// for...of to print every fruit.
// Create an object containing name, role, and experience, then use for...in to print every key and value.
var fruits=["Apple","Mango","Watermelon","Grapes","Strawberries"];
for(var e of fruits)
    document.writeln(e);
document.writeln("<br>");

InfoObj=
{
    NAME:"K.Rajesh Babu",
    ROLE:"Full Stack Java Developer",
    EXPERIENCE:1.5
}
for(let f in InfoObj)
    document.writeln(`${f} : ${InfoObj[f]}`);