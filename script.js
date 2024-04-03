const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const cta = document.querySelector('.button');
const form = document.querySelector('.for');
const accept = document.querySelector('.accept');


no.addEventListener('mouseenter',()=>{
    // cta.insertBefore(no,yes);
    const yesIndex = Array.from(cta.children).indexOf(yes);
    const noIndex = Array.from(cta.children).indexOf(no);

    if(yesIndex < noIndex) {
        cta.insertBefore(no,yes);
    }
    else{
        cta.insertBefore(yes,no);
    }
})

yes.addEventListener("click",()=>{
    form.style.display = "none";
    accept.style.display = "flex";
})