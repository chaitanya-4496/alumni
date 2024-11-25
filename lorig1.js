let vuser = document.forms['rform']["vuser"];
let ruser = document.getElementById("ruser");

let vphone = document.forms['rform']['vphone'];
let rphone = document.getElementById('rphone');

let vpass = document.forms['rform']['vpass'];
let rpass = document.getElementById('rpass');
let validvin;
if(localStorage.getItem('spo'))
validvin=JSON.parse((localStorage.getItem('spo')));
else 
validvin=[];

//console.log(JSON.parse(localStorage.getItem('spo')));

function rvalidate()
{
    let rval1 = vinaykumar1();
    let rval2 = vinaykumar2();
    let rval3 = vinaykumar3();
    if(rval1 && rval2 && rval3)
    {
        validvin.push({userv : vuser.value , passv : vpass.value});
        //console.log(validvin); 
        localStorage.setItem('spo',JSON.stringify(validvin));
        //console.log(JSON.parse(localStorage.getItem('spo'))); 
        window.alert("Registered Sucessfully");
        window.location.href='login.html';
    } 
}

function vinaykumar1()
{
    if(vuser.value.length < 3)
    {
        ruser.innerHTML = "Username must contain 3 literals";
    }
    else 
    {
        c=0;
        for(let i=0;i<validvin.length;i++)
        {
            //console.log(vuser.value == validvin[i]['userv']);
            if(vuser.value == validvin[i]['userv'])
            {
                c=1;
                //console.log("vin");
            }
            else
            {
                ruser.innerHTML = "";
                //console.log("vin");
            } 
        }
        if(c==1)
        ruser.innerHTML = "Username already exists";
        else
        {
            ruser.innerHTML = "";
            return true;
        }
    }

}

function vinaykumar2()
{
    //console.log(vphone.value);
    if((String(vphone.value).length) < 10 || (String(vphone.value).length) > 10)
    {
        rphone.innerHTML = "Phonenumber must contain 10 literals";
        //console.log("vin");
    }
    else 
    {
        let gk = String(vphone.value);
        //console.log(gk);
        let c1=0,c2=0,c3=0,c=0;
        for(let i=0;i<gk.length; i++)
        {
            if(gk[i]>='A' && gk[i]<='Z')
            c1=1;
            else if(gk[i]>='0' && gk[i]<='9')
            c2=1;
            else if(gk[i]>='a' && gk[i]<='z')
            c1=1;
            else 
            c3=1;
        }
        if(c1==1)
        rphone.innerHTML = "Password must not contain letters";
        else if(c3==1)
        rphone.innerHTML = "Password must not contain Special Character";
        else 
        {
            rphone.innerHTML = "";
            return true;
        }
    }
}

function vinaykumar3()
{
    //console.log(vpass.value);
    if((String(vpass.value).length) < 8)
    {
        rpass.innerHTML = "Password must contain 8 literals";
    }
    else
    {
        let gk = String(vpass.value);
        //console.log(gk);
        let c1=0,c2=0,c3=0,c=0;
        for(let i=0;i<gk.length; i++)
        {
            if(gk[i]>='A' && gk[i]<='Z')
            c1=1;
            else if(gk[i]>='0' && gk[i]<='9')
            c2=1;
            else if(gk[i]>='a' && gk[i]<='z')
            c=1;
            else 
            c3=1;
        }
        if(c1==0)
        rpass.innerHTML = "Password must contain atleast one Captial letter";
        else if(c2==0)
        rpass.innerHTML = "Password must contain atleast one Number";
        else if(c3==0)
        rpass.innerHTML = "Password must contain atleast one Special Character";
        else 
        {
            rpass.innerHTML = "";
            return true;
        }
    }
    
}
