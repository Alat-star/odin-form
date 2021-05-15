const email = document.querySelector('.email');
const zip = document.querySelector('.zip');
const country = document.querySelector('.country');
const password = document.querySelector('.password');
const confam = document.querySelector('.pas-check');
const submit = document.querySelector('.submit');
const pasMatch = document.querySelector('.match');
const passGuide = document.querySelector('.pas-color');
const checkMark = document.querySelector('.checked');
const code = document.querySelector('.code');
const codeCheck = document.querySelector('.code-check');
const emailCheck = document.querySelector('.email-error');
const togglePassword = document.getElementById('togglePassword');


//email inline validation

email.addEventListener('keyup', function () {
    let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(pattern.test(email.value)){
        email.style.borderBottom =`solid #ccffcc 1px`; 
        emailCheck.style.display = `none`;
        return true;
    }
    else {
        email.style.borderBottom =`solid #e35152 1px`;
        return false;
    }
})


email.addEventListener('blur', () => {
    let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(pattern.test(email.value)){
        email.style.borderBottom =`solid #ccffcc 1px` ; 
        return true;
    }
    else {
        email.style.borderBottom =`solid #e35152 1px`;
        emailCheck.style.display = `block`;

        return false;
    }
})

//country inline validation

//zipcode inline validation

zip.addEventListener('keyup', () => {
    let pattern = /[0-9]{6}/;
    if (pattern.test(zip.value)) {
        zip.style.borderBottom =`solid #ccffcc 1px`; 
        code.parentNode.style.gridTemplateColumns = `1fr auto`;
        code.style.display = `none`;
        codeCheck.style.display = 'block';
        codeCheck.style.color = `green`;
        return true;
    }
    else {
        zip.style.borderBottom =`solid #e35152 1px`;
        codeCheck.style.display = 'none';
        code.parentNode.style.gridTemplateColumns = `1fr`;
        code.style.display = `block`;

        return false;
    }
})

zip.addEventListener('blur', () => {

})

//password validation

password.addEventListener('keyup', () => {
    let pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if(pattern.test(password.value)){  
        password.style.borderBottom =`solid #ccffcc 1px` ;
        passGuide.parentNode.style.gridTemplateColumns = `1fr auto auto`;
        passGuide.style.display = 'none';
        checkMark.style.display = 'block';
        checkMark.style.color = 'green';
        return true;
    }
    else {
        password.style.borderBottom =`solid #e35152 1px`;
        passGuide.parentNode.style.gridTemplateColumns = `1fr auto`;
        checkMark.style.display = `none`;
        return false;
    }
})

password.addEventListener('blur',  () => {
    let pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if(pattern.test(password.value)){  
        password.style.borderBottom =`solid #ccffcc 1px` ;
        passGuide.style.display = `none`; 
        passGuide.parentNode.style.gridTemplateColumns = `1fr auto auto`;
        checkMark.style.display = `block`;
        checkMark.style.color = `green`;
        return true;  
        }else{  
        password.style.borderBottom =`solid #e35152 1px`;
        passGuide.parentNode.style.gridTemplateColumns = `1fr auto`;
        passGuide.style.display = `block`;
        passGuide.style.color = `red`  
        checkMark.style.display = `none`;
        return false;  
        }  
    }) 

// eye toggle for password

togglePassword.addEventListener('click', function(e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
})


//confirm password validation

confam.addEventListener('keyup', () => {
       let pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

        if (password.value === confam.value) {
            if (pattern.test(confam.value)) {
                confam.style.borderBottom =`solid #ccffcc 1px`;
                confam.parentNode.style.gridTemplateColumns = `1fr auto`;
                document.querySelector('.confam-checked').style.display = `block`;
                document.querySelector('.confam-checked').style.color = 'green';
                pasMatch.style.display = 'none';
                return true;
            }
        }
        else {
            confam.style.borderBottom = `solid #e35152 1px`;
            confam.parentNode.style.gridTemplateColumns = `1fr`;
            document.querySelector('.confam-checked').style.display = `none`;
            pasMatch.style.display = 'block';
            return false;
        }
})

confam.addEventListener('blur', () => {
    let pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

     if (password.value === confam.value) {
         if (pattern.test(confam.value)) {
             confam.style.borderBottom =`solid #ccffcc 1px`;
             document.querySelector('.confam-checked').style.color = 'green';
             pasMatch.style.display = 'none';
             return true;
         }
     }
     else {
         confam.style.borderBottom = `solid #e35152 1px`;
         confam.parentNode.style.gridTemplateColumns = `1fr`;
         pasMatch.style.display = 'block';
         return false;
     }
})
