document.addEventListener('DOMContentLoaded',function(){


    // side_menu is the menu.
    const side_menu=document.getElementById('side_menu');
    // menu is the menu button.
    const menu_button=document.getElementById('menu_button');
    const go_back=document.getElementById('go_back');
    menu_button.addEventListener('click',()=>{
        if(side_menu.classList.contains('open')){
            side_menu.classList.remove('open')
        }else{
            side_menu.classList.add()
        }
    })
    
})
