//بنمسك البوتونز كلها نحطها في ليست
const buttons = document.querySelectorAll(".filter-method button");

// loop on this list
buttons.forEach(button => {
    button.addEventListener('click', function(){
       //inner loop if the button was clicked
        buttons.forEach(btn => {
            //removing the hover class from all buttons
            btn.classList.remove('active-method')
        })
        //نضيفه للبوتون اللي اتداس بس
        this.classList.add('active-method')    
    })
})