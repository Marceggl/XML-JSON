function carregarXML() {
    const bdAlunos = new XMLHttpRequest();

    bdAlunos.onreadystatechange = function() {
        if (bdAlunos.readyState == 4 && bdAlunos.status == 200) {
            const respostaXML = bdAlunos.responseXML;
            console.log(respostaXML);

            listaAlunos(respostaXML);
        }
    }

    bdAlunos.open("GET", "./bdAlunos.xml");
    bdAlunos.send();
}

function listaAlunos(xmlDoc) {
    const qtd = xmlDoc.getElementsByTagName("aluno");
    const rgm = xmlDoc.getElementsByTagName("rgm");
    const pNome = xmlDoc.getElementsByTagName("primeiro");
    const uNome = xmlDoc.getElementsByTagName("ultimo");
    const email = xmlDoc.getElementsByTagName("email")

    let tabela = "<tr><th>RGM</th><th>Nome</th><th>Sobrenome</th><th>Email</th></tr>";
    for (let i = 0; i < qtd.length; i++) {
        tabela += "<tr><td>" + rgm[i].textContent + "</td><td>" + pNome[i].textContent + "</td><td>" + uNome[i].textContent + "</td><td>" + email[i].textContent + "</td></tr>";
    }

    const listagem = document.getElementById("listagem");
    listagem.innerHTML = tabela;
}