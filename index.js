function displayErrorMessage(title){
  Swal.fire({
    title,
    icon: 'error',
    confirmButtonColor: '#3ac162'
  })
}

function displaySuccessMessage(infoObject){
  Swal.fire({
    title: 'Sign up successfully!',
    icon: 'success',
    html: `<div>
      <div>
        <strong>Name: </strong>${infoObject.name}
      </div>
      <div>
        <strong>Email: </strong>${infoObject.email}
      </div>
      <div>
        <strong>Job: </strong>${infoObject.job}
      </div>
    </div>`,
    showConfirmButton: false
  })
}

function checkPassword(password, confirmedPassword){

   if(password.length < 8){
     displayErrorMessage('Password must be at least 8 characters')
     return 
   }

   
   if(password.includes(Number) = false ){
     displayErrorMessage('Password must contain at least one number')
     return 
   }

  
   if (!password==confirmedPassword ){
     displayErrorMessage("Password and confirm password should match")
     return 
   }
  
  return true 
}

// TODO: use getElementById to get form element and assign to variable
 const form = document.getElementById("myForm")

function handleSubmitForm(e){
  e.preventDefault()

  
  const name = form['name'].value

  
   const email = form['mail'].value

  
   const password = form['password'].value

   
   const confirmedPassword =  form['confirm_password'].value

  if(!checkPassword(password,confirmedPassword)) return 

  
   const bio = form['bio'].value

   
   const job = form['job'].value

  // TODO: creat userInfo Object with 3 keys and corresponding values: name, email, object
   const userInfo = {name : e, email : e,object : e}

  displaySuccessMessage(userInfo)
}

// listen to onsubmit event of the form 

form.onsubmit = handleSubmitForm

