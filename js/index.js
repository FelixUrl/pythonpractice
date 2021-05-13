
function openmenu(e) {
    e.classList.toggle('active');
    let menu = document.getElementById("menu");
    let main = document.getElementById("content_body");
    menu.classList.toggle('active');
    main.classList.toggle('active')
}
function ShowCategory(e){
    let spoiler = document.getElementById('spoiler');
    let arrow = document.getElementById('arrow');
    let list = document.getElementById('list');
    list.classList.toggle('one');
    if(list.classList.contains('one')){
        spoiler.classList.remove('active');
        arrow.classList.remove('active');
    }
    spoiler.classList.toggle('active');
    arrow.classList.toggle('active');
}