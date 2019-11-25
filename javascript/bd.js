var user_vetor = new Array();
var doa_vetor = new Array();
var contact_vetor = new Array();
var i, user_pega, doa_pega, contact_pega;

class Local
{
    banco(usuario) 
        {
           if(localStorage.length == 0)
           {
                user_vetor.push(usuario);
                localStorage.setItem("Usuarios", JSON.stringify(user_vetor));

                swal({
                    title: "Tudo Certo!",
                    text: "O usuário foi cadastrado!",
                    icon: "success",
                    button: "Ok!",
                  });
           }

            else
            {
                user_pega = JSON.parse(localStorage.getItem("Usuarios"));
                user_pega.push(usuario);
                localStorage.setItem("Usuarios", JSON.stringify(user_pega));

                swal({
                    title: "Tudo Certo!",
                    text: "O usuário foi cadastrado!",
                    icon: "success",
                    button: "Ok!",
                  });
            }
        }
}


class doacao
{
    org(acolhimento) 
        {
           if(localStorage.length == 0)
           {
            sweetAlert("Oops...", "Faça login ou Cadastre-se para fazer sua doação!", "error");
           }

            else
            {
                if(localStorage.length == 2)
                {

                    doa_pega = JSON.parse(localStorage.getItem("Doacoes"));
                    doa_pega.push(acolhimento);
                    localStorage.setItem("Doacoes", JSON.stringify(doa_pega));
                }
                    else
                    {
                        doa_vetor.push(acolhimento);
                        localStorage.setItem("Doacoes", JSON.stringify(doa_vetor));
                    }             
            }
        }
}


class caixa
{
    entrada(msg) 
        {
            if(localStorage.length == 0)
            {
             sweetAlert("Oops...", "Faça login ou Cadastre-se para fazer sua doação!", "error");
            }
 
             else
             {
                 if(localStorage.length == 3)
                 {
 
                     contact_pega = JSON.parse(localStorage.getItem("Solicitacoes"));
                     contact_pega.push(msg);
                     localStorage.setItem("Solicitacoes", JSON.stringify(contact_pega));
                     swal({
                        title: "Tudo Certo!",
                        text: "Sua solicitação foi enviada!",
                        icon: "success",
                        button: "Ok!",
                      });
                    }
                     else
                     {
                         contact_vetor.push(msg);
                         localStorage.setItem("Solicitacoes", JSON.stringify(contact_vetor));
                         swal({
                            title: "Tudo Certo!",
                            text: "Sua solicitação foi enviada!",
                            icon: "success",
                            button: "Ok!",
                          });
                    }             
             }
        }
}













class doa
{
    constructor()
    {
        this.id_doacao;
        this.id_usuario;
        this.endereco;
        this.tipo;
        this.quant;
        this.tamanho;
    }

    registro(od)
    {
        
        var cont_id;

        if(od == undefined)
        {
            return -1
        }
            else
            {
                var pega_cont = JSON.parse(localStorage.getItem("Doacoes"));

                if(pega_cont == null)
                {
                    cont_id = 1;

                    this.id_doacao = cont_id;
                    this.id_usuario = od;
                    this.endereco = lugar.value; 
                    this.tipo = tipo.value;
                    this.quant = quant.value;
                    this.tamanho = tamanho.value;
                }
                else
                {
                    for(i = 0; i < pega_cont.length; i++)
                    {
                        cont_id = pega_cont.length + 1;
    
                        this.id_doacao = cont_id;
                        this.id_usuario = od;
                        this.endereco = lugar.value; 
                        this.tipo = tipo.value;
                        this.quant = quant.value;
                        this.tamanho = tamanho.value;
                    }
                }
                
            }
    }
}


class contato
{
    constructor()
    {
        this.name;
        this.num; 
        this.cpf;
        this.rua;
        this.nrua;
        this.bairro;
    }

    enviar()
    {
        this.name = pega_nome.value;
        this.num = pega_num.value;
        this.cpf = pega_cpf.value;
        this.rua = pega_rua.value;
        this.nrua = pega_nrua.value;
        this.bairro = pega_bairro.value;
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
            swal("Oops...", "Não há nenhum registro cadastrado!", "error");
        }
            else
            {
                for( i = 0; i < ent.length; i++)
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

        var nome = document.getElementById("at_nome").value;
        var data = document.getElementById("at_email").value;
        var email= document.getElementById("at_cpf").value;
        var cpf = document.getElementById("at_dn").value;
        var senha= document.getElementById("at_pass").value;

        var upgrade = JSON.parse(localStorage.getItem("Usuarios"));

        upgrade[ord].name = nome;
        upgrade[ord].dn = data;
        upgrade[ord].email = email;
        upgrade[ord].cpf = cpf;
        upgrade[ord].pass = senha;

        localStorage.setItem("Usuarios", JSON.stringify(upgrade));

        swal({
            title: "Tudo Certo!",
            text: "Sua conta foi atualizada!",
            icon: "success",
            button: "Ok!",
          });

          document.getElementById("edita").className = "invisivel";
          document.getElementById("tela-doa").className = "container";
    }
}