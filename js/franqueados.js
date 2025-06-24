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
            responsavel: 'Matriz',
            whatsapp: '5519999322002',
            historia: 'A Inova Blocos Paredes Prontas Campinas é a matriz da franquia, oferecendo soluções inovadoras para construção civil com paredes prontas e sustentáveis. Nossa missão é transformar o mercado de construção com eficiência e qualidade.'
        },
        'sorocaba': {
            nome: 'Franquia Inova Blocos Paredes Prontas Sorocaba',
            endereco: 'Endereço do Franqueado',
            cidade: 'Sorocaba',
            estado: 'SP',
            cep: '00000-000',
            telefone: '(00) 00000-0000',
            email: 'sorocaba@inovablocos.com.br',
            responsavel: 'Franqueado Sorocaba',
            whatsapp: '5519999322002',
            historia: 'A Inova Blocos Paredes Prontas Sorocaba é uma franquia dedicada a oferecer soluções de construção civil com paredes prontas, focando na sustentabilidade e inovação. Nossa equipe está pronta para atender suas necessidades de construção.'
        },
        'abc': {
            nome: 'Franquia Inova Blocos Paredes Prontas ABC',
            endereco: 'Endereço do Franqueado',
            cidade: 'Santo André',
            estado: 'SP',
            cep: '00000-000',
            telefone: '(00) 00000-0000',
            email: 'abc@inovablocos.com.br',
            responsavel: 'Franqueado ABC',
            whatsapp: '5519999322002',
            historia: 'A Inova Blocos Paredes Prontas ABC é uma franquia que traz inovação e sustentabilidade para a construção civil na região do ABC Paulista. Oferecemos paredes prontas de alta qualidade, com foco em eficiência e respeito ao meio ambiente.'
        },
        'pindamonhangaba': {
            nome: 'Franquia Inova Blocos Paredes Prontas Pindamonhangaba',
            endereco: 'Endereço do Franqueado',
            cidade: 'Pindamonhangaba',
            estado: 'SP',
            cep: '00000-000',
            telefone: '(00) 00000-0000',
            email: 'pindan@inovablocos.com.br',
            responsavel: 'Franqueado Pindamonhangaba',
            whatsapp: '5519999322002',
            historia: 'A Inova Blocos Paredes Prontas Pindamonhangaba é uma franquia que se destaca pela inovação na construção civil, oferecendo paredes prontas sustentáveis e eficientes. Nossa missão é transformar o mercado local com soluções de alta qualidade.'
        },
        'curitiba': {
            nome: 'Franquia Inova Blocos Paredes Prontas Curitiba',
            endereco: 'Endereço do Franqueado',
            cidade: 'Curitiba',
            estado: 'PR',
            cep: '00000-000',
            telefone: '(00) 00000-0000',
            email: 'curitiba@inovablocos.com.br',
            responsavel: 'Franqueado Curitiba',
            whatsapp: '5519999322002',
            historia: 'A Inova Blocos Paredes Prontas Curitiba é uma franquia que traz inovação e sustentabilidade para a construção civil paranaense. Oferecemos soluções de paredes prontas, focando na eficiência e qualidade dos nossos produtos.'
        },
        'brasilia': {
            nome: 'Franquia Inova Blocos Paredes Prontas Brasília',
            endereco: 'Endereço do Franqueado',
            cidade: 'Brasília',
            estado: 'DF',
            cep: '00000-000',
            telefone: '(00) 00000-0000',
            email: 'brasilia@inovablocos.com.br',
            responsavel: 'Franqueado Brasília',
            whatsapp: '5519999322002',
            historia: 'A Inova Blocos Paredes Prontas Brasília é uma franquia que se dedica a oferecer soluções inovadoras para a construção civil na capital federal. Nossas paredes prontas são sustentáveis e eficientes, atendendo às necessidades do mercado local.'
        },
        'belo-horizonte': {
            nome: 'Franquia Inova Blocos Paredes Prontas Belo Horizonte',
            endereco: 'Endereço do Franqueado',
            cidade: 'Belo Horizonte',
            estado: 'MG',
            cep: '00000-000',
            telefone: '(00) 00000-0000',
            email: 'belohorizonte@inovablocos.com.br',
            responsavel: 'Franqueado Belo Horizonte',
            whatsapp: '5519999322002',
            historia: 'A Inova Blocos Paredes Prontas Belo Horizonte é uma franquia que traz inovação e sustentabilidade para a construção civil mineira. Oferecemos paredes prontas de alta qualidade, com foco em eficiência e respeito ao meio ambiente.'
        },
        'fortaleza': {
            nome: 'Franquia Inova Blocos Paredes Prontas Fortaleza',
            endereco: 'Endereço do Franqueado',
            cidade: 'Fortaleza',
            estado: 'CE',
            cep: '00000-000',
            telefone: '(00) 00000-0000',
            email: 'fortaleza@inovablocos.com.br',
            responsavel: 'Franqueado Fortaleza',
            whatsapp: '5519999322002',
            historia: 'A Inova Blocos Paredes Prontas Fortaleza é uma franquia que se destaca pela inovação na construção civil cearense, oferecendo paredes prontas sustentáveis e eficientes. Nossa missão é transformar o mercado local com soluções de alta qualidade.'
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

    function adicionarCardFranqueado(container, franqueado, key) {
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
            ${franqueado.whatsapp ? `
                <div class="franchisee-contact">
                    <a href="https://wa.me/${franqueado.whatsapp}" target="_blank" class="whatsapp-button">
                        <i class="fab fa-whatsapp"></i> Conversar no WhatsApp
                    </a>
                </div>
            ` : ''}
            ${franqueado.historia ? `
                <div class="franchisee-contact">
                    <a href="franquias/${franqueado.cidade.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}.html" class="history-button">
                        <i class="fas fa-book"></i> História do Franqueado
                    </a>
                </div>
            ` : ''}    
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
