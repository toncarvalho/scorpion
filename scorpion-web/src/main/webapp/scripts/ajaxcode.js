function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xhttp.open("GET", "http://localhost:8080/scorpion-web/rest/members", true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send(null);
}

function myFunction(xmlhttp) {

    var dadosJSON;
    try {
        dadosJSON = JSON.parse(xmlhttp.responseText);
    } catch (e) {
        eval("dadosJSON = (" + xmlhttp.responseText + ");");
    }


    var tabela = "";
    tabela = " <table id=tabela>";
    tabela += " <caption>Registros</caption>";
    tabela += " <tr>";
    tabela += "<th> Código </th>";
    tabela += "<th> Nome </th>";
    tabela += "<th> Email </th>";
    tabela += "<th> Fone </th>";
    tabela += "<th class=colunaSelecao> Ações </th> ";
    tabela += "</tr> ";



    var linhas;

    for (var i = 0; i < dadosJSON.length; i++) {
        var obj = dadosJSON[i];
        var novaLinha;

        novaLinha = "<tr>";

        novaLinha += "<td>";
        novaLinha += obj.id;
        novaLinha += "</td>";

        novaLinha += "<td>";
        novaLinha += obj.name;
        novaLinha += "</td>";

        novaLinha += "<td>";
        novaLinha += obj.email;
        novaLinha += "</td>";

        novaLinha += "<td>";
        novaLinha += obj.phoneNumber;
        novaLinha += "</td>";


        novaLinha += "<td class=colunaSelecao> ";
        novaLinha += "<input type=button value=Alterar  onclick=abrirPopUpEditar(".concat(obj.id) + ")>";
        novaLinha += "</td>";


        novaLinha += "</tr>";

        if (linhas == undefined) {
            linhas = novaLinha;
        } else {
            linhas += novaLinha;
        }


    }
    tabela += linhas;
    tabela += "</table>";

    document.getElementById("tabela").innerHTML = tabela;




}