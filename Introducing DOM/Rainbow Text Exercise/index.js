const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:

const rainbow = document.querySelectorAll('span')
for (let i in rainbow){
    rainbow[i].style.color = colors[i]
}
