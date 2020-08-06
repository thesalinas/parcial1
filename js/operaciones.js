function insert(num){
document.form.textview.value = document.form.textview.value + num
}

function igual(){
    var exp = document.form.textview.value
    if (exp){
    document.form.textview.value = eval(exp)
}

}

function limpiar(){
    document.form.textview.value = ""
}


function codigo(){
    document.form.textview.value = "2013155266"
}

