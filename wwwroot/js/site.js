document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
});

function termos() {
    var idade = document.getElementById("idade").value;
    if (idade < 18 || idade > 60) {
        alert("Você não pode se cadastrar no sistema");
    } else {
        $('#termos').hide();
        $('#divForm').show();
    }
}



function createUser() {
    var idadeInformada = document.getElementById("idade").value;

    var nome = document.getElementById('NomeCompleto').value;
    var nascimentoData = document.getElementById('DataNascimento').value;
    var salario = document.getElementById('Salario').value;

    var nascimento = nascimentoData.split("-");
    var dataNascimento = new Date(parseInt(nascimento[0], 10),
        parseInt(nascimento[1], 10) - 1,
        parseInt(nascimento[2], 10));
    var diferenca = Date.now() - dataNascimento.getTime();
    var idade = new Date(diferenca);
    var idadeValidada = Math.abs(idade.getUTCFullYear() - 1970);

    var nas = nascimentoData.split('-');
    var dataFormatada = nas[2] + "/" + nas[1] + "/" + nas[0];

    if (nome == "")
        alert("O campo nome completo é obrigatório");

    if (idadeValidada != idadeInformada) {
        alert("A idade informada não corresponde com a data de nascimento informada");
    } else {
        axios.post('AddPeople', { "NomeCompleto": nome, "DataNascimento": dataFormatada, "Salario": salario }, {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        ).then(response => {
            console.log(response);
            alert("Adicionado Com sucesso")
            location.href = "/People";
        }).catch(error => {
                console.log(error);
        })
    }
    
}

function updatePeople() {
    var id = document.getElementById('idUpdate').value;
    var nome = document.getElementById('NomeCompleto').value;
    var nascimento = document.getElementById('DataNascimento').value;
    var salario = document.getElementById('Salario').value;

    axios.post('/People/EditPeople', { "Id": id, "NomeCompleto": nome, "DataNascimento": nascimento, "Salario": salario }, {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    ).then(response => {
        console.log(response);
        alert("Alterado Com sucesso")
        location.href = "/People";
    })
        .catch(error => {
            console.log(error);
        })
}

function deletePeople(id) {
    var YesOrNo = confirm("Deseja realmente excluir este cadastro!?");

    if (YesOrNo == true) {
        axios.post(`People/DeleteConfirmed/${id}`)
            .then(response => {
                console.log(response);
                alert("Cadastro apagado com sucesso")
                location.reload();
            })
            .catch(error => {
                alert("Erro ao Deletar o Cadastro")
                console.log(error);
        })
    } else {
        alert("Operação cancelada")
    }
    
}