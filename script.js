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

function sendMail2(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        city : document.getElementById("city").value,
        capital : document.getElementById("capital").value,
        experience : document.getElementById("experience").value,
        why : document.getElementById("why").value,
    }

    emailjs.send("service_mpge6tm","template_hycqvl4",parms).then(alert("Email Enviado!"))
}
