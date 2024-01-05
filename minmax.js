
function fun2()
{
    var a,b,c;
    a=parseInt(value1.value);
    b=parseInt(value2.value);
    c=parseInt(value3.value);
    
    if ( a> b && a>c)
    
    {
        lbl1.innerHTML= "Max Value is value-1 : "+ value1.value;
        lbl1.style.color="green";
    }
    else if (b>c && b>a)
    
    {
        lbl1.innerHTML= "Max Value is value-2 : "+value2.value;

        lbl1.style.color="rgb(15, 99, 99)";
    }

     else if(c>a && c>b)
    
    {
        lbl1.innerHTML= "Max Value is value-3 : " +value3.value;
        lbl1.style.color=" rgb(234, 127, 13)";
    
    }

    else if (a==b && a>c)
    {
        lbl1.innerHTML= "Max Value is value-1 And Value-2 : " + value1.value;
        lbl1.style.color=" rgb(234, 127, 13)";
      
    }
    else if (b==c && b>a)
    {
        lbl1.innerHTML= "Max Value is value-2 And Value-3 : " + value3.value;
        lbl1.style.color=" rgb(234, 127, 13)";
      
    }
    else if (a==c && a>b)
    {
        lbl1.innerHTML= "Max Value is value-1 And Value-3 : " + value1.value;
        lbl1.style.color=" rgb(234, 127, 13)";
      
    }

    else if (a==b && b==c)
    {
        lbl1.innerHTML= "All value are Same : " + value1.value;
        lbl1.style.color=" rgb(234, 127, 14)";
      
    }





}
function fun3()
{
    var a,b,c;
    a=parseInt(value1.value);
    b=parseInt(value2.value);
    c=parseInt(value3.value);
    
    if ( a< b && a<c)
    
    {
        lbl1.innerHTML= "Min Value is value-1 : "+ value1.value;
        lbl1.style.color="green";
    }
    else if (b<c && b<a)
    
    {
        lbl1.innerHTML= "Min Value is value-2 : "+value2.value;

        lbl1.style.color="rgb(15, 99, 99)";
    }

     else if(c<a && c<b)
    
    {
        lbl1.innerHTML= "Min Value is value-3 : " +value3.value;
        lbl1.style.color=" rgb(234, 127, 13)";
    
    }

    else if (a==b && a<c)
    {
        lbl1.innerHTML= "Min Value is value-1 And Value-2 : " + value1.value;
        lbl1.style.color=" rgb(234, 127, 13)";
      
    }
    else if (b==c && b<a)
    {
        lbl1.innerHTML= "Min Value is value-2 And Value-3 : " + value3.value;
        lbl1.style.color=" rgb(234, 127, 13)";
      
    }
    else if (a==c && a<b)
    {
        lbl1.innerHTML= "Min Value is value-1 And Value-3 : " + value1.value;
        lbl1.style.color=" rgb(234, 127, 13)";
      
    }

    else if (a==b && b==c)
    {
        lbl1.innerHTML= "All value are Same : " + value1.value;
        lbl1.style.color=" rgb(234, 127, 14)";
      
    }





}
function fun1()
{
    value1.value = "";
    value2.value = "";
    value3.value = "";
    lbl1.innerHTML="";
}