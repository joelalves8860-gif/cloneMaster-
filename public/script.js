// Selecionando elementos
const botaoClonar = document.getElementById("startButton");
const botaoIA = document.getElementById("iaButton");
const editor = document.getElementById("editor");
const iframeContainer = document.getElementById("iframeContainer");

// Função para iniciar clonagem
botaoClonar.onclick = () => {
    const url = prompt("Digite a URL do site que deseja clonar:");
    if (!url) return alert("Nenhuma URL fornecida.");

    alert("Clonagem iniciada! 🚀");

    // Limpar iframe anterior
    iframeContainer.innerHTML = "";

    // Criar iframe para mostrar a página
    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframeContainer.appendChild(iframe);

    // Tentar preencher o editor com o HTML do site (pode dar problema de CORS)
    iframe.onload = () => {
        try {
            editor.value = iframe.contentDocument.documentElement.outerHTML;
        } catch (err) {
            editor.value = "Não foi possível acessar o HTML desta URL (restrição CORS).";
        }
    };
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
