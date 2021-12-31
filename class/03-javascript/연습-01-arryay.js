const classmates=['철수','영희','훈이']
// undefined
classmates[0]
// '철수'
classmates[2]
// '훈이'
classmates.includes('훈이')
// true
classmates.includes('asdfjk;lqweruiop')
// false
classmates.push('노제')
// 4
classmates
// (4) ['철수', '영희', '훈이', '노제']
classmates.pop()
// '노제'
classmates
// (3) ['철수', '영희', '훈이']
classmates.length
// 3


// ------------------------------
// [[concat : 합치기]]
let developer=['인내심','꼼꼼함','적용능력','활용능력','속도']
developer[3]
// '활용능력'
let dream=['커리어점프','성공','할수있다']
// undefined
developer.concat(dream)
(8) ['인내심', '꼼꼼함', '적용능력', '활용능력', '속도', '커리어점프', '성공', '할수있다']

