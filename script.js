function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        phone : document.getElementById("phone").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_mpge6tm","template_hycqvl4",parms).then(alert("Email Enviado!"))
}