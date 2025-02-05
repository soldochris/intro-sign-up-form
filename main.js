const firstName = document.querySelector("#first_name")
const lastName = document.querySelector("#last_name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const submitBtn = document.querySelector(".submit-btn")
const errorMessage = document.querySelector(".error-message")
const iconErrors = document.querySelectorAll(".icon-error")
const emptyMessages = document.querySelectorAll(".empty-message")

submitBtn.addEventListener("click",(event) => {
  event.preventDefault()

  if(!firstName.value){
    emptyMessages[0].classList.add("visible")
    iconErrors[0].classList.add("visible")
    firstName.style.borderColor = "red"
  }

  if(!lastName.value){
    emptyMessages[1].classList.add("visible")
    iconErrors[1].classList.add("visible")
    lastName.style.borderColor = "red"
  }

  if(email.value === ""){
    iconErrors[2].classList.add("visible")
    email.style.borderColor = "red"
    emptyMessages[2].classList.add("visible")
  }
  if(!validateEmail(email) && email.value !== ""){
    errorMessage.classList.add("visible")
    iconErrors[2].classList.add("visible")
    email.style.borderColor = "red"
  }


  if(!password.value){
    iconErrors[3].classList.add("visible")
    password.style.borderColor = "red"
    emptyMessages[3].classList.add("visible")
  }

})

function validateEmail(email){
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}