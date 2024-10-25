document.getElementById('form-caminhao')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const caminhão = {
        modelo: document.getElementById('modelo').value,
        marca: document.getElementById('marca').value,
        ano: document.getElementById('ano').value,
        preco: document.getElementById('preco').value,
        descricao: document.getElementById('descricao').value
    };

    const caminhões = JSON.parse(localStorage.getItem('caminhoes')) || [];
    caminhões.push(caminhão);
    localStorage.setItem('caminhoes', JSON.stringify(caminhões));
    alert('Caminhão cadastrado!');
    this.reset(); // Limpa o formulário
});

function listarCaminhoes() {
    const caminhões = JSON.parse(localStorage.getItem('caminhoes')) || [];
    const tbody = document.querySelector('#tabela-caminhoes tbody');
    tbody.innerHTML = ''; // Limpa o conteúdo existente

    caminhões.forEach(caminhão => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${caminhão.modelo}</td>
            <td>${caminhão.marca}</td>
            <td>${caminhão.ano}</td>
            <td>${caminhão.preco}</td>
            <td><button onclick="excluirCaminhao('${caminhão.modelo}')">Excluir</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function excluirCaminhao(modelo) {
    let caminhões = JSON.parse(localStorage.getItem('caminhoes')) || [];
    caminhões = caminhões.filter(c => c.modelo !== modelo);
    localStorage.setItem('caminhoes', JSON.stringify(caminhões));
    listarCaminhoes(); // Atualiza a lista
}

// Lista os caminhões ao carregar a página
document.addEventListener('DOMContentLoaded', listarCaminhoes);