function consultarCEP() {
    var cep = $("#cep").val().replace(/\D/g, '');

    if (cep != "") {

        var url = "https://viacep.com.br/ws/" + cep + "/json/";

        $.getJSON(url, function(dados) {
            if (!("erro" in dados)) {
                $("#resultado").html("<p><strong>CEP:</strong> " + dados.cep + "</p>" +
                                      "<p><strong>Logradouro:</strong> " + dados.logradouro + "</p>" +
                                      "<p><strong>Complemento:</strong> " + dados.complemento + "</p>" +
                                      "<p><strong>Bairro:</strong> " + dados.bairro + "</p>" +
                                      "<p><strong>Cidade:</strong> " + dados.localidade + "</p>" +
                                      "<p><strong>UF:</strong> " + dados.uf + "</p>");
            } else {
                $("#resultado").html("<div>CEP não encontrado.</div>");
            }
        });
    } else {
        $("#resultado").html("<div>CEP inválido.</div>");
    }
}

$(document).ready(function(){
    $('#cep').mask('00000-000');
  });