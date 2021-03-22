const pageLoad = () => {

    let menuIcon = document.getElementById("menuIcon");
    
    const changeMenuIcon = () => {
        menuIcon.classList.toggle("crossed");        
    }
    menuIcon.addEventListener("click", changeMenuIcon);

}
window.addEventListener("load", pageLoad)