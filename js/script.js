const pessoas = [];
var input = document.getElementById("enterInput");
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
        for (index of pessoas) {
        //criar item em um botao que esclui o nome da lista
        //nomme
        let item = document.createElement("li");
        item.setAttribute("class", "list-item")
        item.appendChild(document.createTextNode(index))
        
        lista.appendChild(item);
        //botao de delete
    
        let btnDel = document.createElement("button");
        btnDel.setAttribute("onclick", `deletaNome(${input})`);
        btnDel.appendChild(document.createTextNode("x"));
        item.appendChild(btnDel);
        
            
        }

}

function deletaNome (pos) {

    pessoas.splice(pos, 0)
}

function sortear () {
    //sortear um dos nomes cadastrados 
}

