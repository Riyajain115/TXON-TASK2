function display(val)
{
 document.getElementById('calc').value+=val;
}
function solve()
{
    let r1=document.getElementById('calc').value
    let result=eval(r1);
    document.getElementById('calc').value=result;
}
function clearscreen()
{
 document.getElementById('calc').value='';
}