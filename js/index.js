const BLScroll =(el)=>{
    const element = document.querySelector(el);
    element.scrollIntoView({behaviour: 'smooth', block:'start', inline: 'start'});
};