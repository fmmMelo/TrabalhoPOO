function view(ard)
{
    if(ard == "1")
    {
        document.getElementById("section_reg").className = "invisivel";
        document.getElementById("section_web").className = "invisivel";
        document.getElementById("section_atu").className = "invisivel";
        document.getElementById("section_ent").className = "section";
    }

    if(ard == "2")
    {
        document.getElementById("section_reg").className = "section";
        document.getElementById("section_web").className = "invisivel";
        document.getElementById("section_atu").className = "invisivel";
        document.getElementById("section_ent").className = "invisivel";
    }

    if(ard == "3")
    {
        document.getElementById("section_atu").className = "section";
        document.getElementById("section_web").className = "invisivel";
        document.getElementById("section_reg").className = "invisivel";
        document.getElementById("section_ent").className = "invisivel";
    }
}


var global, id;

function inserir()
{

    var password = document.getElementById("pass").value;
    var confirmpass = document.getElementById("confirm_pass").value;

    if(password == confirmpass)
    {   
        var add = new Lol();
        add.save();

        var add_bd = new Local();
        add_bd.banco(add);
    }

    else
    {
        alert("As senhas não se correspondem!");
    }


}

function enter()
{

   var nome = document.getElementById("enter_name").value;
   var senha = document.getElementById("enter_pass").value;

   var envia = new Lol();
   id = envia.entrar(nome, senha);
   

}

function update()
{
    var up = new Lol();
    up.upgrade(id);

}