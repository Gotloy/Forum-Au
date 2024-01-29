let input1=document.getElementById('Input-1')
let compute1=document.getElementById('compute-1')
let output=document.getElementById('output1')

function printHumidity()
{
    let  number = Number(input1.value);
    let outputHtml = '';
    outputHtml +='<p>';
    outputHtml += number;
    outputHtml +='</p>';

    output1.innerHTML = outputHtml;
}

compute1.addEventListener('click', printHumidity);
