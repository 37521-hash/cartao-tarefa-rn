Estrutura do projeto
```
App.js
components/
└── CartaoTarefa.js
```

Como rodar (usando Expo)
```bash
npm install -g expo-cli
npx create-expo-app cartao-tarefa
cd cartao-tarefa
npx expo start
```

O que o app faz
- `CartaoTarefa` recebe as props `titulo`, `categoria`, `prazo` e `concluida`
  e exibe todas elas na tela.
- O status usa um operador ternário: `concluida ? 'Concluída' : 'Pendente'`,
  trocando também a cor do texto (verde quando `true`, vermelho quando `false`).
- O botão "Ver Detalhes" chama `Alert.alert()` mostrando o título e o prazo
  da tarefa.
- `App.js` renderiza `CartaoTarefa` com os dados fixos: "Estudar React Native",
  categoria "Estudo", prazo "10/04/2026", `concluida={false}`.
- Toda a estilização usa `StyleSheet.create()` — nenhum estilo inline.
