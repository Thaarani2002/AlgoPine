var cal_area=document.querySelector('#cal');
var bttn=document.querySelectorAll('.bttn');

for(item of bttn)
{
    item.addEventListener('click',(e)=>{
        bttntext=e.target.innerText;

        if(bttntext =='×')
        {
            bttntext= '*';
        }

        if(bttntext=='÷')
        {
            bttntext='/';
        }
        cal_area.value+=bttntext;
    });
}

function sin()
{
    cal_area.value=Math.sin(cal_area.value);
}

function cos()
{
    cal_area.value=Math.cos(cal_area.value);
}

function tan()
{
    cal_area.value=Math.tan(cal_area.value);
}

function power()
{
    cal_area.value=Math.pow(cal_area.value,2);
}

function sqrt()
{
    cal_area.value=Math.sqrt(cal_area.value,2);
}

function log()
{
    cal_area.value=Math.log(cal_area.value);
}

function pi()
{
    cal_area.value= 3.14159265359;
}

function exp()
{
    cal_area.value=2.71828182846;
}

function factorial()
{
    var i, num, f;
    f=1
    num=cal_area.value;
    for(i=1; i<=num; i++)
    {
        f=f*i;
    }

    i=i-1;

    cal_area.value=f;
}

function percentage()
{
    var res;
    res = cal_area.value/100;
    cal_area.value = res;
}

function backspace()
{
    cal_area.value=cal_area.value.substr(0,cal_area.value.length-1);
}