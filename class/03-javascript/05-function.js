const getToken = () => {
    const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("number").innerText = token
    
    document.getElementById("number").style.color="#"+token
    document.getElementById("number").style.color="red"
    // ▲ 이건 색 지정해서 바꾸는 법

    // ▼ 아래는 색상을 랜덤하게 바꾸는 법
    let colorcode="#"+Math.round(Math.random()*0xffffff).toString(16)
    // toString의 숫자가 16인 이유는 컬러코드가 16진수이기 때문
    document.getElementById("number").style.color=colorcode
}