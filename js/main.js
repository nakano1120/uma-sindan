///getUrlQueries()
function choicequestion(qnumber,selecta){
    if(qnumber==1){
        location.href="question"+String(qnumber+1)+".html?q"+String(qnumber)+"="+selecta
    }else{
        location.href="question"+String(qnumber+1)+".html"+window.location.search+"&q"+String(qnumber)+"="+selecta
    }
}
