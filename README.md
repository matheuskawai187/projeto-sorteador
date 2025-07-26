# 🎲 Sorteador de Números

Uma aplicação web moderna e robusta para geração de números aleatórios únicos com interface elegante e funcionalidades avançadas de validação e controle.

## 📋 Sobre o Projeto

O **Sorteador de Números** é uma ferramenta digital intuitiva que permite gerar sequências de números aleatórios únicos dentro de intervalos personalizados. Com design futurista e algoritmos otimizados, oferece uma experiência confiável para sorteios, jogos, pesquisas e aplicações que necessitem de números aleatórios.

## ✨ Funcionalidades

- 🎯 **Geração de números únicos**: Algoritmo que garante ausência de repetições
- 📊 **Intervalos customizáveis**: Defina o range mínimo e máximo desejado
- 🔢 **Quantidade flexível**: Escolha quantos números sortear
- 📈 **Ordenação automática**: Resultados apresentados em ordem crescente
- 🔄 **Sistema de reinicialização**: Limpe todos os campos e resultados
- 🛡️ **Validações inteligentes**:
  - Verificação de intervalos válidos
  - Limite de números baseado no range disponível
  - Proteção contra travamento (máximo 10.000 números)
  - Campos obrigatórios e valores mínimos

## 🖥️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica com inputs otimizados
- **CSS3**: Estilização avançada incluindo:
  - Gradientes complexos para background
  - Flexbox para layout responsivo
  - Media queries para adaptação mobile
  - Pseudo-elementos para efeitos visuais
  - Estados de botão (habilitado/desabilitado)
- **JavaScript**: Lógica robusta com:
  - Algoritmo Fisher-Yates otimizado
  - Validações em tempo real
  - Manipulação dinâmica de classes CSS
  - Sistema de controle de estado
  - Tratamento de casos extremos

## 🎨 Design

Interface com estética tecnológica e futurista:
- **Paleta de cores**:
  - Azul principal: `#1875E8` (botões e acentos)
  - Gradiente de fundo: Do azul (`#1354A5`) ao preto (`#01080E`)
  - Texto branco para contraste máximo
- **Tipografia**:
  - Chakra Petch para títulos (700)
  - Inter para textos (400, 700)
- **Elementos visuais**:
  - Background com textura de código
  - Imagem de astronauta temática
  - Bordas com glow effect
  - Textura de ruído para profundidade

## 🚀 Como Usar

1. **Clone o repositório**:
   ```bash
   git clone [url-do-repositorio]
   cd sorteador-numeros
   ```

2. **Estrutura necessária**:
   Certifique-se de ter a pasta de imagens:
   ```
   img/
   ├── ia.png
   ├── code.png
   └── Ruido.png
   ```

3. **Abra a aplicação**:
   - Abra o arquivo `index.html` em qualquer navegador moderno

4. **Realize sorteios**:
   - Digite a quantidade de números desejada
   - Defina o número inicial ("Do número")
   - Defina o número final ("Até o número")
   - Clique em "Sortear" para gerar os números
   - Use "Reiniciar" para limpar e começar novamente

## 📁 Estrutura do Projeto

```
sorteador-numeros/
├── index.html              # Página principal
├── style.css              # Estilos da aplicação
├── app.js                 # Lógica JavaScript
├── img/
│   ├── ia.png            # Imagem do astronauta
│   ├── code.png          # Background de código
│   └── Ruido.png         # Textura de ruído
└── README.md             # Documentação
```

## 🔧 Funcionalidades Técnicas

### Algoritmo de Geração
```javascript
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

### Sistema Anti-Repetição
```javascript
while (sorteados.includes(numero)) {
    numero = obterNumeroAleatorio(de, ate);
}
```

### Validações Implementadas
- **Intervalo válido**: "Do número" deve ser menor que "Até o número"
- **Quantidade possível**: Não permite sortear mais números que o intervalo permite
- **Limite de segurança**: Máximo 10.000 números para performance
- **Campos obrigatórios**: Todos os inputs devem ser preenchidos

### Sistema de Estados
```javascript
function alterarStatusBotao() {
    // Alterna entre habilitado e desabilitado
    botao.classList.toggle("container__botao-desabilitado");
}
```

## 🌟 Características Especiais

- **Performance otimizada**: Algoritmo eficiente mesmo para grandes quantidades
- **Interface responsiva**: Adapta-se a diferentes tamanhos de tela
- **Feedback visual**: Estados claros dos botões e resultados
- **Experiência fluida**: Transições suaves e interações intuitivas
- **Acessibilidade**: Labels semânticos e navegação por teclado
- **Robustez**: Tratamento completo de casos extremos

## 📱 Responsividade

O projeto inclui adaptações para diferentes dispositivos:
```css
@media screen and (max-width: 1250px) {
    .container__imagem-pessoa {
        display: none;  /* Remove imagem em telas menores */
    }
    h1 {
        font-size: 50px;  /* Reduz tamanho do título */
    }
}
```

## 🎯 Casos de Uso

### Educacionais
- **Estatística**: Demonstração de aleatoriedade
- **Matemática**: Exercícios com números aleatórios
- **Pesquisa**: Seleção aleatória de amostras

### Entretenimento
- **Jogos**: Geração de números para bingo, loteria
- **Sorteios**: Rifas, promoções, concursos
- **Decisões**: Escolhas aleatórias em grupos

### Profissionais
- **Testes**: Dados de teste para desenvolvimento
- **Simulações**: Cenários com variáveis aleatórias
- **Auditoria**: Seleção aleatória de registros

## 🛠️ Customização

### Alterar Limites
Modifique as validações no JavaScript:
```javascript
if (quantidade > 10000) {  // Altere o limite aqui
    alert('Limite máximo alterado!');
}
```

### Personalizar Visual
Ajuste as variáveis de cor no CSS:
```css
:root {
    --cor-principal: #1875E8;
    --cor-fundo: #1354A5;
}
```

### Adicionar Funcionalidades
- **Exportar resultados**: Salvar em arquivo CSV/TXT
- **Histórico**: Manter registro de sorteios anteriores
- **Configurações**: Opções avançadas de formatação

## 🔍 Melhorias Futuras

### Funcionalidades Planejadas
- **Múltiplos sorteios**: Realizar vários sorteios simultâneos
- **Pesos personalizados**: Probabilidades diferentes por número
- **Gráficos**: Visualização da distribuição dos números
- **API integration**: Fontes externas de aleatoriedade
- **Modo escuro/claro**: Alternância de temas

### Otimizações Técnicas
- **Web Workers**: Para processamento de grandes volumes
- **Progressive Web App**: Funcionalidade offline
- **Animações**: Efeitos visuais durante o sorteio
- **Testes automatizados**: Cobertura completa de código

## 🧮 Algoritmos e Performance

### Complexidade
- **Tempo**: O(n) onde n é a quantidade de números
- **Espaço**: O(n) para armazenar os resultados
- **Otimização**: Evita recálculos desnecessários

### Considerações de Performance
- Limite de 10.000 números para evitar travamento
- Ordenação eficiente com sort nativo
- Validações preventivas antes do processamento

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Add: Nova funcionalidade de exportação'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido por Matheus + Alura!

---

**Que a sorte esteja sempre ao seu favor! 🍀**
