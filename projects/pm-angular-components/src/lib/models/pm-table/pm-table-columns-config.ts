export class PmTableColumnsConfig {
  /**
   * Propriedade para definir o ID da coluna
   * Property to define the column ID
   */
  public id!: string;

  /**
   * Rótulo da coluna
   * Column label
   */
  public label!: string;

  /**
   * Tipo de dado da coluna
   * Column data type
   */
  public type?: 'text' | 'numeric' | 'boolean' | 'date' = 'text';

  /**
   * Opção para adicionar um prefixo
   * Option to add a prefix
   */
  public prefix?: string = '';

  /**
   * Opção para adicionar um sufixo
   * Option to add a suffix
   */
  public suffix?: string = '';

  /**
   * Opção para transformar a coluna em valor monetário
   * Option to format the column as a monetary value
   */
  public currency?: string;

  /**
   * Opção para criar uma tag em volta do item exibido em tela
   * Option to add a tag around the displayed item
   * @param item O item da linha atual.
   * @returns Um objeto `TagConfig` contendo opções como `hexCode` e/ou `iconClass`.
   */
  public tag?: (item: any) => TagConfig;

  constructor(config?: Partial<PmTableColumnsConfig>) {
    // Inicializa as propriedades a partir do config, caso fornecido
    Object.assign(this, config);
  }
}

export interface TagConfig {
  hexCode: string;
  iconClass?: string;
}
