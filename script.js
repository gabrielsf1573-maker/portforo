
function contato() {
    const telefone = "5599999999999";

    const mensagem = "Olá! Gostaria de conhecer os produtos da loja.";

    const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
}
