var vetor = new Array();
var i, pega;

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

    entrar(nome, senha)
    {
        var ent = JSON.parse(localStorage.getItem("Usuarios"));

        for( i = 0; i <= ent.length; i++)
        {
            if(ent[i].name == nome && ent[i].pass == senha)
            {
                document.getElementById("edit").className = "menu";
                document.getElementById("section_reg").className = "invisivel";
                document.getElementById("section_web").className = "section";
                document.getElementById("section_ent").className = "invisivel";
                return i
            }

        }

        alert("usuario não está cadastrado!");

    
    }

    // search(id)
    // {
    //     var busca = JSON.parse(localStorage.getItem("Usuarios"));

    //         for(i = 0; i <= busca.length; i++)
    //         {
    //             if(id == busca[i].name)
    //             {
    //                 return i
    //             }
    //         }
        
    //         return -1
    // }

    upgrade(ord)
    {

        var n = document.getElementById("editname").value;
        var d = document.getElementById("editdate").value;
        var e = document.getElementById("editemail").value;
        var p = document.getElementById("editpass").value;

        var upgrade = JSON.parse(localStorage.getItem("Usuarios"));

        upgrade[ord].name = n;
        upgrade[ord].dn = d;
        upgrade[ord].email = e;
        upgrade[ord].pass = p;

        localStorage.setItem("Usuarios", JSON.stringify(upgrade));

        alert("Usuario atualizado com sucesso!");

    }
}