function calculate(){
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operator = document.getElementById('frm').operator.value;
    var announce = document.getElementById('announce');
    if(num1 !="" && num2 != "" && operator !="")
    {
        switch(operator)
        {
            case '+' :
                document.getElementById('result').value = parseFloat(num1) + parseFloat(num2);
                break;
        case '-' :
                document.getElementById('result').value = parseFloat(num1) -  parseFloat(num2);
                break;
        case '*' :
                document.getElementById('result').value = parseFloat(num1) *  parseFloat(num2);
                break;
        case '/' :
                document.getElementById('result').value = parseFloat(num1) /  parseFloat(num2);
                break;
        }
    }
    else 
    {
        announce.textContent =""
        if(num1 == "")
        {
            announce.append(" Hãy nhập số thứ nhất! ");
        }
        if(num2 == "")
        {
            announce.append(" Hãy nhập số thứ hai!  ");
        }
        if(operator == "")
        {
            announce.append("Hãy chọn phép tính!    ");
        }
        return;
    }
}
function check(){
    const num = document.getElementById(this.id).value;
    var announce = document.getElementById('announce');
    announce.textContent =""
    if(num==""){
        return; 
    }
    if(isNaN(parseFloat(num))){
        announce.append("   Giá trị ở ô ");
        if(this.id == "num1")
        {
            announce.append("số thứ nhất ");
        }
        else
        {
            announce.append("số thứ hai ");
        }
        announce.append("không phải số  ");
    }
}
document.getElementById('calculate').onclick = calculate;
document.getElementById('num1').onblur = check;
document.getElementById('num2').onblur = check;