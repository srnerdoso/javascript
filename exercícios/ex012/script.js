const devs = []
const form = document.getElementById('form')
const skillsList = document.getElementById('skillsList')


const addSkill = document.getElementById('addSkill')
let skillCount = 0
addSkill.addEventListener("click", function (ev) {
    ev.preventDefault()

    skillCount++


    const li = document.createElement('li')
    li.id = 'skill' + skillCount

    const label = document.createElement('label')
    label.htmlFor = 'skillName' + skillCount
    label.innerText = 'Nome da habilidade: '

    const input = document.createElement('input')
    input.name = 'skillName'
    input.id = 'skillName' + skillCount
    input.className = 'skill'

    skillsList.appendChild(li)
    li.appendChild(label)
    li.appendChild(input)
    }
)


const removeSkill = document.getElementById('removeSkill')
removeSkill.addEventListener("click", function (ev) {
    ev.preventDefault()

    if (skillCount === 0) {
        alert('Não é possível remover uma habilidade não adicionada!')
        } else {
        const skill = document.getElementById('skill' + skillCount)
        skillsList.removeChild(skill)
        skillCount--
        }
    }
)


const devRegister = document.getElementById('devRegister')
devRegister.addEventListener("click", function (ev) {
    ev.preventDefault()

    let name = document.getElementById('name').value
    const skill = document.getElementsByClassName('skill')
    let skills = ''

    if (name === '' && skillCount === 0) {
        alert("Por favor informe seu nome e suas habilidades como dev!")
        
    } else if (name === '' && skillCount !== 0) {
        alert("Por favor insira seu nome!")

    } else if (name !== '' && skillCount === 0) {
        alert("Por favor insira suas habilidades como dev!")

    } else {
        for (let i = 0; i < skill.length; i++) {
            skills += skill[i].value + ', '
            }
    
        devs.push(
            { name, skills }
            )
        skills = ''
    
        while (skill[0]) {
            skillsList.removeChild(document.getElementById('skill' + skillCount))
            skillCount--
        }
        document.getElementById('name').value = ''
    }

    console.log(devs)
    }
)