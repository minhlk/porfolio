const authorName = "MinhLK's porfolio"
const userInfo = `I am a senior student of IT department in Sai Gon University. After gaining
experience and knowledge at school, I want to work in a software company
which provides a professional environment in order to enhance my skills. As
I am a responsible, well-organized and a good listener.`
let i = 0
const title  = document.getElementById('title')
writingEffect = (speed = 70) =>{
    if(i < authorName.length){
        title.innerHTML += authorName.charAt(i++)
        setTimeout(writingEffect,speed)
    }
}
writingEffect()
document.getElementById('user-info').innerText = userInfo