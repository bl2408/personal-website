const BLScroll =(el)=>{
    const element = document.querySelector(el);
    element.scrollIntoView({behaviour: 'smooth', block:'start', inline: 'start'});
};


window.addEventListener("load", ()=>{
    //add background images and button icons to .card-work sections
    const cardWorkImgSectionList = document.querySelectorAll(".card-work .img-section");
    cardWorkImgSectionList.forEach(imgSec=>{
        const imgAttr = imgSec.dataset.img;
        if(imgAttr !== null){
            imgSec.style.backgroundImage = `url("${imgAttr}")`;
            imgSec.innerHTML = `<div class="img-button"><i class="fa fa-external-link"></i></div>`
            imgSec.addEventListener("click",()=>{
                window.open(imgAttr);
            });
        }
    });
});