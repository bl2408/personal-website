const blNav = {
    navId:          'nav-main-top',
    hamId:          'nav-main-top-ham',
    overlayId:      'overlay',
    overlayOpacity: 0.8,
};

const BLNavToggle =(close=false)=>{
    if(blNav.navEl.style.maxHeight || close===true){
        blNav.navEl.style.maxHeight = null;
        blNav.overlayEl.style.visibility = null;
        blNav.overlayEl.style.opacity = null;
        blNav.hamEl.classList.add("ham-open");
        blNav.hamEl.classList.remove("ham-close");
    }else{
        blNav.navEl.style.maxHeight = `${blNav.navEl.scrollHeight}px`;
        blNav.overlayEl.style.visibility = 'visible';
        blNav.overlayEl.style.opacity = blNav.overlayOpacity;
        blNav.hamEl.classList.add("ham-close");
        blNav.hamEl.classList.remove("ham-open");
    } 
};

window.addEventListener("load", ()=>{
    blNav.navEl = document.querySelector(`#${blNav.navId}`);
    blNav.hamEl = document.querySelector(`#${blNav.hamId}`);
    blNav.overlayEl = document.querySelector(`#${blNav.overlayId}`);

    blNav.overlayEl.addEventListener("click", ()=>BLNavToggle(true));

    blNav.hamEl.addEventListener("click", BLNavToggle);
});

window.addEventListener("scroll", ()=>{
    BLNavToggle(true);
});

window.addEventListener("resize", ()=>{
    BLNavToggle(true);
});

const BLNavClick=(el)=>{
    BLNavToggle(true);
    BLScroll(el);
};