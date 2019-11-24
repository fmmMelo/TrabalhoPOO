function view(ard)
{
    if(ard == "1")
    {
        document.getElementById("tela-reg").className = "container";
        document.getElementById("tela-intro").className = "invisivel";
        document.getElementById("tela-texto").className = "invisivel";
        document.getElementById("tela-mapa").className = "invisivel";
    }

    if(ard == "3")
    {
        document.getElementById("tela-atu").className = "container";
    }

    if(ard == "4")
    {
        document.getElementById("section_inf").className = "container";
        document.getElementById("tela-intro").className = "invisivel";
        document.getElementById("tela-texto").className = "invisivel";
        document.getElementById("tela-mapa").className = "invisivel";
        document.getElementById("mapa-marcadores").className = "invisivel";
    }

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
        var get_doacao = JSON.parse(localStorage.getItem("Doacoes"));
        var get_usuario = JSON.parse(localStorage.getItem("Usuarios"));

            document.getElementById('mostra-doacao').innerHTML = " ";

            for(i = 0; i < get_doacao.length; i++)
            {

                var pega_id = get_doacao[i].id_usuario;

                document.getElementById('mostra-doacao').innerHTML += "<div style = 'margin: 10vh' ><p>Nome: "+get_usuario[pega_id].name+"</p><p>CPF: "+get_usuario[pega_id].cpf+"</p><p>Tipo: "+get_doacao[i].tipo+"</p>"+"</p><p>Quantidade: "+get_doacao[i].quant+"</p>"+"</p><p>tamanho: "+get_doacao[i].tamanho+"</p><p>Endereço: "+get_doacao[i].endereco+"</p>";
            }
    }

    else
    {
        var envia = new users();
        id = envia.entrar(nome, senha);
        
        if(id == -1)
        {
            alert("O usuario não está cadastrado!");
        }
         else
         {
             alert("você está registrado e entrou!");
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
            alert("Mensagem de erro: Faça login ou Cadastre-se para fazer sua doação!")
        }
        else
        {
            var doacao_bd = new doacao();
            doacao_bd.org(add_doacao);
        }

    }
}


function update()
{
    var up = new Lol();
    up.upgrade(id);

}

function volta(ord)
{
    id = ord;
}