const func1=()=>{
    console.log(`func1 is starting`);
   setTimeout( func2,0);
    console.log(`func2 is ending`);
}

const func2 =()=>{
    // setTimeout(()=>{
    //     console.log(`func2 is starting`);
    // },0);
    console.log(`joker`);
}
func1();