const btn = document.getElementById('check-button');

function palindrome(s){
    if(s==""){
        return false
    }
    const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedString = cleanString.split('').reverse().join('');
    return cleanString === reversedString;
}
btn.addEventListener('click',()=>{
console.log("Checking.......")
const msg = document.getElementById('msg');
let str = document.getElementById('text-input').value.trim();
   if(str.trim().length === 0){
    msg.innerHTML = `<p>Please give input......</p>`
   }
   else if(palindrome(str)){
    msg.innerHTML = `<p style ="color: green;">The word ${str} is palindrome.</p>`
   }
   else{
    msg.innerHTML = `<p style ="color: red;">The word ${str} is not a palindrome !</p>`
   } 
})