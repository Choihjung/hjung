const email='codecamp@gmail.com'
// undefined
email.includes('@')
// true
email.split('@')
(2) ['codecamp', 'gmail.com']
const userMail=email.split('@')[0]
// undefined
const compay=email.split('@')[1]
// undefined
userMail
// 'codecamp'
compay
// 'gmail.com'
const maskingMail=[]
// undefined
maskingMail
[]
maskingMail.push(userMail[0])
// 1
maskingMail
// ['c']
maskingMail.push(userMail[1])
// 2
maskingMail
// (2) ['c', 'o']
maskingMail.push(userMail[2])
// 3
maskingMail.push(userMail[3])
// 4
maskingMail
// (4) ['c', 'o', 'd', 'e']
maskingMail.push('*')
// 5
maskingMail.push('*')
// 6
maskingMail.push('*')
// 7
maskingMail.push('*')
// 8
maskingMail
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
maskingMail.join('')
// 'code****'
const result=maskingMail.join('')+'@'+compay
// undefined
result
// 'code****@gmail.com'