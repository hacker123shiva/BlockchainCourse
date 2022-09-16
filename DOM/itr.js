let c=["Javascript","React","Node.js","Blockchain"];
// let g=c[Symbol.iterator]();
// console.log(typeof g);
// console.log(g.next());
// console.log(g.next().value);
// console.log(g.next().done);
// let str1="Rohan Kumar";
// let itr=str1[Symbol.iterator]();
// console.log(itr.next())

let g=c[Symbol.iterator]();
for(let i=0;i<c.length;i++)
console.log(g.next());
