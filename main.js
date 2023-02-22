    document.getElementById("result").innerText
    var clearB = document.getElementById("reset");
    clearB.style.visibility = 'hidden';
function calculate(){
    var d = document.getElementById("txtDollar").value;
    var a = document.getElementById("txtAmount").value;
    var p = document.getElementById("txtPer").value;
    
    // var p = document.getElementById("reset").value;
    document.getElementById("result").innerText ='Tip Per Person: ' +( d * (p/100) )/ a;
    document.getElementById("total").innerText ='Total Tip: ' + ( d * (p/100) )
    clearB.style.visibility = 'visible';
}
function resetBtn()
{
    document.getElementById("result").innerText = 'Tips';
    document.getElementById("total").innerText ='';
    document.getElementById("txtDollar").value = '';
    document.getElementById("txtAmount").value = '';
    document.getElementById("txtPer").value = "";
}