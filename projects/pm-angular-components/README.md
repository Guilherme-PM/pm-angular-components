# PmComponents

A biblioteca foi construída usando o [Angular CLI](https://github.com/angular/angular-cli) versão 18.2.10.

## Instalação

Para instalar a biblioteca, utilize o npm: `npm install pm-angular-components`.

## Importação do módulo

Apenas adicionar no imports a `PmTable`.

## Utilização do componente

<pm-table [pmTableConfig]="config"></pm-table>

## Exemplo de configuração

config: PmTableConfig = {
  columns: [
    { id: 'name', label: 'Name', type: 'text' },
    { id: 'age', label: 'Age', type: 'numeric' }
  ],
  data: [
    { name: 'John Doe', age: 30 },
    { name: 'Jane Smith', age: 25 }
  ],
  columnFilter: true,
  sortIcons: true,
  globalFilter: true,
  language: 'en'
};
