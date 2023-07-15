const help_pg = document.querySelector('.help_page');

help_pg.addEventListener('click', e=>onClick(e));

function onClick(e){
    let help = window.open("help.html",'newwindow','width=400,height=300');

}