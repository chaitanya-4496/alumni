let spaDis = document.getElementById("spadis");
let p=1100;
let q=window.scrollY;
window.addEventListener("scroll",()=>
{
    if(window.scrollY>p)
    {
        spaDis.classList.add("special_div_dis");
        console.log("vinay");
    }
    else
    {
        spaDis.classList.remove("special_div_dis");
    }
    q=window.scrollY;
});