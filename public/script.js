// Selecionando elementos
const botaoClonar = document.getElementById("startButton");
const botaoIA = document.getElementById("iaButton");
const editor = document.getElementById("editor");
const iframeContainer = document.getElementById("iframeContainer");

// Função para iniciar clonagem
botaoClonar.onclick = async () => {
    const url = prompt("Digite a URL do site que deseja clonar:");
    if (!url) return alert("Nenhuma URL fornecida.");

    alert("Clonagem iniciada! 🚀");
    iframeContainer.innerHTML = "";

    try {
        const res = await fetch("/get-html", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url })
        });
        const html = await res.text();
        editor.value = html;

        const iframe = document.createElement("iframe");
        iframe.srcdoc = html;
        iframeContainer.appendChild(iframe);
    } catch (err) {
        editor.value = "Erro ao buscar HTML: " + err.message;
    }
};

// Função para IA (simulada)
botaoIA.onclick = () => {
    const conteudoAtual = editor.value;
    if (!conteudoAtual) return alert("O editor está vazio.");

    alert("IA gerando melhorias para o HTML... 🚀");

    // Simulação de IA (colocar API real depois)
    const respostaIA = <!-- IA Melhorou este HTML -->\n${conteudoAtual}\n<!-- Fim IA -->;

    editor.value = respostaIA;
};
