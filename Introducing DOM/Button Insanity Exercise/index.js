const container = document.querySelector('div');
for(let i = 0; i<100; i++){
    const buttons = document.createElement("button");
    buttons.innerText = "Hey!";
    container.appendChild(buttons);
} 
