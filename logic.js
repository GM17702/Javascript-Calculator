
function DisplayButton1()
{
    var numbers = document.getElementById('display').value;
     if (numbers!="+" &&  numbers!="-" &&  numbers!="x" &&  numbers!="/" && (!(numbers.includes("!"))))
    {
        document.getElementById('display').value=numbers+1;
    }
}

function DisplayButton2()
{
    var numbers = document.getElementById('display').value;
     if (numbers!="+" &&  numbers!="-" &&  numbers!="x" &&  numbers!="/" && (!(numbers.includes("!"))))
    {
        document.getElementById('display').value=numbers+2;
        
    }
}

function DisplayButton3()
{
    var numbers = document.getElementById('display').value;
     if (numbers!="+" &&  numbers!="-" &&  numbers!="x" &&  numbers!="/" && (!(numbers.includes("!"))))
    {
        document.getElementById('display').value=numbers+3;
    }
}

function DisplayButton4()
{
    var numbers = document.getElementById('display').value;
     if (numbers!="+" &&  numbers!="-" &&  numbers!="x" &&  numbers!="/" && (!(numbers.includes("!"))))
    {
        document.getElementById('display').value=numbers+4;
    }
}

function DisplayButton5()
{
    var numbers = document.getElementById('display').value;
     if (numbers!="+" &&  numbers!="-" &&  numbers!="x" &&  numbers!="/" && (!(numbers.includes("!"))))
    {
        document.getElementById('display').value=numbers+5;
    }
}

function DisplayButton6()
{
    var numbers = document.getElementById('display').value;
     if (numbers!="+" &&  numbers!="-" &&  numbers!="x" &&  numbers!="/" && (!(numbers.includes("!"))))
    {
         document.getElementById('display').value=numbers+6;
    }
}

function DisplayButton7()
{
    var numbers = document.getElementById('display').value;
     if (numbers!="+" &&  numbers!="-" &&  numbers!="x" &&  numbers!="/" && (!(numbers.includes("!"))))
    {
        document.getElementById('display').value=numbers+7;
    }
}

function DisplayButton8()
{
    var numbers = document.getElementById('display').value;
     if (numbers!="+" &&  numbers!="-" &&  numbers!="x" &&  numbers!="/" && (!(numbers.includes("!"))))
    {
        document.getElementById('display').value=numbers+8;
    }
}

function DisplayButton9()
{
    var numbers = document.getElementById('display').value;
     if (numbers!="+" &&  numbers!="-" &&  numbers!="x" &&  numbers!="/" && (!(numbers.includes("!"))))
    {
        document.getElementById('display').value=numbers+9;
    }
}

function DisplayButton0()
{
    var numbers = document.getElementById('display').value;
     if (numbers!="+" &&  numbers!="-" &&  numbers!="x" &&  numbers!="/" && (!(numbers.includes("!"))))
    {
        document.getElementById('display').value=numbers+0;
    }
}

function DisplayButtonAdd()
{
    let number = document.getElementById('display').value;
    expression = number.split(" ");
    dotcheck=expression[expression.length - 1];

    var numbers = document.getElementById('display').value;
    if (numbers!="+" &&  numbers!="-" &&  numbers!="x" &&  numbers!="/" && (!(numbers.includes("C"))) && (!(numbers.includes("P"))) && (!(numbers.includes("+"))) && (!(numbers.includes("-"))) && (!(numbers.includes("x"))) && (!(numbers.includes("/"))) && (!(numbers.includes("!"))) && (!(numbers.includes("%")))  && (!(dotcheck[dotcheck.length - 1]==".")))
    {
        document.getElementById('display').value=numbers+" + ";
    }
}

function DisplayButtonSubtract()
{
    let number = document.getElementById('display').value;
    expression = number.split(" ");
    dotcheck=expression[expression.length - 1];

    var numbers = document.getElementById('display').value;
    if (numbers!="+" &&  numbers!="-" &&  numbers!="x" &&  numbers!="/" && (!(numbers.includes("C"))) && (!(numbers.includes("P"))) && (!(numbers.includes("+"))) && (!(numbers.includes("-"))) && (!(numbers.includes("x"))) && (!(numbers.includes("/")))  && (!(numbers.includes("!"))) && (!(numbers.includes("%")))  && (!(dotcheck[dotcheck.length - 1]==".")))

    {
        document.getElementById('display').value=numbers+" - ";
    }
}

function DisplayButtonMultiply()
{
    let number = document.getElementById('display').value;
    expression = number.split(" ");
    dotcheck=expression[expression.length - 1];

    var numbers = document.getElementById('display').value;
    if (numbers!="+" &&  numbers!="-" &&  numbers!="x" &&  numbers!="/" && (!(numbers.includes("C"))) && (!(numbers.includes("P"))) && (!(numbers.includes("+"))) && (!(numbers.includes("-"))) && (!(numbers.includes("x"))) && (!(numbers.includes("/"))) && (!(numbers.includes("!"))) && (!(numbers.includes("%")))  && (!(dotcheck[dotcheck.length - 1]==".")))
    {
        document.getElementById('display').value=numbers+" x ";
    }
}

function DisplayButtonMod()
{
    let number = document.getElementById('display').value;
    expression = number.split(" ");
    dotcheck=expression[expression.length - 1];

    var numbers = document.getElementById('display').value;
    if (numbers!="+" &&  numbers!="-" &&  numbers!="x" &&  numbers!="/" && (!(numbers.includes("C"))) && (!(numbers.includes("P"))) && (!(numbers.includes("+"))) && (!(numbers.includes("-"))) && (!(numbers.includes("x"))) && (!(numbers.includes("/"))) && (!(numbers.includes("!"))) && (!(numbers.includes("%")))  && (!(dotcheck[dotcheck.length - 1]==".")))
    {
        document.getElementById('display').value=numbers+" % ";
    }
}

function DisplayButtonDivide()
{
    let number = document.getElementById('display').value;
    expression = number.split(" ");
    dotcheck=expression[expression.length - 1];

    var numbers = document.getElementById('display').value;
    if (numbers!="+" &&  numbers!="-" &&  numbers!="x" &&  numbers!="/" && (!(numbers.includes("C"))) && (!(numbers.includes("P"))) && (!(numbers.includes("+"))) && (!(numbers.includes("-"))) && (!(numbers.includes("x"))) && (!(numbers.includes("/"))) && (!(numbers.includes("!"))) && (!(numbers.includes("%")))  && (!(dotcheck[dotcheck.length - 1]==".")))
    {
        document.getElementById('display').value=numbers+" / ";
    }
}

function DisplayButtonFactorial()
{
    let number = document.getElementById('display').value;
    expression = number.split(" ");
    dotcheck=expression[expression.length - 1];

    var numbers = document.getElementById('display').value;
    if (numbers!="+" &&  numbers!="-" &&  numbers!="x" &&  numbers!="/" && (!(numbers.includes("C"))) && (!(numbers.includes("P"))) && (!(numbers.includes("+"))) && (!(numbers.includes("-"))) && (!(numbers.includes("x"))) && (!(numbers.includes("/")))  && (!(numbers.includes("!"))) && (!(numbers.includes("%"))) && (!(dotcheck[dotcheck.length - 1]==".")))
    {
        document.getElementById('display').value=numbers+" !";
    }
}

function DisplayButtonPermutation()
{
    let number = document.getElementById('display').value;
    expression = number.split(" ");
    dotcheck=expression[expression.length - 1];

    var numbers = document.getElementById('display').value;
    if (numbers!="+" &&  numbers!="-" &&  numbers!="x" &&  numbers!="/" && (!(numbers.includes("C"))) && (!(numbers.includes("P"))) && (!(numbers.includes("+"))) && (!(numbers.includes("-"))) && (!(numbers.includes("x"))) && (!(numbers.includes("/")))  && (!(numbers.includes("!"))) && (!(numbers.includes("%"))) && (!(dotcheck[dotcheck.length - 1]==".")))
    {
        document.getElementById('display').value=numbers+" P ";
    }
}

function DisplayButtonCombination()
{
    let number = document.getElementById('display').value;
    expression = number.split(" ");
    dotcheck=expression[expression.length - 1];

    var numbers = document.getElementById('display').value;
    if (numbers!="+" &&  numbers!="-" &&  numbers!="x" &&  numbers!="/" && (!(numbers.includes("C"))) && (!(numbers.includes("P"))) && (!(numbers.includes("+"))) && (!(numbers.includes("-"))) && (!(numbers.includes("x"))) && (!(numbers.includes("/")))  && (!(numbers.includes("!"))) && (!(numbers.includes("%"))) && (!(dotcheck[dotcheck.length - 1]==".")))
    {
        document.getElementById('display').value=numbers+" C ";
    }
}

function DisplayButtonPoint()
{
    let number = document.getElementById('display').value;
    expression = number.split(" ");
    dotcheck=expression[expression.length - 1];

    var numbers = document.getElementById('display').value;
    if (numbers!="+" &&  numbers!="-" &&  numbers!="x" &&  numbers!="/" && (!(expression[expression.length - 1].includes("."))) && (!(numbers.includes("!")))   && (!(dotcheck[dotcheck.length - 1]==".")))
    {
        document.getElementById('display').value=numbers+".";
    }
}

function Equals()
{
    let numbers = document.getElementById('display').value;
    expression = numbers.split(" ");
    dotcheck=expression[expression.length - 1];
    if (expression[expression.length - 1] == "" || (expression[expression.length - 1].includes(".") && dotcheck[dotcheck.length - 1]=="."))
    {
        document.getElementById('display').value="Syntax Error";
    }
    else
    {
        if (expression[expression.length - 2] == "+")
        {
            let a;
            let b;

            if (expression[expression.length - 3].includes("."))
            {
                a = parseFloat(expression[expression.length - 3]);
            }
            else
            {
                a = parseInt(expression[expression.length - 3]);
            }


            if (expression[expression.length - 1].includes("."))
            {
                b = parseFloat(expression[expression.length - 1]);
            }
            else
            {
                b= parseInt(expression[expression.length - 1]);
            }

            result = a + b;
            document.getElementById('display').value=result;
        }
        else if (expression[expression.length - 2] == "-")
        {
            let a;
            let b;

            if (expression[expression.length - 3].includes("."))
            {
                a = parseFloat(expression[expression.length - 3]);
            }
            else
            {
                a = parseInt(expression[expression.length - 3]);
            }


            if (expression[expression.length - 1].includes("."))
            {
                b = parseFloat(expression[expression.length - 1]);
            }
            else
            {
                b= parseInt(expression[expression.length - 1]);
            }

            result = a - b;
            document.getElementById('display').value=result;
        }
        else if (expression[expression.length - 2] == "%")
        {
            let a;
            let b;

            if (expression[expression.length - 3].includes("."))
            {
                a = parseFloat(expression[expression.length - 3]);
            }
            else
            {
                a = parseInt(expression[expression.length - 3]);
            }


            if (expression[expression.length - 1].includes("."))
            {
                b = parseFloat(expression[expression.length - 1]);
            }
            else
            {
                b= parseInt(expression[expression.length - 1]);
            }

            result = a % b;
            document.getElementById('display').value=result;
        }
        else if (expression[expression.length - 2] == "x")
        {
            let a;
            let b;

            if (expression[expression.length - 3].includes("."))
            {
                a = parseFloat(expression[expression.length - 3]);
            }
            else
            {
                a = parseInt(expression[expression.length - 3]);
            }


            if (expression[expression.length - 1].includes("."))
            {
                b = parseFloat(expression[expression.length - 1]);
            }
            else
            {
                b= parseInt(expression[expression.length - 1]);
            }

            result = a * b;
            document.getElementById('display').value=result;
        }
        else if (expression[expression.length - 2] == "/")
        {
            let a;
            let b;

            if (expression[expression.length - 3].includes("."))
            {
                a = parseFloat(expression[expression.length - 3]);
            }
            else
            {
                a = parseInt(expression[expression.length - 3]);
            }


            if (expression[expression.length - 1].includes("."))
            {
                b = parseFloat(expression[expression.length - 1]);
            }
            else
            {
                b= parseInt(expression[expression.length - 1]);
            }

            result = a / b;
            document.getElementById('display').value=result;
        }
        else if (numbers.includes("!"))
        {
            let a;
            let sum = 1;

            if (expression[expression.length - 2].includes("."))
            {
                a = parseFloat(expression[expression.length - 2]);
            }
            else
            {
                a = expression[expression.length - 2];
            }

            if (a == 0 || a == 1)
            {
                document.getElementById('display').value=sum;
            }
            else
            {
                for(var i = a; i >= 1; i--)
                {
                  sum = sum * i;
                }
                document.getElementById('display').value=sum;
            }  
        }
        else if (expression[expression.length - 2] == "P")
        {
            let a;
            let b;

            if (expression[expression.length - 3].includes("."))
            {
                a = parseFloat(expression[expression.length - 3]);
            }
            else
            {
                a = parseInt(expression[expression.length - 3]);
            }


            if (expression[expression.length - 1].includes("."))
            {
                b = parseFloat(expression[expression.length - 1]);
            }
            else
            {
                b= parseInt(expression[expression.length - 1]);
            }

            numerator = factorial(a);
            denom = factorial(a - b);
            result = numerator/denom;
            document.getElementById('display').value=result;
        }
        else if (expression[expression.length - 2] == "C")
        {
            let a;
            let b;

            if (expression[expression.length - 3].includes("."))
            {
                a = parseFloat(expression[expression.length - 3]);
            }
            else
            {
                a = parseInt(expression[expression.length - 3]);
            }


            if (expression[expression.length - 1].includes("."))
            {
                b = parseFloat(expression[expression.length - 1]);
            }
            else
            {
                b= parseInt(expression[expression.length - 1]);
            }

            numerator = factorial(a);
            denom = factorial(b) * factorial(a - b);
            result = numerator/denom;
            document.getElementById('display').value=result;
        }
        
    }
}

function Clear()
{
    document.getElementById('display').value="";
}

function factorial(n)
{
    let result = 1;
    if (n == 0 || n == 1)
    {
      return result;

    }
    else
    {
      for(var i = n; i >= 1; i--)
      {
        result = result * i;
      }
      return result;
    }  
  }


