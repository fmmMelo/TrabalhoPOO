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
        document.getElementById("tela-atu").className = "section";
    }
}


var global, id;

function inserir()
{

    if(ver_nome.value == "" ||ver_dn.value == "" ||ver_email.value == "" ||ver_cpf.value == "" ||ver_senha.value == "")
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
        var envia_admin = new users();
        id = envia_admin.entrar_admin(nome, senha);
    }

   var envia = new users();
   id = envia.entrar(nome, senha);
   id = 0;
   
}

function enviar()
{
    if(tipo.value == ""|| quant.value == "" || tamanho.value == "" || lugar.value == "")
    {
        return alert("campos vazios!");
    }
    else
    {
        var envia_doacao = new doa();
        envia_doacao.registro(id);

        var doacao_bd = new doacao();
        doacao_bd.org (envia_doacao);

    }
}


function update()
{
    var up = new Lol();
    up.upgrade(id);

}