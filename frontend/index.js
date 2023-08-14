const inputSubmit = document.querySelector('#inputSubmit');
const inputText = document.querySelector("#inputText");

inputSubmit.addEventListener('click', () => {
    fetch('http://localhost:3000/login', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            text: inputText.value,
            id: Date.now()
        }),
        success:()=>{
            
        }
    })
})