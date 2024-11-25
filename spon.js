let sp=document.getElementById("sponcer");
let scount = 0;
spon1();
function spon1()
{
    scount = scount + 1;
    if(scount == 9)
    scount = 1;
    spon2();
    setTimeout(spon1,3000);
}
function spon2()
{
    sp.innerHTML = `<img src="pic${scount}.jpg" alt="vk"  width="100" height="500">`;
}