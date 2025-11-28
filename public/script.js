// Selecionando elementos da página
const botaoClonar = document.querySelector("button");
const corpo = document.body;

// Função de alerta inicial
function iniciarClonagem() {
    let url = prompt("Digite a URL do site que deseja clonar:");
    if (!url) return alert("Nenhuma URL fornecida.");

    // Mostrar que começou a clonagem
    alert("Clonagem iniciada! 🚀\nA página será carregada no editor.");

    // Criar iframe para carregar o site
    let iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.style.width = "100%";
    iframe.style.height = "500px";
    iframe.style.border = "1px solid #ccc";
    iframe.style.marginTop = "20px";

    // Criar editor para modificar HTML
    let editor = document.createElement("textarea");
    editor.style.width = "100%";
    editor.style.height = "200px";
    editor.style.marginTop = "10px";
    editor.placeholder = "O HTML clonado aparecerá aqui para editar...";

    // Inserir no corpo
    corpo.appendChild(iframe);
    corpo.appendChild(editor);

    // Preencher editor com o HTML do site depois de carregar
    iframe.onload = () => {
        try {
            editor.value = iframe.contentDocument.documentElement.outerHTML;
        } catch (err) {
            editor.value = "Não foi possível acessar o HTML desta URL (restrição CORS).";
        }
    };
}

// Adicionar função ao botão
botaoClonar.onclick = iniciarClonagem;
