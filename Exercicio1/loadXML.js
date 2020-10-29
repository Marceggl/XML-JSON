function loadXMLDocument() {
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            const respostaXML = xmlhttp.responseXML;
            console.log(respostaXML);

            listaCelulares(respostaXML);
        }
    }

    xmlhttp.open("GET", "./bDados.xml", true);

    xmlhttp.send();
}

function listaCelulares(xmlDoc) {
    const modelo = xmlDoc.getElementsByTagName("modelo");
    const armazenamento = xmlDoc.getElementsByTagName("armazenamento");
    const ram = xmlDoc.getElementsByTagName("ram");
    const so = xmlDoc.getElementsByTagName("so");
    const bateria = xmlDoc.getElementsByTagName("bateria");

    let tabela = "<tr><th>modelo</th><th>armazenamento</th><th>ram</th><th>so</th><th>bateria</th></tr>";
    for (let i = 0; i < modelo.length; i++) {
        tabela += "<tr><td>" + modelo[i].textContent + "</td><td>" +
            armazenamento[i].textContent + "</td><td>" + ram[i].textContent + "</td><td>" +
            so[i].textContent + "</td><td>" + bateria[i].textContent + "</td></tr>";
    }
    const listagem = document.getElementById("listagem");
    listagem.innerHTML = tabela;

}