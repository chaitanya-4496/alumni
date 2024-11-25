let scroll1=document.getElementById("scroll");
let c=0;

let b1=document.getElementById("b1");
let b2=document.getElementById("b2");
let b3=document.getElementById("b3");
let b4=document.getElementById("b4");
fun1();

function fun1()
{
    let td = new Date();
    let s=td.getSeconds();

   
    if(Number(s)%4==0)
    {
        c=c+1;
        fun2();
    }

    
    setTimeout(fun1,1000);
}
function fun2()
{
    scroll1.style.scrollBehavior = "smooth";
    
    if(scroll1.scrollLeft >= 2500)
    scroll1.scrollLeft -=2700;

    else 
    scroll1.scrollLeft += 870;

    b1.addEventListener("click",()=>
    {
        scroll1.scrollLeft -=2700;
        buf0();
    });
    b2.addEventListener("click",()=>
    {
        scroll1.scrollLeft -=(2700);
        scroll1.scrollLeft +=(870);
        buf1();
    });
    b3.addEventListener("click",()=>
    {
        scroll1.scrollLeft -=(2700);
        scroll1.scrollLeft +=(870*2);
        buf2();
    });
    b4.addEventListener("click",()=>
    {
        scroll1.scrollLeft -=(2700);
        scroll1.scrollLeft +=(870*3);
        buf3();
    });
    let col = c%4;
    if(col == 1)
    buf1();
    else if(col == 2)
    buf2();
    else if(col == 3)
    buf3();
    else if(col == 0)
    buf0();
     
    console.log(col);
    
}


/* b1.addEventListener("click",()=>
{
    scroll1.scrollLeft -=2700;
    buf0();
});
b2.addEventListener("click",()=>
{
    scroll1.scrollLeft -=(2700);
    scroll1.scrollLeft +=(870);
    buf1();
});
b3.addEventListener("click",()=>
{
    scroll1.scrollLeft -=(2700);
    scroll1.scrollLeft +=(870*2);
    buf2();
});
b4.addEventListener("click",()=>
{
    scroll1.scrollLeft -=(2700);
    scroll1.scrollLeft +=(870*3);
    buf3();
}); */

function buf1()
{
    b2.classList.add("active");

        b1.classList.remove("active");
        b3.classList.remove("active");
        b4.classList.remove("active");
}
function buf2()
{
    b3.classList.add("active");

        b1.classList.remove("active");
        b2.classList.remove("active");
        b4.classList.remove("active");
}
function buf3()
{
    b4.classList.add("active");

        b1.classList.remove("active");
        b2.classList.remove("active");
        b3.classList.remove("active");
}
function buf0()
{
    b1.classList.add("active");

        b3.classList.remove("active");
        b3.classList.remove("active");
        b4.classList.remove("active");
}