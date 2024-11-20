import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PmTableConfig } from '../../models';
import { Translation } from '../../models/translation';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService{

  constructor(private messageService: MessageService) { }

  validateConfig(config: PmTableConfig, translation: Translation): void {
    // Lança um warning se displayCaption está desativado, mas globalFilter está ativado
    // Esse cenário não impede o funcionamento, mas pode causar uma experiência subótima.
    if (!config.displayCaption && config.globalFilter) 
      this.showWarning(translation.listError.displayCaptionGlobalFilter, translation.warn);

    // Lança um erro se há uma coluna com `currency` onde o tipo não é `numeric`
    // Esse cenário impede o funcionamento correto, pois `currency` espera um valor numérico.
    const invalidCurrencyColumn = config.columns.find(x => x.type != 'numeric' && x.currency);
    if (invalidCurrencyColumn) {
      this.showError(
        `${translation.listError.invalidCurrencyColumnMessage} ${JSON.stringify(invalidCurrencyColumn, null, 2)}`,
        translation.error
      );
    }

    // Verifica a configuração da subTable para erros e warnings
    if (config.subTableConfig && !config.subTableId) 
      this.showError(translation.listError.missingSubTableConfiguration, translation.error);
    else if (config.subTableId && !config.subTableConfig) 
      this.showWarning(`${translation.listError.unnecessaryParameterWarning} subTableId`, translation.warn);
  }

  private showError(message: string, error: string): void {
    this.messageService.add({ severity: 'error', summary: error, detail: message, life: 20000 });
    console.error(message);
  }

  private showWarning(message: string, warn: string): void {
    this.messageService.add({ severity: 'warn', summary: warn, detail: message, life: 20000 });
    console.warn(message);
  }
}
