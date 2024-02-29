document.getElementById("open-modal2-btn2").addEventListener("click",function()
{
    document.getElementById("my-modal2").classList.add("open")
})

document.getElementById("close2-my-modal2-btn2").addEventListener("click",function()
{
    document.getElementById("my-modal2").classList.remove("open")
})


window.addEventListener('keydown',(e) => {
     if (e.key ==="Escape") {
         document.getElementById("my-modal2").classList.remove("open")
    }
});

document.querySelector("#my-modal2 .modal2__box").addEventListener('click', Event => {
    Event._isClickWithInModal=true
});


document.getElementById("my-modal2").addEventListener('click', Event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});