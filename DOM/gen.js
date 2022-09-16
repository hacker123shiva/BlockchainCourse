function *disp(){
    console.log("Hey");
    yield "first pause";
    console.log("How");
    yield "second pause";
    console.log("are");
    yield 30+30;
    console.log("You? ")

}

let control=disp();
// console.log(control.next());
// console.log(control.next().value)
while(!control.next().done){
 
     control.next();
}