function turnOffAllPages(all){
    if(all==true){
        document.getElementById('home').hidden = true
    }            
    document.getElementById('servicos').hidden = true
    document.getElementById('sobre').hidden = true
    document.getElementById('contato').hidden = true
}

function turnOnPage(page){
    turnOffAllPages(true)
    document.getElementById(page).hidden = false
}

function sendEmail() {
    // split email
    sE = ["lucia-malaquias", "hotmail", ".com"]
    var subject = document.getElementById("subject").value
    var message = document.getElementById("message").value
    window.location.href = "mailto:" + sE[0] + "@" + sE[1] + sE[2] + "?Subject=" + subject + "&body=" + message;

    document.getElementById("subject").value = ""
    document.getElementById("message").value = ""
}

turnOffAllPages(false)