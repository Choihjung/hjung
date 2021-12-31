function submit() {
    
    //함수 - 정의
    const q_func1 = document.getElementById("func__1").value;
    
    //함수 - 작성 방법
    const q_func2 = document.getElementById("func__3").value;
    const q_func3 = document.getElementById("func__4").value;
    const q_func4 = document.getElementById("func__5").value;

    //내장 함수 - 정의
    const q_insert1 = document.getElementById("insert__1").value;
    const q_insert2 = document.getElementById("insert__2").value;

    //자주 사용되는 내장 함수
    const q_set1 = document.getElementById("set__1").value;
    const q_set2 = document.getElementById("set__2").value;

    //컴퓨터의 시간 단위
    const q_time = document.getElementById("time").value;

    
    const ans5_1 = "60000"
    const ans4_2 = "반복"
    const ans4_1 = "지연"
    const ans3_2 = "내장"
    const ans3_1 = "함수"
    const ans2_3 = "화살표"
    const ans2_2 = "표현"
    const ans2_1 = "선언"
    const ans1_1 = "기능"

    let a1, a2, a3, a4, a5, a6

    if(q_func1 !== ans1_1) {
        document.getElementById("error_func1").innerText = "정답이 아닙니다"
        document.getElementById("error_func1").style.color = "red"
        document.getElementById("error_func1").style.borderBottomColor = "red"
        document.getElementById("q_func1").style.boxShadow = "7px 7px 39px red"
        a1 = false;
    } else {
        console.log("함수-정의 완료")
        document.getElementById("error_func1").innerText = "정답입니다"
        document.getElementById("error_func1").style.color = "blue"
        document.getElementById("error_func1").style.borderBottomColor = "blue"
        document.getElementById("q_func1").style.boxShadow = "7px 7px 39px blue"
        a1 = true;
    }

    if(q_func2 !== ans2_1 || q_func3 !== ans2_2 || q_func4 !== ans2_3) {
        document.getElementById("error_func2").innerText = "정답이 아닙니다"
        document.getElementById("error_func2").style.color = "red"
        document.getElementById("error_func2").style.borderBottomColor = "red"
        document.getElementById("q_func2").style.boxShadow = "7px 7px 39px red"
        a2 = false;
    } else {
        console.log("함수-작성 방법 완료")
        document.getElementById("error_func2").innerText = "정답입니다"
        document.getElementById("error_func2").style.color = "blue"
        document.getElementById("error_func2").style.borderBottomColor = "blue"
        document.getElementById("q_func2").style.boxShadow = "7px 7px 39px blue"
        a2 = true;
    }

    if(q_insert1 !== ans3_1 || q_insert2 !== ans3_2) {
        document.getElementById("error_insert").innerText = "정답이 아닙니다"
        document.getElementById("error_insert").style.color = "red"
        document.getElementById("error_insert").style.borderBottomColor = "red"
        document.getElementById("q_insert").style.boxShadow = "7px 7px 39px red"
        a3 = false;
    } else {
        console.log("내장 함수-정의 완료")
        document.getElementById("error_insert").innerText = "정답입니다"
        document.getElementById("error_insert").style.color = "blue"
        document.getElementById("error_insert").style.borderBottomColor = "blue"
        document.getElementById("q_insert").style.boxShadow = "7px 7px 39px blue"
        a3 = true;
    }

    if(q_set1 !== ans4_1 || q_set2 !== ans4_2) {
        document.getElementById("error_set").innerText = "정답이 아닙니다"
        document.getElementById("error_set").style.color = "red"
        document.getElementById("error_set").style.borderBottomColor = "red"
        document.getElementById("q_set").style.boxShadow = "7px 7px 39px red"
        a4 = false;
    } else {
        console.log("자주 사용되는 내장 함수 완료")
        document.getElementById("error_set").innerText = "정답입니다"
        document.getElementById("error_set").style.color = "blue"
        document.getElementById("error_set").style.borderBottomColor = "blue"
        document.getElementById("q_set").style.boxShadow = "7px 7px 39px blue"
        a4 = true;
    }

    if(q_time !== ans5_1) {
        document.getElementById("error_time").innerText = "정답이 아닙니다"
        document.getElementById("error_time").style.color = "red"
        document.getElementById("error_time").style.borderBottomColor = "red"
        document.getElementById("q_time").style.boxShadow = "7px 7px 39px red"
        a5 = false;
    } else {
        console.log("컴퓨터의 시간 단위 완료")
        document.getElementById("error_time").innerText = "정답입니다"
        document.getElementById("error_time").style.color = "blue"
        document.getElementById("error_time").style.borderBottomColor = "blue"
        document.getElementById("q_time").style.boxShadow = "7px 7px 39px blue"
        a5 = true;
    }


    if(a1 === false || a2 === false || a3 === false || a4 === false || a5 === false) {
        window.scrollTo(0, 0)
        alert("틀린 문제가 있습니다")
    } else {
        alert("축하합니다! 문제를 모두 풀었습니다")
    }

}