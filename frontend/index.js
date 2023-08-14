const inputSubmit = document.querySelector('#inputSubmit');
const inputText = document.querySelector("#inputText");
const listItem = document.getElementById('list-item')

inputSubmit.addEventListener('click', () => {
    fetch('http://localhost:3000/login', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            text: inputText.value,
            id: Date.now()
        })
    }).then((textObject) => 
       textObject.json()
    ).then((textObject ) => {
        const newListItem = document.createElement('li');
        newListItem.textContent = textObject.text;
        listItem.appendChild(newListItem);
        inputText.value = ''
    })
})