function view(ord)
{
    if(ord == "1")
    {
        document.getElementById("section_reg").className = "invisivel";
        document.getElementById("section_ent").className = "section";
    }
}




var global;

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



    global = JSON.parse(localStorage.getItem("Usuarios"));

    var nome = document.getElementById("enter_name").value;
    var  password = document.getElementById("enter_pass").value;

    for(var i = 0; i <= global.length; i++)
    {
        if(global[i].name == nome && global[i].pass == password)
        {
            document.getElementById("edit").className = "menu";
            alert("deu certo");
        }
    }


}