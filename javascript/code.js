function view(ard)
{
    if(ard == "1")
    {
        document.getElementById("tela-reg").className = "container";
        document.getElementById("tela-intro").className = "invisivel";
        document.getElementById("tela-texto").className = "invisivel";
        document.getElementById("tela-mapa").className = "invisivel";
        document.getElementById("tela-doa").className = "invisivel";
        document.getElementById("tela-inf").className = "invisivel";
        document.getElementById("mapa-marcadores").className = "invisivel";
      
    }

    

    if(ard == "5")
    {
        document.getElementById("edita").className = "container";
        document.getElementById("tela-reg").className = "invisivel";
        document.getElementById("tela-intro").className = "invisivel";
        document.getElementById("tela-texto").className = "invisivel";
        document.getElementById("tela-mapa").className = "invisivel";
        document.getElementById("tela-doa").className = "invisivel";
        document.getElementById("tela-inf").className = "invisivel";
        document.getElementById("mapa-marcadores").className = "invisivel";
    }


    if(ard == "4")
    {
        document.getElementById("tela-inf").className = "container";
        document.getElementById("tela-intro").className = "invisivel";
        document.getElementById("tela-texto").className = "invisivel";
        document.getElementById("tela-mapa").className = "invisivel";
        document.getElementById("tela-doa").className = "invisivel";
        document.getElementById("tela-reg").className = "invisivel";
        document.getElementById("mapa-marcadores").className = "invisivel";

    }

}

function home(){
    window.location.href = 'index.html';
}


var global, id;

function inserir()
{

    if(name.value == "" ||date.value == "" ||email.value == "" ||cpf.value == "" ||pass.value == "")
    {
        alert("Os campos estão vazios!");
    }
    else
    {
        var add = new users();
        add.save();

        var add_bd = new Local();
        add_bd.banco(add);
    }
        
}

function enter()
{

   var nome = document.getElementById("enter_name").value;
   var senha = document.getElementById("enter_pass").value;

    if(nome == "admin" && senha == "admin")
    {

        document.getElementById("tela-reg").className = "invisivel";
        document.getElementById("banco-doacao").className = "section";
        document.getElementById("banco-solict").className = "section";

        document.getElementById("edit").className = "invisivel";
        document.getElementById("info").className = "invisivel";
        document.getElementById("enter_sig").className = "invisivel";


        var get_doacao = JSON.parse(localStorage.getItem("Doacoes"));
        var get_usuario = JSON.parse(localStorage.getItem("Usuarios"));
        var get_solict = JSON.parse(localStorage.getItem("Solicitacoes"));

            document.getElementById('mostra-doacao').innerHTML = " ";
            document.getElementById('mostra-solicitacoes').innerHTML = " ";

            for(i = 0; i < get_doacao.length; i++)
            {

                var pega_id = get_doacao[i].id_usuario;

                document.getElementById('mostra-doacao').innerHTML += "<div><h4>"+get_doacao[i].id_doacao+"° doação</h4><p>Nome: "+get_usuario[pega_id].name+"</p><p>CPF: "+get_usuario[pega_id].cpf+"</p><p>Tipo: "+get_doacao[i].tipo+"</p>"+"</p°:><p>Quantidade: "+get_doacao[i].quant+"</p>"+"</p><p>tamanho: "+get_doacao[i].tamanho+"</p><p>Endereço: "+get_doacao[i].endereco+"</p>";
            

                document.getElementById('mostra-solicitacoes').innerHTML += "<div><h4>"+i+"° Solicitação</h4></p><p>Nome: "+get_solict[i].name+"</p></p><p>Número: "+get_solict[i].num+"</p></p><p>Rua: "+get_solict[i].rua+"</p>N°: "+get_solict[i].nrua+"</p><p>Bairro: "+get_solict[i].bairro+"</p>";
            
            }
    }

    else
    {
        var envia = new users();
        id = envia.entrar(nome, senha);
        
        if(id == -1)
        {
            swal("Oops...","O usuario não está cadastrado!", "error");
        }
         else
         {
            swal({
                title: "Você entrou!",
                icon: "success",
                button: "Ok!",
              });
             document.getElementById("tela-doa").className = "container";
         }
    }

   
}

function enviar()
{
    if(tipo.value == ""|| quant.value == "" || tamanho.value == "" || lugar.value == "")
    {
        return alert("campos vazios!");
    }
    else
    {
        var add_doacao = new doa();
        var recebe = add_doacao.registro(id);

        if(recebe == -1)
        {
            swal("Oops...","Faça login ou Cadastre-se para fazer sua doação!", "error");
        }
        else
        {

            var doacao_bd = new doacao();
            doacao_bd.org(add_doacao);
            swal({
                title: "Tudo Certo!",
                text: "Obrigado pela contribuição!",
                icon: "success",
                button: "Ok!",
              });
        }

    }
}



function solicit()
{
    if(pega_nome.value == "" ||pega_num.value == "" ||pega_cpf.value == "" ||pega_rua.value == ""||pega_nrua.value == ""||pega_bairro.value == "")
    {
        swal("Oops...","Os campos estão vazios!", "error");
    }
    else
    {
        var add_contact = new contato();
        add_contact.enviar();

        var banco_contact = new caixa();
        banco_contact.entrada(add_contact);
    }
        
}


function atualizar()
{
    
    if(at_nome.value == "" ||at_dn.value == "" ||at_email.value == "" ||at_cpf.value == "" ||at_pass.value == "")
    {
        swal("Oops...","Os campos estão vazios!", "error")
    }
    else
    {
        var atu = new users();
        atu.upgrade(id);
    }

}
