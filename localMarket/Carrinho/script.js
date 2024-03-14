$(document).ready(function(){
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const listaElement = $("#lista");
 
    const totalElement = $("#total");

    function exibirCarrinho(){
        listaElement.empty();

        let totalPreco = 0;    

        $.each(carrinho, function(index, item){

            const listItem = $("<li>").text(
                `${item.descricao} - Preço: R$ ${item.preco.toFixed(2)}`
            );

            const removerButton = $("<button>").text("  => ❌")
            .css("magin-left", "10px")
            .click(function(){
                removerItemDoCarrinho(index);
            })

            listItem.append(removerButton)
            listaElement.append(listItem);
            totalPreco += item.preco;

        });
        totalElement.text(`Total: R$ ${totalPreco.toFixed(2)}`)
    }
    function removerItemDoCarrinho(index){
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        exibirCarrinho();
    }
    exibirCarrinho();
});

function gerarDocumentosWord(){
    const listaElement = document.getElementById("lista");
    const totalElement = document.getElementById("total");

    //clona a lista para evitar modificações diretas na original
    const listaClone = listaElement.cloneNode(true);

    $(listaClone).find("button").remove();

    const listaHtml = listaClone.innertHTML;
    const totalHtml = totalElement.innerHTML;

    const conteudoHtml = `
        <html>
            <head>
                <metal charset="UTF-8" />
            </head>
            <body>
                <h1>PEDIDO CONFIRMADO</h1>
                <h3>Agradecemos sua preferencias</h3>
                <br/>
                ${listaHtml}
                <br/><br/>
                ${totalHtml}
            </body>
        </html>
    `;

    const blob = new Blob([conteudoHtml], {type: "application/msword" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "carrinho.doc";
    link.click();
    document.getElementById("pedido").style.display = "block"
    
}

function successClose(){
    document.getElementById("pedido").style.display = "none"
    // $("#pedido").css({display: "none"})
}