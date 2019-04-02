const authorName = "MinhLK's porfolio"
const userInfo = `I am a senior student of IT department in Sai Gon University. After gaining
experience and knowledge at school, I want to work in a software company
which provides a professional environment in order to enhance my skills. As
I am a responsible, well-organized and a good listener.`
let i = 0
const title = document.getElementById('title')
const projects = document.getElementById('projects')
writingEffect = (speed = 70) => {
    if (i < authorName.length) {
        title.innerHTML += authorName.charAt(i++)
        setTimeout(writingEffect, speed)
    }
}
writingEffect()
document.getElementById('user-info').innerText = userInfo
setInterval(() => {
    i = 0
    title.innerHTML = ''
    writingEffect()
}, 5000)


fetchProjects = () => {
    fetch('https://api.github.com/search/repositories?q=user:minhlk&sort=stars&order=desc')
    .then(rs => rs.json())
    .then(rs => {
        let items = rs.items
        items.forEach((item) =>{
            projects.innerHTML += `
            <div class="projects-item">
            <div class="p-title">${item.name}</div>
            <hr>
            <div class="p-desc">${item.description || `Don't have description`}</div>
        
            <div class="p-tags">${item.language || 'Unknown'}</div>
            <div class="p-url"><a target="_blank" href="${item.html_url}"><span>More</span></a></div>
        </div>`
        })
    })
}
fetchProjects()