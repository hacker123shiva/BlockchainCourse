// Perform the following operations to provide the implementation for a Rectangle class. The operations are:
class Rectangle{
    constructor(length,breadth){
        this.length=length;
        this.breadth=breadth;
    }
    
    computeArea()
    {
        return this.length*this.breadth;
    }
}

class Square extends Rectangle{
    constructor(length){
        super(length,length);
    }
}

let obj =new Square(5);
console.log(obj.computeArea());


//Write a javascript function find_largest to return the nth largest number in an array-

function largetNumber(arr)
{
    let max=0;
    
    for(let i=0;i<=arr.length;i++)
    {    

        if(max<arr[i])
        {
        max=arr[i];
        }
    }
    return max;
}
let arr=[3,45,6,7,23,5,7,8]
console.log(largetNumber(arr));

// Write a JavaScript program which accept a number as input in the function parameter and insert dashes (-) between each two even numbers.
function computeDash(num)
{  
    let str=num.toString();
    let str1=str[0];
    for(let i=0;i<str.length-1;i++)
    {
        if(parseInt(str[i])%2===0&&parseInt(str[i+1])%2===0)
        {
            str1=str1+"-"+str[i+1];
            
        }
        else
        str1=str1+str[i+1];
    }
    console.log(str1);
}
computeDash(23456689);