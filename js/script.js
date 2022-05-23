const name = document.getElementById('name')
const password = document.getElementById('password')
const confirmPassword= document.getElementById('conf-password')
const phone = document.getElementById('phone')
const date = document.getElementById('date')
const time = document.getElementById('time')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')


form.addEventListener('submit',(e) =>{
    let messages=[]

    if(name.value.length<2)
    {
        messages.push('Name is too short!')
    }
    if(password.value.length<=6)
    {
        messages.push('Passowrd must be longer than 6 characters!')
    }
    if(password.value!=confirmPassword.value)
    {
        messages.push('Confirmed password does match the original')
    }
    if (phone.value.length>10 || phone.value.length<10)
    {
        messages.push('Phone number must be 10 digits long')
    }
    if(date.value.length === 0 )
    {
        messages.push('You must enter a date!')
    }
    if(time.value.length === 0 )
    {
        messages.push('You must enter specific time!')
    }
    
    
    if(messages.length>0){
        e.preventDefault()//ne pozvolqva na stranicata da submitnesh
        errorElement.innerText=messages.join(' \n')
    }
})