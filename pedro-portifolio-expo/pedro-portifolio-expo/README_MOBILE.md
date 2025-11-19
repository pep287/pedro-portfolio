# Portfolio Mobile - React Native com Expo

## Estrutura do Projeto

Este é um aplicativo de portfólio desenvolvido em React Native usando Expo e Expo Router para navegação.

### Estrutura de Pastas

```
app/
├── (tabs)/               # Telas com navegação por tabs
│   ├── index.tsx        # Home
│   ├── sobre.tsx        # Sobre o App
│   ├── experiencia-academica.tsx
│   ├── experiencia-profissional.tsx
│   ├── projetos.tsx
│   └── jogo-forca.tsx
components/              # Componentes reutilizáveis
├── Forca.tsx           # Jogo da Forca
├── Languages.tsx       # Lista de linguagens
├── Projects.tsx        # Projetos
├── Socials.tsx         # Redes sociais
├── ThemedText.tsx      # Texto com tema
├── ThemedView.tsx      # View com tema
└── HapticTab.tsx       # Tab com haptic feedback
```

## Como Adicionar sua Foto

1. Adicione sua foto de perfil em `assets/images/` com o nome `myimage.jpg`
2. A foto será automaticamente carregada na tela Home

## Como Executar

```bash
# Instalar dependências
npm install

# Iniciar o projeto
npm start

# Para Android
npm run android

# Para iOS
npm run ios

# Para Web
npm run web
```

## Tecnologias Utilizadas

- React Native
- Expo
- TypeScript
- Expo Router (navegação)
- Expo Haptics (feedback tátil)
- Expo Vector Icons

## Navegação

O app usa Expo Router com Tab Navigation. As 6 telas principais são:

1. **Home** - Apresentação pessoal com foto e descrição
2. **Sobre** - Informações sobre o app e tecnologias usadas
3. **Acadêmico** - Experiência acadêmica
4. **Profissional** - Soft skills
5. **Projetos** - Lista de projetos desenvolvidos
6. **Jogo** - Jogo da Forca interativo

## Customização

### Cores

As cores do tema estão definidas em `constants/Colors.ts`:

- Primary: `#63b3ed` (azul)
- Background Dark: `#181a20`
- Card Background: `#23272f`
- Accent: `#f6e05e` (amarelo)

### Adicionar Novos Projetos

Edite o componente `components/Projects.tsx` para adicionar mais projetos.

### Modificar Palavras do Jogo da Forca

Edite a constante `WORDS` em `components/Forca.tsx`.

## Observações

- Certifique-se de ter o Expo CLI instalado globalmente: `npm install -g expo-cli`
- Para testar em dispositivo físico, baixe o app Expo Go na App Store ou Play Store
- A imagem de perfil deve estar em formato JPG e ter dimensões de pelo menos 180x180px
