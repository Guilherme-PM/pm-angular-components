export class PmInputTextConfig {
  label!: string;
  helpText?: string;
  type: string = 'inputText';

  constructor(config?: Partial<PmInputTextConfig>) {
    Object.assign(this, config);
  }
}