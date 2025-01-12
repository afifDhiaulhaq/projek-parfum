const hero =  document.querySelector('#hero');
const container =  document.querySelector('#product-image');

container.addEventListener('click',function(e){
    if(e.target.className == 'thumb'){
        hero.src = e.target.src;
    }
});

