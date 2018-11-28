var bout = document.getElementById("boutton");
var texte = document.getElementById("nomDeFamille");
bout.style.visibility="hidden";


function maFonction()
{
    if(texte.value.length > 1)
    {
        bout.style.visibility="visible";
    }
    else
    {
        bout.style.visibility="hidden";
    }
}