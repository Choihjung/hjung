let isStarted = false


const getToken = () => {

    // 버튼의 상태가 false라면(버튼이 눌리지 않은 상태) => getToken 기능 실행
        // 만약 타이머가 돌기 시작할 때 => isStarted를 true로 바꿔준다
        // 만약 타이머가 종료되면 => isStarted를 false로 바꿔준다
    // 아니면(타이머가 돌고 있는 중) 버튼을 못누르게 함
    
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