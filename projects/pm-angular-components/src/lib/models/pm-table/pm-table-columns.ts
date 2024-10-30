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

  constructor(config?: Partial<PmTableColumnsConfig>) {
      Object.assign(this, config);
  }
}