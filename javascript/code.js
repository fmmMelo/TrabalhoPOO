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

    var ver_nome = document.getElementById('name').value;
    var ver_dn = document.getElementById('date').value;
    var ver_email = document.getElementById('email').value;
    var ver_cpf = document.getElementById('cpf').value;
    var ver_senha = document.getElementById('pass').value;

    if(ver_nome == "" ||ver_dn == "" ||ver_email == "" ||ver_cpf == "" ||ver_senha == "")
    {
        alert("Os campos estão vazios!");
    }
    else
    {
        var add = new Lol();
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
        var envia_admin = new Lol();
        id = envia_admin.entrar_admin(nome, senha);
    }

   var envia = new Lol();
   id = envia.entrar(nome, senha);
   

}

function update()
{
    var up = new Lol();
    up.upgrade(id);

}