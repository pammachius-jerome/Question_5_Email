// déclaration des variables global
let saisie;



function verificationEmail() {
    saisie = document.getElementById("email").value;

    let pattern = /^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}$/i;
 
    if (pattern.test(saisie))
    {
        window.alert('La saisie est une adresse email valide !');
    }
    else
    {
        window.alert('La saisie est invalide !');
    }
}

document.getElementById("email").addEventListener("keydown", verificationEmail, false);