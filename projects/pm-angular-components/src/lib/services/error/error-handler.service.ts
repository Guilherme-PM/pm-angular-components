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
    if (!config.displayCaption && config.globalFilter) 
      this.showWarning(translation.listError.displayCaptionGlobalFilter, translation.warn);
  }

  private showError(message: string, error: string): void {
    this.messageService.add({ severity: 'error', summary: error, detail: message });
    console.error(message);
  }

  private showWarning(message: string, warn: string): void {
    this.messageService.add({ severity: 'warn', summary: warn, detail: message });
    console.warn(message);
  }
}
