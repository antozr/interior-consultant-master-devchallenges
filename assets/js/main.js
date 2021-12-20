
"use stricts";


var btn = document.querySelector('.head__menuBtn');
var boxMenuMobil = document.querySelector('.head__list');
var boxBarMenu = document.querySelectorAll('.head__menuBtnBox');
var itemMenu = document.querySelectorAll('.head__el');


btn.addEventListener('click', ()=>{
    console.log('hello');
    if(boxMenuMobil.classList.contains('head__list--open')){
        boxMenuMobil.classList.add('head__list--close');
        setTimeout(function(){
            boxMenuMobil.classList.remove('head__list--open');
            boxMenuMobil.classList.remove('head__list--close');
            boxBarMenu.forEach(function(el){
            el.classList.remove('head__menuBtnBox--open');
            btn.classList.remove('head__menuBtn--open');
            itemMenu.forEach(function(e){
                e.classList.remove('head__el--gsmMenu');
            });
        });   
    }, 1000)
    }else{
        boxMenuMobil.classList.add('head__list--open');
        boxBarMenu.forEach(function(el){
        el.classList.add('head__menuBtnBox--open');
        btn.classList.add('head__menuBtn--open');
        itemMenu.forEach(function(e){
            e.classList.add('head__el--gsmMenu');
        });
        setTimeout(function(){
            itemMenu.forEach(function(e){
                e.classList.remove('head__el--gsmMenu');
            });
        }, 1200)
    });
    }
    
})