let username = document.forms['form']['name'];
let password = document.forms['form']['password'];
let iuap = document.getElementById("iuap");

let validvin=[];
if(localStorage.getItem('spo'))
validvin=JSON.parse((localStorage.getItem('spo')));

//console.log(localStorage.getItem('spo'));

function validated()
{
    console.log(username.value + " "+password.value);
    if(verify(username.value ,password.value))
    {
        iuap.classList.add("iuap1");
        iuap.innerHTML = 'Invalid user name / Password';
        username.value = "";
        password.value = "";
    }
    else 
    {
        username.value = "";
        password.value = "";
        window.location.href='t1.html';
    }
}
function verify(v1,v2)
{
    c=0;
    for(let i=0;i<validvin.length;i++)
    {
        if(v1 == validvin[i]['userv'] && v2 == validvin[i]['passv'])
        c=1;
    }
    if(c==1)
    return false;
    else 
    return true;
}