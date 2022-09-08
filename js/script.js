// Start Header 

// Start Toggle Menu
let togMenu = document.querySelector(".toggle-menu");
let linkUl = document.querySelector("ul");

// Stop Propagation On Ul

linkUl.onclick = (e) =>{
    e.stopPropagation();
}

togMenu.onclick = function(e){
    // Stop Propagation
    e.stopPropagation();
    // Toggle Class "menu-active" On Button
    togMenu.classList.toggle("menu-active");
    // Toggle Class "Open" On Links
    linkUl.classList.toggle("open");
}

document.addEventListener("click", (e) => {
        if(e.target !== togMenu && e.target !== linkUl){
            togMenu.classList.remove("menu-active");

            linkUl.classList.remove("open");
        }
})
// End Toggle Menu

// End Header