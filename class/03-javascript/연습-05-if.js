const profile = {
    name : "철수",
    age : 12,
    school : "다람쥐초등학교"
}

// ---------내 풀이----------
if(profile.age<=7){
    console.log("어린이입니다")
}else if(8<=profile.age && profile.age<=19){
    console.log("학생입니다")
}else{
    console.log("성인입니다")
}
// -------mento님 풀이(1),(2-최적화)--------
if(profile.age>=20){
    console.log("성인입니다")
}else if(profile.age >=8 && profile.age <= 19){
    console.log("학생입니다")
}else if(profile.age <=7){
    console.log("어린이입니다")
}
// ▼▼▼▼▼▼▼▼▼▼▼▼코드 최적화▼▼▼▼▼▼▼▼▼▼▼▼
if(profile.age >= 20){
    console.log("성인입니다")
}else if(profile.age >= 8){
    console.log("학생입니다")
}else if(profile.age >= 1){
    console.log("어린이입니다")
}else{
    console.log("니가 사람이냐")
}
