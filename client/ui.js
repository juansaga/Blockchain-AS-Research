const taskForm = document.querySelector('#taskForm')
let counter = 0;
taskForm.addEventListener('submit', e => {
    e.preventDefault();

    let a = taskForm["usuario"].value;
    let b = taskForm["modulo"].value;
    let c = taskForm["nota"].value;
    let nota = `{'usuario': ${a}, 'modulo': ${b}, 'nota': ${c}}`
    mempool[counter] = nota
    counter++

    let l = document.createElement('li')
    let t = document.createTextNode(nota)
    l.appendChild(t)

    document.getElementById("mempool").appendChild(l)
    
})

const minar = document.querySelector('#minar')

minar.addEventListener('submit', e => {
    e.preventDefault()
    
    blockchain.mine()

    let currentBlock = blockchain.chain.length - 1

    document.getElementById("mempool").innerText = mempool

    let l = document.createElement('li')
 
    let t = document.createElement('ol')
    t.setAttribute('class', 'box1')
    l.appendChild(t)

    for (let d of blockchain.chain[currentBlock].data){
        let k = document.createElement('li')
        let n = document.createTextNode(d)
        k.appendChild(n)
        t.appendChild(k)

    }

    document.getElementById('cadena').appendChild(l)

    counter = 0;
})