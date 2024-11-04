import { PmButtonsConfig } from "./pm-table-buttons-config";
import { PmTableColumnsConfig } from "./pm-table-columns-config";

export class PmTableConfig {
  /**
   * Propriedade para deixar um identificador único na tabela
   * Property to set a unique identifier in the table
   */
  public id!: string;

  /**
   * Propriedade para carregar os dados na tabela
   * Property to load data into the table
   */
  public data?: any;

  /**
   * Colunas que irão ser exibidas na tabela
   * Columns that will be displayed in the table
   */
  public selectedColumns?: PmTableColumnsConfig[] = [];

  /**
   * Todas as colunas que existem na tabela
   * All columns that exist in the table
   */
  public columns: PmTableColumnsConfig[] = [];

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

  /**
   * Campo para exibir o título da tabela
   * Field to display the table title
   */
  public displayCaption?: boolean = true;

  /**
   * Campo para exibir botões
   * Field to display buttons
   */
  public buttons?: PmButtonsConfig[];

  /**
   * Campo para configurar a subtabela
   * Field to configure the subtable
   */
  public subTableConfig?: PmTableConfig;

  /**
   * Campo para exibir os dados filhos em uma subtabela
   * Field to display child data in a subtable
   */
  public subTableId?: string;

  constructor(config?: Partial<PmTableConfig>) {
    this.columns = config?.columns ?? [];

    Object.assign(this, config);
  }
}
