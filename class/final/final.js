function changePhone1(){
    const phone1 = document.getElementById("phone1").value
    
    if(phone1.length === 3){
        document.getElementById("phone2").focus()
    }
    console.log("aaaa",phone1)
}

function changePhone2(){
    const phone2 = document.getElementById("phone2").value

    if(phone2.length === 4){
        document.getElementById("phone3").focus()
    }
}

setInterval(function() {console.log("1초가 지났습니다")},1000)

let time=180
setInterval(function(){
    if(time>=0){
        const min = String(Math.floor(time/60)).padStart(2,"0")
        const sec = String(time%60).padStart(2,"0")
        console.log(min + ":" + sec)
        time = time-1
    }
},1000)

let isStarted = false


const getToken = () => {
    
    if(isStarted === false){
        isStarted = true

        const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        document.getElementById("number").innerText = token
        document.getElementById("number").style.color="#"+token
    
        let time=10
        setInterval(function(){
            if(time>0){
                // console.log(time)
                time = time-1
                document.getElementById("myTime").innerText=time
            }
            if(time===0){
                document.getElementById("end").disabled=true;
                isStarted = false;
            }
        },1000)
    }else{
        alert("연타하지마 이자식아")
        
    }
    
}