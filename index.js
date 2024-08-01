// side_menu is the menu.
const side_menu=document.getElementById('side_menu');
// menu is the menu button.
const menu_button=document.getElementById('menu_button');
const go_back=document.getElementById('go_back');
if(menu_button && go_back){
menu_button.addEventListener('click',()=>{
    side_menu.style.width='250px';
})
go_back.addEventListener('click',()=>{
    side_menu.style.width='0px';
})
}