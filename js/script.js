const pessoas = [];
let input = document.getElementById("enterInput");
let lista = document.getElementById("lista");

function addPessoa() {
    let pessoa = String(input.value);

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
        
        lista.innerHTML = ""
        for (i in pessoas) {
        
        //crio um li para a ul
        let item = document.createElement("li");
        item.setAttribute("class", "list-item")
        
        //crio uma variavel que recebe o index
        var pessoa = document.createTextNode(pessoas[i])
        item.appendChild(pessoa)
        lista.appendChild(item);
        //botao de delete
    
        let btnDel = document.createElement("button");
        btnDel.appendChild(document.createTextNode("x"));
        btnDel.setAttribute( "onclick", `deletaNome(${i})`);
        btnDel.setAttribute("id", "del-btn")
        item.appendChild(btnDel);
        
            
        }
            
}

function deletaNome (pos) {

    pessoas.splice(pos, 1)
    mostraLista()
}

function sortear () {
    var divSorteado = document.getElementsByClassName("div-sorteado")[0]
    
    //sortear um dos nomes cadastrados
    let sorteados = pessoas.length
    var ale = Math.floor(Math.random(pessoas) * sorteados);
    for (i in pessoas) {
        
        var sortudo = pessoas[ale]
        
        divSorteado.innerHTML = `<p>O sorteado foi ${sortudo}<p>`
        
    }

    

}

