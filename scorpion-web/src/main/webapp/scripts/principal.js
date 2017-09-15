function novaTab() {
    var novaTab = window.open("http://www.google.com.br", self);
}

function fechaTab() {
    window.close();
}


function abrirTabNovo() {

    //popup
    //var formNovo = window.open("file:///home/dev/estudo-front-end/paginas/cadastro.html", self,
    //  "toolbar=0,location=0,status=0,menubar=0,scrollbars=1,resizable=0,width=800,height=600");

    //nova tab
    var formNovo = window.open("file:///home/dev/estudos-html5/paginas/cadastro.html", self)


}

function abrirPopUpNovo() {

    //popup
    var formNovo = window.open("file:///home/dev/estudos-html5/paginas/cadastro.html", self,
        "directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=400,height=300");



}

function abrirPopUpEditar(idEntidade) {

    console.log(" a entidadde selecionada para edição foi : " + idEntidade);
    localStorage.setItem("idEntidade", idEntidade);

    //Tab
    var formEdicao = window.open("http://localhost:8080/scorpion-web/cadastro.html", self)
        //   window.onload = popularCadastro(idEntidade);

}



function popularCadastro(idEntidade) {


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            loadEntity(this);
        }
    };

    xhttp.open("GET", "http://localhost:8080/scorpion-web/rest/members/".concat(idEntidade), true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send(null);


}


function loadEntity(xmlhttp) {

    var obj;
    try {
        obj = JSON.parse(xmlhttp.responseText);
    } catch (e) {
        eval("dadosJSON = (" + xmlhttp.responseText + ");");
    }

    document.getElementById("edtCodigo").value = obj.id;
    document.getElementById("edtNome").value = obj.name;
    document.getElementById("edtEmail").value = obj.email;
    document.getElementById("edtFone").value = obj.phoneNumber;


}

function aoAbrirForm() {

    var idEntidade = localStorage.getItem("idEntidade");
    popularCadastro(idEntidade);

}