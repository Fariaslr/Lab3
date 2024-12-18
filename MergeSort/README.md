
# MergeSort Project

## Descrição

Este projeto é uma implementação do algoritmo de ordenação **MergeSort** em TypeScript. O MergeSort é baseado no paradigma de **dividir e conquistar**, sendo eficiente para ordenar arrays de números ou strings com complexidade de tempo.

O projeto é organizado para atender boas práticas de desenvolvimento, como separação de código em módulos e uso de tipos genéricos.

## Estrutura do Projeto

A estrutura de arquivos do projeto é a seguinte:

```
MergeSortProject
│
├── src
│   ├── DataType.ts         # Tipos genéricos utilizados no projeto
│   ├── MergeSort.ts        # Implementação do algoritmo MergeSort
│   └── index.ts            # Arquivo principal para testes
│
├── tsconfig.json           # Configurações do compilador TypeScript
├── package.json            # Configurações do projeto Node.js
├── dist/                   # Código JavaScript gerado pelo TypeScript (após compilação)
└── node_modules/           # Dependências do projeto
```

## Configuração do Ambiente

Siga os passos abaixo para configurar e executar o projeto:

### 1. Instale o Node.js

Certifique-se de que o Node.js está instalado no seu sistema. Você pode baixá-lo em [Node.js](https://nodejs.org).

### 2. Clone o repositório

Clone o repositório para o seu ambiente local:

```bash
git clone <URL_DO_REPOSITORIO>
cd MergeSortProject
```

### 3. Instale as dependências

Execute o seguinte comando para instalar as dependências:

```bash
npm install
```

### 4. Compile o projeto

Compile o código TypeScript para JavaScript:

```bash
npx tsc
```

### 5. Execute o projeto

Após compilar, execute o arquivo gerado:

```bash
node dist/index.js
```

Ou use o script do `package.json` para compilar e executar de uma vez:

```bash
npm run start
```

### 6. Execução em modo de desenvolvimento (opcional)

Se desejar recompilar automaticamente durante o desenvolvimento, use o script:

```bash
npm run dev
```

## Exemplos de Uso

No arquivo `index.ts`, você pode testar o MergeSort com diferentes tipos de dados:

### Exemplo com números:

```typescript
const numberArray = [38, 27, 43, 3, 9, 82, 10];
const mergeSort = new MergeSort<number>();
console.log("Array ordenado:", mergeSort.sort(numberArray));
```

Saída:

```
Array ordenado: [3, 9, 10, 27, 38, 43, 82]
```

### Exemplo com strings:

```typescript
const stringArray = ["banana", "apple", "cherry", "date"];
const mergeSortString = new MergeSort<string>();
console.log("Array ordenado:", mergeSortString.sort(stringArray));
```

Saída:

```
Array ordenado: ["apple", "banana", "cherry", "date"]
```

## Configuração do TypeScript

O arquivo `tsconfig.json` é configurado para compilar os arquivos TypeScript na pasta `src` e gerar a saída na pasta `dist`. Configuração básica:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  },
  "include": ["src"]
}
```

## Dependências

As dependências utilizadas no projeto são:

- **TypeScript:** Compilador para transformar código TypeScript em JavaScript.
- **Nodemon (opcional):** Monitoramento de mudanças para reiniciar automaticamente durante o desenvolvimento.

Para instalá-las, basta rodar `npm install` conforme descrito acima.

## Contribuição

Se desejar contribuir para este projeto, sinta-se à vontade para criar um fork, fazer suas alterações e enviar um pull request. Sugestões e melhorias são bem-vindas!

## Licença

Este projeto é licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).
