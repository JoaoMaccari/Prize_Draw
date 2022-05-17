const pessoas = [];
let input = document.getElementById("enterInput");
let lista = document.getElementById("lista");

function addPessoa() {
    let pessoa = input.value;
    //insere o input dentro de um arrey
    if (pessoa == "") {
        alert("Insira um nome")
    }else{
        
        pessoas.push(pessoa)
    
        input.value = ""

        mostraLista();
        
    }

}

function mostraLista() {

        lista.innerHTML = " "
        for (pessoa of pessoas) {
        //criar item em um botao que esclui o nome da lista
        //nomme
        
        let item = document.createElement("li");
        item.setAttribute("class", "list-item")
        item.appendChild(document.createTextNode(pessoa))
        lista.appendChild(item);
        //botao de delete
        let btnDel = document.createElement("button");
        btnDel.setAttribute("class", "del-btn");
        btnDel.appendChild(document.createTextNode("x"));
        item.appendChild(btnDel);
        }

}

function deletaNome () {

}

function sortear () {
    //sortear um dos nomes cadastrados 
}

