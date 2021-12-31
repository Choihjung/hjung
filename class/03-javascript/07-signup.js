function checkValidation(){
    const email = document.getElementById("email").value
    const password1 = document.getElementById("password1").value
    const password2 = document.getElementById("password2").value

    if(email !== "" && password1 !== "" && password2 !== ""){
        document.getElementById("mybutton").setAttribute("style","background-color:yellow")
        document.getElementById("mybutton").disabled = false;
    }else{
        // 셋중 하나라도 빈칸이 있는 경우
        document.getElementById("mybutton").setAttribute("style","background-color:none")
        document.getElementById("mybutton").disabled = true;
    }
}