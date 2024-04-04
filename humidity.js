let input= document.getElementById('input1')
let run = document.getElementById('run1')
let output = document.getElementById('output1')

function printHumidity()
{
    let number= Number(input.value);
    let Humidity= (-230.673)+(683.328*number)-(448.630*(number*number))
    console.log(Humidity)
    output.innerHTML= Humidity
}
run.addEventListener('click', printHumidity);

