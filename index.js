document.addEventListener('DOMContentLoaded',function(){


    // side_menu is the menu.
    const side_menu=document.getElementById('side_menu');
    // menu is the menu button.
    const menu_button=document.getElementById('menu_button');
    const franklin_button=document.getElementById('franklin_issues');
    const about_us_button=document.getElementById('about_us');
    const go_back=document.getElementById('go_back');
    menu_button.addEventListener('click',()=>{
        if(side_menu.classList.contains('open')){
            side_menu.classList.remove('open')
        }else{
            side_menu.classList.add('open')
        }
    })
    go_back.addEventListener('click',()=>{
        side_menu.classList.remove('open')
    })
    franklin_button.addEventListener('click',()=>{

    })
    about_us_button.addEventListener('click',()=>{
        window.location.href='aboutUs.html';
    })
})
