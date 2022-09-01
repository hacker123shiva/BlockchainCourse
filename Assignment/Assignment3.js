"use strict"
/*
Using for loops, write a Javascript program to output the following
pattern -
1
2 3
4 5 6
7 8 9 10

*/
function printTriangle(n)
{
let k=0;
let str="";
for(let i=1;i<=n;i++)
{str=""
    for(let j=1;j<=n;j++)
{if(i>=j)
    {
    str=str+`${++k} `;
    }
else
 {
    str=str+"  ";
 }
}
console.log(str);
console.log();
}
}
printTriangle(4)

//Write a program to find whether a given number is armstrong number or not-
function checkArmstrong(num)
{let copy_num=num;
    let sum=0;
    while(num!=0)
    {let cube=num%10;
        sum=sum+cube*cube*cube;
        num=~~(num/10);
    }

    if(sum===copy_num)
    {
        console.log("Armstrong number");

    }
    else
    console.log("NOt a Armstrong number");
}

checkArmstrong(153);
checkArmstrong(370);
checkArmstrong(224);


//Write a program to find whether a given number is special number or not-
function factorial(num){
    if(num===0)
    return 1;
    else
    return num*factorial(num-1);
}

function checkSpecial(num)
{
let sum=0;
let copy_num=num;
while(num!==0)
{let fact=factorial(num%10);
    sum=sum+fact;
    num=~~(num/10);
}
if(sum===copy_num)
console.log("Special Number");

else
console.log("Not a Special Number");
}

checkSpecial(145);
checkSpecial(234);
