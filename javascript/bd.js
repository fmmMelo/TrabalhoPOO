var vetor = new Array();
var i, pega, id;

class Local
{
    banco(usuario) 
        {
           if(localStorage.length == 0)
           {
                vetor.push(usuario);
                localStorage.setItem("Usuarios", JSON.stringify(vetor));

                alert("O primeiro usuario foi cadastrado!");
           }

            else
            {
                pega = JSON.parse(localStorage.getItem("Usuarios"));
                pega.push(usuario);
                localStorage.setItem("Usuarios", JSON.stringify(pega));

                alert("O usuario foi cadastrado!");
            }
        }
}


class Lol
{
    constructor()
    {
        this.name;
        this.dn;
        this.email;
        this.pass;
    }

    save()
    {
        this.name = document.getElementById("name").value;
        this.dn = document.getElementById("date").value;
        this.email = document.getElementById("email").value;
        this.pass = document.getElementById("pass").value;
    }
}