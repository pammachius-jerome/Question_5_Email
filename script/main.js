// déclaration des variables global
let saisie;
let message = document.getElementById("message");


function verificationEmail() {
    saisie = document.getElementById("email").value;
    if (event.key === "Enter") {

        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if (pattern.test(saisie))
        {
            message.innerHTML = '<span class="text-success">La saisie est une adresse email valide !</span>';
            // window.alert('La saisie est une adresse email valide !');
        }
        else
        {
            message.innerHTML = '<span class="text-danger">La saisie est invalide !</span>';
            // window.alert('La saisie est invalide !');
        }
    }
}

document.getElementById("email").addEventListener("keypress", verificationEmail, false);

