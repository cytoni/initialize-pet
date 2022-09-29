const zahlen = [1,6,8,9,10,100,23,0];

//Gib alle auf console

/* for (let index = 0; index < zahlen.length; index++) {
    const zahlen = zahlen[index];
} */
/* 
zahlen.forEach(zahl => console.log(zahl));
 */
//Map gibt neuehen Array zurück
/* const square = zahlen.map((zahl) => zahl * zahl);
square.forEach((zahl) => console.log(zahl));
 */

//Filter 
const zahlenUnterZehn = zahlen.filter((zahl) => zahl < 10);
console.log(zahlenUnterZehn);

//Reduce
//const reduce = zahlen.reduce();
