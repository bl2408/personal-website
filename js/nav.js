const blNav = {
    navId:          'nav-main-top',
    hamId:          'nav-main-top-ham',
};

const BLNavHamButton =(close=false)=>{
    if(close===true){
        blNav.navEl.style.maxHeight = null;
        return;
    }
    if(blNav.navEl.style.maxHeight){
        blNav.navEl.style.maxHeight = null;
    }else{
        blNav.navEl.style.maxHeight = `${blNav.navEl.scrollHeight}px`;
    } 
};

window.addEventListener("load", ()=>{
    blNav.navEl = document.querySelector(`#${blNav.navId}`);
    blNav.hamEl = document.querySelector(`#${blNav.hamId}`);
    
    blNav.hamEl.addEventListener("click", BLNavHamButton);
});

window.addEventListener("scroll", ()=>{
    BLNavHamButton(true);
});