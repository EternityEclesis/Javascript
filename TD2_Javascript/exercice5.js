var affichage = document.getElementById("affichage");

function maFonction()
{
    if(affichage.value.length < 4)
    {
        affichage.value += event.target.value;
    }
}