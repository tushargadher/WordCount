//project start day 30/11/22 10:25pm
let wCount = document.querySelector('.wordCounter');
let cCount = document.querySelector('.charCounter');
const textarea = document.getElementById('input');
let btn =document.getElementById('show');
let totalChar;

function count() {
    
    let tvalue = textarea.value;
    //count the word
    let arryWord = tvalue.split(' ');
    //we use filter method to remove white space from array 
    let new_arryWord= arryWord.filter(String);
    console.log(arryWord);
    console.log(new_arryWord);
    totalWorld = (new_arryWord.length);
    let Cvalue=textarea.value.length;
    console.log(Cvalue)
    wCount.innerHTML = `
                        <span id="Wvalue">${totalWorld}</span>
                        <span>Total Word</span>
                        `;
    cCount.innerHTML = `
                        <span id="Cvalue">${Cvalue}</span>
                        <span>Total Charactor</span>
    `;
}
// btn.addEventListener('click',count)
setInterval(count,100)