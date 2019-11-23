var user_vetor = new Array();
var doa_vetor = new Array();
var i, user_pega, doa_pega;

class Local
{
    banco(usuario) 
        {
           if(localStorage.length == 0)
           {
                user_vetor.push(usuario);
                localStorage.setItem("Usuarios", JSON.stringify(user_vetor));

                alert("O primeiro usuario foi cadastrado!");
           }

            else
            {
                user_pega = JSON.parse(localStorage.getItem("Usuarios"));
                user_pega.push(usuario);
                localStorage.setItem("Usuarios", JSON.stringify(user_pega));

                alert("O usuario foi cadastrado!");
            }
        }
}

class doacao
{
    org() 
        {
           if(localStorage.length == 0)
           {
                doa_vetor.push();
                localStorage.setItem("Doacoes", JSON.stringify(doa_vetor));

                alert("A primeiroa doação foi cadastrada!");
           }

            else
            {
                doa_pega = JSON.parse(localStorage.getItem("Doacoes"));
                doa_pega.push();
                localStorage.setItem("Doacoes", JSON.stringify(doa_pega));

                alert("A doação foi cadastrada!");
            }
        }
}


class doa
{
    constructor()
    {
        this.info_nome;
        this.info_cpf;
        this.endereco;
        this.tipo;
        this.quant;
        this.tamanho;
    }

    registro(od)
    {
        var info_user = JSON.parse(localStorage.getItem("Usuarios"));

        
        this.info_cpf = info_user[od].cpf;
        this.endereco = lugar.value; 
        this.tipo = tipo.value;
        this.quant = quant.value;
        this.tamanho = tamanho.value;
    }
}


class users
{
    constructor()
    {
        this.name;
        this.dn;
        this.email;
        this.cpf;
        this.pass;
    }

    save()
    {
        this.name = document.getElementById("name").value;
        this.dn = document.getElementById("date").value;
        this.email = document.getElementById("email").value;
        this.cpf = document.getElementById("cpf").value;
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
                document.getElementById("tela-reg").className = "invisivel";
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

        var nome = document.getElementById("editname").value;
        var data = document.getElementById("editdate").value;
        var email= document.getElementById("editemail").value;
        var cpf = document.getElementById("editcpf").value;
        var senha= document.getElementById("editpass").value;

        var upgrade = JSON.parse(localStorage.getItem("Usuarios"));

        upgrade[ord].name = nome;
        upgrade[ord].dn = data;
        upgrade[ord].email = email;
        upgrade[ord].cpf = cpf;
        upgrade[ord].pass = senha;

        localStorage.setItem("Usuarios", JSON.stringify(upgrade));

        alert("Usuario atualizado com sucesso!");

    }
}