/* JavaScript para a funcionalidade de localização de franqueados */

document.addEventListener('DOMContentLoaded', function() {
    // Dados dos franqueados por região
    const franqueados = {
        'campinas': {
            nome: 'Franquia Inova Blocos Paredes Prontas Campinas',
            endereco: 'Rua Dr Mario Natividade, 936 1-141, Taquaral',
            cidade: 'Campinas',
            estado: 'SP',
            cep: '13076-112',
            telefone: '(19) 99932-2002',
            email: 'franquiainovablocos@gmail.com',
            responsavel: 'Matriz'
        },
        'sorocaba': {
            nome: 'Franquia Inova Blocos Paredes Prontas Sorocaba',
            endereco: 'Endereço do Franqueado',
            cidade: 'Sorocaba',
            estado: 'SP',
            cep: '00000-000',
            telefone: '(00) 00000-0000',
            email: 'sorocaba@inovablocos.com.br',
            responsavel: 'Franqueado Sorocaba'
        },
        'abc': {
            nome: 'Franquia Inova Blocos Paredes Prontas ABC',
            endereco: 'Endereço do Franqueado',
            cidade: 'Santo André',
            estado: 'SP',
            cep: '00000-000',
            telefone: '(00) 00000-0000',
            email: 'abc@inovablocos.com.br',
            responsavel: 'Franqueado ABC'
        },
        'pindamonhangaba': {
            nome: 'Franquia Inova Blocos Paredes Prontas Pindamonhangaba',
            endereco: 'Endereço do Franqueado',
            cidade: 'Pindamonhangaba',
            estado: 'SP',
            cep: '00000-000',
            telefone: '(00) 00000-0000',
            email: 'pindamonhangaba@inovablocos.com.br',
            responsavel: 'Franqueado Pindamonhangaba'
        },
        'curitiba': {
            nome: 'Franquia Inova Blocos Paredes Prontas Curitiba',
            endereco: 'Endereço do Franqueado',
            cidade: 'Curitiba',
            estado: 'PR',
            cep: '00000-000',
            telefone: '(00) 00000-0000',
            email: 'curitiba@inovablocos.com.br',
            responsavel: 'Franqueado Curitiba'
        },
        'brasilia': {
            nome: 'Franquia Inova Blocos Paredes Prontas Brasília',
            endereco: 'Endereço do Franqueado',
            cidade: 'Brasília',
            estado: 'DF',
            cep: '00000-000',
            telefone: '(00) 00000-0000',
            email: 'brasilia@inovablocos.com.br',
            responsavel: 'Franqueado Brasília'
        },
        'belo-horizonte': {
            nome: 'Franquia Inova Blocos Paredes Prontas Belo Horizonte',
            endereco: 'Endereço do Franqueado',
            cidade: 'Belo Horizonte',
            estado: 'MG',
            cep: '00000-000',
            telefone: '(00) 00000-0000',
            email: 'belohorizonte@inovablocos.com.br',
            responsavel: 'Franqueado Belo Horizonte'
        },
        'fortaleza': {
            nome: 'Franquia Inova Blocos Paredes Prontas Fortaleza',
            endereco: 'Endereço do Franqueado',
            cidade: 'Fortaleza',
            estado: 'CE',
            cep: '00000-000',
            telefone: '(00) 00000-0000',
            email: 'fortaleza@inovablocos.com.br',
            responsavel: 'Franqueado Fortaleza'
        }
    };

    // Função para inicializar o mapa (usando Google Maps API)
    function initMap() {
        // Esta função seria chamada quando a API do Google Maps estiver carregada
        // Aqui você adicionaria os marcadores para cada franqueado
        console.log('Mapa inicializado');
    }

    // Função para filtrar franqueados por região
    function filtrarFranqueados(regiao) {
        const franqueadosContainer = document.getElementById('franchisees-list');
        if (!franqueadosContainer) return;

        // Limpar conteúdo atual
        franqueadosContainer.innerHTML = '';

        if (regiao === 'todos') {
            // Mostrar todos os franqueados
            Object.keys(franqueados).forEach(key => {
                const franqueado = franqueados[key];
                adicionarCardFranqueado(franqueadosContainer, franqueado);
            });
        } else if (franqueados[regiao]) {
            // Mostrar apenas o franqueado da região selecionada
            adicionarCardFranqueado(franqueadosContainer, franqueados[regiao]);
        } else {
            // Região não encontrada
            franqueadosContainer.innerHTML = '<p>Nenhum franqueado encontrado nesta região.</p>';
        }
    }

    // Função para adicionar card de franqueado ao container
    function adicionarCardFranqueado(container, franqueado) {
        const card = document.createElement('div');
        card.className = 'franchisee-card';
        
        card.innerHTML = `
            <h3>${franqueado.nome}</h3>
            <div class="franchisee-info">
                <p>${franqueado.responsavel}</p>
            </div>
            <div class="franchisee-contact">
                <i class="fas fa-map-marker-alt"></i>
                <span>${franqueado.endereco}, ${franqueado.cidade} - ${franqueado.estado}, CEP ${franqueado.cep}</span>
            </div>
            <div class="franchisee-contact">
                <i class="fas fa-phone"></i>
                <span>${franqueado.telefone}</span>
            </div>
            <div class="franchisee-contact">
                <i class="fas fa-envelope"></i>
                <span>${franqueado.email}</span>
            </div>
        `;
        
        container.appendChild(card);
    }

    // Inicializar a lista de franqueados quando a página carregar
    const franqueadosContainer = document.getElementById('franchisees-list');
    const regiaoSelect = document.getElementById('regiao-select');
    
    if (franqueadosContainer) {
        // Mostrar todos os franqueados inicialmente
        Object.keys(franqueados).forEach(key => {
            const franqueado = franqueados[key];
            adicionarCardFranqueado(franqueadosContainer, franqueado);
        });
        
        // Adicionar evento de mudança ao select de região
        if (regiaoSelect) {
            regiaoSelect.addEventListener('change', function() {
                filtrarFranqueados(this.value);
            });
        }
    }

    // Formulário de interesse em franquia
    const franchiseForm = document.getElementById('franchise-form');
    if (franchiseForm) {
        franchiseForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui seria implementada a lógica de envio do formulário
            // Por enquanto, apenas simulamos uma resposta
            alert('Obrigado pelo seu interesse! Em breve nossa equipe entrará em contato.');
            franchiseForm.reset();
        });
    }
});
