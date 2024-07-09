var formContainer=document.getElementById("formContainer")
var startContainer=document.getElementById("startContainer")
var counnnt = document.getElementById("counnnt")
function formSubmitHandler() {
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var nameError = document.getElementById("nameError")
    var emailError = document.getElementById("emailError")

    // localStorage.setItem("name", name.value)  //set item
    // console.log(localStorage.getItem("name")) //get item
    // localStorage.removeItem("name") // remove item
    nameError.className = "hide"
    emailError.className = "hide"
    if (!name.value) {
        nameError.className = "show"
        nameError.style.color = "red"
        nameError.style.marginLeft = "250px"
        nameError.style.fontSize = "26px"
        // nameError.style.marginTop = "70px"



        return
    }

    if (!email.value) {
        emailError.className = "show"
        emailError.style.color = "red"
        emailError.style.marginLeft = "250px"
        emailError.style.fontSize = "26px"
        return
    }
    localStorage.setItem("name", name.value)
    localStorage.setItem("email", email.value)
    formContainer.className = "hide"
    startContainer.className = "show"
    counnnt.className = "hide"
}