// console.log(`shiv is my name`);
// setTimeout(()=>console.log(`harsh is my second name`),0);
// console.log(`Aarsh is third name`);

//executor function ---

//consumer function ---

//promises work ---Executor function make promises ---Consumer ->give output
//success---- resolved promise and failure is called ---- rejected promise and Waiting ----pending promise

//Create a promise  
let promise =new Promise(function(resolve,reject){
    // setTimeout(function(){
    //     resolve("Hurray! jack and jill are back with wate");
    // },2000);

    setTimeout(function(){
        reject(new Error("Jack fell down and broke his crown ,and jell can tumbling after"));
    },2000);
});

//consumer function- the one which will receive promise
const grandParentCooking=()=>{
    //then will indicate promise has been fulfilled
    // promise.then(function(result){
    //     console.log(`cooking the vegetable with the ${result} `);
    // });
    promise.catch(function(error){
        console.log(`OMG ${error.message}`);
    });
};
grandParentCooking();



