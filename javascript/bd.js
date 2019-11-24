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
    org(acolhimento) 
        {
           if(localStorage.length == 0)
           {
            alert("Mensagem de erro: Faça login ou Cadastre-se para fazer sua doação!");
           }

            else
            {
                if(localStorage.length == 2)
                {

                    doa_pega = JSON.parse(localStorage.getItem("Doacoes"));
                    doa_pega.push(acolhimento);
                    localStorage.setItem("Doacoes", JSON.stringify(doa_pega));
                    alert("inseriu nova doação")

                    alert("A doação foi cadastrada!");
                }
                    else
                    {
                        doa_vetor.push(acolhimento);
                        localStorage.setItem("Doacoes", JSON.stringify(doa_vetor));
                        alert("inseriu nova tabela");
                        alert("A doação foi cadastrada!");
                    }             
            }
        }
}



class doa
{
    constructor()
    {
        this.id_usuario;
        this.endereco;
        this.tipo;
        this.quant;
        this.tamanho;
    }

    registro(od)
    {
    
        if(od == undefined)
        {
            return -1
        }
            else
            {
                this.id_usuario = od;
                this.endereco = lugar.value; 
                this.tipo = tipo.value;
                this.quant = quant.value;
                this.tamanho = tamanho.value;
            }
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

    entrar(no, se)
    {
        var ent = JSON.parse(localStorage.getItem("Usuarios"));

        if(ent == null)
        {
            alert("Não há nenhum registro cadastrado!");
        }
            else
            {
                for( i = 0; i <= ent.length; i++)
                {
                    if(ent[i].name == no && ent[i].pass == se)
                    {
                        document.getElementById("edit").className = "menu";
                        document.getElementById("tela-reg").className = "invisivel";
                        return i

                    }

                 }
                        return -1
            }
    
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