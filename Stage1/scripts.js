

if(document.title.includes("Profile Card")){
   let timeContainer = document.querySelector('.time span')

   timeContainer.innerText = Date.now()


   setInterval(()=>{
      timeContainer.textContent = Date.now()
   }, 1000)

} else if(document.title == "Contact Me"){
   let nameInput = document.getElementById("full-name")
   let emailInput = document.getElementById("email")
   let subjectInput = document.getElementById("subject")
   let messageInput = document.getElementById("message")
   let nameError = document.querySelector(".name-error")
   let emailError = document.querySelector(".email-error")
   let subjectError = document.querySelector(".subject-error")
   let messageError = document.querySelector(".message-error")
   let submitButton = document.getElementById("submit")
   let successMsg = document.querySelector(".success-msg")
   


   function validateForm(){


      let valid = true;

      // Full name
      nameError.classList.toggle("show", nameInput.value.trim() == "")
      nameInput.classList.toggle("error", nameInput.value.trim() == "")
      if(valid){
         valid = nameInput.value.trim() == '' ? false : true
      }

      // Email
      emailInput.classList.toggle("error", (validateEmail(emailInput.value.trim())) == null)
      emailError.textContent = emailInput.value.trim() == "" ? "This field is required" : "Please input a valid email"
      emailError.classList.toggle("show", (validateEmail(emailInput.value.trim())) == null)
      if(valid){
         valid = validateEmail(emailInput.value.trim()) == null ? false : true
      }


      // Subject
      subjectInput.classList.toggle("error", subjectInput.value.trim() == "")
      subjectError.classList.toggle("show", subjectInput.value.trim() == "")
      if(valid){
         valid = subjectInput.value.trim() == '' ? false : true
      }

      // Message
      messageInput.classList.toggle("error", messageInput.value.trim().length < 10)
      messageError.textContent = messageInput.value.trim() == "" ? "This field is required" : "Message must be more than 10 characters"

      messageError.classList.toggle("show", messageInput.value.trim().length < 10)
      if(valid){
         valid = messageInput.value.trim().length < 10 ? false : true
      }


      if(valid){
         document.querySelector(".contact-card form").reset()
         successMsg.classList.add("reveal")

         setTimeout(()=>{
            successMsg.classList.remove("reveal")
         }, 5000)
      } else {
         window.scrollTo(0,0)
      }

   }


   function validateEmail(email){
      return String(email).match(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
         )
   }


   submitButton.addEventListener('click', (event)=>{
      event.preventDefault();

      validateForm()
   })
}




