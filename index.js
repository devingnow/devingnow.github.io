const header = document.querySelector('#header-text'); 
const doc = document.documentElement;

if(doc.scrollTop > 0){
    header.style.color === "white"
}

console.log(header.style)