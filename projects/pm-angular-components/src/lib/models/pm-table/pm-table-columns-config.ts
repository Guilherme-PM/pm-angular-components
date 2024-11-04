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

  constructor(config?: Partial<PmTableColumnsConfig>) {
      Object.assign(this, config);
  }
}