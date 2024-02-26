

export function enviarMsg(mensagem) {
    var mensagem;
    var numeroTelefone = "+5511934885500";
    var url = "https://api.whatsapp.com/send/?phone=" + encodeURIComponent(numeroTelefone) + "&text=" + encodeURIComponent(mensagem);
    console.log(url);
}
