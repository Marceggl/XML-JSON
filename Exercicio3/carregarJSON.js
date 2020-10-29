function carregarJSON() {
    const jsonHTTP = new XMLHttpRequest();

    //Pegando o JSON
    jsonHTTP.onreadystatechange = function() {
        if (jsonHTTP.readyState == 4 && jsonHTTP.status == 200) {
            //Decodificar o Json que virá em String para o Json em si;
            const objetoJS = JSON.parse(jsonHTTP.responseText);
            //enviando o JSON para a função de busca
            /* console.log(objetoJS) */
            buscaAluno(objetoJS)
        }
    }

    jsonHTTP.open("GET", "./listaRGM.json", true);
    //Envia a solicitação para pegar o JSON
    jsonHTTP.send();
}



function buscaAluno(objetoJS) {
    let i, j = false;
    let entRGM = entrada.value;


    for (i = 0; i < 5 && j == false; i++) {
        var tabela = "<tr><th>RGM</th><th>Nome</th><th>Sobrenome</th><th>Email</th></tr>";
        if (objetoJS[i].rgm == entRGM) {
            console.log("oie");
            tabela += "<tr><td>" + objetoJS[i].rgm + "</td><td>" + objetoJS[i].email + "</td><td>" + objetoJS[i].nome.primeiro + "</td><td>" + objetoJS[i].nome.ultimo + "</td></tr>"
            j = true
        }
    }
    if (j == false) {
        alert("RGM não encontrado")
    }
    var listagem = document.getElementById("lista");
    listagem.innerHTML = tabela;
}

function veri() {
    if (entrada.value == "") {
        alert("preencha o campo")
    } else {
        carregarJSON();
    }

}