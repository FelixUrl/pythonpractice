
function openmenu(e) {
    e.classList.toggle('active');
    let menu = document.getElementById("menu");
    let main = document.getElementById("content_body");
    menu.classList.toggle('active');
    main.classList.toggle('active')
}
