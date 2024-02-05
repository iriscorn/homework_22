const len = +prompt("Enter the lenght of the array");
let arr = [];
for(let i = 0; i < len; i++) {
    arr.push(prompt("Enter an item"));
}
document.write(`Your array: <br> ${arr}. <br>`);
arr.sort((a, b) => a - b);
document.write(`<br> Your array from in increasing order: <br> ${arr}. <br>`);
arr.splice(1, 3);
document.write(`<br> Your array without items 2-4 (included): <br> ${arr} <br>`);
