document.addEventListener('DOMContentLoaded', function() {
    // Dados dos franqueados por região
    const franqueados = {
        'campinas': {
            nome: 'Franquia Inova Blocos Paredes Prontas Campinas',
            endereco: 'Endereço do Franqueado',
            cidade: 'Campinas',
            estado: 'SP',
            telefone: '(19) 99120-2340',
            responsavel: 'João Ceschi Jr',
            whatsapp: '5519991202340',
            historia: 'A Inova Blocos Paredes Prontas Campinas é a matriz da franquia, oferecendo soluções inovadoras para construção civil com paredes prontas e sustentáveis.'
        },
        'sorocaba': {
            nome: 'Franquia Inova Blocos Paredes Prontas Sorocaba',
            endereco: 'Endereço do Franqueado',
            cidade: 'Sorocaba',
            estado: 'SP',
            telefone: '(15) 99637-3177',
            responsavel: 'Douglas Teixeira',
            whatsapp: '5515996373177',
            historia: 'A Inova Blocos Paredes Prontas Sorocaba é uma franquia dedicada a oferecer soluções de construção civil com paredes prontas, focando na sustentabilidade e inovação.'
        },
        'curitiba': {
            nome: 'Franquia Inova Blocos Paredes Prontas Curitiba',
            endereco: 'Endereço do Franqueado',
            cidade: 'Curitiba',
            estado: 'PR',
            telefone: '(41) 99603-0020',
            responsavel: 'Nelson Andrade Jr',
            whatsapp: '5541996030020',
            historia: 'A Inova Blocos Paredes Prontas Curitiba traz inovação e sustentabilidade para a construção civil paranaense.'
        },
        'luziania': {
            nome: 'Franquia Inova Blocos Paredes Prontas Luziânia',
            endereco: 'Endereço do Franqueado',
            cidade: 'Luziânia',
            estado: 'GO',
            telefone: '(61) 98117-1911',
            responsavel: 'Alexandre Miranda',
            whatsapp: '5561981171911',
            historia: 'A Inova Blocos Paredes Prontas Luziânia atende a região com soluções de paredes prontas sustentáveis.'
        },
        'ribeirao-pires': {
            nome: 'Franquia Inova Blocos Paredes Prontas Ribeirão Pires',
            endereco: 'Endereço do Franqueado',
            cidade: 'Ribeirão Pires',
            estado: 'SP',
            telefone: '(11) 95697-1507',
            responsavel: 'Fábio Lima',
            whatsapp: '5511956971507',
            historia: 'A Inova Blocos Paredes Prontas Ribeirão Pires oferece soluções eficientes para a construção local.'
        },
        'vale-do-paraiba': {
            nome: 'Franquia Inova Blocos Paredes Prontas Vale do Paraíba',
            endereco: 'Endereço do Franqueado',
            cidade: 'Vale do Paraíba',
            estado: 'SP',
            telefone: '(12) 97812-8335',
            responsavel: 'Maciel e Denis',
            whatsapp: '5512978128335',
            historia: 'A franquia no Vale do Paraíba foca em eficiência e sustentabilidade na construção civil.'
        },
        'mogi-guacu': {
            nome: 'Franquia Inova Blocos Paredes Prontas Mogi Guaçu',
            endereco: 'Endereço do Franqueado',
            cidade: 'Mogi Guaçu',
            estado: 'SP',
            telefone: '(19) 99750-8024',
            responsavel: 'Matheus Moura',
            whatsapp: '5519997508024',
            historia: 'A franquia de Mogi Guaçu atende a região com soluções em paredes prontas de alta qualidade.'
        },
        'ponta-grossa': {
            nome: 'Franquia Inova Blocos Paredes Prontas Ponta Grossa',
            endereco: 'Endereço do Franqueado',
            cidade: 'Ponta Grossa',
            estado: 'PR',
            telefone: '(42) 99144-7822',
            responsavel: 'Fabrício Borges',
            whatsapp: '5542991447822',
            historia: 'A franquia de Ponta Grossa introduz soluções sustentáveis e eficientes para a construção local.'
        },
        'humaita': {
            nome: 'Franquia Inova Blocos Paredes Prontas Humaitá',
            endereco: 'Endereço do Franqueado',
            cidade: 'Humaitá',
            estado: 'AM',
            telefone: '(97) 98111-0107',
            responsavel: 'Hélio e Cassandro',
            whatsapp: '5597981110107',
            historia: 'A franquia em Humaitá atende a região amazônica com foco em soluções sustentáveis.'
        },
        'porto-velho': {
            nome: 'Franquia Inova Blocos Paredes Prontas Porto Velho',
            endereco: 'Endereço do Franqueado',
            cidade: 'Porto Velho',
            estado: 'RO',
            telefone: '(97) 98111-0107',
            responsavel: 'Hélio e Cassandro',
            whatsapp: '5597981110107',
            historia: 'A franquia em Porto Velho leva nossas soluções construtivas para Rondônia.'
        },
        'manaus': {
            nome: 'Franquia Inova Blocos Paredes Prontas Manaus',
            endereco: 'Endereço do Franqueado',
            cidade: 'Manaus',
            estado: 'AM',
            telefone: '(97) 98111-0107',
            responsavel: 'Hélio e Cassandro',
            whatsapp: '5597981110107',
            historia: 'A franquia em Manaus atende a região com ênfase em sustentabilidade e resistência climática.'
        },
        'brasilia': {
            nome: 'Franquia Inova Blocos Paredes Prontas Brasília',
            endereco: 'Endereço do Franqueado',
            cidade: 'Brasília',
            estado: 'DF',
            telefone: '(61) 99676-3320',
            responsavel: 'Emiliano',
            whatsapp: '5561996763320',
            historia: 'A franquia em Brasília oferece soluções inovadoras para a construção na capital federal.'
        }
    };

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
                <span>${franqueado.endereco}, ${franqueado.cidade} - ${franqueado.estado}</span>
            </div>
            <div class="franchisee-contact">
                <i class="fas fa-phone"></i>
                <span>${franqueado.telefone}</span>
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

    function filtrarFranqueados(regiao) {
        const franqueadosContainer = document.getElementById('franchisees-list');
        if (!franqueadosContainer) return;

        franqueadosContainer.innerHTML = '';

        if (regiao === 'todos') {
            Object.keys(franqueados).forEach(key => {
                adicionarCardFranqueado(franqueadosContainer, franqueados[key]);
            });
        } else if (franqueados[regiao]) {
            adicionarCardFranqueado(franqueadosContainer, franqueados[regiao]);
        } else {
            franqueadosContainer.innerHTML = '<p>Nenhum franqueado encontrado nesta região.</p>';
        }
    }

    const franqueadosContainer = document.getElementById('franchisees-list');
    const regiaoSelect = document.getElementById('regiao-select');

    if (franqueadosContainer) {
        Object.keys(franqueados).forEach(key => {
            adicionarCardFranqueado(franqueadosContainer, franqueados[key]);
        });

        if (regiaoSelect) {
            regiaoSelect.addEventListener('change', function () {
                filtrarFranqueados(this.value);
            });
        }
    }

    const franchiseForm = document.getElementById('franchise-form');
    if (franchiseForm) {
        franchiseForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Obrigado pelo seu interesse! Em breve nossa equipe entrará em contato.');
            franchiseForm.reset();
        });
    }
});
