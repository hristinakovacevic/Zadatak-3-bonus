let btn = document.querySelector('button')

btn.addEventListener('click', (e)=>{
    
    e.preventDefault()
    
    let errEmail = document.querySelector('.email-js')
    let email = document.querySelector('#email')
    let msgEmail = document.querySelector('.msg-email')
    let firstName = document.querySelector('#first-name')
    let msgFirstName = document.querySelector('.msg-first-name')
    let errFirstName = document.querySelector('.name-js') 
    let lastName = document.querySelector('#last-name')
    let msgLastName = document.querySelector('.msg-last-name')
    let errLastName = document.querySelector('.lastname-js')
    let password = document.querySelector('#password')
    let msgPassword = document.querySelector('.msg-password')
    let errPassword = document.querySelector('.password-js')
    
    //for email
    let mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.value.match(mail_format)){
        errEmail.classList.add('active') 
        msgEmail.classList.add('active')
        email.style.border = '1px solid #FF7979'
    }  else { 
                errEmail.classList.remove('active')
                msgEmail.classList.remove('active')
                email.style.border = '1px solid hsl(246, 25%, 77%)'
            }
    
    //for name
    
    if(firstName.value == ''){
        
        errFirstName.classList.add('active') 
        msgFirstName.classList.add('active')
        firstName.style.border = '1px solid #FF7979'
    } else { 
        errFirstName.classList.remove('active') 
        msgFirstName.classList.remove('active')
        firstName.style.border = '1px solid hsl(246, 25%, 77%)'
    }
            
    //for lastname
    if(lastName.value == ''){
        
        errLastName.classList.add('active') 
        msgLastName.classList.add('active')
        lastName.style.border = '1px solid #FF7979'
    } else { 
        errLastName.classList.remove('active') 
        msgLastName.classList.remove('active')
        lastName.style.border = '1px solid hsl(246, 25%, 77%)'
    }
    //for password
    if(password.value == ''){
        
        errPassword.classList.add('active') 
        msgPassword.classList.add('active')
        password.style.border = '1px solid #FF7979'
    } else { 
        errPassword.classList.remove('active') 
        msgPassword.classList.remove('active')
        password.style.border = '1px solid hsl(246, 25%, 77%)'
    }
})

