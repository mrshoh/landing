const caruels = document.querySelectorAll('.carusel')
var conunt = 0;
caruels.forEach((carusel, index)=>{
    carusel.style.left = `${index *100}%`
})
const oldinga = ()=>{
    conunt++;
    if(conunt ==3){
        conunt = 0
    }
    slideImg()
}
const orqaga = ()=>{
    if(conunt <=0){
        conunt = 3
    }
    conunt--;
    slideImg()
    console.log(conunt);
}
const slideImg = ()=>{
    caruels.forEach((carusel)=>{
        carusel.style.transform = `translateX(-${conunt * 100}%)`
    })
}