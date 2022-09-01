"use strict"
//Write a Javascript function to check whether a triangle is equilateral, isosceles or scalene

function checkTriangle(side1,side2,side3){
    if((side1+side2>side3)&&(side2+side3>side1)&&(side1+side3>side2))
    if(side1===side2&&side2===side3)
    console.log("Equilateral Triangle");
    else if(side1===side2||side2===side3||side1===side3)
    console.log("Isosceles triangle");
    else
    console.log("Scalene Trianlge");

    else
    console.log("Not forming triangle");
}

checkTriangle(5,4,16);
checkTriangle(5,5,5);
checkTriangle(5,5,4);
checkTriangle(3,4,5);

//Write a function using switch case to find the grade of a student based on marks obtained
function checkGrade(mark)
{
    switch(true)
    {
        case mark>90&&mark<=100 :
            console.log("S Grade");
            break;
        case mark>80&&mark<=90:
                console.log("A grade");
                break;
        case mark>70&&mark<=80:
                console.log("B grade") ;
                break;
        case mark>60&&mark<=70:
                console.log("C grade");
                break;  
        case mark>50&&mark<=60:
                console.log("D grade");
                break;  
         case mark>40&&mark<=50:
                console.log("E grade");
                break;  
        case mark>=0&&mark<=40:
            console.log("Failed");
            break;
        defult:
        console.log("Invalid Marks");
        
    }
}

checkGrade(90);
//Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000
function sumCalculate(){
    let num=1000;
    let sum=0;
    for(let i=15;i<1000;i+=15)
    {
        sum=sum+i;
    }
    console.log(sum);
}

sumCalculate();
/*
Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100).*/

function factorial(num){
    if(num===0)
    return 1;
    else
    return num*factorial(num-1);
}

 function checkPrime(num)
 {  let flag=0;
     for(let i=2;i<=num/2;i++)
     {
        if(num%i===0)
        {flag=1;
            break;}

     }
     if(flag===0)
     return 1;
     else 
     return 0;
 }

 function primeList(num1,num2)
 {
    for(let i=num1;i<=num2;i++)
    {if(checkPrime(i))
        {
            console.log(factorial(i));
        }

    }
 }

 primeList(1,100);
