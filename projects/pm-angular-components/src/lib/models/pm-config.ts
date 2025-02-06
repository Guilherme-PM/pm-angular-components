export class PmConfig {

  /**
   * Configuração para personalizar os ícones para tipos booleanos (Verdadeiro e Falso)
   * Configuration to customize the icons for boolean types (True and False)
   */
  public booleanIcons?: {
    trueIcon?: string;
    falseIcon?: string;
  }

  constructor(config?: Partial<PmConfig>) {
    Object.assign(this, config);
  }
}