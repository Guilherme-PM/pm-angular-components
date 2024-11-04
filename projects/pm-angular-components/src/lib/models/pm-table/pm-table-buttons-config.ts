export class PmButtonsConfig {
  /**
   * Ícone para o botão, esperado ser um nome de ícone válido ou caminho.
   * Icon for the button, expected to be a valid icon name or path.
   */
  public icon: string;

  /**
   * Título ou texto do rótulo do botão.
   * Button title or label text.
   */
  public title: string;

  /**
   * Ação a ser executada ao clicar no botão.
   * Esta função recebe o item relacionado como parâmetro.
   * Action to be executed when the button is clicked.
   * This function receives the related item as a parameter.
   */
  public action: (item: any) => void;

  /**
   * Campo para selecionar o tipo de botão
   * Field to select the button type
   */
  public options?: 'onlyText' | 'outlined' | 'raised';

  /**
   * Campo para definir a cor do botão de acordo com a gravidade
   * Field to set the button color based on severity
   */
  public severity?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger';

  constructor(config?: Partial<PmButtonsConfig>) {
    this.icon = config?.icon ?? '';
    this.title = config?.title ?? '';
    this.action = config?.action ?? (() => {});

    Object.assign(this, config);
  }
}
