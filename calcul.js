
let input = document.getElementById('input')
let nb;
let  nb2;
let valid = 0
let sus
let result
function print(par) {
    if((par >= 0 || par <= 9) && valid == 0)
    {
        input.value = input.value + par
        sus = input.value
    }
    else if(par >= 0 || par <= 9)
    {
        input.value = input.value + par
        nb2 = input.value
    }
    if(par == "+")
    {
        input.value = ""
        valid = 1
    }
    if(valid == 1)
    {
        result = parseInt(sus) + parseInt(nb2)
    }
    if(par == "-")
    {
        input.value = ""
        valid = 2
    }
    if(valid == 2)
    {
        result = parseInt(sus) - parseInt(nb2)
    }
    if(par == "/")
    {
        input.value = ""
        valid = 3
    }
    if(valid == 3)
    {
        result = parseInt(sus) / parseInt(nb2)
    }
    if(par == "*")
    {
        input.value = ""
        valid = 4
    }
    if(valid == 4)
    {
        result = parseInt(sus) * parseInt(nb2)
    }
    if(par == "=")
    {
        input.value = result
    }
    if(par == 'C')
    {
        input.value = ''
        valid = 0
    }
}