import { PmTableColumnsConfig } from "./pm-table-columns";

export class PmTableConfig {
  /**
   * Propriedade para carregar os dados na tabela
   * Property to load data into the table
   */
  public data?: any;

  /**
   * Colunas que irão ser exibidas na tabela
   * Columns that will be displayed in the table
   */
  public selectedColumns?: any;

  /**
   * Todas as colunas que existem na tabela
   * All columns that exist in the table
   */
  public columns!: PmTableColumnsConfig[];

  /**
   * Ícone para ordenação crescente e decrescente
   * Icon for ascending and descending sorting
   */
  public sortIcons?: boolean = true;

  /**
   * Ícone para filtros compactados ao lado de cada coluna da tabela
   * Icon for compact filters next to each column in the table
   */
  public columnFilter?: boolean = false;

  /**
   * Campo para habilitar filtro global na tabela
   * Field to enable global filter in the table
   */
  public globalFilter?: boolean = true;

  /**
   * Campo para alterar a linguagem da tabela
   * Field to change the table language
   */
  public language?: 'en' | 'pt-br' = 'en';

  constructor(config?: Partial<PmTableConfig>) {
    Object.assign(this, config);
  }
}
