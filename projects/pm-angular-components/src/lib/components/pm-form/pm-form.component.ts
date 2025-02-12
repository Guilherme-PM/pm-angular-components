import { Component, Input } from '@angular/core';
import { PmFormConfig, PmTableConfig } from '../../models';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PmInputText } from '../pm-input-text/pm-input-text.component';
import { PmInputTextConfig } from '../../models/pm-input-text/pm-input-text-config';
import { PanelModule } from 'primeng/panel';
import { PmCard } from '../pm-card/pm-card.component';
import { PmTable } from '../pm-table/pm-table.component';

@Component({
    selector: 'pm-form',
    standalone: true,
    imports: [PmCard, PmTable, CommonModule, InputTextModule, PmInputText, PanelModule],
    templateUrl: './pm-form.component.html',
    styleUrl: './pm-form.component.scss'
})
export class PmForm {
  @Input()
  public pmFormConfig!: PmFormConfig;

  public isInputText(field: any): field is PmInputTextConfig {
    console.log(field.type);
    return field.type === 'inputText';
  }

  public isTable(field: any): field is PmTableConfig {
    console.log(field.type);
    return field.type === 'table';
  }
}
